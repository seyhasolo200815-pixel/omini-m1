export interface AlphabetLetter {
  letter: string;
  khmerSound: string;
  word: string;
  khmerWord: string;
  icon?: string;
}

export interface AlphabetGroup {
  groupName: string;
  letters: AlphabetLetter[];
}

export interface LevelZeroLesson {
  id: number;
  unitNumber: string;
  titleKhmer: string;
  titleEnglish: string;
  duration: string;
  descriptionKhmer: string;
  alphabetGroups?: AlphabetGroup[];
  vocabulary: {
    word: string;
    khmerSound: string;
    meaningKhmer: string;
    example: string;
  }[];
  grammarOrKeyRule: string;
  samplePhrases: {
    english: string;
    khmerSound: string;
    khmerMeaning: string;
  }[];
  quiz: {
    question: string;
    questionKhmer: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const LEVEL_ZERO_LESSONS: LevelZeroLesson[] = [
  {
    id: 1,
    unitNumber: 'មេរៀនទី ០១',
    titleKhmer: 'តួអក្សរ និងសំឡេង',
    titleEnglish: 'Alphabet & Phonics',
    duration: '២០ នាទី',
    descriptionKhmer: 'រៀនស្គាល់តួអក្សរអង់គ្លេសទាំង ២៦ តួ (A ដល់ Z) របៀបបញ្ចេញសំឡេងតាមសូរសព្ទ (Phonics) និងពាក្យគន្លឹះតំណាងនីមួយៗ។',
    grammarOrKeyRule: 'តួអក្សរអង់គ្លេសមាន ២៦ តួ ចែកជា ស្រៈ (Vowels: A, E, I, O, U) និង ព្យញ្ជនៈ (Consonants ២១ តួ)។',
    alphabetGroups: [
      {
        groupName: 'A–E',
        letters: [
          { letter: 'A', khmerSound: 'អេ', word: 'Apple', khmerWord: 'ផ្លែប៉ោម' },
          { letter: 'B', khmerSound: 'ប៊ី', word: 'Book', khmerWord: 'សៀវភៅ' },
          { letter: 'C', khmerSound: 'ស៊ី', word: 'Cat', khmerWord: 'ឆ្មា' },
          { letter: 'D', khmerSound: 'ឌី', word: 'Dog', khmerWord: 'ឆ្កែ' },
          { letter: 'E', khmerSound: 'អ៊ី', word: 'Egg', khmerWord: 'ស៊ុត / ពងមាន់' },
        ],
      },
      {
        groupName: 'F–J',
        letters: [
          { letter: 'F', khmerSound: 'អែហ្វ', word: 'Fish', khmerWord: 'ត្រី' },
          { letter: 'G', khmerSound: 'ជី', word: 'Go', khmerWord: 'ទៅ' },
          { letter: 'H', khmerSound: 'អេក', word: 'Hat', khmerWord: 'មួក' },
          { letter: 'I', khmerSound: 'អាយ', word: 'Ice', khmerWord: 'ទឹកកក' },
          { letter: 'J', khmerSound: 'ជេ', word: 'Jam', khmerWord: 'ដំណាប់ផ្លែឈើ' },
        ],
      },
      {
        groupName: 'K–O',
        letters: [
          { letter: 'K', khmerSound: 'ខេ', word: 'King', khmerWord: 'ស្តេច / ព្រះមហាក្សត្រ' },
          { letter: 'L', khmerSound: 'អែល', word: 'Lion', khmerWord: 'តោ' },
          { letter: 'M', khmerSound: 'អិម', word: 'Man', khmerWord: 'បុរស / មនុស្សប្រុស' },
          { letter: 'N', khmerSound: 'អិន', word: 'No', khmerWord: 'ទេ / មិន' },
          { letter: 'O', khmerSound: 'អូ', word: 'One', khmerWord: 'មួយ (លេខ ១)' },
        ],
      },
      {
        groupName: 'P–T',
        letters: [
          { letter: 'P', khmerSound: 'ភី', word: 'Pen', khmerWord: 'ប៊ិច' },
          { letter: 'Q', khmerSound: 'ឃ្យូ', word: 'Queen', khmerWord: 'ម្ចាស់ក្សត្រី' },
          { letter: 'R', khmerSound: 'អា', word: 'Red', khmerWord: 'ពណ៌ក្រហម' },
          { letter: 'S', khmerSound: 'អេស', word: 'Sun', khmerWord: 'ព្រះអាទិត្យ' },
          { letter: 'T', khmerSound: 'ធី', word: 'Tea', khmerWord: 'តែ / ទឹកតែ' },
        ],
      },
      {
        groupName: 'U–Z',
        letters: [
          { letter: 'U', khmerSound: 'យូ', word: 'Up', khmerWord: 'ឡើងលើ' },
          { letter: 'V', khmerSound: 'វី', word: 'Van', khmerWord: 'រថយន្តវ៉ែន' },
          { letter: 'W', khmerSound: 'ដាប់បែលយូ', word: 'Water', khmerWord: 'ទឹក' },
          { letter: 'X', khmerSound: 'អ៊ិច', word: 'Box', khmerWord: 'ប្រអប់ (សំឡេង x នៅចុង)' },
          { letter: 'Y', khmerSound: 'វ៉ាយ', word: 'Yes', khmerWord: 'បាទ / ចាស' },
          { letter: 'Z', khmerSound: 'ហ្សិត', word: 'Zoo', khmerWord: 'សួនសត្វ' },
        ],
      },
    ],
    vocabulary: [
      { word: 'Apple', khmerSound: 'អាប់ផល', meaningKhmer: 'ផ្លែប៉ោម', example: 'An apple is sweet.' },
      { word: 'Book', khmerSound: 'ប៊ុក', meaningKhmer: 'សៀវភៅ', example: 'I read a book.' },
      { word: 'Cat', khmerSound: 'ខេត', meaningKhmer: 'សត្វឆ្មា', example: 'The cat is cute.' },
      { word: 'Dog', khmerSound: 'ដក', meaningKhmer: 'សត្វឆ្កែ', example: 'My dog is friendly.' },
      { word: 'Sun', khmerSound: 'សាន់', meaningKhmer: 'ព្រះអាទិត្យ', example: 'The sun is shining.' },
    ],
    samplePhrases: [
      { english: 'A is for Apple.', khmerSound: 'អេ អ៊ីស ហ្វ័រ អាប់ផល', khmerMeaning: 'អក្សរ A សម្រាប់ពាក្យ Apple (ផ្លែប៉ោម)។' },
      { english: 'B is for Book.', khmerSound: 'ប៊ី អ៊ីស ហ្វ័រ ប៊ុក', khmerMeaning: 'អក្សរ B សម្រាប់ពាក្យ Book (សៀវភៅ)។' },
      { english: 'I can read A to Z.', khmerSound: 'អាយ ខេន រីដ អេ ធូ ហ្សិត', khmerMeaning: 'ខ្ញុំអាចអានអក្សរពី A ដល់ Z បាន។' },
    ],
    quiz: {
      question: 'Which word starts with the letter "C"?',
      questionKhmer: 'តើពាក្យមួយណាដែលចាប់ផ្តើមដោយអក្សរ "C"?',
      options: ['Dog', 'Cat', 'Apple', 'Book'],
      correctIndex: 1,
      explanation: 'ពាក្យ "Cat" ចាប់ផ្តើមដោយអក្សរ C (ស៊ី - Cat)។',
    },
  },

  {
    id: 2,
    unitNumber: 'មេរៀនទី ០២',
    titleKhmer: 'ការរាប់លេខ និងចំនួន (១ ដល់ ២០)',
    titleEnglish: 'Numbers 1 to 20',
    duration: '១៨ នាទី',
    descriptionKhmer: 'រៀនប្រកប និងបញ្ចេញសំឡេងលេខ ១ ដល់ ២០ និងការប្រាប់ចំនួនវត្ថុជុំវិញខ្លួន។',
    grammarOrKeyRule: 'លេខរាប់ឯកវចនៈប្រើ "One" (ឧ. One book) និងពហុវចនៈចាប់ពី ២ ឡើងត្រូវថែម "s" (ឧ. Two books)។',
    vocabulary: [
      { word: 'One / Two / Three', khmerSound: 'វ៉ាន់ / ធូ / ស្រ៊ី', meaningKhmer: 'មួយ / ពីរ / បី', example: 'Three pens' },
      { word: 'Four / Five / Six', khmerSound: 'ហ្វ័រ / ហ្វាយវ៍ / ស៊ីក្ស', meaningKhmer: 'បួន / ប្រាំ / ប្រាំមួយ', example: 'Five apples' },
      { word: 'Seven / Eight / Nine / Ten', khmerSound: 'សេវិន / អេត / ណាញ / ថេន', meaningKhmer: 'ប្រាំពីរ / ប្រាំបី / ប្រាំបួន / ដប់', example: 'Ten cats' },
      { word: 'Eleven to Twenty', khmerSound: 'អ៊ីឡេវិន ធូ ថ្វេនធី', meaningKhmer: 'ដប់មួយ ដល់ ម្ភៃ', example: 'Twenty chairs' },
    ],
    samplePhrases: [
      { english: 'How many books? - Two books.', khmerSound: 'ហៅ ម៉េនី ប៊ុក្ស? - ធូ ប៊ុក្ស', khmerMeaning: 'តើមានសៀវភៅប៉ុន្មានក្បាល? - សៀវភៅពីរ។' },
      { english: 'I have one sister.', khmerSound: 'អាយ ហាវ វ៉ាន់ ស៊ីស្ទ័រ', khmerMeaning: 'ខ្ញុំមានបងប្អូនស្រីម្នាក់។' },
    ],
    quiz: {
      question: 'How do you say number 10 in English?',
      questionKhmer: 'តើលេខ ១០ ជាភាសាអង់គ្លេសសរសេរដូចម្តេច?',
      options: ['Two', 'Five', 'Ten', 'Seven'],
      correctIndex: 2,
      explanation: 'លេខ ១០ ជាភាសាអង់គ្លេសគឺ "Ten"។',
    },
  },

  {
    id: 3,
    unitNumber: 'មេរៀនទី ០៣',
    titleKhmer: 'ពណ៌ និងរូបរាង',
    titleEnglish: 'Colors & Basic Shapes',
    duration: '១៥ នាទី',
    descriptionKhmer: 'ស្គាល់ឈ្មោះពណ៌ចម្បង (ក្រហម ខៀវ បៃតង លឿង ស ខ្មៅ) និងរូបរាងរង្វង់ ការ៉េ ត្រីកោណ។',
    grammarOrKeyRule: 'ដាក់ពណ៌នៅពីមុខនាមជានិច្ច ឧទាហរណ៍៖ a red car, a blue pen (មិនមែន a car red ទេ)។',
    vocabulary: [
      { word: 'Red', khmerSound: 'រ៉េដ', meaningKhmer: 'ពណ៌ក្រហម', example: 'A red apple.' },
      { word: 'Blue', khmerSound: 'ប្លូ', meaningKhmer: 'ពណ៌ខៀវ', example: 'The sky is blue.' },
      { word: 'Green', khmerSound: 'ហ្គ្រីន', meaningKhmer: 'ពណ៌បៃតង', example: 'Green leaves.' },
      { word: 'Yellow', khmerSound: 'យែលឡូ', meaningKhmer: 'ពណ៌លឿង', example: 'A yellow banana.' },
      { word: 'Circle / Square', khmerSound: 'សឺខល / ស្ឃ្វែរ', meaningKhmer: 'រង្វង់ / រាងការ៉េ', example: 'A round circle.' },
    ],
    samplePhrases: [
      { english: 'What color is it? - It is blue.', khmerSound: 'វ៉ាត់ ខូឡ័រ អ៊ីស អ៊ីត? - អ៊ីត អ៊ីស ប្លូ', khmerMeaning: 'តើវាពណ៌អ្វី? - វាពណ៌ខៀវ។' },
      { english: 'I like green.', khmerSound: 'អាយ ឡាយក៍ ហ្គ្រីន', khmerMeaning: 'ខ្ញុំចូលចិត្តពណ៌បៃតង។' },
    ],
    quiz: {
      question: 'What is the color of an apple usually?',
      questionKhmer: 'ជាទូទៅ ផ្លែប៉ោមមានពណ៌អ្វី?',
      options: ['Blue', 'Red', 'Black', 'Purple'],
      correctIndex: 1,
      explanation: 'ផ្លែប៉ោមជាទូទៅមានពណ៌ក្រហម (Red)។',
    },
  },

  {
    id: 4,
    unitNumber: 'មេរៀនទី ០៤',
    titleKhmer: 'របស់របរក្នុងថ្នាក់ និងជីវិតរស់នៅ',
    titleEnglish: 'Classroom & Everyday Objects',
    duration: '១៨ នាទី',
    descriptionKhmer: 'ពាក្យសម្គាល់សម្ភារៈសិក្សា និងរបស់ប្រើប្រាស់ប្រចាំថ្ងៃ ដូចជា ប៊ិច ខ្មៅដៃ បន្ទាត់ កាតាប តុ កៅអី។',
    grammarOrKeyRule: 'ប្រើ "This is a ..." សម្រាប់របស់នៅក្បែរ និង "That is a ..." សម្រាប់របស់នៅឆ្ងាយ។',
    vocabulary: [
      { word: 'Pen / Pencil', khmerSound: 'ភែន / ភេនស៊ល', meaningKhmer: 'ប៊ិច / ខ្មៅដៃ', example: 'Give me a pencil.' },
      { word: 'Eraser / Ruler', khmerSound: 'អ៊ីរ៉េស៊័រ / រូល័រ', meaningKhmer: 'ជ័រលុប / បន្ទាត់', example: 'Use an eraser.' },
      { word: 'Bag', khmerSound: 'ប៊ែក', meaningKhmer: 'កាតាប / កាបូប', example: 'My school bag.' },
      { word: 'Desk / Chair', khmerSound: 'ដេសក៍ / ឆ៊ែរ', meaningKhmer: 'តុសរសេរ / កៅអី', example: 'Sit on the chair.' },
    ],
    samplePhrases: [
      { english: 'This is my bag.', khmerSound: 'ឌីស អ៊ីស ម៉ាយ ប៊ែក', khmerMeaning: 'នេះគឺជាកាតាបរបស់ខ្ញុំ។' },
      { english: 'That is a whiteboard.', khmerSound: 'ដេត អ៊ីស អឺ វ៉ាយបត', khmerMeaning: 'នោះគឺជាក្តារខៀន។' },
    ],
    quiz: {
      question: 'What do you use to write?',
      questionKhmer: 'តើអ្នកប្រើប្រាស់អ្វីដើម្បីសរសេរ?',
      options: ['Chair', 'Pen', 'Bag', 'Door'],
      correctIndex: 1,
      explanation: 'យើងប្រើប៊ិច (Pen) ដើម្បីសរសេរ។',
    },
  },

  {
    id: 5,
    unitNumber: 'មេរៀនទី ០៥',
    titleKhmer: 'ការស្វាគមន៍ និងពាក្យគួរសម',
    titleEnglish: 'Greetings & Polite Phrases',
    duration: '១៥ នាទី',
    descriptionKhmer: 'របៀបសួរសុខទុក្ខ អរគុណ សុំទោស និងពាក្យជម្រាបលាប្រកបដោយភាពគួរសម។',
    grammarOrKeyRule: 'ប្រើ Please នៅពេលស្នើសុំអ្វីមួយ និង Thank you នៅពេលទទួលបានជំនួយ។',
    vocabulary: [
      { word: 'Hello / Hi', khmerSound: 'ហាឡូ / ហាយ', meaningKhmer: 'សួស្តី', example: 'Hello, teacher!' },
      { word: 'Good morning', khmerSound: 'ហ្គូដ ម៉នីង', meaningKhmer: 'អរុណសួស្តី (ពេលព្រឹក)', example: 'Good morning class.' },
      { word: 'Thank you', khmerSound: 'ថែង ឃ្យូ', meaningKhmer: 'សូមអរគុណ', example: 'Thank you very much.' },
      { word: 'Sorry / Excuse me', khmerSound: 'សូរី / អិចស្គ្យូស មី', meaningKhmer: 'សូមទោស / អធ្យាស្រ័យ', example: 'Excuse me, please.' },
      { word: 'Goodbye', khmerSound: 'ហ្គូដបាយ', meaningKhmer: 'លាហើយ', example: 'Goodbye, see you tomorrow.' },
    ],
    samplePhrases: [
      { english: 'How are you? - I am fine, thank you.', khmerSound: 'ហៅ អា យូ? - អាយ អែម ហ្វាញ, ថែង ឃ្យូ', khmerMeaning: 'តើអ្នកសុខសប្បាយជាទេ? - ខ្ញុំសុខសប្បាយធម្មតាទេ សូមអរគុណ។' },
      { english: 'Nice to meet you.', khmerSound: 'ណាយស៍ ធូ មីត យូ', khmerMeaning: 'រីករាយណាស់ដែលបានស្គាល់អ្នក។' },
    ],
    quiz: {
      question: 'What do you say when someone gives you a gift?',
      questionKhmer: 'តើអ្នកគួរនិយាយអ្វីនៅពេលមានគេផ្តល់កាដូឱ្យអ្នក?',
      options: ['Goodbye', 'Sorry', 'Thank you', 'No'],
      correctIndex: 2,
      explanation: 'ត្រូវនិយាយថា "Thank you" (សូមអរគុណ)។',
    },
  },

  {
    id: 6,
    unitNumber: 'មេរៀនទី ០៦',
    titleKhmer: 'សមាជិកគ្រួសាររបស់ខ្ញុំ',
    titleEnglish: 'My Family Members',
    duration: '១៨ នាទី',
    descriptionKhmer: 'រៀនពាក្យហៅឪពុក ម្តាយ បងប្អូនប្រុស បងប្អូនស្រី លោកតា និងលោកយាយ។',
    grammarOrKeyRule: 'ប្រើ My សម្រាប់សម្គាល់ភាពជាកម្មសិទ្ធិផ្ទាល់ខ្លួន ឧទាហរណ៍៖ My father, My mother។',
    vocabulary: [
      { word: 'Father / Dad', khmerSound: 'ហ្វាឌ័រ / ដេដ', meaningKhmer: 'ឪពុក / ប៉ា', example: 'My father is kind.' },
      { word: 'Mother / Mom', khmerSound: 'ម៉ាឌ័រ / ម៉ាំ', meaningKhmer: 'ម្តាយ / ម៉ាក់', example: 'I love my mother.' },
      { word: 'Brother / Sister', khmerSound: 'ប្រាឌ័រ / ស៊ីស្ទ័រ', meaningKhmer: 'បងប្អូនប្រុស / បងប្អូនស្រី', example: 'He is my brother.' },
      { word: 'Grandfather / Grandmother', khmerSound: 'ហ្គ្រេនហ្វាឌ័រ / ហ្គ្រេនម៉ាឌ័រ', meaningKhmer: 'ជីតា / ជីដូន', example: 'My grandfather is 70.' },
    ],
    samplePhrases: [
      { english: 'This is my mother.', khmerSound: 'ឌីស អ៊ីស ម៉ាយ ម៉ាឌ័រ', khmerMeaning: 'នេះគឺជាម្តាយរបស់ខ្ញុំ។' },
      { english: 'I love my family.', khmerSound: 'អាយ ឡាវ ម៉ាយ ហ្វេមីលី', khmerMeaning: 'ខ្ញុំស្រឡាញ់ក្រុមគ្រួសាររបស់ខ្ញុំ។' },
    ],
    quiz: {
      question: 'Who is your mother’s mother?',
      questionKhmer: 'តើម្តាយរបស់ម្តាយអ្នកត្រូវជាអ្វីនឹងអ្នក?',
      options: ['Sister', 'Grandmother', 'Father', 'Brother'],
      correctIndex: 1,
      explanation: 'ម្តាយរបស់ម្តាយគឺជីដូន (Grandmother)។',
    },
  },

  {
    id: 7,
    unitNumber: 'មេរៀនទី ០៧',
    titleKhmer: 'ថ្ងៃក្នុងសប្តាហ៍ និងខែ',
    titleEnglish: 'Days of the Week & Months',
    duration: '២០ នាទី',
    descriptionKhmer: 'រៀនឈ្មោះ ៧ ថ្ងៃក្នុងមួយសប្តាហ៍ (ចន្ទ ដល់ អាទិត្យ) និងខែទាំង ១២ ក្នុងមួយឆ្នាំ។',
    grammarOrKeyRule: 'ឈ្មោះថ្ងៃ និងឈ្មោះខែក្នុងភាសាអង់គ្លេស ត្រូវសរសេរអក្សរធំនៅខាងដើមជានិច្ច (Monday, January)។',
    vocabulary: [
      { word: 'Monday / Tuesday', khmerSound: 'ម៉ាន់ដេ / ធ្យូសដេ', meaningKhmer: 'ថ្ងៃចន្ទ / ថ្ងៃអង្គារ', example: 'School starts on Monday.' },
      { word: 'Wednesday / Thursday', khmerSound: 'វ៉ែនស៍ដេ / ធើសដេ', meaningKhmer: 'ថ្ងៃពុធ / ថ្ងៃព្រហស្បតិ៍', example: 'See you on Wednesday.' },
      { word: 'Friday / Saturday / Sunday', khmerSound: 'ហ្វ្រាយដេ / សេធ័រដេ / សាន់ដេ', meaningKhmer: 'ថ្ងៃសុក្រ / ថ្ងៃសៅរ៍ / ថ្ងៃអាទិត្យ', example: 'Sunday is a rest day.' },
      { word: 'Today / Tomorrow', khmerSound: 'ធូដេ / ធូម៉ូរ៉ូ', meaningKhmer: 'ថ្ងៃនេះ / ថ្ងៃស្អែក', example: 'Today is Sunday.' },
    ],
    samplePhrases: [
      { english: 'What day is today? - Today is Monday.', khmerSound: 'វ៉ាត់ ដេ អ៊ីស ធូដេ? - ធូដេ អ៊ីស ម៉ាន់ដេ', khmerMeaning: 'តើថ្ងៃនេះជាថ្ងៃអ្វី? - ថ្ងៃនេះគឺថ្ងៃចន្ទ។' },
    ],
    quiz: {
      question: 'What day comes after Friday?',
      questionKhmer: 'តើថ្ងៃណាដែលនៅបន្ទាប់ពីថ្ងៃសុក្រ?',
      options: ['Monday', 'Saturday', 'Sunday', 'Wednesday'],
      correctIndex: 1,
      explanation: 'បន្ទាប់ពីថ្ងៃសុក្រ (Friday) គឺថ្ងៃសៅរ៍ (Saturday)។',
    },
  },

  {
    id: 8,
    unitNumber: 'មេរៀនទី ០៨',
    titleKhmer: 'សត្វចិញ្ចឹម និងសត្វទូទៅ',
    titleEnglish: 'Animals & Common Pets',
    duration: '១៦ នាទី',
    descriptionKhmer: 'ពាក្យគន្លឹះសម្គាល់សត្វចិញ្ចឹម និងសត្វទូទៅ ដូចជា ឆ្មា ឆ្កែ បក្សី ត្រី ទា មាន់ គោ និងសេះ។',
    grammarOrKeyRule: 'ប្រើ "It is a [animal]" សម្រាប់ចង្អុលបង្ហាញសត្វ ឧទាហរណ៍៖ It is a bird. (វាគឺជាសត្វបក្សី)។',
    vocabulary: [
      { word: 'Dog / Puppy', khmerSound: 'ដក / ផាប់ភី', meaningKhmer: 'សត្វឆ្កែ / កូនឆ្កែ', example: 'A playful puppy.' },
      { word: 'Cat / Kitten', khmerSound: 'ខេត / ឃីតថឹន', meaningKhmer: 'សត្វឆ្មា / កូនឆ្មា', example: 'The kitten is sleeping.' },
      { word: 'Bird / Fish', khmerSound: 'ប៊ឺដ / ហ្វីស', meaningKhmer: 'សត្វស្លាប / ត្រី', example: 'Birds can fly.' },
      { word: 'Cow / Horse', khmerSound: 'ខៅ / ហ័រស៍', meaningKhmer: 'សត្វគោ / សត្វសេះ', example: 'A big cow.' },
    ],
    samplePhrases: [
      { english: 'Do you have a pet? - Yes, I have a cat.', khmerSound: 'ឌូ យូ ហាវ អឺ ភេត? - យេស, អាយ ហាវ អឺ ខេត', khmerMeaning: 'តើអ្នកមានចិញ្ចឹមសត្វទេ? - បាទ/ចាស ខ្ញុំមានចិញ្ចឹមឆ្មាមួយក្បាល។' },
    ],
    quiz: {
      question: 'Which animal can fly?',
      questionKhmer: 'តើសត្វមួយណាអាចហោះហើរបាន?',
      options: ['Dog', 'Cat', 'Bird', 'Cow'],
      correctIndex: 2,
      explanation: 'សត្វស្លាប (Bird) អាចហោះហើរបាន។',
    },
  },

  {
    id: 9,
    unitNumber: 'មេរៀនទី ០៩',
    titleKhmer: 'អាហារ និងភេសជ្ជៈសាមញ្ញ',
    titleEnglish: 'Basic Food & Drinks',
    duration: '១៨ នាទី',
    descriptionKhmer: 'រៀនពាក្យបាយ ទឹក ទឹកដោះគោ នំប៉័ង សាច់មាន់ ផ្លែឈើ និងការនិយាយថា "ខ្ញុំឃ្លាន / ខ្ញុំស្រេកទឹក"។',
    grammarOrKeyRule: 'ប្រើ "I like ..." (ខ្ញុំចូលចិត្ត) ឬ "I want ..." (ខ្ញុំចង់បាន) ជាមួយឈ្មោះអាហារ។',
    vocabulary: [
      { word: 'Rice / Bread', khmerSound: 'រ៉ាយស៍ / ប្រេដ', meaningKhmer: 'បាយ / នំប៉័ង', example: 'We eat rice every day.' },
      { word: 'Water / Milk', khmerSound: 'វ៉ធ័រ / មីលខ៍', meaningKhmer: 'ទឹក / ទឹកដោះគោ', example: 'Drink fresh water.' },
      { word: 'Coffee / Tea', khmerSound: 'ខហ្វី / ធី', meaningKhmer: 'កាហ្វេ / តែ', example: 'Hot coffee.' },
      { word: 'Chicken / Fish', khmerSound: 'ឈីកឃីន / ហ្វីស', meaningKhmer: 'សាច់មាន់ / សាច់ត្រី', example: 'Fried chicken is tasty.' },
    ],
    samplePhrases: [
      { english: 'I am hungry. I want rice.', khmerSound: 'អាយ អែម ហាំងគ្រី. អាយ វ៉ន រ៉ាយស៍', khmerMeaning: 'ខ្ញុំឃ្លានហើយ។ ខ្ញុំចង់ញ៉ាំបាយ។' },
      { english: 'Water, please.', khmerSound: 'វ៉ធ័រ, ភ្លីស', khmerMeaning: 'សូមសុំទឹកមួយកែវ។' },
    ],
    quiz: {
      question: 'What do you drink when you are thirsty?',
      questionKhmer: 'តើអ្នកផឹកអ្វីនៅពេលស្រេកទឹក?',
      options: ['Bread', 'Rice', 'Water', 'Book'],
      correctIndex: 2,
      explanation: 'ពេលស្រេកទឹក យើងផឹកទឹក (Water)។',
    },
  },

  {
    id: 10,
    unitNumber: 'មេរៀនទី ១០',
    titleKhmer: 'ការណែនាំខ្លួនឯងដំបូង និងប្រយោគសាមញ្ញ',
    titleEnglish: 'First Self-Introduction & Simple Sentences',
    duration: '២៥ នាទី',
    descriptionKhmer: 'បូកសរុបចំណេះដឹងគ្រឹះទាំងអស់ដើម្បីបង្កើតជាកថាខណ្ឌណែនាំខ្លួនខ្លីមួយ៖ ឈ្មោះ អាយុ ស្រុកកំណើត និងចំណូលចិត្ត។',
    grammarOrKeyRule: 'រូបមន្តណែនាំខ្លួន៖ Hello, My name is [ឈ្មោះ]. I am [អាយុ] years old. I am from Cambodia. Nice to meet you!',
    vocabulary: [
      { word: 'Name', khmerSound: 'ណេម', meaningKhmer: 'ឈ្មោះ', example: 'My name is Dara.' },
      { word: 'Years old', khmerSound: 'យា អូល', meaningKhmer: 'អាយុ...ឆ្នាំ', example: 'I am 18 years old.' },
      { word: 'From', khmerSound: 'ហ្វ្រម', meaningKhmer: 'មកពី', example: 'I am from Cambodia.' },
      { word: 'Student', khmerSound: 'ស្ទ្យូដិន', meaningKhmer: 'សិស្ស / និស្សិត', example: 'I am an English student.' },
    ],
    samplePhrases: [
      { english: 'Hello, my name is Seyha. I am from Cambodia.', khmerSound: 'ហាឡូ, ម៉ាយ ណេម អ៊ីស សីហា. អាយ អែម ហ្វ្រម ខេមបូឌា', khmerMeaning: 'សួស្តី ខ្ញុំឈ្មោះ សីហា។ ខ្ញុំមកពីប្រទេសកម្ពុជា។' },
      { english: 'I am happy to learn English!', khmerSound: 'អាយ អែម ហេបភី ធូ លើន អ៊ីងគ្លីស', khmerMeaning: 'ខ្ញុំសប្បាយរីករាយណាស់ដែលបានរៀនភាសាអង់គ្លេស!' },
    ],
    quiz: {
      question: 'Complete the sentence: "My ______ is John."',
      questionKhmer: 'បំពេញចន្លោះក្នុងប្រយោគ៖ "My ______ is John."',
      options: ['age', 'name', 'book', 'color'],
      correctIndex: 1,
      explanation: 'ប្រើ "My name is John" (ខ្ញុំឈ្មោះ John)។',
    },
  },
];
