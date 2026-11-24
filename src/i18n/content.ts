// Single source of truth for all copy on the site.
// Facts here come from the original davitfebuan.com; do not add claims that are not in it.

export type Lang = 'en' | 'id';

export const LINKEDIN = 'https://www.linkedin.com/in/davit-febuan';
export const FORM_ENDPOINT = 'https://formsubmit.co/ajax/davit.febuan@gmail.com';

type Stop = {
  date: string;
  short: string;
  role: string;
  company?: string;
  body: string;
  chapter: 'physical' | 'digital';
};

type Stat = { prefix?: string; value: number; suffix?: string; label: string };

const shared = {
  name: 'Davit Febuan',
  marquee: [
    'EDC Operations', 'QRIS', 'Payment Gateway', 'ATM Network', 'S&OP',
    'Demand Planning', 'Inventory Control', '3PL', 'Lean Six Sigma', 'Budgeting & P&L', 'SOP Design',
  ],
  certs: [
    { name: 'Six Sigma Black Belt', meta: 'Coursera, 2024' },
    { name: 'ISO 9001:2008 & ISO 45001:2018', meta: 'Sintegral, 2012' },
  ],
};

export const content = {
  en: {
    ...shared,
    htmlLang: 'en',
    locale: 'en_US',
    meta: {
      title: 'Davit Febuan, Operations Leader in Digital Payment & E-Channel',
      description:
        'Davit Febuan leads digital payment and e-channel operations in Indonesia: EDC, QRIS, payment gateway and ATM. 15+ years in banking, digital and supply chain.',
    },
    nav: { story: 'Story', journey: 'Journey', expertise: 'Expertise', impact: 'Impact', contact: 'Contact', menu: 'Menu', close: 'Close', switchTo: 'Bahasa Indonesia' },
    a11y: {
      skip: 'Skip to content',
      sections: 'Sections',
      language: 'Language',
      home: 'Davit Febuan, back to start',
      top: 'Davit Febuan, back to top',
      portraitAlt: 'Portrait of Davit Febuan',
      contactPortraitAlt: 'Davit Febuan wearing batik',
    },
    hero: {
      eyebrow: 'Operations Leader · Digital Payment & E-Channel',
      statement:
        'Fifteen years of building operations that keep working at scale. First on warehouse floors, now across a national bank’s payment channels.',
      facts: [
        { k: 'Based in', v: 'Jakarta, Indonesia' },
        { k: 'Now', v: 'E-Channel Services Head, Bank Mega' },
        { k: 'Focus', v: 'EDC · QRIS · Payment gateway · ATM' },
        { k: 'Experience', v: '15+ years' },
      ],
      cta: 'Start a conversation',
      scroll: 'Read the story',
    },
    story: {
      label: 'The story',
      lead:
        'Fifteen years ago I started on a warehouse floor, coordinating deliveries to remote tower sites across Indonesia. Today I lead digital channel strategy for one of the country’s major banks: EDC networks, QRIS, payment gateways and ATM services.',
      p2:
        'What connects those two chapters is the same skill set: building operations that work reliably at scale, under real budget and compliance pressure. I’ve run S&OP for a manufacturing plant, managed a $3M+ annual logistics budget, launched 800 EDC devices in a single year, and now lead the digital channel strategy for a national bank.',
      p3:
        'I’ve worked both sides, physical operations and digital infrastructure, at department-head level. That combination is what I bring to every operation I lead.',
      chapters: [
        { tag: 'Chapter one', title: 'Physical operations', items: 'Warehousing · Manufacturing · Distribution' },
        { tag: 'Chapter two', title: 'Digital infrastructure', items: 'EDC · QRIS · Payment gateway · ATM' },
      ],
    },
    journey: {
      label: 'The journey',
      heading: 'From the warehouse floor to the payment rails',
      chapterNames: { physical: 'Physical operations', digital: 'Digital infrastructure' },
      stops: [
        { date: 'Early career', short: 'Start', role: 'Where it started', body: 'Coordinated deliveries to remote tower sites across Indonesia from the warehouse floor.', chapter: 'physical' },
        { date: '2016 – 2019', short: '2016', role: 'Logistics Manager', company: 'PT Graha Sumber Prima Elektronik', body: 'Managed manufacturing operations and a $3M+ annual logistics budget; delivered $100K first-year savings.', chapter: 'physical' },
        { date: '2019 – 2020', short: '2019', role: 'Distribution Manager', company: 'Bhinneka.com', body: 'Ran national distribution across B2G, B2B, and e-commerce channels; built KPI systems in Power BI.', chapter: 'physical' },
        { date: '2020 – 2024', short: '2020', role: 'Head of Operations', company: 'CT Corp Digital', body: 'Directed end-to-end digital product development, from concept to launch, across the Business Unit.', chapter: 'digital' },
        { date: '2024 – Present', short: '2024', role: 'E-Channel Services Head', company: 'Bank Mega', body: 'Leading strategy for EDC, QRIS, payment gateway, and ATM services across the bank’s e-channel network.', chapter: 'digital' },
      ] as Stop[],
      more: 'Full history on LinkedIn',
    },
    expertise: {
      label: 'Expertise',
      heading: 'What I’ve built my career on',
      hint: 'Select a discipline',
      groups: [
        { title: 'Digital Payment & E-Channel', items: ['EDC Operations', 'QRIS & Payment Gateway', 'ATM Network Management', 'Vendor & Regulatory Compliance'] },
        { title: 'Supply Chain & Logistics', items: ['S&OP & Demand Planning', 'Inventory Control', 'Distribution & 3PL Management', 'Lean & Six Sigma'] },
        { title: 'Leadership & Strategy', items: ['Cross-Functional Team Leadership', 'Budgeting & P&L', 'Process Design (SOP)', 'Stakeholder Management'] },
      ],
    },
    impact: {
      label: 'Impact',
      heading: 'Results, printed plainly',
      note: 'Selected outcomes from banking, digital and supply chain roles. Every figure comes from a role on this page.',
      receipt: {
        merchant: 'DAVIT FEBUAN',
        sub: 'OPERATIONS · JAKARTA',
        type: 'CAREER SUMMARY',
        dateLabel: 'DATE',
        status: 'STATUS: APPROVED',
        thanks: 'THANK YOU',
      },
      stats: [
        { value: 15, suffix: '+', label: 'Years of operations leadership' },
        { value: 800, label: 'EDC devices deployed, year one' },
        { prefix: '$', value: 100, suffix: 'K+', label: 'Logistics cost savings, year one' },
        { value: 99, suffix: '%', label: 'On-time delivery rate' },
        { value: 1, suffix: '%', label: 'Inventory deviation from schedule' },
        { value: 5, suffix: '%+', label: 'Sustained annual cost reduction' },
      ] as Stat[],
    },
    credentials: {
      label: 'Credentials',
      degree: { name: 'Bachelor’s Degree, Bina Nusantara University', meta: 'Jakarta, 2002–2006' },
    },
    contact: {
      label: 'Contact',
      heading: 'Let’s talk.',
      note: 'Whether it’s about payments, operations, or a possible collaboration, I’m happy to connect.',
      card: { role: 'Operations Leader · Jakarta' },
      form: {
        name: 'Name', email: 'Your email', message: 'Message', submit: 'Send message', sending: 'Sending…',
        success: 'Thanks, your message has been sent. I’ll get back to you soon.',
        error: 'The message didn’t go through. Please try again, or reach out on LinkedIn.',
        preview: 'This is a preview. Messages are sent from the live site only.',
      },
      alt: 'Prefer LinkedIn?',
    },
    footer: { rights: 'Jakarta, Indonesia.', top: 'Back to top' },
  },

  id: {
    ...shared,
    htmlLang: 'id',
    locale: 'id_ID',
    meta: {
      title: 'Davit Febuan · Pembayaran Digital & E-Channel',
      description:
        'Davit Febuan memimpin operasional pembayaran digital dan e-channel: EDC, QRIS, payment gateway, dan ATM. 15+ tahun di perbankan, digital, dan rantai pasok.',
    },
    nav: { story: 'Tentang', journey: 'Karier', expertise: 'Keahlian', impact: 'Pencapaian', contact: 'Kontak', menu: 'Menu', close: 'Tutup', switchTo: 'English' },
    a11y: {
      skip: 'Langsung ke konten',
      sections: 'Navigasi bagian',
      language: 'Bahasa',
      home: 'Davit Febuan, ke awal halaman',
      top: 'Davit Febuan, kembali ke atas',
      portraitAlt: 'Foto Davit Febuan',
      contactPortraitAlt: 'Foto Davit Febuan mengenakan batik',
    },
    hero: {
      eyebrow: 'Operations Leader · Pembayaran Digital & E-Channel',
      statement:
        'Lima belas tahun membangun operasi yang tetap andal saat skalanya terus membesar. Berawal dari gudang, kini di kanal pembayaran sebuah bank nasional.',
      facts: [
        { k: 'Domisili', v: 'Jakarta, Indonesia' },
        { k: 'Posisi saat ini', v: 'E-Channel Services Head, Bank Mega' },
        { k: 'Fokus', v: 'EDC · QRIS · Payment gateway · ATM' },
        { k: 'Pengalaman', v: '15+ tahun' },
      ],
      cta: 'Hubungi saya',
      scroll: 'Kenali lebih dekat',
    },
    story: {
      label: 'Tentang',
      lead:
        'Lima belas tahun lalu saya memulai karier dari gudang, mengatur pengiriman ke lokasi-lokasi tower terpencil di berbagai penjuru Indonesia. Kini saya memimpin strategi kanal digital di salah satu bank besar di Indonesia: jaringan EDC, QRIS, payment gateway, dan layanan ATM.',
      p2:
        'Dua babak itu disatukan oleh kemampuan yang sama: membangun operasi yang tetap andal dalam skala besar, di tengah tuntutan anggaran dan kepatuhan yang nyata. Saya pernah menjalankan S&OP sebuah pabrik, mengelola anggaran logistik lebih dari US$3 juta per tahun, meluncurkan 800 mesin EDC dalam setahun, dan kini memimpin strategi kanal digital sebuah bank nasional.',
      p3:
        'Saya sudah menangani kedua sisi, operasi lapangan dan infrastruktur digital, setingkat kepala departemen. Perpaduan itulah yang saya bawa ke setiap operasi yang saya pimpin.',
      chapters: [
        { tag: 'Babak pertama', title: 'Operasi lapangan', items: 'Pergudangan · Manufaktur · Distribusi' },
        { tag: 'Babak kedua', title: 'Infrastruktur digital', items: 'EDC · QRIS · Payment gateway · ATM' },
      ],
    },
    journey: {
      label: 'Karier',
      heading: 'Dari gudang ke infrastruktur pembayaran',
      chapterNames: { physical: 'Operasi lapangan', digital: 'Infrastruktur digital' },
      stops: [
        { date: 'Awal karier', short: 'Awal', role: 'Titik awal', body: 'Mengatur pengiriman dari gudang ke lokasi-lokasi tower terpencil di berbagai penjuru Indonesia.', chapter: 'physical' },
        { date: '2016 – 2019', short: '2016', role: 'Logistics Manager', company: 'PT Graha Sumber Prima Elektronik', body: 'Mengelola operasional pabrik dan anggaran logistik lebih dari US$3 juta per tahun. Menghasilkan penghematan US$100 ribu di tahun pertama.', chapter: 'physical' },
        { date: '2019 – 2020', short: '2019', role: 'Distribution Manager', company: 'Bhinneka.com', body: 'Memimpin distribusi nasional untuk kanal B2G, B2B, dan e-commerce, serta membangun sistem KPI di Power BI.', chapter: 'physical' },
        { date: '2020 – 2024', short: '2020', role: 'Head of Operations', company: 'CT Corp Digital', body: 'Memimpin pengembangan produk digital, dari konsep hingga peluncuran, untuk seluruh unit bisnis.', chapter: 'digital' },
        { date: '2024 – Sekarang', short: '2024', role: 'E-Channel Services Head', company: 'Bank Mega', body: 'Memimpin strategi layanan EDC, QRIS, payment gateway, dan ATM di seluruh jaringan e-channel bank.', chapter: 'digital' },
      ] as Stop[],
      more: 'Riwayat lengkap di LinkedIn',
    },
    expertise: {
      label: 'Keahlian',
      heading: 'Fondasi karier saya',
      hint: 'Pilih bidang',
      groups: [
        { title: 'Pembayaran Digital & E-Channel', items: ['Operasional EDC', 'QRIS & Payment Gateway', 'Pengelolaan Jaringan ATM', 'Kepatuhan Vendor & Regulasi'] },
        { title: 'Rantai Pasok & Logistik', items: ['S&OP dan Perencanaan Permintaan', 'Pengendalian Persediaan', 'Distribusi & Pengelolaan 3PL', 'Lean & Six Sigma'] },
        { title: 'Kepemimpinan & Strategi', items: ['Memimpin Tim Lintas Fungsi', 'Penganggaran & P&L', 'Penyusunan Proses & SOP', 'Pengelolaan Stakeholder'] },
      ],
    },
    impact: {
      label: 'Pencapaian',
      heading: 'Hasil kerja, dicetak apa adanya',
      note: 'Sebagian hasil dari peran saya di perbankan, digital, dan rantai pasok. Semua angka berasal dari jabatan yang tercantum di halaman ini.',
      receipt: {
        merchant: 'DAVIT FEBUAN',
        sub: 'OPERASIONAL · JAKARTA',
        type: 'RINGKASAN KARIER',
        dateLabel: 'TANGGAL',
        status: 'STATUS: DISETUJUI',
        thanks: 'TERIMA KASIH',
      },
      stats: [
        { value: 15, suffix: '+', label: 'Tahun memimpin operasional' },
        { value: 800, label: 'Mesin EDC terpasang di tahun pertama' },
        { prefix: '$', value: 100, suffix: 'K+', label: 'Penghematan biaya logistik di tahun pertama' },
        { value: 99, suffix: '%', label: 'Pengiriman tepat waktu' },
        { value: 1, suffix: '%', label: 'Selisih persediaan terhadap jadwal' },
        { value: 5, suffix: '%+', label: 'Penurunan biaya tahunan yang konsisten' },
      ] as Stat[],
    },
    credentials: {
      label: 'Sertifikasi & Pendidikan',
      degree: { name: 'Sarjana (S1), Universitas Bina Nusantara', meta: 'Jakarta, 2002–2006' },
    },
    contact: {
      label: 'Kontak',
      heading: 'Mari berbincang.',
      note: 'Untuk diskusi seputar pembayaran, operasional, atau peluang kolaborasi, silakan kirim pesan.',
      card: { role: 'Operations Leader · Jakarta' },
      form: {
        name: 'Nama', email: 'Email', message: 'Pesan', submit: 'Kirim pesan', sending: 'Mengirim…',
        success: 'Terima kasih, pesan Anda sudah terkirim. Saya akan segera membalas.',
        error: 'Pesan belum terkirim. Silakan coba lagi, atau hubungi saya lewat LinkedIn.',
        preview: 'Ini pratinjau. Pesan hanya terkirim dari situs live.',
      },
      alt: 'Atau lewat LinkedIn',
    },
    footer: { rights: 'Jakarta, Indonesia.', top: 'Kembali ke atas' },
  },
};

export type Content = (typeof content)['en'];
