import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      siteTitle: 'Japanese Student Association at UW-Madison',
      nav: {
        home: 'Home',
        about: 'About',
        events: 'Events',
        board: 'Board',
        faq: 'FAQ',
        careers: 'Careers',
        contact: 'Contact',
      },
      lang: {
        en: 'EN',
        ja: 'JA',
      },
      common: {
        currentFocus: 'Current Focus',
        noSavedEvents: 'No saved events yet',
        savedEventsPreview: 'Saved events',
        savedSnapshot: 'Your List',
        at: 'at',
      },
      categories: {
        cultural: 'Cultural',
        language: 'Language',
        professional: 'Professional',
        community: 'Community',
      },
      roles: {
        president: 'President',
        vicePresident: 'Vice President',
        eventsChair: 'Events Chair',
        coPresident: 'Co-President',
        coPresidentFinance: 'Co-President & Finance Officer',
        socialMediaCoordinator: 'Social Media Coordinator',
        eventCoordinator: 'Event Coordinator',
        globalRelationsCoordinator: 'Global Relations Coordinator',
        globalRelationsIntern: 'Global Relations Intern',
        communicationsCoordinator: 'Communications Coordinator',
      },
      newsletter: {
        eyebrow: 'Newsletter',
        title: 'Stay updated with JSA',
        description:
          'Sign up for our newsletter to hear about upcoming events, announcements, and community updates.',
        button: 'Sign Up',
      },
      home: {
        eyebrow: 'UW-Madison Registered Student Organization (RSO)',
        title: 'For centering Japanese community',
        description:
          'The Japanese Student Association is a social and cultural organization intended to spread Japanese culture and contribute to diversity on the UW-Madison campus.',
        ctaEvents: 'Explore Events',
        ctaAbout: 'Learn About JSA',
        culturalTitle: 'Cultural Community',
        culturalBody:
          'Highlight traditions, seasonal celebrations, and casual gatherings that help students feel at home.',
        languageTitle: 'Language Exchange',
        languageBody:
          'Create accessible ways for students to practice Japanese conversation and build confidence.',
        careerTitle: 'Career Support',
        careerBody:
          'Share opportunities, alumni connections, and professional events tailored to international and domestic students.',
        featuredEyebrow: 'Featured Progress',
        featuredTitle: 'Upcoming events already staged on the site',
        viewAll: 'View All Events',
      },
      about: {
        eyebrow: 'About JSA',
        title: 'A student organization centered on belonging and exchange through Japan.',
        description:
          'The site introduces what JSA offers to Japanese students, language learners, and anyone hoping to engage with Japanese culture at UW-Madison.',
        missionTitle: 'Mission',
        missionBody:
          'Support students through events that make campus feel smaller, warmer, and more connected.',
        hostTitle: 'What We Host',
        hostBody:
          'Cultural programs, conversation tables, social mixers, and professional development opportunities.',
        communityEyebrow: 'UW and Japan',
        communityTitle: 'Japanese student community at UW-Madison',
        communityDescription:
          'Using enrollment data from the Office of the Registrar, this section shows a snapshot of students from Japan currently represented across the university.',
        communityTotalLabel: 'Students from Japan',
        communityTotalContext: 'Total across the enrollment rows below',
        undergraduateLabel: 'Undergraduate students',
        undergraduateContext: 'Freshman through senior levels',
        graduateLabel: 'Graduate students',
        graduateContext: 'Master’s and PhD levels',
        sourceLabel: 'Source',
        sourceValue:
          'Office of the Registrar, University of Wisconsin-Madison (Enrollment Reports)',
        academicLevels: {
          freshman: 'Freshman',
          sophomore: 'Sophomore',
          junior: 'Junior',
          senior: 'Senior',
          masters: 'Masters',
          phd: 'PhD',
          specialStudent: 'Special students (exchange students, etc.)',
        },
        table: {
          academicLevel: 'Academic Level / Program',
          count: 'Students',
        },
      },
      board: {
        eyebrow: 'Board',
        title: 'Meet the student leaders shaping this community.',
        description:
          'The board page gives the website a human face and helps visitors understand who organizes programs and support.',
        yearLabel: 'Board member directory',
        yearDescription: 'Meet the officers serving JSA during the 2025-2026 academic year.',
      },
      events: {
        eyebrow: 'Events',
        title: 'Find upcoming JSA events here.',
        description:
          'Explore upcoming gatherings, cultural programs, and community events hosted by JSA. Search by keyword, save events for later, or add them directly to Google Calendar.',
        comingSoonTitle: 'Events are being prepared',
        comingSoonBody:
          'Event details will appear here as soon as they are added to the JSA calendar.',
        loading: 'Loading events...',
        configMissing:
          'The Google Calendar API key has not been configured yet. Add VITE_GOOGLE_CALENDAR_API_KEY to enable live event loading.',
        fetchError:
          'Events could not be loaded from Google Calendar. Please check the calendar settings or try again later.',
        emptyTitle: 'No events found',
        emptyBody: 'Try changing the search term.',
        search: 'Search events',
        searchPlaceholder: 'Search by keyword',
        category: 'Category',
        all: 'All',
        savedCount_one: 'You currently have {{count}} saved event for later.',
        savedCount_other: 'You currently have {{count}} saved events for later.',
        noSavedBody:
          'Use the save button above to keep track of events you want to revisit.',
        save: 'Save Event',
        saved: 'Saved',
        removeSaved: 'Remove',
        addToCalendar: 'Add to Calendar',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Common questions from new and prospective members.',
        description:
          'This page helps reduce friction for visitors who want to join events, practice Japanese, or learn what to expect.',
        q1: 'Who can be part of JSA?',
        a1: 'JSA includes undergraduates, graduate and professional students, Japanese American students, students from Japan, exchange students, and students with no Japanese background at all. If you are interested, you are welcome here.',
        q2: 'Are there any requirements to join?',
        a2: 'Not really. JSA is open to all UW-Madison students. You do not need to be Japanese, and you do not need to speak Japanese. There is currently no membership fee, no formal sign-up system, and no required number of events you have to attend.',
        q3: "Can I still join if I don't speak Japanese or if I'm not Japanese?",
        a3: 'Yes, absolutely. JSA is meant to be a welcoming space for students with all kinds of backgrounds, identities, and language levels. If you are unsure about whether JSA is a good fit, feel free to reach out.',
        q4: 'How often does JSA host events?',
        a4: 'We usually host events every other week during the fall and spring semesters. The best way to keep up with what is happening is to check our Instagram, email updates, or the Events page.',
        q5: 'How do I come to an event for the first time? Can I join mid-semester?',
        a5: 'You can start coming to events at any point in the semester. We share times and locations through our website, Instagram, email, and other platforms. Feel free to join at whatever pace feels comfortable. JSA is always happy to welcome new people, and if you are nervous about coming for the first time, you can message us and we will help.',
        q6: 'What kinds of events does JSA put on?',
        a6: 'JSA hosts a wide variety of events that introduce Japanese culture and help students build community in Madison. That can include Japanese food events, movie nights, outings around Madison, seasonal celebrations, and recurring traditions like Spring Festival. We also host support events for students interested in working in Japan. You can find more details on the Events page.',
        q7: 'Who is the JSA advisor?',
        a7: 'Associate Professor Naomi Geyer of the Japanese Language and Linguistics from the Department of East Asian Languages and Literature.',
      },
      careers: {
        eyebrow: 'Careers',
        title: 'Career support for students exploring Japan-related pathways.',
        description:
          "JSA supports students interested in Japan-related careers by sharing opportunities, hosting events, and connecting them with our partners.",
        jelperClubTitle: 'Jelper Club',
        jelperClubBody:
          'A platform that supports the world’s top students who are interested in pursuing professional opportunities and engaging in authentic cultural experiences in Japan regardless of Japanese proficiency.',
        tkfTitle: 'TKF Global',
        tkfBody:
          'A student-led career support community for students. Features a large network of mentors who have secured offers from top-tier companies, providing the most real and practical job-hunting advice available. (Advanced-level Japanese proficiency required.)',
        careerForumTitle: 'Career Forum (By Career-tasu inc.)',
        careerForumBody:
          'A staple tool to find jobs, not just for students who have study abroad experience but also for Japanese-English bilingual professionals. The events have expanded from Boston to Los Angeles, Tokyo, Osaka, and London, making it the prefect place for global companies to meet and connect with bilingual talent.',
        jetTitle: 'JET Program',
        jetBody:
          'A competitive employment opportunity that allows professionals to live and work in cities, towns, and villages throughout Japan. Most participants serve as Assistant Language Teachers (ALTs) and work in public and private schools throughout Japan; some work as Coordinators for International Relations (CIRs) as interpreters/translators.',
        jrCentralTitle: 'JR Central Internship',
        jrCentralBody:
          'Gives students incredible insights into one of the world’s leading high-speed-rail operators as well as the professional culture of Japan. The internship, developed by University of Wisconsin–Madison alumnus and JR Central Chairman Emeritus Yoshiyuki Kasai, allows two to three students to spend eight weeks in various roles with the company',
		jFindTitle: 'J-Find Visa',
        jFindBody:
          'The Future Creation Talent System (J-Find) allows individuals who have graduated from excellent overseas universities, including UW-Madison, to be granted the "Designated Activities" (Future Creation Talent) residence status when engaging in "job-seeking activities" or "preparation activities for starting a business" in Japan, enabling them to stay in Japan for up to two years.'
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Reach out with questions, collaboration ideas, or event interest.',
        description:
          'Use this form to contact JSA about membership, events, collaboration, sponsorship, or general questions.',
        comingSoonTitle: 'Contact page coming soon',
        comingSoonBody:
          'This page will be implemented later with a contact form and additional communication details.',
        formTitle: 'Website Inquiry Form',
        formFallback: 'If the custom form does not work, open the original Google Form in a new tab.',
        openForm: 'Open Google Form',
        successTitle: 'Thank you for reaching out.',
        successBody: 'Your inquiry has been sent to the JSA Google Form.',
        submitFrameTitle: 'Google Form submission frame',
        draft:
          'This form now keeps a local draft, so reloading the page does not immediately erase your progress.',
        name: 'Name',
        email: 'Email',
        affiliation: 'Affiliation',
        inquiryType: 'Inquiry Type',
        subject: 'Subject',
        message: 'Message',
        placeholderName: 'Your name',
        placeholderEmail: 'name@wisc.edu',
        placeholderAffiliation: 'UW-Madison student, organization, company, etc.',
        placeholderSubject: 'What is this about?',
        placeholderMessage: 'How can JSA help?',
        selectPlaceholder: 'Select one',
        googleNotice:
          'This custom form submits responses to Google Forms. Please do not include passwords or sensitive personal information.',
        inquiryOptions: {
          general: 'General Inquiry',
          eventParticipation: 'Event Participation',
          collaboration: 'Collaboration / Sponsorship',
          membership: 'Membership',
          other: 'Other',
        },
        invalidName: 'Please enter your name.',
        invalidEmail: 'Please provide a valid email address.',
        invalidMessage: 'Please include a message.',
        submit: 'Send Inquiry',
      },
    },
  },
  ja: {
    translation: {
      siteTitle: 'ウィスコンシン大学マディソン校 日本学生会',
      nav: {
        home: 'ホーム',
        about: '団体紹介',
        events: 'イベント',
        board: '役員紹介',
        faq: 'FAQ',
        careers: 'キャリア',
        contact: 'お問い合わせ',
      },
      lang: {
        en: 'EN',
        ja: 'JA',
      },
      common: {
        currentFocus: '現在の重点',
        noSavedEvents: 'まだ保存されたイベントはありません',
        savedEventsPreview: '保存したイベント',
        savedSnapshot: 'マイリスト',
        at: '',
      },
      categories: {
        cultural: '文化',
        language: '言語',
        professional: 'キャリア',
        community: 'コミュニティ',
      },
      roles: {
        president: '会長',
        vicePresident: '副会長',
        eventsChair: 'イベント担当',
        coPresident: '共同会長',
        coPresidentFinance: '共同会長・会計担当',
        socialMediaCoordinator: 'ソーシャルメディア担当',
        eventCoordinator: 'イベント担当',
        globalRelationsCoordinator: 'グローバルリレーションズ担当',
        globalRelationsIntern: 'グローバルリレーションズ・インターン',
        communicationsCoordinator: '広報担当',
      },
      newsletter: {
        eyebrow: 'Newsletter',
        title: 'JSA の最新情報を受け取る',
        description:
          'イベント情報やお知らせ、コミュニティの最新情報をニュースレターで受け取れます。',
        button: '登録する',
      },
      home: {
        eyebrow: 'UW-Madison Registered Student Organization (RSO)',
        title: '日本コミュニティの中心として',
        description:
          'ウィスコンシン大学マディソン校・日本学生会は、キャンパス全体における日本人コミュニティ構築および日本文化の普及を目指した大学公認の学生団体です。',
        ctaEvents: 'イベントを見る',
        ctaAbout: 'JSAについて',
        culturalTitle: '文化コミュニティ',
        culturalBody: '季節行事や交流イベントを通じて、安心してつながれる場を紹介します。',
        languageTitle: '言語交流',
        languageBody: '日本語会話の練習機会を作り、学習者が自信を持てる環境を目指します。',
        careerTitle: 'キャリア支援',
        careerBody: '卒業生とのつながりやキャリア機会を、留学生と現地学生の双方へ共有します。',
        featuredEyebrow: '進捗ハイライト',
        featuredTitle: '現在サイト上で確認できるイベント',
        viewAll: 'すべてのイベント',
      },
      about: {
        eyebrow: '団体紹介',
        title: '日本を通じたつながりを大切にする学生団体です。',
        description:
          'JSAの組織について紹介します。',
        missionTitle: 'ミッション',
        missionBody:
          'イベントや交流を通じて、学生がより身近で温かいコミュニティを感じられるよう支えます。',
        hostTitle: '主な活動',
        hostBody:
          '文化イベント、会話テーブル、交流会、キャリア支援イベントなどを企画しています。',
        communityEyebrow: 'UW and Japan',
        communityTitle: 'UW-Madison における日本人学生コミュニティ',
        communityDescription:
          '教務の在籍データをもとに、日本国籍の学生が大学内でどのように在籍しているかの一例をまとめています。',
        communityTotalLabel: '日本国籍の学生数',
        communityTotalContext: '下記の在籍区分を合計した人数',
        undergraduateLabel: '学部生',
        undergraduateContext: '1年生から4年生まで',
        graduateLabel: '大学院生',
        graduateContext: '修士課程・博士課程',
        sourceLabel: '出典',
        sourceValue:
          'Office of the Registrar, University of Wisconsin-Madison（Enrollment Reports）',
        academicLevels: {
          freshman: '1年生',
          sophomore: '2年生',
          junior: '3年生',
          senior: '4年生',
          masters: '修士課程',
          phd: '博士課程',
          specialStudent: '特別生（交換留学生など）',
        },
        table: {
          academicLevel: '学年・課程',
          count: '人数',
        },
      },
      board: {
        eyebrow: '役員紹介',
        title: 'コミュニティを支える学生リーダーたちです。',
        description:
          '役員ページでは、誰がイベントや学生支援を担っているのかをわかりやすく伝えます。',
        yearLabel: '役員年度一覧',
        yearDescription: '2025-2026 学年度の JSA 役員メンバーです。',
      },
      events: {
        eyebrow: 'イベント',
        title: 'JSAのイベント情報',
        description:
          'JSA が主催する交流イベント、文化プログラム、コミュニティ向けイベントを確認できます。キーワード検索、保存、Google カレンダーへの追加にも対応しています。',
        comingSoonTitle: 'イベント情報を準備中です',
        comingSoonBody:
          'JSA のカレンダーにイベントが追加され次第、こちらに表示されます。',
        loading: 'イベントを読み込んでいます...',
        configMissing:
          'Google Calendar API キーがまだ設定されていません。ライブイベントを読み込むには VITE_GOOGLE_CALENDAR_API_KEY を追加してください。',
        fetchError:
          'Google Calendar からイベントを読み込めませんでした。カレンダー設定を確認するか、後でもう一度お試しください。',
        emptyTitle: '該当するイベントがありません',
        emptyBody: '検索キーワードを変更してみてください。',
        search: 'イベント検索',
        searchPlaceholder: 'キーワードで検索',
        category: 'カテゴリ',
        all: 'すべて',
        savedCount_one: '保存済みイベントが {{count}} 件あります。',
        savedCount_other: '保存済みイベントが {{count}} 件あります。',
        noSavedBody: '気になるイベントは保存して、あとから簡単に確認できます。',
        save: 'イベントを保存',
        saved: '保存済み',
        removeSaved: '削除',
        addToCalendar: 'カレンダーに追加',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'よくある質問',
        description:
          'ここに記載のない質問はお気軽にお問い合わせください。',
        q1: 'JSA にはどのような人が参加していますか？',
        a1: 'この団体には、学部生と大学院生・専門職大学院生の両方が参加しています。JSA のメンバーには、日系アメリカ人、日本からの留学生、交換留学生、日本人以外の学生も含まれています。JSA に興味のある方であれば、どなたでも歓迎しています。',
        q2: '入会条件などはありますか？',
        a2: 'この団体はウィスコンシン大学マディソン校のすべての学生の参加を歓迎しております。日本人である必要も、日本語を話せる必要もありません。現在、会費は必要ありません。また、入会制度などは特になく、特定のイベントやミーティングへの参加も必須ではありません。',
        q3: '日本語を話せなかったり、日本人でなくても、JSA に参加できますか？',
        a3: 'もちろんです。JSA は、言語能力やアイデンティティに関わらず、すべての学生のための団体を目指しています。不安なことがあれば、気軽にご連絡ください。',
        q4: 'JSAはどのくらいの頻度でイベントを実施していますか？',
        a4: '秋学期と春学期に隔週でイベントを開催しています。Instagram、メール、または今後のイベントページをチェックしていただければ、最新のイベント情報を確認できます。',
        q5: '初めてイベントに参加するにはどうすればよいですか？学期の途中からでも参加できますか？',
        a5: 'どの時期からでもイベントに参加できます。ウェブサイト、Instagram、メールなどから、イベントの開催場所や日時を確認することが可能です。無理のない範囲でご気軽にご参加ください。JSAは、新しいメンバーの皆様をいつでも歓迎しています。参加するのが不安な場合は、メールや Instagram でご連絡していただければ、さらに詳細にご案内できます。',
        q6: 'JSA ではどのようなイベントを開催していますか？',
        a6: 'JSA では、日本文化の紹介とマディソンの学生のためのさまざまなイベントを開催しています。日本食に関するイベント、映画鑑賞会、マディソン周辺へのお出かけ、日本の季節行事など、幅広い内容となっています。また、春祭りのような毎年恒例のイベントもあります。また、日本への就職希望者に向けた支援イベントもあります。（一部日本語能力が参加条件となるものもあります。）詳しくは イベントページをご覧ください。',
        q7: 'JSAのアドバイザーは誰ですか？',
        a7: '東アジア言語文学科 日本語学・言語学分野の Naomi Geyer 准教授です。',
      },
      careers: {
        eyebrow: 'キャリア',
        title: '日本に関わる進路を考える学生向けのキャリア支援です。',
        description:
          'JSA では、日本に関わるキャリアに興味のある学生に向けて、機会の共有、イベントの開催、外部団体とのつながりづくりを通じたサポートを行っています。',
        jelperClubTitle: 'Jelper Club',
        jelperClubBody:
          '日本語力に関係なく、日本でのキャリア形成や本格的な文化体験に関心のある優秀な学生を支援するプラットフォームです。（正規生のみ対象）',
        tkfTitle: 'TKF Global',
        tkfBody:
          '学生主体のキャリア支援コミュニティです。トップ企業から内定を得たメンターとの広いネットワークがあり、実践的な就職活動アドバイスを得られます。（上級レベルの日本語力が必要、正規生のみ対象）',
        careerForumTitle: 'キャリアフォーラム',
        careerForumBody:
          '留学経験のある学生だけでなく、日英バイリンガルの社会人にも役立つ就職情報サービスです。イベントはボストンだけでなく、ロサンゼルス、東京、大阪、ロンドンにも広がっており、グローバル企業とバイリンガル人材をつなぐ場となっています。',
        jetTitle: 'JET Program',
        jetBody:
          '日本各地の都市や町、村で働きながら生活できる競争率の高いプログラムです。多くの参加者は ALT（外国語指導助手）として学校で勤務し、一部は CIR（国際交流員）として通訳・翻訳などの業務を担当します。（日本国籍者は対象外）',
        jrCentralTitle: 'JR東海インターンシップ',
        jrCentralBody:
          '世界有数の高速鉄道会社の一つである JR東海と、日本の職業文化について深く知ることができるインターンシップです。UW–Madison 卒業生であり JR Central 名誉会長の葛西敬之氏の支援のもと設計され、毎年 2〜3 名の学生が 8 週間にわたりさまざまな業務を経験できます。',
        jFindTitle: '未来創造人材制度（J-Find）',
        jFindBody:
          '未来創造人材制度（J-Find）は、UW–Madison を含む優秀な海外大学を卒業した人を対象に、日本での「就職活動」や「起業準備活動」を行う場合、「特定活動（未来創造人材）」の在留資格が付与され、最長 2 年間日本に滞在できる制度です。',
      },
      contact: {
        eyebrow: 'お問い合わせ',
        title: '質問やコラボ提案、イベント参加の相談はこちらから。',
        description:
          '入会、イベント、コラボレーション、スポンサーシップ、その他のご質問はこちらのフォームからお問い合わせください。',
        comingSoonTitle: 'お問い合わせページは準備中です',
        comingSoonBody:
          'このページは今後実装予定です。お問い合わせフォームや連絡先情報を追加していきます。',
        formTitle: 'お問い合わせフォーム',
        formFallback: '自作フォームがうまく動かない場合は、元の Google Form を新しいタブで開いてください。',
        openForm: 'Google Form を開く',
        successTitle: 'お問い合わせありがとうございます。',
        successBody: 'JSA の Google Form に送信されました。',
        submitFrameTitle: 'Google Form 送信用フレーム',
        draft:
          'このフォームはローカルに下書きを保存するため、リロードしても入力内容が消えにくくなっています。',
        name: '名前',
        email: 'メールアドレス',
        affiliation: '所属',
        inquiryType: 'お問い合わせ種別',
        subject: '件名',
        message: 'メッセージ',
        placeholderName: 'お名前',
        placeholderEmail: 'name@wisc.edu',
        placeholderAffiliation: 'UW-Madison 学生、団体名、企業名など',
        placeholderSubject: 'お問い合わせの件名',
        placeholderMessage: 'どのようなご相談ですか？',
        selectPlaceholder: '選択してください',
        googleNotice:
          'この自作フォームは Google Form に回答を送信します。パスワードや機密性の高い個人情報は入力しないでください。',
        inquiryOptions: {
          general: '一般的な質問',
          eventParticipation: 'イベント参加',
          collaboration: '企業・団体連携 / スポンサーシップ',
          membership: '入会について',
          other: 'その他',
        },
        invalidName: '名前を入力してください。',
        invalidEmail: '有効なメールアドレスを入力してください。',
        invalidMessage: 'メッセージを入力してください。',
        submit: '送信する',
      },
    },
  },
} as const

const savedLanguage = window.localStorage.getItem('jsa-language')
const browserLanguage = navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en'

void i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage === 'ja' || savedLanguage === 'en' ? savedLanguage : browserLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
