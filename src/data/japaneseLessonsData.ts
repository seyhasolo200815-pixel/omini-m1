export interface JapaneseLevelItem {
  id: number;
  khmerNumber: string;
  title: string;
  japaneseTitle: string;
  description: string;
  badge?: {
    text: string;
    type: 'completed' | 'next' | 'standard';
  };
  cefr: string;
  lessonsCount: number;
  numBg: string;
  numText: string;
  numBorder: string;
  samplePhrases: { text: string; reading?: string; khmer: string }[];
}

export const JAPANESE_LEVELS: JapaneseLevelItem[] = [
  {
    id: 1,
    khmerNumber: '១',
    title: 'កម្រិតដំបូងបង្អស់',
    japaneseTitle: 'Hiragana (ひらがな 46)',
    description: 'តួអក្សរ Hiragana (៤៦ តួ) + ការបញ្ចេញសំឡេង និងរបៀបគូសបន្ទាត់។',
    cefr: 'N5 Prep · A0',
    lessonsCount: 10,
    badge: {
      text: 'ចាប់ផ្ដើម',
      type: 'next',
    },
    numBg: 'bg-rose-100',
    numText: 'text-rose-800',
    numBorder: 'border-rose-200',
    samplePhrases: [
      { text: 'あ (A)', reading: 'A', khmer: 'ស្រៈ «អា» (3 គំនូស)' },
      { text: 'ありがとう', reading: 'Arigatou', khmer: 'អរគុណ' },
      { text: 'ねこ', reading: 'Neko', khmer: 'សត្វឆ្មា' },
    ],
  },
  {
    id: 2,
    khmerNumber: '២',
    title: 'អក្សរបរទេស',
    japaneseTitle: 'Katakana & Gairaigo (カタカナ)',
    description: 'តួអក្សរ Katakana (៤៦ តួ) + វាក្យសព្ទពាក្យកម្ចីប្រចាំថ្ងៃ។',
    cefr: 'N5 Prep · A0',
    lessonsCount: 10,
    numBg: 'bg-orange-100',
    numText: 'text-orange-800',
    numBorder: 'border-orange-200',
    samplePhrases: [
      { text: 'コーヒー', reading: 'Kōhī', khmer: 'កាហ្វេ (Coffee)' },
      { text: 'パン', reading: 'Pan', khmer: 'នំប៉័ង (Bread)' },
      { text: 'スマホ', reading: 'Sumaho', khmer: 'ទូរស័ព្ទស្មាតហ្វូន (Smartphone)' },
    ],
  },
  {
    id: 3,
    khmerNumber: '៣',
    title: 'ស្វាគមន៍ & ណែនាំខ្លួន',
    japaneseTitle: 'Aisatsu & Jikoshoukai (挨拶・自己紹介)',
    description: 'ការស្វាគមន៍ (Aisatsu), ការណែនាំខ្លួន (Jikoshoukai) និងវេយ្យាករណ៍ដំបូង (~は~です)។',
    cefr: 'JLPT N5.1 · A1',
    lessonsCount: 10,
    numBg: 'bg-pink-100',
    numText: 'text-pink-800',
    numBorder: 'border-pink-200',
    samplePhrases: [
      { text: 'こんにちは', reading: 'Konnichiwa', khmer: 'សួស្តី / ទិវាសួស្តី' },
      { text: 'はじめまして', reading: 'Hajimemashite', khmer: 'រីករាយណាស់ដែលបានស្គាល់' },
      { text: 'わたしは学生です', reading: 'Watashi wa gakusei desu', khmer: 'ខ្ញុំគឺជានិស្សិត/សិស្ស' },
    ],
  },
  {
    id: 4,
    khmerNumber: '៤',
    title: 'កម្រិត N5 ភាគ ១',
    japaneseTitle: 'Basic N5 Part 1 (家族・場所・動詞)',
    description: 'វាក្យសព្ទគ្រួសារ ទីកន្លែង លេខ និងកិរិយាស័ព្ទប្រចាំថ្ងៃទម្រង់ -masu។',
    cefr: 'JLPT N5.2 · A1',
    lessonsCount: 12,
    numBg: 'bg-emerald-100',
    numText: 'text-emerald-800',
    numBorder: 'border-emerald-200',
    samplePhrases: [
      { text: 'ごはんをたべます', reading: 'Gohan o tabemasu', khmer: 'ខ្ញុំញ៉ាំបាយ' },
      { text: 'がっこうへいきます', reading: 'Gakkou e ikimasu', khmer: 'ខ្ញុំទៅសាលារៀន' },
      { text: 'いまなんじですか', reading: 'Ima nan-ji desu ka', khmer: 'ឥឡូវនេះតើម៉ោងប៉ុន្មានហើយ?' },
    ],
  },
  {
    id: 5,
    khmerNumber: '៥',
    title: 'កម្រិត N5 ភាគ ២',
    japaneseTitle: 'Kanji 50 & Te-Form (漢字・て形)',
    description: 'Kanji មូលដ្ឋាន (៥០ តួ) និងទម្រង់កិរិយាស័ព្ទ -te (Te-form)។',
    cefr: 'JLPT N5.3 · A1+',
    lessonsCount: 12,
    numBg: 'bg-sky-100',
    numText: 'text-sky-800',
    numBorder: 'border-sky-200',
    samplePhrases: [
      { text: 'ちょっとまってください', reading: 'Chotto matte kudasai', khmer: 'សូមមេត្តារង់ចាំបន្តិច' },
      { text: 'ほんをよんでいます', reading: 'Hon o yonde imasu', khmer: 'ខ្ញុំកំពុងតែអានសៀវភៅ' },
      { text: 'しゃしんをとってもいいですか', reading: 'Shashin o totte mo ii desu ka', khmer: 'តើខ្ញុំអាចថតរូបបានទេ?' },
    ],
  },
  {
    id: 6,
    khmerNumber: '៦',
    title: 'កម្រិត N4',
    japaneseTitle: 'Elementary N4 (中級への基礎)',
    description: 'វេយ្យាករណ៍កម្រិតមធ្យមដំបូង ការសន្ទនាក្នុងផ្សារ ការធ្វើដំណើរ និង Kanji បន្ថែម។',
    cefr: 'JLPT N4 · A2',
    lessonsCount: 12,
    numBg: 'bg-indigo-100',
    numText: 'text-indigo-800',
    numBorder: 'border-indigo-200',
    samplePhrases: [
      { text: '日本語を話すことができます', reading: 'Nihongo o hanasu koto ga dekimasu', khmer: 'ខ្ញុំអាចនិយាយភាសាជប៉ុនបាន' },
      { text: 'あした雨が降ったら、行きません', reading: 'Ashita ame ga futtara, ikimasen', khmer: 'ប្រសិនបើស្អែកភ្លៀង ខ្ញុំនឹងមិនទៅទេ' },
    ],
  },
  {
    id: 7,
    khmerNumber: '៧',
    title: 'កម្រិត N3',
    japaneseTitle: 'Intermediate N3 (実用会話・読解)',
    description: 'ការសន្ទនាទូទៅ វេយ្យាករណ៍ស្មុគស្មាញ និងអត្ថបទអានខ្លីៗ។',
    cefr: 'JLPT N3 · B1',
    lessonsCount: 12,
    numBg: 'bg-amber-100',
    numText: 'text-amber-800',
    numBorder: 'border-amber-200',
    samplePhrases: [
      { text: '先生のおかげで合格できました', reading: 'Sensei no okage de goukaku dekimashita', khmer: 'ដោយសារបានការជួយពីលោកគ្រូ ទើបខ្ញុំអាចប្រឡងជាប់បាន' },
      { text: '毎日練習すれば、上手に話せるようになります', reading: 'Mainichi renshuu sureba, jouzu ni hanaseru you ni narimasu', khmer: 'ប្រសិនបើហាត់រាល់ថ្ងៃ នឹងអាចនិយាយបានយ៉ាងស្ទាត់ជំនាញ' },
    ],
  },
  {
    id: 8,
    khmerNumber: '៨',
    title: 'កម្រិត N2/N1',
    japaneseTitle: 'Advanced & Keigo (上級・敬語・ビジネス)',
    description: 'ភាសាជប៉ុនកម្រិតខ្ពស់ និងការប្រើប្រាស់ក្នុងកន្លែងធ្វើការ (Keigo)។',
    cefr: 'JLPT N2/N1 · B2/C1',
    lessonsCount: 12,
    numBg: 'bg-purple-100',
    numText: 'text-purple-800',
    numBorder: 'border-purple-200',
    samplePhrases: [
      { text: '少々お待ちいただけますでしょうか', reading: 'Shoushou omachi itadakemasu deshou ka', khmer: 'តើលោក/លោកស្រីអាចមេត្តារង់ចាំបន្តិចបានដែរឬទេ? (Keigo គួរសម)' },
      { text: 'ご検討のほど、よろしくお願い申し上げます', reading: 'Gokentou no hodo, yoroshiku onegai moushiagemasu', khmer: 'សូមមេត្តាពិចារណាដោយអនុគ្រោះ (ភាសាអ៊ីមែលធុរកិច្ច)' },
    ],
  },
];

