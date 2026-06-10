<script>
const getAppBase = () => {
  if (typeof window === 'undefined') {
    return import.meta.env.BASE_URL || '/';
  }

  if (window.location.protocol === 'file:') {
    return './';
  }

  const currentPath = window.location.pathname;
  const publicPathIndex = window.location.pathname.indexOf('/public/');
  if (publicPathIndex !== -1) {
    return `${window.location.pathname.slice(0, publicPathIndex)}/public/`;
  }

  const projectPathMatch = currentPath.match(/^(.*\/buku-menu)(?:\/|$)/);
  if (projectPathMatch) {
    return `${projectPathMatch[1]}/public/`;
  }

  const viteBase = import.meta.env.BASE_URL || '/';
  return viteBase === './' ? '/' : viteBase;
};

const appBase = getAppBase();
const assetUrl = (path) => {
  if (!path || /^https?:\/\//.test(path)) {
    return path;
  }

  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    return `${window.location.origin}/${path.replace(/^\/+/, '')}`;
  }

  const normalizedBase = appBase.endsWith('/') ? appBase : `${appBase}/`;
  return `${normalizedBase}${path.replace(/^\/+/, '')}`;
};
const outlet = {
  name: 'Happy Puppy Antasari',
  tagline: 'Happy Puppy Antasari',
  address: 'Jl. P Antasari No.2, Air Putih, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75124',
  email: 'happup.samarinda.antasari@gmail.com',
  openingHours: '11.00 AM - 02.00 AM',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Happy%20Puppy%20Antasari%20Samarinda',
  logo: assetUrl('/images/Logohappup.png'),
  bannerLogo: assetUrl('/images/Logohappup.png'),
  whatsappIcon: assetUrl('/images/whatsapp.svg'),
  instagramIcon: assetUrl('/images/instagram.svg'),
  facebookIcon: assetUrl('/images/facebook.svg'),
  whatsappUrl: 'https://wa.me/6282148004822',
  instagramUrl: 'https://www.instagram.com/happup.samarinda.antasari/',
  facebookUrl: 'https://www.facebook.com/happup.samarinda.antasari/',
  supportUrl: 'https://s.shopee.co.id/9pbmUW1TaZ',
  roomSupportLinks: [
    'https://s.shopee.co.id/9pbmUW1TaZ',
    'https://s.shopee.co.id/7KuRVuIcF3',
    'https://s.shopee.co.id/8V6Ou2WWMP',
    'https://s.shopee.co.id/gNXZc9bbE',
    'https://s.shopee.co.id/5fmDWlzu3j',
    'https://s.shopee.co.id/1LdEMj15zW',
    'https://s.shopee.co.id/9AM5h5LMfz',
    'https://s.shopee.co.id/8pjFISaNHR',
    'https://s.shopee.co.id/17qmCDpQJ',
    'https://s.shopee.co.id/1VweYw7Hhq',
  ],
};

const heroImageUrl = assetUrl('/images/Bgweb.jpeg');

const getFallbackMenuImage = (name) => {
  const lowerName = name.toLowerCase();
  const keywordRules = [
    ['mie', '/images/Mie Goreng.png'],
    ['kwetiaw', '/images/Kwetiaw Goreng.png'],
    ['bihun', '/images/Bihun Goreng.png'],
    ['indomie', '/images/INTERNET (2).png'],
    ['chicken wings', '/images/CHIKENWING.png'],
    ['chicken nugget', '/images/CHIKENNUGGET.png'],
    ['kentang', '/images/KENTANGGORENG.png'],
    ['sosis', '/images/SOSISGORENG.png'],
    ['onion ring', '/images/onion-ring.jpg'],
    ['pisang', '/images/PISANGKEJUCOKLAT.png'],
    ['cireng', '/images/Cireng.jpg'],
    ['tempe', '/images/Tempe-Mendoan.jpg'],
    ['tahu', '/images/TAHU-BAKSO.jpeg'],
    ['telur', '/images/TELUR-DADAR.jpg'],
    ['paru', '/images/PARU.jpg'],
    ['pempek', '/images/OTE-OTE.jpg'],
    ['sop iga', '/images/SOP-IGA-SAPI.png'],
    ['ayam lada hitam', '/images/ayam-lada-hitam.png'],
    ['ayam', '/images/resep-ayam-goreng-krispi-korea_43.jpeg'],
    ['sapi', '/images/SAPI-LADA-HITAM.png'],
    ['udang', '/images/UDANGGORENGTEPUNG.png'],
    ['cumi', '/images/cumi-treyaki.png'],
    ['fu yung hai', '/images/fu-yung-hay.jpg'],
    ['cap cay', '/images/CAPCAY.png'],
    ['salad', '/images/salad-buah.png'],
    ['buah', '/images/buah-segar (1).png'],
    ['ice cream', '/images/escream-buah.png'],
    ['frozz', '/images/frozz.webp'],
    ['hexos', '/images/hexos.png'],
    ['chunky', '/images/cb.jpg'],
    ['cadbury', '/images/cadburry.jpg'],
    ['silverqueen', '/images/sq.jpeg'],
    ['delfi', '/images/delfy.webp'],
    ['kacang', '/images/KACANGBAWANG.png'],
    ['pringles', '/images/pringles.jpg'],
    ['chitato', '/images/Chitato.jpg'],
    ['qtela', '/images/qtela.jpg'],
    ['milk shake', '/images/milkshake.png'],
    ['coca-cola', '/images/coca-cola.png'],
    ['fanta', '/images/fanta.jpg'],
    ['sprite', '/images/sprite.jpg'],
    ['pokka', '/images/pokka-greetea.jpeg'],
    ['soda', '/images/soda-gembira.jpg'],
    ['krating', '/images/krating-deng.jpg'],
    ['yakult', '/images/Yakult.jpg'],
    ['air mineral', '/images/cleo.png'],
    ['milo', '/images/dingin.png'],
    ['teh', '/images/dingin.png'],
    ['jeruk', '/images/Jus Jeruk.png'],
    ['susu', '/images/milkshake.png'],
    ['cappuccino', '/images/hot.png'],
    ['kopi', '/images/hot.png'],
    ['rokok', '/images/rokok/sampoerna-mild.jpg'],
    ['marlboro', '/images/rokok/malboro-merah.png'],
    ['marboro', '/images/rokok/malboro-merah.png'],
    ['sampoerna', '/images/rokok/sampoerna-mild.jpg'],
    ['la ', '/images/rokok/la-light.jpg'],
    ['esse', '/images/rokok/esse-change.png'],
    ['korek', '/images/rokok/korek.jpeg'],
  ];

  const matchedRule = keywordRules.find(([keyword]) => lowerName.includes(keyword));
  return assetUrl(matchedRule ? matchedRule[1] : '/images/Logohappup.png');
};

