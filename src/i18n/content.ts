// Single source of truth for all copy on the site.
// Fact sources: the original davitfebuan.com, the owner's CV (received 2026-11-24) and the owner's own
// statements in the build conversation. Ask before adding any other claim (numbers, employers, dates).
//
// Current-role figures (impact.now) are gated: `approved: false` hides them in production builds until the
// owner confirms Bank Mega allows publishing them. They still show in the private artifact and staging.

export type Lang = 'en' | 'id';

export const LINKEDIN = 'https://www.linkedin.com/in/davit-febuan';
export const FORM_ENDPOINT = 'https://formsubmit.co/ajax/davit.febuan@gmail.com';

export type Chapter = 'payments' | 'supply' | 'digital';

type Stop = {
  date: string;
  short: string;
  role: string;
  company?: string;
  body: string;
  chapter: Chapter;
};

type Stat = { year?: string; prefix?: string; value: number; suffix?: string; label: string };
type Metric = { value: string; label: string };
type Stage = { key: string; name: string; now: string; learned: { year: string; text: string }[] };

const shared = {
  name: 'Davit Febuan',
  marquee: [
    'ATM Operations', 'EDC', 'QRIS', 'Payment Gateway', 'Vendor & SLA', 'S&OP',
    'Reverse Logistics', 'Inventory Control', '3PL', 'Lean Six Sigma', 'Customer Service Set-up',
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
        'Davit Febuan keeps the machines behind digital payments running at Bank Mega: ATM, EDC and QRIS. In payments and supply chain operations since 2006.',
    },
    nav: { story: 'Story', lifecycle: 'Lifecycle', journey: 'Journey', expertise: 'Expertise', impact: 'Impact', contact: 'Contact', menu: 'Menu', close: 'Close', switchTo: 'Bahasa Indonesia' },
    a11y: {
      skip: 'Skip to content',
      sections: 'Sections',
      language: 'Language',
      home: 'Davit Febuan, back to start',
      top: 'Davit Febuan, back to top',
      portraitAlt: 'Portrait of Davit Febuan',
      contactPortraitAlt: 'Davit Febuan wearing batik',
      stages: 'Lifecycle stages',
    },
    hero: {
      eyebrow: 'Operations Leader · Digital Payment & E-Channel',
      statement:
        'I keep the machines behind digital payments running: ATMs, EDC terminals and QRIS merchants, from installation to retrieval.',
      facts: [
        { k: 'Based in', v: 'Jakarta, Indonesia' },
        { k: 'Now', v: 'E-Channel Services Head, Bank Mega' },
        { k: 'Focus', v: 'ATM · EDC · QRIS · Payment gateway' },
        { k: 'Career', v: 'Since 2006' },
      ],
      cta: 'Start a conversation',
      scroll: 'Read the story',
    },
    story: {
      label: 'The story',
      lead:
        'In 2007 I joined Bank Mega’s merchant operations team, installing and maintaining EDC terminals. We rolled out 800 in the first year. Thirteen years later I came back to the same bank to lead its entire e-channel: ATM, EDC, QRIS and payment gateway.',
      p2:
        'In between, I learned the other half of the job. I delivered and installed equipment at remote tower sites, ran S&OP and a $3M+ logistics budget at an electronics manufacturer, ran national distribution for an e-commerce company, and set up operations for new digital businesses in the CT Corp ecosystem.',
      p3:
        'Those years taught me to treat every ATM and EDC terminal the way a supply chain treats any asset: install it, watch it, keep it supplied, fix it fast, and bring it back when its job is done.',
      chapters: [
        { tag: '2007 – 2011', title: 'Merchant operations, Bank Mega', items: 'EDC installation · Maintenance · Chargebacks' },
        { tag: '2011 – 2024', title: 'Supply chain & digital operations', items: 'Tower sites · S&OP · Distribution · Ecosystem set-up' },
        { tag: '2024 – now', title: 'E-channel head, Bank Mega', items: 'ATM · EDC · QRIS · Payment gateway' },
      ],
    },
    lifecycle: {
      label: 'Lifecycle',
      heading: 'The life of a payment machine, and where I learned each stage',
      intro: 'Every ATM, EDC terminal and QRIS merchant goes through the same five stages. Select one.',
      nowLabel: 'Today at Bank Mega',
      learnedLabel: 'Where I learned it',
      loop: 'Then the cycle starts again.',
      stages: [
        { key: 'install', name: 'Install', now: 'Placing ATMs, installing EDC terminals at merchants and onboarding new QRIS merchants.',
          learned: [{ year: '2007', text: 'Installed EDC terminals for Bank Mega merchants' }, { year: '2011', text: 'Delivered and installed equipment at tower sites across Indonesia, including remote areas' }] },
        { key: 'monitor', name: 'Monitor', now: 'Tracking each machine’s availability against monthly targets and vendor SLAs.',
          learned: [{ year: '2016', text: 'Set the KPIs and SLAs for logistics performance' }, { year: '2019', text: 'Built Power BI dashboards for distribution performance' }] },
        { key: 'maintain', name: 'Maintain', now: 'Coordinating repairs and preventive maintenance with vendors under SLA, and handling QRIS maintenance requests.',
          learned: [{ year: '2007', text: 'Maintained EDC terminals and resolved disputes and chargebacks' }, { year: '2016', text: 'Wrote the SOPs for after-sales parts service, aligned with ISO 9001' }] },
        { key: 'resupply', name: 'Resupply', now: 'Keeping machines stocked with what they consume: paper rolls, stickers, UPS units and cash cassettes.',
          learned: [{ year: '2013', text: 'Ran S&OP and demand planning, keeping inventory within 1% of schedule' }, { year: '2016', text: 'Managed sourcing and purchasing on a $3M+ annual budget' }] },
        { key: 'retrieve', name: 'Retrieve', now: 'Pulling machines back from the field and closing QRIS merchant accounts.',
          learned: [{ year: '2019', text: 'Coordinated 3PL and courier partners nationwide' }, { year: '2020', text: 'Set up reverse logistics, returns and refunds for new digital businesses' }] },
      ] as Stage[],
    },
    journey: {
      label: 'The journey',
      heading: 'Bank Mega, then the supply chain, then Bank Mega again',
      chapterNames: { payments: 'Payments', supply: 'Supply chain', digital: 'Digital operations' } as Record<Chapter, string>,
      stops: [
        { date: '2006 – 2007', short: '2006', role: 'IT Staff', company: 'UD. Buana', body: 'Kept hardware, software and networks running across 4 warehouses and 3 shops, and produced the daily and monthly inventory and sales reports.', chapter: 'supply' },
        { date: '2007 – 2011', short: '2007', role: 'Merchant Operations', company: 'Bank Mega', body: 'Ran EDC operations end to end: installation, maintenance, daily transactions and chargebacks. Rolled out 800 terminals in the first year and achieved Visa and Mastercard UAT certification.', chapter: 'payments' },
        { date: '2011 – 2013', short: '2011', role: 'Logistics Supervisor', company: 'PT Graha Sumber Prima Elektronik', body: 'Managed nationwide delivery and installation to tower sites, including remote areas, at 99% on time with no physical defects.', chapter: 'supply' },
        { date: '2013 – 2016', short: '2013', role: 'PPIC Supervisor', company: 'PT Graha Sumber Prima Elektronik', body: 'Led monthly S&OP and weekly demand planning, kept inventory within 1% of production schedules, and applied Lean and Six Sigma.', chapter: 'supply' },
        { date: '2016 – 2019', short: '2016', role: 'Logistics Manager', company: 'PT Graha Sumber Prima Elektronik', body: 'Ran manufacturing operations, sourcing and logistics on a $3M+ annual budget. Saved $100K in the first year and cut costs by 5%+ every year after.', chapter: 'supply' },
        { date: '2019 – 2020', short: '2019', role: 'Distribution Manager', company: 'Bhinneka.com', body: 'Ran sourcing, warehousing and delivery for B2G, B2B and e-commerce customers nationwide, routing 200+ deliveries a day and tracking them in Power BI.', chapter: 'supply' },
        { date: '2020 – 2024', short: '2020', role: 'Head of Operations', company: 'CT Corp Digital', body: 'Set up operations for new digital businesses in the CT Corp ecosystem, including Transmart, Allo Bank, Grab grocery and Female Daily: order-to-delivery flow, reverse logistics, CRM and customer service. Stayed on through launch, then handed each one over.', chapter: 'digital' },
        { date: '2024 – Present', short: '2024', role: 'E-Channel Services Head', company: 'Bank Mega', body: 'Back at Bank Mega to lead ATM, EDC, QRIS and payment gateway services: strategy, vendor agreements, the maintenance budget, policies and the team.', chapter: 'payments' },
      ] as Stop[],
      more: 'Full history on LinkedIn',
    },
    expertise: {
      label: 'Expertise',
      heading: 'What I’ve built my career on',
      hint: 'Select a discipline',
      groups: [
        { title: 'Digital Payment & E-Channel', items: ['ATM network operations', 'EDC & merchant operations', 'QRIS merchant lifecycle', 'Payment gateway services', 'Vendor & SLA management'] },
        { title: 'Supply Chain & Logistics', items: ['S&OP & demand planning', 'Inventory control', 'Distribution & 3PL', 'Reverse logistics', 'Lean & Six Sigma'] },
        { title: 'Operations Set-up & Leadership', items: ['Setting up operations for new businesses', 'CRM & customer service set-up', 'Budgeting, OPEX & P&L', 'Policies, SOPs & compliance', 'Cross-functional team leadership'] },
      ],
    },
    impact: {
      label: 'Impact',
      heading: 'Results, printed plainly',
      note: 'Today’s numbers from Bank Mega, and the record from every role before it on the receipt.',
      noteGated: 'Selected results from every role since 2007. The receipt carries the year each one came from.',
      now: {
        approved: false,
        label: 'Today at Bank Mega',
        featured: { value: '>99.8%', label: 'Machine availability, every month' } as Metric,
        metrics: [
          { value: '±500', label: 'ATMs managed' },
          { value: '±2,000', label: 'EDC terminals managed' },
          { value: '±2,000', label: 'New QRIS merchants a month' },
          { value: '±10', label: 'Active vendors' },
        ] as Metric[],
      },
      highlights: [
        { value: '800', label: 'EDC terminals rolled out in year one (2007)' },
        { value: '99%', label: 'On-time delivery to tower sites (2011–13)' },
        { value: '$100K', label: 'Logistics savings in year one (2016)' },
        { value: '5%+', label: 'Annual cost reduction (2017–19)' },
      ] as Metric[],
      receipt: {
        merchant: 'DAVIT FEBUAN',
        sub: 'OPERATIONS · SINCE 2006',
        type: 'CAREER RECORD',
        dateLabel: 'DATE',
        status: 'STATUS: APPROVED',
        thanks: 'THANK YOU',
      },
      stats: [
        { year: '2007', value: 800, label: 'EDC terminals rolled out, year one' },
        { year: '2011', value: 99, suffix: '%', label: 'On-time delivery to tower sites' },
        { year: '2013', value: 1, suffix: '%', label: 'Inventory deviation from schedule' },
        { year: '2016', prefix: '$', value: 100, suffix: 'K', label: 'Logistics savings, year one' },
        { year: '2017', value: 5, suffix: '%+', label: 'Annual cost reduction, every year after' },
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
        'Davit Febuan menjaga mesin di balik pembayaran digital Bank Mega tetap berjalan: ATM, EDC, dan QRIS. Di operasional pembayaran dan rantai pasok sejak 2006.',
    },
    nav: { story: 'Tentang', lifecycle: 'Siklus', journey: 'Karier', expertise: 'Keahlian', impact: 'Pencapaian', contact: 'Kontak', menu: 'Menu', close: 'Tutup', switchTo: 'English' },
    a11y: {
      skip: 'Langsung ke konten',
      sections: 'Navigasi bagian',
      language: 'Bahasa',
      home: 'Davit Febuan, ke awal halaman',
      top: 'Davit Febuan, kembali ke atas',
      portraitAlt: 'Foto Davit Febuan',
      contactPortraitAlt: 'Foto Davit Febuan mengenakan batik',
      stages: 'Tahap siklus',
    },
    hero: {
      eyebrow: 'Operations Leader · Pembayaran Digital & E-Channel',
      statement:
        'Saya memastikan mesin di balik pembayaran digital tetap menyala: ATM, terminal EDC, dan merchant QRIS, dari pemasangan sampai penarikan.',
      facts: [
        { k: 'Domisili', v: 'Jakarta, Indonesia' },
        { k: 'Posisi saat ini', v: 'E-Channel Services Head, Bank Mega' },
        { k: 'Fokus', v: 'ATM · EDC · QRIS · Payment gateway' },
        { k: 'Karier', v: 'Sejak 2006' },
      ],
      cta: 'Hubungi saya',
      scroll: 'Kenali lebih dekat',
    },
    story: {
      label: 'Tentang',
      lead:
        'Tahun 2007 saya bergabung dengan tim merchant operations Bank Mega, memasang dan merawat terminal EDC. Di tahun pertama kami memasang 800 unit. Tiga belas tahun kemudian saya kembali ke bank yang sama untuk memimpin seluruh e-channel-nya: ATM, EDC, QRIS, dan payment gateway.',
      p2:
        'Di antaranya, saya mempelajari separuh pekerjaan yang lain. Saya mengirim dan memasang perangkat di lokasi-lokasi tower terpencil, menjalankan S&OP dan anggaran logistik lebih dari US$3 juta di sebuah produsen elektronik, memimpin distribusi nasional sebuah perusahaan e-commerce, dan menyiapkan operasional bisnis-bisnis digital baru di ekosistem CT Corp.',
      p3:
        'Dari situ saya belajar memperlakukan setiap ATM dan terminal EDC seperti aset dalam rantai pasok: dipasang, dipantau, dijaga pasokannya, cepat diperbaiki, dan ditarik kembali saat tugasnya selesai.',
      chapters: [
        { tag: '2007 – 2011', title: 'Merchant operations, Bank Mega', items: 'Pemasangan EDC · Perawatan · Chargeback' },
        { tag: '2011 – 2024', title: 'Rantai pasok & operasional digital', items: 'Lokasi tower · S&OP · Distribusi · Setup ekosistem' },
        { tag: '2024 – sekarang', title: 'E-channel head, Bank Mega', items: 'ATM · EDC · QRIS · Payment gateway' },
      ],
    },
    lifecycle: {
      label: 'Siklus',
      heading: 'Siklus hidup mesin pembayaran, dan di mana saya mempelajari setiap tahapnya',
      intro: 'Setiap ATM, terminal EDC, dan merchant QRIS melewati lima tahap yang sama. Pilih salah satu.',
      nowLabel: 'Sekarang di Bank Mega',
      learnedLabel: 'Tempat saya mempelajarinya',
      loop: 'Lalu siklusnya dimulai lagi.',
      stages: [
        { key: 'install', name: 'Pasang', now: 'Menempatkan ATM, memasang terminal EDC di merchant, dan mendaftarkan merchant QRIS baru.',
          learned: [{ year: '2007', text: 'Memasang terminal EDC untuk merchant Bank Mega' }, { year: '2011', text: 'Mengirim dan memasang perangkat di lokasi tower di seluruh Indonesia, termasuk daerah terpencil' }] },
        { key: 'monitor', name: 'Pantau', now: 'Memantau availability setiap mesin terhadap target bulanan dan SLA vendor.',
          learned: [{ year: '2016', text: 'Menyusun KPI dan SLA untuk kinerja logistik' }, { year: '2019', text: 'Membangun dashboard Power BI untuk kinerja distribusi' }] },
        { key: 'maintain', name: 'Rawat', now: 'Mengoordinasikan perbaikan dan perawatan berkala bersama vendor sesuai SLA, serta menangani permintaan maintenance QRIS.',
          learned: [{ year: '2007', text: 'Merawat terminal EDC serta menyelesaikan sengketa dan chargeback' }, { year: '2016', text: 'Menyusun SOP layanan suku cadang purnajual sesuai ISO 9001' }] },
        { key: 'resupply', name: 'Suplai', now: 'Menjaga pasokan kebutuhan mesin: kertas, stiker, UPS, dan kaset uang.',
          learned: [{ year: '2013', text: 'Menjalankan S&OP dan perencanaan permintaan, dengan selisih persediaan di bawah 1%' }, { year: '2016', text: 'Mengelola sourcing dan pembelian dengan anggaran lebih dari US$3 juta per tahun' }] },
        { key: 'retrieve', name: 'Tarik', now: 'Menarik mesin dari lapangan dan menutup akun merchant QRIS.',
          learned: [{ year: '2019', text: 'Mengoordinasikan mitra 3PL dan kurir di seluruh Indonesia' }, { year: '2020', text: 'Menyiapkan reverse logistics, retur, dan refund untuk bisnis digital baru' }] },
      ] as Stage[],
    },
    journey: {
      label: 'Karier',
      heading: 'Bank Mega, lalu rantai pasok, lalu kembali ke Bank Mega',
      chapterNames: { payments: 'Pembayaran', supply: 'Rantai pasok', digital: 'Operasional digital' } as Record<Chapter, string>,
      stops: [
        { date: '2006 – 2007', short: '2006', role: 'IT Staff', company: 'UD. Buana', body: 'Menjaga perangkat keras, perangkat lunak, dan jaringan di 4 gudang dan 3 toko, serta menyusun laporan persediaan dan penjualan harian dan bulanan.', chapter: 'supply' },
        { date: '2007 – 2011', short: '2007', role: 'Merchant Operations', company: 'Bank Mega', body: 'Menjalankan operasional EDC dari hulu ke hilir: pemasangan, perawatan, transaksi harian, dan chargeback. Memasang 800 terminal di tahun pertama dan meraih sertifikasi UAT Visa dan Mastercard.', chapter: 'payments' },
        { date: '2011 – 2013', short: '2011', role: 'Logistics Supervisor', company: 'PT Graha Sumber Prima Elektronik', body: 'Mengelola pengiriman dan pemasangan ke lokasi tower di seluruh Indonesia, termasuk daerah terpencil, dengan 99% tepat waktu dan tanpa kerusakan fisik.', chapter: 'supply' },
        { date: '2013 – 2016', short: '2013', role: 'PPIC Supervisor', company: 'PT Graha Sumber Prima Elektronik', body: 'Memimpin S&OP bulanan dan perencanaan permintaan mingguan, menjaga selisih persediaan di bawah 1% dari jadwal produksi, dan menerapkan Lean serta Six Sigma.', chapter: 'supply' },
        { date: '2016 – 2019', short: '2016', role: 'Logistics Manager', company: 'PT Graha Sumber Prima Elektronik', body: 'Menjalankan operasional pabrik, sourcing, dan logistik dengan anggaran lebih dari US$3 juta per tahun. Menghemat US$100 ribu di tahun pertama dan menurunkan biaya lebih dari 5% setiap tahun setelahnya.', chapter: 'supply' },
        { date: '2019 – 2020', short: '2019', role: 'Distribution Manager', company: 'Bhinneka.com', body: 'Menjalankan sourcing, pergudangan, dan pengiriman untuk pelanggan B2G, B2B, dan e-commerce di seluruh Indonesia, mengatur rute 200+ pengiriman per hari dan memantaunya di Power BI.', chapter: 'supply' },
        { date: '2020 – 2024', short: '2020', role: 'Head of Operations', company: 'CT Corp Digital', body: 'Menyiapkan operasional bisnis-bisnis digital baru di ekosistem CT Corp, antara lain Transmart, Allo Bank, Grab grocery, dan Female Daily: alur pesanan sampai pengiriman, reverse logistics, CRM, dan customer service. Mendampingi sampai berjalan, lalu menyerahterimakan sepenuhnya.', chapter: 'digital' },
        { date: '2024 – Sekarang', short: '2024', role: 'E-Channel Services Head', company: 'Bank Mega', body: 'Kembali ke Bank Mega untuk memimpin layanan ATM, EDC, QRIS, dan payment gateway: strategi, kontrak vendor, anggaran pemeliharaan, kebijakan, dan tim.', chapter: 'payments' },
      ] as Stop[],
      more: 'Riwayat lengkap di LinkedIn',
    },
    expertise: {
      label: 'Keahlian',
      heading: 'Fondasi karier saya',
      hint: 'Pilih bidang',
      groups: [
        { title: 'Pembayaran Digital & E-Channel', items: ['Operasional jaringan ATM', 'Operasional EDC & merchant', 'Siklus merchant QRIS', 'Layanan payment gateway', 'Pengelolaan vendor & SLA'] },
        { title: 'Rantai Pasok & Logistik', items: ['S&OP dan perencanaan permintaan', 'Pengendalian persediaan', 'Distribusi & 3PL', 'Reverse logistics', 'Lean & Six Sigma'] },
        { title: 'Setup Operasional & Kepemimpinan', items: ['Menyiapkan operasional bisnis baru', 'Setup CRM & customer service', 'Anggaran, OPEX & P&L', 'Kebijakan, SOP & kepatuhan', 'Memimpin tim lintas fungsi'] },
      ],
    },
    impact: {
      label: 'Pencapaian',
      heading: 'Hasil kerja, dicetak apa adanya',
      note: 'Angka terkini dari Bank Mega, dan rekam jejak dari setiap jabatan sebelumnya di struk.',
      noteGated: 'Sebagian hasil dari setiap jabatan sejak 2007. Struk mencantumkan tahun asal setiap angka.',
      now: {
        approved: false,
        label: 'Sekarang di Bank Mega',
        featured: { value: '>99,8%', label: 'Availability mesin, setiap bulan' } as Metric,
        metrics: [
          { value: '±500', label: 'ATM dikelola' },
          { value: '±2.000', label: 'Terminal EDC dikelola' },
          { value: '±2.000', label: 'Merchant QRIS baru per bulan' },
          { value: '±10', label: 'Vendor aktif' },
        ] as Metric[],
      },
      highlights: [
        { value: '800', label: 'Terminal EDC terpasang di tahun pertama (2007)' },
        { value: '99%', label: 'Pengiriman tepat waktu ke lokasi tower (2011–13)' },
        { value: '$100K', label: 'Penghematan logistik di tahun pertama (2016)' },
        { value: '5%+', label: 'Penurunan biaya per tahun (2017–19)' },
      ] as Metric[],
      receipt: {
        merchant: 'DAVIT FEBUAN',
        sub: 'OPERASIONAL · SEJAK 2006',
        type: 'REKAM JEJAK KARIER',
        dateLabel: 'TANGGAL',
        status: 'STATUS: DISETUJUI',
        thanks: 'TERIMA KASIH',
      },
      stats: [
        { year: '2007', value: 800, label: 'Terminal EDC terpasang, tahun pertama' },
        { year: '2011', value: 99, suffix: '%', label: 'Pengiriman tepat waktu ke lokasi tower' },
        { year: '2013', value: 1, suffix: '%', label: 'Selisih persediaan terhadap jadwal' },
        { year: '2016', prefix: '$', value: 100, suffix: 'K', label: 'Penghematan logistik, tahun pertama' },
        { year: '2017', value: 5, suffix: '%+', label: 'Penurunan biaya, setiap tahun setelahnya' },
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