/* ========================================================================= */
/* HIRAGANA 46 CHARACTERS DATA (ប្រអប់ទី ១)                                  */
/* ========================================================================= */
export interface HiraganaLetter {
  char: string;
  romaji: string;
  khmerSound: string;
  strokeCount: number;
  strokeGuide: string;
  exampleWord: string;
  exampleReading: string;
  exampleKhmer: string;
}

export interface HiraganaGroup {
  rowName: string;
  rowNameKhmer: string;
  letters: HiraganaLetter[];
}

export const HIRAGANA_GROUPS: HiraganaGroup[] = [
  {
    rowName: 'A Row (あ行)',
    rowNameKhmer: 'ជួរស្រៈ «A»',
    letters: [
      { char: 'あ', romaji: 'a', khmerSound: 'អា', strokeCount: 3, strokeGuide: '1 ផ្ដេក, 2 បញ្ឈរស្រាល, 3 កោងរង្វង់', exampleWord: 'あめ', exampleReading: 'Ame', exampleKhmer: 'ស្ករគ្រាប់ / ភ្លៀង' },
      { char: 'い', romaji: 'i', khmerSound: 'អ៊ី', strokeCount: 2, strokeGuide: '1 គំនូសឆ្វេងទំពក់, 2 គំនូសស្តាំខ្លី', exampleWord: 'いぬ', exampleReading: 'Inu', exampleKhmer: 'សត្វឆ្កែ' },
      { char: 'う', romaji: 'u', khmerSound: 'អ៊ូ', strokeCount: 2, strokeGuide: '1 ចំណុចលើ, 2 កោងពាក់កណ្តាល', exampleWord: 'うみ', exampleReading: 'Umi', exampleKhmer: 'សមុទ្រ' },
      { char: 'え', romaji: 'e', khmerSound: 'អេ', strokeCount: 2, strokeGuide: '1 ចំណុចលើ, 2 គូសដូចលេខ Z កោង', exampleWord: 'えき', exampleReading: 'Eki', exampleKhmer: 'ស្ថានីយរថភ្លើង' },
      { char: 'お', romaji: 'o', khmerSound: 'អូ', strokeCount: 3, strokeGuide: '1 ផ្ដេក, 2 បញ្ឈរកោងរង្វង់, 3 ចំណុចស្ដាំ', exampleWord: 'おかね', exampleReading: 'Okane', exampleKhmer: 'លុយ / ប្រាក់' },
    ],
  },
  {
    rowName: 'Ka Row (か行)',
    rowNameKhmer: 'ជួរព្យញ្ជនៈ «Ka»',
    letters: [
      { char: 'か', romaji: 'ka', khmerSound: 'ខា', strokeCount: 3, strokeGuide: '1 កោងទំពក់, 2 កាត់បញ្ឆិត, 3 ចំណុចស្ដាំ', exampleWord: 'かさ', exampleReading: 'Kasa', exampleKhmer: 'ឆ័ត្រ' },
      { char: 'き', romaji: 'ki', khmerSound: 'ឃី', strokeCount: 4, strokeGuide: '1 ផ្ដេកលើ, 2 ផ្ដេកក្រោម, 3 បញ្ឆិត, 4 កោងក្រោម', exampleWord: 'き', exampleReading: 'Ki', exampleKhmer: 'ដើមឈើ' },
      { char: 'く', romaji: 'ku', khmerSound: 'ឃូ', strokeCount: 1, strokeGuide: '1 គំនូសកាច់ដូចសញ្ញាតូចជាង <', exampleWord: 'くるま', exampleReading: 'Kuruma', exampleKhmer: 'ឡាន / រថយន្ត' },
      { char: 'け', romaji: 'ke', khmerSound: 'ខេ', strokeCount: 3, strokeGuide: '1 បញ្ឈរឆ្វេងទំពក់, 2 ផ្ដេក, 3 បញ្ឈរស្ដាំកោង', exampleWord: 'けさ', exampleReading: 'Kesa', exampleKhmer: 'ព្រឹកមិញនេះ' },
      { char: 'こ', romaji: 'ko', khmerSound: 'ខូ', strokeCount: 2, strokeGuide: '1 ផ្ដេកលើ, 2 ផ្ដេកក្រោមស្រាល', exampleWord: 'こども', exampleReading: 'Kodomo', exampleKhmer: 'ក្មេង / កូន' },
    ],
  },
  {
    rowName: 'Sa Row (さ行)',
    rowNameKhmer: 'ជួរព្យញ្ជនៈ «Sa»',
    letters: [
      { char: 'さ', romaji: 'sa', khmerSound: 'សា', strokeCount: 3, strokeGuide: '1 ផ្ដេក, 2 បញ្ឆិតកាត់, 3 កោងក្រោម', exampleWord: 'さくら', exampleReading: 'Sakura', exampleKhmer: 'ផ្កាសាគូរ៉ា' },
      { char: 'し', romaji: 'shi', khmerSound: 'ស៊ី', strokeCount: 1, strokeGuide: '1 បញ្ឈរចុះក្រោមហើយកោងឡើងដូចទំពក់', exampleWord: 'しろ', exampleReading: 'Shiro', exampleKhmer: 'ពណ៌ស' },
      { char: 'す', romaji: 'su', khmerSound: 'ស៊ូ', strokeCount: 2, strokeGuide: '1 ផ្ដេក, 2 បញ្ឈរកួចរង្វង់កណ្ដាល', exampleWord: 'すし', exampleReading: 'Sushi', exampleKhmer: 'ស៊ូស៊ី' },
      { char: 'せ', romaji: 'se', khmerSound: 'សេ', strokeCount: 3, strokeGuide: '1 ផ្ដេក, 2 បញ្ឈរស្ដាំកោង, 3 បញ្ឈរឆ្វេង', exampleWord: 'せんせい', exampleReading: 'Sensei', exampleKhmer: 'លោកគ្រូ / អ្នកគ្រូ' },
      { char: 'そ', romaji: 'so', khmerSound: 'សូ', strokeCount: 1, strokeGuide: '1 គំនូសផ្ដេក-បញ្ឆិត-ផ្ដេកកោង (ដូចអក្សរ Z កោង)', exampleWord: 'そら', exampleReading: 'Sora', exampleKhmer: 'មេឃ / ផ្ទៃមេឃ' },
    ],
  },
  {
    rowName: 'Ta Row (た行)',
    rowNameKhmer: 'ជួរព្យញ្ជនៈ «Ta»',
    letters: [
      { char: 'た', romaji: 'ta', khmerSound: 'ថា', strokeCount: 4, strokeGuide: '1 ផ្ដេក, 2 បញ្ឆិត, 3 & 4 ដូច こ តូច', exampleWord: 'たまご', exampleReading: 'Tamago', exampleKhmer: 'ស៊ុត / ពងមាន់' },
      { char: 'ち', romaji: 'chi', khmerSound: 'ឈី', strokeCount: 2, strokeGuide: '1 ផ្ដេកលើ, 2 បញ្ឈរកាត់កោងដូចលេខ 5', exampleWord: 'ちち', exampleReading: 'Chichi', exampleKhmer: 'ឪពុក (របស់ខ្ញុំ)' },
      { char: 'つ', romaji: 'tsu', khmerSound: 'ស៊ឹ', strokeCount: 1, strokeGuide: '1 គំនូសកោងដូចអក្សរ C បញ្ច្រាសធំ', exampleWord: 'つくえ', exampleReading: 'Tsukue', exampleKhmer: 'តុសរសេរ' },
      { char: 'て', romaji: 'te', khmerSound: 'ថេ', strokeCount: 1, strokeGuide: '1 ផ្ដេកស្ដាំហើយកោងមូលដូចអក្សរ C', exampleWord: 'て', exampleReading: 'Te', exampleKhmer: 'ដៃ' },
      { char: 'と', romaji: 'to', khmerSound: 'ថូ', strokeCount: 2, strokeGuide: '1 បញ្ឆិតខ្លី, 2 កោងរាងដូចអក្សរ C', exampleWord: 'ともだち', exampleReading: 'Tomodachi', exampleKhmer: 'មិត្តភក្តិ' },
    ],
  },
  {
    rowName: 'Na Row (な行)',
    rowNameKhmer: 'ជួរព្យញ្ជនៈ «Na»',
    letters: [
      { char: 'な', romaji: 'na', khmerSound: 'ណា', strokeCount: 4, strokeGuide: '1 ផ្ដេក, 2 បញ្ឆិត, 3 ចំណុច, 4 បញ្ឈរកួចរង្វង់', exampleWord: 'なつ', exampleReading: 'Natsu', exampleKhmer: 'រដូវក្តៅ' },
      { char: 'に', romaji: 'ni', khmerSound: 'នី', strokeCount: 3, strokeGuide: '1 បញ្ឈរឆ្វេងទំពក់, 2 & 3 ដូច こ', exampleWord: 'にく', exampleReading: 'Niku', exampleKhmer: 'សាច់' },
      { char: 'ぬ', romaji: 'nu', khmerSound: 'នូ', strokeCount: 2, strokeGuide: '1 បញ្ឆិត, 2 កោងកួចរង្វង់ចុងស្ដាំ', exampleWord: 'いぬ', exampleReading: 'Inu', exampleKhmer: 'សត្វឆ្កែ' },
      { char: 'ね', romaji: 'ne', khmerSound: 'នេ', strokeCount: 2, strokeGuide: '1 បញ្ឈរឆ្វេង, 2 ដូចលេខ Z កួចរង្វង់ចុង', exampleWord: 'ねこ', exampleReading: 'Neko', exampleKhmer: 'សត្វឆ្មា' },
      { char: 'の', romaji: 'no', khmerSound: 'ណូ', strokeCount: 1, strokeGuide: '1 បញ្ឆិតហើយបត់កោងជារង្វង់មូល', exampleWord: 'のみもの', exampleReading: 'Nomimono', exampleKhmer: 'ភេសជ្ជៈ' },
    ],
  },
  {
    rowName: 'Ha Row (は行)',
    rowNameKhmer: 'ជួរព្យញ្ជនៈ «Ha»',
    letters: [
      { char: 'は', romaji: 'ha', khmerSound: 'ហា', strokeCount: 3, strokeGuide: '1 បញ្ឈរឆ្វេង, 2 ផ្ដេក, 3 បញ្ឈរកួចរង្វង់ក្រោម', exampleWord: 'はな', exampleReading: 'Hana', exampleKhmer: 'ផ្កា / ច្រមុះ' },
      { char: 'ひ', romaji: 'hi', khmerSound: 'ហ៊ី', strokeCount: 1, strokeGuide: '1 គំនូសរាងដូចអក្សរ U មានទំពក់ឆ្វេងស្ដាំ', exampleWord: 'ひと', exampleReading: 'Hito', exampleKhmer: 'មនុស្ស' },
      { char: 'ふ', romaji: 'fu', khmerSound: 'ហ៊្វូ', strokeCount: 4, strokeGuide: '1 ចំណុចលើ, 2 កោងកណ្ដាល, 3 ចំណុចឆ្វេង, 4 ចំណុចស្ដាំ', exampleWord: 'ふじさん', exampleReading: 'Fujisan', exampleKhmer: 'ភ្នំហ្វូជី' },
      { char: 'へ', romaji: 'he', khmerSound: 'ហេ', strokeCount: 1, strokeGuide: '1 គំនូសដូចដំបូលផ្ទះ ^ ឡើងខ្លីចុះវែង', exampleWord: 'へや', exampleReading: 'Heya', exampleKhmer: 'បន្ទប់' },
      { char: 'ほ', romaji: 'ho', khmerSound: 'ហូ', strokeCount: 4, strokeGuide: '1 បញ្ឈរឆ្វេង, 2 ផ្ដេកលើ, 3 ផ្ដេកក្រោម, 4 បញ្ឈរកួច', exampleWord: 'ほん', exampleReading: 'Hon', exampleKhmer: 'សៀវភៅ' },
    ],
  },
  {
    rowName: 'Ma Row (ま行)',
    rowNameKhmer: 'ជួរព្យញ្ជនៈ «Ma»',
    letters: [
      { char: 'ま', romaji: 'ma', khmerSound: 'ម៉ា', strokeCount: 3, strokeGuide: '1 ផ្ដេកលើវែង, 2 ផ្ដេកក្រោមខ្លី, 3 បញ្ឈរកួចរង្វង់', exampleWord: 'まち', exampleReading: 'Machi', exampleKhmer: 'ទីក្រុង / ទីប្រជុំជន' },
      { char: 'み', romaji: 'mi', khmerSound: 'មី', strokeCount: 2, strokeGuide: '1 ផ្ដេកកោងកួចបញ្ឆិត, 2 បញ្ឆិតកាត់ស្ដាំ', exampleWord: 'みず', exampleReading: 'Mizu', exampleKhmer: 'ទឹក' },
      { char: 'む', romaji: 'mu', khmerSound: 'មូ', strokeCount: 3, strokeGuide: '1 ផ្ដេក, 2 បញ្ឈរកួចឡើងលើ, 3 ចំណុចស្ដាំ', exampleWord: 'むし', exampleReading: 'Mushi', exampleKhmer: 'សត្វល្អិត' },
      { char: 'め', romaji: 'me', khmerSound: 'មេ', strokeCount: 2, strokeGuide: '1 បញ្ឆិតឆ្វេង, 2 កោងធំកាត់កណ្ដាល', exampleWord: 'め', exampleReading: 'Me', exampleKhmer: 'ភ្នែក' },
      { char: 'も', romaji: 'mo', khmerSound: 'ម៉ូ', strokeCount: 3, strokeGuide: '1 បញ្ឈរទំពក់ដូច し, 2 ផ្ដេកលើ, 3 ផ្ដេកក្រោម', exampleWord: 'もの', exampleReading: 'Mono', exampleKhmer: 'របស់របរ' },
    ],
  },
  {
    rowName: 'Ya Row (や行)',
    rowNameKhmer: 'ជួរព្យញ្ជនៈ «Ya»',
    letters: [
      { char: 'や', romaji: 'ya', khmerSound: 'យ៉ា', strokeCount: 3, strokeGuide: '1 កោងទំពក់, 2 ចំណុចឆ្វេង, 3 បញ្ឆិតកាត់', exampleWord: 'やま', exampleReading: 'Yama', exampleKhmer: 'ភ្នំ' },
      { char: 'ゆ', romaji: 'yu', khmerSound: 'យូ', strokeCount: 2, strokeGuide: '1 បញ្ឈរកោងកួចឡើង, 2 បញ្ឈរកាត់កណ្ដាល', exampleWord: 'ゆき', exampleReading: 'Yuki', exampleKhmer: 'ព្រិល' },
      { char: 'よ', romaji: 'yo', khmerSound: 'យ៉ូ', strokeCount: 2, strokeGuide: '1 ផ្ដេកខ្លី, 2 បញ្ឈរកួចរង្វង់ចុងស្ដាំ', exampleWord: 'よる', exampleReading: 'Yoru', exampleKhmer: 'ពេលយប់' },
    ],
  },
  {
    rowName: 'Ra Row (ら行)',
    rowNameKhmer: 'ជួរព្យញ្ជនៈ «Ra»',
    letters: [
      { char: 'ら', romaji: 'ra', khmerSound: 'រ៉ា', strokeCount: 2, strokeGuide: '1 ចំណុចលើ, 2 កោងដូចលេខ 5 ក្រោម', exampleWord: 'らーめん', exampleReading: 'Rāmen', exampleKhmer: 'មីរ៉ាមេន' },
      { char: 'り', romaji: 'ri', khmerSound: 'រី', strokeCount: 2, strokeGuide: '1 បញ្ឈរឆ្វេងខ្លី, 2 បញ្ឈរស្ដាំវែងទំពក់', exampleWord: 'りんご', exampleReading: 'Ringo', exampleKhmer: 'ផ្លែប៉ោម' },
      { char: 'る', romaji: 'ru', khmerSound: 'រ៉ូ', strokeCount: 1, strokeGuide: '1 គូសដូចលេខ 3 កួចរង្វង់មូលចុងក្រោម', exampleWord: 'くるま', exampleReading: 'Kuruma', exampleKhmer: 'រថយន្ត' },
      { char: 'れ', romaji: 're', khmerSound: 'រ៉េ', strokeCount: 2, strokeGuide: '1 បញ្ឈរឆ្វេង, 2 ដូចលេខ Z កោងចុងស្ដាំ', exampleWord: 'れきし', exampleReading: 'Rekishi', exampleKhmer: 'ប្រវត្តិសាស្ត្រ' },
      { char: 'ろ', romaji: 'ro', khmerSound: 'រ៉ូ', strokeCount: 1, strokeGuide: '1 ដូចលេខ 3 គ្មានកួចរង្វង់ (ខុសពី る)', exampleWord: 'ろうそく', exampleReading: 'Rousoku', exampleKhmer: 'ទៀន' },
    ],
  },
  {
    rowName: 'Wa, Wo, N (わ・を・ん)',
    rowNameKhmer: 'ជួរពិសេស «Wa, Wo, N»',
    letters: [
      { char: 'わ', romaji: 'wa', khmerSound: 'វ៉ា', strokeCount: 2, strokeGuide: '1 បញ្ឈរឆ្វេង, 2 កោងមូលធំ', exampleWord: 'わたし', exampleReading: 'Watashi', exampleKhmer: 'ខ្ញុំ' },
      { char: 'を', romaji: 'wo (o)', khmerSound: 'អូ (ធ្នាក់)', strokeCount: 3, strokeGuide: '1 ផ្ដេក, 2 បញ្ឆិតកាច់, 3 កោងកាត់ក្រោម (ប្រើជាធ្នាក់)', exampleWord: 'みずをのむ', exampleReading: 'Mizu o nomu', exampleKhmer: 'ផឹកទឹក' },
      { char: 'ん', romaji: 'n', khmerSound: 'អ៊ិន (ង/ន)', strokeCount: 1, strokeGuide: '1 គំនូសដូចអក្សរ h កោងរលូន', exampleWord: 'にほん', exampleReading: 'Nihon', exampleKhmer: 'ប្រទេសជប៉ុន' },
    ],
  },
];

