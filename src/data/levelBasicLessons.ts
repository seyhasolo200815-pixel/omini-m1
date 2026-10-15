export interface VocabularyWord {
  word: string;
  khmerSound: string;
  meaningKhmer: string;
  example: string;
  exampleKhmer?: string;
  category?: string;
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
    type?: 'affirmative' | 'negative' | 'question';
  }[];
}

export interface LevelBasicLesson {
  id: number;
  unitNumber: string;
  titleKhmer: string;
  titleEnglish: string;
  duration: string;
  descriptionKhmer: string;
  grammarRule?: GrammarRule;
  vocabulary: VocabularyWord[];
  dialogue?: DialogueLine[];
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

export const LEVEL_BASIC_LESSONS: LevelBasicLesson[] = [
  // =========================================================================
  // LESSON 01: វាក្យសព្ទសកម្មភាពប្រចាំថ្ងៃ (Daily Routines Vocabulary - 20 Verbs)
  // =========================================================================
  {
    id: 1,
    unitNumber: 'មេរៀនទី ០១',
    titleKhmer: 'វាក្យសព្ទសកម្មភាពប្រចាំថ្ងៃ',
    titleEnglish: 'Daily Routines Vocabulary',
    duration: '២៥ នាទី',
    descriptionKhmer: 'រៀនពាក្យកិរិយាស័ព្ទសំខាន់ៗចំនួន ២០ ពាក្យ សម្រាប់ពិពណ៌នាពីសកម្មភាពប្រចាំថ្ងៃចាប់ពីព្រឹករហូតដល់យប់ ព្រមទាំងរបៀបបញ្ចេញសំឡេង និងប្រយោគគំរូ។',
    vocabulary: [
      {
        word: 'Wake up',
        khmerSound: 'វ៉េក អាប់',
        meaningKhmer: 'ភ្ញាក់ពីគេង (បើកភ្នែក)',
        example: 'I wake up at 6:00 AM every morning.',
        exampleKhmer: 'ខ្ញុំភ្ញាក់ពីគេងនៅម៉ោង ៦:០០ ព្រឹកជារៀងរាល់ថ្ងៃ។'
      },
      {
        word: 'Get up',
        khmerSound: 'ហ្គេត អាប់',
        meaningKhmer: 'ក្រោកពីគ្រែ',
        example: 'I get up and stretch my body.',
        exampleKhmer: 'ខ្ញុំក្រោកពីគ្រែ ហើយពត់ពែនខ្លួនប្រាណ។'
      },
      {
        word: 'Brush teeth',
        khmerSound: 'ប្រាស ធីត',
        meaningKhmer: 'ដុសធ្មេញ',
        example: 'I brush my teeth twice a day.',
        exampleKhmer: 'ខ្ញុំដុសធ្មេញពីរដងក្នុងមួយថ្ងៃ។'
      },
      {
        word: 'Wash face',
        khmerSound: 'វ៉ស ហ្វេស',
        meaningKhmer: 'លាងមុខ',
        example: 'She washes her face with cold water.',
        exampleKhmer: 'នាងលាងមុខរបស់នាងជាមួយនឹងទឹកត្រជាក់។'
      },
      {
        word: 'Take a shower',
        khmerSound: 'ថេក អឹ ស្សាវវើ',
        meaningKhmer: 'ងូតទឹក (ផ្កាឈូក)',
        example: 'He takes a shower before breakfast.',
        exampleKhmer: 'គាត់ងូតទឹកមុនពេលញ៉ាំអាហារពេលព្រឹក។'
      },
      {
        word: 'Get dressed',
        khmerSound: 'ហ្គេត ដ្រេសថ៍',
        meaningKhmer: 'ស្លៀកពាក់',
        example: 'I get dressed quickly for work.',
        exampleKhmer: 'ខ្ញុំស្លៀកពាក់យ៉ាងលឿនដើម្បីទៅធ្វើការ។'
      },
      {
        word: 'Comb hair',
        khmerSound: 'ខូម ហែរ',
        meaningKhmer: 'សិតសក់',
        example: 'She combs her hair in front of the mirror.',
        exampleKhmer: 'នាងសិតសក់នៅមុខកញ្ចក់។'
      },
      {
        word: 'Have breakfast',
        khmerSound: 'ហាវ ប្រេកហ្វាស្ត',
        meaningKhmer: 'ញ៉ាំអាហារពេលព្រឹក',
        example: 'We have breakfast together as a family.',
        exampleKhmer: 'ពួកយើងញ៉ាំអាហារពេលព្រឹកជាមួយគ្នាជាគ្រួសារ។'
      },
      {
        word: 'Drink coffee',
        khmerSound: 'ឌ្រីង ខូហ្វី',
        meaningKhmer: 'ផឹកកាហ្វេ',
        example: 'I drink hot coffee every morning.',
        exampleKhmer: 'ខ្ញុំផឹកកាហ្វេក្តៅរៀងរាល់ព្រឹក។'
      },
      {
        word: 'Go to work',
        khmerSound: 'ហ្គោ ធូ វើក',
        meaningKhmer: 'ទៅធ្វើការ',
        example: 'They go to work by motorcycle.',
        exampleKhmer: 'ពួកគេទៅធ្វើការដោយជិះម៉ូតូ។'
      },
      {
        word: 'Start work',
        khmerSound: 'ស្តាត វើក',
        meaningKhmer: 'ចាប់ផ្តើមធ្វើការ',
        example: 'My office starts work at 8:00 AM.',
        exampleKhmer: 'ការិយាល័យរបស់ខ្ញុំចាប់ផ្តើមធ្វើការនៅម៉ោង ៨:០០ ព្រឹក។'
      },
      {
        word: 'Have lunch',
        khmerSound: 'ហាវ ឡាន់ឆ៍',
        meaningKhmer: 'ញ៉ាំអាហារថ្ងៃត្រង់',
        example: 'I have lunch with my coworkers at noon.',
        exampleKhmer: 'ខ្ញុំញ៉ាំអាហារថ្ងៃត្រង់ជាមួយមិត្តរួមការងារនៅពេលថ្ងៃត្រង់។'
      },
      {
        word: 'Drink water',
        khmerSound: 'ឌ្រីង វ៉ត់ធើ',
        meaningKhmer: 'ផឹកទឹក',
        example: 'Remember to drink plenty of water.',
        exampleKhmer: 'កុំភ្លេចផឹកទឹកឱ្យបានច្រើនណា។'
      },
      {
        word: 'Finish work',
        khmerSound: 'ហ្វីនីស វើក',
        meaningKhmer: 'ចេញពីធ្វើការ / បញ្ចប់ការងារ',
        example: 'She finishes work at 5:00 PM.',
        exampleKhmer: 'នាងចេញពីធ្វើការនៅម៉ោង ៥:០០ ល្ងាច។'
      },
      {
        word: 'Go home',
        khmerSound: 'ហ្គោ ហូម',
        meaningKhmer: 'ត្រឡប់ទៅផ្ទះ',
        example: 'I go home and relax after a long day.',
        exampleKhmer: 'ខ្ញុំត្រឡប់ទៅផ្ទះ និងសម្រាកបន្ទាប់ពីថ្ងៃធ្វើការដ៏យូរ។'
      },
      {
        word: 'Cook dinner',
        khmerSound: 'ឃុក ឌីននើ',
        meaningKhmer: 'ចម្អិនអាហារពេលល្ងាច',
        example: 'My mother cooks dinner for us.',
        exampleKhmer: 'ម្តាយខ្ញុំចម្អិនអាហារពេលល្ងាចសម្រាប់ពួកយើង។'
      },
      {
        word: 'Watch TV',
        khmerSound: 'វ៉ច ធីវី',
        meaningKhmer: 'មើលទូរទស្សន៍',
        example: 'We watch the evening news together.',
        exampleKhmer: 'ពួកយើងមើលព័ត៌មានពេលល្ងាចជាមួយគ្នា។'
      },
      {
        word: 'Read a book',
        khmerSound: 'រីដ អឹ ប៊ុក',
        meaningKhmer: 'អានសៀវភៅ',
        example: 'He reads an interesting English book.',
        exampleKhmer: 'គាត់អានសៀវភៅភាសាអង់គ្លេសដ៏គួរឱ្យចាប់អារម្មណ៍មួយក្បាល។'
      },
      {
        word: 'Do exercise',
        khmerSound: 'ឌូ អិចសឺសាយស៍',
        meaningKhmer: 'ហាត់ប្រាណ',
        example: 'I do exercise for 30 minutes daily.',
        exampleKhmer: 'ខ្ញុំហាត់ប្រាណរយៈពេល ៣០ នាទីរៀងរាល់ថ្ងៃ។'
      },
      {
        word: 'Go to bed',
        khmerSound: 'ហ្គោ ធូ ប៊ែដ',
        meaningKhmer: 'ចូលគេង',
        example: 'I go to bed at 10:30 PM.',
        exampleKhmer: 'ខ្ញុំចូលគេងនៅម៉ោង ១០:៣០ យប់។'
      }
    ],
    samplePhrases: [
      {
        english: 'What time do you usually wake up?',
        khmerSound: 'វ៉ាត់ ថាម ឌូ យូ យូហ្សួលី វ៉េក អាប់?',
        khmerMeaning: 'តើជាធម្មតាអ្នកភ្ញាក់ពីគេងនៅម៉ោងប៉ុន្មាន?'
      },
      {
        english: 'I always have breakfast before leaving.',
        khmerSound: 'អាយ អលវ៉េស ហាវ ប្រេកហ្វាស្ត ប៊ីហ្វ័រ លីវីង។',
        khmerMeaning: 'ខ្ញុំតែងតែញ៉ាំអាហារពេលព្រឹកមុនពេលចាកចេញជានិច្ច។'
      },
      {
        english: 'She goes to work by bus every weekday.',
        khmerSound: 'ស្ស៊ី ហ្គោស ធូ វើក បាយ បាស អេវរី វីកដេ។',
        khmerMeaning: 'នាងជិះឡានក្រុងទៅធ្វើការជារៀងរាល់ថ្ងៃនៃសប្តាហ៍។'
      }
    ],
    quiz: {
      question: 'តើឃ្លា "Brush teeth" មានន័យជាភាសាខ្មែរថាយ៉ាងដូចម្តេច?',
      questionKhmer: 'What does "Brush teeth" mean?',
      options: ['លាងមុខ', 'ដុសធ្មេញ', 'ងូតទឹក', 'សិតសក់'],
      correctIndex: 1,
      explanation: '"Brush teeth" មានន័យថា «ដុសធ្មេញ» (Brush = ដុស, teeth = ធ្មេញ)។'
    }
  },

  // =========================================================================
  // LESSON 02: បច្ចុប្បន្នកាលធម្មតា (Present Simple Tense)
  // =========================================================================
  {
    id: 2,
    unitNumber: 'មេរៀនទី ០២',
    titleKhmer: 'បច្ចុប្បន្នកាលធម្មតា',
    titleEnglish: 'Present Simple Tense',
    duration: '៣០ នាទី',
    descriptionKhmer: 'យល់ដឹងពីបច្ចុប្បន្នកាលធម្មតា រូបមន្ត S + V(s/es) + O ការប្រើប្រាស់ជាមួយប្រធានឯកវចនៈ/ពហុវចនៈ និងឧទាហរណ៍ប្រយោគស្រប បដិសេធ និងសំណួរយ៉ាងតិច ១០ ប្រយោគ។',
    grammarRule: {
      formula: 'Affirmative: S + V(s/es) + O | Negative: S + don\'t / doesn\'t + V(base) | Question: Do / Does + S + V(base)?',
      explanation: 'ប្រើសម្រាប់ពិពណ៌នាអំពីការពិតទូទៅ (General Truth), ទម្លាប់ប្រចាំថ្ងៃ (Habits/Routines), ឬសកម្មភាពកើតឡើងជាប្រចាំ។',
      subRules: [
        {
          title: 'ប្រធានពហុវចនៈ (I / You / We / They):',
          detail: 'កិរិយាស័ព្ទរក្សាទុកទម្រង់ដើម (Base Form) មិនថែម s/es ឡើយ។ បដិសេធប្រើ "do not / don\'t"។ សំណួរប្រើ "Do ...?"'
        },
        {
          title: 'ប្រធានឯកវចនៈ (He / She / It / ឈ្មោះមនុស្សម្នាក់):',
          detail: 'កិរិយាស័ព្ទត្រូវថែម -s ឬ -es (ដូចជា goes, watches, studies)។ បដិសេធប្រើ "does not / doesn\'t + V(ដើម)"។ សំណួរប្រើ "Does ...?"'
        }
      ],
      examples: [
        {
          english: 'I live in Phnom Penh.',
          khmerSound: 'អាយ លីវ អ៊ីន ភ្នំពេញ។',
          khmerMeaning: '(+) ខ្ញុំរស់នៅក្នុងរាជធានីភ្នំពេញ។',
          type: 'affirmative'
        },
        {
          english: 'She speaks English very fluently.',
          khmerSound: 'ស្ស៊ី ស្ពីកស៍ អ៊ីងគ្លីស វ៉េរី ភ្លូអិនលី។',
          khmerMeaning: '(+) នាងនិយាយភាសាអង់គ្លេសយ៉ាងស្ទាត់ជំនាញ (កិរិយាស័ព្ទ speaks ថែម s)។',
          type: 'affirmative'
        },
        {
          english: 'He works at a bank downtown.',
          khmerSound: 'ហ៊ី វើកស៍ អែត អឹ ប៊ែង ដោនថោន។',
          khmerMeaning: '(+) គាត់ធ្វើការនៅធនាគារមួយនៅកណ្តាលក្រុង។',
          type: 'affirmative'
        },
        {
          english: 'The sun rises in the east.',
          khmerSound: 'ដឹ សាន់ រ៉ាយសេស អ៊ីន ឌី អ៊ីស។',
          khmerMeaning: '(+) ព្រះអាទិត្យរះនៅទិសខាងកើត (ការពិតធម្មជាតិ)។',
          type: 'affirmative'
        },
        {
          english: 'They play football every Sunday.',
          khmerSound: 'ដេ ផ្លេ ហ្វូតបល អេវរី សាន់ដេ។',
          khmerMeaning: '(+) ពួកគេលេងបាល់ទាត់ជារៀងរាល់ថ្ងៃអាទិត្យ។',
          type: 'affirmative'
        },
        {
          english: 'I do not drink alcohol.',
          khmerSound: 'អាយ ឌូ ណត ឌ្រីង អាលកូហល។',
          khmerMeaning: '(-) ខ្ញុំមិនពិសាគ្រឿងស្រវឹងទេ។ (I don\'t drink)',
          type: 'negative'
        },
        {
          english: 'He does not eat spicy food.',
          khmerSound: 'ហ៊ី ដាស ណត អ៊ីត ស្ប៉ាយស៊ី ហ្វ៊ូត។',
          khmerMeaning: '(-) គាត់មិនញ៉ាំអាហារហឹរទេ។ (He doesn\'t eat)',
          type: 'negative'
        },
        {
          english: 'We don\'t have classes on weekends.',
          khmerSound: 'វី ដោនថ៍ ហាវ ខ្លាសសេស អន វីកអ៊ិនស៍។',
          khmerMeaning: '(-) ពួកយើងគ្មានថ្នាក់រៀននៅចុងសប្តាហ៍ទេ។',
          type: 'negative'
        },
        {
          english: 'She doesn\'t like cold weather.',
          khmerSound: 'ស្ស៊ី ដាសិនថ៍ ឡាយក៍ ខូល វ៉ែដឌើ។',
          khmerMeaning: '(-) នាងមិនចូលចិត្តអាកាសធាតុត្រជាក់ទេ។',
          type: 'negative'
        },
        {
          english: 'Do you study English every day?',
          khmerSound: 'ឌូ យូ ស្តាឌី អ៊ីងគ្លីស អេវរី ដេ?',
          khmerMeaning: '(?) តើអ្នករៀនភាសាអង់គ្លេសរៀងរាល់ថ្ងៃមែនទេ?',
          type: 'question'
        },
        {
          english: 'Does she work on Saturday?',
          khmerSound: 'ដាស ស្ស៊ី វើក អន សាតឺដេ?',
          khmerMeaning: '(?) តើនាងធ្វើការនៅថ្ងៃសៅរ៍ដែរឬទេ?',
          type: 'question'
        },
        {
          english: 'Where do you come from?',
          khmerSound: 'វែរ ឌូ យូ ខាំ ហ្វ្រម?',
          khmerMeaning: '(?) តើអ្នកមកពីប្រទេស/កន្លែងណា?',
          type: 'question'
        }
      ]
    },
    vocabulary: [
      { word: 'Always', khmerSound: 'អលវ៉េស', meaningKhmer: 'តែងតែ (១០០%)', example: 'I always do my homework.' },
      { word: 'Usually', khmerSound: 'យូហ្សួលី', meaningKhmer: 'ជាធម្មតា (៨០%)', example: 'She usually drinks tea.' },
      { word: 'Often', khmerSound: 'អហ្វិន / អហ្វថិន', meaningKhmer: 'ជាញឹកញាប់ (៦០%)', example: 'We often walk to school.' },
      { word: 'Sometimes', khmerSound: 'សាំថាមស៍', meaningKhmer: 'ជួនកាល (៤០%)', example: 'He sometimes eats pizza.' },
      { word: 'Never', khmerSound: 'ណេវវើ', meaningKhmer: 'មិនដែល (០%)', example: 'They never smoke.' }
    ],
    samplePhrases: [
      {
        english: 'Practice: He (watch) TV every evening.',
        khmerSound: 'ប្រាក់ធីស: ហ៊ី វ៉ចឆេស ធីវី...',
        khmerMeaning: 'ចម្លើយត្រូវ៖ He watches TV every evening. (ថែម -es)'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសចម្លើយត្រឹមត្រូវ៖ "She ______ English very well."',
      questionKhmer: 'Choose the correct form: "She ______ English very well."',
      options: ['speak', 'speaks', 'speaking', 'is speak'],
      correctIndex: 1,
      explanation: 'ដោយសារប្រធានជា "She" (ឯកវចនៈបុរសទី៣) ដូច្នេះកិរិយាស័ព្ទក្នុងបច្ចុប្បន្នកាលធម្មតាត្រូវថែម "s" (speaks)។'
    }
  },

  // =========================================================================
  // LESSON 03: វាក្យសព្ទម្ហូបអាហារ និងភេសជ្ជៈ (Food & Drinks - 20 items + a/an/some/any)
  // =========================================================================
  {
    id: 3,
    unitNumber: 'មេរៀនទី ០៣',
    titleKhmer: 'វាក្យសព្ទម្ហូបអាហារ និងភេសជ្ជៈ',
    titleEnglish: 'Food & Drinks',
    duration: '២៥ នាទី',
    descriptionKhmer: 'ស្វែងយល់ពីឈ្មោះម្ហូប បន្លែ ផ្លែឈើ និងភេសជ្ជៈទូទៅចំនួន ២០ មុខ រួមទាំងការប្រើប្រាស់វេយ្យាករណ៍ a/an/some/any យ៉ាងត្រឹមត្រូវ។',
    grammarRule: {
      formula: 'Countable: a / an + Singular | Uncountable & Plural: some (Positive) / any (Negative & Question)',
      explanation: 'នាមរាប់បាន (Countable Nouns) អាចមានទម្រង់ឯកវចនៈ (ប្រើ a/an) និងពហុវចនៈ (-s)។ នាមរាប់មិនបាន (Uncountable Nouns) ដូចជា ទឹក អង្ករ ទឹកដោះគោ មិនអាចថែម a/an ឬ -s បានទេ។',
      subRules: [
        {
          title: 'a vs an:',
          detail: 'ប្រើ "a" ពីមុខព្យញ្ជនៈ (a banana, a book); ប្រើ "an" ពីមុខសំឡេងស្រៈ A, E, I, O, U (an apple, an egg, an orange)។'
        },
        {
          title: 'some vs any:',
          detail: 'ប្រើ "some" ក្នុងប្រយោគស្រប និងការផ្ដល់ជូន (I have some water. / Would you like some coffee?)។ ប្រើ "any" ក្នុងប្រយោគបដិសេធ និងសំណួរ (I don\'t have any milk. / Do you have any sugar?)។'
        }
      ],
      examples: [
        {
          english: 'I eat an apple and a banana every morning.',
          khmerSound: 'អាយ អ៊ីត អេន អេផល អ៊ែន អឹ បាណាណា...',
          khmerMeaning: 'ខ្ញុំញ៉ាំផ្លែប៉ោមមួយផ្លែ និងផ្លែចេកមួយផ្លែរៀងរាល់ព្រឹក។'
        },
        {
          english: 'There is some milk in the fridge.',
          khmerSound: 'ដ៊ែរ អ៊ីស សាំ មីលខ៍ អ៊ីន ដឹ ហ្វ្រីដ។',
          khmerMeaning: 'មានទឹកដោះគោខ្លះនៅក្នុងទូទឹកកក (some ជាមួយ uncountable)។'
        },
        {
          english: 'We don\'t have any bread left.',
          khmerSound: 'វី ដោនថ៍ ហាវ អេនី ប្រេដ ឡេហ្វ។',
          khmerMeaning: 'ពួកយើងមិនមាននំប៉័ងនៅសល់សូម្បីតែបន្តិចឡើយ (any ក្នុងបដិសេធ)។'
        },
        {
          english: 'Do you have any questions?',
          khmerSound: 'ឌូ យូ ហាវ អេនី ឃ្វេសឆិនស៍?',
          khmerMeaning: 'តើអ្នកមានសំណួរអ្វីដែរឬទេ? (any ក្នុងសំណួរ)'
        }
      ]
    },
    vocabulary: [
      { word: 'Rice', khmerSound: 'រ៉ាយស៍', meaningKhmer: 'បាយ / អង្ករ (Uncountable)', example: 'Cambodians eat rice every day.' },
      { word: 'Noodles', khmerSound: 'នូឌលស៍', meaningKhmer: 'មី / គុយទាវ', example: 'I like a hot bowl of noodles.' },
      { word: 'Bread', khmerSound: 'ប្រេដ', meaningKhmer: 'នំប៉័ង (Uncountable)', example: 'Can I have some bread with butter?' },
      { word: 'Chicken', khmerSound: 'ឈីកខិន', meaningKhmer: 'សាច់មាន់', example: 'Fried chicken is very delicious.' },
      { word: 'Beef', khmerSound: 'ប៊ីហ្វ', meaningKhmer: 'សាច់គោ', example: 'We ordered grilled beef for dinner.' },
      { word: 'Pork', khmerSound: 'ផក', meaningKhmer: 'សាច់ជ្រូក', example: 'Pork and rice is popular for breakfast.' },
      { word: 'Fish', khmerSound: 'ហ្វីស', meaningKhmer: 'ត្រី', example: 'Fresh fish is good for your health.' },
      { word: 'Egg', khmerSound: 'អេក', meaningKhmer: 'ពងទា / ស៊ុត (an egg)', example: 'I fry two eggs for breakfast.' },
      { word: 'Apple', khmerSound: 'អែបផល', meaningKhmer: 'ផ្លែប៉ោម (an apple)', example: 'An apple a day keeps the doctor away.' },
      { word: 'Banana', khmerSound: 'បាណាណា', meaningKhmer: 'ផ្លែចេក (a banana)', example: 'Bananas are sweet and healthy.' },
      { word: 'Mango', khmerSound: 'ម៉ែងហ្គោ', meaningKhmer: 'ផ្លែស្វាយ', example: 'Cambodian mangoes are very sweet.' },
      { word: 'Orange', khmerSound: 'អរ៉េនជ៍', meaningKhmer: 'ផ្លែក្រូច (an orange)', example: 'Orange juice is rich in Vitamin C.' },
      { word: 'Tomato', khmerSound: 'ថូម៉េថូ', meaningKhmer: 'ប៉េងប៉ោះ', example: 'Tomatoes are used in fresh salad.' },
      { word: 'Potato', khmerSound: 'ផូថេថូ', meaningKhmer: 'ដំឡូងបារាំង', example: 'Do you want mashed potatoes or fries?' },
      { word: 'Onion', khmerSound: 'អានៀន', meaningKhmer: 'ខ្ទឹមបារាំង (an onion)', example: 'Chop the onion finely.' },
      { word: 'Water', khmerSound: 'វ៉ត់ធើ', meaningKhmer: 'ទឹកបរិសុទ្ធ (Uncountable)', example: 'Please give me a glass of cold water.' },
      { word: 'Milk', khmerSound: 'មីលខ៍', meaningKhmer: 'ទឹកដោះគោ (Uncountable)', example: 'Children drink milk before sleeping.' },
      { word: 'Tea', khmerSound: 'ធី', meaningKhmer: 'តែ / ទឹកតែ', example: 'Would you like hot green tea?' },
      { word: 'Coffee', khmerSound: 'ខូហ្វី', meaningKhmer: 'កាហ្វេ', example: 'I need iced coffee in the afternoon.' },
      { word: 'Juice', khmerSound: 'ជូស', meaningKhmer: 'ទឹកផ្លែឈើ', example: 'Fresh orange juice tastes wonderful.' }
    ],
    samplePhrases: [
      {
        english: 'Would you like some coffee or tea?',
        khmerSound: 'វូដ យូ ឡាយក៍ សាំ ខូហ្វី អរ ធី?',
        khmerMeaning: 'តើអ្នកចង់ពិសាកាហ្វេ ឬតែដែរឬទេ?'
      },
      {
        english: 'We need some tomatoes and an onion for the soup.',
        khmerSound: 'វី នីដ សាំ ថូម៉េថូស អ៊ែន អេន អានៀន...',
        khmerMeaning: 'ពួកយើងត្រូវការប៉េងប៉ោះខ្លះ និងខ្ទឹមបារាំងមួយមើមសម្រាប់ធ្វើសម្ល។'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសចម្លើយត្រឹមត្រូវ៖ "I don\'t have ______ money right now."',
      questionKhmer: 'Fill in the blank: "I don\'t have ______ money right now."',
      options: ['a', 'an', 'some', 'any'],
      correctIndex: 3,
      explanation: 'ដោយសារប្រយោគនេះជាប្រយោគបដិសេធ (don\'t have) ហើយ "money" ជានាមរាប់មិនបាន ដូច្នេះយើងត្រូវប្រើ "any"។'
    }
  },

  // =========================================================================
  // LESSON 04: ការសន្ទនាខ្លីៗក្នុងហាងអាហារ (Ordering Food Dialogue)
  // =========================================================================
  {
    id: 4,
    unitNumber: 'មេរៀនទី ០៤',
    titleKhmer: 'ការសន្ទនាខ្លីៗក្នុងហាងអាហារ',
    titleEnglish: 'Ordering Food Dialogue',
    duration: '២៥ នាទី',
    descriptionKhmer: 'អនុវត្តការសន្ទនាពិតប្រាកដរវាងភ្ញៀវ និងអ្នករត់តុ (Waiter & Customer) ព្រមទាំងរៀនឃ្លាសំខាន់ៗដូចជា "Can I have...", "How much is it?" និងការគិតលុយ។',
    dialogue: [
      {
        speaker: 'Waiter',
        speakerKhmer: 'អ្នករត់តុ',
        text: 'Good evening! Welcome to our restaurant. A table for two?',
        khmerSound: 'ហ្គូដ អ៊ីវនីង! វែលខាំ ធូ អ៊ួរ រ៉េសស្ទឺរ៉ង់។ អឹ ថេបល ហ្វ័រ ធូ?',
        meaningKhmer: 'រាត្រីសួស្តី! សូមស្វាគមន៍មកកាន់ភោជនីយដ្ឋានយើងខ្ញុំ។ តុមនុស្ស ២ នាក់មែនទេ?'
      },
      {
        speaker: 'Customer',
        speakerKhmer: 'ភ្ញៀវ',
        text: 'Yes, please. Can we have the menu, please?',
        khmerSound: 'យេស ភ្លីស។ ខេន វី ហាវ ដឹ ម៉េនញូ ភ្លីស?',
        meaningKhmer: 'បាទ/ចាស។ តើពួកយើងអាចសុំមើលបញ្ជីមុខម្ហូបបានទេ?'
      },
      {
        speaker: 'Waiter',
        speakerKhmer: 'អ្នករត់តុ',
        text: 'Here is the menu. Are you ready to order, or do you need a few minutes?',
        khmerSound: 'ហៀរ អ៊ីស ដឹ ម៉េនញូ។ អា យូ រេឌី ធូ អរដឺ...?',
        meaningKhmer: 'នេះជាបញ្ជីមុខម្ហូប។ តើលោកអ្នករួចរាល់ក្នុងការកុម្ម៉ង់ហើយឬនៅ?'
      },
      {
        speaker: 'Customer',
        speakerKhmer: 'ភ្ញៀវ',
        text: 'What do you recommend for dinner tonight?',
        khmerSound: 'វ៉ាត់ ឌូ យូ រ៉េឃូមែន ហ្វ័រ ឌីននើ ធូណាយថ៍?',
        meaningKhmer: 'តើអ្នកមានម្ហូបពិសេសណាណែនាំសម្រាប់ពេលល្ងាចនេះដែរទេ?'
      },
      {
        speaker: 'Waiter',
        speakerKhmer: 'អ្នករត់តុ',
        text: 'Our grilled fish and fried noodles are our chef\'s specials.',
        khmerSound: 'អ៊ួរ ហ្គ្រីល ហ្វីស អ៊ែន ហ្វ្រាយ នូឌលស៍...',
        meaningKhmer: 'ត្រីអាំង និងមីឆា គឺជាមុខម្ហូបពិសេសប្រចាំហាងរបស់ចុងភៅយើងខ្ញុំ។'
      },
      {
        speaker: 'Customer',
        speakerKhmer: 'ភ្ញៀវ',
        text: 'Great! Can I have the grilled fish with rice, please? And a glass of water.',
        khmerSound: 'ហ្គ្រេត! ខេន អាយ ហាវ ដឹ ហ្គ្រីល ហ្វីស វីត រ៉ាយស៍ ភ្លីស?',
        meaningKhmer: 'អស្ចារ្យណាស់! សូមយកត្រីអាំងជាមួយបាយមួយចាន និងទឹកបរិសុទ្ធមួយកែវមក។'
      },
      {
        speaker: 'Waiter',
        speakerKhmer: 'អ្នករត់តុ',
        text: 'Certainly! Would you like still water or sparkling water?',
        khmerSound: 'សឺតិនលី! វូដ យូ ឡាយក៍ ស្ទីល វ៉ត់ធើ...?',
        meaningKhmer: 'ពិតជាបាន! តើលោកអ្នកចង់បានទឹកបរិសុទ្ធធម្មតា ឬទឹកមានហ្គាស?'
      },
      {
        speaker: 'Customer',
        speakerKhmer: 'ភ្ញៀវ',
        text: 'Just still water with ice, thank you.',
        khmerSound: 'ចាស្ត ស្ទីល វ៉ត់ធើ វីត អាយស៍ ថែងឃ្យូ។',
        meaningKhmer: 'គ្រាន់តែទឹកបរិសុទ្ធធម្មតាដាក់ទឹកកកបានហើយ អរគុណ។'
      },
      {
        speaker: 'Customer',
        speakerKhmer: 'ភ្ញៀវ (បន្ទាប់ពីញ៉ាំចប់)',
        text: 'Excuse me, can I have the bill / check, please? How much is it?',
        khmerSound: 'អ៊ិចស៍ឃ្យូស មី, ខេន អាយ ហាវ ដឹ ប៊ីល ភ្លីស? ហៅ ម៉ាច អ៊ីស អ៊ីត?',
        meaningKhmer: 'អធ្យាស្រ័យ តើខ្ញុំអាចសុំគិតលុយបានទេ? តើទាំងអស់តម្លៃប៉ុន្មានដែរ?'
      },
      {
        speaker: 'Waiter',
        speakerKhmer: 'អ្នករត់តុ',
        text: 'That will be $15 in total. Cash or card?',
        khmerSound: 'ដាត វីល ប៊ី ហ្វីហ្វធីន ដុល្លារស៍ អ៊ីន ថូថល។ ខាស អរ ខាត?',
        meaningKhmer: 'សរុបទាំងអស់ ១៥ ដុល្លារ។ បង់លុយសុទ្ធ ឬតាមកាត?'
      }
    ],
    vocabulary: [
      { word: 'Menu', khmerSound: 'ម៉េនញូ', meaningKhmer: 'បញ្ជីមុខម្ហូប', example: 'Can I see the menu, please?' },
      { word: 'Order', khmerSound: 'អរដឺ', meaningKhmer: 'កុម្ម៉ង់ / បញ្ជាទិញ', example: 'We are ready to order.' },
      { word: 'Recommend', khmerSound: 'រ៉េឃូមែន', meaningKhmer: 'ណែនាំ', example: 'What dish do you recommend?' },
      { word: 'Bill / Check', khmerSound: 'ប៊ីល / ឆេក', meaningKhmer: 'វិក្កយបត្រគិតលុយ', example: 'Could we have the bill, please?' },
      { word: 'Tip', khmerSound: 'ធីប', meaningKhmer: 'ប្រាក់រង្វាន់លើកទឹកចិត្ត', example: 'Keep the change as a tip.' }
    ],
    samplePhrases: [
      {
        english: 'Can I have a table by the window?',
        khmerSound: 'ខេន អាយ ហាវ អឹ ថេបល បាយ ដឹ វីនដូ?',
        khmerMeaning: 'តើខ្ញុំអាចសុំតុមួយនៅក្បែរបង្អួចបានទេ?'
      },
      {
        english: 'Is this dish spicy?',
        khmerSound: 'អ៊ីស ឌីស ឌីស ស្ប៉ាយស៊ី?',
        khmerMeaning: 'តើម្ហូបនេះហឹរដែរឬទេ?'
      },
      {
        english: 'Everything was delicious, thank you!',
        khmerSound: 'អេវរីធីង វ៉ស ឌីលីស្សឹស ថែងឃ្យូ!',
        khmerMeaning: 'គ្រប់មុខទាំងអស់ពិតជាឆ្ងាញ់ណាស់ អរគុណ!'
      }
    ],
    quiz: {
      question: 'នៅពេលចង់សុំគិតលុយនៅភោជនីយដ្ឋាន តើគួរនិយាយឃ្លាមួយណា?',
      questionKhmer: 'Which phrase is used to ask for the bill at a restaurant?',
      options: [
        'Can I have the menu?',
        'Can I have the bill, please?',
        'Are you ready to order?',
        'What do you recommend?'
      ],
      correctIndex: 1,
      explanation: 'ឃ្លា "Can I have the bill, please?" (ឬ Can I have the check?) គឺជាឃ្លាស្តង់ដារសមរម្យបំផុតសម្រាប់សុំគិតលុយ។'
    }
  },

  // =========================================================================
  // LESSON 05: ពេលវេលា និងការណាត់ជួប (Telling Time & Dates - in/on/at)
  // =========================================================================
  {
    id: 5,
    unitNumber: 'មេរៀនទី ០៥',
    titleKhmer: 'ពេលវេលា និងការណាត់ជួប',
    titleEnglish: 'Telling Time & Dates',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនរបៀបសួរ និងប្រាប់ម៉ោង (What time is it?), ថ្ងៃនៃសប្តាហ៍ ខែទាំង ១២ និងការប្រើប្រាស់ធ្នាក់ពេលវេលា in, on, at យ៉ាងត្រឹមត្រូវ។',
    grammarRule: {
      formula: 'AT (Exact time) | ON (Days & Dates) | IN (Months, Years, Seasons, Parts of day)',
      explanation: 'ច្បាប់ត្រីកោណពេលវេលា៖ AT តូចចង្អៀតបំផុត (ម៉ោងពិតប្រាកដ) -> ON មធ្យម (ថ្ងៃ) -> IN ធំទូលាយបំផុត (ខែ ឆ្នាំ រដូវ)។',
      subRules: [
        {
          title: 'AT (ពេលវេលាជាក់លាក់):',
          detail: 'at 7:00 AM, at 8:30 PM, at noon (ថ្ងៃត្រង់), at midnight (កណ្តាលអធ្រាត្រ), at night (ពេលយប់)។'
        },
        {
          title: 'ON (ថ្ងៃ និងកាលបរិច្ឆេទ):',
          detail: 'on Monday, on Friday, on October 15th, on my birthday, on Christmas Day។'
        },
        {
          title: 'IN (ខែ ឆ្នាំ រដូវ និងពេលក្នុងថ្ងៃ):',
          detail: 'in October, in 2026, in the morning, in the afternoon, in the evening, in summer។'
        }
      ],
      examples: [
        {
          english: 'The meeting starts at 9:00 AM.',
          khmerSound: 'ដឹ មីតធីង ស្តាតស៍ អែត ណាញ អូក្លក់ អេអិម។',
          khmerMeaning: 'ការប្រជុំចាប់ផ្តើមនៅម៉ោង ៩:០០ ព្រឹក (ប្រើ at)។'
        },
        {
          english: 'We have an English exam on Friday.',
          khmerSound: 'វី ហាវ អេន អ៊ីងគ្លីស អ៊ិចសែម អន ហ្វ្រាយដេ។',
          khmerMeaning: 'ពួកយើងមានការប្រឡងភាសាអង់គ្លេសនៅថ្ងៃសុក្រ (ប្រើ on)។'
        },
        {
          english: 'He was born in October.',
          khmerSound: 'ហ៊ី វ៉ស បន អ៊ីន អុកថូប៊ើ។',
          khmerMeaning: 'គាត់បានកើតនៅក្នុងខែតុលា (ប្រើ in)។'
        }
      ]
    },
    tableData: {
      headers: ['ពេលវេលា / ឃ្លា', 'ការអានជាភាសាអង់គ្លេស', 'ការបញ្ចេញសំឡេងខ្មែរ', 'អត្ថន័យ'],
      rows: [
        ['7:00', 'Seven o\'clock', 'សេវិន អូក្លក់', 'ម៉ោង ៧:០០ គត់'],
        ['7:15', 'Quarter past seven (or Seven fifteen)', 'ខ្វរធើ ផាស្ត សេវិន', 'ម៉ោង ៧:១៥ នាទី'],
        ['7:30', 'Half past seven (or Seven thirty)', 'ហាភ ផាស្ត សេវិន', 'ម៉ោង ៧ កន្លះ'],
        ['7:45', 'Quarter to eight (or Seven forty-five)', 'ខ្វរធើ ធូ អេត', 'ម៉ោង ៨ ខ្វះ ១៥ នាទី']
      ]
    },
    vocabulary: [
      { word: 'Monday', khmerSound: 'ម៉ាន់ដេ', meaningKhmer: 'ថ្ងៃច័ន្ទ', example: 'I go to work on Monday.' },
      { word: 'Tuesday', khmerSound: 'ធ្យូសដេ', meaningKhmer: 'ថ្ងៃអង្គារ', example: 'We have a meeting on Tuesday.' },
      { word: 'Wednesday', khmerSound: 'វ៉ែនស៍ដេ', meaningKhmer: 'ថ្ងៃពុធ', example: 'Wednesday is the middle of the week.' },
      { word: 'Thursday', khmerSound: 'ធើសដេ', meaningKhmer: 'ថ្ងៃព្រហស្បតិ៍', example: 'She visits her grandmother on Thursday.' },
      { word: 'Friday', khmerSound: 'ហ្វ្រាយដេ', meaningKhmer: 'ថ្ងៃសុក្រ', example: 'TGIF! Thank God it\'s Friday!' },
      { word: 'Saturday', khmerSound: 'សាតឺដេ', meaningKhmer: 'ថ្ងៃសៅរ៍', example: 'I sleep late on Saturday.' },
      { word: 'Sunday', khmerSound: 'សាន់ដេ', meaningKhmer: 'ថ្ងៃអាទិត្យ', example: 'Sunday is a family day.' },
      { word: 'January', khmerSound: 'ជេនញូអេរី', meaningKhmer: 'ខែមករា', example: 'January is the first month.' },
      { word: 'July', khmerSound: 'ជូឡាយ', meaningKhmer: 'ខែកក្កដា', example: 'School vacations start in July.' },
      { word: 'December', khmerSound: 'ឌីសេមប៊ើ', meaningKhmer: 'ខែធ្នូ', example: 'New Year celebrations are in December.' }
    ],
    samplePhrases: [
      {
        english: 'What time is it now?',
        khmerSound: 'វ៉ាត់ ថាម អ៊ីស អ៊ីត ណៅ?',
        khmerMeaning: 'តើឥឡូវនេះម៉ោងប៉ុន្មានហើយ?'
      },
      {
        english: 'It is half past ten (10:30).',
        khmerSound: 'អ៊ីត អ៊ីស ហាភ ផាស្ត ថេន។',
        khmerMeaning: 'ឥឡូវម៉ោង ១០ កន្លះហើយ។'
      },
      {
        english: 'Let\'s meet at 3:00 PM on Sunday.',
        khmerSound: 'ឡេតស៍ មីត អែត ស្រ៊ី អូក្លក់ ភីអិម អន សាន់ដេ។',
        khmerMeaning: 'តោះជួបគ្នានៅម៉ោង ៣:០០ រសៀល នាថ្ងៃអាទិត្យ។'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសធ្នាក់ត្រឹមត្រូវ៖ "My birthday is ______ October 15th."',
      questionKhmer: 'Complete the sentence: "My birthday is ______ October 15th."',
      options: ['at', 'on', 'in', 'to'],
      correctIndex: 1,
      explanation: 'ដោយសារមានកាលបរិច្ឆេទថ្ងៃជាក់លាក់ (October 15th) យើងត្រូវប្រើ "on" (ប្រសិនបើមានតែខែ October មួយគត់ ទើបប្រើ in)។'
    }
  },

  // =========================================================================
  // LESSON 06: ទីកន្លែង និងការសួរផ្លូវ (Places in Town & Asking for Directions)
  // =========================================================================
  {
    id: 6,
    unitNumber: 'មេរៀនទី ០៦',
    titleKhmer: 'ទីកន្លែង និងការសួរផ្លូវ',
    titleEnglish: 'Places in Town & Asking for Directions',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនពាក្យទីកន្លែងសំខាន់ៗក្នុងទីក្រុង និងឃ្លាសន្ទនាសួរផ្លូវ និងប្រាប់ផ្លូវដូចជា Go straight, Turn left/right, next to, opposite។',
    dialogue: [
      {
        speaker: 'Tourist',
        speakerKhmer: 'ភ្ញៀវទេសចរ',
        text: 'Excuse me, could you please tell me where the nearest bank is?',
        khmerSound: 'អ៊ិចស៍ឃ្យូស មី, ឃូដ យូ ភ្លីស ថេល មី វែរ ដឹ នៀរ៉េស ប៊ែង អ៊ីស?',
        meaningKhmer: 'អធ្យាស្រ័យ តើអ្នកអាចប្រាប់ខ្ញុំបានទេថា ធនាគារដែលនៅជិតបំផុតនៅឯណា?'
      },
      {
        speaker: 'Local Resident',
        speakerKhmer: 'អ្នកស្រុក',
        text: 'Sure! Go straight ahead for two blocks, then turn left at the traffic light.',
        khmerSound: 'ស្សួរ! ហ្គោ ស្រ្តេត អឹហ៊ែដ ហ្វ័រ ធូ ប្លក់ស៍, ដេន ធើន ឡេហ្វ...',
        meaningKhmer: 'ពិតជាបាន! សូមដើរត្រង់ទៅមុខប្រហែល ២ ប្លុក បន្ទាប់មកបត់ឆ្វេងនៅស្តុបចរាចរណ៍។'
      },
      {
        speaker: 'Tourist',
        speakerKhmer: 'ភ្ញៀវទេសចរ',
        text: 'Turn left at the light. Is it far from here?',
        khmerSound: 'ធើន ឡេហ្វ អែត ដឹ ឡាយថ៍។ អ៊ីស អ៊ីត ហ្វា ហ្វ្រម ហៀរ?',
        meaningKhmer: 'បត់ឆ្វេងនៅស្តុប។ តើវាឆ្ងាយពីទីនេះដែរឬទេ?'
      },
      {
        speaker: 'Local Resident',
        speakerKhmer: 'អ្នកស្រុក',
        text: 'No, it\'s only a 5-minute walk. It is next to the pharmacy, right opposite the supermarket.',
        khmerSound: 'ណូ, អ៊ីតស៍ អូនលី អឹ ហ្វាយ-មីនីត វ៉ក។ អ៊ីត អ៊ីស ណិចស៍ ធូ...',
        meaningKhmer: 'ទេ ដើរតែ ៥ នាទីប៉ុណ្ណោះ។ វាស្ថិតនៅក្បែរឱសថស្ថាន ទល់មុខផ្សារទំនើបតែម្តង។'
      },
      {
        speaker: 'Tourist',
        speakerKhmer: 'ភ្ញៀវទេសចរ',
        text: 'Thank you very much for your help!',
        khmerSound: 'ថែងឃ្យូ វ៉េរី ម៉ាច ហ្វ័រ យួរ ហែលភ៍!',
        meaningKhmer: 'អរគុណច្រើនណាស់ចំពោះការជួយប្រាប់ផ្លូវរបស់អ្នក!'
      }
    ],
    vocabulary: [
      { word: 'Bank', khmerSound: 'ប៊ែង', meaningKhmer: 'ធនាគារ', example: 'I need to withdraw some cash at the bank.' },
      { word: 'Hospital', khmerSound: 'ហូសស្ពីថល', meaningKhmer: 'មន្ទីរពេទ្យ', example: 'The ambulance rushed to the hospital.' },
      { word: 'Supermarket', khmerSound: 'ស៊ូភើម៉ាឃីត', meaningKhmer: 'ផ្សារទំនើប', example: 'We buy fresh vegetables at the supermarket.' },
      { word: 'Pharmacy', khmerSound: 'ហ្វាម៉ាស៊ី', meaningKhmer: 'ឱសថស្ថាន / កន្លែងលក់ថ្នាំ', example: 'Buy headache pills at the pharmacy.' },
      { word: 'School', khmerSound: 'ស្គូល', meaningKhmer: 'សាលារៀន', example: 'The primary school is very close.' },
      { word: 'Restaurant', khmerSound: 'រ៉េសស្ទឺរ៉ង់', meaningKhmer: 'ភោជនីយដ្ឋាន', example: 'They had dinner at an Italian restaurant.' },
      { word: 'Hotel', khmerSound: 'ហូថែល', meaningKhmer: 'សណ្ឋាគារ', example: 'The tourists checked in at the hotel.' },
      { word: 'Airport', khmerSound: 'អ៊ែរផត', meaningKhmer: 'ព្រលានយន្តហោះ', example: 'My flight leaves from Phnom Penh Airport.' },
      { word: 'Bus station', khmerSound: 'បាស ស្តេស្សិន', meaningKhmer: 'ចំណតឡានក្រុង', example: 'Meet me at the central bus station.' },
      { word: 'Post office', khmerSound: 'ភូសថ៍ អហ្វីស', meaningKhmer: 'ប៉ុស្តិ៍ប្រៃសណីយ៍', example: 'Send the parcel via the post office.' }
    ],
    samplePhrases: [
      {
        english: 'Go straight ahead and don\'t turn.',
        khmerSound: 'ហ្គោ ស្រ្តេត អឹហ៊ែដ អ៊ែន ដោនថ៍ ធើន។',
        khmerMeaning: 'ដើរទៅមុខត្រង់ ហើយកុំបត់។'
      },
      {
        english: 'Turn right at the second corner.',
        khmerSound: 'ធើន រ៉ាយថ៍ អែត ដឹ សេខិន ខនណើ។',
        khmerMeaning: 'បត់ស្តាំនៅផ្លូវកែងទីពីរ។'
      },
      {
        english: 'The museum is on your left hand side.',
        khmerSound: 'ដឹ មញូសៀម អ៊ីស អន យួរ ឡេហ្វ ហែន សាយដ៍។',
        khmerMeaning: 'សារមន្ទីរស្ថិតនៅខាងឆ្វេងដៃរបស់អ្នក។'
      },
      {
        english: 'It is opposite the central market.',
        khmerSound: 'អ៊ីត អ៊ីស អបផូស៊ីត ដឹ សេនត្រល ម៉ាឃីត។',
        khmerMeaning: 'វាស្ថិតនៅទល់មុខផ្សារធំថ្មី។'
      }
    ],
    quiz: {
      question: 'តើឃ្លា "Turn left at the traffic light" មានន័យថាយ៉ាងដូចម្តេច?',
      questionKhmer: 'What does "Turn left at the traffic light" mean?',
      options: [
        'បត់ស្តាំនៅស្តុបចរាចរណ៍',
        'បត់ឆ្វេងនៅស្តុបចរាចរណ៍',
        'ដើរត្រង់កាត់ស្តុបចរាចរណ៍',
        'ឈប់នៅស្តុបចរាចរណ៍'
      ],
      correctIndex: 1,
      explanation: '"Turn left" មានន័យថា «បត់ឆ្វេង», "traffic light" គឺ «ភ្លើងស្តុបចរាចរណ៍»។'
    }
  },

  // =========================================================================
  // LESSON 07: ការទិញទំនិញ និងតម្លៃ (Shopping & Prices)
  // =========================================================================
  {
    id: 7,
    unitNumber: 'មេរៀនទី ០៧',
    titleKhmer: 'ការទិញទំនិញ និងតម្លៃ',
    titleEnglish: 'Shopping & Prices',
    duration: '២៥ នាទី',
    descriptionKhmer: 'រៀនរបៀបសួរតម្លៃទំនិញ (How much is this/that?), ទំហំ និងពណ៌, ការសុំបញ្ចុះតម្លៃ និងការទូទាត់ប្រាក់ជាលុយសុទ្ធ ឬកាត។',
    dialogue: [
      {
        speaker: 'Customer',
        speakerKhmer: 'អ្នកទិញ',
        text: 'Excuse me, how much is this blue jacket?',
        khmerSound: 'អ៊ិចស៍ឃ្យូស មី, ហៅ ម៉ាច អ៊ីស ឌីស ប៊្លូ ជែកឃីត?',
        meaningKhmer: 'អធ្យាស្រ័យ តើអាវរងាពណ៌ខៀវនេះតម្លៃប៉ុន្មានដែរ?'
      },
      {
        speaker: 'Shop Assistant',
        speakerKhmer: 'អ្នកលក់',
        text: 'It is $35. It is on a 10% discount today.',
        khmerSound: 'អ៊ីត អ៊ីស សឺធី-ហ្វាយ ដុល្លារស៍។ អ៊ីត អ៊ីស អន អឹ ថេន ភើសេន...',
        meaningKhmer: 'តម្លៃ ៣៥ ដុល្លារ។ ថ្ងៃនេះមានការបញ្ចុះតម្លៃ ១០% ផងដែរ។'
      },
      {
        speaker: 'Customer',
        speakerKhmer: 'អ្នកទិញ',
        text: 'Can I try it on? Do you have size Medium (M)?',
        khmerSound: 'ខេន អាយ ស្រ្តាយ អ៊ីត អន? ឌូ យូ ហាវ សាយស៍ មីឌៀម?',
        meaningKhmer: 'តើខ្ញុំអាចសាកល្បងពាក់វាបានទេ? តើអ្នកមានទំហំ M ទេ?'
      },
      {
        speaker: 'Shop Assistant',
        speakerKhmer: 'អ្នកលក់',
        text: 'Yes, here is a Medium. The fitting room is right over there.',
        khmerSound: 'យេស, ហៀរ អ៊ីស អឹ មីឌៀម។ ដឹ ហ្វីតធីង រូម អ៊ីស រ៉ាយថ៍...',
        meaningKhmer: 'បាទ/ចាស នេះជាទំហំ M។ បន្ទប់សាកសំលៀកបំពាក់នៅខាងនោះ។'
      },
      {
        speaker: 'Customer',
        speakerKhmer: 'អ្នកទិញ',
        text: 'It fits me very well. I will take it! Can I pay by card?',
        khmerSound: 'អ៊ីត ហ្វីតស៍ មី វ៉េរី វ៉ែល។ អាយ វីល ថេក អ៊ីត! ខេន អាយ ផេ បាយ ខាត?',
        meaningKhmer: 'វាល្មមនឹងខ្លួនខ្ញុំណាស់។ ខ្ញុំសម្រេចចិត្តយកមួយនេះហើយ! តើខ្ញុំអាចទូទាត់តាមកាតបានទេ?'
      },
      {
        speaker: 'Shop Assistant',
        speakerKhmer: 'អ្នកលក់',
        text: 'Yes, we accept both credit cards and cash. Here is your receipt!',
        khmerSound: 'យេស, វី អ៊ិចសេព បូត ក្រេឌីត ខាតស៍ អ៊ែន ខាស...',
        meaningKhmer: 'ចាស ពួកយើងទទួលទាំងកាត និងលុយសុទ្ធ។ នេះជាវិក្កយបត្ររបស់អ្នក!'
      }
    ],
    vocabulary: [
      { word: 'How much', khmerSound: 'ហៅ ម៉ាច', meaningKhmer: 'តម្លៃប៉ុន្មាន', example: 'How much does this bag cost?' },
      { word: 'Expensive', khmerSound: 'អ៊ិចស្ពែនស៊ីវ', meaningKhmer: 'ថ្លៃ / តម្លៃខ្ពស់', example: 'This watch is too expensive for me.' },
      { word: 'Cheap', khmerSound: 'ឈីប', meaningKhmer: 'ថោក / តម្លៃធូរថ្លៃ', example: 'Street food is usually very cheap.' },
      { word: 'Discount', khmerSound: 'ឌីសខោន', meaningKhmer: 'ការបញ្ចុះតម្លៃ', example: 'Can you give me a little discount?' },
      { word: 'Try on', khmerSound: 'ស្រ្តាយ អន', meaningKhmer: 'សាកល្បងពាក់', example: 'May I try on these shoes?' },
      { word: 'Fitting room', khmerSound: 'ហ្វីតធីង រូម', meaningKhmer: 'បន្ទប់សាកសំលៀកបំពាក់', example: 'Where is the fitting room?' },
      { word: 'Size', khmerSound: 'សាយស៍', meaningKhmer: 'ទំហំ (S, M, L, XL)', example: 'What size do you wear?' },
      { word: 'Cash', khmerSound: 'ខាស', meaningKhmer: 'លុយសុទ្ធ', example: 'I will pay in cash.' },
      { word: 'Credit card', khmerSound: 'ក្រេឌីត ខាត', meaningKhmer: 'កាតឥណទាន', example: 'Do you accept Visa cards?' },
      { word: 'Receipt', khmerSound: 'រ៉េស៊ីត', meaningKhmer: 'បង្កាន់ដៃ / វិក្កយបត្រ', example: 'Please keep your purchase receipt.' }
    ],
    samplePhrases: [
      {
        english: 'How much are these pairs of shoes?',
        khmerSound: 'ហៅ ម៉ាច អា ឌីស ភែរ អហ្វ ស្ស៊ូស?',
        khmerMeaning: 'តើស្បែកជើងទាំងនេះតម្លៃប៉ុន្មាន?'
      },
      {
        english: 'Do you have this shirt in black color?',
        khmerSound: 'ឌូ យូ ហាវ ឌីស ស្ស៊ើត អ៊ីន ប្លែក ខាល័រ?',
        khmerMeaning: 'តើអ្នកមានអាវនេះជាពណ៌ខ្មៅដែរទេ?'
      },
      {
        english: 'It\'s a bit too expensive. Can you make it $20?',
        khmerSound: 'អ៊ីតស៍ អឹ ប៊ីត ធូ អ៊ិចស្ពែនស៊ីវ។ ខេន យូ ម៉េក អ៊ីត ថ្វេនធី ដុល្លារស៍?',
        khmerMeaning: 'វាថ្លៃបន្តិចហើយ។ តើអ្នកអាចលក់ ២០ ដុល្លារបានទេ?'
      }
    ],
    quiz: {
      question: 'នៅពេលចង់សួរបញ្ចុះតម្លៃទំនិញ តើឃ្លាណាដែលសមរម្យ?',
      questionKhmer: 'Which phrase is used to ask for a discount?',
      options: [
        'How much is it?',
        'Can I get a discount, please?',
        'Where is the cashier?',
        'I will take it.'
      ],
      correctIndex: 1,
      explanation: '"Can I get a discount, please?" មានន័យថា «តើខ្ញុំអាចសុំការបញ្ចុះតម្លៃបន្តិចបានទេ?»'
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
    descriptionKhmer: 'រៀនរបៀបសួរ និងពិពណ៌នាអំពីអាកាសធាតុ (What\'s the weather like today?), ពាក្យអាកាសធាតុទូទៅ និងរដូវកាលទាំង ៤ រួមទាំងរដូវប្រាំង/វស្សានៅកម្ពុជា។',
    grammarRule: {
      formula: 'Question: What\'s the weather like today? | Answer: It is + Adjective (It\'s sunny / rainy / cold)',
      explanation: 'ក្នុងភាសាអង់គ្លេស យើងប្រើសព្វនាម "It is" ឬ "It\'s" សម្រាប់ពិពណ៌នាអំពីអាកាសធាតុ និងសីតុណ្ហភាព។',
      examples: [
        {
          english: 'What\'s the weather like in Phnom Penh today?',
          khmerSound: 'វ៉ាត់ស៍ ដឹ វ៉ែដឌើ ឡាយក៍ អ៊ីន ភ្នំពេញ ធូដេ?',
          khmerMeaning: 'តើអាកាសធាតុនៅភ្នំពេញថ្ងៃនេះយ៉ាងម៉េចដែរ?'
        },
        {
          english: 'It\'s very hot and sunny outside.',
          khmerSound: 'អ៊ីតស៍ វ៉េរី ហត អ៊ែន សាន់នី អៅសាយដ៍។',
          khmerMeaning: 'នៅខាងក្រៅក្តៅ និងមានពន្លឺថ្ងៃខ្លាំងណាស់។'
        },
        {
          english: 'It looks like it\'s going to rain.',
          khmerSound: 'អ៊ីត លុកស៍ ឡាយក៍ អ៊ីតស៍ ហ្គោអ៊ីង ធូ រ៉េន។',
          khmerMeaning: 'មើលទៅដូចជាហៀបនឹងធ្លាក់ភ្លៀងហើយ។'
        }
      ]
    },
    vocabulary: [
      { word: 'Sunny', khmerSound: 'សាន់នី', meaningKhmer: 'មានពន្លឺថ្ងៃល្អ', example: 'It is a warm, sunny morning.' },
      { word: 'Rainy', khmerSound: 'រ៉េននី', meaningKhmer: 'មានភ្លៀងធ្លាក់', example: 'Don\'t forget your umbrella on a rainy day.' },
      { word: 'Cloudy', khmerSound: 'ខ្លៅឌី', meaningKhmer: 'មានពពកច្រើនស្រទុំ', example: 'The sky is completely cloudy today.' },
      { word: 'Windy', khmerSound: 'វីនឌី', meaningKhmer: 'មានខ្យល់បក់ខ្លាំង', example: 'It is too windy to ride a bicycle.' },
      { word: 'Hot', khmerSound: 'ហត', meaningKhmer: 'ក្តៅ', example: 'April is usually the hottest month in Cambodia.' },
      { word: 'Cold', khmerSound: 'ខូល', meaningKhmer: 'ត្រជាក់', example: 'Drink hot ginger tea when you feel cold.' },
      { word: 'Stormy', khmerSound: 'ស្តមមី', meaningKhmer: 'មានព្យុះផ្គររន្ទះ', example: 'Stay indoors during stormy weather.' },
      { word: 'Spring', khmerSound: 'ស្ព្រីង', meaningKhmer: 'រដូវផ្ការីក', example: 'Flowers blossom during spring.' },
      { word: 'Summer', khmerSound: 'សាំមមើ', meaningKhmer: 'រដូវក្តៅ', example: 'People go to the beach in summer.' },
      { word: 'Autumn / Fall', khmerSound: 'អូថាំ / ហ្វល', meaningKhmer: 'រដូវស្លឹកឈើជ្រុះ', example: 'Leaves turn golden red in autumn.' },
      { word: 'Winter', khmerSound: 'វីនធើ', meaningKhmer: 'រដូវរងា / ធ្លាក់ព្រិល', example: 'Snow falls in winter in many countries.' },
      { word: 'Rainy season', khmerSound: 'រ៉េននី ស៊ីហ្សិន', meaningKhmer: 'រដូវវស្សា (នៅកម្ពុជា)', example: 'The rainy season lasts from May to October.' },
      { word: 'Dry season', khmerSound: 'ដ្រាយ ស៊ីហ្សិន', meaningKhmer: 'រដូវប្រាំង (នៅកម្ពុជា)', example: 'The dry season is from November to April.' }
    ],
    samplePhrases: [
      {
        english: 'What is your favorite season of the year?',
        khmerSound: 'វ៉ាត់ អ៊ីស យួរ ហ្វេវើរីត ស៊ីហ្សិន អហ្វ ដឹ យា?',
        khmerMeaning: 'តើអ្នកចូលចិត្តរដូវកាលណាជាងគេក្នុងមួយឆ្នាំ?'
      },
      {
        english: 'Take an umbrella, it is raining heavily.',
        khmerSound: 'ថេក អេន អាមប្រេឡា, អ៊ីត អ៊ីស រ៉េននីង ហេវីលី។',
        khmerMeaning: 'យកឆត្រទៅផង ព្រោះកំពុងតែភ្លៀងខ្លាំងណាស់។'
      }
    ],
    quiz: {
      question: 'តើឃ្លា "What\'s the weather like today?" សួរអំពីអ្វី?',
      questionKhmer: 'What does "What\'s the weather like today?" ask about?',
      options: [
        'សួរអំពីម៉ោងពេល',
        'សួរអំពីអាកាសធាតុថ្ងៃនេះ',
        'សួរអំពីសុខភាព',
        'សួរអំពីតម្លៃទំនិញ'
      ],
      correctIndex: 1,
      explanation: '"What\'s the weather like today?" គឺជាសំណួរស្តង់ដារសម្រាប់សួរថា «តើអាកាសធាតុថ្ងៃនេះយ៉ាងដូចម្តេចដែរ?»។'
    }
  },

  // =========================================================================
  // LESSON 09: សុខភាព និងរោគសញ្ញាទូទៅ (Health & Common Illnesses)
  // =========================================================================
  {
    id: 9,
    unitNumber: 'មេរៀនទី ០៩',
    titleKhmer: 'សុខភាព និងរោគសញ្ញាទូទៅ',
    titleEnglish: 'Health & Common Illnesses',
    duration: '៣០ នាទី',
    descriptionKhmer: 'រៀនប្រាប់ពីរោគសញ្ញាសុខភាពទូទៅដូចជា ឈឺក្បាល ក្តៅខ្លួន ផ្តាសាយ និងការសន្ទនាពិគ្រោះជាមួយវេជ្ជបណ្ឌិត ឬឱសថការី។',
    dialogue: [
      {
        speaker: 'Doctor',
        speakerKhmer: 'វេជ្ជបណ្ឌិត',
        text: 'Good morning, please sit down. What seems to be the problem?',
        khmerSound: 'ហ្គូដ ម៉នីង, ភ្លីស ស៊ីត ដោន។ វ៉ាត់ ស៊ីមស៍ ធូ ប៊ី ដឹ ប្រប្លិម?',
        meaningKhmer: 'អរុណសួស្តី សូមអញ្ជើញអង្គុយ។ តើអ្នកមានបញ្ហាសុខភាពអ្វីដែរ?'
      },
      {
        speaker: 'Patient',
        speakerKhmer: 'អ្នកជំងឺ',
        text: 'I have a terrible headache, a sore throat, and a high fever.',
        khmerSound: 'អាយ ហាវ អឹ ថេរីបល ហេដដេក, អឹ ស័រ ស្រូត, អ៊ែន អឹ ហាយ ហ្វីវវើ។',
        meaningKhmer: 'ខ្ញុំឈឺក្បាលខ្លាំងណាស់ ឈឺបំពង់ក ហើយថែមទាំងក្តៅខ្លួនខ្លាំងទៀតផង។'
      },
      {
        speaker: 'Doctor',
        speakerKhmer: 'វេជ្ជបណ្ឌិត',
        text: 'How long have you felt like this?',
        khmerSound: 'ហៅ ឡង ហាវ យូ ហ្វេលថ៍ ឡាយក៍ ឌីស?',
        meaningKhmer: 'តើអ្នកមានអាការៈបែបនេះតាំងពីពេលណាមក?'
      },
      {
        speaker: 'Patient',
        speakerKhmer: 'អ្នកជំងឺ',
        text: 'Since yesterday evening. I also have a runny nose and cough.',
        khmerSound: 'ស៊ីនស៍ យេសធើដេ អ៊ីវនីង។ អាយ អលសូ ហាវ អឹ រ៉ាននី ណូស...',
        meaningKhmer: 'តាំងពីល្ងាចម្សិលមិញ។ ខ្ញុំក៏ហៀរសំបោរ និងក្អកផងដែរ។'
      },
      {
        speaker: 'Doctor',
        speakerKhmer: 'វេជ្ជបណ្ឌិត',
        text: 'It sounds like a common flu. Take this medicine twice a day after meals, drink plenty of warm water, and rest for two days.',
        khmerSound: 'អ៊ីត សោនស៍ ឡាយក៍ អឹ ខមម៉ិន ភ្លូ។ ថេក ឌីស មេឌីស៊ីន...',
        meaningKhmer: 'ស្តាប់ទៅហាក់ដូចជាជំងឺផ្តាសាយធម្មតា។ សូមលេបថ្នាំនេះ ២ ដងក្នុងមួយថ្ងៃក្រោយបាយ ផឹកទឹកក្តៅឧណ្ហៗឱ្យបានច្រើន និងសម្រាក ២ ថ្ងៃ។'
      },
      {
        speaker: 'Patient',
        speakerKhmer: 'អ្នកជំងឺ',
        text: 'Thank you very much, Doctor!',
        khmerSound: 'ថែងឃ្យូ វ៉េរី ម៉ាច, ដុកធើ!',
        meaningKhmer: 'អរគុណច្រើនណាស់លោកវេជ្ជបណ្ឌិត!'
      }
    ],
    vocabulary: [
      { word: 'Headache', khmerSound: 'ហេដដេក', meaningKhmer: 'ឈឺក្បាល', example: 'I have a bad headache today.' },
      { word: 'Fever', khmerSound: 'ហ្វីវវើ', meaningKhmer: 'ក្តៅខ្លួន / គ្រុនក្តៅ', example: 'Check your temperature if you have a fever.' },
      { word: 'Stomachache', khmerSound: 'ស្តាម៉ាក់ខេក', meaningKhmer: 'ឈឺពោះ', example: 'Eating dirty food causes stomachache.' },
      { word: 'Sore throat', khmerSound: 'ស័រ ស្រូត', meaningKhmer: 'ឈឺបំពង់ក', example: 'Warm honey tea is good for a sore throat.' },
      { word: 'Cough', khmerSound: 'ខហ្វ', meaningKhmer: 'ក្អក', example: 'He has a persistent dry cough.' },
      { word: 'Cold / Flu', khmerSound: 'ខូល / ភ្លូ', meaningKhmer: 'ផ្តាសាយ', example: 'I caught a cold because of the rain.' },
      { word: 'Dizzy', khmerSound: 'ឌីសហ្ស៊ី', meaningKhmer: 'វិលមុខ', example: 'I feel dizzy under the hot sun.' },
      { word: 'Medicine', khmerSound: 'មេឌីស៊ីន', meaningKhmer: 'ថ្នាំពេទ្យ', example: 'Take this medicine three times a day.' },
      { word: 'Doctor', khmerSound: 'ដុកធើ', meaningKhmer: 'វេជ្ជបណ្ឌិត / គ្រូពេទ្យ', example: 'You should see a doctor soon.' },
      { word: 'Rest', khmerSound: 'រ៉េស្ត', meaningKhmer: 'សម្រាក', example: 'Get plenty of rest to recover quickly.' }
    ],
    samplePhrases: [
      {
        english: 'I feel sick today, I cannot go to work.',
        khmerSound: 'អាយ ហ្វីល ស៊ីក ធូដេ, អាយ ខេនណត ហ្គោ ធូ វើក។',
        khmerMeaning: 'ខ្ញុំមានអារម្មណ៍ថាមិនស្រួលខ្លួនថ្ងៃនេះ ខ្ញុំមិនអាចទៅធ្វើការបានទេ។'
      },
      {
        english: 'Where does it hurt?',
        khmerSound: 'វែរ ដាស អ៊ីត ហើត?',
        khmerMeaning: 'តើអ្នកឈឺនៅត្រង់ណាដែរ?'
      },
      {
        english: 'Get well soon!',
        khmerSound: 'ហ្គេត វ៉ែល ស៊ូន!',
        khmerMeaning: 'សូមឆាប់ជាសះស្បើយណា!'
      }
    ],
    quiz: {
      question: 'តើឃ្លា "I have a headache" មានន័យថាយ៉ាងដូចម្តេច?',
      questionKhmer: 'What does "I have a headache" mean?',
      options: [
        'ខ្ញុំឈឺពោះ',
        'ខ្ញុំឈឺក្បាល',
        'ខ្ញុំឈឺធ្មេញ',
        'ខ្ញុំក្តៅខ្លួន'
      ],
      correctIndex: 1,
      explanation: '"Headache" ផ្សំពី "Head" (ក្បាល) + "ache" (ការឈឺចាប់) = «ឈឺក្បាល»។'
    }
  },

  // =========================================================================
  // LESSON 10: ការនិយាយពីអតីតកាលធម្មតា (Past Simple Tense - Irregular Verbs)
  // =========================================================================
  {
    id: 10,
    unitNumber: 'មេរៀនទី ១០',
    titleKhmer: 'ការនិយាយពីអតីតកាលធម្មតា',
    titleEnglish: 'Past Simple Tense',
    duration: '៣៥ នាទី',
    descriptionKhmer: 'យល់ដឹងពីរូបមន្តអតីតកាល S + V2/ed + O, បញ្ជីកិរិយាស័ព្ទមិនប្រក្រតី (Irregular Verbs) ទូទៅ និងឧទាហរណ៍ប្រយោគស្រប បដិសេធ និងសំណួរ (Did you...?) យ៉ាងតិច ១០ ប្រយោគ។',
    grammarRule: {
      formula: 'Affirmative: S + V2/ed + O | Negative: S + did not (didn\'t) + V1 | Question: Did + S + V1 + O?',
      explanation: 'ប្រើសម្រាប់ពិពណ៌នាអំពីសកម្មភាពដែលបានកើតឡើង និងបានបញ្ចប់ទាំងស្រុងនៅក្នុងអតីតកាល ដោយមានពាក្យសម្គាល់ដូចជា yesterday, last night, last week, ago, in 2024។',
      subRules: [
        {
          title: 'កិរិយាស័ព្ទប្រក្រតី (Regular Verbs - ថែម ed):',
          detail: 'watch -> watched, clean -> cleaned, play -> played, visit -> visited, cook -> cooked។'
        },
        {
          title: 'កិរិយាស័ព្ទមិនប្រក្រតី (Irregular Verbs - ប្តូរទម្រង់):',
          detail: 'go -> went, eat -> ate, drink -> drank, see -> saw, buy -> bought, have -> had, do -> did, make -> made, sleep -> slept។'
        },
        {
          title: 'ទម្រង់បដិសេធ និងសំណួរ (Did / Didn\'t):',
          detail: 'នៅពេលប្រើ "didn\'t" ឬ "Did ...?" កិរិយាស័ព្ទត្រូវវិលត្រឡប់ទៅរកទម្រង់ដើម (V1) វិញជានិច្ច! ឧទាហរណ៍៖ I didn\'t go (មិនមែន I didn\'t went ទេ)។'
        }
      ],
      examples: [
        {
          english: 'I watched a very interesting movie yesterday.',
          khmerSound: 'អាយ វ៉ចថ៍ អឹ វ៉េរី អ៊ីនធ្រេសធីង មូហ៊្វី យេសធើដេ។',
          khmerMeaning: '(+) ខ្ញុំបានមើលខ្សែភាពយន្តដ៏គួរឱ្យចាប់អារម្មណ៍មួយកាលពីម្សិលមិញ (Regular: watched)។',
          type: 'affirmative'
        },
        {
          english: 'We went to Siem Reap last weekend.',
          khmerSound: 'វី វ៉ែនថ៍ ធូ សៀមរាប ឡាស វីកអ៊ិន។',
          khmerMeaning: '(+) ពួកយើងបានទៅខេត្តសៀមរាបកាលពីចុងសប្តាហ៍មុន (Irregular: go -> went)។',
          type: 'affirmative'
        },
        {
          english: 'She ate delicious noodle soup for lunch.',
          khmerSound: 'ស្ស៊ី អេត ឌីលីស្សឹស នូឌល ស៊ុប ហ្វ័រ ឡាន់ឆ៍។',
          khmerMeaning: '(+) នាងបានញ៉ាំគុយទាវដ៏ឆ្ងាញ់សម្រាប់អាហារថ្ងៃត្រង់ (eat -> ate)។',
          type: 'affirmative'
        },
        {
          english: 'He bought a new laptop two days ago.',
          khmerSound: 'ហ៊ី បត អឹ ញូ ឡែបថប ធូ ដេស អឹហ្គោ។',
          khmerMeaning: '(+) គាត់បានទិញកុំព្យូទ័រយួរដៃថ្មីមួយកាលពីពីរថ្ងៃមុន (buy -> bought)។',
          type: 'affirmative'
        },
        {
          english: 'They had dinner together last night.',
          khmerSound: 'ដេ ហែដ ឌីននើ ធូហ្គេដឌើ ឡាស ណាយថ៍។',
          khmerMeaning: '(+) ពួកគេបានញ៉ាំអាហារពេលល្ងាចជាមួយគ្នាកាលពីយប់មិញ (have -> had)។',
          type: 'affirmative'
        },
        {
          english: 'I did not see him at the party.',
          khmerSound: 'អាយ ឌីដ ណត ស៊ី ហ៊ីម អែត ដឹ ផាធី។',
          khmerMeaning: '(-) ខ្ញុំមិនបានឃើញគាត់នៅឯពិធីជប់លៀងនោះទេ (didn\'t see)។',
          type: 'negative'
        },
        {
          english: 'She didn\'t go to work yesterday because she was sick.',
          khmerSound: 'ស្ស៊ី ឌីដិនថ៍ ហ្គោ ធូ វើក យេសធើដេ...',
          khmerMeaning: '(-) នាងមិនបានទៅធ្វើការទេកាលពីម្សិលមិញ ដោយសារនាងឈឺ (didn\'t go)។',
          type: 'negative'
        },
        {
          english: 'We didn\'t buy the car because it was too expensive.',
          khmerSound: 'វី ឌីដិនថ៍ បាយ ដឹ ខា ប៊ីខស អ៊ីត វ៉ស...',
          khmerMeaning: '(-) ពួកយើងមិនបានទិញឡាននោះទេ ព្រោះវាថ្លៃពេក។',
          type: 'negative'
        },
        {
          english: 'Did you sleep well last night?',
          khmerSound: 'ឌីដ យូ ស្លីប វ៉ែល ឡាស ណាយថ៍?',
          khmerMeaning: '(?) តើអ្នកគេងលក់ស្រួលដែរទេកាលពីយប់មិញ?',
          type: 'question'
        },
        {
          english: 'Did she call you this morning?',
          khmerSound: 'ឌីដ ស្ស៊ី ខល យូ ឌីស ម៉នីង?',
          khmerMeaning: '(?) តើនាងបានទូរស័ព្ទមកអ្នកទេនៅព្រឹកមិញនេះ?',
          type: 'question'
        },
        {
          english: 'What time did you wake up today?',
          khmerSound: 'វ៉ាត់ ថាម ឌីដ យូ វ៉េក អាប់ ធូដេ?',
          khmerMeaning: '(?) តើអ្នកបានភ្ញាក់ពីគេងនៅម៉ោងប៉ុន្មាននៅថ្ងៃនេះ?',
          type: 'question'
        },
        {
          english: 'Where did they travel last year?',
          khmerSound: 'វែរ ឌីដ ដេ ស្រាវវើល ឡាស យា?',
          khmerMeaning: '(?) តើពួកគេបានធ្វើដំណើរកម្សាន្តទៅណាខ្លះកាលពីឆ្នាំមុន?',
          type: 'question'
        }
      ]
    },
    tableData: {
      headers: ['កិរិយាស័ព្ទដើម (V1)', 'អតីតកាល (V2)', 'ការបញ្ចេញសំឡេង (V2)', 'អត្ថន័យ'],
      rows: [
        ['Go', 'Went', 'វ៉ែនថ៍', 'បានទៅ'],
        ['Eat', 'Ate', 'អេត', 'បានញ៉ាំ'],
        ['Drink', 'Drank', 'ដ្រែងខ៍', 'បានផឹក'],
        ['See', 'Saw', 'សរ', 'បានឃើញ'],
        ['Buy', 'Bought', 'បត', 'បានទិញ'],
        ['Have', 'Had', 'ហែដ', 'មាន / ធ្លាប់មាន'],
        ['Do', 'Did', 'ឌីដ', 'បានធ្វើ'],
        ['Make', 'Made', 'មេដ', 'បានបង្កើត / ធ្វើ'],
        ['Come', 'Came', 'ឃេម', 'បានមក'],
        ['Sleep', 'Slept', 'ស្លេបថ៍', 'បានគេង']
      ]
    },
    vocabulary: [
      { word: 'Yesterday', khmerSound: 'យេសធើដេ', meaningKhmer: 'ម្សិលមិញ', example: 'I stayed home yesterday.' },
      { word: 'Last night', khmerSound: 'ឡាស ណាយថ៍', meaningKhmer: 'យប់មិញ', example: 'We ate dinner together last night.' },
      { word: 'Last week', khmerSound: 'ឡាស វីក', meaningKhmer: 'សប្តាហ៍មុន', example: 'She visited her parents last week.' },
      { word: 'Ago', khmerSound: 'អឹហ្គោ', meaningKhmer: '...មុន (កន្លងទៅ)', example: 'They arrived two hours ago.' },
      { word: 'In the past', khmerSound: 'អ៊ីន ដឹ ផាស្ត', meaningKhmer: 'កាលពីអតីតកាល', example: 'Life was different in the past.' }
    ],
    samplePhrases: [
      {
        english: 'Yes, I did. / No, I didn\'t.',
        khmerSound: 'យេស, អាយ ឌីដ។ / ណូ, អាយ ឌីដិនថ៍។',
        khmerMeaning: 'បាទ/ចាស ខ្ញុំបានធ្វើ។ / ទេ ខ្ញុំមិនបានធ្វើទេ។ (ចម្លើយខ្លី)'
      }
    ],
    quiz: {
      question: 'ជ្រើសរើសប្រយោគបដិសេធត្រឹមត្រូវក្នុង Past Simple៖',
      questionKhmer: 'Choose the correct negative sentence in Past Simple:',
      options: [
        'She didn\'t went to school yesterday.',
        'She didn\'t go to school yesterday.',
        'She not go to school yesterday.',
        'She didn\'t goes to school yesterday.'
      ],
      correctIndex: 1,
      explanation: 'នៅពេលប្រើ "didn\'t" កិរិយាស័ព្ទត្រូវតែជាទម្រង់ដើម (V1 = go) មិនមែន went ឬ goes ឡើយ។ ដូច្នេះ "She didn\'t go to school yesterday" គឺត្រឹមត្រូវ។'
    }
  }
];