const getProductKnowledge = (name) => {
  const lowerName = name.toLowerCase();
  const knowledgeRules = [
    ['nasi cap cay', 'Nasi hangat dengan tumisan sayur cap cay gurih.'],
    ['nasi goreng seafood', 'Nasi goreng berbumbu dengan campuran seafood.'],
    ['nasi goreng ikan asin', 'Nasi goreng gurih dengan aroma khas ikan asin.'],
    ['nasi goreng jawa', 'Nasi goreng bumbu Jawa dengan rasa manis gurih.'],
    ['nasi goreng hongkong', 'Nasi goreng ringan ala Hongkong dengan isian gurih.'],
    ['nasi goreng sosis', 'Nasi goreng gurih dengan potongan sosis.'],
    ['nasi goreng cumi', 'Nasi goreng gurih dengan tambahan cumi.'],
    ['nasi goreng udang', 'Nasi goreng gurih dengan tambahan udang.'],
    ['nasi goreng ayam', 'Nasi goreng gurih dengan potongan ayam.'],
    ['nasi goreng spesial', 'Nasi goreng favorit dengan topping spesial.'],
    ['nasi goreng original', 'Nasi goreng klasik dengan bumbu gurih.'],
    ['mie goreng seafood', 'Mie goreng berbumbu dengan campuran seafood.'],
    ['mie goreng udang', 'Mie goreng gurih dengan tambahan udang.'],
    ['mie goreng jawa', 'Mie goreng bumbu Jawa dengan rasa manis gurih.'],
    ['mie goreng spesial', 'Mie goreng favorit dengan topping spesial.'],
    ['mie kuah', 'Mie berkuah hangat dengan bumbu gurih.'],
    ['mi godok', 'Mie rebus hangat dengan kuah berbumbu.'],
    ['indomie', 'Indomie dengan telur dan kornet yang mengenyangkan.'],
    ['kwetiaw goreng seafood', 'Kwetiaw goreng kenyal dengan campuran seafood.'],
    ['kwetiaw goreng', 'Kwetiaw goreng kenyal dengan bumbu gurih.'],
    ['bihun goreng seafood', 'Bihun goreng ringan dengan campuran seafood.'],
    ['bihun goreng', 'Bihun goreng berbumbu dengan tekstur lembut.'],
    ['chicken nugget', 'Nugget ayam renyah untuk camilan praktis.'],
    ['chicken wings', 'Sayap ayam gurih dengan tekstur juicy.'],
    ['kentang goreng', 'Kentang goreng renyah cocok untuk berbagi.'],
    ['sosis goreng', 'Sosis goreng gurih dengan bagian luar renyah.'],
    ['onion ring', 'Bawang bombai berbalut tepung renyah.'],
    ['pisang keju coklat', 'Pisang hangat dengan keju dan coklat manis.'],
    ['pisang keju', 'Pisang hangat dengan taburan keju gurih.'],
    ['snack kombinasi', 'Paket camilan campur untuk dinikmati bersama.'],
    ['cireng', 'Aci goreng kenyal dengan bagian luar renyah.'],
    ['tempe mendoan', 'Tempe berbalut tepung tipis khas mendoan.'],
    ['tahu bakso', 'Tahu isi bakso dengan rasa gurih.'],
    ['tahu cabe garam', 'Tahu goreng renyah dengan cabe garam.'],
    ['telur dadar', 'Telur dadar gurih sebagai lauk pendamping.'],
    ['telur mata sapi', 'Telur ceplok sederhana untuk pelengkap menu.'],
    ['paru goreng crispy', 'Paru goreng renyah dengan rasa gurih.'],
    ['paru goreng pedas', 'Paru goreng gurih dengan sensasi pedas.'],
    ['nachos', 'Keripik jagung renyah dengan saus keju.'],
    ['ote-ote', 'Gorengan sayur gurih khas rumahan.'],
    ['pempek', 'Olahan ikan gurih dengan cita rasa khas Palembang.'],
    ['sop iga', 'Sup iga sapi hangat dengan kuah kaldu gurih.'],
    ['ayam goreng tepung', 'Ayam berbalut tepung renyah dan gurih.'],
    ['ayam goreng kering', 'Ayam goreng gurih dengan tekstur kering.'],
    ['ayam goreng mentega', 'Ayam gurih dimasak dengan saus mentega.'],
    ['ayam asam manis', 'Ayam dengan saus asam manis segar.'],
    ['ayam saos teriyaki', 'Ayam dengan saus teriyaki manis gurih.'],
    ['ayam lada hitam', 'Ayam berbumbu lada hitam yang harum.'],
    ['sapi lada hitam', 'Daging sapi dengan saus lada hitam gurih.'],
    ['udang goreng tepung', 'Udang berbalut tepung renyah dan gurih.'],
    ['udang mayonaise', 'Udang gurih dengan saus mayonaise creamy.'],
    ['udang saos tiram', 'Udang dimasak saus tiram gurih.'],
    ['udang asam manis', 'Udang dengan saus asam manis segar.'],
    ['udang saos mentega', 'Udang gurih dengan saus mentega.'],
    ['udang saos teriyaki', 'Udang dengan saus teriyaki manis gurih.'],
    ['cumi asam manis', 'Cumi dengan saus asam manis segar.'],
    ['cumi saos tiram', 'Cumi dimasak saus tiram gurih.'],
    ['cumi goreng kering', 'Cumi goreng gurih dengan tekstur kering.'],
    ['cumi saos teriyaki', 'Cumi dengan saus teriyaki manis gurih.'],
    ['cumi saos mentega', 'Cumi gurih dengan saus mentega.'],
    ['fu yung hai', 'Telur dadar tebal dengan isian dan saus gurih.'],
    ['cap cay goreng', 'Tumisan sayur campur dengan bumbu gurih.'],
    ['cap cay kuah', 'Sayur campur berkuah hangat dan gurih.'],
    ['salad buah', 'Buah segar dengan saus salad creamy.'],
    ['buah segar spesial', 'Pilihan buah segar dalam porsi spesial.'],
    ['buah segar', 'Potongan buah segar untuk pilihan ringan.'],
    ['ice cream buah', 'Es krim manis dengan tambahan buah segar.'],
    ['frozz', 'Permen mint untuk penyegar mulut.'],
    ['hexos', 'Permen pelega tenggorokan rasa mint.'],
    ['chunky', 'Cokelat batangan dengan rasa manis pekat.'],
    ['cadbury', 'Cokelat susu kemasan untuk camilan manis.'],
    ['silverqueen', 'Cokelat kacang kemasan favorit.'],
    ['delfi', 'Cokelat kemasan dengan rasa manis lembut.'],
    ['kacang bawang', 'Kacang gurih dengan aroma bawang.'],
    ['pringles', 'Keripik kentang renyah dalam kemasan.'],
    ['chitato', 'Keripik kentang renyah dengan rasa gurih.'],
    ['qtela', 'Keripik singkong renyah untuk camilan.'],
    ['jus alpokat', 'Jus alpukat creamy dengan rasa manis lembut.'],
    ['jus apel', 'Jus apel segar dengan rasa manis ringan.'],
    ['jus jeruk', 'Jus jeruk segar dengan rasa asam manis.'],
    ['jus mangga', 'Jus mangga manis dengan tekstur lembut.'],
    ['jus melon', 'Jus melon segar dengan aroma harum.'],
    ['jus semangka', 'Jus semangka segar dan ringan.'],
    ['jeruk murni', 'Perasan jeruk segar tanpa campuran berlebihan.'],
    ['milk shake coklat', 'Milkshake coklat creamy dan dingin.'],
    ['milk shake strawberry', 'Milkshake strawberry creamy dan segar.'],
    ['milk shake vanilla', 'Milkshake vanilla creamy dengan rasa lembut.'],
    ['coca-cola pitcher', 'Minuman soda cola dalam porsi berbagi.'],
    ['coca-cola can', 'Minuman soda cola dingin dalam kaleng.'],
    ['fanta merah pitcher', 'Soda rasa buah dalam porsi berbagi.'],
    ['fanta merah can', 'Soda rasa buah dingin dalam kaleng.'],
    ['sprite pitcher', 'Soda lemon-lime dalam porsi berbagi.'],
    ['sprite can', 'Soda lemon-lime dingin dalam kaleng.'],
    ['greensands', 'Minuman sparkling ringan dan menyegarkan.'],
    ['pokka green tea', 'Teh hijau kemasan dengan rasa ringan.'],
    ['soda gembira', 'Soda susu manis yang creamy dan segar.'],
    ['fanta susu', 'Perpaduan soda dan susu yang manis segar.'],
    ['krating daeng', 'Minuman energi dalam kemasan botol.'],
    ['pulpy orange', 'Minuman jeruk dengan bulir buah.'],
    ['yakult', 'Minuman probiotik kecil dengan rasa asam manis.'],
    ['air mineral', 'Air mineral kemasan untuk pelepas dahaga.'],
    ['milo hot', 'Minuman cokelat malt hangat.'],
    ['milo ice', 'Minuman cokelat malt dingin.'],
    ['es jeruk nipis', 'Jeruk nipis dingin dengan rasa segar.'],
    ['es jeruk', 'Jeruk dingin dengan rasa asam manis.'],
    ['teh hot', 'Teh hangat klasik untuk pendamping menu.'],
    ['es teh', 'Teh dingin manis dan menyegarkan.'],
    ['jeruk nipis hot', 'Jeruk nipis hangat dengan rasa segar.'],
    ['jeruk hot', 'Jeruk hangat dengan rasa asam manis.'],
    ['lemon tea pitcher', 'Lemon tea segar dalam porsi berbagi.'],
    ['lemon tea hot', 'Teh lemon hangat dengan rasa segar.'],
    ['lemon tea ice', 'Teh lemon dingin yang menyegarkan.'],
    ['susu putih hot', 'Susu putih hangat dengan rasa lembut.'],
    ['susu putih ice', 'Susu putih dingin yang creamy.'],
    ['susu coklat hot', 'Susu coklat hangat dengan rasa manis.'],
    ['susu coklat ice', 'Susu coklat dingin yang creamy.'],
    ['teh pitcher', 'Teh dalam porsi pitcher untuk berbagi.'],
    ['cappuccino', 'Kopi susu dengan karakter creamy.'],
    ['kopi', 'Minuman kopi klasik dengan aroma kuat.'],
    ['korek api', 'Korek api praktis untuk kebutuhan pelanggan.'],
    ['rokok', 'Produk rokok kemasan untuk pelanggan dewasa.'],
    ['avolution', 'Produk rokok kemasan untuk pelanggan dewasa.'],
    ['la light', 'Produk rokok kemasan untuk pelanggan dewasa.'],
    ['marlboro', 'Produk rokok kemasan untuk pelanggan dewasa.'],
    ['marboro', 'Produk rokok kemasan untuk pelanggan dewasa.'],
    ['sampoerna', 'Produk rokok kemasan untuk pelanggan dewasa.'],
    ['esse', 'Produk rokok kemasan untuk pelanggan dewasa.'],
  ];

  const matchedRule = knowledgeRules.find(([keyword]) => lowerName.includes(keyword));

  return matchedRule ? matchedRule[1] : 'Pilihan menu favorit dengan rasa khas Happy Puppy.';
};