/* ========================================================================= */
/* KATAKANA 46 CHARACTERS & GAIRAIGO (ប្រអប់ទី ២)                            */
/* ========================================================================= */
export interface KatakanaLetter {
  char: string;
  romaji: string;
  khmerSound: string;
  exampleLoanword: string;
  wordMeaning: string;
}

export const KATAKANA_GROUPS = [
  {
    row: 'ア行 (A)',
    letters: [
      { char: 'ア', romaji: 'a', khmerSound: 'អា', exampleLoanword: 'アイス (Aisu)', wordMeaning: 'ការ៉េម' },
      { char: 'イ', romaji: 'i', khmerSound: 'អ៊ី', exampleLoanword: 'インク (Inku)', wordMeaning: 'ទឹកថ្នាំ' },
      { char: 'ウ', romaji: 'u', khmerSound: 'អ៊ូ', exampleLoanword: 'ウェブ (Webu)', wordMeaning: 'វេបសាយ' },
      { char: 'エ', romaji: 'e', khmerSound: 'អេ', exampleLoanword: 'エレベーター (Erebētā)', wordMeaning: 'ជណ្តើរយន្ត' },
      { char: 'オ', romaji: 'o', khmerSound: 'អូ', exampleLoanword: 'オレンジ (Orenji)', wordMeaning: 'ផ្លែក្រូច' },
    ],
  },
  {
    row: 'カ行 (Ka)',
    letters: [
      { char: 'カ', romaji: 'ka', khmerSound: 'ខា', exampleLoanword: 'カメラ (Kamera)', wordMeaning: 'ម៉ាស៊ីនថត' },
      { char: 'キ', romaji: 'ki', khmerSound: 'ឃី', exampleLoanword: 'キー (Kī)', wordMeaning: 'កូនសោ' },
      { char: 'ク', romaji: 'ku', khmerSound: 'ឃូ', exampleLoanword: 'クラス (Kurasu)', wordMeaning: 'ថ្នាក់រៀន' },
      { char: 'ケ', romaji: 'ke', khmerSound: 'ខេ', exampleLoanword: 'ケーキ (Kēki)', wordMeaning: 'នំខេក' },
      { char: 'コ', romaji: 'ko', khmerSound: 'ខូ', exampleLoanword: 'コーヒー (Kōhī)', wordMeaning: 'កាហ្វេ' },
    ],
  },
  {
    row: 'サ行 (Sa)',
    letters: [
      { char: 'サ', romaji: 'sa', khmerSound: 'សា', exampleLoanword: 'サラダ (Sarada)', wordMeaning: 'សាឡាត់' },
      { char: 'シ', romaji: 'shi', khmerSound: 'ស៊ី', exampleLoanword: 'シャツ (Shatsu)', wordMeaning: 'អាវសឺមី' },
      { char: 'ス', romaji: 'su', khmerSound: 'ស៊ូ', exampleLoanword: 'スポーツ (Supōtsu)', wordMeaning: 'កីឡា' },
      { char: 'セ', romaji: 'se', khmerSound: 'សេ', exampleLoanword: 'セーター (Sētā)', wordMeaning: 'អាវរងា' },
      { char: 'ソ', romaji: 'so', khmerSound: 'សូ', exampleLoanword: 'ソファ (Sofa)', wordMeaning: 'សាឡុង' },
    ],
  },
  {
    row: 'タ行 (Ta)',
    letters: [
      { char: 'タ', romaji: 'ta', khmerSound: 'ថា', exampleLoanword: 'タクシー (Takushī)', wordMeaning: 'តាក់ស៊ី' },
      { char: 'チ', romaji: 'chi', khmerSound: 'ឈី', exampleLoanword: 'チケット (Chiketto)', wordMeaning: 'សំបុត្រ' },
      { char: 'ツ', romaji: 'tsu', khmerSound: 'ស៊ឹ', exampleLoanword: 'ツアー (Tsuā)', wordMeaning: 'ដំណើរកម្សាន្ត' },
      { char: 'テ', romaji: 'te', khmerSound: 'ថេ', exampleLoanword: 'テレビ (Terebi)', wordMeaning: 'ទូរទស្សន៍' },
      { char: 'ト', romaji: 'to', khmerSound: 'ថូ', exampleLoanword: 'トイレ (Toire)', wordMeaning: 'បន្ទប់ទឹក' },
    ],
  },
  {
    row: 'ナ行 (Na)',
    letters: [
      { char: 'ナ', romaji: 'na', khmerSound: 'ណា', exampleLoanword: 'ナイフ (Naifu)', wordMeaning: 'កាំបិត' },
      { char: 'ニ', romaji: 'ni', khmerSound: 'នី', exampleLoanword: 'ニュース (Nyūsu)', wordMeaning: 'ព័ត៌មាន' },
      { char: 'ヌ', romaji: 'nu', khmerSound: 'នូ', exampleLoanword: 'ヌードル (Nūdoru)', wordMeaning: 'គុយទាវ/មី' },
      { char: 'ネ', romaji: 'ne', khmerSound: 'នេ', exampleLoanword: 'ネクタイ (Nekutai)', wordMeaning: 'ក្រវាត់ក' },
      { char: 'ノ', romaji: 'no', khmerSound: 'ណូ', exampleLoanword: 'ノート (Nōto)', wordMeaning: 'សៀវភៅកត់ត្រា' },
    ],
  },
  {
    row: 'ハ行 (Ha)',
    letters: [
      { char: 'ハ', romaji: 'ha', khmerSound: 'ហា', exampleLoanword: 'ハンバーガー (Hanbāgā)', wordMeaning: 'ហាំប៊ឺហ្គឺ' },
      { char: 'ヒ', romaji: 'hi', khmerSound: 'ហ៊ី', exampleLoanword: 'ヒーター (Hītā)', wordMeaning: 'ម៉ាស៊ីនកម្តៅ' },
      { char: 'フ', romaji: 'fu', khmerSound: 'ហ៊្វូ', exampleLoanword: 'フォーク (Fōku)', wordMeaning: 'សម' },
      { char: 'ヘ', romaji: 'he', khmerSound: 'ហេ', exampleLoanword: 'ヘリコプター (Herikoputā)', wordMeaning: 'ឧទ្ធម្ភាគចក្រ' },
      { char: 'ホ', romaji: 'ho', khmerSound: 'ហូ', exampleLoanword: 'ホテル (Hoteru)', wordMeaning: 'សណ្ឋាគារ' },
    ],
  },
  {
    row: 'マ行 (Ma)',
    letters: [
      { char: 'マ', romaji: 'ma', khmerSound: 'ម៉ា', exampleLoanword: 'マスク (Masuku)', wordMeaning: 'ម៉ាស់' },
      { char: 'ミ', romaji: 'mi', khmerSound: 'មី', exampleLoanword: 'ミルク (Miruku)', wordMeaning: 'ទឹកដោះគោ' },
      { char: 'ム', romaji: 'mu', khmerSound: 'មូ', exampleLoanword: 'ムービー (Mūbī)', wordMeaning: 'ខ្សែភាពយន្ត' },
      { char: 'メ', romaji: 'me', khmerSound: 'មេ', exampleLoanword: 'メニュー (Menyū)', wordMeaning: 'បញ្ជីមុខម្ហូប' },
      { char: 'モ', romaji: 'mo', khmerSound: 'ម៉ូ', exampleLoanword: 'モデル (Moderu)', wordMeaning: 'តារាម៉ូដែល' },
    ],
  },
  {
    row: 'ヤ行 (Ya)',
    letters: [
      { char: 'ヤ', romaji: 'ya', khmerSound: 'យ៉ា', exampleLoanword: 'ヤング (Yangu)', wordMeaning: 'ក្មេងខ្ចី' },
      { char: 'ユ', romaji: 'yu', khmerSound: 'យូ', exampleLoanword: 'ユーザー (Yūzā)', wordMeaning: 'អ្នកប្រើប្រាស់' },
      { char: 'ヨ', romaji: 'yo', khmerSound: 'យ៉ូ', exampleLoanword: 'ヨーグルト (Yōguruto)', wordMeaning: 'យ៉ាអួ' },
    ],
  },
  {
    row: 'ラ行 (Ra)',
    letters: [
      { char: 'ラ', romaji: 'ra', khmerSound: 'រ៉ា', exampleLoanword: 'ラジオ (Rajio)', wordMeaning: 'វិទ្យុ' },
      { char: 'リ', romaji: 'ri', khmerSound: 'រី', exampleLoanword: 'リーダー (Rīdā)', wordMeaning: 'អ្នកដឹកនាំ' },
      { char: 'ル', romaji: 'ru', khmerSound: 'រ៉ូ', exampleLoanword: 'ルール (Rūru)', wordMeaning: 'ច្បាប់ទម្លាប់' },
      { char: 'レ', romaji: 're', khmerSound: 'រ៉េ', exampleLoanword: 'レストラン (Resutoran)', wordMeaning: 'ភោជនីយដ្ឋាន' },
      { char: 'ロ', romaji: 'ro', khmerSound: 'រ៉ូ', exampleLoanword: 'ロボット (Robotto)', wordMeaning: 'មនុស្សយន្ត' },
    ],
  },
  {
    row: 'ワ・ヲ・ン (Wa, Wo, N)',
    letters: [
      { char: 'ワ', romaji: 'wa', khmerSound: 'វ៉ា', exampleLoanword: 'ワイン (Wain)', wordMeaning: 'ស្រាក្រហម' },
      { char: 'ヲ', romaji: 'wo', khmerSound: 'អូ', exampleLoanword: 'ヲ (កម្រប្រើ)', wordMeaning: 'ធ្នាក់' },
      { char: 'ン', romaji: 'n', khmerSound: 'អ៊ិន', exampleLoanword: 'パン (Pan)', wordMeaning: 'នំប៉័ង' },
    ],
  },
];

