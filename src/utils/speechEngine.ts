/**
 * High-Fidelity Human-Like Speech Engine for OmniLearn
 * Optimized for natural, warm, clean, and slow-paced pronunciation
 */

// Module-level reference to prevent Chromium garbage collection during speech
let activeUtterances: SpeechSynthesisUtterance[] = [];

/**
 * Rank and find the most human, natural, warm neural voice available in the browser.
 */
export const getBestHumanVoice = (langPrefix: string = 'en'): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Filter voices for language prefix (e.g. 'en')
  const matchingVoices = voices.filter((v) => v.lang.toLowerCase().startsWith(langPrefix.toLowerCase()));
  if (matchingVoices.length === 0) return voices[0] || null;

  // Score candidate voices based on neural/natural quality indicators
  const scoreVoice = (v: SpeechSynthesisVoice): number => {
    let score = 0;
    const name = v.name.toLowerCase();

    // Microsoft Natural Neural voices
    if (name.includes('natural') || name.includes('online')) score += 120;
    if (name.includes('jenny') || name.includes('aria') || name.includes('sonia') || name.includes('libby')) score += 90;
    if (name.includes('nanami') || name.includes('keita') || name.includes('aoi') || name.includes('daichi') || name.includes('shiori')) score += 130;

    // Apple High Quality / Enhanced voices
    if (name.includes('premium') || name.includes('enhanced')) score += 110;
    if (name.includes('samantha') || name.includes('ava') || name.includes('serena') || name.includes('victoria') || name.includes('karen')) score += 80;
    if (name.includes('kyoko') || name.includes('otoya') || name.includes('hattori')) score += 120;

    // Google Neural / Journey voices
    if (name.includes('journey') || name.includes('wavenet') || name.includes('neural')) score += 100;
    if (name.includes('google us english') || name.includes('google uk english female')) score += 75;
    if (name.includes('google 日本語') || name.includes('google japanese')) score += 120;

    // Female indicator preference (sweet, warm, friendly teacher tone)
    if (name.includes('female') || name.includes('woman')) score += 40;

    // Standard accents
    if (v.lang === 'ja-JP' || v.lang === 'ja_JP' || v.lang === 'ja') score += 50;
    if (v.lang === 'en-US' || v.lang === 'en_US') score += 20;
    if (v.lang === 'en-GB' || v.lang === 'en_GB') score += 15;

    // Penalize robotic, compact, or mechanical synthesizer voices
    if (name.includes('espeak') || name.includes('compact') || name.includes('desktop') || name.includes('alex')) score -= 80;

    return score;
  };

  return matchingVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || matchingVoices[0];
};

/**
 * Clean text to remove any Khmer characters, "Capital" prefixes,
 * or unnecessary parentheses so speech is 100% clean English.
 */
export const cleanTextForSpeech = (rawText: string): string => {
  if (!rawText) return '';
  return rawText
    // Remove Khmer Unicode range
    .replace(/[\u1780-\u17FF\u19E0-\u19FF]/g, '')
    // Remove "Capital" or "capital" prefix
    .replace(/\b[Cc]apital\s+/g, '')
    // Remove parentheses and their contents if they are explanations
    .replace(/\([^)]*\)/g, '')
    // Clean multiple spaces
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Speaks an English letter (A-Z) cleanly at rate = 0.65.
 * Never says "Capital" and never reads Khmer sounds.
 * Example: clicking "A a" speaks solely "A".
 */
export const speakCleanLetter = (
  rawLetter: string,
  onStart?: () => void,
  onEnd?: () => void
): void => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  activeUtterances = [];

  // Extract only the single uppercase English letter
  const match = rawLetter.match(/[a-zA-Z]/);
  const cleanLetter = match ? match[0].toUpperCase() : rawLetter.trim();

  const humanVoice = getBestHumanVoice('en');
  const utterance = new SpeechSynthesisUtterance(cleanLetter);
  if (humanVoice) utterance.voice = humanVoice;
  utterance.lang = humanVoice ? humanVoice.lang : 'en-US';
  utterance.rate = 0.65; // User requirement: 0.65 for letters
  utterance.pitch = 1.02;
  utterance.volume = 1.0;

  activeUtterances = [utterance];
  onStart?.();

  utterance.onend = () => {
    activeUtterances = [];
    onEnd?.();
  };

  utterance.onerror = () => {
    activeUtterances = [];
    onEnd?.();
  };

  window.speechSynthesis.speak(utterance);
};

/**
 * Backward-compatible alias for speakTeacherLetter:
 * User requested: DO NOT read Khmer sound or "Capital A", read only pure English letter.
 */
export const speakTeacherLetter = (
  letter: string,
  _khmerSound?: string,
  onStart?: () => void,
  onEnd?: () => void
): void => {
  speakCleanLetter(letter, onStart, onEnd);
};

/**
 * Speaks a single English vocabulary word at rate = 0.65.
 * Strictly reads only the single word.
 */