const createItem = (name, price, icon, image = null) => ({
  name,
  price,
  icon,
  image: image ? assetUrl(image) : getFallbackMenuImage(name),
  description: getProductKnowledge(name),
});

const menuCategories = [
  {
    id: 'nasi',
    label: 'Nasi Goreng',
    items: [
      createItem('Nasi Cap Cay', 56000, 'NC', '/images/CAPCAY.png'),
      createItem('Nasi Goreng Ayam', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Hongkong', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Ikan Asin', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Jawa', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Seafood', 62000, 'NS', '/images/Nasi-goreng-seafood.jpg'),
      createItem('Nasi Goreng Original', 56000, 'NO', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Spesial', 56000, 'NS', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Sosis', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Cumi', 56000, 'NG', '/images/Nasi Goreng.png'),
      createItem('Nasi Goreng Udang', 56000, 'NG', '/images/Nasi Goreng.png'),
    ],
  },
  {
    id: 'mie',
    label: 'Mie & Kwetiaw',
    items: [
      createItem('Mie Goreng Spesial', 56000, 'MG', '/images/Mie Goreng.png'),
      createItem('Mie Goreng Udang', 56000, 'MG', '/images/Mie Goreng.png'),
      createItem('Mie Goreng Jawa', 56000, 'MG', '/images/Mie Goreng.png'),
      createItem('Mie Goreng Seafood', 62000, 'MS', '/images/Mie Goreng.png'),
      createItem('Mie Kuah Spesial', 56000, 'MK', '/images/MIEKUAHSPESIAL.png'),
      createItem('Mi Godok', 53000, 'MG', '/images/MIEGODOK.png'),
      createItem('Indomie Telur Kornet ("Internet")', 45000, 'IT', '/images/INTERNET (2).png'),
      createItem('Kwetiaw Goreng Spesial', 56000, 'KG', '/images/Kwetiaw Goreng.png'),
      createItem('Kwetiaw Goreng Seafood', 62000, 'KG', '/images/Kwetiaw Goreng.png'),
      createItem('Bihun Goreng Spesial', 56000, 'BG', '/images/Bihun Goreng.png'),
      createItem('Bihun Goreng Seafood', 62000, 'BG', '/images/Bihun Goreng.png'),
    ],
  },
  {
    id: 'snack',
    label: 'Snack',
    items: [
      createItem('Chicken Nugget', 50000, 'CN', '/images/CHIKENNUGGET.png'),
      createItem('Chicken Wings', 62000, 'CW', '/images/CHIKENWING.png'),
      createItem('Kentang Goreng', 50000, 'KG', '/images/KENTANGGORENG.png'),
      createItem('Sosis Goreng', 62000, 'SG', '/images/SOSISGORENG.png'),
      createItem('Onion Ring', 44000, 'OR', '/images/onion-ring.jpg'),
      createItem('Pisang Keju', 37000, 'PK', '/images/PISANGKEJUCOKLAT.png'),
      createItem('Pisang Keju Coklat', 37000, 'PK', '/images/PISANGKEJUCOKLAT.png'),
      createItem('Snack Kombinasi', 87000, 'SK', '/images/SNACKKOMBINASI.png'),
      createItem('Cireng', 37000, 'CR', '/images/Cireng.jpg'),
      createItem('Tempe Mendoan', 44000, 'TM', '/images/Tempe-Mendoan.jpg'),
      createItem('Tahu Bakso Goreng', 50000, 'TB', '/images/TAHU-BAKSO.jpeg'),
      createItem('Tahu Cabe Garam', 44000, 'TC', '/images/TAHU-BAKSO.jpeg'),
      createItem('Telur Dadar', 19000, 'TD', '/images/TELUR-DADAR.jpg'),
      createItem('Telur Mata Sapi', 19000, 'TM', '/images/TELUR-MATA-SAPI.jpg'),
      createItem('Paru Goreng Crispy', 83000, 'PC', '/images/PARU.jpg'),
      createItem('Paru Goreng Pedas', 83000, 'PP', '/images/PARU.jpg'),
      createItem('Ote-Ote', 50000, 'OO', '/images/OTE-OTE.jpg'),
      createItem('Pempek', 50000, 'PM', '/images/OTE-OTE.jpg'),
    ],
  },
  {
    id: 'food',
    label: 'Food',
    items: [
      createItem('Sop Iga Sapi', 154000, 'SI', '/images/SOP-IGA-SAPI.png'),
      createItem('Ayam Goreng Tepung', 58000, 'AG', '/images/resep-ayam-goreng-krispi-korea_43.jpeg'),
      createItem('Ayam Goreng Kering', 58000, 'AG', '/images/ayam-goreng-keRING.jpeg'),
      createItem('Ayam Goreng Mentega', 58000, 'AG', '/images/ayam-saus-mentega.jpg'),
      createItem('Ayam Asam Manis', 58000, 'AA', '/images/ayam-asam-manis.jpeg'),
      createItem('Ayam Saos Teriyaki', 58000, 'AT', '/images/ayam-saus-mentega.jpg'),
      createItem('Ayam Lada Hitam', 58000, 'AL', '/images/ayam-lada-hitam.png'),
      createItem('Sapi Lada Hitam', 87000, 'SL', '/images/SAPI-LADA-HITAM.png'),
      createItem('Udang Goreng Tepung', 75000, 'UG', '/images/UDANGGORENGTEPUNG.png'),
      createItem('Udang Mayonaise', 75000, 'UM', '/images/UDANGGORENGTEPUNG.png'),
      createItem('Udang Saos Tiram', 75000, 'UT', '/images/UDANG-SAOS-TREYAKI.png'),
      createItem('Udang Asam Manis', 75000, 'UA', '/images/UDANG-ASAM-MANIS.png'),
      createItem('Udang Saos Mentega', 75000, 'UM', '/images/UDANG-ASAM-MANIS.png'),
      createItem('Udang Saos Teriyaki', 75000, 'UT', '/images/UDANG-SAOS-TREYAKI.png'),
      createItem('Cumi Asam Manis', 68000, 'CA', '/images/CUMI-SAOS-TIRAM.png'),
      createItem('Cumi Saos Tiram', 68000, 'CT', '/images/cumi-treyaki.png'),
      createItem('Cumi Goreng Kering', 68000, 'CG', '/images/cumi-treyaki.png'),
      createItem('Cumi Saos Teriyaki', 68000, 'CT', '/images/cumi-treyaki.png'),
      createItem('Cumi Saos Mentega', 68000, 'CM', '/images/CUMI-SAOS-TIRAM.png'),
      createItem('Fu Yung Hai', 56000, 'FY', '/images/fu-yung-hay.jpg'),
      createItem('Cap Cay Goreng', 56000, 'CC', '/images/CAPCAY.png'),
      createItem('Cap Cay Kuah', 56000, 'CC', '/images/CAPCAY.png'),
    ],
  },
  {
    id: 'salad',
    label: 'Salad & Buah',
    items: [
      createItem('Salad Buah', 87000, 'SB', '/images/salad-buah.png'),
      createItem('Buah Segar', 87000, 'BS', '/images/buah-segar (1).png'),
      createItem('Buah Segar Spesial', 160000, 'BS', '/images/buah-segar-spesial.png'),
      createItem('Ice Cream Buah', 56000, 'IC', '/images/escream-buah.png'),
    ],
  },
  {
    id: 'cancimen',
    label: 'Cancimen',
    items: [
      createItem('Frozz', 25000, 'FR', '/images/frozz.webp'),
      createItem('Hexos', 17000, 'HX', '/images/hexos.png'),
      createItem('Chunky Bar', 56000, 'CB', '/images/cb.jpg'),
      createItem('Cadbury 145gr', 80000, 'CD', '/images/cadburry.jpg'),
      createItem('SilverQueen', 43000, 'SQ', '/images/sq.jpeg'),
      createItem('Delfi 125gr', 80000, 'DF', '/images/delfy.webp'),
      createItem('Kacang Bawang', 37000, 'KB', '/images/KACANGBAWANG.png'),
      createItem('Pringles', 55000, 'PR', '/images/pringles.jpg'),
      createItem('Chitato', 32000, 'CH', '/images/Chitato.jpg'),
      createItem('Qtela', 35000, 'QT', '/images/qtela.jpg'),
    ],
  },
  {
    id: 'juice',
    label: 'Jus & Milkshake',
    items: [
      createItem('Jus Alpokat', 44000, 'JA', '/images/Jus Alpukat.png'),
      createItem('Jus Apel', 44000, 'JA', '/images/Jus Apel.png'),
      createItem('Jus Jeruk', 44000, 'JJ', '/images/Jus Jeruk.png'),
      createItem('Jus Mangga', 44000, 'JM', '/images/Jus Mangga.png'),
      createItem('Jus Melon', 44000, 'JM', '/images/Jus Melon.png'),
      createItem('Jus Semangka', 44000, 'JS', '/images/Jus Semangka.png'),
      createItem('Jeruk Murni', 44000, 'JM', '/images/Jus Jeruk.png'),
      createItem('Milk Shake Coklat', 47000, 'MC', '/images/milkshake.png'),
      createItem('Milk Shake Strawberry', 47000, 'MS', '/images/milkshake.png'),
      createItem('Milk Shake Vanilla', 47000, 'MV', '/images/milkshake.png'),
    ],
  },
  {
    id: 'softdrink',
    label: 'Soft Drink',
    items: [
      createItem('Coca-Cola Can', 25000, 'CC', '/images/coca-cola.png'),
      createItem('Coca-Cola Pitcher', 92000, 'CP', '/images/pitcher.png'),
      createItem('Fanta Merah Can', 25000, 'FC', '/images/fanta.jpg'),
      createItem('Fanta Merah Pitcher', 92000, 'FP', '/images/pitcher.png'),
      createItem('Pokka Green Tea', 32000, 'PG', '/images/pokka-greetea.jpeg'),
      createItem('Soda Gembira', 44000, 'SG', '/images/soda-gembira.jpg'),
      createItem('Sprite Can', 25000, 'SC', '/images/sprite.jpg'),
      createItem('Sprite Pitcher', 92000, 'SP', '/images/pitcher.png'),
      createItem('Fanta Susu', 37000, 'FS', '/images/soda-gembira.jpg'),
      createItem('Krating Daeng', 32000, 'KD', '/images/krating-deng.jpg'),
      createItem('Yakult', 10000, 'YK', '/images/Yakult.jpg'),
    ],
  },
  {
    id: 'drink',
    label: 'Drink & Coffee',
    items: [
      createItem('Air Mineral', 20000, 'AM', '/images/cleo.png'),
      createItem('Milo Hot', 37000, 'MH', '/images/hot.png'),
      createItem('Milo Ice', 37000, 'MI', '/images/dingin.png'),
      createItem('Es Jeruk Nipis', 44000, 'EN', '/images/dingin.png'),
      createItem('Teh Hot', 23000, 'TH', '/images/hot.png'),
      createItem('Es Teh', 23000, 'ET', '/images/dingin.png'),
      createItem('Jeruk Nipis Hot', 44000, 'JN', '/images/hot.png'),
      createItem('Lemon Tea Hot', 32000, 'LH', '/images/hot.png'),
      createItem('Lemon Tea Ice', 32000, 'LI', '/images/dingin.png'),
      createItem('Lemon Tea Pitcher', 92000, 'LP', '/images/pitcher.png'),
      createItem('Susu Putih Hot', 32000, 'SH', '/images/hot.png'),
      createItem('Susu Putih Ice', 32000, 'SI', '/images/dingin.png'),
      createItem('Susu Coklat Hot', 32000, 'CH', '/images/hot.png'),
      createItem('Susu Coklat Ice', 32000, 'CI', '/images/dingin.png'),
      createItem('Teh Pitcher', 92000, 'TP', '/images/pitcher.png'),
      createItem('Cappuccino', 35000, 'CP', '/images/hot.png'),
      createItem('Kopi', 30000, 'KP', '/images/hot.png'),
    ],
  },
  {
    id: 'rokok',
    label: 'Rokok',
    items: [
      createItem('Rokok Veev', 170000, 'RV', '/images/rokok/veev.jpg'),
      createItem('Avolution', 80000, 'AV', '/images/rokok/avolution.jpg'),
      createItem('Avolution Menthol', 80000, 'AM', '/images/rokok/avolution.jpg'),
      createItem('LA Light', 80000, 'LA', '/images/rokok/la-light.jpg'),
      createItem('LA Light Menthol', 80000, 'LM', '/images/rokok/la-light.jpg'),
      createItem('Marboro Black Menthol', 80000, 'MB', '/images/rokok/black-menthol.jpg'),
      createItem('Marboro Light', 80000, 'ML', '/images/rokok/malboro-merah.png'),
      createItem('Marboro Merah', 80000, 'MM', '/images/rokok/malboro-merah.png'),
      createItem('Sampoerna A Mild', 80000, 'SA', '/images/rokok/sampoerna-mild.jpg'),
      createItem('Sampoerna A Mild Menthol', 80000, 'SM', '/images/rokok/samporna-menthol.jpg'),
      createItem('Marlboro Ice Brust', 80000, 'MI', '/images/rokok/malboro-ice-brust.jpg'),
      createItem('La Ice', 80000, 'LI', '/images/rokok/la-light.jpg'),
      createItem('Esse Change Grape', 80000, 'EG', '/images/rokok/esse-change.png'),
      createItem('Marlboro Filter Black', 80000, 'MF', '/images/rokok/black-menthol.jpg'),
      createItem('Korek Api Happy Puppy', 23000, 'KA', '/images/rokok/korek.jpeg'),
    ],
  },
];

const roomGroups = [
  {
    label: 'Lantai 1',
    rooms: ['Room 11', 'Room 12', 'Room 14', 'Room 116', 'Room 117', 'Room 118', 'Room 119', 'Room 101', 'Room 102'],
  },
  {
    label: 'Lantai 2',
    rooms: ['Room 21', 'Room 22', 'Room 23', 'Room 24', 'Room 125', 'Room 126', 'Room 127', 'Room 128', 'Room 129', 'Room 201', 'Room 202', 'Room 203', 'Room 204'],
  },
  {
    label: 'Lantai 3',
    rooms: ['Room 31', 'Room 32', 'Room 33', 'Room 34', 'Room 136', 'Room 137', 'Room 138', 'Room 139', 'Room 301', 'Room 302', 'Room 303', 'Room 304'],
  },
];

export default {
  name: 'MenuHappup',
  data() {
    return {
      activeCategoryId: 'nasi',
      cart: [],
      isCartOpen: false,
      selectedRoom: '',
      outlet,
      heroImageUrl,
      menuCategories,
      roomGroups,
    };
  },
  computed: {
    activeCategory() {
      return this.menuCategories.find((category) => category.id === this.activeCategoryId);
    },
    cartTotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    cartCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    groupedCartItems() {
      return this.cart;
    },
  },
  methods: {
    formatRupiah(amount) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(amount);
    },
    scrollCategories(direction) {
      const slider = this.$refs.categorySlider;

      if (!slider) {
        return;
      }

      slider.scrollBy({
        left: direction * Math.round(slider.clientWidth * 0.75),
        behavior: 'smooth',
      });
    },
    setCategory(categoryId, event) {
      this.activeCategoryId = categoryId;

      if (event?.currentTarget) {
        this.$nextTick(() => {
          event.currentTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        });
      }
    },
    handleMenuImageError(menuItem) {
      menuItem.image = null;
    },
    addToCart(menuItem) {
      if (!this.selectedRoom) {
        window.alert('Mohon pilih nomor Room Karaoke terlebih dahulu sebelum memilih menu.');
        return;
      }

      const existingItem = this.cart.find((item) => item.name === menuItem.name);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      this.cart.push({
        ...menuItem,
        quantity: 1,
      });
    },
    removeCartItem(itemName) {
      const existingItem = this.cart.find((item) => item.name === itemName);

      if (!existingItem) {
        return;
      }

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.cart = this.cart.filter((item) => item.name !== itemName);
      }

      if (!this.cart.length) {
        this.closeCartModal();
      }
    },
    openCartModal() {
      this.isCartOpen = true;
    },
    closeCartModal() {
      this.isCartOpen = false;
    },
    openRandomRoomSupportLink() {
      const links = this.outlet.roomSupportLinks;
      const randomLink = links[Math.floor(Math.random() * links.length)];

      window.open(randomLink, '_blank', 'noopener,noreferrer');
    },
    submitOrderViaWhatsApp() {
      if (!this.selectedRoom) {
        window.alert('Mohon pilih nomor Room Karaoke Anda terlebih dahulu!');
        return;
      }

      const itemSummary = this.groupedCartItems
        .map((item) => `- ${item.name} (x${item.quantity})`)
        .join('\n');

      const orderText = [
        'Halo Happy Puppy Antasari, saya ingin memesan menu kamar:',
        '',
        'DETAIL ROOM:',
        `- Nomor Kamar: ${this.selectedRoom}`,
        '',
        'DAFTAR PESANAN:',
        itemSummary,
        '',
        `TOTAL PEMBAYARAN: ${this.formatRupiah(this.cartTotal)}`,
        '',
        'Mohon diproses langsung ke kamar kami ya, terima kasih!',
      ].join('\n');

      window.open(`${this.outlet.whatsappUrl}?text=${encodeURIComponent(orderText)}`, '_blank');

      this.cart = [];
      this.selectedRoom = '';
      this.closeCartModal();
    },
  },
};
</script>

