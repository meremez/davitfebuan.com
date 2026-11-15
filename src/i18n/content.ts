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
        'Davit Febuan leads digital payment and e-channel operations in Indonesia (EDC, QRIS, payment gateway and ATM) with 15+ years across banking, digital and supply chain operations.',
    },
    nav: { story: 'Story', journey: 'Journey', expertise: 'Expertise', impact: 'Impact', contact: 'Contact', menu: 'Menu', close: 'Close', switchTo: 'Bahasa Indonesia' },
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
      heading: 'Three disciplines, one operating habit',
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
      form: {
        name: 'Name', email: 'Your email', message: 'Message', submit: 'Send message', sending: 'Sending…',
        success: 'Thanks, your message has been sent. I’ll get back to you soon.',
        error: 'The message didn’t go through. Please try again, or reach out on LinkedIn.',
        preview: 'This is a preview. Messages are sent from the live site only.',
      },
      alt: 'Prefer LinkedIn?',
    },
    footer: { rights: 'Jakarta, Indonesia.', top: 'Back to top', local: 'Local time in Jakarta' },
  },

  id: {
    ...shared,
    htmlLang: 'id',
    locale: 'id_ID',
    meta: {
      title: 'Davit Febuan, Pemimpin Operasional Pembayaran Digital & E-Channel',
      description:
        'Davit Febuan memimpin operasional pembayaran digital dan e-channel di Indonesia (EDC, QRIS, payment gateway, dan ATM) dengan pengalaman 15+ tahun di perbankan, digital, dan rantai pasok.',
    },
    nav: { story: 'Cerita', journey: 'Perjalanan', expertise: 'Keahlian', impact: 'Dampak', contact: 'Kontak', menu: 'Menu', close: 'Tutup', switchTo: 'English' },
    hero: {
      eyebrow: 'Pemimpin Operasional · Pembayaran Digital & E-Channel',
      statement:
        'Lima belas tahun membangun operasional yang tetap andal dalam skala besar. Dimulai dari lantai gudang, kini di kanal pembayaran sebuah bank nasional.',
      facts: [
        { k: 'Berbasis di', v: 'Jakarta, Indonesia' },
        { k: 'Saat ini', v: 'E-Channel Services Head, Bank Mega' },
        { k: 'Fokus', v: 'EDC · QRIS · Payment gateway · ATM' },
        { k: 'Pengalaman', v: '15+ tahun' },
      ],
      cta: 'Mulai percakapan',
      scroll: 'Baca ceritanya',
    },
    story: {
      label: 'Cerita',
      lead:
        'Lima belas tahun lalu saya memulai karier di lantai gudang, mengoordinasikan pengiriman ke lokasi tower terpencil di seluruh Indonesia. Hari ini saya memimpin strategi kanal digital untuk salah satu bank terbesar di Indonesia: jaringan EDC, QRIS, payment gateway, dan layanan ATM.',
      p2:
        'Yang menghubungkan dua babak karier itu adalah kemampuan yang sama: membangun operasional yang berjalan andal dalam skala besar, di bawah tekanan anggaran dan kepatuhan yang nyata. Saya pernah menjalankan S&OP untuk pabrik manufaktur, mengelola anggaran logistik tahunan lebih dari $3 juta, meluncurkan 800 perangkat EDC dalam satu tahun, dan kini memimpin strategi kanal digital untuk bank nasional.',
      p3:
        'Saya sudah menjalani kedua sisi, operasional fisik dan infrastruktur digital, di level kepala departemen. Kombinasi itu yang saya bawa ke setiap operasional yang saya pimpin.',
      chapters: [
        { tag: 'Babak satu', title: 'Operasional fisik', items: 'Pergudangan · Manufaktur · Distribusi' },
        { tag: 'Babak dua', title: 'Infrastruktur digital', items: 'EDC · QRIS · Payment gateway · ATM' },
      ],
    },
    journey: {
      label: 'Perjalanan',
      heading: 'Dari lantai gudang ke jalur pembayaran',
      chapterNames: { physical: 'Operasional fisik', digital: 'Infrastruktur digital' },
      stops: [
        { date: 'Awal karier', short: 'Awal', role: 'Titik awal', body: 'Mengoordinasikan pengiriman ke lokasi tower terpencil di seluruh Indonesia dari lantai gudang.', chapter: 'physical' },
        { date: '2016 – 2019', short: '2016', role: 'Logistics Manager', company: 'PT Graha Sumber Prima Elektronik', body: 'Mengelola operasional manufaktur dan anggaran logistik tahunan lebih dari $3 juta; menghasilkan penghematan $100 ribu di tahun pertama.', chapter: 'physical' },
        { date: '2019 – 2020', short: '2019', role: 'Distribution Manager', company: 'Bhinneka.com', body: 'Menjalankan distribusi nasional untuk kanal B2G, B2B, dan e-commerce; membangun sistem KPI dengan Power BI.', chapter: 'physical' },
        { date: '2020 – 2024', short: '2020', role: 'Head of Operations', company: 'CT Corp Digital', body: 'Mengarahkan pengembangan produk digital dari konsep hingga peluncuran di seluruh Unit Bisnis.', chapter: 'digital' },
        { date: '2024 – Sekarang', short: '2024', role: 'E-Channel Services Head', company: 'Bank Mega', body: 'Memimpin strategi EDC, QRIS, payment gateway, dan layanan ATM di seluruh jaringan e-channel bank.', chapter: 'digital' },
      ] as Stop[],
      more: 'Riwayat lengkap di LinkedIn',
    },
    expertise: {
      label: 'Keahlian',
      heading: 'Tiga disiplin, satu kebiasaan kerja',
      hint: 'Pilih disiplin',
      groups: [
        { title: 'Pembayaran Digital & E-Channel', items: ['Operasional EDC', 'QRIS & Payment Gateway', 'Manajemen Jaringan ATM', 'Kepatuhan Vendor & Regulasi'] },
        { title: 'Rantai Pasok & Logistik', items: ['Perencanaan S&OP & Demand', 'Kontrol Inventori', 'Manajemen Distribusi & 3PL', 'Lean & Six Sigma'] },
        { title: 'Kepemimpinan & Strategi', items: ['Kepemimpinan Tim Lintas Fungsi', 'Penganggaran & P&L', 'Perancangan Proses (SOP)', 'Manajemen Pemangku Kepentingan'] },
      ],
    },
    impact: {
      label: 'Dampak',
      heading: 'Hasil, tercetak apa adanya',
      note: 'Hasil pilihan dari peran di perbankan, digital, dan rantai pasok. Setiap angka berasal dari peran yang ada di halaman ini.',
      receipt: {
        merchant: 'DAVIT FEBUAN',
        sub: 'OPERASIONAL · JAKARTA',
        type: 'RINGKASAN KARIER',
        dateLabel: 'TANGGAL',
        status: 'STATUS: DISETUJUI',
        thanks: 'TERIMA KASIH',
      },
      stats: [
        { value: 15, suffix: '+', label: 'Tahun kepemimpinan operasional' },
        { value: 800, label: 'Perangkat EDC terpasang, tahun pertama' },
        { prefix: '$', value: 100, suffix: 'K+', label: 'Penghematan biaya logistik, tahun pertama' },
        { value: 99, suffix: '%', label: 'Tingkat pengiriman tepat waktu' },
        { value: 1, suffix: '%', label: 'Deviasi inventori dari jadwal' },
        { value: 5, suffix: '%+', label: 'Efisiensi biaya tahunan berkelanjutan' },
      ] as Stat[],
    },
    credentials: {
      label: 'Kredensial',
      degree: { name: 'Sarjana (S1), Universitas Bina Nusantara', meta: 'Jakarta, 2002–2006' },
    },
    contact: {
      label: 'Kontak',
      heading: 'Mari bicara.',
      note: 'Baik soal pembayaran, operasional, atau peluang kolaborasi, saya senang terhubung.',
      form: {
        name: 'Nama', email: 'Email Anda', message: 'Pesan', submit: 'Kirim pesan', sending: 'Mengirim…',
        success: 'Terima kasih, pesan Anda sudah terkirim. Saya akan segera membalas.',
        error: 'Pesan belum terkirim. Silakan coba lagi, atau hubungi lewat LinkedIn.',
        preview: 'Ini pratinjau. Pesan hanya dikirim dari situs live.',
      },
      alt: 'Lebih suka LinkedIn?',
    },
    footer: { rights: 'Jakarta, Indonesia.', top: 'Kembali ke atas', local: 'Waktu lokal Jakarta' },
  },
};

export type Content = (typeof content)['en'];
