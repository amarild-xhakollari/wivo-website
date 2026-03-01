export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  image: string
  badge: { text: string; variant: "teal" | "orange" }
  date: string
  readTime: string
  content: {
    intro: string
    sections: { heading: string; body: string }[]
    conclusion: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: "si-ndertojme-faqe-qe-konvertojne",
    title: "Si Ndërtojmë Faqe që Konvertojnë",
    subtitle: "Parimet UX dhe zgjedhjet e dizajnit pas çdo projekti që dërgojmë.",
    image: "https://picsum.photos/seed/blog1/600/400",
    badge: { text: "Dizajn", variant: "teal" },
    date: "15 Janar 2026",
    readTime: "5 min lexim",
    content: {
      intro:
        "Çdo faqe që ndërtojmë ka një qëllim të vetëm: të kthejë vizitorët në klientë. Kjo nuk ndodh rastësisht — është rezultat i vendimeve të qëllimshme të dizajnit, të bëra me të dhëna dhe me kuptim të thellë të sjelljes njerëzore.",
      sections: [
        {
          heading: "Hierarkia Vizuale Luan Rolin Kryesor",
          body: "Sytë njerëzorë kanë modele të parashikueshme leximi. Vizitorët skanojnë faqen para se të lexojnë — kjo do të thotë që titujt, nëntitujt dhe butonat CTA duhet të dallohen menjëherë. Ne ndërtojmë çdo layout duke vendosur CTA kryesor brenda 3 sekondave të parë të shikimit.",
        },
        {
          heading: "Shpejtësia Është Konvertim",
          body: "Çdo sekondë vonesë redukton konvertimet me rreth 7%. Optimizojmë të gjitha imazhet, përdorim lazy loading dhe ndërtojmë me Next.js për të arritur nota 90+ në Core Web Vitals. Një faqe e ngadaltë nuk është vetëm një problem teknik — është humbje parash.",
        },
        {
          heading: "Besimi Ndërtohet Para Veprimit",
          body: "Asnjë vizitor nuk bëhet klient pa besim. Shtojmë dëshmi sociale (vlerësime, logot e klientëve, projekte të mëparshme), garancionë të qarta dhe kontakt të dukshëm. Kur njeriu ndjehet i sigurt, klikon.",
        },
        {
          heading: "Forma të Thjeshta, Jo Barriera",
          body: "Çdo fushë shtesë në një formë redukton dërgesat. Kufizojmë formularët te fushat thelbësore — emri, emaili dhe një pyetje e shkurtër. Mund të mbledhim të dhëna shtesë pas konvertimit.",
        },
      ],
      conclusion:
        "Konvertimi nuk është magjia — është dizajn i menduar. Kur çdo vendim, nga ngjyrat tek hierarkia e tekstit, bëhet me qëllim, rezultati tregon. Kjo është arsyeja pse klientët tanë shohin rritje mesatare 35–60% të pyetjeve pas lansimit.",
    },
  },
  {
    slug: "pse-biznesi-juaj-ka-nevoje-per-faqe-personale-2026",
    title: "Pse Biznesi Juaj Ka Nevojë për Faqe Personale në 2026",
    subtitle: "Faqet me template ju kushtojnë klientë. Ja të dhënat.",
    image: "https://picsum.photos/seed/blog2/600/400",
    badge: { text: "Biznes", variant: "orange" },
    date: "28 Janar 2026",
    readTime: "4 min lexim",
    content: {
      intro:
        "Shumica e bizneseve fillojnë me një template Wix ose WordPress dhe mendojnë se ajo do të mjaftojë. Për fillimin, ndoshta po. Por ndërsa biznesi rritet, faqja bëhet pengesë — jo asset.",
      sections: [
        {
          heading: "Template = Konkurrenca Juaj Duket Njëlloj si Ju",
          body: "Kur Wix-i apo Squarespace-i shesin të njëjtin template mijëra herë, klientët tuaj potencialë shohin versione identike të faqes suaj tek konkurentët. Diferenciimi bëhet i pamundur. Faqja personale ju jep identitet unik — i juaji, jo i templateit.",
        },
        {
          heading: "Performanca Tekn.",
          body: "Template-t vijnë me kod të tepërt, plugin të panevojshëm dhe skripte të ngadalta. Faqet tona personale arrijnë shpejtësi 2–3 herë më të larta se template-t e zakonshme. Google shpërblen shpejtësinë me pozita më të mira.",
        },
        {
          heading: "Fleksibilitet pa Kufij",
          body: "Me template, çdo funksion i ri kërkon plugin. Çdo plugin sjell konflikte, përditësime dhe probleme sigurie. Me kod të personalizuar, shtojmë saktësisht çfarë keni nevojë — asgjë më shumë, asgjë më pak.",
        },
        {
          heading: "ROI i Matshëm",
          body: "Klientët tanë raportojnë mesatarisht 40% rritje të pyetjeve brenda 3 muajve të parë pas kalimit nga template te faqe e personalizuar. Investimi shpaguehet shpejt.",
        },
      ],
      conclusion:
        "Template-t janë pikënisja, jo destinacioni. Nëse biznesi juaj është serioz, faqja juaj duhet të jetë po aq serioze. Kontaktoni për të parë çfarë mund të ndërtojmë bashkë.",
    },
  },
  {
    slug: "nextjs-vs-wordpress",
    title: "Next.js vs WordPress: Çfarë Është e Duhura për Ju?",
    subtitle: "Një analizë e drejtpërdrejtë se kur të përdorni secilën platformë.",
    image: "https://picsum.photos/seed/blog3/600/400",
    badge: { text: "Teknologji", variant: "teal" },
    date: "5 Shkurt 2026",
    readTime: "6 min lexim",
    content: {
      intro:
        "Kjo është pyetja që dëgjojmë çdo javë. Përgjigja e ndershme: varet. Por ka kritere të qarta që e bëjnë zgjedhjen të drejtpërdrejtë.",
      sections: [
        {
          heading: "WordPress: Kur Ka Kuptim",
          body: "WordPress është zgjidhja e duhur kur keni nevojë për shumë blog posts çdo javë, kur ekipi juaj i marketingut duhet të menaxhojë përmbajtjen pa ndihmë teknike, ose kur keni nevojë për WooCommerce. Eko-sistemi i plugin-ëve e bën të lehtë shtimin e funksioneve të zakonshme pa kod.",
        },
        {
          heading: "Next.js: Kur Ka Kuptim",
          body: "Next.js është zgjidhja superiore kur performanca është prioritet, kur ndërtoni aplikacion web (jo vetëm faqe), kur keni nevojë për rendering të personalizuar (SSR, SSG, ISR), ose kur doni siguri maksimale pa shqetësimin e plugin-ëve. Shpejtësia, shkallëzueshmëria dhe fleksibiliteti janë pa rival.",
        },
        {
          heading: "Miti i 'WordPress-i është Më i Lirë'",
          body: "WordPress mund të duket i lirë fillimisht, por plugin-ët premium, temat, mirëmbajtja dhe çmimet e hosting-ut të mirë e bëjnë koston totale shpesh të krahasueshme ose më të lartë. Next.js ka kosto fillestare pak më të lartë por kosto operative shumë më të ulëta.",
        },
        {
          heading: "Rekomandimi Ynë",
          body: "Për shumicën e bizneseve lokale dhe markave: Next.js. Për blogerë me volum të lartë ose dyqane me shumë produkte: WordPress me konfigurim të kujdesshëm. Kur keni dyshim, konsultohuni me ne para se të vendosni.",
        },
      ],
      conclusion:
        "Nuk ka përgjigje universale, por ka zgjedhje të informuara. Teknologjia duhet të shërbejë qëllimin e biznesit, jo anasjelltas. Na kontaktoni dhe do t'ju ndihmojmë të zgjidhni platformën e duhur për situatën tuaj specifike.",
    },
  },
  {
    slug: "5-gabimet-qe-vrasin-performancen-e-faqes",
    title: "5 Gabimet që Vrasin Performancën e Faqes",
    subtitle: "Shpejtësia është SEO. Ja çfarë rregullojmë në çdo projekt.",
    image: "https://picsum.photos/seed/blog4/600/400",
    badge: { text: "Performancë", variant: "orange" },
    date: "12 Shkurt 2026",
    readTime: "5 min lexim",
    content: {
      intro:
        "Auditojmë dhjetëra faqe çdo muaj. Të njëjtat gabime shfaqen sërish e sërish — dhe të gjitha i kushtojnë bizneseve rangime dhe klientë. Ja gabimet më të zakonshme dhe si t'i shmangni.",
      sections: [
        {
          heading: "1. Imazhe të Pa-optimizuara",
          body: "Imazhet shpesh përbëjnë 60–80% të madhësisë totale të faqes. Shumë faqe ngarkojnë imazhe 4K kur shfaqen në dimensione 400px. Zgjidhja: konvertoni në WebP, përdorni atributet sizes të sakta dhe aktivizoni lazy loading. Vetëm ky gabim mund të ngadalësojë faqen me 3–5 sekonda.",
        },
        {
          heading: "2. JavaScript i Tepërt",
          body: "Çdo plugin, widget dhe skript analytics shtohet. Shumë faqe ngarkojnë 2–5 MB JavaScript të panevojshëm. Auditoni rregullisht skriptet — çdo gjë që nuk kontribuon drejtpërdrejtë te konvertimi duhet hequr ose zëvendësuar me alternativa më të lehta.",
        },
        {
          heading: "3. Render-Blocking Resources",
          body: "CSS dhe JavaScript të ngarkuara në <head> bllokojnë shfaqjen e faqes. Përdorni defer/async për skriptet jo-kritike, inline CSS kritike dhe shtyjni ngarkimin e stileve jo-esenciale. Kjo vetë mund të përmirësojë LCP me 1–2 sekonda.",
        },
        {
          heading: "4. Hosting i Dobët",
          body: "Hosting i lirë i përbashkët mund të shkatërrojë edhe kodin më të mirë. Investoni në hosting të mirë — Vercel, Netlify ose VPS i konfiguruar mirë. Dallimi në TTFB (Time to First Byte) mund të jetë 100ms vs 1500ms.",
        },
        {
          heading: "5. Pa Cache",
          body: "Pa cache të konfiguruara siç duhet, çdo vizitor rindërton faqen nga zeroja. Aktivizoni browser caching, CDN dhe server-side caching. Shumica e burimeve statike duhet të kenë cache prej 1 viti.",
        },
      ],
      conclusion:
        "Performanca nuk është luks — është nevojë biznesi. Google e mat, vizitorët e ndjejnë dhe konvertimet e reflektojnë. Nëse faqja juaj ka nota të ulëta në PageSpeed, kontaktoni — zakonisht i rregullojmë brenda 1–2 ditësh pune.",
    },
  },
  {
    slug: "dizajn-mobile-first",
    title: "Dizajn Mobile-First: Çfarë Nënkupton Realisht",
    subtitle: "Mbi 70% e trafikut është celular. A dizajnoni për të?",
    image: "https://picsum.photos/seed/blog5/600/400",
    badge: { text: "Dizajn", variant: "teal" },
    date: "19 Shkurt 2026",
    readTime: "4 min lexim",
    content: {
      intro:
        "Mobile-first nuk do të thotë 'bëje të funksionojë në telefon'. Do të thotë të filloni dizajnin nga ekrani më i vogël dhe ta zgjeroni — jo anasjelltas. Kjo ndryshim perspektive ka pasoja të mëdha.",
      sections: [
        {
          heading: "Pse Mobile-First, Jo Mobile-Responsive",
          body: "Responsive do të thotë që faqja desktop 'kushtëzohet' të funksionojë në celular. Mobile-first do të thotë që faqja celulare është origjinali dhe desktop është zgjerim. Dallimi: faqet responsive shpesh kanë navigim të rëndë, butona shumë të vegjël dhe tekst shumë të vogël në celular. Faqet mobile-first janë natyrshëm të lehta dhe të lehta për t'u prekur.",
        },
        {
          heading: "Rregullat e Thumbit Të Dizajnit Mobile",
          body: "Butonat duhet të jenë të paktën 44×44px (standarti Apple). Teksti duhet të jetë 16px minimum. Hapësirat mes elementeve ndërvepruese duhet të jenë të paktën 8px. Formularet duhet të aktivizojnë tastierën e duhur (numrat = numpad, emaili = tastiera email). Shumica e faqeve dështojnë në të paktën 2 nga këto.",
        },
        {
          heading: "Navigimi Mobile Kërkon Strategji",
          body: "Menu hamburger nuk është gjithmonë zgjidhja. Nëse keni 3–5 lidhje kryesore, tab bar në fund funksionon shumë më mirë. Nëse keni shumë kategori, konsideroni drawer me grupim logjik. Çdo klik shtesë humb vizitorë.",
        },
        {
          heading: "Google Indekson Mobile, Jo Desktop",
          body: "Që nga 2019, Google përdor mobile-first indexing. Kjo do të thotë që versioni celular i faqes suaj përcakton rangimin tuaj — jo desktop. Nëse faqja juaj mobile ka probleme, rangimet tuaja vuajnë pavarësisht sa mirë duket desktop.",
        },
      ],
      conclusion:
        "Nëse faqja juaj u është ndërtuar pesë vjet më parë si 'responsive', ndoshta ka ardhur koha për rinovim. Vizitorët mobilë janë të paduruar — ata kanë alternativa në distancë nga një klik. Mos ua bëni të vështirë.",
    },
  },
  {
    slug: "si-ti-jepni-udhezimet-nje-agjencie-web",
    title: "Si t'i Jepni Udhëzime një Agjencie Web (Pa Humbur Kohë)",
    subtitle: "Kurseni javë dyfishimesh me këtë qasje të thjeshtë.",
    image: "https://picsum.photos/seed/blog6/600/400",
    badge: { text: "Procesi", variant: "orange" },
    date: "25 Shkurt 2026",
    readTime: "5 min lexim",
    content: {
      intro:
        "Shumica e vonesave dhe dyfishimeve në projekte web ndodhin jo nga probleme teknike, por nga komunikim i paqartë në fillim. Pas dhjetëra projekteve, kemi mësuar saktësisht çfarë informacioni nevojitet për të filluar shpejt dhe saktë.",
      sections: [
        {
          heading: "Definoni Qëllimin, Jo Zgjidhjen",
          body: "Njerëzit shpesh thonë 'dua një slider hero' kur çfarë duan realisht është 'dua vizitorët të kuptojnë menjëherë çfarë bëjmë'. Ne dizajnojmë zgjidhjet — detyra juaj është të na tregoni qëllimin. 'Dua 20% më shumë pyetje nga faqja' është shumë më e dobishme se 'dua ngjyrë të kaltër'.",
        },
        {
          heading: "Tregoni Shembuj që Ju Pëlqejnë (Dhe Pse)",
          body: "Ndani 3–5 faqe që ju tërheqin — por shtoni 'pse'. Nëse thoni vetëm 'më pëlqen kjo faqe', ne nuk dimë nëse ju tërhiqet layout-i, ngjyrat, stili i fotografisë ose toni i shkrimit. Specifikimi i 'pse' na ndihmon të kuptojmë estetikën tuaj.",
        },
        {
          heading: "Jepni Informacionin e Markës Paraprakisht",
          body: "Keni nevojë: logon në vektorë (SVG ose AI), palet e ngjyrave (kodet hex nëse i keni), fontet nëse i keni, dhe çdo guideline ekzistuese marke. Nëse nuk i keni, na tregoni — ndërtojmë identitetin vizual si pjesë e projektit.",
        },
        {
          heading: "Një Vendimmarrës, Jo Pesë",
          body: "Projektet me shumë palë aprovuese zakonisht marrin dy herë kohën. Caktoni një person si pikë kontakti kryesore që ka autoritet për të aprovuar dizajnin. Komentet 'grupe' shpesh janë kontradiktore dhe ngadalësohen reciprokisht.",
        },
        {
          heading: "Respektoni Fazat e Projektit",
          body: "Ndryshimet e mëdha janë të lira gjatë wireframit, të mesme gjatë dizajnit dhe të shtrenjta gjatë zhvillimit. Nëse prisni deri te faza e zhvillimit për të ndryshuar strukturën e navigimit, jeni duke paguar 5 herë çmimin e ndryshimit të hershëm.",
        },
      ],
      conclusion:
        "Projektet e mira janë partneritete. Sa më shumë të investoni në fazën e zbulimit dhe sa më qartë të komunikoni qëllimet tuaja, aq më shpejt dhe mirë do ta merrni produktin final. Nëse keni pyetje rreth procesit tonë, na kontaktoni.",
    },
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
