export interface VocabularyWord {
  word: string;
  khmerSound: string;
  meaningKhmer: string;
  example: string;
  exampleKhmer?: string;
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

export interface EmailSampleItem {
  subject: string;
  subjectKhmer: string;
  sender: string;
  recipient: string;
  bodyEnglish: string;
  bodyKhmer: string;
}

export interface LevelIntermediateLesson {
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
  emailSample?: EmailSampleItem;
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

export const LEVEL_INTERMEDIATE_LESSONS: LevelIntermediateLesson[] = [
  // =========================================================================
  // LESSON 01: បច្ចុប្បន្នកាលបរិបូរណ៍ (Present Perfect Tense)
  // =========================================================================
  {
    id: 1,
    unitNumber: 'មេរៀនទី ០១',
    titleKhmer: 'បច្ចុប្បន្នកាលបរិបូរណ៍',
    titleEnglish: 'Present Perfect Tense',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'ស្វែងយល់ពីរូបមន្ត S + have/has + V3 សម្រាប់ពិពណ៌នាពីបទពិសោធន៍ជីវិត (Life Experience) និងការប្រើប្រាស់ពាក្យគន្លឹះ Ever, Never, Already, Yet, Just ជាមួយឧទាហរណ៍ ១០ ប្រយោគ។',
    grammarRule: {
      formula: 'Affirmative: S + have / has + V3 | Negative: S + have / has + not + V3 | Question: Have / Has + S + V3?',
      explanation: 'ប្រើសម្រាប់សកម្មភាពដែលបានកើតឡើងក្នុងអតីតកាលនៅពេលវេលាមិនជាក់លាក់ ដោយផ្តោតលើបទពិសោធន៍ (Experience) ឬលទ្ធផលដែលនៅតែមានឥទ្ធិពលមកដល់បច្ចុប្បន្ន។',
      subRules: [
        {
          title: 'Ever (ធ្លាប់):',
          detail: 'ប្រើក្នុងប្រយោគសំណួរ ឧ. "Have you ever been to Japan?" (តើអ្នកធ្លាប់ទៅប្រទេសជប៉ុនទេ?)'
        },
        {
          title: 'Never (មិនដែល):',
          detail: 'ប្រើក្នុងប្រយោគស្របដែលមានអត្ថន័យអវិជ្ជមាន ឧ. "I have never eaten sushi."'
        },
        {
          title: 'Already (រួចរាល់ហើយ):',
          detail: 'ប្រើនៅពេលសកម្មភាពមួយបានបញ្ចប់លឿនជាងការរំពឹងទុក ឧ. "I have already finished my project."'
        },
        {
          title: 'Yet (នៅឡើយ):',
          detail: 'ប្រើនៅចុងប្រយោគបដិសេធ និងសំណួរ ឧ. "Has the plane arrived yet? / I haven\'t seen it yet."'
        },
        {
          title: 'Just (ទើបតែ):',
          detail: 'ប្រើសម្រាប់សកម្មភាពដែលទើបតែកើតឡើងមុននេះបន្តិច ឧ. "She has just called me."'
        }
      ],
      examples: [
        {
          english: 'I have visited Angkor Wat three times.',
          khmerSound: 'អាយ ហាវ វីស៊ីធីដ អង្គរវត្ត ស្រ៊ី ថាមស៍។',
          khmerMeaning: '(+) ខ្ញុំធ្លាប់បានទៅទស្សនាប្រាសាទអង្គរវត្តចំនួន ៣ ដងមកហើយ (បទពិសោធន៍)។'
        },
        {
          english: 'Have you ever tried traditional Khmer noodles?',
          khmerSound: 'ហាវ យូ អេវវើ ស្រ្តាយដ៍ ត្រាឌីស្សិនណល ខ្មែរ នូឌលស៍?',
          khmerMeaning: '(?) តើអ្នកធ្លាប់បានភ្លក់នំបញ្ចុកខ្មែរប្រពៃណីដែរឬទេ? (ever)'
        },
        {
          english: 'She has never traveled abroad alone.',
          khmerSound: 'ស្ស៊ី ហាស ណេវវើ ស្រាវវ៉លដ៍ អឹប្រត អឹឡូន។',
          khmerMeaning: '(-) នាងមិនដែលបានធ្វើដំណើរកម្សាន្តទៅក្រៅប្រទេសតែម្នាក់ឯងនោះឡើយ (never)។'
        },
        {
          english: 'We have already submitted our monthly report.',
          khmerSound: 'វី ហាវ អលរ៉េឌី សាប់មីតធីដ អ៊ួរ ម៉ានថ៍លី រីផត។',
          khmerMeaning: '(+) ពួកយើងបានបញ្ជូនរបាយការណ៍ប្រចាំខែរួចរាល់ហើយ (already)។'
        },
        {
          english: 'They haven\'t received the confirmation email yet.',
          khmerSound: 'ដេ ហាវវិនថ៍ រីស៊ីវដ៍ ដឹ ខនហ្វឺមេសិន អ៊ីម៉ែល យេត។',
          khmerMeaning: '(-) ពួកគេមិនទាន់បានទទួលអ៊ីមែលបញ្ជាក់នៅឡើយទេ (yet នៅចុងប្រយោគ)។'
        },
        {
          english: 'He has just stepped out of the office.',
          khmerSound: 'ហ៊ី ហាស ចាស្ត ស្តេបថ៍ អៅ អហ្វ ឌី អហ្វីស។',
          khmerMeaning: '(+) គាត់ទើបតែដើរចេញពីការិយាល័យមុននេះបន្តិច (just)។'
        },
        {
          english: 'Have you finished your homework yet?',
          khmerSound: 'ហាវ យូ ហ្វីនីសថ៍ យួរ ហូមវើក យេត?',
          khmerMeaning: '(?) តើអ្នកបានធ្វើកិច្ចការផ្ទះរួចរាល់ហើយឬនៅ?'
        },
        {
          english: 'I have lost my car keys and cannot find them.',
          khmerSound: 'អាយ ហាវ ឡូសថ៍ ម៉ាយ ខា ឃីស អ៊ែន ខេនណត ហ្វោនដ៍ ដេម។',
          khmerMeaning: '(+) ខ្ញុំបានបាត់កូនសោឡាន ហើយរកមិនឃើញរហូតមកដល់ពេលនេះ (លទ្ធផលបច្ចុប្បន្ន)។'
        },
        {
          english: 'Has she ever met a famous Hollywood celebrity?',
          khmerSound: 'ហាស ស្ស៊ី អេវវើ មេត អឹ ហ្វេមម៉ឺស ហូលីវូដ សេឡេប្រ៊ីធី?',
          khmerMeaning: '(?) តើនាងធ្លាប់បានជួបតារាល្បីហូលីវូដដែរឬទេ?'
        },
        {
          english: 'We have lived in Phnom Penh for over a decade.',
          khmerSound: 'វី ហាវ លីវដ៍ អ៊ីន ភ្នំពេញ ហ្វ័រ អូវវើ អឹ ដេកខេដ។',
          khmerMeaning: '(+) ពួកយើងបានរស់នៅក្នុងរាជធានីភ្នំពេញអស់រយៈពេលជាងមួយទសវត្សរ៍មកហើយ។'
        }
      ]
    },
    vocabulary: [
      { word: 'ever', khmerSound: 'អេវវើ', meaningKhmer: 'ធ្លាប់ (ប្រើក្នុងសំណួរ)', example: 'Have you ever flown in a helicopter?' },
      { word: 'never', khmerSound: 'ណេវវើ', meaningKhmer: 'មិនដែល', example: 'I have never seen snow.' },
      { word: 'already', khmerSound: 'អលរ៉េឌី', meaningKhmer: 'រួចរាល់ហើយ', example: 'She has already had lunch.' },
      { word: 'yet', khmerSound: 'យេត', meaningKhmer: 'នៅឡើយ / ហើយឬនៅ', example: 'I haven\'t decided yet.' },
      { word: 'just', khmerSound: 'ចាស្ត', meaningKhmer: 'ទើបតែ', example: 'They have just arrived.' }
    ],
    samplePhrases: [
      {
        english: 'Have you ever been to Thailand? -> Yes, I have.',
        khmerSound: 'ហាវ យូ អេវវើ ប៊ីន ធូ ថៃលែន? យេស, អាយ ហាវ។',
        khmerMeaning: 'តើអ្នកធ្លាប់ទៅប្រទេសថៃទេ? បាទ/ចាស ខ្ញុំធ្លាប់ទៅ។'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសពាក្យត្រឹមត្រូវដាក់ក្នុងចន្លោះ៖ "I haven\'t finished reading this book ______."',
      questionKhmer: 'Choose the correct word: "I haven\'t finished reading this book ______."',
      options: ['already', 'yet', 'ever', 'just'],
      correctIndex: 1,
      explanation: 'នៅក្នុងប្រយោគបដិសេធ (haven\'t finished) យើងត្រូវប្រើ "yet" នៅចុងប្រយោគ ដែលមានន័យថា «នៅឡើយទេ»។'
    }
  },

  // =========================================================================
  // LESSON 02: ភាពខុសគ្នារវាង Present Perfect និង Past Simple
  // =========================================================================
  {
    id: 2,
    unitNumber: 'មេរៀនទី ០២',
    titleKhmer: 'ភាពខុសគ្នារវាង Present Perfect និង Past Simple',
    titleEnglish: 'Present Perfect vs. Past Simple',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'ប្រៀបធៀបយ៉ាងច្បាស់លាស់រវាងកាលទាំងពីរ៖ ពេលណាមានបញ្ជាក់ពេលវេលាជាក់លាក់ (Past Simple) និងពេលណាគ្មានពេលវេលាជាក់លាក់ (Present Perfect) ព្រមទាំងការសន្ទនាគំរូ។',
    grammarRule: {
      formula: 'Past Simple: S + V2 + Past Time (yesterday, last year, in 2023) | Present Perfect: S + have/has + V3 (Unspecified / Life Experience)',
      explanation: 'កំហុសទូទៅបំផុតរបស់អ្នករៀនភាសាអង់គ្លេស គឺការច្រឡំកាលទាំងពីរនេះ។ ច្បាប់ងាយចងចាំ៖ ប្រសិនបើមានបញ្ជាក់ពេលវេលាជាក់លាក់ (Specific finished time) ត្រូវប្រើ Past Simple ដាច់ខាត!',
      examples: [
        {
          english: 'Have you ever been to Singapore? — Yes, I went there last year.',
          khmerSound: 'ហាវ យូ អេវវើ ប៊ីន ធូ ស៊ីងហ្គាផូ? — យេស, អាយ វ៉ែនថ៍ ដ៊ែរ ឡាស យា។',
          khmerMeaning: 'សំណួរគ្មានពេលជាក់លាក់ប្រើ Present Perfect ប៉ុន្តែចម្លើយមាន "last year" ត្រូវប្រើ Past Simple (went)។'
        },
        {
          english: 'I have lost my passport. (I still don\'t have it now)',
          khmerSound: 'អាយ ហាវ ឡូសថ៍ ម៉ាយ ផាសស្ព័ត។',
          khmerMeaning: 'ខ្ញុំបានបាត់លិខិតឆ្លងដែន (លទ្ធផលបច្ចុប្បន្ន៖ ឥឡូវនៅតែបាត់)។'
        },
        {
          english: 'I lost my passport yesterday, but I found it this morning.',
          khmerSound: 'អាយ ឡូសថ៍ ម៉ាយ ផាសស្ព័ត យេសធើដេ, បាត អាយ ហ្វោនដ៍ អ៊ីត...',
          khmerMeaning: 'ខ្ញុំបានបាត់លិខិតឆ្លងដែនកាលពីម្សិលមិញ ប៉ុន្តែរកឃើញវិញព្រឹកមិញនេះ (Past Simple ទាំងពីរ)។'
        }
      ]
    },
    tableData: {
      headers: ['លក្ខខណ្ឌប្រៀបធៀប', 'Present Perfect (have/has + V3)', 'Past Simple (V2)'],
      rows: [
        ['ពេលវេលាកើតឡើង', 'ពេលវេលាមិនជាក់លាក់ / បទពិសោធន៍ជីវិត', 'ពេលវេលាជាក់លាក់បានបញ្ចប់ (yesterday, ago, in 2020)'],
        ['ពាក្យគន្លឹះសម្គាល់', 'ever, never, already, yet, since, for', 'yesterday, last night, last week, in 2019, 2 hours ago'],
        ['ទំនាក់ទំនងបច្ចុប្បន្ន', 'មានឥទ្ធិពល ឬលទ្ធផលមកដល់បច្ចុប្បន្ន', 'សកម្មភាពដាច់ស្រឡះក្នុងអតីតកាល គ្មានផលបច្ចុប្បន្ន'],
        ['ឧទាហរណ៍ជាក់ស្តែង', '"I have seen that movie." (I know the story)', '"I saw that movie last Friday."']
      ]
    },
    dialogue: [
      {
        speaker: 'Alex',
        speakerKhmer: 'អាឡិច',
        text: 'Have you ever visited Japan, Sreyneang?',
        khmerSound: 'ហាវ យូ អេវវើ វីស៊ីធីដ ជែផេន, ស្រីនាង?',
        meaningKhmer: 'តើអ្នកធ្លាប់បានទៅលេងប្រទេសជប៉ុនទេ ស្រីនាង?'
      },
      {
        speaker: 'Sreyneang',
        speakerKhmer: 'ស្រីនាង',
        text: 'Yes, I have! I went to Tokyo and Kyoto with my family in the spring of 2024.',
        khmerSound: 'យេស, អាយ ហាវ! អាយ វ៉ែនថ៍ ធូ តូក្យូ អ៊ែន ក្យូតូ... អ៊ីន ដឹ ស្ព្រីង អហ្វ ថ្វេនធី ថ្វេនធី-ហ្វ័រ។',
        meaningKhmer: 'បាទ/ចាស ខ្ញុំធ្លាប់ទៅ! ខ្ញុំបានទៅទីក្រុងតូក្យូ និងក្យូតូជាមួយគ្រួសារកាលពីរដូវផ្ការីកឆ្នាំ ២០២៤។'
      },
      {
        speaker: 'Alex',
        speakerKhmer: 'អាឡិច',
        text: 'Did you see the cherry blossoms while you were there?',
        khmerSound: 'ឌីដ យូ ស៊ី ដឹ ឆេរី ប្លូសសឹមស៍ វ៉ាយល៍ យូ វ៉ឺ ដ៊ែរ?',
        meaningKhmer: 'តើអ្នកបានឃើញផ្កាសាគូរ៉ារីកដែរទេកាលនៅទីនោះ?'
      },
      {
        speaker: 'Sreyneang',
        speakerKhmer: 'ស្រីនាង',
        text: 'Yes, they were absolutely breathtaking! I have never seen anything so beautiful.',
        khmerSound: 'យេស, ដេ វ៉ឺ អែបសូលូតលី ប្រេកថេកឃីង! អាយ ហាវ ណេវវើ ស៊ីន...',
        meaningKhmer: 'ចាស ស្រស់ស្អាតលើសពីការពណ៌នា! ខ្ញុំមិនដែលបានឃើញអ្វីស្រស់ស្អាតដល់ថ្នាក់នេះពីមុនមកទេ។'
      }
    ],
    vocabulary: [
      { word: 'breathtaking', khmerSound: 'ប្រេកថេកឃីង', meaningKhmer: 'ស្រស់ស្អាតអស្ចារ្យដកដង្ហើមមិនចង់រួច', example: 'The mountain view was breathtaking.' },
      { word: 'abroad', khmerSound: 'អឹប្រត', meaningKhmer: 'ក្រៅប្រទេស', example: 'She has never lived abroad.' },
      { word: 'recently', khmerSound: 'រីសិនលី', meaningKhmer: 'ថ្មីៗនេះ', example: 'Have you seen him recently?' },
      { word: 'experience', khmerSound: 'អ៊ិចស្ពីរៀនស៍', meaningKhmer: 'បទពិសោធន៍', example: 'Traveling gives you great life experience.' }
    ],
    samplePhrases: [
      {
        english: 'When did you buy this car? — I bought it two months ago.',
        khmerSound: 'វ៉ែន ឌីដ យូ បាយ ឌីស ខា? — អាយ បត អ៊ីត ធូ ម៉ានថ៍ស អឹហ្គោ។',
        khmerMeaning: 'តើអ្នកបានទិញឡាននេះពីអង្កាល់? — ខ្ញុំបានទិញវាកាលពី ២ ខែមុន (Past Simple)'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសទម្រង់កាលត្រឹមត្រូវ៖ "I ______ to Siem Reap last December."',
      questionKhmer: 'Choose: "I ______ to Siem Reap last December."',
      options: ['have gone', 'went', 'have been', 'was go'],
      correctIndex: 1,
      explanation: 'ដោយសារមានពាក្យពេលវេលាជាក់លាក់ក្នុងអតីតកាល "last December" ដូច្នេះត្រូវប្រើ Past Simple (went) មិនអាចប្រើ Present Perfect បានឡើយ។'
    }
  },

  // =========================================================================
  // LESSON 03: ការប្រើប្រាស់ For និង Since ក្នុង Present Perfect
  // =========================================================================
  {
    id: 3,
    unitNumber: 'មេរៀនទី ០៣',
    titleKhmer: 'ការប្រើប្រាស់ For និង Since',
    titleEnglish: 'Using For & Since in Present Perfect',
    duration: '៣០ នាទី',
    descriptionKhmer: 'ស្វែងយល់ពីច្បាប់ប្រើប្រាស់ For (រយៈពេលសរុប) និង Since (ចំណុចពេលវេលាចាប់ផ្តើម) ព្រមទាំងប្រយោគគំរូរៀបរាប់ពីការរស់នៅ និងការងារ។',
    grammarRule: {
      formula: 'FOR + Period of time (រយៈពេល) | SINCE + Starting point (ចំណុចចាប់ផ្តើម)',
      explanation: 'ប្រើរួមជាមួយ Present Perfect ដើម្បីបង្ហាញពីសកម្មភាពដែលបានចាប់ផ្តើមក្នុងអតីតកាល ហើយនៅតែបន្តកើតឡើងរហូតមកដល់បច្ចុប្បន្ន។',
      subRules: [
        {
          title: 'FOR (អស់រយៈពេល...):',
          detail: 'for 5 years, for 3 hours, for two months, for a long time, for ten minutes, for ages។'
        },
        {
          title: 'SINCE (តាំងពី...):',
          detail: 'since 2018, since 8:00 AM, since Monday, since last year, since I was a child, since yesterday evening។'
        }
      ],
      examples: [
        {
          english: 'I have lived in this apartment for five years.',
          khmerSound: 'អាយ ហាវ លីវដ៍ អ៊ីន ឌីស អឹផាតម៉ិន ហ្វ័រ ហ្វាយ យាស។',
          khmerMeaning: 'ខ្ញុំបានរស់នៅក្នុងខុនដូនេះអស់រយៈពេល ៥ ឆ្នាំមកហើយ (ហើយបច្ចុប្បន្ននៅតែរស់នៅទីនេះ)។'
        },
        {
          english: 'She has worked at this international bank since 2019.',
          khmerSound: 'ស្ស៊ី ហាស វើកថ៍ អែត ឌីស អ៊ីនធើណេសិនណល ប៊ែង ស៊ីនស៍ ថ្វេនធី ណាយន៍ធីន។',
          khmerMeaning: 'នាងបានធ្វើការនៅធនាគារអន្តរជាតិនេះតាំងពីឆ្នាំ ២០១៩ មកម្ល៉េះ (since + ឆ្នាំចាប់ផ្តើម)។'
        },
        {
          english: 'They have been married for twenty years.',
          khmerSound: 'ដេ ហាវ ប៊ីន ម៉ែរីដ ហ្វ័រ ថ្វេនធី យាស។',
          khmerMeaning: 'ពួកគេបានរៀបការជាមួយគ្នាអស់រយៈពេល ២០ ឆ្នាំមកហើយ (for + រយៈពេល)។'
        },
        {
          english: 'I haven\'t seen Sophat since last Monday.',
          khmerSound: 'អាយ ហាវវិនថ៍ ស៊ីន សុផាត ស៊ីនស៍ ឡាស ម៉ាន់ដេ។',
          khmerMeaning: 'ខ្ញុំមិនបានជួបសុផាតទេតាំងពីថ្ងៃច័ន្ទសប្តាហ៍មុនមក (since + ថ្ងៃ)។'
        },
        {
          english: 'He has studied English since he was ten years old.',
          khmerSound: 'ហ៊ី ហាស ស្តាឌីដ អ៊ីងគ្លីស ស៊ីនស៍ ហ៊ី វ៉ស ថេន យាស អូល។',
          khmerMeaning: 'គាត់បានរៀនភាសាអង់គ្លេសតាំងពីគាត់មានអាយុ ១០ ឆ្នាំមកម្ល៉េះ។'
        }
      ]
    },
    tableData: {
      headers: ['ការប្រើប្រាស់', 'ឧទាហរណ៍ប្រើ FOR', 'ឧទាហរណ៍ប្រើ SINCE'],
      rows: [
        ['ម៉ោង/ពេល', 'for 2 hours (អស់ ២ ម៉ោង)', 'since 9:00 AM (តាំងពីម៉ោង ៩ ព្រឹក)'],
        ['ថ្ងៃ/សប្តាហ៍', 'for 3 days (អស់ ៣ ថ្ងៃ)', 'since Monday (តាំងពីថ្ងៃច័ន្ទ)'],
        ['ខែ/ឆ្នាំ', 'for 6 months / for 10 years', 'since January / since 2015'],
        ['ព្រឹត្តិការណ៍ជីវិត', 'for a long time (យូរណាស់មកហើយ)', 'since childhood / since graduation']
      ]
    },
    vocabulary: [
      { word: 'decade', khmerSound: 'ដេកខេដ', meaningKhmer: 'ទសវត្សរ៍ (១០ ឆ្នាំ)', example: 'They built this bridge a decade ago.' },
      { word: 'childhood', khmerSound: 'ឆាយដ៍ហ៊ូត', meaningKhmer: 'វ័យកុមារភាព', example: 'We have known each other since childhood.' },
      { word: 'graduation', khmerSound: 'ហ្គ្រែជូអេស្សិន', meaningKhmer: 'ការបញ្ចប់ការសិក្សា / ទទួលសញ្ញាបត្រ', example: 'He has worked here since graduation.' },
      { word: 'for ages', khmerSound: 'ហ្វ័រ អេចជេស', meaningKhmer: 'យូរណាស់មកហើយ', example: 'I haven\'t played tennis for ages.' }
    ],
    samplePhrases: [
      {
        english: 'How long have you worked here? — For about three years.',
        khmerSound: 'ហៅ ឡង ហាវ យូ វើកថ៍ ហៀរ? — ហ្វ័រ អឹបៅ ស្រ៊ី យាស។',
        khmerMeaning: 'តើអ្នកធ្វើការនៅទីនេះបានរយៈពេលប៉ុន្មានហើយ? — អស់ប្រហែល ៣ ឆ្នាំហើយ។'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសពាក្យត្រឹមត្រូវ៖ "Mr. Dara has taught mathematics ______ 2012."',
      questionKhmer: 'Complete: "Mr. Dara has taught mathematics ______ 2012."',
      options: ['for', 'since', 'during', 'in'],
      correctIndex: 1,
      explanation: 'ដោយសារ "2012" គឺជាចំណុចពេលវេលាចាប់ផ្តើមជាក់លាក់មួយ ដូច្នេះយើងត្រូវប្រើ "since" (since 2012)។'
    }
  },

  // =========================================================================
  // LESSON 04: កិរិយាស័ព្ទជំនួយបង្ហាញពីលទ្ធភាព និងកាតព្វកិច្ច (Modals)
  // =========================================================================
  {
    id: 4,
    unitNumber: 'មេរៀនទី ០៤',
    titleKhmer: 'កិរិយាស័ព្ទជំនួយ (Modals: Must, Have to, Should, Might)',
    titleEnglish: 'Modal Verbs: Obligation, Advice & Possibility',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'រៀនបែងចែកច្បាប់ និងការបង្ខំ (Must vs Have to), ការផ្តល់យោបល់ (Should) និងការស្មានមិនច្បាស់ (Might / May) ព្រមទាំងប្រយោគអនុវត្តជាក់ស្តែង។',
    grammarRule: {
      formula: 'S + Modal (must / have to / should / might) + V(base)',
      explanation: 'កិរិយាស័ព្ទជំនួយ Modal ជួយបង្ហាញពីកម្រិតនៃកាតព្វកិច្ច ដំបូន្មាន ឬលទ្ធភាពកើតឡើង។ កិរិយាស័ព្ទដែលនៅបន្ទាប់ពី Modal ត្រូវតែជាទម្រង់ដើម V(base) ជានិច្ច!',
      subRules: [
        {
          title: 'MUST (ត្រូវតែ - ច្បាប់តឹងរ៉ឹង / ការបង្ខំពីខ្លួនឯង):',
          detail: 'You must stop when the traffic light is red. / I must study harder for the exam.'
        },
        {
          title: 'HAVE TO (ត្រូវតែ - កាតព្វកិច្ចច្បាប់ខាងក្រៅ/ក្រុមហ៊ុន):',
          detail: 'Employees have to wear a company uniform every Monday.'
        },
        {
          title: 'SHOULD (គួរតែ - ដំបូន្មាន / ការណែនាំល្អ):',
          detail: 'You look exhausted; you should take a break.'
        },
        {
          title: 'MIGHT / MAY (អាចនឹង - លទ្ធភាព ៤០-៥០% មិនទាន់ប្រាកដ):',
          detail: 'Take an umbrella; it might rain later this evening.'
        }
      ],
      examples: [
        {
          english: 'Motorcyclists must wear a helmet according to traffic laws.',
          khmerSound: 'ម៉ូតូសាយឃ្លីស្តស៍ ម៉ាស្ត វែរ អឹ ហែលមេត...',
          khmerMeaning: 'អ្នកជិះម៉ូតូត្រូវតែពាក់មួកសុវត្ថិភាពតាមច្បាប់ចរាចរណ៍ (must = កាតព្វកិច្ចផ្លូវច្បាប់)។'
        },
        {
          english: 'I have to wake up at 5:30 AM tomorrow because my shift starts early.',
          khmerSound: 'អាយ ហាវ ធូ វ៉េក អាប់... ប៊ីខស ម៉ាយ ស្ស៊ីហ្វថ៍ ស្តាតស៍ អឺលី។',
          khmerMeaning: 'ខ្ញុំត្រូវតែភ្ញាក់ពីគេងនៅម៉ោង ៥:៣០ ព្រឹកថ្ងៃស្អែក ដោយសារវេនការងារចាប់ផ្តើមពីព្រលឹម (have to)។'
        },
        {
          english: 'You shouldn\'t spend too many hours staring at smartphone screens.',
          khmerSound: 'យូ ស្ស៊ូដិនថ៍ ស្ពែន ធូ ម៉េនី អ៊ូវើស ស្តេរីង អែត ស្មាតហ្វូន ស្រ្គីនស៍។',
          khmerMeaning: 'អ្នកមិនគួរចំណាយពេលច្រើនម៉ោងសម្លឹងមើលអេក្រង់ទូរស័ព្ទនោះទេ (shouldn\'t = ដំបូន្មាន)។'
        },
        {
          english: 'We might visit the floating village if we have enough spare time.',
          khmerSound: 'វី ម៉ាយថ៍ វីស៊ីត ដឹ ហ្វ្លូធីង វីលលេជ អ៊ីហ្វ វី ហាវ អ៊ីណាហ្វ...',
          khmerMeaning: 'ពួកយើងប្រហែលជាអាចនឹងទៅទស្សនាភូមិបណ្តែតទឹក ប្រសិនបើយើងមានពេលទំនេរគ្រប់គ្រាន់ (might = មិនទាន់ប្រាកដ)។'
        }
      ]
    },
    vocabulary: [
      { word: 'obligation', khmerSound: 'អបប្លីហ្គេស្សិន', meaningKhmer: 'កាតព្វកិច្ច / ការបង្ខំ', example: 'Paying taxes is a legal obligation.' },
      { word: 'prohibition', khmerSound: 'ប្រូហ៊ីប៊ីស្សិន', meaningKhmer: 'ការហាមឃាត់ដាច់ខាត (Must not)', example: 'Smoking is strictly prohibited.' },
      { word: 'exhausted', khmerSound: 'អ៊ិចហ្សូសធីដ', meaningKhmer: 'អស់កម្លាំងខ្លាំង', example: 'I felt completely exhausted after the marathon.' },
      { word: 'helmet', khmerSound: 'ហែលមេត', meaningKhmer: 'មួកសុវត្ថិភាព', example: 'Always wear a helmet for safety.' }
    ],
    samplePhrases: [
      {
        english: 'You don\'t have to come if you are busy. (It\'s optional)',
        khmerSound: 'យូ ដោនថ៍ ហាវ ធូ ខាំ អ៊ីហ្វ យូ អា ប៊ីហ្ស៊ី។',
        khmerMeaning: 'អ្នកមិនចាំបាច់មកក៏បានដែរ ប្រសិនបើអ្នករវល់ (គ្មានការបង្ខំទេ)។'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើស Modal បង្ហាញពីដំបូន្មានសុខភាពដ៏សមស្រប៖ "You look very sick. You ______ consult a doctor."',
      questionKhmer: 'Choose: "You look very sick. You ______ consult a doctor."',
      options: ['might', 'should', 'have', 'must not'],
      correctIndex: 1,
      explanation: 'នៅពេលផ្តល់ដំបូន្មានឬការណែនាំល្អៗទៅកាន់អ្នកដទៃ យើងត្រូវប្រើ "should" (គួរតែ)។'
    }
  },

  // =========================================================================
  // LESSON 05: អតីតកាលកំពុងបន្ត (Past Continuous Tense)
  // =========================================================================
  {
    id: 5,
    unitNumber: 'មេរៀនទី ០៥',
    titleKhmer: 'អតីតកាលកំពុងបន្ត',
    titleEnglish: 'Past Continuous Tense',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'យល់ដឹងពីរូបមន្ត S + was/were + V-ing សម្រាប់សកម្មភាពដែលកំពុងកើតឡើងនៅអតីតកាល និងការប្រើរួមគ្នាជាមួយ Past Simple ដោយប្រើ When និង While។',
    grammarRule: {
      formula: 'Affirmative: S + was / were + V-ing | Negative: S + was / were + not + V-ing | Question: Was / Were + S + V-ing?',
      explanation: 'ប្រើសម្រាប់សកម្មភាពដែលកំពុងដំណើរការនៅចំណុចពេលវេលាជាក់លាក់ណាមួយក្នុងអតីតកាល ឬសកម្មភាពវែងកំពុងកើតឡើង (Past Continuous) ហើយមានសកម្មភាពខ្លីមួយទៀតមកកាត់ផ្ដាច់ (Past Simple)។',
      subRules: [
        {
          title: 'I / He / She / It: ប្រើ WAS + V-ing',
          detail: 'She was reading a book at 8:00 PM yesterday.'
        },
        {
          title: 'You / We / They: ប្រើ WERE + V-ing',
          detail: 'They were playing football when the rain started.'
        },
        {
          title: 'WHILE (ខណៈពេលកំពុង) vs WHEN (នៅពេលដែល):',
          detail: 'While + Past Continuous (សកម្មភាពវែង); When + Past Simple (សកម្មភាពកាត់ផ្តាច់)។ ឧ. "While I was cooking, the phone rang."'
        }
      ],
      examples: [
        {
          english: 'While I was cooking dinner, the telephone suddenly rang.',
          khmerSound: 'វ៉ាយល៍ អាយ វ៉ស ឃុកឃីង ឌីននើ, ដឹ ថេឡឺហ្វូន សាដដិនលី រ៉ែង។',
          khmerMeaning: 'ខណៈពេលដែលខ្ញុំកំពុងតែចម្អិនអាហារពេលល្ងាច ស្រាប់តែទូរស័ព្ទរោទិ៍ឡើង។'
        },
        {
          english: 'They were sleeping peacefully when the earthquake struck.',
          khmerSound: 'ដេ វ៉ឺ ស្លីបភីង ភីសហ្វុលលី វ៉ែន ឌី អឺតឃ្វេក ស្រ្តាក់។',
          khmerMeaning: 'ពួកគេកំពុងតែគេងលក់យ៉ាងស្កប់ស្កល់ នៅពេលដែលគ្រោះរញ្ជួយដីបានវាយប្រហារ។'
        },
        {
          english: 'What were you doing at 10:00 PM last night?',
          khmerSound: 'វ៉ាត់ វ៉ឺ យូ ឌូអ៊ីង អែត ថេន អូក្លក់ ភីអិម ឡាស ណាយថ៍?',
          khmerMeaning: 'តើអ្នកកំពុងធ្វើអ្វីនៅវេលាម៉ោង ១០:០០ យប់កាលពីយប់មិញ?'
        },
        {
          english: 'It was raining heavily while we were driving along the highway.',
          khmerSound: 'អ៊ីត វ៉ស រ៉េននីង ហេវីលី វ៉ាយល៍ វី វ៉ឺ ដ្រាយវីង អឹឡង ដឹ ហាយវ៉េ។',
          khmerMeaning: 'មេឃកំពុងតែភ្លៀងខ្លាំង ខណៈពេលដែលពួកយើងកំពុងបើកបរតាមផ្លូវល្បឿនលឿន។'
        }
      ]
    },
    vocabulary: [
      { word: 'suddenly', khmerSound: 'សាដដិនលី', meaningKhmer: 'ស្រាប់តែ / ភ្លាមៗនោះ', example: 'Suddenly, all the lights went off.' },
      { word: 'interrupt', khmerSound: 'អ៊ីនធើរ៉ាប់', meaningKhmer: 'កាត់ផ្ដាច់ / រំខាន', example: 'Please do not interrupt while she is speaking.' },
      { word: 'earthquake', khmerSound: 'អឺតឃ្វេក', meaningKhmer: 'ការរញ្ជួយដី', example: 'The earthquake damaged several buildings.' },
      { word: 'highway', khmerSound: 'ហាយវ៉េ', meaningKhmer: 'ផ្លូវល្បឿនលឿន / ផ្លូវជាតិធំ', example: 'The new expressway connects Phnom Penh to Sihanoukville.' }
    ],
    samplePhrases: [
      {
        english: 'I was thinking about you when you texted me!',
        khmerSound: 'អាយ វ៉ស ធីងឃីង អឹបៅ យូ វ៉ែន យូ ថេកស៍ធីដ មី!',
        khmerMeaning: 'ខ្ញុំកំពុងតែគិតពីអ្នកល្មម ស្រាប់តែអ្នកផ្ញើសារមកខ្ញុំ!'
      }
    ],
    quiz: {
      question: 'បំពេញចន្លោះ៖ "While my brother ______ video games, my mother called him for dinner."',
      questionKhmer: 'Complete: "While my brother ______ video games, my mother called him for dinner."',
      options: ['played', 'was playing', 'is playing', 'were playing'],
      correctIndex: 1,
      explanation: 'សកម្មភាពដែលនៅបន្ទាប់ពី "While" និងជាសកម្មភាពកំពុងដំណើរការក្នុងអតីតកាល ត្រូវប្រើ Past Continuous (was playing) ពីព្រោះប្រធានជា my brother (ឯកវចនៈ)។'
    }
  },

  // =========================================================================
  // LESSON 06: ប្រយោគលក្ខខណ្ឌប្រភេទទី ១ (First Conditional)
  // =========================================================================
  {
    id: 6,
    unitNumber: 'មេរៀនទី ០៦',
    titleKhmer: 'ប្រយោគលក្ខខណ្ឌប្រភេទទី ១',
    titleEnglish: 'First Conditional: Real Possibility',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនរូបមន្ត If + Present Simple, Will + V សម្រាប់ព្រឹត្តិការណ៍ និងលក្ខខណ្ឌដែលអាចកើតឡើងពិតប្រាកដក្នុងពេលអនាគត។',
    grammarRule: {
      formula: 'If + S + Present Simple, S + will / won\'t + V(base)',
      explanation: 'ប្រើសម្រាប់ស្ថានភាពជាក់ស្តែងដែលមានលទ្ធភាពខ្ពស់ក្នុងការកើតឡើងនៅពេលអនាគត ប្រសិនបើលក្ខខណ្ឌដើមត្រូវបានបំពេញ។',
      subRules: [
        {
          title: 'ឃ្លា If-clause ប្រើ Present Simple ជានិច្ច:',
          detail: 'If it rains ... (មិនប្រើ If it will rain ទេ!)'
        },
        {
          title: 'ឃ្លាចម្បង Main clause ប្រើ Will / Won\'t + V(base):',
          detail: '... we will stay at home.'
        },
        {
          title: 'អាចត្រឡប់លំដាប់ឃ្លាបាន:',
          detail: '"We will stay at home if it rains." (នៅពេលដាក់ If នៅកណ្តាល មិនបាច់ប្រើសញ្ញាក្បៀស comma ឡើយ)'
        }
      ],
      examples: [
        {
          english: 'If it rains tomorrow, we will stay home and watch movies.',
          khmerSound: 'អ៊ីហ្វ អ៊ីត រ៉េនស៍ ធូម៉ូរ៉ូ, វី វីល ស្តេ ហូម អ៊ែន វ៉ច មូហ៊្វីស។',
          khmerMeaning: 'ប្រសិនបើថ្ងៃស្អែកមេឃភ្លៀង ពួកយើងនឹងនៅផ្ទះមើលកុន។'
        },
        {
          english: 'If you study hard every day, you will pass the final examination.',
          khmerSound: 'អ៊ីហ្វ យូ ស្តាឌី ហាដ អេវរី ដេ, យូ វីល ផាស ដឹ ហ្វាយណល អ៊ិចសែមមីណេសិន។',
          khmerMeaning: 'ប្រសិនបើអ្នកខិតខំរៀនសូត្ររាល់ថ្ងៃ អ្នកប្រាកដជានឹងប្រឡងជាប់ការប្រឡងបញ្ចប់។'
        },
        {
          english: 'If he doesn\'t hurry up, he will miss the express train.',
          khmerSound: 'អ៊ីហ្វ ហ៊ី ដាសិនថ៍ ហារី អាប់, ហ៊ី វីល មីស ឌី អ៊ិចស្ប្រេស ស្រ្តេន។',
          khmerMeaning: 'ប្រសិនបើគាត់មិនប្រញាប់ឡើងទេ គាត់នឹងខកជើងរថភ្លើងល្បឿនលឿនមិនខាន។'
        },
        {
          english: 'I will call you immediately if I hear any good news.',
          khmerSound: 'អាយ វីល ខល យូ អ៊ីមមីឌាថលី អ៊ីហ្វ អាយ ហៀរ អេនី ហ្គូដ ញូស។',
          khmerMeaning: 'ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកភ្លាម ប្រសិនបើខ្ញុំឮដំណឹងល្អណាមួយ។'
        }
      ]
    },
    vocabulary: [
      { word: 'condition', khmerSound: 'ខុនឌីស្សិន', meaningKhmer: 'លក្ខខណ្ឌ', example: 'Read the terms and conditions carefully.' },
      { word: 'hurry up', khmerSound: 'ហារី អាប់', meaningKhmer: 'ប្រញាប់ឡើង', example: 'Hurry up, we have ten minutes left!' },
      { word: 'possibility', khmerSound: 'ផសស៊ីប៊ីលីធី', meaningKhmer: 'លទ្ធភាពដែលអាចកើតមាន', example: 'There is a strong possibility of success.' },
      { word: 'opportunity', khmerSound: 'អបភើធូនិធី', meaningKhmer: 'ឱកាសល្អ', example: 'Do not miss this golden opportunity.' }
    ],
    samplePhrases: [
      {
        english: 'What will you do if you win the lottery?',
        khmerSound: 'វ៉ាត់ វីល យូ ឌូ អ៊ីហ្វ យូ វីន ដឹ ឡុតធើរី?',
        khmerMeaning: 'តើអ្នកនឹងធ្វើអ្វីខ្លះ ប្រសិនបើអ្នកត្រូវឆ្នោត?'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសចម្លើយត្រឹមត្រូវ៖ "If she ______ enough free time, she will visit her aunt."',
      questionKhmer: 'Choose: "If she ______ enough free time, she will visit her aunt."',
      options: ['has', 'will have', 'had', 'have'],
      correctIndex: 0,
      explanation: 'នៅក្នុងឃ្លា If-clause នៃ First Conditional យើងត្រូវប្រើ Present Simple (she has) មិនប្រើ will have ឡើយ។'
    }
  },

  // =========================================================================
  // LESSON 07: ការបញ្ចេញមតិយោបល់ និងការជជែកវែកញែក (Expressing Opinions)
  // =========================================================================
  {
    id: 7,
    unitNumber: 'មេរៀនទី ០៧',
    titleKhmer: 'ការបញ្ចេញមតិយោបល់ និងការជជែកវែកញែក',
    titleEnglish: 'Expressing Opinions & Agreeing/Disagreeing',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'រៀនឃ្លាគន្លឹះកម្រិតខ្ពស់សម្រាប់បញ្ចេញទស្សនៈផ្ទាល់ខ្លួន ការយល់ស្រប និងការជំទាស់ប្រកបដោយសុជីវធម៌ ព្រមទាំងការសន្ទនាវែកញែកពីការរស់នៅក្នុងទីក្រុងធៀបនឹងជនបទ។',
    grammarRule: {
      formula: 'Giving Opinion: In my opinion... / I believe that... | Agreeing: I completely agree / Exactly! | Polite Disagreeing: I see your point, but...',
      explanation: 'ក្នុងការសន្ទនាបែបវិជ្ជាជីវៈ ឬការជជែកដេញដោល យើងមិនត្រូវនិយាយថា "You are wrong" នោះទេ តែត្រូវប្រើឃ្លាសុជីវធម៌ដូចជា "I see your point, but..." ឬ "I\'m afraid I have a different perspective."។',
      examples: [
        {
          english: 'In my opinion, learning English opens up endless global opportunities.',
          khmerSound: 'អ៊ីន ម៉ាយ អូភីនាន, លើននីង អ៊ីងគ្លីស អូផិនស៍ អាប់...',
          khmerMeaning: 'តាមគំនិតរបស់ខ្ញុំ ការរៀនភាសាអង់គ្លេសបើកឱកាសពិភពលោកឥតដែនកំណត់។'
        },
        {
          english: 'I completely agree with you on this crucial matter.',
          khmerSound: 'អាយ ខមភ្លីតលី អឹហ្គ្រី វីត យូ អន ឌីស គ្រូស្សល ម៉ាតធើ។',
          khmerMeaning: 'ខ្ញុំយល់ស្របទាំងស្រុងជាមួយអ្នកលើបញ្ហាដ៏សំខាន់មួយនេះ។'
        },
        {
          english: 'I see your point, but public transportation in rural areas is still limited.',
          khmerSound: 'អាយ ស៊ី យួរ ភ័ញថ៍, បាត ផាប់ប្លិក ស្រ្តានស្ព័រថេសិន...',
          khmerMeaning: 'ខ្ញុំយល់ចំណុចរបស់អ្នកហើយ ប៉ុន្តែការដឹកជញ្ជូនសាធារណៈនៅជនបទនៅតែមានកម្រិតនៅឡើយ។'
        }
      ]
    },
    dialogue: [
      {
        speaker: 'Dara',
        speakerKhmer: 'តារា',
        text: 'In my opinion, living in Phnom Penh offers much better career growth and educational opportunities than living in the countryside.',
        khmerSound: 'អ៊ីន ម៉ាយ អូភីនាន, លីវីង អ៊ីន ភ្នំពេញ អហ្វហ្វើស ម៉ាច ប៊ែតធើ ខារៀ ហ្គ្រោត...',
        meaningKhmer: 'តាមគំនិតខ្ញុំ ការរស់នៅភ្នំពេញផ្តល់ការរីកចម្រើនការងារ និងឱកាសអប់រំល្អជាងការរស់នៅស្រុកស្រែច្រើនណាស់។'
      },
      {
        speaker: 'Bopha',
        speakerKhmer: 'បុប្ផា',
        text: 'I see your point, Dara, but on the other hand, the cost of living and traffic congestion in the city cause tremendous stress.',
        khmerSound: 'អាយ ស៊ី យួរ ភ័ញថ៍, តារា, បាត អន ឌី អដឌើ ហែន, ដឹ ខូសថ៍ អហ្វ លីវីង...',
        meaningKhmer: 'ខ្ញុំយល់ចំណុចរបស់តារាហើយ ប៉ុន្តែម្យ៉ាងវិញទៀត តម្លៃនៃការរស់នៅ និងការកកស្ទះចរាចរណ៍ក្នុងក្រុងបង្កភាពតានតឹងខ្លាំងណាស់។'
      },
      {
        speaker: 'Dara',
        speakerKhmer: 'តារា',
        text: 'That is true. However, modern healthcare facilities are also concentrated in the capital city.',
        khmerSound: 'ដាត អ៊ីស ស្រ៊ូ។ ហៅអ៊េវវើ, ម៉ដឌើន ហែលស៍ឃែរ ហ្វាស៊ីលីធីស...',
        meaningKhmer: 'ពិតមែនហើយ។ ទោះជាយ៉ាងណា មន្ទីរពេទ្យទំនើបៗក៏ប្រមូលផ្តុំនៅរាជធានីដែរ។'
      },
      {
        speaker: 'Bopha',
        speakerKhmer: 'បុប្ផា',
        text: 'I agree with that. Perhaps the ideal balance is working in the city and spending peaceful weekends in the countryside.',
        khmerSound: 'អាយ អឹហ្គ្រី វីត ដាត។ ភើហាប់ស៍ ឌី អាយឌៀល បាឡានស៍...',
        meaningKhmer: 'ខ្ញុំយល់ស្របនឹងចំណុចនោះ។ ប្រហែលជាតុល្យភាពដ៏ល្អបំផុតគឺធ្វើការក្នុងក្រុង ហើយទៅលម្ហែកាយចុងសប្តាហ៍ដ៏ស្ងប់ស្ងាត់នៅជនបទ។'
      }
    ],
    vocabulary: [
      { word: 'in my opinion', khmerSound: 'អ៊ីន ម៉ាយ អូភីនាន', meaningKhmer: 'តាមគំនិតរបស់ខ្ញុំ', example: 'In my opinion, this plan works best.' },
      { word: 'completely agree', khmerSound: 'ខមភ្លីតលី អឹហ្គ្រី', meaningKhmer: 'យល់ស្របទាំងស្រុង', example: 'I completely agree with your proposal.' },
      { word: 'perspective', khmerSound: 'ភើសផេកធីវ', meaningKhmer: 'ទស្សនៈ / មុំមើល', example: 'Everyone has a unique perspective.' },
      { word: 'congestion', khmerSound: 'ខនជេសឆិន', meaningKhmer: 'ការកកស្ទះ (ចរាចរណ៍)', example: 'Traffic congestion is worsening.' },
      { word: 'healthcare', khmerSound: 'ហែលស៍ឃែរ', meaningKhmer: 'សេវាសុខាភិបាល / ថែទាំសុខភាព', example: 'Accessible healthcare is essential for all.' }
    ],
    samplePhrases: [
      {
        english: 'I see what you mean, but let me share another viewpoint.',
        khmerSound: 'អាយ ស៊ី វ៉ាត់ យូ មីន, បាត ឡេត មី ស្ស៊ែរ អឹណាដឌើ វ្យូភ័ញថ៍។',
        khmerMeaning: 'ខ្ញុំយល់ពីអ្វីដែលអ្នកចង់មានន័យហើយ ប៉ុន្តែសូមអនុញ្ញាតឱ្យខ្ញុំចែករំលែកទស្សនៈមួយទៀត។'
      }
    ],
    quiz: {
      question: 'នៅពេលចង់ជំទាស់គំនិតគេដោយសុជីវធម៌ តើគួរនិយាយឃ្លាណា?',
      questionKhmer: 'Which phrase is the most polite way to disagree?',
      options: [
        'You are completely wrong.',
        'I see your point, but I have a different perspective.',
        'Stop talking nonsense.',
        'Your idea is bad.'
      ],
      correctIndex: 1,
      explanation: '"I see your point, but I have a different perspective" គឺជាឃ្លាប្រកបដោយវិជ្ជាជីវៈ និងសុជីវធម៌បំផុត។'
    }
  },

  // =========================================================================
  // LESSON 08: វាក្យសព្ទការងារ និងការិយាល័យ (Workplace & Career Vocabulary)
  // =========================================================================
  {
    id: 8,
    unitNumber: 'មេរៀនទី ០៨',
    titleKhmer: 'វាក្យសព្ទការងារ និងការិយាល័យ',
    titleEnglish: 'Workplace & Career Vocabulary',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'រៀនពាក្យគន្លឹះសំខាន់ៗ ២០ ពាក្យទាក់ទងនឹងការងារ ការិយាល័យ និងអាជីព ព្រមទាំងគំរូសរសេរអ៊ីមែលផ្លូវការខ្លីមួយ (Simple Professional Email)។',
    vocabulary: [
      { word: 'Colleague', khmerSound: 'ខលលីក', meaningKhmer: 'មិត្តរួមការងារ', example: 'My colleagues are very supportive.' },
      { word: 'Meeting', khmerSound: 'មីតធីង', meaningKhmer: 'កិច្ចប្រជុំ', example: 'We have a weekly team meeting every Monday.' },
      { word: 'Deadline', khmerSound: 'ដេដឡាញ', meaningKhmer: 'កាលបរិច្ឆេទផុតកំណត់', example: 'We must deliver the project before the deadline.' },
      { word: 'Project', khmerSound: 'ប្រូជេកថ៍', meaningKhmer: 'គម្រោងការងារ', example: 'She is managing an innovative digital project.' },
      { word: 'Salary', khmerSound: 'សាលារី', meaningKhmer: 'ប្រាក់បៀវត្សរ៍ / ប្រាក់ខែ', example: 'Salaries are deposited on the 28th.' },
      { word: 'Promotion', khmerSound: 'ប្រូម៉ូស្សិន', meaningKhmer: 'ការតម្លើងតំណែង', example: 'He earned a promotion to senior manager.' },
      { word: 'Resume / CV', khmerSound: 'រ៉េស៊ូម៉េ / ស៊ីវី', meaningKhmer: 'ប្រវត្តិរូបសង្ខេប', example: 'Update your resume with relevant work experience.' },
      { word: 'Client', khmerSound: 'ខ្លាយអិនថ៍', meaningKhmer: 'អតិថិជន / ដៃគូអាជីវកម្ម', example: 'We are presenting the proposal to our new client.' },
      { word: 'Overtime', khmerSound: 'អូវើថាម', meaningKhmer: 'ថែមម៉ោង (OT)', example: 'They worked overtime to finish the tasks.' },
      { word: 'Interview', khmerSound: 'អ៊ីនធើវ្យូ', meaningKhmer: 'ការសម្ភាសន៍ការងារ', example: 'Dress professionally for the job interview.' },
      { word: 'Contract', khmerSound: 'ខនស្រ្តាក់', meaningKhmer: 'កិច្ចសន្យាការងារ', example: 'Review the employment contract before signing.' },
      { word: 'Department', khmerSound: 'ឌីផាតម៉ិន', meaningKhmer: 'នាយកដ្ឋាន / ផ្នែក', example: 'He works in the Human Resources department.' },
      { word: 'Manager', khmerSound: 'ម៉េនណេជើ', meaningKhmer: 'អ្នកគ្រប់គ្រង / ប្រធាន', example: 'The marketing manager approved the campaign.' },
      { word: 'Presentation', khmerSound: 'ប្រេសិនថេសិន', meaningKhmer: 'ការធ្វើបទបង្ហាញ', example: 'Her presentation was clear and persuasive.' },
      { word: 'Task', khmerSound: 'ថាសក៍', meaningKhmer: 'ភារកិច្ច / កិច្ចការ', example: 'Prioritize urgent tasks first.' },
      { word: 'Bonus', khmerSound: 'បូណឺស', meaningKhmer: 'ប្រាក់រង្វាន់លើកទឹកចិត្ត', example: 'Employees received an annual performance bonus.' },
      { word: 'Experience', khmerSound: 'អ៊ិចស្ពីរៀនស៍', meaningKhmer: 'បទពិសោធន៍ការងារ', example: 'This position requires three years of experience.' },
      { word: 'Application', khmerSound: 'អែបភ្លីខេសិន', meaningKhmer: 'ពាក្យស្នើសុំការងារ', example: 'Submit your job application online.' },
      { word: 'Career', khmerSound: 'ខារៀ', meaningKhmer: 'អាជីពការងារ', example: 'She built a successful career in finance.' },
      { word: 'Retire', khmerSound: 'រីថាយអ៊ើ', meaningKhmer: 'ចូលនិវត្តន៍', example: 'He plans to retire at the age of sixty.' }
    ],
    emailSample: {
      subject: 'Project Update Meeting - Tuesday 10:00 AM',
      subjectKhmer: 'ប្រជុំបច្ចុប្បន្នភាពគម្រោង - ថ្ងៃអង្គារ ម៉ោង ១០:០០ ព្រឹក',
      sender: 'Sokha Chan (sokha.chan@company.com)',
      recipient: 'Marketing Team (team@company.com)',
      bodyEnglish: 'Dear Team,\n\nI hope this email finds you well.\n\nPlease be reminded that our quarterly project update meeting is scheduled for tomorrow, Tuesday, at 10:00 AM in Conference Room B.\n\nKindly prepare your slide presentations and review the project milestones beforehand. If you are unable to attend in person, please join via the Google Meet link below.\n\nThank you for your dedication and hard work.\n\nBest regards,\nSokha Chan\nProject Lead',
      bodyKhmer: 'ជម្រាបសួរក្រុមការងារ,\n\nខ្ញុំសង្ឃឹមថាលោកអ្នកមានសុខភាពល្អ។\n\nសូមរំលឹកថាកិច្ចប្រជុំបច្ចុប្បន្នភាពគម្រោងប្រចាំត្រីមាសរបស់យើងត្រូវបានកំណត់នៅថ្ងៃស្អែក ថ្ងៃអង្គារ វេលាម៉ោង ១០:០០ ព្រឹក នៅបន្ទប់ប្រជុំ B។\n\nសូមមេត្តារៀបចំស្លាយបទបង្ហាញរបស់អ្នក និងពិនិត្យមើលវឌ្ឍនភាពគម្រោងទុកជាមុន។ ប្រសិនបើអ្នកមិនអាចចូលរួមដោយផ្ទាល់បានទេ សូមចូលតាមរយៈតំណភ្ជាប់ Google Meet ខាងក្រោម។\n\nសូមអរគុណចំពោះការខិតខំប្រឹងប្រែង និងការយកចិត្តទុកដាក់របស់អ្នក។\n\nដោយក្តីគោរព,\nសុខា ចាន់\nប្រធានគម្រោង'
    },
    samplePhrases: [
      {
        english: 'Could you please send me the updated spreadsheet before the deadline?',
        khmerSound: 'ឃូដ យូ ភ្លីស សេន មី ឌី អាប់ដេតធីដ ស្រ្ពេតស្ស៊ិត...',
        khmerMeaning: 'តើអ្នកអាចផ្ញើតារាងទិន្នន័យដែលបានកែប្រែថ្មីមកខ្ញុំមុនថ្ងៃផុតកំណត់បានទេ?'
      }
    ],
    quiz: {
      question: 'តើពាក្យ "Deadline" មានន័យថាយ៉ាងដូចម្តេច?',
      questionKhmer: 'What does "Deadline" mean?',
      options: ['ប្រាក់បៀវត្សរ៍', 'កាលបរិច្ឆេទផុតកំណត់នៃកិច្ចការ', 'កិច្ចសន្យាការងារ', 'ការសម្ភាសន៍'],
      correctIndex: 1,
      explanation: '"Deadline" គឺ «កាលបរិច្ឆេទ ឬម៉ោងដែលត្រូវបញ្ចប់កិច្ចការឱ្យទាន់ពេលវេលា» (Due date)។'
    }
  },

  // =========================================================================
  // LESSON 09: វាក្យសព្ទបច្ចេកវិទ្យា និងអ៊ីនធឺណិត (Technology & Social Media)
  // =========================================================================
  {
    id: 9,
    unitNumber: 'មេរៀនទី ០៩',
    titleKhmer: 'វាក្យសព្ទបច្ចេកវិទ្យា និងអ៊ីនធឺណិត',
    titleEnglish: 'Technology & Social Media',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនវាក្យសព្ទបច្ចេកវិទ្យា និងបណ្ដាញសង្គមដែលប្រើប្រាស់ប្រចាំថ្ងៃ ព្រមទាំងអត្ថបទអានខ្លីអំពីផលប៉ះពាល់នៃបណ្ដាញសង្គម។',
    paragraph: {
      titleEnglish: 'The Impact of Social Media on Modern Daily Life',
      titleKhmer: 'ឥទ្ធិពលនៃបណ្ដាញសង្គមលើជីវិតរស់នៅសម័យទំនើប',
      englishText: 'In today\'s interconnected world, social media platforms have revolutionized communication. People can instantly chat with friends abroad, share valuable educational resources, and expand their online businesses globally. However, excessive screen time can lead to digital eye strain, decreased productivity, and sleep disruption. Therefore, maintaining digital wellness and setting healthy screen limits is essential for a balanced life.',
      khmerMeaning: 'នៅក្នុងពិភពលោកដែលតភ្ជាប់គ្នាយ៉ាងជិតស្និទ្ធសព្វថ្ងៃនេះ បណ្ដាញសង្គមបានធ្វើបដិវត្តន៍ការប្រាស្រ័យទាក់ទង។ មនុស្សអាចជជែកកម្សាន្តភ្លាមៗជាមួយមិត្តភក្តិនៅក្រៅប្រទេស ចែករំលែកធនធានអប់រំដ៏មានតម្លៃ និងពង្រីកអាជីវកម្មអនឡាញទូទាំងសកលលោក។ ទោះជាយ៉ាងណាក៏ដោយ ការសម្លឹងអេក្រង់យូរហួសហេតុអាចបណ្តាលឱ្យចុករោយភ្នែក ថយចុះផលិតភាពការងារ និងរំខានដល់ដំណេក។ ដូច្នេះ ការរក្សាតុល្យភាពសុខភាពឌីជីថល និងការកំណត់ម៉ោងប្រើប្រាស់ឱ្យបានត្រឹមត្រូវគឺពិតជាចាំបាច់ណាស់។'
    },
    vocabulary: [
      { word: 'Application (App)', khmerSound: 'អែបភ្លីខេសិន', meaningKhmer: 'កម្មវិធីទូរស័ព្ទ / កុំព្យូទ័រ', example: 'Download this language learning application.' },
      { word: 'Download', khmerSound: 'ដោនឡូត', meaningKhmer: 'ទាញយកទិន្នន័យ', example: 'You can download the PDF document for free.' },
      { word: 'Connect', khmerSound: 'ខុនណេក', meaningKhmer: 'ភ្ជាប់ទំនាក់ទំនង / ភ្ជាប់អ៊ីនធឺណិត', example: 'Connect your device to high-speed Wi-Fi.' },
      { word: 'Online security', khmerSound: 'អនឡាញ ស៊ីឃ្យួរីធី', meaningKhmer: 'សន្តិសុខសុវត្ថិភាពអនឡាញ', example: 'Online security protects your personal banking data.' },
      { word: 'Privacy', khmerSound: 'ប្រាយវ៉ាស៊ី', meaningKhmer: 'ភាពឯកជន', example: 'Adjust your privacy settings on social media.' },
      { word: 'Account', khmerSound: 'អាក់ខោន', meaningKhmer: 'គណនីប្រើប្រាស់', example: 'Create a secure Google account.' },
      { word: 'Password', khmerSound: 'ផាសវើដ', meaningKhmer: 'ពាក្យសម្ងាត់', example: 'Use a strong password with letters, numbers, and symbols.' },
      { word: 'Cloud storage', khmerSound: 'ខ្លោដ ស្តូរេច', meaningKhmer: 'ការផ្ទុកទិន្នន័យលើពពក (Cloud)', example: 'Back up your photos to cloud storage.' },
      { word: 'Notification', khmerSound: 'ណូធីហ្វីខេសិន', meaningKhmer: 'សារជូនដំណឹង', example: 'Turn off notifications while studying.' },
      { word: 'Go viral', khmerSound: 'ហ្គោ វ៉ាយរ៉ល', meaningKhmer: 'ល្បីសុះសាយយ៉ាងលឿនលើអ៊ីនធឺណិត', example: 'His inspirational video went viral overnight.' }
    ],
    samplePhrases: [
      {
        english: 'Never share your one-time password (OTP) with anyone.',
        khmerSound: 'ណេវវើ ស្ស៊ែរ យួរ វ៉ាន់-ថាម ផាសវើដ...',
        khmerMeaning: 'កុំចែករំលែកលេខកូដសម្ងាត់ OTP របស់អ្នកទៅឱ្យនរណាម្នាក់ឱ្យសោះ។'
      }
    ],
    quiz: {
      question: 'យោងតាមអត្ថបទអាន តើការសម្លឹងមើលអេក្រង់យូរពេក (excessive screen time) អាចបង្កផលប៉ះពាល់អ្វីខ្លះ?',
      questionKhmer: 'According to the reading, what negative impact does excessive screen time cause?',
      options: [
        'ធ្វើឱ្យសន្សំសំចៃលុយបានច្រើន',
        'ចុករោយភ្នែក ថយចុះផលិតភាពការងារ និងរំខានដល់ការគេង',
        'ធ្វើឱ្យការតភ្ជាប់អ៊ីនធឺណិតលឿនជាងមុន',
        'គ្មានផលប៉ះពាល់អ្វីទាំងអស់'
      ],
      correctIndex: 1,
      explanation: 'អត្ថបទបានបញ្ជាក់ថា "excessive screen time can lead to digital eye strain, decreased productivity, and sleep disruption" (ចុករោយភ្នែក ថយផលិតភាព និងរំខានដំណេក)។'
    }
  },

  // =========================================================================
  // LESSON 10: កិរិយាស័ព្ទផ្សំទូទៅ (Essential Phrasal Verbs)
  // =========================================================================
  {
    id: 10,
    unitNumber: 'មេរៀនទី ១០',
    titleKhmer: 'កិរិយាស័ព្ទផ្សំទូទៅ (Phrasal Verbs)',
    titleEnglish: '15 Essential Phrasal Verbs',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'រៀនកិរិយាស័ព្ទផ្សំ ១៥ ពាក្យដែលជនជាតិដើមនិយមប្រើប្រាស់ញឹកញាប់បំផុត រួមជាមួយអត្ថន័យពិត និងប្រយោគក្នុងបរិបទជាក់ស្តែង។',
    grammarRule: {
      formula: 'Phrasal Verb = Verb + Preposition / Adverb (ផ្តល់អត្ថន័យថ្មីទាំងស្រុង)',
      explanation: 'កិរិយាស័ព្ទផ្សំ (Phrasal Verbs) គឺជាការរួមបញ្ចូលគ្នារវាងកិរិយាស័ព្ទ និងធ្នាក់ ដែលបង្កើតបានជាអត្ថន័យថ្មីប្លែកពីពាក្យដើម។ ឧទាហរណ៍៖ "Give" (ឱ្យ) ប៉ុន្តែ "Give up" មានន័យថា «បោះបង់ចោល»។',
      examples: [
        {
          english: 'Never give up on your dreams, no matter how tough the journey is.',
          khmerSound: 'ណេវវើ ហ្គីវ អាប់ អន យួរ ឌ្រីមស៍...',
          khmerMeaning: 'កុំបោះបង់ចោលក្តីសុបិនរបស់អ្នកឱ្យសោះ ទោះបីជាការធ្វើដំណើរលំបាកយ៉ាងណាក៏ដោយ (give up = បោះបង់)។'
        },
        {
          english: 'Please turn on the air conditioner; it is scorching hot inside.',
          khmerSound: 'ភ្លីស ធើន អន ឌី អ៊ែរ ខុនឌីស្សិនណើ...',
          khmerMeaning: 'សូមមេត្តាបើកម៉ាស៊ីនត្រជាក់ ព្រោះនៅក្នុងនេះក្តៅខ្លាំងណាស់ (turn on = បើកម៉ាស៊ីន)។'
        },
        {
          english: 'We have run out of printer paper, so I need to order more.',
          khmerSound: 'វី ហាវ រ៉ាន់ អៅ អហ្វ ព្រីនធើ ផេភើ...',
          khmerMeaning: 'ពួកយើងបានអស់ក្រដាសព្រីនហើយ ដូច្នេះខ្ញុំត្រូវកុម្ម៉ង់បន្ថែម (run out of = អស់ពីស្តុក)។'
        }
      ]
    },
    tableData: {
      headers: ['Phrasal Verb', 'ការបញ្ចេញសំឡេង', 'អត្ថន័យខ្មែរ', 'ប្រយោគគំរូ'],
      rows: [
        ['Look for', 'លុក ហ្វ័រ', 'ស្វែងរក / តាមរក', 'I am looking for my keys.'],
        ['Turn on / off', 'ធើន អន / អហ្វ', 'បើក / បិទ (ភ្លើង ឧបករណ៍)', 'Turn off the lights before leaving.'],
        ['Give up', 'ហ្គីវ អាប់', 'បោះបង់ចោល / ចុះចាញ់', 'Never give up learning.'],
        ['Find out', 'ហ្វាញដ៍ អៅ', 'រកឃើញព័ត៌មាន / ដឹងរឿង', 'Can you find out the meeting time?'],
        ['Run out of', 'រ៉ាន់ អៅ អហ្វ', 'អស់ / ប្រើប្រាស់អស់រលីង', 'We ran out of coffee.'],
        ['Pick up', 'ភីក អាប់', 'រើសយក / ទៅទទួលមនុស្ស', 'I will pick you up at 5:00 PM.'],
        ['Put on', 'ភុត អន', 'ពាក់ / ស្លៀកពាក់', 'Put on your jacket; it\'s cold.'],
        ['Take off', 'ថេក អហ្វ', 'ដោះចេញ / យន្តហោះហោះឡើង', 'The plane took off on time.'],
        ['Look forward to', 'លុក ហ្វ័រវ៉ដ ធូ', 'ទន្ទឹងរង់ចាំដោយក្តីរំភើប', 'I look forward to meeting you.'],
        ['Set up', 'សេត អាប់', 'បង្កើត / រៀបចំដំឡើង', 'They set up a new enterprise.'],
        ['Bring up', 'ប្រីង អាប់', 'លើកយកមកនិយាយ / ចិញ្ចឹមកូន', 'Don\'t bring up that topic.'],
        ['Get along with', 'ហ្គេត អឹឡង វីត', 'ចុះសម្រុងគ្នាល្អជាមួយអ្នកដទៃ', 'She gets along well with coworkers.'],
        ['Call off', 'ខល អហ្វ', 'លុបចោល (Cancel)', 'They called off the outdoor concert.'],
        ['Carry on', 'ឃែរី អន', 'បន្តធ្វើទៅមុខទៀត', 'Carry on with your good work.'],
        ['Look after', 'លុក អាហ្វធើ', 'មើលថែទាំ (Care for)', 'She looks after her elderly parents.']
      ]
    },
    vocabulary: [
      { word: 'look for', khmerSound: 'លុក ហ្វ័រ', meaningKhmer: 'ស្វែងរក', example: 'What are you looking for?' },
      { word: 'give up', khmerSound: 'ហ្គីវ អាប់', meaningKhmer: 'បោះបង់', example: 'Don\'t give up now.' },
      { word: 'run out of', khmerSound: 'រ៉ាន់ អៅ អហ្វ', meaningKhmer: 'អស់ពីស្តុក', example: 'We ran out of gas.' },
      { word: 'look forward to', khmerSound: 'លុក ហ្វ័រវ៉ដ ធូ', meaningKhmer: 'ទន្ទឹងរង់ចាំ', example: 'I look forward to our trip.' }
    ],
    samplePhrases: [
      {
        english: 'I look forward to hearing from you soon.',
        khmerSound: 'អាយ លុក ហ្វ័រវ៉ដ ធូ ហៀររីង ហ្វ្រម យូ ស៊ូន។',
        khmerMeaning: 'ខ្ញុំទន្ទឹងរង់ចាំទទួលដំណឹងពីអ្នកក្នុងពេលឆាប់ៗ (ឃ្លាពេញនិយមចុងអ៊ីមែល)។'
      }
    ],
    quiz: {
      question: 'តើឃ្លា "They called off the meeting" មានន័យថាយ៉ាងដូចម្តេច?',
      questionKhmer: 'What does "They called off the meeting" mean?',
      options: [
        'ពួកគេបានពន្យារពេលប្រជុំ',
        'ពួកគេបានលុបចោលកិច្ចប្រជុំ (canceled)',
        'ពួកគេបានចាប់ផ្តើមប្រជុំ',
        'ពួកគេបានចូលរួមប្រជុំ'
      ],
      correctIndex: 1,
      explanation: '"Call off" គឺជា Phrasal Verb មានន័យស្មើនឹង "Cancel" (លុបចោលទាំងស្រុង)។'
    }
  },

  // =========================================================================
  // LESSON 11: សំណួរកន្ទុយបញ្ជាក់ (Question Tags)
  // =========================================================================
  {
    id: 11,
    unitNumber: 'មេរៀនទី ១១',
    titleKhmer: 'សំណួរកន្ទុយបញ្ជាក់ (Question Tags)',
    titleEnglish: 'Question Tags: Seeking Confirmation',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនរបៀបប្រើ Question tags ដើម្បីសួរនាំបញ្ជាក់ព័ត៌មានឱ្យកាន់តែធម្មជាតិ និងមានទំនុកចិត្តក្នុងភាសាអង់គ្លេស។',
    grammarRule: {
      formula: 'Positive Sentence + Negative Tag? | Negative Sentence + Positive Tag?',
      explanation: 'ច្បាប់ផ្ទុយគ្នា៖ ប្រសិនបើប្រយោគខាងមុខជាប្រយោគស្រប (+) កន្ទុយខាងក្រោយត្រូវតែជាបដិសេធ (-)។ ប្រសិនបើប្រយោគខាងមុខជាបដិសេធ (-) កន្ទុយត្រូវតែជាស្រប (+)។',
      subRules: [
        {
          title: 'Positive (+) -> Negative (-):',
          detail: 'You are a student, aren\'t you? / She lives in Phnom Penh, doesn\'t she?'
        },
        {
          title: 'Negative (-) -> Positive (+):',
          detail: 'You haven\'t eaten yet, have you? / He didn\'t call, did he?'
        },
        {
          title: 'ករណីលើកលែងពិសេស (Special Cases):',
          detail: 'I am right, aren\'t I? (មិនមែន amn\'t I ទេ) / Let\'s go, shall we?'
        }
      ],
      examples: [
        {
          english: 'You are studying at the Institute of Technology, aren\'t you?',
          khmerSound: 'យូ អា ស្តាឌីអ៊ីង អែត ឌី អ៊ីនស្ទីធ្យូត... អាអិនថ៍ យូ?',
          khmerMeaning: 'អ្នកកំពុងរៀននៅវិទ្យាស្ថានបច្ចេកវិទ្យា មែនទេ?'
        },
        {
          english: 'She doesn\'t like drinking bitter coffee, does she?',
          khmerSound: 'ស្ស៊ី ដាសិនថ៍ ឡាយក៍ ឌ្រីងឃីង ប៊ីតធើ ខូហ្វី, ដាស ស្ស៊ី?',
          khmerMeaning: 'នាងមិនចូលចិត្តផឹកកាហ្វេល្វីងទេ មែនអត់?'
        },
        {
          english: 'They have already completed the assignment, haven\'t they?',
          khmerSound: 'ដេ ហាវ អលរ៉េឌី ខមភ្លីតធីដ ឌី អឹសាយម៉ិន, ហាវវិនថ៍ ដេ?',
          khmerMeaning: 'ពួកគេបានបញ្ចប់កិច្ចការរួចរាល់ហើយ មែនទេ?'
        },
        {
          english: 'He will attend the international conference tomorrow, won\'t he?',
          khmerSound: 'ហ៊ី វីល អឹថេន ឌី អ៊ីនធើណេសិនណល ខនហ្វ្រេនស៍... វ៉ុនថ៍ ហ៊ី?',
          khmerMeaning: 'គាត់នឹងចូលរួមសន្និសីទអន្តរជាតិនៅថ្ងៃស្អែក មែនទេ?'
        }
      ]
    },
    dialogue: [
      {
        speaker: 'Vannak',
        speakerKhmer: 'វណ្ណៈ',
        text: 'The weather today is exceptionally pleasant, isn\'t it?',
        khmerSound: 'ដឹ វ៉ែដឌើ ធូដេ អ៊ីស អ៊ិចសេបស្សិនណលី ផ្លេសិន, អ៊ីសិនថ៍ អ៊ីត?',
        meaningKhmer: 'អាកាសធាតុថ្ងៃនេះពិតជាត្រជាក់ស្រួលគួរឱ្យរីករាយណាស់ មែនទេ?'
      },
      {
        speaker: 'Kalyan',
        speakerKhmer: 'កល្យាណ',
        text: 'Yes, it is! You didn\'t forget to bring the picnic basket, did you?',
        khmerSound: 'យេស, អ៊ីត អ៊ីស! យូ ឌីដិនថ៍ ហ្វ័រហ្គេត ធូ ប្រីង ដឹ ភីកនិក បាស្កេត, ឌីដ យូ?',
        meaningKhmer: 'ចាស ពិតមែនហើយ! អ្នកមិនបានភ្លេចយកកន្ត្រកអាហារមកទេ មែនអត់?'
      },
      {
        speaker: 'Vannak',
        speakerKhmer: 'វណ្ណៈ',
        text: 'No, I didn\'t! It is right in the car trunk. We are going to have a great time, aren\'t we?',
        khmerSound: 'ណូ, អាយ ឌីដិនថ៍! អ៊ីត អ៊ីស រ៉ាយថ៍ អ៊ីន ដឹ ខា ស្រ្តាំង... អាអិនថ៍ វី?',
        meaningKhmer: 'អត់ភ្លេចទេ! វានៅក្នុងគូទឡានត្រង់នេះឯង។ ពួកយើងនឹងសប្បាយចិត្តខ្លាំងណាស់ មែនទេ?'
      }
    ],
    vocabulary: [
      { word: 'confirmation', khmerSound: 'ខនហ្វឺមេសិន', meaningKhmer: 'ការបញ្ជាក់ច្បាស់', example: 'We are waiting for written confirmation.' },
      { word: 'exceptionally', khmerSound: 'អ៊ិចសេបស្សិនណលី', meaningKhmer: 'យ៉ាងអស្ចារ្យ / លើសពីធម្មតា', example: 'She is an exceptionally talented pianist.' },
      { word: 'pleasant', khmerSound: 'ផ្លេសិន', meaningKhmer: 'គួរឱ្យរីករាយ / ស្រួលចិត្ត', example: 'We had a very pleasant conversation.' }
    ],
    samplePhrases: [
      {
        english: 'Let\'s take a short break now, shall we?',
        khmerSound: 'ឡេតស៍ ថេក អឹ ស្សត ប្រេក ណៅ, ស្ស៊ែល វី?',
        khmerMeaning: 'តោះពួកយើងសម្រាកបន្តិចសិនល្អទេ? (Let\'s ប្រើកន្ទុយ shall we)'
      }
    ],
    quiz: {
      question: 'បំពេញ Question tag ត្រឹមត្រូវ៖ "Your sister can speak French fluently, ______?"',
      questionKhmer: 'Complete: "Your sister can speak French fluently, ______?"',
      options: ['can\'t she', 'doesn\'t she', 'isn\'t she', 'can she'],
      correctIndex: 0,
      explanation: 'ដោយសារប្រយោគខាងមុខប្រើ Modal "can" ក្នុងទម្រង់ស្រប (+) ដូច្នេះកន្ទុយ tag ត្រូវតែជាបដិសេធ (-) "can\'t she?"។'
    }
  },

  // =========================================================================
  // LESSON 12: ការសង្ខេប និងការរៀបរាប់រឿងរ៉ាវផ្ទាល់ខ្លួន (Storytelling & Narration)
  // =========================================================================
  {
    id: 12,
    unitNumber: 'មេរៀនទី ១២',
    titleKhmer: 'ការសង្ខេប និងការរៀបរាប់រឿងរ៉ាវផ្ទាល់ខ្លួន',
    titleEnglish: 'Storytelling & Narration',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'រៀនរបៀបប្រើពាក្យភ្ជាប់លំដាប់ពេលវេលា (First, Then, After that, Suddenly, Finally) ដើម្បីនិទាន និងសរសេររឿងរ៉ាវផ្ទាល់ខ្លួនឱ្យមានភាពទាក់ទាញ។',
    grammarRule: {
      formula: 'Sequencing: First -> Then -> Next -> After that -> Suddenly -> Fortunately -> In the end / Finally',
      explanation: 'ពាក្យភ្ជាប់លំដាប់ពេលវេលា (Time Transition Signals) ជួយអ្នកស្តាប់ ឬអ្នកអានយល់ពីដំណើររឿងតាមលំដាប់លំដោយពីដើមដល់ចប់ដោយមិនច្របូកច្របល់។',
      subRules: [
        {
          title: 'First / Initially (ដំបូងឡើយ):',
          detail: 'First, we packed our hiking backpacks.'
        },
        {
          title: 'Then / Next / After that (បន្ទាប់មក / បន្ទាប់ពីនោះ):',
          detail: 'Then, we set off along the jungle trail.'
        },
        {
          title: 'Suddenly / Unexpectedly (ស្រាប់តែ / ដោយមិននឹកស្មានដល់):',
          detail: 'Suddenly, dark storm clouds gathered in the sky.'
        },
        {
          title: 'Fortunately / Luckily (សំណាងល្អ):',
          detail: 'Fortunately, we found a safe wooden shelter nearby.'
        },
        {
          title: 'Finally / In the end (នៅទីបំផុត):',
          detail: 'Finally, the rain stopped and we reached the mountain peak.'
        }
      ],
      examples: [
        {
          english: 'First, we arrived at the campsite and pitched our tents before dark.',
          khmerSound: 'ហ្វឺស, វី អឺរ៉ាយវដ៍ អែត ដឹ ខែមសាយថ៍...',
          khmerMeaning: 'ដំបូងឡើយ ពួកយើងបានទៅដល់កន្លែងបោះតង់ និងបានបោះតង់មុនពេលមេឃងងឹត។'
        },
        {
          english: 'After that, we gathered firewood and cooked dinner over an open campfire.',
          khmerSound: 'អាហ្វធើ ដាត, វី ហ្គេដឌើដ ហ្វាយអ៊ើវូដ...',
          khmerMeaning: 'បន្ទាប់ពីនោះមក ពួកយើងបានប្រមូលអុស និងចម្អិនអាហារពេលល្ងាចលើភ្នក់ភ្លើង។'
        },
        {
          english: 'Suddenly, we heard a mysterious rustling sound in the thick bushes.',
          khmerSound: 'សាដដិនលី, វី ហឺដ អឹ មីសស្ទើរៀស រ៉ាសស្លីង សោន...',
          khmerMeaning: 'ស្រាប់តែ ពួកយើងបានឮសំឡេងក្រាបក្រុបដ៏អាថ៌កំបាំងមួយនៅក្នុងគុម្ពោតព្រៃក្រាស់។'
        },
        {
          english: 'Fortunately, it was just a curious little deer looking for food.',
          khmerSound: 'ហ្វឈូនីតលី, អ៊ីត វ៉ស ចាស្ត អឹ ឃ្យូរៀស លីតថល ឌៀ...',
          khmerMeaning: 'សំណាងល្អ វាគ្រាន់តែជាកូនសត្វក្តាន់ដ៏ស្លូតមួយក្បាលដែលដើររកចំណីប៉ុណ្ណោះ។'
        },
        {
          english: 'Finally, we sat together under the starry sky, singing songs until midnight.',
          khmerSound: 'ហ្វាយណលលី, វី សេត ធូហ្គេដឌើ អាន់ឌើ ដឹ ស្តារី ស្កាយ...',
          khmerMeaning: 'នៅទីបំផុត ពួកយើងបានអង្គុយជុំគ្នាក្រោមមេឃស្រឡះពេញដោយផ្កាយ និងច្រៀងចម្រៀងរហូតដល់កណ្តាលអធ្រាត្រ។'
        }
      ]
    },
    paragraph: {
      titleEnglish: 'An Unforgettable Mountain Camping Adventure',
      titleKhmer: 'ដំណើរផ្សងព្រេងបោះតង់លើកំពូលភ្នំដែលមិនអាចបំភ្លេចបាន',
      englishText: 'Last November, three close friends and I decided to go camping on Kirirum Mountain. First, we rented all the essential camping gear and bought fresh ingredients at the market. Then, we drove through the pine forests early on Saturday. Suddenly, midway up the mountain, our vehicle got a flat tire! Fortunately, a friendly local ranger stopped by and helped us replace it quickly. Finally, we set up our camp beside a peaceful stream and watched the most glorious sunset of our lives. It was truly an unforgettable memory.',
      khmerMeaning: 'កាលពីខែវិច្ឆិកាឆ្នាំមុន មិត្តភក្តិជិតស្និទ្ធ ៣ នាក់ និងខ្ញុំបានសម្រេចចិត្តទៅបោះតង់លើភ្នំគិរីរម្យ។ ដំបូងឡើយ ពួកយើងបានជួលសម្ភារៈបោះតង់ចាំបាច់ និងទិញម្ហូបស្រស់ៗនៅផ្សារ។ បន្ទាប់មក ពួកយើងបានបើកបរឆ្លងកាត់ព្រៃស្រល់តាំងពីព្រឹកព្រលឹមថ្ងៃសៅរ៍។ ស្រាប់តែពេលកំពុងឡើងបានពាក់កណ្តាលភ្នំ ឡានរបស់យើងបែរជាបែកកង់! សំណាងល្អ មន្ត្រីឧទ្យានុរក្សដ៏រួសរាយម្នាក់បានឈប់ជួយដូរកង់យ៉ាងរហ័ស។ នៅទីបំផុត ពួកយើងបានបោះតង់នៅក្បែរមាត់អូរដ៏ស្ងប់ស្ងាត់ និងបានទស្សនាថ្ងៃលិចដ៏អស្ចារ្យបំផុតក្នុងជីវិត។ វាពិតជាអនុស្សាវរីយ៍ដែលមិនអាចបំភ្លេចបានឡើយ។'
    },
    vocabulary: [
      { word: 'unforgettable', khmerSound: 'អាន់ហ្វ័រហ្គេតថាបល', meaningKhmer: 'មិនអាចបំភ្លេចបាន', example: 'It was an unforgettable journey.' },
      { word: 'adventure', khmerSound: 'អែដវេនឆើ', meaningKhmer: 'ដំណើរផ្សងព្រេង', example: 'They love outdoor adventures.' },
      { word: 'fortunately', khmerSound: 'ហ្វឈូនីតលី', meaningKhmer: 'សំណាងល្អ', example: 'Fortunately, nobody was hurt.' },
      { word: 'mysterious', khmerSound: 'មីសស្ទើរៀស', meaningKhmer: 'អាថ៌កំបាំង', example: 'We solved the mysterious puzzle.' },
      { word: 'glorious', khmerSound: 'ហ្ក្លរៀស', meaningKhmer: 'រុងរឿង / អស្ចារ្យស្រស់ត្រកាល', example: 'The sunrise was absolutely glorious.' }
    ],
    samplePhrases: [
      {
        english: 'In the end, everything turned out better than we expected.',
        khmerSound: 'អ៊ីន ឌី អេន, អេវរីធីង ធើនដ៍ អៅ ប៊ែតធើ ដេន វី អ៊ិចស្ពេកធីដ។',
        khmerMeaning: 'នៅទីបំផុត អ្វីៗគ្រប់យ៉ាងបានប្រែជាល្អប្រសើរជាងការរំពឹងទុករបស់យើងទៅទៀត។'
      }
    ],
    quiz: {
      question: 'តើពាក្យភ្ជាប់ណាដែលប្រើសម្រាប់បង្ហាញពីហេតុការណ៍ដែលកើតឡើងដោយមិនដឹងខ្លួន ឬគួរឱ្យភ្ញាក់ផ្អើល?',
      questionKhmer: 'Which word signals an unexpected or sudden event in storytelling?',
      options: ['First', 'Suddenly', 'Finally', 'In conclusion'],
      correctIndex: 1,
      explanation: '"Suddenly" មានន័យថា «ស្រាប់តែ / ភ្លាមៗនោះ» ដែលប្រើដើម្បីបង្ហាញពីព្រឹត្តិការណ៍ភ្ញាក់ផ្អើលកើតឡើងភ្លាមៗក្នុងដំណើររឿង។'
    }
  }
];
