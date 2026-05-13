const BASE_URL = 'https://kodomo-manabi-navi.vercel.app';

const BLOG_SLUGS = [
  'osaka-kids-dance-school-ranking',
  'kids-dance-age-guide',
  'kids-hiphop-dance-guide',
  'kids-kpop-dance-school',
  'lydia-dance-academy-review',
  'kanto-kids-dance-school-ranking',
];

const GENRE_SLUGS = [
  'dance', 'kpop', 'swimming', 'programming',
  'soccer', 'english', 'piano', 'ballet',
  'karate', 'rhythmics', 'preschool', 'juku',
];

const AREA_PATHS = [
  '/aichi/anjo', '/aichi/moriyama', '/aichi/nisshin', '/aichi/owariasahi', '/aichi/tenpaku', '/aichi/toyota',
  '/chiba/kashiwa',
  '/gifu/gifu-city', '/gifu/kani', '/gifu/minokamo', '/gifu/tajimi',
  '/hyogo/nishinomiya',
  '/ibaraki/hitachi', '/ibaraki/hitachinaka', '/ibaraki/mito', '/ibaraki/tsuchiura', '/ibaraki/tsukuba',
  '/ishikawa/kanazawa', '/ishikawa/nonoichi', '/ishikawa/uchinada',
  '/kanagawa/aoba', '/kanagawa/atsugi', '/kanagawa/ebina', '/kanagawa/kohoku', '/kanagawa/midori',
  '/kanagawa/nakahara', '/kanagawa/nakahara-shinjou', '/kanagawa/sagamihara', '/kanagawa/takatsu',
  '/kanagawa/tsuzuki', '/kanagawa/yamato', '/kanagawa/zushi',
  '/kyoto/kyoto-city',
  '/nagano/nagano-city',
  '/osaka/ibaraki', '/osaka/minoh', '/osaka/moriguchi', '/osaka/osaka-city',
  '/osaka/sakai', '/osaka/suita', '/osaka/takatsuki', '/osaka/toyonaka',
  '/saitama/minami',
  '/shiga/kusatsu', '/shiga/otsu',
  '/tokyo/chofu', '/tokyo/edogawa', '/tokyo/kita', '/tokyo/machida',
  '/tokyo/meguro', '/tokyo/minato', '/tokyo/setagaya', '/tokyo/shinagawa',
  '/wakayama/wakayama-city',
];

export default function sitemap() {
  const now = new Date().toISOString();

  const top = [{ url: BASE_URL, lastModified: now, priority: 1.0 }];

  const genres = GENRE_SLUGS.map(slug => ({
    url: `${BASE_URL}/genre/${slug}`,
    lastModified: now,
    priority: 0.8,
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

  return [...top, ...blogs, ...genres, ...areas];
}