/* ========================================================================= */
/* AISATSU & JIKOSHOUKAI (ប្រអប់ទី ៣)                                        */
/* ========================================================================= */
export const JAPANESE_GREETINGS = [
  { phrase: 'おはようございます', romaji: 'Ohayou gozaimasu', khmerSound: 'អូហាយ៉ូ ហ្កូហ្សាអ៊ីម៉ាស', meaning: 'អរុណសួស្តី (ពេលព្រឹក ប្រើជាមួយមនុស្សទូទៅ/ចាស់ទុំ)' },
  { phrase: 'こんにちは', romaji: 'Konnichiwa', khmerSound: 'ខុននីឈីវ៉ា', meaning: 'ទិវាសួស្តី / សួស្តី (ពេលថ្ងៃ)' },
  { phrase: 'こんばんは', romaji: 'Konbanwa', khmerSound: 'ខុនបានវ៉ា', meaning: 'សាយណ្ហសួស្តី (ពេលល្ងាច ឬយប់)' },
  { phrase: 'おやすみなさい', romaji: 'Oyasuminasai', khmerSound: 'អូយ៉ាស៊ូមីណាសៃ', meaning: 'រាត្រីសួស្តី (ជូនពរគេងលក់ស្រួល)' },
  { phrase: 'ありがとうございます', romaji: 'Arigatou gozaimasu', khmerSound: 'អារីហ្កាតូ ហ្កូហ្សាអ៊ីម៉ាស', meaning: 'អរគុណច្រើន (គួរសម)' },
  { phrase: 'すみません', romaji: 'Sumimasen', khmerSound: 'ស៊ូមីម៉ាសេន', meaning: 'សូមទោស / អធ្យាស្រ័យ (ប្រើពេលសុំផ្លូវ ឬហៅអ្នករត់តុ)' },
  { phrase: 'ごめんなさい', romaji: 'Gomennasai', khmerSound: 'ហ្កូមេនណាសៃ', meaning: 'សុំទោស (ចំពោះមិត្តភក្តិ ឬកំហុសធម្មតា)' },
  { phrase: 'いただきます', romaji: 'Itadakimasu', khmerSound: 'អ៊ីថាដាឃីម៉ាស', meaning: 'ខ្ញុំទទួលទានហើយ (និយាយមុនពេលញ៉ាំអាហារ)' },
  { phrase: 'ごちそうさまでした', romaji: 'Gochisousama deshita', khmerSound: 'ហ្កូឈីសូសាម៉ា ដេស៊ីថា', meaning: 'អរគុណសម្រាប់អាហារដ៏ឆ្ងាញ់ (និយាយក្រោយញ៉ាំរួច)' },
  { phrase: 'さようなら', romaji: 'Sayounara', khmerSound: 'សាយ៉ូណារ៉ា', meaning: 'លាហើយ (ប្រើពេលបែកគ្នាយូរ)' },
  { phrase: 'またね / じゃあ、また', romaji: 'Mata ne / Jaa, mata', khmerSound: 'ម៉ាតា ណេ / ចា ម៉ាតា', meaning: 'ជួបគ្នាពេលក្រោយ (និយាយជាមួយមិត្តភក្តិ)' },
];

