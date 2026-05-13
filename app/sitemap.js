const BASE_URL = 'https://kodomo-manabi-navi.vercel.app';

const BLOG_SLUGS = [
  'osaka-kids-dance-school-ranking',
  'kids-dance-age-guide',
  'kids-hiphop-dance-guide',
  'kids-kpop-dance-school',
  'lydia-dance-academy-review',
  'kanto-kids-dance-school-ranking',
  'minoh-kids-dance-school',
  'setagaya-kids-dance-school',
  'kids-dance-recital-guide',
  'dance-vs-ballet-kids',
  'osaka-kids-activity-ranking',
  'nakahara-kids-dance-school',
  'kids-dance-benefits-brain',
  'kids-multiple-activities-dance',
  'kashiwa-kids-dance-school',
  'toddler-dance-rhythmics-guide',
  'yokohama-kids-dance-school',
  'nagoya-kids-dance-school',
  'dance-cost-breakdown',
  'boys-dance-school-guide',
  'kids-swimming-guide',
  'kids-piano-guide',
  'kanagawa-kids-dance-school',
  'aichi-kids-dance-school',
  'kids-dance-school-trial-guide',
  'kids-english-guide',
  'hyogo-kids-dance-school',
  'kyoto-shiga-kids-dance-school',
  'ibaraki-tsukuba-kids-dance-school',
  'ishikawa-kanazawa-kids-dance-school',
  'saitama-chiba-kids-dance-school',
  'kids-dance-quit-guide',
  'kids-activities-how-many',
  'dance-recital-costume-guide',
  'kids-karate-ballet-guide',
  'gifu-nagano-kids-dance-school',
  'nagano-shiga-kids-dance-school',
  'wakayama-kids-activity',
  'kids-activity-ranking-all',
  'kids-soccer-guide',
  'kids-karate-guide',
  'kids-ballet-guide',
  'dance-hip-hop-kpop-diff',
  'lydia-dance-osaka-review',
  'kids-activity-cost-annual',
  'kids-dance-school-change-guide',
  'tokyo-kids-dance-school-ranking',
  'osaka-dance-lydia-price-guide',
  'kids-dance-beginner-guide',
  'kids-rhythmics-guide',
  'kids-activity-change-timing',
  'kids-dance-home-practice',
  'nagoya-kids-dance-school-ranking',
  'saitama-chiba-kanto-dance-school',
  'kids-dance-concentration-benefit',
  'kids-activity-introverts',
  'dance-school-size-comparison',
  'kids-dance-recital-prep',
  'kanagawa-kids-dance-school-area',
  'kids-sports-dance-comparison',
  'dance-no1-reasons-2026',
];

const GENRE_SLUGS = [
  'dance', 'kpop', 'swimming', 'programming',
  'soccer', 'english', 'piano', 'ballet',
  'karate', 'rhythmics', 'preschool', 'juku',
];

const AREA_PATHS = [
  '/aichi/anjo', '/aichi/chikusa', '/aichi/meito', '/aichi/midori',
  '/aichi/moriyama', '/aichi/nisshin', '/aichi/owariasahi', '/aichi/tenpaku', '/aichi/toyota',
  '/chiba/chiba-city', '/chiba/kashiwa', '/chiba/matsudo',
  '/gifu/gifu-city', '/gifu/kani', '/gifu/minokamo', '/gifu/tajimi',
  '/hyogo/nishinomiya',
  '/ibaraki/hitachi', '/ibaraki/hitachinaka', '/ibaraki/mito', '/ibaraki/tsuchiura', '/ibaraki/tsukuba',
  '/ishikawa/kanazawa', '/ishikawa/nonoichi', '/ishikawa/uchinada',
  '/kanagawa/aoba', '/kanagawa/atsugi', '/kanagawa/ebina', '/kanagawa/fujisawa',
  '/kanagawa/kohoku', '/kanagawa/midori',
  '/kanagawa/nakahara', '/kanagawa/nakahara-shinjou', '/kanagawa/sagamihara', '/kanagawa/takatsu',
  '/kanagawa/tsuzuki', '/kanagawa/yamato', '/kanagawa/yokosuka', '/kanagawa/zushi',
  '/kyoto/kyoto-city',
  '/nagano/nagano-city',
  '/osaka/ibaraki', '/osaka/minoh', '/osaka/moriguchi', '/osaka/osaka-city',
  '/osaka/sakai', '/osaka/suita', '/osaka/takatsuki', '/osaka/toyonaka',
  '/saitama/kawaguchi', '/saitama/koshigaya', '/saitama/minami', '/saitama/urawa',
  '/shiga/kusatsu', '/shiga/otsu',
  '/tokyo/chofu', '/tokyo/edogawa', '/tokyo/kita', '/tokyo/machida',
  '/tokyo/meguro', '/tokyo/minato', '/tokyo/nerima', '/tokyo/setagaya',
  '/tokyo/shibuya', '/tokyo/shinagawa', '/tokyo/shinjuku', '/tokyo/suginami',
  '/wakayama/wakayama-city',
];

const PREF_PATHS = [
  '/osaka', '/tokyo', '/kanagawa', '/aichi', '/gifu',
  '/hyogo', '/ibaraki', '/ishikawa', '/kyoto', '/nagano',
  '/shiga', '/wakayama', '/saitama', '/chiba',
];

export default function sitemap() {
  const now = new Date().toISOString();

  const top = [{ url: BASE_URL, lastModified: now, priority: 1.0 }];

  const genres = GENRE_SLUGS.map(slug => ({
    url: `${BASE_URL}/genre/${slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const prefs = PREF_PATHS.map(path => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    priority: 0.75,
  }));

  const areas = AREA_PATHS.map(path => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    priority: 0.6,
  }));

  const blogs = [
    { url: `${BASE_URL}/blog`, lastModified: now, priority: 0.9 },
    ...BLOG_SLUGS.map(slug => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      priority: 0.85,
    })),
  ];

  return [...top, ...blogs, ...genres, ...prefs, ...areas];
}