<template>
  <main class="menu-page">
    <section class="menu-hero" :style="{ '--hero-image': `url('${heroImageUrl}')` }">
      <section
        class="menu-banner"
        aria-label="Banner menu Happy Puppy Antasari"
      >
        <div class="banner-content">
          <img
            :src="outlet.bannerLogo"
            alt="Happy Puppy"
            class="banner-logo"
          >
          <p class="subtitle">{{ outlet.tagline }}</p>
          <h1 class="main-title">
            Menu <span>Happup Antasari</span>
          </h1>
          <a
            :href="outlet.mapsUrl"
            class="address"
            target="_blank"
            rel="noreferrer"
          >
            {{ outlet.address }}
          </a>
        </div>
      </section>

      <section class="container hero-container">
        <section class="room-picker-card" aria-labelledby="room-picker-title">
          <div class="room-support-hotspots" aria-label="Link support Happy Puppy">
            <a
              v-for="(link, index) in outlet.roomSupportLinks"
              :key="link"
              :href="link"
              class="room-support-hotspot"
              target="_blank"
              rel="noreferrer"
              :aria-label="`Support Happy Puppy ${index + 1}`"
              @click.prevent="openRandomRoomSupportLink"
            />
          </div>

          <div class="room-picker-copy">
            <span class="room-step">Langkah 1</span>
            <h2 id="room-picker-title">Pilih Room Karaoke</h2>
          </div>

          <label class="room-select-group room-select-inline" for="pageRoomNumber">
            <span>Nomor Room</span>
            <select id="pageRoomNumber" v-model="selectedRoom">
              <option value="">-- Pilih Nomor Room --</option>
              <optgroup
                v-for="group in roomGroups"
                :key="group.label"
                :label="group.label"
              >
                <option
                  v-for="room in group.rooms"
                  :key="room"
                  :value="room"
                >
                  {{ room }}
                </option>
              </optgroup>
            </select>
          </label>
        </section>
      </section>
    </section>

    <section class="container">
      <div class="menu-tabs-shell">
        <button
          type="button"
          class="tab-scroll-btn"
          aria-label="Geser kategori ke kiri"
          @click="scrollCategories(-1)"
        >
          &lt;
        </button>

        <nav
          ref="categorySlider"
          class="menu-tabs"
          aria-label="Kategori menu"
        >
          <button
            v-for="category in menuCategories"
            :key="category.id"
            type="button"
            class="tab-btn"
            :class="{ active: activeCategoryId === category.id }"
            @click="setCategory(category.id, $event)"
          >
            {{ category.label }}
          </button>
        </nav>

        <button
          type="button"
          class="tab-scroll-btn"
          aria-label="Geser kategori ke kanan"
          @click="scrollCategories(1)"
        >
          &gt;
        </button>
      </div>

      <section class="menu-container active">
        <article
          v-for="item in activeCategory.items"
          :key="item.name"
          class="menu-item"
        >
          <div class="menu-img-circle">
            <img
              v-if="item.image"
              :src="item.image"
              alt=""
              class="menu-img"
              @error="handleMenuImageError(item)"
            >
            <span v-else>{{ item.icon }}</span>
          </div>
          <div class="menu-details">
            <div class="menu-title-row">
              <h2 class="menu-name">{{ item.name }}</h2>
              <span class="menu-price">{{ formatRupiah(item.price) }}</span>
            </div>
            <div class="menu-desc-row">
              <p class="menu-description">{{ item.description }}</p>
              <button
                type="button"
                class="btn-add-cart"
                :disabled="!selectedRoom"
                @click="addToCart(item)"
              >
                {{ selectedRoom ? '+ Add' : 'Pilih Room' }}
              </button>
            </div>
          </div>
        </article>
      </section>

      <footer class="footer-note">
        <div class="footer-grid">
          <a
            :href="outlet.mapsUrl"
            class="footer-info"
            target="_blank"
            rel="noreferrer"
          >
            <span class="footer-icon" aria-hidden="true">+</span>
            <span>
              <strong>Alamat</strong>
              {{ outlet.address }}
            </span>
          </a>

          <a
            :href="`mailto:${outlet.email}`"
            class="footer-info"
          >
            <span class="footer-icon" aria-hidden="true">&#9742;</span>
            <span>
              <strong>Contact</strong>
              {{ outlet.email }}
            </span>
          </a>

          <div class="footer-info">
            <span class="footer-icon" aria-hidden="true">&#9716;</span>
            <span>
              <strong>Opening Hours</strong>
              {{ outlet.openingHours }}
            </span>
          </div>

          <div class="footer-social">
            <strong>Follow Us</strong>
            <div class="social-links">
              <a
                :href="outlet.whatsappUrl"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <img :src="outlet.whatsappIcon" alt="" class="social-icon">
              </a>
              <a
                :href="outlet.instagramUrl"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img :src="outlet.instagramIcon" alt="" class="social-icon">
              </a>
              <a
                :href="outlet.facebookUrl"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img :src="outlet.facebookIcon" alt="" class="social-icon">
              </a>
            </div>
          </div>

        </div>

        <div class="footer-brand">
          <a
            :href="outlet.supportUrl"
            class="footer-logo-button"
            target="_blank"
            rel="noreferrer"
            aria-label="Support Happy Puppy Antasari"
            @click.prevent="openRandomRoomSupportLink"
            >
              <img
                :src="outlet.logo"
                :alt="outlet.name"
                class="footer-logo"
              >
            </a>
          <p>
            &copy; 2026 {{ outlet.name }}. All Rights Reserved.
            <br>
            {{ outlet.tagline }}
          </p>
        </div>
      </footer>
    </section>

    <button
      v-if="cartCount"
      type="button"
      class="floating-cart"
      @click="openCartModal"
    >
      Lihat Keranjang
      <span class="cart-count">{{ cartCount }}</span>
    </button>

    <div
      v-if="isCartOpen"
      class="cart-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div class="modal-content">
        <h2 id="cart-title" class="modal-title">Keranjang Belanja</h2>

        <div class="cart-room-summary">
          Room: <span>{{ selectedRoom }}</span>
        </div>

        <div class="cart-items-list">
          <div
            v-for="item in groupedCartItems"
            :key="item.name"
            class="cart-item-row"
          >
            <div class="cart-item-main">
              <span class="cart-item-name">{{ item.name }} x{{ item.quantity }}</span>
              <span class="cart-item-price">{{ formatRupiah(item.price * item.quantity) }}</span>
            </div>
            <button
              type="button"
              class="btn-remove-cart"
              :aria-label="`Hapus ${item.name} dari keranjang`"
              @click="removeCartItem(item.name)"
            >
              Hapus
            </button>
          </div>
        </div>

        <div class="total-price-box">
          Total: <span>{{ formatRupiah(cartTotal) }}</span>
        </div>

        <button
          type="button"
          class="btn-action btn-order"
          @click="submitOrderViaWhatsApp"
        >
          Pesan Lewat WhatsApp
        </button>
        <button
          type="button"
          class="btn-action btn-close"
          @click="closeCartModal"
        >
          Tutup
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.menu-page {
  --primary-color: #178a4b;
  --primary-hover: #0f6f3b;
  --dark-color: #212529;
  --light-bg: #f7f2ea;
  --gray-bg: #f8f9fa;
  --text-muted: #7f8890;
  --border-color: #eedcdc;

  min-height: 100vh;
  background:
    linear-gradient(rgba(255, 252, 247, 0.9), rgba(255, 252, 247, 0.88)),
    repeating-linear-gradient(
      90deg,
      rgba(76, 42, 20, 0.18) 0,
      rgba(76, 42, 20, 0.18) 2px,
      rgba(141, 86, 45, 0.13) 2px,
      rgba(141, 86, 45, 0.13) 18px,
      rgba(92, 51, 25, 0.15) 18px,
      rgba(92, 51, 25, 0.15) 34px
    ),
    linear-gradient(135deg, #7c4b28 0%, #b57942 48%, #5d351b 100%);
  background-attachment: fixed;
  background-color: var(--light-bg);
  color: var(--dark-color);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.5;
  padding-bottom: 100px;
  width: 100%;
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;
  width: 100%;
}

.menu-hero {
  background-image: var(--hero-image);
  background-position: center 70%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 24px 60px rgba(20, 42, 28, 0.2);
  overflow: hidden;
  padding-bottom: 34px;
  position: relative;
}

.menu-hero::before {
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.42) 44%, rgba(0, 0, 0, 0.08) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.24) 58%, rgba(0, 0, 0, 0.46) 100%);
  content: "";
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.menu-hero::after {
  background:
    linear-gradient(180deg, rgba(247, 242, 234, 0) 0%, rgba(247, 242, 234, 0.55) 58%, rgba(247, 242, 234, 0.96) 100%);
  content: "";
  inset: 46% 0 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.subtitle {
  color: rgba(255, 255, 255, 0.88);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin: 0 0 10px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
  text-transform: uppercase;
}

.main-title {
  color: #fff;
  font-family: "Amatic SC", Inter, sans-serif;
  font-size: clamp(28px, 4.8vw, 58px);
  font-weight: 700;
  line-height: 0.95;
  margin: 0 0 18px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.55);
}