export const JAPANESE_INTRO_DIALOGUE = [
  { speaker: 'A', speakerName: 'Tanaka (田中)', japanese: '初めまして。田中です。よろしくお願いします。', romaji: 'Hajimemashite. Tanaka desu. Douzo yoroshiku onegaishimasu.', khmer: 'រីករាយដែលបានស្គាល់។ ខ្ញុំឈ្មោះ Tanaka។ សូមជួយណែនាំផង។' },
  { speaker: 'B', speakerName: 'Sokha (ソカ)', japanese: '初めまして。ソカです。カンボジアから来ました。どうぞよろしくお願いします。', romaji: 'Hajimemashite. Soka desu. Kambojia kara kimashita. Douzo yoroshiku onegaishimasu.', khmer: 'រីករាយដែលបានស្គាល់។ ខ្ញុំឈ្មោះ Sokha។ ខ្ញុំមកពីប្រទេសកម្ពុជា។ សូមមេត្តាផ្ញើខ្លួនផង។' },
  { speaker: 'A', speakerName: 'Tanaka (田中)', japanese: 'ソカさんは学生ですか。', romaji: 'Soka-san wa gakusei desu ka.', khmer: 'តើលោក Sokha ជានិស្សិតមែនទេ?' },
  { speaker: 'B', speakerName: 'Sokha (ソカ)', japanese: 'はい、学生です。日本語を勉強しています。', romaji: 'Hai, gakusei desu. Nihongo o benkyou shite imasu.', khmer: 'បាទ ខ្ញុំជានិស្សិត។ ខ្ញុំកំពុងរៀនភាសាជប៉ុន។' },
];
