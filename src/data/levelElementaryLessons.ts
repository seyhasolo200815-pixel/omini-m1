export interface VocabularyWord {
  word: string;
  khmerSound: string;
  meaningKhmer: string;
  example: string;
  exampleKhmer?: string;
  phoneticDetail?: string;
}

export interface DialogueLine {
  speaker: string;
  speakerKhmer: string;
  text: string;
  khmerSound: string;
  meaningKhmer: string;
}

export interface GrammarRule {
  formula: string;
  explanation: string;
  subRules?: { title: string; detail: string }[];
  examples: {
    english: string;
    khmerSound: string;
    khmerMeaning: string;
    type?: string;
  }[];
}

export interface ParagraphItem {
  titleEnglish: string;
  titleKhmer: string;
  englishText: string;
  khmerMeaning: string;
}

export interface SentenceComboItem {
  sentence1: string;
  sentence2: string;
  linker: string;
  combined: string;
  meaningKhmer: string;
}

export interface LevelElementaryLesson {
  id: number;
  unitNumber: string;
  titleKhmer: string;
  titleEnglish: string;
  duration: string;
  descriptionKhmer: string;
  grammarRule?: GrammarRule;
  vocabulary: VocabularyWord[];
  dialogue?: DialogueLine[];
  paragraph?: ParagraphItem;
  sentenceCombos?: SentenceComboItem[];
  samplePhrases: {
    english: string;
    khmerSound: string;
    khmerMeaning: string;
  }[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  quiz: {
    question: string;
    questionKhmer: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const LEVEL_ELEMENTARY_LESSONS: LevelElementaryLesson[] = [
  // =========================================================================
  // LESSON 01: អតីតកាលជាមួយកិរិយាស័ព្ទទៀងទាត់ (Past Simple: Regular Verbs)
  // =========================================================================
  {
    id: 1,
    unitNumber: 'មេរៀនទី ០១',
    titleKhmer: 'អតីតកាលជាមួយកិរិយាស័ព្ទទៀងទាត់',
    titleEnglish: 'Past Simple: Regular Verbs',
    duration: '៣០ នាទី',
    descriptionKhmer: 'ស្វែងយល់ពីក្បួនថែម -ed និងច្បាប់បញ្ចេញសំឡេងទាំង ៣ (/t/, /d/, /ɪd/) ព្រមទាំងបញ្ជីពាក្យ ២០ ពាក្យ និងប្រយោគគំរូ ៨ ប្រយោគ។',
    grammarRule: {
      formula: 'Affirmative: S + Verb-ed + O | Negative: S + didn\'t + V(base) | Question: Did + S + V(base)?',
      explanation: 'កិរិយាស័ព្ទទៀងទាត់ (Regular Verbs) ត្រូវថែម -ed នៅពេលនិយាយពីសកម្មភាពក្នុងអតីតកាល។ ការបញ្ចេញសំឡេងចុង -ed មាន ៣ របៀប៖',
      subRules: [
        {
          title: '១. បញ្ចេញសំឡេង /t/ (Voiceless sounds):',
          detail: 'នៅពេលពាក្យដើមបញ្ចប់ដោយសំឡេងគ្មានរំញ័រដូចជា /p/, /k/, /f/, /s/, /ʃ/ (sh), /tʃ/ (ch) ឧ. worked, watched, cooked, helped។'
        },
        {
          title: '២. បញ្ចេញសំឡេង /d/ (Voiced sounds):',
          detail: 'នៅពេលពាក្យដើមបញ្ចប់ដោយសំឡេងមានរំញ័រដូចជា ស្រៈ ឬ /b/, /g/, /v/, /z/, /m/, /n/, /l/ ឧ. played, cleaned, lived, listened, opened។'
        },
        {
          title: '៣. បញ្ចេញសំឡេង /ɪd/ ឬ /əd/ (បញ្ចប់ដោយ T ឬ D):',
          detail: 'នៅពេលពាក្យដើមបញ្ចប់ដោយអក្សរ T ឬ D ត្រូវបញ្ចេញជាព្យាង្គបន្ថែម ឧ. visited, wanted, needed, decided, started, waited។'
        }
      ],
      examples: [
        {
          english: 'I worked at an international school last year.',
          khmerSound: 'អាយ វើកថ៍ អែត អេន អ៊ីនធើណេសិនណល ស្គូល ឡាស យា។',
          khmerMeaning: 'ខ្ញុំបានធ្វើការនៅសាលាអន្តរជាតិមួយកាលពីឆ្នាំមុន (/t/ sound)។'
        },
        {
          english: 'She played badminton with her sister yesterday.',
          khmerSound: 'ស្ស៊ី ផ្លេដ ប៊ែតមីនថិន វីត ហឺ ស៊ីសធើ យេសធើដេ។',
          khmerMeaning: 'នាងបានលេងវាយសីជាមួយប្អូនស្រីរបស់នាងកាលពីម្សិលមិញ (/d/ sound)។'
        },
        {
          english: 'We visited Angkor Wat in Siem Reap last month.',
          khmerSound: 'វី វីស៊ីធីដ អង្គរវត្ត អ៊ីន សៀមរាប ឡាស ម៉ានថ៍។',
          khmerMeaning: 'ពួកយើងបានទៅទស្សនាប្រាសាទអង្គរវត្តនៅខេត្តសៀមរាបកាលពីខែមុន (/ɪd/ sound)។'
        },
        {
          english: 'They watched a funny comedy movie last night.',
          khmerSound: 'ដេ វ៉ចថ៍ អឹ ហ្វាន់នី ខមមីឌី មូហ៊្វី ឡាស ណាយថ៍។',
          khmerMeaning: 'ពួកគេបានមើលខ្សែភាពយន្តកំប្លែងមួយកាលពីយប់មិញ (/t/ sound)។'
        },
        {
          english: 'He cleaned his bedroom thoroughly this morning.',
          khmerSound: 'ហ៊ី ឃ្លីនដ៍ ហ៊ីស ប៊ែដរូម ថើរ៉ូលី ឌីស ម៉នីង។',
          khmerMeaning: 'គាត់បានសម្អាតបន្ទប់គេងរបស់គាត់យ៉ាងស្អាតនៅព្រឹកមិញនេះ (/d/ sound)។'
        },
        {
          english: 'My mother cooked delicious chicken soup for us.',
          khmerSound: 'ម៉ាយ ម៉ាដឌើ ឃុកថ៍ ឌីលីស្សឹស ឈីកខិន ស៊ុប ហ្វ័រ អាស។',
          khmerMeaning: 'ម្តាយខ្ញុំបានចម្អិនសម្លមាន់ដ៏ឆ្ងាញ់សម្រាប់ពួកយើង (/t/ sound)។'
        },
        {
          english: 'The concert started at 7:00 PM sharp.',
          khmerSound: 'ដឹ ខនសឺត ស្តាតធីដ អែត សេវិន អូក្លក់ ភីអិម ស្សាភ។',
          khmerMeaning: 'ការប្រគំតន្ត្រីបានចាប់ផ្តើមនៅម៉ោង ៧:០០ គត់ (/ɪd/ sound)។'
        },
        {
          english: 'We decided to stay home because of heavy rain.',
          khmerSound: 'វី ឌីសាយឌីដ ធូ ស្តេ ហូម ប៊ីខស អហ្វ ហេវី រ៉េន។',
          khmerMeaning: 'ពួកយើងបានសម្រេចចិត្តនៅផ្ទះ ដោយសារតែភ្លៀងធ្លាក់ខ្លាំង (/ɪd/ sound)។'
        }
      ]
    },
    vocabulary: [
      { word: 'worked', khmerSound: 'វើកថ៍', meaningKhmer: 'បានធ្វើការ (សំឡេង /t/)', example: 'I worked late yesterday.', phoneticDetail: '/t/' },
      { word: 'played', khmerSound: 'ផ្លេដ', meaningKhmer: 'បានលេង (សំឡេង /d/)', example: 'They played guitar together.', phoneticDetail: '/d/' },
      { word: 'visited', khmerSound: 'វីស៊ីធីដ', meaningKhmer: 'បានទៅលេង / ទស្សនា (សំឡេង /ɪd/)', example: 'We visited Battambang.', phoneticDetail: '/ɪd/' },
      { word: 'watched', khmerSound: 'វ៉ចថ៍', meaningKhmer: 'បានមើល (សំឡេង /t/)', example: 'She watched the football match.', phoneticDetail: '/t/' },
      { word: 'cleaned', khmerSound: 'ឃ្លីនដ៍', meaningKhmer: 'បានសម្អាត (សំឡេង /d/)', example: 'He cleaned the house.', phoneticDetail: '/d/' },
      { word: 'cooked', khmerSound: 'ឃុកថ៍', meaningKhmer: 'បានចម្អិន (សំឡេង /t/)', example: 'We cooked dinner at home.', phoneticDetail: '/t/' },
      { word: 'started', khmerSound: 'ស្តាតធីដ', meaningKhmer: 'បានចាប់ផ្តើម (សំឡេង /ɪd/)', example: 'The meeting started at 9.', phoneticDetail: '/ɪd/' },
      { word: 'decided', khmerSound: 'ឌីសាយឌីដ', meaningKhmer: 'បានសម្រេចចិត្ត (សំឡេង /ɪd/)', example: 'She decided to study English.', phoneticDetail: '/ɪd/' },
      { word: 'listened', khmerSound: 'លីសិនដ៍', meaningKhmer: 'បានស្តាប់ (សំឡេង /d/)', example: 'I listened to podcasts.', phoneticDetail: '/d/' },
      { word: 'waited', khmerSound: 'វ៉េតធីដ', meaningKhmer: 'បានរង់ចាំ (សំឡេង /ɪd/)', example: 'They waited for the bus.', phoneticDetail: '/ɪd/' },
      { word: 'walked', khmerSound: 'វ៉កថ៍', meaningKhmer: 'បានដើរ (សំឡេង /t/)', example: 'He walked to school.', phoneticDetail: '/t/' },
      { word: 'talked', khmerSound: 'ថកថ៍', meaningKhmer: 'បាននិយាយពិភាក្សា (សំឡេង /t/)', example: 'We talked on the phone.', phoneticDetail: '/t/' },
      { word: 'opened', khmerSound: 'អូផិនដ៍', meaningKhmer: 'បានបើក (សំឡេង /d/)', example: 'She opened the gift.', phoneticDetail: '/d/' },
      { word: 'closed', khmerSound: 'ខ្លូសដ៍', meaningKhmer: 'បានបិទ (សំឡេង /d/)', example: 'The shop closed early.', phoneticDetail: '/d/' },
      { word: 'lived', khmerSound: 'លីវដ៍', meaningKhmer: 'បានរស់នៅ (សំឡេង /d/)', example: 'They lived in Japan.', phoneticDetail: '/d/' },
      { word: 'loved', khmerSound: 'ឡាវដ៍', meaningKhmer: 'បានស្រលាញ់ (សំឡេង /d/)', example: 'Everyone loved the performance.', phoneticDetail: '/d/' },
      { word: 'helped', khmerSound: 'ហែលភ៍ថ៍', meaningKhmer: 'បានជួយ (សំឡេង /t/)', example: 'He helped his grandmother.', phoneticDetail: '/t/' },
      { word: 'needed', khmerSound: 'នីដឌីដ', meaningKhmer: 'បានត្រូវការ (សំឡេង /ɪd/)', example: 'I needed some advice.', phoneticDetail: '/ɪd/' },
      { word: 'wanted', khmerSound: 'វ៉នធីដ', meaningKhmer: 'បានចង់បាន (សំឡេង /ɪd/)', example: 'She wanted a glass of water.', phoneticDetail: '/ɪd/' },
      { word: 'studied', khmerSound: 'ស្តាឌីដ', meaningKhmer: 'បានរៀន (សំឡេង /d/)', example: 'We studied for the exam.', phoneticDetail: '/d/' }
    ],
    samplePhrases: [
      {
        english: 'How do you pronounce "visited"? -> It sounds like /vɪz.ɪ.tɪd/.',
        khmerSound: 'ហៅ ឌូ យូ ប្រូណោនស៍ វីស៊ីធីដ? -> វីស៊ីធីដ',
        khmerMeaning: 'ពាក្យបញ្ចប់ដោយ "T" បញ្ចេញសំឡេង -ed ជា /ɪd/ (វីស៊ីធីដ)។'
      }
    ],
    quiz: {
      question: 'តើពាក្យ "decided" បញ្ចេញសំឡេងកន្ទុយ -ed ជាសំឡេងមួយណា?',
      questionKhmer: 'How is the "-ed" in "decided" pronounced?',
      options: ['សំឡេង /t/', 'សំឡេង /d/', 'សំឡេង /ɪd/ ឬ /əd/', 'មិនបញ្ចេញសំឡេង'],
      correctIndex: 2,
      explanation: 'ដោយសារពាក្យ "decide" បញ្ចប់ដោយសំឡេង /d/ ដូច្នេះនៅពេលថែម -ed ត្រូវបញ្ចេញជាព្យាង្គ /ɪd/ (ឌីសាយឌីដ)។'
    }
  },

  // =========================================================================
  // LESSON 02: អតីតកាលជាមួយកិរិយាស័ព្ទមិនទៀងទាត់ (Past Simple: Irregular Verbs)
  // =========================================================================
  {
    id: 2,
    unitNumber: 'មេរៀនទី ០២',
    titleKhmer: 'អតីតកាលជាមួយកិរិយាស័ព្ទមិនទៀងទាត់',
    titleEnglish: 'Past Simple: Irregular Verbs',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'តារាងកិរិយាស័ព្ទប្រែប្រួលទម្រង់សំខាន់ៗ ២៥ ពាក្យ ព្រមទាំងរូបមន្តប្រយោគស្រប បដិសេធ (didn\'t + V1) និងសំណួរ (Did you...?)។',
    grammarRule: {
      formula: 'Affirmative: S + V2 + O | Negative: S + didn\'t + V1 | Question: Did + S + V1 + O?',
      explanation: 'កិរិយាស័ព្ទមិនទៀងទាត់ (Irregular Verbs) មិនថែម -ed ទេ ប៉ុន្តែប្តូរទម្រង់ទាំងស្រុងក្នុងប្រយោគស្រប។ ប៉ុន្តែក្នុងប្រយោគបដិសេធ (didn\'t) និងសំណួរ (Did...?) កិរិយាស័ព្ទវិលត្រឡប់ទៅរកទម្រង់ដើម V1 វិញ!',
      examples: [
        {
          english: 'I saw my old friend at the cafe yesterday.',
          khmerSound: 'អាយ សរ ម៉ាយ អូល ហ្វ្រេន អែត ដឹ ខាហ្វេ យេសធើដេ។',
          khmerMeaning: '(+) ខ្ញុំបានឃើញមិត្តចាស់របស់ខ្ញុំនៅឯហាងកាហ្វេពីម្សិលមិញ (see -> saw)។'
        },
        {
          english: 'She bought a beautiful traditional dress.',
          khmerSound: 'ស្ស៊ី បត អឹ ប៊ីយូធីហ្វុល ត្រាឌីស្សិនណល ដ្រេស។',
          khmerMeaning: '(+) នាងបានទិញរ៉ូបប្រពៃណីដ៏ស្រស់ស្អាតមួយ (buy -> bought)។'
        },
        {
          english: 'They ate fried rice and drank coconut water.',
          khmerSound: 'ដេ អេត ហ្វ្រាយ រ៉ាយស៍ អ៊ែន ដ្រែងខ៍ ខូខូណាត់ វ៉ត់ធើ។',
          khmerMeaning: '(+) ពួកគេបានញ៉ាំបាយឆា និងផឹកទឹកដូង (eat -> ate, drink -> drank)។'
        },
        {
          english: 'I didn\'t go to the party last Saturday.',
          khmerSound: 'អាយ ឌីដិនថ៍ ហ្គោ ធូ ដឹ ផាធី ឡាស សាតឺដេ។',
          khmerMeaning: '(-) ខ្ញុំមិនបានទៅពិធីជប់លៀងនោះទេកាលពីថ្ងៃសៅរ៍មុន (didn\'t + go)។'
        },
        {
          english: 'He didn\'t buy the expensive phone.',
          khmerSound: 'ហ៊ី ឌីដិនថ៍ បាយ ដឹ អ៊ិចស្ពែនស៊ីវ ហ្វូន។',
          khmerMeaning: '(-) គាត់មិនបានទិញទូរស័ព្ទតម្លៃថ្លៃនោះទេ (didn\'t + buy)។'
        },
        {
          english: 'Did you meet the new manager this morning?',
          khmerSound: 'ឌីដ យូ មីត ដឹ ញូ ម៉េនណេជើ ឌីស ម៉នីង?',
          khmerMeaning: '(?) តើអ្នកបានជួបអ្នកគ្រប់គ្រងថ្មីនៅព្រឹកមិញនេះទេ?'
        },
        {
          english: 'Did she sleep well during the flight?',
          khmerSound: 'ឌីដ ស្ស៊ី ស្លីប វ៉ែល ឌ្យូរីង ដឹ ហ្វ្លាយថ៍?',
          khmerMeaning: '(?) តើនាងគេងលក់ស្រួលដែរទេអំឡុងពេលជិះយន្តហោះ?'
        }
      ]
    },
    tableData: {
      headers: ['កិរិយាស័ព្ទដើម (V1)', 'អតីតកាល (V2)', 'ការបញ្ចេញសំឡេង V2', 'អត្ថន័យ'],
      rows: [
        ['Go', 'Went', 'វ៉ែនថ៍', 'បានទៅ'],
        ['See', 'Saw', 'សរ', 'បានឃើញ'],
        ['Buy', 'Bought', 'បត', 'បានទិញ'],
        ['Eat', 'Ate', 'អេត', 'បានញ៉ាំ'],
        ['Drink', 'Drank', 'ដ្រែងខ៍', 'បានផឹក'],
        ['Have', 'Had', 'ហែដ', 'មាន / បានមាន'],
        ['Do', 'Did', 'ឌីដ', 'បានធ្វើ'],
        ['Make', 'Made', 'មេដ', 'បានបង្កើត / ធ្វើ'],
        ['Come', 'Came', 'ឃេម', 'បានមក'],
        ['Take', 'Took', 'ធុក', 'បានយក / ចំណាយពេល'],
        ['Give', 'Gave', 'ហ្គេវ', 'បានឱ្យ'],
        ['Write', 'Wrote', 'រ៉ូត', 'បានសរសេរ'],
        ['Read', 'Read (/red/)', 'រ៉េដ', 'បានអាន'],
        ['Speak', 'Spoke', 'ស្ពូក', 'បាននិយាយ'],
        ['Meet', 'Met', 'មេត', 'បានជួប'],
        ['Sleep', 'Slept', 'ស្លេបថ៍', 'បានគេង'],
        ['Find', 'Found', 'ហ្វោនដ៍', 'បានរកឃើញ'],
        ['Tell', 'Told', 'ថូលដ៍', 'បានប្រាប់'],
        ['Become', 'Became', 'ប៊ីឃេម', 'បានក្លាយជា'],
        ['Leave', 'Left', 'ឡេហ្វថ៍', 'បានចាកចេញ'],
        ['Feel', 'Felt', 'ហ្វេលថ៍', 'មានអារម្មណ៍ថា'],
        ['Run', 'Ran', 'រ៉េន', 'បានរត់'],
        ['Pay', 'Paid', 'ផេដ', 'បានបង់ប្រាក់'],
        ['Bring', 'Brought', 'ប្រត', 'បានយកមក'],
        ['Think', 'Thought', 'ថត', 'បានគិត']
      ]
    },
    vocabulary: [
      { word: 'went', khmerSound: 'វ៉ែនថ៍', meaningKhmer: 'បានទៅ (Go -> Went)', example: 'I went to school by bus.' },
      { word: 'saw', khmerSound: 'សរ', meaningKhmer: 'បានឃើញ (See -> Saw)', example: 'She saw a doctor yesterday.' },
      { word: 'bought', khmerSound: 'បត', meaningKhmer: 'បានទិញ (Buy -> Bought)', example: 'They bought some fruits.' },
      { word: 'ate', khmerSound: 'អេត', meaningKhmer: 'បានញ៉ាំ (Eat -> Ate)', example: 'He ate lunch at noon.' },
      { word: 'found', khmerSound: 'ហ្វោនដ៍', meaningKhmer: 'បានរកឃើញ (Find -> Found)', example: 'I found my lost keys.' }
    ],
    samplePhrases: [
      {
        english: 'Did you have a good time? -> Yes, I did.',
        khmerSound: 'ឌីដ យូ ហាវ អឹ ហ្គូដ ថាម? យេស, អាយ ឌីដ។',
        khmerMeaning: 'តើអ្នកសប្បាយចិត្តដែរទេ? បាទ/ចាស ខ្ញុំសប្បាយចិត្តណាស់។'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសប្រយោគដែលត្រឹមត្រូវតាមវេយ្យាករណ៍៖',
      questionKhmer: 'Choose the grammatically correct sentence:',
      options: [
        'She didn\'t saw him yesterday.',
        'She didn\'t see him yesterday.',
        'She not saw him yesterday.',
        'She didn\'t seen him yesterday.'
      ],
      correctIndex: 1,
      explanation: 'នៅពេលមាន "didn\'t" កិរិយាស័ព្ទត្រូវតែជាទម្រង់ដើម V1 (see) មិនមែន saw ឬ seen ឡើយ។ ដូច្នេះ "She didn\'t see him yesterday" គឺត្រឹមត្រូវ។'
    }
  },

  // =========================================================================
  // LESSON 03: ការរៀបរាប់ពីរឿងរ៉ាវកាលពីចុងសប្តាហ៍ (Talking About Last Weekend)
  // =========================================================================
  {
    id: 3,
    unitNumber: 'មេរៀនទី ០៣',
    titleKhmer: 'ការរៀបរាប់ពីរឿងរ៉ាវកាលពីចុងសប្តាហ៍',
    titleEnglish: 'Talking About Last Weekend',
    duration: '៣០ នាទី',
    descriptionKhmer: 'អនុវត្តការអានកថាខណ្ឌគំរូរៀបរាប់ពីដំណើរកម្សាន្ត និងការសន្ទនារវាងមិត្តភក្តិ ២ នាក់ អំពីសកម្មភាពដែលបានធ្វើពីម្សិលមិញ។',
    paragraph: {
      titleEnglish: 'My Wonderful Weekend Trip to Kampot',
      titleKhmer: 'ដំណើរកម្សាន្តចុងសប្តាហ៍ដ៏អស្ចារ្យរបស់ខ្ញុំទៅកាន់ខេត្តកំពត',
      englishText: 'Last weekend, my friends and I traveled to Kampot province. We left Phnom Penh early on Saturday morning by minivan. The weather was pleasantly cool and breezy. In the afternoon, we visited a local pepper farm and took a scenic boat cruise along the river to watch the sunset. On Sunday morning, we climbed Bokor Mountain and enjoyed the breathtaking mountain view. We returned home on Sunday evening feeling refreshed and happy.',
      khmerMeaning: 'កាលពីចុងសប្តាហ៍មុន ខ្ញុំ និងមិត្តភក្តិបានធ្វើដំណើរទៅកាន់ខេត្តកំពត។ ពួកយើងបានចាកចេញពីរាជធានីភ្នំពេញតាំងពីព្រឹកព្រលឹមថ្ងៃសៅរ៍ដោយជិះរថយន្តវ៉ែន។ អាកាសធាតុត្រជាក់ស្រួល និងមានខ្យល់បក់រំភើយ។ នៅពេលរសៀល ពួកយើងបានទៅទស្សនាកសិដ្ឋានម្រេច និងជិះទូកកម្សាន្តតាមដងទន្លេដើម្បីគយគន់ថ្ងៃលិច។ នៅព្រឹកថ្ងៃអាទិត្យ ពួកយើងបានឡើងភ្នំបូកគោ និងគយគន់ទេសភាពភ្នំដ៏ស្រស់ត្រកាល។ ពួកយើងបានត្រឡប់មកផ្ទះវិញនៅល្ងាចថ្ងៃអាទិត្យដោយអារម្មណ៍ស្រស់ស្រាយ និងសប្បាយរីករាយ។'
    },
    dialogue: [
      {
        speaker: 'Sophea',
        speakerKhmer: 'សុភា',
        text: 'Hi David! How was your weekend? Did you do anything special?',
        khmerSound: 'ហាយ ដេវីដ! ហៅ វ៉ស យួរ វីកអ៊ិន? ឌីដ យូ ឌូ អេនីធីង ស្ពែស្សល?',
        meaningKhmer: 'សួស្តីដេវីដ! តើចុងសប្តាហ៍របស់អ្នកយ៉ាងម៉េចដែរ? តើអ្នកបានធ្វើអ្វីពិសេសខ្លះ?'
      },
      {
        speaker: 'David',
        speakerKhmer: 'ដេវីដ',
        text: 'It was fantastic! On Saturday, I visited my grandparents in the countryside and helped them in the garden.',
        khmerSound: 'អ៊ីត វ៉ស ហ្វេនថាសទិក! អន សាតឺដេ, អាយ វីស៊ីធីដ ម៉ាយ ហ្គ្រេនផេរ៉េនស៍...',
        meaningKhmer: 'ពិតជាអស្ចារ្យណាស់! កាលពីថ្ងៃសៅរ៍ ខ្ញុំបានទៅលេងជីដូនជីតារបស់ខ្ញុំនៅឯស្រុកស្រែ និងបានជួយគាត់ធ្វើការក្នុងសួនច្បារ។'
      },
      {
        speaker: 'Sophea',
        speakerKhmer: 'សុភា',
        text: 'That sounds really relaxing. What about yesterday?',
        khmerSound: 'ដាត សោនស៍ រៀលី រីលែកស៊ីង។ វ៉ាត់ អឹបៅ យេសធើដេ?',
        meaningKhmer: 'ស្តាប់ទៅពិតជាធូរស្រាលក្នុងចិត្តណាស់។ ចុះពីម្សិលមិញវិញ?'
      },
      {
        speaker: 'David',
        speakerKhmer: 'ដេវីដ',
        text: 'Yesterday, my cousin and I played football in the park, and in the evening we ate delicious street food. What about you?',
        khmerSound: 'យេសធើដេ, ម៉ាយ ខាសិន អ៊ែន អាយ ផ្លេដ ហ្វូតបល... អ៊ែន អេត ឌីលីស្សឹស ស្រ្តីត ហ្វ៊ូត។',
        meaningKhmer: 'ពីម្សិលមិញ បងប្អូនជីដូនមួយ និងខ្ញុំបានលេងបាល់ទាត់នៅសួនច្បារ ហើយពេលល្ងាចពួកយើងបានញ៉ាំអាហារតាមផ្លូវយ៉ាងឆ្ងាញ់។ ចុះអ្នកវិញ?'
      },
      {
        speaker: 'Sophea',
        speakerKhmer: 'សុភា',
        text: 'I stayed home, read a great novel, and studied for the upcoming English exam.',
        khmerSound: 'អាយ ស្តេដ ហូម, រ៉េដ អឹ ហ្គ្រេត ណូវ៉ល, អ៊ែន ស្តាឌីដ ហ្វ័រ ដឹ អាប់ខាំមីង អ៊ិចសែម។',
        meaningKhmer: 'ខ្ញុំនៅផ្ទះ អានសៀវភៅប្រលោមលោកដ៏ល្អមួយ និងបានរៀនត្រៀមប្រឡងភាសាអង់គ្លេសដែលខិតជិតមកដល់។'
      }
    ],
    vocabulary: [
      { word: 'fantastic', khmerSound: 'ហ្វេនថាសទិក', meaningKhmer: 'អស្ចារ្យ / ល្អឥតខ្ចោះ', example: 'We had a fantastic holiday.' },
      { word: 'relaxing', khmerSound: 'រីលែកស៊ីង', meaningKhmer: 'ធូរស្រាល / សម្រាកកាយ', example: 'Listening to music is relaxing.' },
      { word: 'countryside', khmerSound: 'ខាន់ទ្រីសាយដ៍', meaningKhmer: 'ជនបទ / ស្រុកស្រែ', example: 'The air in the countryside is fresh.' },
      { word: 'scenic', khmerSound: 'ស៊ីនិក', meaningKhmer: 'ដែលមានទេសភាពស្រស់បំព្រង', example: 'We took the scenic mountain road.' },
      { word: 'sunset', khmerSound: 'សាន់សេត', meaningKhmer: 'ថ្ងៃលិច', example: 'They watched the sunset together.' }
    ],
    samplePhrases: [
      {
        english: 'What did you do last weekend?',
        khmerSound: 'វ៉ាត់ ឌីដ យូ ឌូ ឡាស វីកអ៊ិន?',
        khmerMeaning: 'តើអ្នកបានធ្វើអ្វីខ្លះកាលពីចុងសប្តាហ៍មុន?'
      },
      {
        english: 'I had a wonderful time with my family.',
        khmerSound: 'អាយ ហែដ អឹ វ៉ាន់ឌើហ្វុល ថាម វីត ម៉ាយ ហ្វេមីលី។',
        khmerMeaning: 'ខ្ញុំមានពេលវេលាដ៏រីករាយជាមួយគ្រួសាររបស់ខ្ញុំ។'
      }
    ],
    quiz: {
      question: 'នៅក្នុងការសន្ទនា តើ David បានធ្វើអ្វីខ្លះកាលពីថ្ងៃសៅរ៍ (Saturday)?',
      questionKhmer: 'According to the dialogue, what did David do on Saturday?',
      options: [
        'គាត់បាននៅផ្ទះអានសៀវភៅប្រលោមលោក',
        'គាត់បានទៅលេងជីដូនជីតា និងជួយធ្វើការក្នុងសួនច្បារ',
        'គាត់បានឡើងភ្នំបូកគោ',
        'គាត់បានទៅទិញទូរស័ព្ទថ្មី'
      ],
      correctIndex: 1,
      explanation: 'ដេវីដបាននិយាយថា "On Saturday, I visited my grandparents in the countryside and helped them in the garden."'
    }
  },

  // =========================================================================
  // LESSON 04: វាក្យសព្ទការធ្វើដំណើរ និងទីកន្លែង (Travel & Transportation Vocabulary)
  // =========================================================================
  {
    id: 4,
    unitNumber: 'មេរៀនទី ០៤',
    titleKhmer: 'វាក្យសព្ទការធ្វើដំណើរ និងទីកន្លែង',
    titleEnglish: 'Travel & Transportation Vocabulary',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនពាក្យគន្លឹះសំខាន់ៗ ២០ ពាក្យទាក់ទងនឹងព្រលានយន្តហោះ សំបុត្រ លិខិតឆ្លងដែន សណ្ឋាគារ និងមធ្យោបាយធ្វើដំណើរ។',
    vocabulary: [
      { word: 'Airport', khmerSound: 'អ៊ែរផត', meaningKhmer: 'ព្រលានយន្តហោះ', example: 'We arrived at the airport two hours early.' },
      { word: 'Flight', khmerSound: 'ហ្វ្លាយថ៍', meaningKhmer: 'ជើងហោះហើរ', example: 'Our flight to Bangkok departs at 10 AM.' },
      { word: 'Ticket', khmerSound: 'ធីកឃីត', meaningKhmer: 'សំបុត្រ (ឡាន/យន្តហោះ)', example: 'Please show your train ticket.' },
      { word: 'Passport', khmerSound: 'ផាសស្ព័ត', meaningKhmer: 'លិខិតឆ្លងដែន', example: 'Keep your passport safe at all times.' },
      { word: 'Hotel', khmerSound: 'ហូថែល', meaningKhmer: 'សណ្ឋាគារ', example: 'We booked a five-star hotel near the beach.' },
      { word: 'Luggage', khmerSound: 'ឡាហ្កេច', meaningKhmer: 'វ៉ាលី / អីវ៉ាន់ធ្វើដំណើរ', example: 'How many pieces of luggage do you have?' },
      { word: 'Station', khmerSound: 'ស្តេស្សិន', meaningKhmer: 'ស្ថានីយ / ចំណត', example: 'Meet me at the railway station.' },
      { word: 'Boarding pass', khmerSound: 'ប៊ដឌីង ផាស', meaningKhmer: 'ប័ណ្ណឡើងយន្តហោះ', example: 'Download your digital boarding pass.' },
      { word: 'Departure', khmerSound: 'ឌីផាឆើ', meaningKhmer: 'ការចេញដំណើរ / ច្រកចេញ', example: 'Check the departure board for gate numbers.' },
      { word: 'Arrival', khmerSound: 'អឺរ៉ាយវ៉ល', meaningKhmer: 'ការមកដល់ / ច្រកចូល', example: 'International arrivals are on the first floor.' },
      { word: 'Platform', khmerSound: 'ផ្លេតហ្វម', meaningKhmer: 'វេទិកាចំណតរថភ្លើង', example: 'The train to Battambang leaves from platform 2.' },
      { word: 'Taxi', khmerSound: 'ថាក់ស៊ី', meaningKhmer: 'រថយន្តតាក់ស៊ី', example: 'Let\'s call a taxi to the hotel.' },
      { word: 'Bus', khmerSound: 'បាស', meaningKhmer: 'រថយន្តក្រុង', example: 'Public bus fares are very affordable.' },
      { word: 'Train', khmerSound: 'ស្រ្តេន', meaningKhmer: 'រថភ្លើង', example: 'Traveling by train is safe and scenic.' },
      { word: 'Plane', khmerSound: 'ផ្លេន', meaningKhmer: 'យន្តហោះ', example: 'The plane flew above the clouds.' },
      { word: 'Tourist', khmerSound: 'ធួរីស', meaningKhmer: 'ភ្ញៀវទេសចរ', example: 'Many tourists visit Angkor Wat every year.' },
      { word: 'Map', khmerSound: 'ម៉េប', meaningKhmer: 'ផែនទី', example: 'Can you show me the route on Google Maps?' },
      { word: 'Suitcase', khmerSound: 'ស៊ូតខេស', meaningKhmer: 'វ៉ាលីយួរដៃ', example: 'He packed his suitcase the night before.' },
      { word: 'Reservation', khmerSound: 'រ៉េសឺវ៉េសិន', meaningKhmer: 'ការកក់ទុកមុន', example: 'I have a hotel reservation under my name.' },
      { word: 'Delay', khmerSound: 'ឌីឡេ', meaningKhmer: 'ការពន្យារពេល', example: 'Due to bad weather, there is a two-hour delay.' }
    ],
    samplePhrases: [
      {
        english: 'Where is the baggage claim area?',
        khmerSound: 'វែរ អ៊ីស ដឹ ប៊ែកហ្គេច ខ្លេម អ៊ែរៀ?',
        khmerMeaning: 'តើកន្លែងទទួលវ៉ាលីអីវ៉ាន់នៅឯណា?'
      },
      {
        english: 'Please have your boarding pass and passport ready.',
        khmerSound: 'ភ្លីស ហាវ យួរ ប៊ដឌីង ផាស អ៊ែន ផាសស្ព័ត រេឌី។',
        khmerMeaning: 'សូមត្រៀមប័ណ្ណឡើងយន្តហោះ និងលិខិតឆ្លងដែនរបស់អ្នកឱ្យរួចរាល់។'
      }
    ],
    quiz: {
      question: 'តើពាក្យ "Boarding pass" មានន័យជាភាសាខ្មែរដូចម្តេច?',
      questionKhmer: 'What does "Boarding pass" mean?',
      options: ['លិខិតឆ្លងដែន', 'ប័ណ្ណឡើងយន្តហោះ', 'វិក្កយបត្រសណ្ឋាគារ', 'កាតធនាគារ'],
      correctIndex: 1,
      explanation: '"Boarding pass" គឺ «ប័ណ្ណឡើងយន្តហោះ» ដែលអ្នកដំណើរត្រូវកាន់ដើម្បីឆ្លងកាត់ច្រកឡើងយន្តហោះ។'
    }
  },

  // =========================================================================
  // LESSON 05: ការសន្ទនាក្នុងការធ្វើដំណើរ (Travel Dialogues)
  // =========================================================================
  {
    id: 5,
    unitNumber: 'មេរៀនទី ០៥',
    titleKhmer: 'ការសន្ទនាក្នុងការធ្វើដំណើរ',
    titleEnglish: 'Travel Dialogues',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'ការសន្ទនាជាក់ស្តែង ២ ផ្នែក៖ ការកក់បន្ទប់សណ្ឋាគារ (Booking a Hotel Room) និងការទិញសំបុត្ររថភ្លើង/យន្តហោះ (Buying a Ticket)។',
    dialogue: [
      {
        speaker: 'Receptionist',
        speakerKhmer: 'បុគ្គលិកទទួលភ្ញៀវ',
        text: 'Good afternoon, welcome to Riverside Grand Hotel. How may I help you today?',
        khmerSound: 'ហ្គូដ អាហ្វធើនូន, វែលខាំ ធូ រីវើសាយ ហ្គ្រេន ហូថែល...',
        meaningKhmer: 'ទិវាសួស្តី សូមស្វាគមន៍មកកាន់សណ្ឋាគារ រីវើសាយ ហ្គ្រេន។ តើខ្ញុំអាចជួយលោកអ្នកយ៉ាងណាដែរ?'
      },
      {
        speaker: 'Guest',
        speakerKhmer: 'ភ្ញៀវស្នាក់នៅ',
        text: 'Hello, I have a reservation under the name of Seyha for two nights.',
        khmerSound: 'ហេឡូ, អាយ ហាវ អឹ រ៉េសឺវ៉េសិន អាន់ឌើ ដឹ ណេម អហ្វ សីហា...',
        meaningKhmer: 'សួស្តី ខ្ញុំមានការកក់បន្ទប់ទុកជាមុនក្រោមឈ្មោះ Seyha ចំនួន ២ យប់។'
      },
      {
        speaker: 'Receptionist',
        speakerKhmer: 'បុគ្គលិកទទួលភ្ញៀវ',
        text: 'Yes, here it is! A deluxe double room with river view. May I have your passport, please?',
        khmerSound: 'យេស, ហៀរ អ៊ីស អ៊ីត! អឹ ឌីឡាក់ស៍ ដាប់បល រូម... មេ អាយ ហាវ យួរ ផាសស្ព័ត ភ្លីស?',
        meaningKhmer: 'បាទ/ចាស ឃើញហើយ! បន្ទប់ Deluxe គ្រែពីរមានទិដ្ឋភាពមាត់ទន្លេ។ តើខ្ញុំអាចសុំមើលលិខិតឆ្លងដែនបានទេ?'
      },
      {
        speaker: 'Guest',
        speakerKhmer: 'ភ្ញៀវស្នាក់នៅ',
        text: 'Here you go. Is breakfast included in the booking?',
        khmerSound: 'ហៀរ យូ ហ្គោ។ អ៊ីស ប្រេកហ្វាស្ត អ៊ីនឃ្លូឌីដ អ៊ីន ដឹ ប៊ុកឃីង?',
        meaningKhmer: 'នេះបាទ/ចាស។ តើតម្លៃបន្ទប់នេះមានរួមបញ្ចូលអាហារពេលព្រឹកដែរឬទេ?'
      },
      {
        speaker: 'Receptionist',
        speakerKhmer: 'បុគ្គលិកទទួលភ្ញៀវ',
        text: 'Yes, complimentary buffet breakfast is served from 6:30 AM to 10:00 AM on the 2nd floor. Here is your key card, room 405. Enjoy your stay!',
        khmerSound: 'យេស, ខមភ្លីមេនថឺរី ប៊ូហ្វេ ប្រេកហ្វាស្ត... ហៀរ អ៊ីស យួរ ឃី ខាត...',
        meaningKhmer: 'ចាស អាហារប៊ូហ្វេពេលព្រឹកឥតគិតថ្លៃ ចាប់ពីម៉ោង ៦:៣០ ដល់ ១០:០០ ព្រឹក នៅជាន់ទី ២។ នេះជាកាតបើកបន្ទប់លេខ ៤០៥។ សូមរីករាយនឹងការស្នាក់នៅ!'
      },
      {
        speaker: 'Passenger',
        speakerKhmer: 'អ្នកដំណើរ (នៅស្ថានីយ)',
        text: 'Hello, I would like to buy a train ticket to Sihanoukville, please.',
        khmerSound: 'ហេឡូ, អាយ វូដ ឡាយក៍ ធូ បាយ អឹ ស្រ្តេន ធីកឃីត...',
        meaningKhmer: 'សួស្តី ខ្ញុំចង់ទិញសំបុត្ររថភ្លើងទៅកាន់ខេត្តព្រះសីហនុមួយ។'
      },
      {
        speaker: 'Ticket Agent',
        speakerKhmer: 'អ្នកលក់សំបុត្រ',
        text: 'One-way or round-trip ticket? And what time would you like to depart?',
        khmerSound: 'វ៉ាន់-វ៉េ អរ រ៉ោន-ស្រ្ទីប ធីកឃីត? អ៊ែន វ៉ាត់ ថាម វូដ យូ ឡាយក៍ ធូ ឌីផាត?',
        meaningKhmer: 'តើជាសំបុត្រជើងមួយ (One-way) ឬទៅមក (Round-trip)? ហើយតើចង់ចេញដំណើរនៅម៉ោងប៉ុន្មាន?'
      },
      {
        speaker: 'Passenger',
        speakerKhmer: 'អ្នកដំណើរ',
        text: 'A round-trip ticket for the 8:00 AM departure tomorrow, returning on Sunday.',
        khmerSound: 'អឹ រ៉ោន-ស្រ្ទីប ធីកឃីត ហ្វ័រ ឌី អេត អូក្លក់ អេអិម ឌីផាឆើ...',
        meaningKhmer: 'សំបុត្រទៅមក ចេញដំណើរម៉ោង ៨:០០ ព្រឹកថ្ងៃស្អែក និងត្រឡប់មកវិញនៅថ្ងៃអាទិត្យ។'
      }
    ],
    vocabulary: [
      { word: 'Single room', khmerSound: 'ស៊ីងហ្គល រូម', meaningKhmer: 'បន្ទប់គេងម្នាក់', example: 'A single room is cheaper.' },
      { word: 'Double room', khmerSound: 'ដាប់បល រូម', meaningKhmer: 'បន្ទប់គេងពីរនាក់', example: 'We booked a double room.' },
      { word: 'One-way ticket', khmerSound: 'វ៉ាន់-វ៉េ ធីកឃីត', meaningKhmer: 'សំបុត្រជើងមួយ (មិនត្រឡប់)', example: 'I only need a one-way ticket.' },
      { word: 'Round-trip ticket', khmerSound: 'រ៉ោន-ស្រ្ទីប ធីកឃីត', meaningKhmer: 'សំបុត្រទៅមក', example: 'Round-trip tickets save money.' },
      { word: 'Check-in', khmerSound: 'ឆេក-អ៊ីន', meaningKhmer: 'ការចុះឈ្មោះចូលស្នាក់នៅ/ឡើងជើងហោះហើរ', example: 'Check-in time is at 2:00 PM.' }
    ],
    samplePhrases: [
      {
        english: 'Could I have a wake-up call at 6:00 AM tomorrow?',
        khmerSound: 'ឃូដ អាយ ហាវ អឹ វ៉េក-អាប់ ខល អែត ស៊ីកស៍ អូក្លក់...',
        khmerMeaning: 'តើអាចជួយទូរស័ព្ទដាស់ខ្ញុំនៅម៉ោង ៦:០០ ព្រឹកថ្ងៃស្អែកបានទេ?'
      }
    ],
    quiz: {
      question: 'តើសំបុត្រ "Round-trip ticket" សំដៅលើសំបុត្រប្រភេទណា?',
      questionKhmer: 'What is a "Round-trip ticket"?',
      options: ['សំបុត្រជើងមួយ (ទៅមិនត្រឡប់)', 'សំបុត្រទៅមក', 'សំបុត្រ VIP', 'សំបុត្រឥតគិតថ្លៃ'],
      correctIndex: 1,
      explanation: '"Round-trip ticket" មានន័យថា «សំបុត្រធ្វើដំណើរទាំងទៅទាំងមក» (Return ticket)។'
    }
  },

  // =========================================================================
  // LESSON 06: ទម្រង់ប្រៀបធៀបកម្រិតស្មើ និងលើស (Comparatives: -er / more)
  // =========================================================================
  {
    id: 6,
    unitNumber: 'មេរៀនទី ០៦',
    titleKhmer: 'ទម្រង់ប្រៀបធៀបកម្រិតស្មើ និងលើស',
    titleEnglish: 'Comparatives: -er / more',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនរូបមន្តប្រៀបធៀបគុណនាមខ្លី (-er than) និងគុណនាមវែង (more ... than) ព្រមទាំងឧទាហរណ៍ជាក់ស្តែង ១០ ប្រយោគ។',
    grammarRule: {
      formula: 'Short Adj: Adj + -er + than | Long Adj: more + Adj + than | Equal: as + Adj + as',
      explanation: 'ប្រើប្រាស់សម្រាប់ប្រៀបធៀបមនុស្ស ទីកន្លែង ឬវត្ថុ ២ ជាមួយគ្នា។',
      subRules: [
        {
          title: 'គុណនាមខ្លី (១ ព្យាង្គ): ថែម -er + than',
          detail: 'hot -> hotter than, big -> bigger than, tall -> taller than, fast -> faster than, old -> older than។'
        },
        {
          title: 'គុណនាម ២ ព្យាង្គបញ្ចប់ដោយ -y: ប្តូរ y ទៅជា i ហើយថែម -er',
          detail: 'easy -> easier than, happy -> happier than, heavy -> heavier than, noisy -> noisier than។'
        },
        {
          title: 'គុណនាមវែង (២ ព្យាង្គឡើងទៅ): ប្រើ more + Adj + than',
          detail: 'more expensive than, more beautiful than, more delicious than, more comfortable than, more dangerous than។'
        }
      ],
      examples: [
        {
          english: 'Cambodia is hotter than Japan in April.',
          khmerSound: 'ខេមបូឌា អ៊ីស ហតធើ ដេន ជែផេន អ៊ីន អេព្រីល។',
          khmerMeaning: 'ប្រទេសកម្ពុជាក្តៅជាងប្រទេសជប៉ុននៅក្នុងខែមេសា (hot -> hotter)។'
        },
        {
          english: 'This modern car is more expensive than that old motorcycle.',
          khmerSound: 'ឌីស ម៉ដឌើន ខា អ៊ីស ម៉រ អ៊ិចស្ពែនស៊ីវ ដេន ដាត អូល ម៉ូតូសាយខល។',
          khmerMeaning: 'ឡានទំនើបនេះមានតម្លៃថ្លៃជាងម៉ូតូចាស់នោះ (more expensive)។'
        },
        {
          english: 'A train is safer and more comfortable than a motorbike.',
          khmerSound: 'អឹ ស្រ្តេន អ៊ីស សេហ្វហ្វើ អ៊ែន ម៉រ ខាំហ្វឺតាបល...',
          khmerMeaning: 'រថភ្លើងមានសុវត្ថិភាពជាង និងមានផាសុកភាពជាងការជិះម៉ូតូ។'
        },
        {
          english: 'Learning English is easier than learning Chinese.',
          khmerSound: 'លើននីង អ៊ីងគ្លីស អ៊ីស អ៊ីហ្ស៊ីអ៊ើ ដេន លើននីង ឆាយនីស។',
          khmerMeaning: 'ការរៀនភាសាអង់គ្លេសមានភាពងាយស្រួលជាងការរៀនភាសាចិន (easy -> easier)។'
        },
        {
          english: 'Phnom Penh is busier than Siem Reap.',
          khmerSound: 'ភ្នំពេញ អ៊ីស ប៊ីហ្ស៊ីអ៊ើ ដេន សៀមរាប។',
          khmerMeaning: 'រាជធានីភ្នំពេញមានភាពអ៊ូអរ និងមមាញឹកជាងខេត្តសៀមរាប (busy -> busier)។'
        },
        {
          english: 'My brother is taller than me.',
          khmerSound: 'ម៉ាយ ប្រាដឌើ អ៊ីស ថលល័រ ដេន មី។',
          khmerMeaning: 'បងប្រុសរបស់ខ្ញុំមានកម្ពស់ខ្ពស់ជាងខ្ញុំ (tall -> taller)។'
        },
        {
          english: 'This exercise is more difficult than the previous one.',
          khmerSound: 'ឌីស អិចសឺសាយស៍ អ៊ីស ម៉រ ឌីហ្វីខលថ៍ ដេន...',
          khmerMeaning: 'លំហាត់នេះមានភាពលំបាកជាងលំហាត់មុន (more difficult)។'
        },
        {
          english: 'Fresh fruit juice is healthier than sweet soda.',
          khmerSound: 'ហ្វ្រេស ហ្វ្រូត ជូស អ៊ីស ហែលធីអ៊ើ ដេន ស្វីត សូដា។',
          khmerMeaning: 'ទឹកផ្លែឈើស្រស់ផ្តល់សុខភាពល្អជាងភេសជ្ជៈផ្អែមសូដា (healthy -> healthier)។'
        },
        {
          english: 'An airplane travels faster than a high-speed train.',
          khmerSound: 'អេន អ៊ែរផ្លេន ស្រាវវ៉លស៍ ហ្វាសស្ទ័រ ដេន...',
          khmerMeaning: 'យន្តហោះធ្វើដំណើរលឿនជាងរថភ្លើងល្បឿនលឿន (fast -> faster)។'
        },
        {
          english: 'Sokha is as hardworking as his classmate.',
          khmerSound: 'សុខា អ៊ីស អែស ហាដវើកឃីង អែស ហ៊ីស ខ្លាសមេត។',
          khmerMeaning: 'សុខាគឺឧស្សាហ៍ព្យាយាមស្មើគ្នានឹងមិត្តរួមថ្នាក់របស់គាត់ (as ... as = ប្រៀបធៀបស្មើ)។'
        }
      ]
    },
    vocabulary: [
      { word: 'hotter than', khmerSound: 'ហតធើ ដេន', meaningKhmer: 'ក្តៅជាង', example: 'Summer is hotter than winter.' },
      { word: 'taller than', khmerSound: 'ថលល័រ ដេន', meaningKhmer: 'ខ្ពស់ជាង', example: 'He is taller than his father.' },
      { word: 'more expensive than', khmerSound: 'ម៉រ អ៊ិចស្ពែនស៊ីវ ដេន', meaningKhmer: 'ថ្លៃជាង', example: 'Gold is more expensive than silver.' },
      { word: 'more comfortable than', khmerSound: 'ម៉រ ខាំហ្វឺតាបល ដេន', meaningKhmer: 'មានផាសុកភាពជាង', example: 'This sofa is more comfortable.' },
      { word: 'easier than', khmerSound: 'អ៊ីហ្ស៊ីអ៊ើ ដេន', meaningKhmer: 'ងាយស្រួលជាង', example: 'Typing is easier than writing by hand.' }
    ],
    samplePhrases: [
      {
        english: 'Which one is better, coffee or green tea?',
        khmerSound: 'វិច វ៉ាន់ អ៊ីស ប៊ែតធើ, ខូហ្វី អរ ហ្គ្រីន ធី?',
        khmerMeaning: 'តើមួយណាល្អជាង រវាងកាហ្វេ និងតែបៃតង? (Good -> Better)'
      }
    ],
    quiz: {
      question: 'បំពេញចន្លោះ៖ "This laptop is ______ than that desktop computer."',
      questionKhmer: 'Complete: "This laptop is ______ than that desktop computer."',
      options: ['expensive', 'expensiver', 'more expensive', 'most expensive'],
      correctIndex: 2,
      explanation: 'ដោយសារ "expensive" ជាគុណនាមវែង (៣ ព្យាង្គ) ក្នុងទម្រង់ប្រៀបធៀបលើស យើងត្រូវប្រើ "more expensive than"។'
    }
  },

  // =========================================================================
  // LESSON 07: ទម្រង់ប្រៀបធៀបកម្រិតខ្ពស់បំផុត (Superlatives: the -est / the most)
  // =========================================================================
  {
    id: 7,
    unitNumber: 'មេរៀនទី ០៧',
    titleKhmer: 'ទម្រង់ប្រៀបធៀបកម្រិតខ្ពស់បំផុត',
    titleEnglish: 'Superlatives: the -est / the most',
    duration: '៣០ នាទី',
    descriptionKhmer: 'ស្វែងយល់ពីរូបមន្ត The biggest, The most beautiful... និងការលើកលែងមិនទៀងទាត់ (Good -> Better -> The Best) ព្រមទាំងលំហាត់ប្រៀបធៀបទីក្រុង និងប្រទេស។',
    grammarRule: {
      formula: 'Short Adj: the + Adj + -est | Long Adj: the most + Adj | Irregular: good -> best, bad -> worst',
      explanation: 'ប្រើប្រាស់នៅពេលប្រៀបធៀបមនុស្ស ទីកន្លែង ឬរបស់ ៣ ឡើងទៅ ដើម្បីជ្រើសរើសយកអ្នកដែលខ្ពស់បំផុត ឬអស្ចារ្យបំផុត (Number 1)។',
      subRules: [
        {
          title: 'គុណនាមខ្លី: the + Adj + -est',
          detail: 'the biggest, the tallest, the oldest, the fastest, the coldest, the highest។'
        },
        {
          title: 'គុណនាមវែង: the most + Adj',
          detail: 'the most beautiful, the most expensive, the most famous, the most dangerous, the most popular។'
        },
        {
          title: 'ករណីពិសេសមិនទៀងទាត់ (Irregular Superlatives):',
          detail: 'good -> better -> the best (ល្អបំផុត); bad -> worse -> the worst (អាក្រក់បំផុត); far -> farther -> the farthest (ឆ្ងាយបំផុត)។'
        }
      ],
      examples: [
        {
          english: 'Mount Everest is the highest mountain in the world.',
          khmerSound: 'ម៉ោនថ៍ អេវឺរ៉េស្ត អ៊ីស ដឹ ហាយអេស្ត ម៉ោនថិន អ៊ីន ដឹ វើលដ៍។',
          khmerMeaning: 'ភ្នំអេវឺរ៉េស្តគឺជាភ្នំដែលខ្ពស់ជាងគេបំផុតនៅលើពិភពលោក (the highest)។'
        },
        {
          english: 'Phnom Penh is the largest and most populous city in Cambodia.',
          khmerSound: 'ភ្នំពេញ អ៊ីស ដឹ ឡាជេស្ត អ៊ែន ម៉ូស ផបព្យូលឺស ស៊ីធី...',
          khmerMeaning: 'រាជធានីភ្នំពេញគឺជាទីក្រុងធំជាងគេបំផុត និងមានប្រជាជនច្រើនជាងគេនៅកម្ពុជា។'
        },
        {
          english: 'Angkor Wat is the most famous religious temple in the region.',
          khmerSound: 'អង្គរវត្ត អ៊ីស ដឹ ម៉ូស ហ្វេមម៉ឺស រីលីជើស ថេមផល...',
          khmerMeaning: 'ប្រាសាទអង្គរវត្តគឺជាប្រាសាទសាសនាដែលល្បីល្បាញបំផុតនៅក្នុងតំបន់។'
        },
        {
          english: 'She is the most intelligent student in our classroom.',
          khmerSound: 'ស្ស៊ី អ៊ីស ដឹ ម៉ូស អ៊ីនថេលីជិន ស្តូដិន...',
          khmerMeaning: 'នាងគឺជាសិស្សដែលឆ្លាតវៃបំផុតនៅក្នុងថ្នាក់រៀនរបស់យើង។'
        },
        {
          english: 'This is the best cup of coffee I have ever tasted.',
          khmerSound: 'ឌីស អ៊ីស ដឹ ប៊េស្ត ខាប់ អហ្វ ខូហ្វី អាយ ហាវ អេវវើ ថេសធីដ។',
          khmerMeaning: 'នេះគឺជាកាហ្វេមួយពែងដែលឆ្ងាញ់បំផុតដែលខ្ញុំធ្លាប់បានភ្លក់ (the best)។'
        }
      ]
    },
    tableData: {
      headers: ['កម្រិតធម្មតា (Base)', 'កម្រិតលើស (Comparative)', 'កម្រិតខ្ពស់បំផុត (Superlative)', 'អត្ថន័យ'],
      rows: [
        ['Big', 'Bigger than', 'The biggest', 'ធំ -> ធំជាង -> ធំបំផុត'],
        ['Tall', 'Taller than', 'The tallest', 'ខ្ពស់ -> ខ្ពស់ជាង -> ខ្ពស់បំផុត'],
        ['Fast', 'Faster than', 'The fastest', 'លឿន -> លឿនជាង -> លឿនបំផុត'],
        ['Expensive', 'More expensive than', 'The most expensive', 'ថ្លៃ -> ថ្លៃជាង -> ថ្លៃបំផុត'],
        ['Beautiful', 'More beautiful than', 'The most beautiful', 'ស្អាត -> ស្អាតជាង -> ស្អាតបំផុត'],
        ['Good', 'Better than', 'The best', 'ល្អ -> ល្អជាង -> ល្អបំផុត'],
        ['Bad', 'Worse than', 'The worst', 'អាក្រក់ -> អាក្រក់ជាង -> អាក្រក់បំផុត']
      ]
    },
    vocabulary: [
      { word: 'the biggest', khmerSound: 'ដឹ ប៊ីកហ្គេស្ត', meaningKhmer: 'ធំជាងគេបំផុត', example: 'Russia is the biggest country.' },
      { word: 'the most beautiful', khmerSound: 'ដឹ ម៉ូស ប៊ីយូធីហ្វុល', meaningKhmer: 'ស្អាតជាងគេបំផុត', example: 'She is the most beautiful bride.' },
      { word: 'the best', khmerSound: 'ដឹ ប៊េស្ត', meaningKhmer: 'ល្អជាងគេបំផុត', example: 'Practice makes the best results.' },
      { word: 'the fastest', khmerSound: 'ដឹ ហ្វាសស្ទេស្ត', meaningKhmer: 'លឿនជាងគេបំផុត', example: 'The cheetah is the fastest animal.' },
      { word: 'the worst', khmerSound: 'ដឹ វើស្ត', meaningKhmer: 'អាក្រក់ជាងគេបំផុត', example: 'That was the worst storm this year.' }
    ],
    samplePhrases: [
      {
        english: 'Who is the youngest person in your family?',
        khmerSound: 'ហ៊ូ អ៊ីស ដឹ យ៉ាំងហ្គេស្ត ភើសិន អ៊ីន យួរ ហ្វេមីលី?',
        khmerMeaning: 'តើនរណាជាកូនពៅ ឬក្មេងជាងគេបំផុតនៅក្នុងគ្រួសាររបស់អ្នក?'
      }
    ],
    quiz: {
      question: 'តើទម្រង់ Superlative នៃពាក្យ "Good" គឺជាអ្វី?',
      questionKhmer: 'What is the superlative form of "Good"?',
      options: ['The goodest', 'The better', 'The best', 'The most good'],
      correctIndex: 2,
      explanation: 'ពាក្យ "Good" ជាគុណនាមមិនទៀងទាត់ (Irregular)៖ Good -> Better than -> The best (ល្អបំផុត)។'
    }
  },

  // =========================================================================
  // LESSON 08: អាកាសធាតុ និងរដូវកាល (Weather & Seasons)
  // =========================================================================
  {
    id: 8,
    unitNumber: 'មេរៀនទី ០៨',
    titleKhmer: 'អាកាសធាតុ និងរដូវកាល',
    titleEnglish: 'Weather & Seasons',
    duration: '២៥ នាទី',
    descriptionKhmer: 'រៀនវាក្យសព្ទពិពណ៌នាអាកាសធាតុស៊ីជម្រៅ (Freezing, Humid, Stormy...) និងរបៀបសួរឆ្លើយការព្យាករណ៍អាកាសធាតុប្រចាំថ្ងៃ។',
    dialogue: [
      {
        speaker: 'Ken',
        speakerKhmer: 'ខេន',
        text: 'What\'s the weather forecast for tomorrow in Phnom Penh?',
        khmerSound: 'វ៉ាត់ស៍ ដឹ វ៉ែដឌើ ហ្វកាស្ត ហ្វ័រ ធូម៉ូរ៉ូ អ៊ីន ភ្នំពេញ?',
        meaningKhmer: 'តើការព្យាករណ៍អាកាសធាតុសម្រាប់ថ្ងៃស្អែកនៅភ្នំពេញយ៉ាងម៉េចដែរ?'
      },
      {
        speaker: 'Lina',
        speakerKhmer: 'លីណា',
        text: 'It\'s going to be very humid and sunny in the morning, around 34°C, but there might be a thunderstorm in the late afternoon.',
        khmerSound: 'អ៊ីតស៍ ហ្គោអ៊ីង ធូ ប៊ី វ៉េរី ហ្យូមីដ អ៊ែន សាន់នី... ថាន់ឌើស្តម...',
        meaningKhmer: 'នៅពេលព្រឹកនឹងមានសំណើមខ្លាំង និងមានពន្លឺថ្ងៃក្តៅប្រហែល ៣៤ អង្សាសេ ប៉ុន្តែអាចនឹងមានភ្លៀងផ្គររន្ទះនៅពេលរសៀល។'
      },
      {
        speaker: 'Ken',
        speakerKhmer: 'ខេន',
        text: 'Then I should carry an umbrella and wear light cotton clothes.',
        khmerSound: 'ដេន អាយ ស្ស៊ូដ ឃែរី អេន អាមប្រេឡា អ៊ែន វែរ ឡាយថ៍...',
        meaningKhmer: 'អញ្ចឹងខ្ញុំគួរតែយកឆត្រតាមខ្លួន និងស្លៀកសំលៀកបំពាក់កាតុងស្តើងៗស្រួលខ្លួន។'
      }
    ],
    vocabulary: [
      { word: 'Sunny', khmerSound: 'សាន់នី', meaningKhmer: 'មានពន្លឺថ្ងៃក្តៅ', example: 'It is a bright and sunny morning.' },
      { word: 'Rainy', khmerSound: 'រ៉េននី', meaningKhmer: 'មានភ្លៀងធ្លាក់', example: 'The rainy season in Cambodia lasts for months.' },
      { word: 'Stormy', khmerSound: 'ស្តមមី', meaningKhmer: 'មានព្យុះផ្គររន្ទះ', example: 'Boats stopped sailing due to stormy seas.' },
      { word: 'Freezing', khmerSound: 'ហ្វ្រីសហ្ស៊ីង', meaningKhmer: 'ត្រជាក់កក (ក្រោម ០ អង្សា)', example: 'The winter temperature was freezing cold.' },
      { word: 'Humid', khmerSound: 'ហ្យូមីដ', meaningKhmer: 'មានសំណើមខ្យល់ស្អុះស្អាប់', example: 'Tropical climate is usually very humid.' },
      { word: 'Foggy', khmerSound: 'ហ្វកហ្គី', meaningKhmer: 'មានអ័ព្ទចុះក្រាស់', example: 'Drive slowly in foggy weather.' },
      { word: 'Windy', khmerSound: 'វីនឌី', meaningKhmer: 'មានខ្យល់បក់បោកខ្លាំង', example: 'Flying a kite is fun on a windy afternoon.' },
      { word: 'Chilly', khmerSound: 'ឈីលលី', meaningKhmer: 'ត្រជាក់ស្រៀវស្រាញ', example: 'Bokor mountain is pleasantly chilly at night.' },
      { word: 'Overcast', khmerSound: 'អូវើខាស្ត', meaningKhmer: 'ផ្ទៃមេឃស្រទុំពពកខ្មៅ', example: 'The sky is completely overcast.' },
      { word: 'Forecast', khmerSound: 'ហ្វកាស្ត', meaningKhmer: 'ការព្យាករណ៍អាកាសធាតុ', example: 'According to the weather forecast, it will rain.' }
    ],
    samplePhrases: [
      {
        english: 'What is the temperature outside right now?',
        khmerSound: 'វ៉ាត់ អ៊ីស ដឹ ថេមប្រាឆើ អៅសាយដ៍ រ៉ាយថ៍ ណៅ?',
        khmerMeaning: 'តើសីតុណ្ហភាពនៅខាងក្រៅឥឡូវនេះប៉ុន្មានអង្សារដែរ?'
      },
      {
        english: 'It is humid and hot today.',
        khmerSound: 'អ៊ីត អ៊ីស ហ្យូមីដ អ៊ែន ហត ធូដេ។',
        khmerMeaning: 'ថ្ងៃនេះមានសំណើមស្អុះស្អាប់ និងក្តៅខ្លាំង។'
      }
    ],
    quiz: {
      question: 'តើពាក្យ "Humid" មានន័យថាយ៉ាងដូចម្តេច?',
      questionKhmer: 'What does "Humid" describe?',
      options: ['ត្រជាក់ខ្លាំងធ្លាក់ព្រិល', 'ស្អុះស្អាប់ និងមានសំណើមទឹកក្នុងខ្យល់ខ្ពស់', 'មានខ្យល់ព្យុះខ្លាំង', 'ស្ងួតហែងខ្លាំង'],
      correctIndex: 1,
      explanation: '"Humid" សំដៅលើអាកាសធាតុដែលមានចំហាយទឹកក្នុងខ្យល់ច្រើន ធ្វើឱ្យយើងមានអារម្មណ៍ស្អុះស្អាប់។'
    }
  },

  // =========================================================================
  // LESSON 09: គម្រោងអនាគតជាមួយ Be Going To (Future Plans)
  // =========================================================================
  {
    id: 9,
    unitNumber: 'មេរៀនទី ០៩',
    titleKhmer: 'គម្រោងអនាគតជាមួយ Be Going To',
    titleEnglish: 'Future Plans: Be Going To',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនរូបមន្ត S + am/is/are + going to + V សម្រាប់និយាយពីគម្រោងអនាគតដែលបានគ្រោងទុកជាមុនច្បាស់លាស់ និងការសន្ទនាសួរគម្រោង។',
    grammarRule: {
      formula: 'Affirmative: S + am / is / are + going to + V(base) | Negative: S + be + not + going to + V | Question: Am / Is / Are + S + going to + V?',
      explanation: 'ប្រើ "be going to" នៅពេលដែលយើងបានសម្រេចចិត្ត ឬរៀបចំផែនការទុកជាមុនរួចហើយ (Prior Intention/Plan) ឬនៅពេលដែលមានភស្តុតាងឃើញជាក់ស្តែងនៅចំពោះមុខ (Clear Evidence)។',
      subRules: [
        {
          title: 'I am going to ...',
          detail: 'I am going to travel to Siem Reap next Friday. (ខ្ញុំបានរៀបចំផែនការរួចហើយ)'
        },
        {
          title: 'He / She / It is going to ...',
          detail: 'Look at those dark clouds! It is going to rain soon. (មានភស្តុតាងពពកខ្មៅច្បាស់)'
        },
        {
          title: 'We / You / They are going to ...',
          detail: 'They are going to open a new coffee shop next month.'
        }
      ],
      examples: [
        {
          english: 'I am going to visit my parents this weekend.',
          khmerSound: 'អាយ អែម ហ្គោអ៊ីង ធូ វីស៊ីត ម៉ាយ ផេរ៉េនស៍ ឌីស វីកអ៊ិន។',
          khmerMeaning: 'ខ្ញុំនឹងទៅលេងឪពុកម្តាយរបស់ខ្ញុំនៅចុងសប្តាហ៍នេះ (បានគ្រោងទុកជាមុន)។'
        },
        {
          english: 'She is going to study economics in France next year.',
          khmerSound: 'ស្ស៊ី អ៊ីស ហ្គោអ៊ីង ធូ ស្តាឌី អ៊ីខូណូមិកស៍ អ៊ីន ហ្វ្រានស៍...',
          khmerMeaning: 'នាងនឹងទៅរៀនជំនាញសេដ្ឋកិច្ចនៅប្រទេសបារាំងនៅឆ្នាំក្រោយ។'
        },
        {
          english: 'Look at the traffic! We are going to be late for the meeting.',
          khmerSound: 'លុក អែត ដឹ ស្រ្តាហ្វិក! វី អា ហ្គោអ៊ីង ធូ ប៊ី ឡេត...',
          khmerMeaning: 'មើលស្ទះចរាចរណ៍ចុះ! ពួកយើងប្រាកដជាទៅប្រជុំយឺតហើយ (ភស្តុតាងជាក់ស្តែង)។'
        },
        {
          english: 'What are you going to do tomorrow evening?',
          khmerSound: 'វ៉ាត់ អា យូ ហ្គោអ៊ីង ធូ ឌូ ធូម៉ូរ៉ូ អ៊ីវនីង?',
          khmerMeaning: 'តើអ្នកមានគម្រោងធ្វើអ្វីនៅល្ងាចថ្ងៃស្អែក?'
        }
      ]
    },
    dialogue: [
      {
        speaker: 'Vireak',
        speakerKhmer: 'វិរៈ',
        text: 'What are you going to do during the Water Festival holiday?',
        khmerSound: 'វ៉ាត់ អា យូ ហ្គោអ៊ីង ធូ ឌូ ឌ្យូរីង ដឹ វ៉ត់ធើ ហ្វេសស្ទីវ៉ល ហូលីដេ?',
        meaningKhmer: 'តើអ្នកមានគម្រោងធ្វើអ្វីខ្លះអំឡុងពេលបុណ្យអុំទូក?'
      },
      {
        speaker: 'Thida',
        speakerKhmer: 'ធីតា',
        text: 'My family and I are going to travel to Mondulkiri. We already booked the hotel!',
        khmerSound: 'ម៉ាយ ហ្វេមីលី អ៊ែន អាយ អា ហ្គោអ៊ីង ធូ ស្រាវវ៉ល ធូ មណ្ឌលគិរី...',
        meaningKhmer: 'គ្រួសារខ្ញុំ និងខ្ញុំនឹងទៅដំណើរកម្សាន្តនៅមណ្ឌលគិរី។ ពួកយើងបានកក់សណ្ឋាគាររួចរាល់ហើយ!'
      },
      {
        speaker: 'Vireak',
        speakerKhmer: 'វិរៈ',
        text: 'That sounds exciting! How long are you going to stay there?',
        khmerSound: 'ដាត សោនស៍ អ៊ិចសាយធីង! ហៅ ឡង អា យូ ហ្គោអ៊ីង ធូ ស្តេ ដ៊ែរ?',
        meaningKhmer: 'ស្តាប់ទៅពិតជាគួរឱ្យរំភើបណាស់! តើអ្នកនឹងស្នាក់នៅទីនោះរយៈពេលប៉ុន្មានថ្ងៃ?'
      },
      {
        speaker: 'Thida',
        speakerKhmer: 'ធីតា',
        text: 'We are going to stay for three days and visit the waterfalls.',
        khmerSound: 'វី អា ហ្គោអ៊ីង ធូ ស្តេ ហ្វ័រ ស្រ៊ី ដេស អ៊ែន វីស៊ីត ដឹ វ៉ត់ធើហ្វលស៍។',
        meaningKhmer: 'ពួកយើងនឹងស្នាក់នៅ ៣ ថ្ងៃ និងទៅទស្សនាទឹកធ្លាក់នានា។'
      }
    ],
    vocabulary: [
      { word: 'be going to', khmerSound: 'ប៊ី ហ្គោអ៊ីង ធូ', meaningKhmer: 'នឹង (មានគម្រោងទុកជាមុន)', example: 'I am going to buy a car.' },
      { word: 'plan', khmerSound: 'ផ្លែន', meaningKhmer: 'ផែនការ / គម្រោង', example: 'What is your plan for the future?' },
      { word: 'intend', khmerSound: 'អ៊ីនថេន', meaningKhmer: 'មានបំណង', example: 'We intend to expand our business.' },
      { word: 'book in advance', khmerSound: 'ប៊ុក អ៊ីន អែដវ៉ានស៍', meaningKhmer: 'កក់ទុកមុន', example: 'Book flights in advance to get low prices.' }
    ],
    samplePhrases: [
      {
        english: 'Are you going to attend the seminar tomorrow?',
        khmerSound: 'អា យូ ហ្គោអ៊ីង ធូ អឹថេន ដឹ សេមីណា ធូម៉ូរ៉ូ?',
        khmerMeaning: 'តើអ្នកនឹងចូលរួមសិក្ខាសាលានៅថ្ងៃស្អែកដែរឬទេ?'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសចម្លើយត្រឹមត្រូវ៖ "Look at the dark clouds! It ______ rain."',
      questionKhmer: 'Choose: "Look at the dark clouds! It ______ rain."',
      options: ['is going to', 'was', 'went to', 'are going to'],
      correctIndex: 0,
      explanation: 'ដោយសារមានភស្តុតាងជាក់ស្តែង (ពពកខ្មៅ) និងប្រធានជា "It" ដូច្នេះត្រូវប្រើ "is going to rain"។'
    }
  },

  // =========================================================================
  // LESSON 10: ការសន្យា និងការសម្រេចចិត្តភ្លាមៗជាមួយ Will (Future with Will)
  // =========================================================================
  {
    id: 10,
    unitNumber: 'មេរៀនទី ១០',
    titleKhmer: 'ការសន្យា និងការសម្រេចចិត្តភ្លាមៗជាមួយ Will',
    titleEnglish: 'Future with Will',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនប្រើ Will / Won\'t សម្រាប់ការជួយ សន្យា ឬសម្រេចចិត្តភ្លាមៗនៅពេលកំពុងនិយាយ និងការប្រៀបធៀបភាពខុសគ្នារវាង Will និង Be Going To។',
    grammarRule: {
      formula: 'Affirmative: S + will + V(base) | Negative: S + will not (won\'t) + V | Question: Will + S + V(base)?',
      explanation: 'ប្រើ "will" នៅពេលសម្រេចចិត្តធ្វើអ្វីមួយភ្លាមៗនៅពេលកំពុងនិយាយ (Spontaneous Decision), ការផ្តល់ជំនួយ (Offers), ការសន្យា (Promises), ឬការទស្សន៍ទាយទូទៅ (Predictions)។',
      subRules: [
        {
          title: '១. ការសម្រេចចិត្តភ្លាមៗ (Instant Decision):',
          detail: 'The phone is ringing. I will answer it! (ទូរស័ព្ទរោទិ៍ ខ្ញុំនឹងទទួល)'
        },
        {
          title: '២. ការផ្តល់ជំនួយ (Offers of help):',
          detail: 'That bag looks heavy. I will carry it for you.'
        },
        {
          title: '៣. ការសន្យា (Promises):',
          detail: 'I promise I will not tell anyone your secret. (I won\'t tell)'
        }
      ],
      examples: [
        {
          english: 'Don\'t worry, I will help you with your homework.',
          khmerSound: 'ដោនថ៍ វ៉ឺរី, អាយ វីល ហែលភ៍ យូ វីត យួរ ហូមវើក។',
          khmerMeaning: 'កុំបារម្ភអី ខ្ញុំនឹងជួយអ្នកធ្វើកិច្ចការផ្ទះ (ផ្តល់ជំនួយ)។'
        },
        {
          english: 'I will call you as soon as I arrive at the airport.',
          khmerSound: 'អាយ វីល ខល យូ អែស ស៊ូន អែស អាយ អឺរ៉ាយវ៍ អែត ដឹ អ៊ែរផត។',
          khmerMeaning: 'ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកភ្លាម ពេលខ្ញុំទៅដល់ព្រលានយន្តហោះ (ការសន្យា)។'
        },
        {
          english: 'I think tomorrow will be a sunny and warm day.',
          khmerSound: 'អាយ ធីង ធូម៉ូរ៉ូ វីល ប៊ី អឹ សាន់នី អ៊ែន វ៉ម ដេ។',
          khmerMeaning: 'ខ្ញុំគិតថាថ្ងៃស្អែកនឹងក្លាយជាថ្ងៃដែលមានពន្លឺថ្ងៃ និងកក់ក្តៅ (ការទស្សន៍ទាយ)។'
        },
        {
          english: 'I won\'t forget your kindness.',
          khmerSound: 'អាយ វ៉ុនថ៍ ហ្វ័រហ្គេត យួរ ខាញដ៍ណេស។',
          khmerMeaning: 'ខ្ញុំនឹងមិនបំភ្លេចនូវទឹកចិត្តសប្បុរសរបស់អ្នកឡើយ (won\'t = will not)។'
        }
      ]
    },
    tableData: {
      headers: ['លក្ខខណ្ឌប្រើប្រាស់', 'Will + V(base)', 'Be going to + V(base)'],
      rows: [
        ['ការសម្រេចចិត្ត (Decision)', 'សម្រេចចិត្តភ្លាមៗពេលកំពុងនិយាយ (Spontaneous)', 'បានគិត និងរៀបចំគម្រោងទុកជាមុន (Planned)'],
        ['ឧទាហរណ៍ជាក់ស្តែង', '"I\'m thirsty. I will buy a drink."', '"I have saved money. I\'m going to buy a bike."'],
        ['ការទស្សន៍ទាយ (Prediction)', 'ផ្អែកលើការគិត ឬអារម្មណ៍ផ្ទាល់ខ្លួន (I think...)', 'ផ្អែកលើភស្តុតាងជាក់ស្តែងចំពោះមុខ (Clear evidence)'],
        ['ការសន្យា និងជួយ (Offer/Promise)', 'ប្រើ Will ជានិច្ច ("I will help you!")', 'មិនប្រើ be going to ក្នុងការសន្យាភ្លាមៗទេ']
      ]
    },
    vocabulary: [
      { word: 'will', khmerSound: 'វីល', meaningKhmer: 'នឹង (សម្រេចចិត្តភ្លាមៗ / សន្យា)', example: 'I will help you carry this.' },
      { word: 'won\'t', khmerSound: 'វ៉ុនថ៍', meaningKhmer: 'នឹងមិន (will not)', example: 'I won\'t be late again.' },
      { word: 'promise', khmerSound: 'ប្រូមីស', meaningKhmer: 'សន្យា', example: 'I promise to work hard.' },
      { word: 'offer', khmerSound: 'អហ្វហ្វើ', meaningKhmer: 'ការផ្ដល់ជូន / ជួយ', example: 'He offered to drive me home.' }
    ],
    samplePhrases: [
      {
        english: 'Will you marry me? -> Yes, I will!',
        khmerSound: 'វីល យូ ម៉ែរី មី? យេស, អាយ វីល!',
        khmerMeaning: 'តើអូនព្រមរៀបការជាមួយបងទេ? ចាស អូនព្រម!'
      }
    ],
    quiz: {
      question: 'មិត្តភក្តិរបស់អ្នកកំពុងយួរឥវ៉ាន់ធ្ងន់ តើអ្នកគួរនិយាយឃ្លាណាដើម្បីជួយ?',
      questionKhmer: 'Your friend is carrying heavy bags. What do you say to offer help?',
      options: [
        'I am going to carry your bag.',
        'I will help you carry your bag.',
        'I carried your bag.',
        'I am carrying your bag yesterday.'
      ],
      correctIndex: 1,
      explanation: 'នៅពេលផ្តល់ជំនួយភ្លាមៗនៅចំពោះមុខ យើងត្រូវប្រើ "I will help you..."។'
    }
  },

  // =========================================================================
  // LESSON 11: សុខភាព និងការទៅជួបគ្រូពេទ្យ (Health & Doctor Visit)
  // =========================================================================
  {
    id: 11,
    unitNumber: 'មេរៀនទី ១១',
    titleKhmer: 'សុខភាព និងការទៅជួបគ្រូពេទ្យ',
    titleEnglish: 'Health & Doctor Visit',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'រៀនពាក្យអាការៈជំងឺទូទៅ ការសន្ទនានៅគ្លីនិក និងរបៀបផ្តល់ដំបូន្មានសុខភាពដោយប្រើ Should / Shouldn\'t។',
    grammarRule: {
      formula: 'Giving Advice: S + should + V(base) | S + shouldn\'t + V(base)',
      explanation: 'ប្រើ "should" (គួរតែ) និង "shouldn\'t" (មិនគួរ) សម្រាប់ផ្តល់ដំបូន្មាន ឬការណែនាំពីសុខភាព។',
      examples: [
        {
          english: 'You have a high fever. You should see a doctor immediately.',
          khmerSound: 'យូ ហាវ អឹ ហាយ ហ្វីវវើ។ យូ ស្ស៊ូដ ស៊ី អឹ ដុកធើ...',
          khmerMeaning: 'អ្នកក្តៅខ្លួនខ្លាំងណាស់។ អ្នកគួរតែទៅជួបគ្រូពេទ្យជាបន្ទាន់ (should see)។'
        },
        {
          english: 'You have a sore throat. You shouldn\'t drink iced water.',
          khmerSound: 'យូ ហាវ អឹ ស័រ ស្រូត។ យូ ស្ស៊ូដិនថ៍ ឌ្រីង អាយស៍ វ៉ត់ធើ។',
          khmerMeaning: 'អ្នកឈឺបំពង់ក។ អ្នកមិនគួរផឹកទឹកកកទេ (shouldn\'t drink)។'
        },
        {
          english: 'He should get at least eight hours of sleep every night.',
          khmerSound: 'ហ៊ី ស្ស៊ូដ ហ្គេត អែត លីស អេត អ៊ូវើស អហ្វ ស្លីប...',
          khmerMeaning: 'គាត់គួរតែគេងឱ្យបានយ៉ាងហោចណាស់ ៨ ម៉ោងរៀងរាល់យប់។'
        }
      ]
    },
    dialogue: [
      {
        speaker: 'Doctor',
        speakerKhmer: 'គ្រូពេទ្យ',
        text: 'Good morning, Mr. Seyha. Please take a seat. How can I help you today?',
        khmerSound: 'ហ្គូដ ម៉នីង, មីស្ទ័រ សីហា។ ភ្លីស ថេក អឹ ស៊ីត...',
        meaningKhmer: 'អរុណសួស្តីលោកសីហា។ សូមអញ្ជើញអង្គុយ។ តើមានបញ្ហាសុខភាពអ្វីដែរ?'
      },
      {
        speaker: 'Seyha',
        speakerKhmer: 'សីហា',
        text: 'Doctor, I have had a severe stomachache and felt dizzy since last night.',
        khmerSound: 'ដុកធើ, អាយ ហាវ ហែដ អឹ ស៊ីវៀ ស្តាម៉ាក់ខេក អ៊ែន ហ្វេលថ៍ ឌីសហ្ស៊ី...',
        meaningKhmer: 'លោកវេជ្ជបណ្ឌិត ខ្ញុំឈឺពោះខ្លាំងណាស់ ហើយមានអារម្មណ៍វិលមុខតាំងពីយប់មិញ។'
      },
      {
        speaker: 'Doctor',
        speakerKhmer: 'គ្រូពេទ្យ',
        text: 'Did you eat anything unusual yesterday evening?',
        khmerSound: 'ឌីដ យូ អ៊ីត អេនីធីង អាន់យូហ្សួល យេសធើដេ អ៊ីវនីង?',
        meaningKhmer: 'តើអ្នកបានញ៉ាំអ្វីប្លែកដែរឬទេកាលពីល្ងាចម្សិលមិញ?'
      },
      {
        speaker: 'Seyha',
        speakerKhmer: 'សីហា',
        text: 'I ate spicy raw seafood with friends at a street market.',
        khmerSound: 'អាយ អេត ស្ប៉ាយស៊ី រ៉ ស៊ីហ្វ៊ូត វីត ហ្វ្រេនស៍...',
        meaningKhmer: 'ខ្ញុំបានញ៉ាំគ្រឿងសមុទ្រឆៅហឹរៗជាមួយមិត្តភក្តិនៅឯផ្សាររាត្រី។'
      },
      {
        speaker: 'Doctor',
        speakerKhmer: 'គ្រូពេទ្យ',
        text: 'I see. It looks like mild food poisoning. You should take this medicine before each meal, drink electrolyte water, and you shouldn\'t eat oily or spicy food for three days.',
        khmerSound: 'អាយ ស៊ី... យូ ស្ស៊ូដ ថេក ឌីស មេឌីស៊ីន... យូ ស្ស៊ូដិនថ៍ អ៊ីត អយលី...',
        meaningKhmer: 'ខ្ញុំយល់ហើយ។ មើលទៅដូចជាការពុលអាហារកម្រិតស្រាល។ អ្នកគួរតែលេបថ្នាំនេះមុនបាយ ផឹកទឹកអូហារ៉ាល និងមិនត្រូវញ៉ាំអាហារមានខ្លាញ់ ឬហឹររយៈពេល ៣ ថ្ងៃឡើយ។'
      }
    ],
    vocabulary: [
      { word: 'Headache', khmerSound: 'ហេដដេក', meaningKhmer: 'ឈឺក្បាល', example: 'Take an aspirin for your headache.' },
      { word: 'Stomachache', khmerSound: 'ស្តាម៉ាក់ខេក', meaningKhmer: 'ឈឺពោះ', example: 'Eating unclean food causes stomachache.' },
      { word: 'Fever', khmerSound: 'ហ្វីវវើ', meaningKhmer: 'ក្តៅខ្លួន / គ្រុន', example: 'He has a fever of 39°C.' },
      { word: 'Cold', khmerSound: 'ខូល', meaningKhmer: 'ជំងឺផ្តាសាយ', example: 'Catching a cold in the rain.' },
      { word: 'Cough', khmerSound: 'ខហ្វ', meaningKhmer: 'ក្អក', example: 'Drink honey tea for a dry cough.' },
      { word: 'Sore throat', khmerSound: 'ស័រ ស្រូត', meaningKhmer: 'ឈឺបំពង់ក', example: 'I can hardly swallow because of my sore throat.' },
      { word: 'Backache', khmerSound: 'ប៊ែកខេក', meaningKhmer: 'ឈឺខ្នង', example: 'Sitting too long causes backache.' },
      { word: 'Toothache', khmerSound: 'ធូតខេក', meaningKhmer: 'ឈឺធ្មេញ', example: 'See a dentist if you have a toothache.' },
      { word: 'Allergy', khmerSound: 'អ៊ែឡឺជី', meaningKhmer: 'ប្រតិកម្មអាលែកហ្ស៊ី', example: 'He has a peanut allergy.' },
      { word: 'Flu', khmerSound: 'ភ្លូ', meaningKhmer: 'ជំងឺផ្តាសាយធំ', example: 'Flu symptoms include muscle aches and chills.' }
    ],
    samplePhrases: [
      {
        english: 'You should get some rest and drink plenty of fluids.',
        khmerSound: 'យូ ស្ស៊ូដ ហ្គេត សាំ រ៉េស្ត អ៊ែន ឌ្រីង ភ្លេនធី អហ្វ ភ្លូអីដស៍។',
        khmerMeaning: 'អ្នកគួរតែសម្រាកឱ្យបានច្រើន និងពិសាទឹកឱ្យបានច្រើន។'
      }
    ],
    quiz: {
      question: 'តើប្រយោគណាមួយដែលផ្តល់ដំបូន្មានវេជ្ជសាស្ត្រត្រឹមត្រូវ?',
      questionKhmer: 'Which sentence correctly gives medical advice?',
      options: [
        'You should to drink cold water.',
        'You should drink plenty of warm water.',
        'You shouldn\'t see a doctor.',
        'You should drinking hot coffee.'
      ],
      correctIndex: 1,
      explanation: 'បន្ទាប់ពីម៉ូឌាល់ "should" កិរិយាស័ព្ទត្រូវតែជាទម្រង់ដើម V(base) ដោយគ្មាន "to" ឬ "-ing" ឡើយ។ ដូច្នេះ "You should drink plenty of warm water" គឺត្រឹមត្រូវ។'
    }
  },

  // =========================================================================
  // LESSON 12: ការភ្ជាប់គំនិត និងប្រយោគ (Linking Words: And, But, Because, So)
  // =========================================================================
  {
    id: 12,
    unitNumber: 'មេរៀនទី ១២',
    titleKhmer: 'ការភ្ជាប់គំនិត និងប្រយោគ',
    titleEnglish: 'Linking Words: And, But, Because, So',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនរបៀបប្រើពាក្យភ្ជាប់ And, But, Because, So ដើម្បីបង្កើតប្រយោគវែង មានន័យច្បាស់លាស់ និងរលូនល្អ ព្រមទាំងលំហាត់ផ្គុំប្រយោគជាក់ស្តែង។',
    grammarRule: {
      formula: 'And (Addition) | But (Contrast) | Because (Reason) | So (Result)',
      explanation: 'ពាក្យភ្ជាប់ប្រយោគ (Conjunctions/Linking words) ជួយតភ្ជាប់ប្រយោគទោល ២ ឱ្យក្លាយជាប្រយោគផ្សំមួយដែលស្តាប់ទៅដូចជាភាសារបស់ជនជាតិដើម។',
      subRules: [
        {
          title: '១. AND (និង / ព្រមទាំង): បន្ថែមព័ត៌មានបន្ថែមស្របគ្នា',
          detail: 'I like tea, and my brother likes coffee.'
        },
        {
          title: '២. BUT (ប៉ុន្តែ): បង្ហាញពីគំនិតផ្ទុយគ្នា',
          detail: 'He studied hard, but he failed the exam.'
        },
        {
          title: '៣. BECAUSE (ពីព្រោះ / ដោយសារតែ): បង្ហាញពីហេតុផល',
          detail: 'We stayed indoors because it was raining heavily.'
        },
        {
          title: '៤. SO (ដូច្នេះ / ហេតុនេះហើយ): បង្ហាញពីផលវិបាក ឬលទ្ធផល',
          detail: 'I was very tired, so I went to bed early.'
        }
      ],
      examples: [
        {
          english: 'She speaks English fluently, and she also knows some French.',
          khmerSound: 'ស្ស៊ី ស្ពីកស៍ អ៊ីងគ្លីស ភ្លូអិនលី, អ៊ែន ស្ស៊ី អលសូ ណូស...',
          khmerMeaning: 'នាងនិយាយភាសាអង់គ្លេសយ៉ាងស្ទាត់ជំនាញ ហើយនាងក៏ចេះភាសាបារាំងខ្លះផងដែរ (and)។'
        },
        {
          english: 'The restaurant was very famous, but the food was disappointing.',
          khmerSound: 'ដឹ រ៉េសស្ទឺរ៉ង់ វ៉ស វ៉េរី ហ្វេមម៉ឺស, បាត ដឹ ហ្វ៊ូត វ៉ស...',
          khmerMeaning: 'ភោជនីយដ្ឋាននោះល្បីល្បាញខ្លាំងណាស់ ប៉ុន្តែម្ហូបបែរជាមិនសូវឆ្ងាញ់ទៅវិញ (but)។'
        },
        {
          english: 'He woke up late because his alarm did not ring.',
          khmerSound: 'ហ៊ី វ៉ូក អាប់ ឡេត ប៊ីខស ហ៊ីស អាឡាម ឌីដ ណត រីង។',
          khmerMeaning: 'គាត់បានភ្ញាក់ពីគេងយឺត ពីព្រោះនាឡិការោទិ៍របស់គាត់មិនរោទិ៍ (because)។'
        },
        {
          english: 'It was raining cats and dogs, so we decided to cancel the picnic.',
          khmerSound: 'អ៊ីត វ៉ស រ៉េននីង ខេតស៍ អ៊ែន ដកស៍, សូ វី ឌីសាយឌីដ...',
          khmerMeaning: 'មេឃកំពុងភ្លៀងធ្លាក់ខ្លាំង ដូច្នេះពួកយើងបានសម្រេចចិត្តលុបចោលការដើរលេង (so)។'
        }
      ]
    },
    sentenceCombos: [
      {
        sentence1: 'I wanted to buy the red jacket.',
        sentence2: 'It was too expensive.',
        linker: 'but',
        combined: 'I wanted to buy the red jacket, but it was too expensive.',
        meaningKhmer: 'ខ្ញុំចង់ទិញអាវរងាពណ៌ក្រហមនោះ ប៉ុន្តែវាថ្លៃពេក។'
      },
      {
        sentence1: 'She studied diligently every evening.',
        sentence2: 'She passed the exam with flying colors.',
        linker: 'so',
        combined: 'She studied diligently every evening, so she passed the exam with flying colors.',
        meaningKhmer: 'នាងបានខិតខំរៀនសូត្ររៀងរាល់ល្ងាច ដូច្នេះនាងបានប្រឡងជាប់ដោយពិន្ទុខ្ពស់។'
      },
      {
        sentence1: 'We stayed at home.',
        sentence2: 'There was a big storm outside.',
        linker: 'because',
        combined: 'We stayed at home because there was a big storm outside.',
        meaningKhmer: 'ពួកយើងបាននៅផ្ទះ ដោយសារតែមានព្យុះធំនៅខាងក្រៅ។'
      },
      {
        sentence1: 'He likes swimming.',
        sentence2: 'He plays tennis every weekend.',
        linker: 'and',
        combined: 'He likes swimming, and he plays tennis every weekend.',
        meaningKhmer: 'គាត់ចូលចិត្តហែលទឹក ហើយគាត់ក៏លេងកីឡាវាយកូនបាល់រៀងរាល់ចុងសប្តាហ៍ផងដែរ។'
      }
    ],
    vocabulary: [
      { word: 'and', khmerSound: 'អ៊ែន', meaningKhmer: 'និង / ហើយ (បន្ថែមគំនិត)', example: 'I like apples and oranges.' },
      { word: 'but', khmerSound: 'បាត', meaningKhmer: 'ប៉ុន្តែ (គំនិតផ្ទុយគ្នា)', example: 'He is rich but unhappy.' },
      { word: 'because', khmerSound: 'ប៊ីខស', meaningKhmer: 'ពីព្រោះ / ដោយសារតែ (ហេតុផល)', example: 'I stayed home because I was ill.' },
      { word: 'so', khmerSound: 'សូ', meaningKhmer: 'ដូច្នេះ / ហេតុនេះ (លទ្ធផល)', example: 'I was tired, so I rested.' }
    ],
    samplePhrases: [
      {
        english: 'Because of the heavy rain, the flight was delayed.',
        khmerSound: 'ប៊ីខស អហ្វ ដឹ ហេវី រ៉េន, ដឹ ហ្វ្លាយថ៍ វ៉ស ឌីឡេដ។',
        khmerMeaning: 'ដោយសារតែភ្លៀងធ្លាក់ខ្លាំង ជើងហោះហើរត្រូវបានពន្យារពេល។'
      }
    ],
    quiz: {
      question: 'បំពេញចន្លោះដោយប្រើពាក្យភ្ជាប់ត្រឹមត្រូវ៖ "I wanted to call you, ______ my phone battery was completely dead."',
      questionKhmer: 'Complete: "I wanted to call you, ______ my phone battery was completely dead."',
      options: ['and', 'but', 'so', 'or'],
      correctIndex: 1,
      explanation: 'ប្រយោគនេះបង្ហាញពីគំនិតផ្ទុយគ្នា (ចង់ទូរស័ព្ទ ប៉ុន្តែទូរស័ព្ទអស់ថ្ម) ដូច្នេះត្រូវប្រើ "but"។'
    }
  }
];
