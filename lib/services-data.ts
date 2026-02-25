import { Palette, Code2, Smartphone, Bot, MessageSquare, MapPin } from "lucide-react"

export type ServiceColor = "teal" | "coral" | "gold"

export interface ServiceData {
  slug: string
  number: string
  icon: typeof Palette
  color: ServiceColor
  title: string
  tagline: string
  description: string
  heroImage: string
  stats: { value: string; label: string }[]
  includes: { title: string; description: string }[]
  process: { step: string; title: string; description: string }[]
  whoFor: { title: string; description: string; image: string }[]
  testimonials: { quote: string; name: string; role: string; avatar: string }[]
  faq: { question: string; answer: string }[]
}

export const servicesData: ServiceData[] = [
  {
    slug: "web-design",
    number: "01",
    icon: Palette,
    color: "teal",
    title: "Dizajn & Zhvillim Web",
    tagline: "Faqe të bukura që konvertojnë vizitorët.",
    description:
      "Dizajnojmë dhe ndërtojmë faqe interneti të personalizuara nga zeroja — pa template, pa shkurtore. Çdo faqe që dërgojmë është e shpejtë, responsive dhe e ndërtuar për të kthyer vizitorët në klientë.",
    heroImage: "https://picsum.photos/seed/webdesign1/1200/800",
    stats: [
      { value: "2–4 javë", label: "Afati tipik" },
      { value: "50+", label: "Faqe të dorëzuara" },
      { value: "100%", label: "Mobile responsive" },
    ],
    includes: [
      { title: "Dizajn UI/UX i Personalizuar", description: "Çdo piksel dizajnohet për të përfaqësuar markën tuaj dhe për të konvertuar vizitorët." },
      { title: "Plotësisht Responsive", description: "Duket perfekt në celular, tablet dhe desktop — e garantuar." },
      { title: "Strukturë SEO-Ready", description: "Kod i pastër, meta tags, sitemap dhe schema markup nga dita e parë." },
      { title: "Performancë e Optimizuar", description: "Rezultate Core Web Vitals që kënaqin Google-in (dhe përdoruesit)." },
      { title: "Integrim CMS", description: "Ndryshoni vetë përmbajtjen tuaj lehtësisht — nuk nevojitet zhvillues për përditësime." },
      { title: "Mbështetje 30-Ditore", description: "Qëndrojmë pas lansimit për të rregulluar çdo gjë që mund të lindë." },
    ],
    process: [
      { step: "01", title: "Zbulim", description: "Mësojmë për biznesin, konkurrentët dhe qëllimet tuaja. Përcaktojmë strukturën e faqes para se të fillojmë çdo dizajn." },
      { step: "02", title: "Dizajn", description: "Krijojmë mockup-e për rishikim. Ju jepni komente, ne i rafinojmë. Pa surpriza kur arrijmë te zhvillimi." },
      { step: "03", title: "Zhvillim", description: "E ndërtojmë në kod — të pastër, të shpejtë dhe aksesibël. Shihni progresin gjatë gjithë procesit, jo vetëm në fund." },
      { step: "04", title: "Lansim", description: "Testojmë në pajisje dhe shfletues të ndryshëm, pastaj vendosim. Menaxhojmë anën teknike që ju të mos keni shqetësime." },
    ],
    whoFor: [
      { title: "Biznese Lokale", description: "Restorante, salone, zejtarë, klinika — çdo biznes që ka nevojë për prani profesionale online.", image: "https://picsum.photos/seed/persona1/400/300" },
      { title: "Profesionistë të Pavarur", description: "Faqe personale që ju pozicionon si ekspert dhe sjell pyetje ndërkohë që flini.", image: "https://picsum.photos/seed/persona2/400/300" },
      { title: "Startup-e", description: "Faqe e gatshme për lansim që duket e rafinuar nga dita e parë dhe mund të rritet me produktin tuaj.", image: "https://picsum.photos/seed/persona3/400/300" },
    ],
    testimonials: [
      { quote: "Wivo na dorëzoi faqen e re të internetit në dy javë dhe duket e jashtëzakonshme. Pamë një rritje prej 40% në pyetje brenda muajit të parë.", name: "Sarah Mitchell", role: "Pronare, Mitchell & Co.", avatar: "https://picsum.photos/seed/av1/100/100" },
      { quote: "Profesionistë, të shpejtë dhe vërtet të këndshëm për të punuar. Faqja jonë tani duket po aq mirë sa produkti ynë.", name: "Tom Reeves", role: "Drejtor, Apex Studio", avatar: "https://picsum.photos/seed/av2/100/100" },
    ],
    faq: [
      { question: "Sa kohë duhet për një faqe interneti?", answer: "Shumica e faqeve marrin 2–4 javë nga fillimi deri te lansimi. Projektet më të mëdha me më shumë faqe ose funksione të personalizuara mund të zgjatin më shumë — do t'ju japim një afat të qartë paraprakisht." },
      { question: "Përdorni template apo ndërtoni nga zeroja?", answer: "Ndërtojmë nga zeroja. Template-t janë gjenerike dhe të ngadalta. Faqet e personalizuara duken më mirë, ngarkohen më shpejt dhe janë më të lehta për t'u mirëmbajtur." },
      { question: "Çfarë keni nevojë nga unë për të filluar?", answer: "Logon tuaj, ngjyrat e markës (nëse i keni), ndonjë tekst ose përmbajtje dhe një ide të qartë të asaj që dëshironi të bëjë faqja. Ne do t'ju udhëzojmë për gjithçka tjetër." },
      { question: "Çfarë ndodh pas lansimit?", answer: "Përfshijmë 30 ditë mbështetje pas lansimit. Pas kësaj, ofrojmë plane mirëmbajtjeje mujore për ta mbajtur faqen tuaj të shpejtë, të sigurt dhe të përditësuar." },
    ],
  },
  {
    slug: "web-apps",
    number: "02",
    icon: Code2,
    color: "coral",
    title: "Aplikacione Web",
    tagline: "Softuer i personalizuar që zgjidh probleme reale.",
    description:
      "Ndërtojmë aplikacione web të përshtatura për biznesin tuaj — panele, portale, mjete SaaS, mjete të brendshme. Nëse keni nevojë për diçka që bën më shumë se një faqe interneti, ky është zgjidhja.",
    heroImage: "https://picsum.photos/seed/webapp1/1200/800",
    stats: [
      { value: "4–8 javë", label: "Afati MVP" },
      { value: "20+", label: "Aplikacione të dërguara" },
      { value: "99.9%", label: "SLA e disponueshmërisë" },
    ],
    includes: [
      { title: "UI i Personalizuar", description: "Ndërtuar rreth fluksit tuaj të punës, jo një template gjenerik." },
      { title: "API Backend", description: "Logjikë e sigurt dhe e shkallëzueshme nga ana e serverit që trajton rregullat e biznesit tuaj." },
      { title: "Dizajn i Bazës së të Dhënave", description: "Të dhëna të strukturuara siç duhet që performojnë nën ngarkesë." },
      { title: "Autentifikim & Role", description: "Login i përdoruesit, leje dhe qasje bazuar në role të ndërtuar mbrenda." },
      { title: "Integrime API", description: "Lidheni me Stripe, HubSpot, Slack dhe çdo shërbim të palës së tretë që përdorni." },
      { title: "Vendosje CI/CD", description: "Pipeline-e të automatizuara që çdo përditësim ta dërgojë në mënyrë të sigurt dhe të shpejtë." },
    ],
    process: [
      { step: "01", title: "Kërkesat", description: "Hartëzojmë çfarë duhet të bëjë aplikacioni — çdo funksion, çdo rol përdoruesi, çdo rast anësor. Kjo parandalon rritjen e fushëveprimit më vonë." },
      { step: "02", title: "Arkitektura", description: "Zgjedhim stack-un e duhur dhe dizajnojmë modelin e të dhënave. Marrja e kësaj siç duhet paraprakisht kursen javë ripunimi." },
      { step: "03", title: "Ndërtim", description: "Zhvillojmë me sprinte me kontrollime të rregullta. Shihni funksione që funksionojnë herët, jo një zbulim të madh në fund." },
      { step: "04", title: "Vendosje", description: "Ngrisim infrastrukturën e prodhimit, kryejmë testime nën ngarkesë dhe dorëzojmë dokumentacion të plotë." },
    ],
    whoFor: [
      { title: "Themelues SaaS", description: "Keni një ide për një produkt. Ne ndërtojmë MVP-në që të arrini në treg dhe të filloni të mësoni nga përdoruesit realë.", image: "https://picsum.photos/seed/persona4/400/300" },
      { title: "Ekipe Operacionale", description: "Po punoni me tabela ose softuer të vjetër. Ne ndërtojmë diçka që vërtet përshtatet me mënyrën tuaj të punës.", image: "https://picsum.photos/seed/persona5/400/300" },
      { title: "Mjete të Brendshme", description: "Panele, mjete raportimi, panele admin — aplikacione që kursejnë ekipit tuaj orë çdo javë.", image: "https://picsum.photos/seed/persona6/400/300" },
    ],
    testimonials: [
      { quote: "Zëvendësuam tre mjete të ndryshme me një aplikacion të personalizuar. Kursimi i kohës e pagoi projektin në muajin e parë.", name: "James Okafor", role: "Themelues, Okafor Creative", avatar: "https://picsum.photos/seed/av3/100/100" },
      { quote: "Ekipi kuptoi çfarë kishim nevojë para se ne të mbaronim shpjegimin. Aplikacioni është saktësisht ajo që kërkonim.", name: "Priya Sharma", role: "Drejtoreshë Operacionesh, Bloom Group", avatar: "https://picsum.photos/seed/av4/100/100" },
    ],
    faq: [
      { question: "Çfarë stack teknologjik përdorni?", answer: "Përdorim kryesisht Next.js, React, Node.js dhe PostgreSQL — por gjithmonë zgjedhim atë që është e duhura për projektin, jo ajo që është në trend." },
      { question: "A mund të punoni me sistemet tona ekzistuese?", answer: "Po. Mund të integrojmë me API-e ekzistuese, baza të dhënash ose shërbime të palës së tretë. Do të vlerësojmë çfarë është e mundur gjatë fazës së zbulimit." },
      { question: "Sa kohë duhet për një aplikacion web?", answer: "Një MVP bazë zakonisht merr 4–8 javë. Aplikacionet më komplekse me shumë funksione dhe integrime zgjatin më shumë. Do t'ju japim një vlerësim të detajuar pas thirrjes së zbulimit." },
      { question: "A ofroni mbështetje të vazhdueshme pas lansimit?", answer: "Po. Ofrojmë paketa mbështetjeje për rregullime, përditësime dhe funksione të reja. Shumë klientë na mbajnë mujore pas lansimit." },
    ],
  },
  {
    slug: "mobile-apps",
    number: "03",
    icon: Smartphone,
    color: "gold",
    title: "Aplikacione Mobile",
    tagline: "Aplikacione iOS dhe Android që përdoruesit do t'i duan.",
    description:
      "Ndërtojmë aplikacione mobile cross-platform që ndjehen native si në iOS ashtu edhe në Android. Nga koncepti te dyqani i aplikacioneve — menaxhojmë dizajnin, zhvillimin dhe dorëzimin.",
    heroImage: "https://picsum.photos/seed/mobile1/1200/800",
    stats: [
      { value: "6–10 javë", label: "Afati tipik" },
      { value: "2", label: "Dyqane të mbuluar" },
      { value: "iOS + Android", label: "Një bazë kodi" },
    ],
    includes: [
      { title: "Aplikacion Cross-Platform", description: "Një bazë kodi për iOS dhe Android — ndjesi native, gjysmë e kostos." },
      { title: "UI/UX i Personalizuar", description: "Dizajnuar për gishta — intuitiv, i shpejtë dhe me markën tuaj." },
      { title: "Integrim API", description: "Lidhet me backend-in tuaj, CMS ose çdo shërbim të palës së tretë." },
      { title: "Njoftime Push", description: "Riaktivizoni përdoruesit me njoftime të kohëshme dhe relevante." },
      { title: "Dorëzim në Dyqan", description: "Menaxhojmë të gjitha asetet, metadata-n dhe procesin e rishikimit." },
      { title: "Testim në Pajisje", description: "Testuar në pajisje reale iOS dhe Android para dorëzimit." },
    ],
    process: [
      { step: "01", title: "Zbulim", description: "Përcaktojmë funksionet kryesore, rrjedhat e përdoruesit dhe kërkesat teknike. Rëndë para se të shkruajmë ndonjë linjë kodi." },
      { step: "02", title: "Wireframe", description: "Hartëzojmë çdo ekran para se t'i dizajnojmë. Kjo siguron që aplikacioni të ketë kuptim para se të duket mirë." },
      { step: "03", title: "Ndërtim", description: "Ndërtojmë me React Native për një bazë kodi të vetme që funksionon në të dyja platformat — duke kursyer kohë pa sakrifikuar cilësinë." },
      { step: "04", title: "Dorëzim", description: "Testojmë në pajisje reale, përgatisim asetet e App Store dhe menaxhojmë procesin e dorëzimit për të dyja dyqanet." },
    ],
    whoFor: [
      { title: "Startup-e që Shkojnë Mobile", description: "Keni nevojë për aplikacion mobile për produktin tuaj por nuk keni ekip mobile të brendshëm. Ne bëhemi ekipi juaj.", image: "https://picsum.photos/seed/persona7/400/300" },
      { title: "Ekipe në Terren", description: "Aplikacione për logjistikë, shërbim në terren dhe ekipe të dorëzimit që duhet të punojnë në lëvizje.", image: "https://picsum.photos/seed/persona8/400/300" },
      { title: "Marka E-Commerce", description: "Aplikacion mobile me markën tuaj që përmirëson mbajtjen dhe u jep klientëve një përvojë blerjeje më të shpejtë.", image: "https://picsum.photos/seed/persona9/400/300" },
    ],
    testimonials: [
      { quote: "Aplikacioni ynë ishte live në të dyja dyqanet brenda 8 javësh. Cilësia është më e mirë se aplikacionet nga agjensi me 3 herë çmimin.", name: "Lena Fischer", role: "Themeluse, FitLife", avatar: "https://picsum.photos/seed/av5/100/100" },
      { quote: "Ekipi menaxhoi gjithçka — dizajnin, ndërtimin, dorëzimin. Ne thuajse nuk u duhej të ngrihim gisht.", name: "Nico Andersen", role: "Drejtor Krijues, Studio Nord", avatar: "https://picsum.photos/seed/av6/100/100" },
    ],
    faq: [
      { question: "Native apo cross-platform — cili është ndryshimi?", answer: "Native do të thotë baza kodi të ndara për iOS dhe Android (2 herë kostoja). Cross-platform (React Native) përdor një bazë kodi për të dyja, ndihet dhe duket native dhe është ajo që rekomandojmë për shumicën e projekteve." },
      { question: "Sa kohë duhet për një aplikacion mobile?", answer: "Një MVP i fokusuar zakonisht merr 6–10 javë. Aplikacionet me funksione komplekse, mbështetje offline ose integrime të rënda zgjatin më shumë." },
      { question: "A mund të përditësoni një aplikacion ekzistues?", answer: "Po — mund të marrim një bazë kodi ekzistuese, të shtojmë funksione, të rregullojmë gabime ose të ridizajnojmë UI-n. Do të bëjmë audit të kodit fillimisht." },
      { question: "Si është procesi i miratimit të App Store?", answer: "Menaxhojmë procesin e plotë të dorëzimit dhe njohim udhëzimet e rishikimit të Apple dhe Google. Përgatisim të gjitha asetet e kërkuara dhe menaxhojmë çdo përgjigje refuzimi." },
    ],
  },
  {
    slug: "ai-automation",
    number: "04",
    icon: Bot,
    color: "teal",
    title: "Automatizim me AI",
    tagline: "Ndaloni të bëni me dorë atë që një makinë mund ta bëjë më mirë.",
    description:
      "Identifikojmë detyrat e përsëritshme që hanë kohën e ekipit tuaj dhe i automatizojmë me AI. Nga futja e të dhënave te flukset komplekse me shumë hapa — ndërtojmë automatizime që thjesht funksionojnë.",
    heroImage: "https://picsum.photos/seed/aiauto1/1200/800",
    stats: [
      { value: "2–4 javë", label: "Deri te automatizimi i parë" },
      { value: "10+ orë", label: "Të kursyera çdo javë" },
      { value: "24/7", label: "Funksionon pa ju" },
    ],
    includes: [
      { title: "Auditim i Fluksit të Punës", description: "Hartëzojmë proceset tuaja aktuale për të gjetur mundësitë me vlerën më të lartë të automatizimit." },
      { title: "Automatizim i Personalizuar", description: "Ndërtuar rreth fluksit tuaj të punës, jo një template gjenerik." },
      { title: "Integrim AI", description: "OpenAI, Anthropic ose modele me burim të hapur — çfarëdo që i përshtatet detyrës." },
      { title: "Lidhje Mjetesh", description: "Lidhet me stack-un tuaj ekzistues — CRM, email, Slack, tabela dhe shumë të tjera." },
      { title: "Testim & Rastet Anësor", description: "Testojmë me të dhëna reale duke përfshirë rastet e çuditshme me të cilat merret ekipi juaj." },
      { title: "Dorëzim Ekipit", description: "Ekipi juaj mëson ta menaxhojë dhe rregullojë vetë automatizimin." },
    ],
    process: [
      { step: "01", title: "Auditim", description: "Kalojmë kohë duke kuptuar flukset tuaja aktuale të punës — çfarë merr më shumë kohë, ku ndodhin gabimet, çfarë bëhet njëlloj çdo herë." },
      { step: "02", title: "Dizajn", description: "Hartëzojmë logjikën e automatizimit dhe ju tregojmë saktësisht çfarë do të ndodhë në çdo hap para se të ndërtojmë çdo gjë." },
      { step: "03", title: "Ndërtim", description: "Ndërtojmë dhe lidhim automatizimin duke përdorur mjetet e duhura — n8n, kod të personalizuar ose integrime direkte API." },
      { step: "04", title: "Dorëzim", description: "Testojmë me të dhëna reale, trajnojmë ekipin tuaj si ta menaxhojë dhe ngrisim monitorim që të dini nëse diçka prishet." },
    ],
    whoFor: [
      { title: "Ekipe Operacionale", description: "Futja e të dhënave, gjenerimi i raporteve, procesimi i skedarëve — nëse ekipi juaj e bën në mënyrë të përsëritur, mund ta automatizojmë.", image: "https://picsum.photos/seed/persona10/400/300" },
      { title: "Shërbimi ndaj Klientit", description: "Automatizoni drejtimin e biletave, hartoni përgjigje dhe eskaloni çështjet e duhura te njerëzit e duhur.", image: "https://picsum.photos/seed/persona11/400/300" },
      { title: "Ekipe Marketingu", description: "Automatizoni draftet e përmbajtjes, planifikimin social, pasurimin e lideve dhe raportimin e fushatave.", image: "https://picsum.photos/seed/persona12/400/300" },
    ],
    testimonials: [
      { quote: "Automatizuam të gjithë procesin e onboarding-ut të klientëve. Çfarë dikur merrte 3 orë tani merr 10 minuta.", name: "Marcus Chen", role: "Menaxher Operacionesh, Growthly", avatar: "https://picsum.photos/seed/av7/100/100" },
      { quote: "ROI ishte i menjëhershëm. Eliminuam dy ditë pune manuale në javën e parë.", name: "Olivia Park", role: "CEO, DataFlow Ltd", avatar: "https://picsum.photos/seed/av8/100/100" },
    ],
    faq: [
      { question: "Çfarë detyrash mund të automatizetohen realisht?", answer: "Çdo gjë e bazuar në rregulla ose e përsëritur: futja e të dhënave, procesimi i dokumenteve, hartimi i emaileve, gjenerimi i raporteve, drejtimi i lideve, përditësimet CRM, krijimi i përmbajtjes dhe shumë të tjera." },
      { question: "Çfarë mjetesh AI përdorni?", answer: "Përdorim OpenAI, Anthropic dhe modele me burim të hapur në varësi të detyrës. Për automatizimin e fluksit të punës, shpesh përdorim n8n ose kod të personalizuar me thirrje direkte API." },
      { question: "A do të integrohet me mjetet që tashmë përdorim?", answer: "Pothuajse me siguri. Kemi integruar me Google Workspace, Slack, HubSpot, Salesforce, Notion, Airtable dhe qindra mjete të tjera." },
      { question: "Sa shpejt do të shohim rezultate?", answer: "Shumica e automatizimeve janë live brenda 2–4 javësh. Disa më të thjeshta mbarohen brenda ditësh. Do të shihni kohë të kursyer nga dita e parë." },
    ],
  },
  {
    slug: "chatbots",
    number: "05",
    icon: MessageSquare,
    color: "coral",
    title: "Chatbot",
    tagline: "Përgjigjuni pyetjeve, kualifikoni lide, mbyllni shitje — 24/7.",
    description:
      "Ndërtojmë chatbot të fuqizuar nga AI të trajnuara mbi biznesin tuaj që menaxhojnë pyetjet e klientëve gjatë gjithë orës. Më pak lide të humbur, më pak ngarkesë mbështetjeje, përvojë më e mirë klienti.",
    heroImage: "https://picsum.photos/seed/chatbot1/1200/800",
    stats: [
      { value: "24/7", label: "Gjithmonë online" },
      { value: "< 2s", label: "Koha e përgjigjes" },
      { value: "60%", label: "Bileta të shmangura" },
    ],
    includes: [
      { title: "Personalitet i Personalizuar", description: "Dizajnuar të tingëllojë si marka juaj — jo një robot gjenerik." },
      { title: "Trajnim AI", description: "Trajnuar mbi faqen tuaj, FAQ-et, produktet dhe dokumentacionin." },
      { title: "Integrim në Faqe", description: "I ngulitur në faqen tuaj me një widget chat me markën tuaj." },
      { title: "Kapja e Lideve & CRM", description: "Kap emrin, emailin dhe qëllimin — sinkronizohet automatikisht me CRM-in tuaj." },
      { title: "Dorëzim te Njeriu", description: "Di kur të eskalojë dhe kalon bisedën me hijeshi tek ekipi juaj." },
      { title: "Panel Analitik", description: "Shihni çfarë pyesin njerëzit, ku largohen dhe si të përmirësoheni." },
    ],
    process: [
      { step: "01", title: "Rastet e Përdorimit", description: "Identifikojmë çfarë duhet të menaxhojë chatbot-i — FAQ-e, kapja e lideve, rezervime, mbështetje — dhe çfarë të eskalojë te njeriu." },
      { step: "02", title: "Ndërtim & Trajnim", description: "Ndërtojmë chatbot-in dhe e trajnojmë mbi përmbajtjen tuaj — faqen, FAQ-et, dokumentet e produkteve dhe gjithçka tjetër që duhet të dijë." },
      { step: "03", title: "Testim", description: "Kalojmë chatbot-in nëpër qindra skenarë të botës reale për t'u siguruar që përgjigjet saktë dhe eskalon siç duhet." },
      { step: "04", title: "Vendosje & Monitorim", description: "Shkojmë live në faqen tuaj, monitorojmë bisedat e hershme dhe rregullojmë përgjigjet bazuar në ndërveprimet reale." },
    ],
    whoFor: [
      { title: "Dyqane E-Commerce", description: "Përgjigjuni pyetjeve të produkteve, gjurmoni porositë dhe menaxhoni kthimet — pa rritur stafin.", image: "https://picsum.photos/seed/persona13/400/300" },
      { title: "Biznese Shërbimesh", description: "Kualifikoni lide, rezervoni takime dhe përgjigjuni pyetjeve të çmimeve ndërkohë që flini.", image: "https://picsum.photos/seed/persona14/400/300" },
      { title: "Kompani SaaS", description: "Menaxhoni mbështetjen e nivelit të parë, udhëzoni përdoruesit nëpër onboarding dhe shfaqni dokumentet e duhura para se të ngrihet një biletë.", image: "https://picsum.photos/seed/persona15/400/300" },
    ],
    testimonials: [
      { quote: "Chatbot-i ynë menaxhon automatikisht 60% të biletave të mbështetjes. Ekipi ynë tani fokusohet në gjërat komplekse që vërtet kanë nevojë për njerëz.", name: "Rachel Kim", role: "Drejtoreshë Mbështetjeje, Nexus App", avatar: "https://picsum.photos/seed/av9/100/100" },
      { quote: "Kalëm nga humbja e lideve pas orëve të punës në kapjen e çdo lidi. Chatbot-i e pagoi veten brenda muajit të parë.", name: "David Torres", role: "Themelues, TorresGroup", avatar: "https://picsum.photos/seed/av10/100/100" },
    ],
    faq: [
      { question: "Sa i zgjuar është chatbot-i?", answer: "Fuqizohet nga i njëjti AI prapa ChatGPT, i trajnuar specifikisht mbi përmbajtjen e biznesit tuaj. Kupton gjuhën natyrale dhe menaxhon pyetjet vazhdimtare, jo vetëm fjalë kyçe." },
      { question: "Çfarë nëse nuk di përgjigjen?", answer: "Ndërtojmë një rrjedhë dorëzimi te njeriu — boti njeh kur është jashtë aftësive të tij dhe kalon bisedën me hijeshi tek ekipi juaj nëpër email, Slack ose chat live." },
      { question: "Si e trajnoni mbi biznesin tonë?", answer: "E ushqejmë me faqen tuaj, FAQ-et, dokumentet e produkteve dhe gjithçka tjetër relevante. Rishikoni bisedat shembull para lansimit dhe ne rafinojmë bazuar në komentet tuaja." },
      { question: "Ku mund të vendoset chatbot-i?", answer: "Faqja juaj është e paracaktuar. Mund të vendosim gjithashtu në WhatsApp Business, Facebook Messenger dhe kanale të tjera në varësi të vendit ku janë klientët tuaj." },
    ],
  },
  {
    slug: "seo-google-maps",
    number: "06",
    icon: MapPin,
    color: "gold",
    title: "SEO & Google Maps",
    tagline: "Shfaquni ku kërkojnë klientët tuaj.",
    description:
      "Bëjmë biznesin tuaj të renkohet në Google — si në kërkim organik ashtu edhe në Google Maps. Më shumë dukshmëri, më shumë klikime, më shumë klientë që vijnë te dyert tuaja.",
    heroImage: "https://picsum.photos/seed/seomaps1/1200/800",
    stats: [
      { value: "Top 3", label: "Objektivi lokal" },
      { value: "3–6 muaj", label: "Për të parë rezultate" },
      { value: "46%", label: "Kërkimet janë lokale" },
    ],
    includes: [
      { title: "Profil Google Business", description: "Ngritje dhe optimizim i plotë i listimit tuaj GBP — kategori, foto, shërbime dhe orare." },
      { title: "Hulumtim Fjalësh Kyçe Lokale", description: "Gjejmë saktësisht çfarë kërkojnë klientët tuaj dhe ndërtojmë strategjinë tuaj rreth atyre termave." },
      { title: "SEO On-Page", description: "Title tags, meta descriptions, tituj dhe schema markup të optimizuara në çdo faqe kyçe." },
      { title: "Ndërtim Citimesh", description: "Biznesi juaj i listuar në mënyrë të qëndrueshme nëpër direktori — Google, Bing, Apple Maps dhe shumë të tjerë." },
      { title: "Strategji Vlerësimesh", description: "Sistem për të gjeneruar më shumë vlerësime 5-yllit dhe për t'iu përgjigjur komenteve në mënyrë profesionale." },
      { title: "Raportim Mujor", description: "Raporte të qarta që tregojnë përmirësimet e renkimit, rritjen e trafikut dhe dukshmërinë e hartës me kalimin e kohës." },
    ],
    process: [
      { step: "01", title: "Auditim", description: "Rishikojmë renkimet tuaja aktuale, Profilin Google Business, citimet dhe konkurrentët për të kuptuar saktësisht ku qëndroni." },
      { step: "02", title: "Strategji", description: "Ndërtojmë plan të prioritizuar që synon fjalët kyçe dhe zonat lokale me vlerën më të lartë komerciale për biznesin tuaj." },
      { step: "03", title: "Optimizim", description: "Zbatojmë ndryshimet on-page, ndërtojmë citime, optimizojmë GBP-në tuaj dhe ngrisim sistemin tuaj të gjenerimit të vlerësimeve." },
      { step: "04", title: "Monitorim & Rritje", description: "Gjurmojmë renkimet dhe dukshmërinë çdo muaj, raportojmë mbi progresin dhe vazhdojmë të shtyjmë për pozita më të mira." },
    ],
    whoFor: [
      { title: "Biznese Lokale", description: "Restorante, klinika, palestrë, salone — çdo biznes që mbështetet te klientët lokalë që i gjejnë online.", image: "https://picsum.photos/seed/seopersona1/400/300" },
      { title: "Biznese Zonash Shërbimi", description: "Hidraulikë, elektricistë, kopshtarë — zejtarë që duhet të shfaqen kur dikush kërkon në zonën e tyre.", image: "https://picsum.photos/seed/seopersona2/400/300" },
      { title: "Marka me Shumë Vendndodhje", description: "Biznese me shumë lokacione që kanë nevojë për renkime të qëndrueshme dhe prani GBP nëpër çdo vendndodhje.", image: "https://picsum.photos/seed/seopersona3/400/300" },
    ],
    testimonials: [
      { quote: "Kalëm nga faqja 3 te top 3 i Google Maps në katër muaj. Pyetjet nga kërkimi u rritën mbi 70%.", name: "Amir Hassan", role: "Pronar, Hassan Plumbing", avatar: "https://picsum.photos/seed/seoav1/100/100" },
      { quote: "Listimi ynë i Google Business ishte i padukshëm. Tani është burimi ynë kryesor i klientëve të rinj.", name: "Claire Dubois", role: "Menaxhere, Maison Claire Salon", avatar: "https://picsum.photos/seed/seoav2/100/100" },
    ],
    faq: [
      { question: "Sa kohë duhet për të punuar SEO?", answer: "Shumica e bizneseve fillojnë të shohin përmirësime të rëndësishme të renkimit brenda 3–6 muajsh. SEO lokale dhe rezultatet e Google Maps shpesh lëvizin më shpejt se renkimet organike." },
      { question: "A kam nevojë për faqe interneti për të renkuar në Google Maps?", answer: "Jo — vetëm një Profil Google Business mund të renkohet në pakun lokal. Por të kesh një faqe interneti të mirë-optimizuar rrit ndjeshëm shanset tuaja dhe përmirëson konvertimet." },
      { question: "Çfarë e bën SEO-n lokale të ndryshme nga SEO-ja e zakonshme?", answer: "SEO lokale synon kërkimet me qëllim gjeografik — 'pranë meje' ose pyetje me qytetin. Përfshin optimizimin e Profilit Google Business, citimeve dhe sinjaleve të relevancës lokale." },
      { question: "A menaxhoni vlerësimet?", answer: "Po. Ngrisim një sistem për të nxitur klientët e lumtur të lënë vlerësime dhe ofrojmë shabllone përgjigjesh si për komentet pozitive ashtu edhe për ato negative." },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug)
}
