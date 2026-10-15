/**
 * High-Fidelity Human-Like Speech Engine for OmniLearn
 * Optimized for natural, warm, melodic, and slow-paced pronunciation
 */

// Module-level reference to prevent Chromium garbage collection during speech
let activeUtterances: SpeechSynthesisUtterance[] = [];

// Phonetic fallback mapping for Khmer pronunciations when no Khmer TTS engine is installed
export const PHONETIC_KHMER_MAP: Record<string, string> = {
  'អេ': 'ay',
  'ប៊ី': 'bee',
  'ស៊ី': 'see',
  'ឌី': 'dee',
  'អ៊ី': 'ee',
  'អែហ្វ': 'eff',
  'ជី': 'jee',
  'អេក': 'aych',
  'អាយ': 'eye',
  'ជេ': 'jay',
  'ខេ': 'kay',
  'អែល': 'ell',
  'អិម': 'em',
  'អិន': 'en',
  'អូ': 'oh',
  'ភី': 'pee',
  'ឃ្យូ': 'kyoo',
  'អា': 'ahr',
  'អេស': 'ess',
  'ធី': 'tee',
  'យូ': 'yoo',
  'វី': 'vee',
  'ដាប់បែលយូ': 'double you',
  'អ៊ិច': 'ex',
  'វ៉ាយ': 'why',
  'ហ្សិត': 'zed',
};

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

    // Microsoft Natural Neural voices (highest quality on Windows & Edge/Chrome)
    if (name.includes('natural') || name.includes('online')) score += 120;
    if (name.includes('jenny') || name.includes('aria') || name.includes('sonia') || name.includes('libby')) score += 90;

    // Apple High Quality / Enhanced voices (highest quality on macOS/iOS)
    if (name.includes('premium') || name.includes('enhanced')) score += 110;
    if (name.includes('samantha') || name.includes('ava') || name.includes('serena') || name.includes('victoria') || name.includes('karen')) score += 80;

    // Google Neural / Journey voices (Android / Chrome)
    if (name.includes('journey') || name.includes('wavenet') || name.includes('neural')) score += 100;
    if (name.includes('google us english') || name.includes('google uk english female')) score += 75;

    // Female indicator preference (sweet, warm, friendly teacher tone)
    if (name.includes('female') || name.includes('woman')) score += 40;

    // US or UK English preference for standard phonics
    if (v.lang === 'en-US' || v.lang === 'en_US') score += 20;
    if (v.lang === 'en-GB' || v.lang === 'en_GB') score += 15;

    // Penalize robotic, compact, or mechanical synthesizer voices
    if (name.includes('espeak') || name.includes('compact') || name.includes('desktop') || name.includes('alex')) score -= 80;

    return score;
  };

  return matchingVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || matchingVoices[0];
};

/**
 * Look for a Khmer voice if available on the system
 */
export const getKhmerVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => v.lang.toLowerCase().includes('km') || v.name.toLowerCase().includes('khmer')) || null;
};

/**
 * Speaks a Letter and its Khmer Phonics Sound with human pacing,
 * gentle breath pause, and warm natural cadence.
 *
 * Pattern: [Letter] + (gentle pause) + [Khmer Sound]
 * Example: "A" ... (pause) ... "អេ"
 */
export const speakTeacherLetter = (
  letter: string,
  khmerSound: string,
  onStart?: () => void,
  onEnd?: () => void
): void => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  // Stop any previous speech cleanly
  window.speechSynthesis.cancel();
  activeUtterances = [];

  const humanVoice = getBestHumanVoice('en');
  const khmerVoice = getKhmerVoice();
  const phoneticFallback = PHONETIC_KHMER_MAP[khmerSound] || khmerSound;

  onStart?.();

  // 1. First Utterance: The English Letter (Warm, slow, well-enunciated)
  const uttLetter = new SpeechSynthesisUtterance(letter);
  if (humanVoice) uttLetter.voice = humanVoice;
  uttLetter.lang = humanVoice ? humanVoice.lang : 'en-US';
  uttLetter.rate = 0.78; // Slow, articulate, friendly teacher cadence
  uttLetter.pitch = 1.02; // Warm, natural vocal pitch
  uttLetter.volume = 1.0;

  // 2. Second Utterance: The Khmer Sound
  const uttSoundText = khmerVoice ? khmerSound : phoneticFallback;
  const uttSound = new SpeechSynthesisUtterance(uttSoundText);
  if (khmerVoice) {
    uttSound.voice = khmerVoice;
    uttSound.lang = 'km-KH';
  } else if (humanVoice) {
    uttSound.voice = humanVoice;
    uttSound.lang = humanVoice.lang;
  }
  uttSound.rate = 0.78;
  uttSound.pitch = 1.02;
  uttSound.volume = 1.0;

  activeUtterances = [uttLetter, uttSound];

  uttLetter.onend = () => {
    // Gentle natural breath pause between letter and sound (260ms)
    setTimeout(() => {
      try {
        window.speechSynthesis.speak(uttSound);
      } catch {
        onEnd?.();
      }
    }, 260);
  };

  uttLetter.onerror = () => {
    activeUtterances = [];
    onEnd?.();
  };

  uttSound.onend = () => {
    activeUtterances = [];
    onEnd?.();
  };

  uttSound.onerror = () => {
    activeUtterances = [];
    onEnd?.();
  };

  window.speechSynthesis.speak(uttLetter);
};

/**
 * Speaks general English text (words, sentences, dialogues)
 * with slow, clear pacing, natural intonation, and gentle rhythm.
 */
export const speakNaturalEnglish = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void,
  customRate?: number
): void => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  activeUtterances = [];

  const humanVoice = getBestHumanVoice('en');

  // Insert gentle rhythm pauses after punctuation for natural breath pacing
  const formattedText = text.replace(/([.?!,])/g, '$1 ');

  const utterance = new SpeechSynthesisUtterance(formattedText);
  if (humanVoice) utterance.voice = humanVoice;
  utterance.lang = humanVoice ? humanVoice.lang : 'en-US';
  utterance.rate = customRate !== undefined ? customRate : 0.78; // Slow, articulate, friendly cadence
  utterance.pitch = 1.02; // Warm and inviting
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
 * Specifically tuned for Box 3 (Elementary Level) with rate = 0.6
 * Ultra-clear, steady, slow enunciation so learners grasp every syllable.
 */
export const speakElementaryEnglish = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): void => {
  speakNaturalEnglish(text, onStart, onEnd, 0.6);
};

/**
 * Specifically tuned for Box 4 (Intermediate Level) with rate = 0.65
 * Natural, fluent yet crisp and steady enunciation for intermediate learners.
 */
export const speakIntermediateEnglish = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): void => {
  speakNaturalEnglish(text, onStart, onEnd, 0.65);
};