.main-title span {
  color: #8ff0b1;
}

.address {
  color: rgba(255, 255, 255, 0.9);
  display: block;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(13px, 1.3vw, 16px);
  font-style: italic;
  margin: 0;
  max-width: 680px;
  text-decoration: none;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.address:hover {
  color: #fff;
  text-decoration: underline;
}

.menu-banner {
  align-items: center;
  aspect-ratio: 16 / 2;
  border-radius: 0;
  display: flex;
  height: auto;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
}

.menu-banner::before {
  display: none;
}

.menu-banner::after {
  display: none;
}

.banner-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
  padding: 18px 20px 30px;
  position: absolute;
  inset: 0;
  width: 100%;
  z-index: 2;
}

.banner-logo {
  border-radius: 12px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.24);
  height: clamp(36px, 4.8vw, 58px);
  margin-bottom: 10px;
  object-fit: contain;
  width: max-content;
}

.room-info-box {
  background-color: var(--gray-bg);
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 25px;
  text-align: center;
}

.room-info-box h2 {
  color: var(--primary-color);
  font-size: 18px;
  letter-spacing: 1px;
  margin: 0 0 10px;
  text-transform: uppercase;
}

.room-info-box p {
  color: var(--text-muted);
  font-size: 14px;
  margin: 0 0 15px;
}