export const speakSingleWord = (
  rawWord: string,
  onStart?: () => void,
  onEnd?: () => void
): void => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  const cleanWord = cleanTextForSpeech(rawWord);
  if (!cleanWord) return;

  window.speechSynthesis.cancel();
  activeUtterances = [];

  const humanVoice = getBestHumanVoice('en');
  const utterance = new SpeechSynthesisUtterance(cleanWord);
  if (humanVoice) utterance.voice = humanVoice;
  utterance.lang = humanVoice ? humanVoice.lang : 'en-US';
  utterance.rate = 0.65; // User requirement: 0.65 for single words
  utterance.pitch = 1.02;
  utterance.volume = 1.0;

  activeUtterances = [utterance];
  onStart?.();

  utterance.onend = () => {
    activeUtterances = [];
    onEnd?.();
  };

  utterance.onerror = () => {
    activeUtterances = [];
    onEnd?.();
  };

  window.speechSynthesis.speak(utterance);
};

/**
 * Speaks general English text (sentences, dialogues, paragraphs)
 * with user requirement rate = 0.7 for full sentences (or 0.65 if single word).
 */
export const speakNaturalEnglish = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void,
  customRate?: number
): void => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  const clean = cleanTextForSpeech(text);
  if (!clean) return;

  window.speechSynthesis.cancel();
  activeUtterances = [];

  const humanVoice = getBestHumanVoice('en');

  // Insert gentle rhythm pauses after punctuation for natural breath pacing
  const formattedText = clean.replace(/([.?!,])/g, '$1 ');

  // Determine rate: user requested 0.65 for single words, 0.7 for sentences
  const isSingleWord = !clean.includes(' ') && clean.length > 0;
  const targetRate = customRate !== undefined 
    ? customRate 
    : (isSingleWord ? 0.65 : 0.7);

  const utterance = new SpeechSynthesisUtterance(formattedText);
  if (humanVoice) utterance.voice = humanVoice;
  utterance.lang = humanVoice ? humanVoice.lang : 'en-US';
  utterance.rate = targetRate;
  utterance.pitch = 1.02;
  utterance.volume = 1.0;

  activeUtterances = [utterance];
  onStart?.();

  utterance.onend = () => {
    activeUtterances = [];
    onEnd?.();
  };

  utterance.onerror = () => {
    activeUtterances = [];
    onEnd?.();
  };

  window.speechSynthesis.speak(utterance);
};

export const speakElementaryEnglish = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): void => {
  // Use user specified sentence rate 0.7 or word rate 0.65
  const isSingleWord = !cleanTextForSpeech(text).includes(' ');
  speakNaturalEnglish(text, onStart, onEnd, isSingleWord ? 0.65 : 0.7);
};

export const speakIntermediateEnglish = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): void => {
  // Use user specified sentence rate 0.7 or word rate 0.65
  const isSingleWord = !cleanTextForSpeech(text).includes(' ');
  speakNaturalEnglish(text, onStart, onEnd, isSingleWord ? 0.65 : 0.7);
};

/**
 * Cleans text for pure Japanese TTS speech:
 * Strips Khmer unicode, Romaji explanations in parentheses,
 * and ensures only genuine Japanese characters (Hiragana, Katakana, Kanji)
 * or numbers are spoken.
 */
export const cleanJapaneseTextForSpeech = (rawText: string): string => {
  if (!rawText) return '';
  return rawText
    // Remove Khmer Unicode characters
    .replace(/[\u1780-\u17FF\u19E0-\u19FF]/g, '')
    // Remove explanatory content in parentheses like (watashi), (arigatou)
    .replace(/\([a-zA-Z0-9\s.,'~-]+\)/g, '')
    // If Japanese characters are present, strip any standalone Latin words
    .replace(/\b[A-Za-z]+\b/g, (match, _offset, str) => {
      if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(str)) {
        return '';
      }
      return match;
    })
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Japanese Speech Synthesis Function
 * Meets user requirement:
 * utterance.lang = 'ja-JP';
 * utterance.rate = 0.65; // slow and clear
 * Only pure Japanese spoken, no Khmer or English mixing.
 */
export const speakJapanese = (
  rawText: string,
  onStart?: () => void,
  onEnd?: () => void,
  customRate: number = 0.65
): void => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  const clean = cleanJapaneseTextForSpeech(rawText);
  if (!clean) return;

  window.speechSynthesis.cancel();
  activeUtterances = [];

  const jaVoice = getBestHumanVoice('ja');
  const utterance = new SpeechSynthesisUtterance(clean);
  if (jaVoice) utterance.voice = jaVoice;
  utterance.lang = 'ja-JP'; // User requirement: ja-JP
  utterance.rate = customRate; // User requirement: 0.65
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  activeUtterances = [utterance];
  onStart?.();

  utterance.onend = () => {
    activeUtterances = [];
    onEnd?.();
  };

  utterance.onerror = () => {
    activeUtterances = [];
    onEnd?.();
  };

  window.speechSynthesis.speak(utterance);
};
