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
        exchange: 'Study Abroad',
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
        noSavedEvents: 'No saved events yet',
        savedEventsPreview: 'Saved events',
        savedSnapshot: 'Your saved list',
      },
      categories: {
        career: 'Career',
        communityCulture: 'Community & Culture',
        collaborations: 'Collaborations',
        external: 'External',
      },
      roles: {
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
        title: 'Stay up to date with JSA',
        description:
          'Sign up for our newsletter to hear about upcoming events, announcements, and community updates.',
        button: 'Sign up',
      },
      home: {
        eyebrow: 'UW-Madison Registered Student Organization',
        title: 'A home for the Japanese community',
        description:
          'The Japanese Student Association is a social and cultural organization that shares Japanese culture and helps build a more connected, diverse UW-Madison campus.',
        ctaEvents: 'Explore Events',
        ctaAbout: 'Learn About JSA',
        culturalTitle: 'Cultural Community',
        culturalBody:
          'We celebrate traditions, seasonal events, and casual gatherings that help students feel at home.',
        languageTitle: 'Language Exchange',
        languageBody:
          'We create approachable spaces for students to practice Japanese conversation and build confidence.',
        careerTitle: 'Career Support',
        careerBody:
          'We share opportunities, alumni connections, and professional events for both international and domestic students.',
      },
      about: {
        eyebrow: 'About JSA',
        title: 'A student organization for belonging, exchange, and connection through Japan.',
        description:
          'Learn how JSA supports Japanese students, language learners, and anyone hoping to connect with Japanese culture at UW-Madison.',
        storyTitle: 'JSA at UW-Madison',
        storyP1:
          'The Japanese Student Association (JSA) at UW-Madison was founded in 2014. Although the Japanese student population is relatively small, UW-Madison has one of the largest Japanese language programs in the Midwest, with around 400 learners. JSA supports both the Japanese student community and students learning Japanese through campus activities and collaboration with the Japanese program.',
        storyP2:
          'UW-Madison has a long relationship with Japan. The university has developed research partnerships, study abroad pathways, and international internships, and it maintains exchange agreements with universities such as Waseda, Keio, and Kyoto University.',
        storyP3:
          'JSA is open to undergraduate, graduate, and professional students from all backgrounds. Through monthly events and cultural exchange programs, members can learn about Japanese culture and build strong connections on campus.',
        storyP4:
          'Activities include Japanese meals, karaoke, movie nights, and discussion events. We focus on creating a friendly space where people can learn from one another.',
        storyP5:
          'JSA aims to help students build both academic and social connections through Japanese culture. UW-Madison also offers Japan-related opportunities such as the JR Central internship and alumni networking. For details, please visit our Events and Contact pages.',
        missionTitle: 'Mission',
        missionBody:
          'We support students through events that make campus feel smaller, warmer, and more connected.',
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
          'Meet the officers who organize JSA programs, events, and student support.',
        yearLabel: 'Board member directory',
        yearDescription: 'Meet the officers serving JSA during the 2025-2026 academic year.',
      },
      events: {
        eyebrow: 'Events',
        title: 'See what is coming up at JSA.',
        description:
          'Explore upcoming gatherings, cultural programs, and community events hosted by JSA. Search by keyword, save events for later, or add them directly to Google Calendar.',
        loading: 'Loading events...',
        configMissing:
          'Calendar configuration is incomplete. Add VITE_GOOGLE_CALENDAR_API_KEY and category calendar IDs (VITE_GOOGLE_CALENDAR_ID_CAREER, VITE_GOOGLE_CALENDAR_ID_COMMUNITY_CULTURE, VITE_GOOGLE_CALENDAR_ID_COLLABORATIONS, VITE_GOOGLE_CALENDAR_ID_EXTERNAL).',
        fetchError:
          'Events could not be loaded from Google Calendar. Please check the calendar settings or try again later.',
        emptyTitle: 'No events found',
        emptyBody: 'Try changing the search term.',
        search: 'Search events',
        searchPlaceholder: 'Search by keyword',
        category: 'Category',
        all: 'All',
        dateFilter: 'Date',
        allDates: 'All Dates',
        today: 'Today',
        thisWeek: 'This Week',
        thisMonth: 'This Month',
        customRange: 'Custom Range',
        startDate: 'Start Date',
        endDate: 'End Date',
        savedCount_one: 'You have {{count}} saved event.',
        savedCount_other: 'You have {{count}} saved events.',
        noSavedBody:
          'Use the save button above to keep track of events you want to revisit.',
        save: 'Save Event',
        saved: 'Saved',
        removeSaved: 'Remove',
        addToCalendar: 'Add to Calendar',
      },
      exchange: {
        eyebrow: 'Exchange & Study Abroad',
        title: 'For exchange students and students considering study abroad.',
        description:
          'This section helps incoming exchange students, visiting students, and UW-Madison students exploring study abroad opportunities connected to Japan.',
        considering: {
          eyebrow: 'Considering UW-Madison',
          heroHeadline:
            'Study at a top U.S. public university and build a real support network.',
          whyTitle: 'Why UW-Madison',
          whyBody:
            'UW-Madison is a strong choice if you want both academic quality and a practical student-life experience. You will find globally recognized programs, active research opportunities, and a large campus community where international students can meet peers quickly.',
          pillar1Title: 'Top-Ranked Public University',
          pillar1Body: 'Consistently recognized among the strongest U.S. public universities.',
          pillar2Title: 'Strong Academics & Research',
          pillar2Body: 'Leading programs with research labs and project-based learning.',
          pillar3Title: 'Vibrant Community',
          pillar3Body: 'A large student network with active organizations and events.',
          pillar4Title: 'Beautiful Campus & Location',
          pillar4Body: 'Lakeside campus life in a safe and student-friendly college city.',
          quickFactsTitle: 'Quick Facts',
          quickFact1:
            'Ranked around #36 overall and #12 among U.S. public universities in the 2026 U.S. News rankings.',
          quickFact1b:
            'Consistently recognized as one of the top public universities in the United States.',
          quickFact2:
            'Education is ranked around the No.1 among U.S.universities (in the latest U.S. News rankings).',
          quickFact4:
            'Large university scale means many course choices, student organizations, and campus resources, but you should expect to plan early for popular classes.',
          quickFact5:
            'Madison, Wisconsin is a safe, student-focused capital city with strong quality of life.',
          academicsTitle: 'Academics',
          academicsBody:
            'Strong options include Education,Computer Science, Engineering, and Business, with opportunities to join labs, design teams, and career-focused events. Some gateway courses are challenging, and intro classes can be large, so it helps to use office hours, study groups, and advising early.',
          studentLifeTitle: 'Student Life',
          studentLifeBody:
            'Housing costs vary by location and style, but many students budget roughly $800-$1,500/month for rent. Groceries and meals are manageable with planning, and campus food options are broad. Madison winters are serious: snow, wind, and below-freezing days are normal, so a proper coat, boots, and layers are essential for daily life.',
          whyJsaTitle: 'Why JSA',
          whyJsaBody:
            'JSA helps exchange and international students find people quickly, ask practical questions, and feel less isolated in the first months. From events to everyday advice, you are not expected to figure everything out alone.',
          voicesTitle: 'Student Voices',
          voice1:
            '"My first semester was hard academically, but joining a student group made Madison feel smaller and friendlier."',
          voice2:
            '"Winter surprised me, but once I bought proper gear, campus life became much easier."',
          voice3:
            '"The classes are demanding, but I gained practical skills and better confidence in English discussion."',
          ctaEyebrow: 'Next Step',
          ctaTitle: 'If this feels like the right direction, start preparing early.',
          ctaBody:
            'Compare your course goals, budget, and climate preferences now, then move to "Preparing for UW-Madison" to build your checklist.',
        },
        subnavConsidering: 'Considering UW-Madison',
        subnavPreparing: 'Preparing for UW-Madison',
        subnavArriving: 'Arriving in Madison',
        subnavResources: 'Current Students / Resources',
        preparingEyebrow: 'Before Departure',
        preparingTitle: 'Preparing for UW-Madison',
        preparingDescription:
          'Plan the essentials early, including housing, academics, visa timing, and the support networks you will use after arrival.',
        preparingHousingTitle: 'Housing',
        preparingHousingBody:
          'Start housing research early. Compare on-campus options and off-campus leases, and check move-in dates, contract terms, and commuting time before you decide.',
        preparingCoursesTitle: 'Courses',
        preparingCoursesBody:
          'Draft a realistic course plan with your home university requirements in mind. Some high-demand classes fill quickly, so prepare alternatives before registration opens.',
        preparingVisaTitle: 'Visa',
        preparingVisaBody:
          'Track visa timelines carefully from DS-2019/I-20 issuance through interview scheduling and entry deadlines. Keep digital and printed copies of key documents.',
        preparingFinanceTitle: 'Finance',
        preparingFinanceBody:
          'Build a monthly budget for rent, food, transport, books, and winter gear. Confirm how you will handle banking, card fees, and emergency expenses in the U.S.',
        preparingEssentialsTitle: 'Essentials',
        preparingEssentialsBody:
          'Prepare practical basics: health insurance confirmation, medication refills, weather-appropriate clothing, SIM plan, and important campus contacts for your first month.',
        arrivingEyebrow: 'First Weeks On Campus',
        arrivingTitle: 'Arriving in Madison',
        arrivingDescription:
          'Use your first weeks to settle your routines, build community, and connect with events and organizations that make campus life easier.',
        firstWeeksTitle: 'Your First Weeks',
        firstWeeksBody:
          'In the first few weeks, focus on setting up daily essentials, learning how campus works, and finding a few people or places you can return to. You do not have to figure everything out at once.',
        campusLifeTitle: 'Campus Life',
        campusLifeBody:
          'Get familiar with your class buildings, libraries, dining options, bus routes, and student services. Small routines make the campus feel much easier to navigate.',
        communityTitle: 'Finding Community',
        communityBody:
          'Student organizations, language tables, and cultural events are some of the easiest ways to meet people. JSA events are open to students who want a friendly place to start.',
        languageTitle: 'Language Support',
        languageBody:
          'Whether you want to practice English, Japanese, or both, conversation-based events can help you build confidence and meet people naturally.',
        resourcesEyebrow: 'Practical Resources',
        resourcesTitle: 'Current Students / Resources',
        resourcesDescription:
          'Use these pages and channels to find events, common answers, career opportunities, and direct support from JSA.',
        ctaEvents: 'View Events',
        ctaFaq: 'Read the FAQ',
        ctaContact: 'Contact JSA',
        beforeArrivalBody:
          'Start by checking housing, course planning, visa timelines, and what kind of support network you want once you get to Madison.',
        supportBody:
          'If you are unsure where to start, the best next step is to look through upcoming events, read the FAQ, or reach out through the contact form.',
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
          'A platform for high-achieving students interested in professional opportunities and authentic cultural experiences in Japan, regardless of Japanese proficiency.',
        tkfTitle: 'TKF Global',
        tkfBody:
          'A student-led career support community with a large mentor network of students and graduates who have received offers from top-tier companies. It provides practical, firsthand job-search advice. (Advanced-level Japanese proficiency required.)',
        careerForumTitle: 'Career Forum (by Career-tasu, Inc.)',
        careerForumBody:
          'A well-established career resource for students with study abroad experience and Japanese-English bilingual professionals. Its events now take place in Boston, Los Angeles, Tokyo, Osaka, and London, creating opportunities for global companies and bilingual talent to connect.',
        jetTitle: 'JET Program',
        jetBody:
          'A competitive employment opportunity that allows participants to live and work in cities, towns, and villages throughout Japan. Most serve as Assistant Language Teachers (ALTs) in public and private schools; some work as Coordinators for International Relations (CIRs), often supporting interpretation and translation.',
        jrCentralTitle: 'JR Central Internship',
        jrCentralBody:
          'This internship gives students a close look at one of the world’s leading high-speed-rail operators and the professional culture of Japan. Developed by University of Wisconsin–Madison alumnus and JR Central Chairman Emeritus Yoshiyuki Kasai, it allows two to three students to spend eight weeks in various roles with the company.',
        jFindTitle: 'J-Find Visa',
        jFindBody:
          'The Future Creation Individual Visa (J-Find) allows graduates of highly ranked overseas universities, including UW-Madison, to receive "Designated Activities" residence status while job hunting or preparing to start a business in Japan, enabling them to stay for up to two years.',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Reach out with questions, collaboration ideas, or event interest.',
        description:
          'Use this form to contact JSA about membership, events, collaboration, sponsorship, or general questions.',
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
        exchange: '留学案内',
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
        noSavedEvents: '保存したイベントはまだありません',
        savedEventsPreview: '保存したイベント',
        savedSnapshot: 'マイリスト',
      },
      categories: {
        career: 'キャリア',
        communityCulture: '交流・文化',
        collaborations: '連携イベント',
        external: '学外イベント',
      },
      roles: {
        coPresident: '共同会長',
        coPresidentFinance: '共同会長・会計担当',
        socialMediaCoordinator: 'ソーシャルメディア担当',
        eventCoordinator: 'イベント担当',
        globalRelationsCoordinator: '渉外担当',
        globalRelationsIntern: '渉外担当インターン',
        communicationsCoordinator: '広報担当',
      },
      newsletter: {
        eyebrow: 'ニュースレター',
        title: 'イベント情報をメールでお届けします',
        description:
          'JSAのイベントやお知らせを、まとめて受け取れます。',
        button: 'ニュースレターに登録',
      },
      home: {
        eyebrow: 'UW-Madison 公認学生団体',
        title: '日本コミュニティの中心として',
        description:
          'JSAは、UW-Madisonで日本にゆかりのある学生や日本文化に関心のある学生が集まるコミュニティです。交流イベントや文化企画を通じて、キャンパスに新しいつながりをつくっています。',
        ctaEvents: 'イベントを見る',
        ctaAbout: 'JSAについて知る',
        culturalTitle: '季節の行事を楽しむ',
        culturalBody: '日本の季節行事や食文化、気軽な交流会を通じて、ほっとできる居場所をつくります。',
        languageTitle: '日本語で話してみる',
        languageBody: '日本語を学ぶ人も、普段から使いたい人も、気軽に会話を楽しめる機会をつくります。',
        careerTitle: '日本につながる進路を考える',
        careerBody: '卒業生や提携団体とのつながりを活かし、日本に関わるキャリア情報を共有します。',
      },
      about: {
        eyebrow: '団体紹介',
        title: 'JSAは、日本をきっかけに人がつながる場所です。',
        description:
          '活動内容やJSAが大切にしていること、UW-Madisonと日本のつながりを紹介します。',
        storyTitle: 'UW-Madisonの日本学生会について',
        storyP1:
          'ウィスコンシン大学マディソン校・日本学生会（JSA）は2014年に設立されました。日本人学生の数は多くありませんが、UW–Madisonには中西部最大規模の日本語プログラムがあり、約400人の学習者が在籍しています。JSAは日本人コミュニティを支えながら、日本語を学ぶ学生にも交流や実践の機会を届けています。',
        storyP2:
          'UW–Madisonは日本との関係が深く、研究連携、留学プログラム、国際インターンシップなどの機会があります。早稲田大学、慶應大学、京都大学などとの交換留学協定もあり、国際的な学びの選択肢が広がっています。',
        storyP3:
          'JSAは学部生、大学院生、専門職学生を含む、あらゆるバックグラウンドの学生に開かれた団体です。月例イベントや文化交流を通じて、日本文化への理解を深めながら、学生同士のつながりを広げています。',
        storyP4:
          '活動内容は、日本食の共有、カラオケ、映画鑑賞、ディスカッションなど多岐にわたります。リラックスした雰囲気で、楽しく学び合える場を大切にしています。',
        storyP5:
          'JSAは、日本文化を学びながら学術的・社会的なつながりを築ける場を目指しています。UW–MadisonにはJR東海インターンシップや日本在住UW卒業生との交流など、日本関連の機会もあります。詳細はイベントページ・お問い合わせページをご確認ください。みなさんのご参加をお待ちしています。',
        missionTitle: 'ミッション',
        missionBody:
          '大きなキャンパスでも、知り合いが増え、気軽に立ち寄れる場所がある。そんな安心感をイベントを通じてつくります。',
        hostTitle: '開催しているイベント',
        hostBody:
          '文化イベント、日本語会話の交流会、学生同士のミキサー、キャリア関連企画などを行っています。',
        communityEyebrow: 'UW-Madisonと日本',
        communityTitle: 'UW-Madisonで学ぶ日本出身の学生',
        communityDescription:
          'Office of the Registrarの在籍データをもとに、UW-Madisonに在籍する日本出身学生の状況をまとめています。',
        communityTotalLabel: '日本国籍の学生数',
        communityTotalContext: '下の区分を合計した人数',
        undergraduateLabel: '学部生',
        undergraduateContext: '学部1年生から4年生まで',
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
          specialStudent: '特別履修生（交換留学生など）',
        },
        table: {
          academicLevel: '区分',
          count: '人数',
        },
      },
      board: {
        eyebrow: '役員紹介',
        title: 'JSAを運営する学生メンバー',
        description:
          'イベント企画や広報、学生サポートを担う役員メンバーを紹介します。',
        yearLabel: '役員一覧',
        yearDescription: '2025-2026年度にJSAを運営するメンバーです。',
      },
      events: {
        eyebrow: 'イベント',
        title: '開催予定のイベント',
        description:
          '交流会や文化イベント、コラボ企画など、JSAの最新イベント情報を掲載しています。気になるイベントは保存したり、Googleカレンダーに追加したりできます。',
        loading: 'イベント情報を読み込んでいます...',
        configMissing:
          'カレンダー設定が不足しています。VITE_GOOGLE_CALENDAR_API_KEY とカテゴリ別カレンダーID（VITE_GOOGLE_CALENDAR_ID_CAREER / VITE_GOOGLE_CALENDAR_ID_COMMUNITY_CULTURE / VITE_GOOGLE_CALENDAR_ID_COLLABORATIONS / VITE_GOOGLE_CALENDAR_ID_EXTERNAL）を設定してください。',
        fetchError:
          'Google Calendar からイベントを読み込めませんでした。カレンダー設定を確認するか、後でもう一度お試しください。',
        emptyTitle: '該当するイベントがありません',
        emptyBody: '検索キーワードを変更してみてください。',
        search: 'イベントを探す',
        searchPlaceholder: 'キーワードで検索',
        category: 'カテゴリ',
        all: 'すべて',
        dateFilter: '日付',
        allDates: 'すべて',
        today: '今日',
        thisWeek: '今週',
        thisMonth: '今月',
        customRange: '期間を指定',
        startDate: '開始日',
        endDate: '終了日',
        savedCount_one: '保存したイベントが {{count}} 件あります。',
        savedCount_other: '保存したイベントが {{count}} 件あります。',
        noSavedBody: '気になるイベントは保存して、あとから簡単に確認できます。',
        save: '保存する',
        saved: '保存済み',
        removeSaved: '削除',
        addToCalendar: 'カレンダーに追加',
      },
      exchange: {
        eyebrow: '留学・交換留学',
        title: 'UW-Madisonへの留学を考えている方へ',
        description:
          'これからUW-Madisonへ来る交換留学生や、アメリカ留学を検討している学生に向けて、準備や現地でのつながり方をまとめています。',
        considering: {
          eyebrow: '留学先として検討する',
          heroHeadline: '学びも生活も充実。　　UW-Madisonでの留学。',
          whyTitle: 'UW-Madisonが選ばれる理由',
          whyBody:
            'UW-Madisonは、学問の質も学生生活の充実も大切にしたい人に向いています。評価の高いプログラム、活発な研究環境、そして多くの学生が集まるキャンパスがあり、留学生でも早い段階で居場所を見つけやすい大学です。',
          pillar1Title: '全米でも評価の高い公立大学',
          pillar1Body: '米国の公立大学として、各種ランキングで安定して高い評価を受けています。',
          pillar2Title: '研究と実践に強い学び',
          pillar2Body: '研究室、プロジェクト型授業、デザインチームなど、授業外で学びを深める機会も豊富です。',
          pillar3Title: '人と出会いやすいキャンパス',
          pillar3Body: '学生団体やイベントが多く、留学生でもコミュニティを見つけやすい環境です。',
          pillar4Title: '湖と街に囲まれた学生生活',
          pillar4Body: '湖畔のキャンパスと暮らしやすい州都マディソンで、学業と生活の両方を楽しめます。',
          quickFactsTitle: '基本情報',
          quickFact1:
            '2026年版U.S. Newsでは、全米総合で約36位、公立大学で約12位にランクされています。',
          quickFact1b:
            '全米の公立大学の中でも、継続して高い評価を受けている大学です。',
          quickFact2:
            '教育学は全米の大学の中で常に１位前後に位置しています。（2026年版U.S. NewsにてBest Education Schoolを獲得）',
          quickFact4:
            '大規模大学のため、科目・学生団体・大学の支援制度が充実しています。人気科目は早めの準備が安心です。',
          quickFact5:
            'マディソンはウィスコンシン州の州都で、米国屈指の治安の良さとと学生が暮らしやすい街として知られています。',
          academicsTitle: '学びの環境',
          academicsBody:
            '教育学、コンピュータサイエンス、工学、ビンネスなどの分野に強く、研究室、チーム活動、キャリア関連イベントに参加する機会もあります。基礎科目は難しく、導入科目は大人数になることもありますが、オフィスアワーや学習グループ、アドバイザーを早めに活用すれば十分に対応できます。',
          studentLifeTitle: '現地での暮らし',
          studentLifeBody:
            '住居費は場所や住み方によって変わりますが、家賃は月$800-$1,500程度で見積もる学生が多いです。食費は計画次第で調整しやすく、学内外の選択肢も豊富です。マディソンの冬は本格的で、雪・強風・氷点下の日が続くため、防寒着、ブーツ、重ね着は欠かせません。',
          whyJsaTitle: 'JSAでできること',
          whyJsaBody:
            'JSAは、交換留学生や留学生が早く人とつながり、生活のことを気軽に相談できるコミュニティです。イベント参加から日常のちょっとした相談まで、一人で抱え込まなくてよい環境をつくっています。',
          voicesTitle: '留学生の声',
          voice1:
            '「最初の学期は学業が大変でしたが、学生団体に入ってからマディソンでの生活がぐっと身近になりました。」',
          voice2:
            '「冬は想像以上でしたが、防寒をそろえたら生活はかなり楽になりました。」',
          voice3:
            '「授業は厳しいですが、実践的な力と英語で議論する自信がつきました。」',
          ctaEyebrow: '次にすること',
          ctaTitle: '興味が固まってきたら、早めに準備を始めましょう。',
          ctaBody:
            '履修したい科目、予算、気候への不安などを整理したら、「渡航前の準備」ページで具体的なチェック項目を確認してみてください。',
        },
        subnavConsidering: '留学先として検討する',
        subnavPreparing: '渡航前の準備',
        subnavArriving: '到着後の生活',
        subnavResources: '在学生向け情報',
        preparingEyebrow: '出発前に確認',
        preparingTitle: '渡航前に準備しておきたいこと',
        preparingDescription:
          '住まい、履修、ビザ、お金、到着後の相談先などを早めに整理しておきましょう。',
        preparingHousingTitle: '住まい探し',
        preparingHousingBody:
          '住居探しは早めに始めるのがおすすめです。学内寮と学外物件を比較し、入居日、契約条件、通学時間まで確認してから決めましょう。',
        preparingCoursesTitle: '履修計画',
        preparingCoursesBody:
          '所属大学の要件と照らし合わせて履修計画を立てましょう。人気科目はすぐ埋まることがあるため、登録開始前に代替案を用意しておくと安心です。',
        preparingVisaTitle: 'ビザ・必要書類',
        preparingVisaBody:
          'DS-2019/I-20 の発行、面接予約、入国期限までを時系列で管理しましょう。重要書類はデータと紙の両方で保管しておくのが安全です。',
        preparingFinanceTitle: 'お金の準備',
        preparingFinanceBody:
          '家賃、食費、交通費、教材費、防寒用品を含めた月次予算を作りましょう。米国での口座・カード手数料・緊急出費への備えも確認しておくと安心です。',
        preparingEssentialsTitle: '生活必需品',
        preparingEssentialsBody:
          '出発前に、保険の確認、常備薬、防寒着、SIMプラン、到着後すぐ使う連絡先を準備しておくと初月が安定します。',
        arrivingEyebrow: '到着してから',
        arrivingTitle: 'マディソンでの生活を始める',
        arrivingDescription:
          '最初の数週間は、生活リズムを整えながら、授業・住まい・コミュニティの土台を少しずつ作っていきましょう。',
        firstWeeksTitle: '最初の数週間にすること',
        firstWeeksBody:
          '到着直後は、生活に必要な手続きや移動方法、授業の流れを少しずつ確認していけば大丈夫です。最初からすべて完璧にこなす必要はありません。困ったときに相談できる人や、安心して立ち寄れる場所を早めに見つけておくと、生活がぐっと落ち着きます。',
        campusLifeTitle: 'キャンパスに慣れる',
        campusLifeBody:
          '授業の建物、図書館、食事ができる場所、バスの乗り方、学生向けサービスなどを少しずつ把握していきましょう。毎日の動き方が見えてくると、キャンパスが一気に身近になります。',
        communityTitle: '居場所を見つける',
        communityBody:
          '学生団体、日本語・英語の会話イベント、文化イベントは、知り合いを増やすきっかけになります。JSAのイベントも、まず誰かとつながりたいときに気軽に参加できる場です。',
        languageTitle: '言語面のサポート',
        languageBody:
          '英語を練習したい人も、日本語を使いたい人も、会話を通じたイベントに参加することで、自然に自信をつけていけます。',
        resourcesEyebrow: '困ったときのリンク集',
        resourcesTitle: '在学生向け情報',
        resourcesDescription:
          'イベント情報、FAQ、キャリア関連情報、お問い合わせ先をまとめています。必要な情報にすぐアクセスできます。',
        ctaEvents: 'イベントを見る',
        ctaFaq: 'FAQを見る',
        ctaContact: 'JSAに問い合わせる',
        beforeArrivalBody:
          '住居、履修、ビザの準備に加えて、到着後にどんなコミュニティとつながりたいかを考えておくと安心です。',
        supportBody:
          '何から始めればよいか分からない場合は、イベント一覧、FAQ、お問い合わせフォームを見るのがおすすめです。',
      },
      faq: {
        eyebrow: 'FAQ',
        title: '参加前によくある質問',
        description:
          'JSAへの参加やイベントについて、よくある質問をまとめました。',
        q1: 'JSAには誰が参加できますか？',
        a1: '学部生、大学院生、専門職大学院生、日系アメリカ人の学生、日本からの留学生、交換留学生、日本にルーツのない学生など、さまざまな人が参加しています。JSAに興味がある方なら、どなたでも歓迎です。',
        q2: '入会条件などはありますか？',
        a2: 'UW-Madisonの学生であれば、どなたでも参加できます。日本人である必要も、日本語を話せる必要もありません。現在、会費や正式な入会手続きはなく、参加必須のイベントもありません。',
        q3: '日本語を話せなくても、日本にルーツがなくても参加できますか？',
        a3: 'もちろんです。JSAは、背景や言語レベルに関係なく参加できる団体です。自分が参加してよいか迷う場合も、気軽にご連絡ください。',
        q4: 'JSAのイベントはどのくらいの頻度でありますか？',
        a4: '秋学期と春学期は、基本的に隔週でイベントを開催しています。最新情報はInstagram、メール、イベントページでお知らせしています。',
        q5: '初めてイベントに参加するにはどうすればよいですか？学期の途中からでも参加できますか？',
        a5: '学期の途中からでも、いつでも参加できます。イベントの日時や場所は、ウェブサイト、Instagram、メールなどで案内しています。初めてで不安な場合は、事前にメールやInstagramで連絡していただければ、参加しやすいようにご案内します。',
        q6: 'どんなイベントを開催していますか？',
        a6: '日本食イベント、映画鑑賞会、マディソン周辺へのお出かけ、日本の季節行事、春祭りなど、さまざまなイベントを行っています。日本での就職に関心のある学生向けのキャリアイベントもあります。詳しくはイベントページをご覧ください。',
        q7: 'JSAのアドバイザーは誰ですか？',
        a7: '東アジア言語文学科 日本語学・言語学分野の Naomi Geyer 准教授です。',
      },
      careers: {
        eyebrow: 'キャリア',
        title: '日本につながるキャリアを考える',
        description:
          '日本に関わる進路や就職に関心のある学生へ、イベントや外部団体の情報を紹介しています。',
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
        title: '質問・連携のご相談はこちら',
        description:
          '入会、イベント参加、団体連携、スポンサーシップなどに関するお問い合わせを受け付けています。',
        formFallback: 'フォームが表示されない場合は、Google Formを新しいタブで開いてください。',
        openForm: 'Google Form を開く',
        successTitle: 'お問い合わせありがとうございます。',
        successBody: 'お問い合わせ内容を送信しました。',
        submitFrameTitle: 'Google Form 送信用フレーム',
        draft:
          '入力内容はこの端末に一時保存されます。ページを再読み込みしても、すぐには消えません。',
        name: '名前',
        email: 'メールアドレス',
        affiliation: '所属',
        inquiryType: 'お問い合わせ種別',
        subject: '件名',
        message: 'メッセージ',
        placeholderName: 'お名前',
        placeholderEmail: 'name@wisc.edu',
        placeholderAffiliation: 'UW-Madisonの学生、団体名、企業名など',
        placeholderSubject: 'お問い合わせの件名',
        placeholderMessage: 'どのようなご相談ですか？',
        selectPlaceholder: '選択してください',
        googleNotice:
          'このフォームは Google Form を通じて回答を送信します。パスワードや機密性の高い個人情報は入力しないでください。',
        inquiryOptions: {
          general: '一般的な質問',
          eventParticipation: 'イベント参加',
          collaboration: '団体連携・スポンサーシップ',
          membership: '入会について',
          other: 'その他',
        },
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