.room-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.room-floor {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  font-size: 13px;
  padding: 10px 15px;
  text-align: left;
  width: min(100%, 340px);
}

.room-floor strong,
.room-floor span {
  display: block;
}

.room-floor span {
  color: var(--text-muted);
  margin-top: 6px;
}

.room-picker-card {
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.58);
  border-radius: 8px;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.22);
  display: flex;
  gap: 18px;
  justify-content: space-between;
  margin-top: 0;
  padding: 16px 20px;
  position: relative;
}

.room-picker-copy {
  min-width: 0;
  position: relative;
  z-index: 2;
}

.room-support-hotspots {
  border-radius: inherit;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  inset: 0;
  overflow: hidden;
  position: absolute;
  z-index: 1;
}

.room-support-hotspot {
  display: block;
  min-width: 0;
}

.room-step {
  color: var(--primary-color);
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 3px;
  text-transform: uppercase;
}

.room-picker-copy h2 {
  color: var(--dark-color);
  font-size: 20px;
  line-height: 1.2;
  margin: 0 0 4px;
}

.room-picker-copy p {
  color: var(--text-muted);
  font-size: 13px;
  margin: 0;
}

.room-select-inline {
  flex: 0 0 min(360px, 46%);
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}

.menu-tabs-shell {
  align-items: center;
  display: flex;
  gap: 12px;
  margin-top: 30px;
  margin-bottom: 45px;
  position: relative;
}

.menu-tabs {
  display: flex;
  flex: 1;
  gap: 10px;
  overflow-x: auto;
  padding: 8px 2px 16px;
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  white-space: nowrap;
}

.menu-tabs::-webkit-scrollbar {
  display: none;
}

.tab-scroll-btn {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(23, 138, 75, 0.18);
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(20, 42, 28, 0.08);
  color: var(--primary-color);
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  font-size: 18px;
  font-weight: 800;
  height: 40px;
  justify-content: center;
  transition: all 0.25s;
  width: 40px;
}

.tab-scroll-btn:hover {
  background: var(--primary-color);
  color: #fff;
  transform: translateY(-1px);
}

.tab-btn {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(23, 138, 75, 0.14);
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(20, 42, 28, 0.06);
  color: var(--dark-color);
  cursor: pointer;
  flex: 0 0 auto;
  font: 600 16px Inter, sans-serif;
  padding: 11px 20px;
  position: relative;
  scroll-snap-align: center;
  transition: all 0.25s;
}

.tab-btn:hover,
.tab-btn.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
  transform: translateY(-1px);
}

.tab-btn.active::after {
  display: none;
}

.menu-container {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.menu-item {
  align-items: center;
  border-bottom: 1px dashed #e2e8f0;
  display: flex;
  padding: 15px 0;
  transition: transform 0.3s;
}

.menu-item:hover {
  transform: translateY(-2px);
}

.menu-img-circle {
  align-items: center;
  background-color: var(--gray-bg);
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex: 0 0 auto;
  font-size: 18px;
  font-weight: 800;
  height: 70px;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
  text-align: center;
  width: 70px;
}

.menu-img-circle span {
  line-height: 1;
}

.menu-img {
  border-radius: 50%;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.menu-details {
  flex: 1;
  min-width: 0;
}

.menu-title-row,
.menu-desc-row,
.cart-item-row {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}

.menu-name {
  color: var(--dark-color);
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.menu-price {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  white-space: nowrap;
}

.menu-description {
  color: var(--text-muted);
  font-size: 14px;
  font-style: italic;
  margin: 0;
}

.btn-add-cart {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 20px;
  color: var(--primary-color);
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 600;
  margin-left: 12px;
  padding: 4px 12px;
  transition: all 0.3s;
}

.btn-add-cart:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.btn-add-cart:disabled {
  border-color: #cbd5e1;
  color: #94a3b8;
  cursor: not-allowed;
}

.btn-add-cart:disabled:hover {
  background-color: transparent;
  color: #94a3b8;
}

.floating-cart {
  background-color: var(--primary-color);
  border: none;
  border-radius: 30px;
  bottom: 30px;
  box-shadow: 0 8px 25px rgba(206, 18, 18, 0.3);
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 25px;
  position: fixed;
  right: 30px;
  transition: background-color 0.3s;
  z-index: 999;
}

.floating-cart:hover {
  background-color: var(--primary-hover);
}

.cart-count {
  background-color: #fff;
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 12px;
  font-weight: 700;
  margin-left: 8px;
  padding: 2px 8px;
}

.cart-modal {
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 20px;
  position: fixed;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  color: var(--dark-color);
  max-width: 500px;
  padding: 30px;
  width: 100%;
}

.modal-title {
  border-bottom: 2px solid var(--gray-bg);
  color: var(--dark-color);
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 20px;
  padding-bottom: 10px;
}

.room-select-group {
  display: block;
  margin-bottom: 16px;
}

.room-select-group span {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
}

.room-select-group select {
  background-color: var(--gray-bg);
  border: 1px solid #ddd;
  border-radius: 6px;
  color: var(--dark-color);
  font-size: 14px;
  outline: none;
  padding: 10px 12px;
  width: 100%;
}

.cart-room-summary {
  background: var(--gray-bg);
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 18px;
  padding: 12px 14px;
}

.cart-room-summary span {
  color: var(--primary-color);
}

.cart-items-list {
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  max-height: 200px;
  overflow-y: auto;
  padding-bottom: 10px;
}

.cart-item-row {
  align-items: center;
  font-size: 15px;
  gap: 16px;
  margin-bottom: 12px;
}

.cart-item-main {
  align-items: baseline;
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  min-width: 0;
}

.cart-item-name {
  min-width: 0;
  overflow-wrap: anywhere;
}

.cart-item-price {
  flex: 0 0 auto;
  white-space: nowrap;
}

.btn-remove-cart {
  background: #fff1f2;
  border: 1px solid #fecdd3;
  border-radius: 999px;
  color: #be123c;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  transition: all 0.2s ease;
}

.btn-remove-cart:hover {
  background: #be123c;
  border-color: #be123c;
  color: #fff;
}

.total-price-box {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: right;
}

.total-price-box span {
  color: var(--primary-color);
}

.btn-action {
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 14px;
  width: 100%;
}

.btn-order {
  background-color: #25d366;
  color: #fff;
}

.btn-order:hover {
  background-color: #1cbd55;
}

.btn-close {
  background-color: var(--gray-bg);
  color: var(--dark-color);
}

.btn-close:hover {
  background-color: #e2e8f0;
}

.footer-note {
  background: #1b1b1a;
  border-top: 4px solid var(--primary-color);
  box-shadow: 0 18px 44px rgba(20, 42, 28, 0.16);
  color: #fff;
  font-size: 14px;
  margin-top: 60px;
  padding: 34px;
  text-align: center;
}

.footer-grid {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  display: grid;
  gap: 30px;
  grid-template-columns: 1.45fr 1.2fr 1fr 0.8fr;
  padding-bottom: 30px;
  text-align: left;
}

.footer-info {
  align-items: flex-start;
  color: #fff;
  display: flex;
  gap: 14px;
  line-height: 1.65;
  min-width: 0;
  text-decoration: none;
}

.footer-info strong,
.footer-social strong {
  color: #fff;
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.footer-info span:last-child {
  min-width: 0;
  overflow-wrap: anywhere;
}

.footer-icon {
  align-items: center;
  color: var(--primary-color);
  display: inline-flex;
  flex: 0 0 28px;
  font-size: 28px;
  font-weight: 800;
  height: 28px;
  justify-content: center;
  line-height: 1;
  margin-top: 2px;
}

.footer-info:hover strong,
.footer-info:hover {
  color: #8ff0b1;
}

.social-links {
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  margin-top: 10px;
}

.social-links a {
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50%;
  color: #fff;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  text-decoration: none;
  transition: all 0.25s ease;
  width: 40px;
}

.social-icon {
  display: block;
  filter: brightness(0) invert(1);
  height: 17px;
  opacity: 0.86;
  width: 17px;
}

.social-links a:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
  transform: translateY(-2px);
}

.footer-brand {
  color: rgba(255, 255, 255, 0.9);
  padding-top: 24px;
}

.footer-brand p {
  margin: 0;
}

.footer-logo-button {
  align-items: center;
  background: rgba(238, 77, 45, 0.12);
  border: 1px solid rgba(238, 77, 45, 0.5);
  border-radius: 12px;
  box-shadow: 0 12px 28px rgba(238, 77, 45, 0.16);
  color: #fff;
  display: inline-flex;
  margin: 0 auto 12px;
  padding: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.footer-logo-button:hover {
  background: rgba(238, 77, 45, 0.2);
  border-color: #ee4d2d;
  box-shadow: 0 16px 32px rgba(238, 77, 45, 0.26);
  transform: translateY(-2px);
}

.footer-logo {
  border-radius: 10px;
  display: block;
  height: 58px;
  object-fit: contain;
  width: auto;
}

@media (max-width: 768px) {
  .menu-hero {
    background-position: center 42%;
    padding-bottom: 24px;
  }

  .banner-content {
    padding-bottom: 32px;
    padding-top: 12px;
  }

  .banner-logo {
    border-radius: 8px;
    height: 28px;
    margin-bottom: 6px;
  }

  .menu-container {
    gap: 15px;
    grid-template-columns: 1fr;
  }

  .room-picker-card {
    align-items: stretch;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
    padding: 14px 16px;
  }

  .room-select-inline {
    flex-basis: auto;
    width: 100%;
  }

  .menu-tabs-shell {
    gap: 8px;
    margin-bottom: 32px;
    margin-top: 0;
  }

  .footer-note {
    padding: 28px 20px;
  }

  .footer-grid {
    gap: 22px;
    grid-template-columns: 1fr;
    padding-bottom: 24px;
  }

  .footer-info,
  .footer-social {
    text-align: left;
  }

  .tab-btn {
    font-size: 14px;
    padding: 10px 16px;
  }

  .tab-scroll-btn {
    height: 36px;
    width: 36px;
  }

  .main-title {
    font-size: 28px;
    margin-bottom: 6px;
  }

  .address {
    display: block;
    font-size: 12px;
    line-height: 1.25;
    max-width: 100%;
  }
}

@media (max-width: 520px) {
  .subtitle {
    display: none;
  }

  .address {
    font-size: 11px;
  }

  .container {
    padding: 0 14px;
  }

  .menu-tabs-shell {
    gap: 6px;
  }

  .tab-scroll-btn {
    height: 34px;
    width: 34px;
  }

  .menu-title-row,
  .menu-desc-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .menu-price,
  .btn-add-cart {
    margin-left: 0;
  }

  .floating-cart {
    bottom: 16px;
    left: 16px;
    right: 16px;
  }

  .cart-item-row {
    align-items: stretch;
    flex-direction: column;
    gap: 8px;
  }

  .cart-item-main {
    align-items: flex-start;
    gap: 8px;
  }

  .btn-remove-cart {
    align-self: flex-start;
  }
}
</style>
