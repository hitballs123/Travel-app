import type { Block, Experience, Stop } from '../types'

// Dummy tours so the catalogue has something to show. demo: true puts a "Demo" badge on
// the card. Coordinates are approximate; no googlePlaceId on purpose.

function stop(id: string, name: string, lat: number, lng: number, text: string, tip?: string, tryThis?: string): Stop {
  const blocks: Block[] = [{ id: `${id}-text`, type: 'text', data: { text } }]
  if (tip) blocks.push({ id: `${id}-tip`, type: 'tip', data: { text: tip } })
  if (tryThis) blocks.push({ id: `${id}-try`, type: 'tryThis', data: { text: tryThis } })
  return { id, name, lat, lng, blocks }
}

export const demoExperiences: Experience[] = [
  {
    id: 'red-light-food',
    title: 'Red Light District Food Tour',
    creatorId: 'demo',
    city: 'Amsterdam',
    coverUrl: '',
    description:
      'The oldest part of the city is also one of the tastiest. Snack your way from Nieuwmarkt through Chinatown to the old harbour front, all in daylight.',
    tags: ['food', 'walking', 'old town'],
    durationMin: 150,
    distanceKm: 2,
    ratingAvg: 4.6,
    ratingCount: 212,
    costLevel: 2,
    suits: { kids: false, adultsOnly: false, accessible: true },
    demo: true,
    stops: [
      stop('nieuwmarkt', 'Nieuwmarkt', 52.3727, 4.9003, 'A square around the 15th-century Waag, once a city gate. Market stalls on Saturdays.', 'The organic farmers market runs on Saturday mornings.', 'Fresh kibbeling (fried cod) with garlic sauce.'),
      stop('zeedijk', 'Zeedijk', 52.3748, 4.9007, "Amsterdam's small Chinatown, on a street that used to be the city's sea wall.", undefined, 'A plate of roast duck or a few steamed dumplings to share.'),
      stop('oude-kerk', 'Oudekerksplein', 52.3743, 4.8983, "The square around the city's oldest building. Busy at night, relaxed in the afternoon.", 'Photographing the windows in this area is not allowed; please respect it.'),
      stop('warmoesstraat', 'Warmoesstraat', 52.374, 4.8967, 'One of the oldest streets in town, now lined with small food shops.', undefined, 'A warm stroopwafel, made in front of you.'),
      stop('prins-hendrikkade', 'Prins Hendrikkade', 52.3765, 4.9015, 'Finish by the water with a view of the Basilica of St Nicholas.', 'Centraal Station is a three-minute walk from here.', 'Dutch cheese and a cold drink on a bench by the water.'),
    ],
  },
  {
    id: 'canal-history',
    title: 'Canal History Walk',
    creatorId: 'demo',
    city: 'Amsterdam',
    coverUrl: '',
    description:
      'Two hours along the Grachtengordel, the 17th-century canal ring. Merchant houses, hidden courtyards and the bridges that hold it all together.',
    tags: ['history', 'canals', 'walking'],
    durationMin: 120,
    distanceKm: 3,
    ratingAvg: 4.8,
    ratingCount: 287,
    costLevel: 1,
    suits: { kids: true, adultsOnly: false, accessible: true },
    editorsPick: { note: 'The best first walk in Amsterdam: free, flat and full of stories you will retell at dinner.' },
    demo: true,
    stops: [
      stop('brouwersgracht', 'Brouwersgracht', 52.381, 4.888, 'Often called the prettiest canal in the city, lined with old brewery warehouses.', undefined, 'Spot the hoisting beams under the gables: furniture still goes in through the windows.'),
      stop('westerkerk', 'Westerkerk', 52.3745, 4.884, 'The tallest church tower in the old centre. Rembrandt is buried here somewhere.', 'The carillon plays every 15 minutes.'),
      stop('begijnhof', 'Begijnhof', 52.3693, 4.8901, 'A quiet medieval courtyard, home to one of the two oldest wooden houses in the city.', 'Residents live here: keep voices low.'),
      stop('golden-bend', 'Golden Bend, Herengracht', 52.3655, 4.8935, 'The widest, grandest stretch of the canal ring, where the richest merchants built.', undefined, 'Count the double-width houses: that is how you showed off in 1670.'),
      stop('magere-brug', 'Magere Brug', 52.3633, 4.902, 'The famous white drawbridge over the Amstel, lit up at night.', 'Come back after dark for the lights.'),
    ],
  },
  {
    id: 'shopping-amsterdam',
    title: 'Best Places to Shop',
    creatorId: 'demo',
    city: 'Amsterdam',
    coverUrl: '',
    description:
      'From independent boutiques in the Nine Streets to the stalls of the Albert Cuyp market. Comfortable shoes and an empty tote bag recommended.',
    tags: ['shopping', 'walking', 'markets'],
    durationMin: 180,
    distanceKm: 3.5,
    ratingAvg: 4.4,
    ratingCount: 96,
    costLevel: 3,
    suits: { kids: true, adultsOnly: false, accessible: true },
    demo: true,
    stops: [
      stop('haarlemmerstraat', 'Haarlemmerstraat', 52.3807, 4.888, 'A long, lively street of food shops, design stores and small labels.', 'Most shops open around 10:00 or 11:00.'),
      stop('magna-plaza', 'Magna Plaza', 52.3735, 4.8912, 'A former post office behind the Royal Palace, now a shopping centre.', undefined, 'Look up: the building is worth the visit on its own.'),
      stop('nine-streets', 'De 9 Straatjes', 52.37, 4.885, 'Nine small streets between the main canals, packed with vintage and independent shops.', 'Many shops close on Monday morning.'),
      stop('spiegelkwartier', 'Spiegelkwartier', 52.3622, 4.8865, 'Antiques and art dealers on the way to the Rijksmuseum.'),
      stop('albert-cuyp', 'Albert Cuypmarkt', 52.3557, 4.8946, 'The biggest street market in the country, open six days a week.', 'Closed on Sundays.', 'A fresh stroopwafel to end the day.'),
    ],
  },
  {
    id: 'jordaan-coffee',
    title: 'Coffee and Apple Pie in the Jordaan',
    creatorId: 'demo',
    city: 'Amsterdam',
    coverUrl: '',
    description:
      'A slow loop through the Jordaan for good coffee and the famous Dutch apple pie, with quiet canals in between.',
    tags: ['coffee', 'cake', 'food', 'walking'],
    durationMin: 90,
    distanceKm: 1.5,
    ratingAvg: 4.9,
    ratingCount: 143,
    costLevel: 1,
    suits: { kids: true, adultsOnly: false, accessible: true },
    editorsPick: { note: 'A perfect slow morning. Go on a Monday for the Noordermarkt and get the pie with whipped cream.' },
    demo: true,
    stops: [
      stop('noordermarkt', 'Noordermarkt', 52.3795, 4.8865, 'A church square with markets on Monday and Saturday, and a corner café famous for its apple pie.', undefined, 'Apple pie, warm, with slagroom (whipped cream).'),
      stop('lindengracht', 'Lindengracht', 52.38, 4.8835, 'A filled-in canal, now a wide street with a Saturday market and small cafés.', 'Good spot for a flat white to go.'),
      stop('egelantiersgracht', 'Egelantiersgracht', 52.3765, 4.883, 'One of the quietest canals in the Jordaan, with leaning houses and houseboats.', undefined, 'Peek into the hidden courtyard gardens (hofjes) along the way, quietly.'),
      stop('bloemgracht', 'Bloemgracht', 52.374, 4.882, 'The "Herengracht of the Jordaan": a calm canal to finish with a last coffee.'),
    ],
  },
  {
    id: 'noord-street-art',
    title: 'Street Art in Noord',
    creatorId: 'demo',
    city: 'Amsterdam',
    coverUrl: '',
    description:
      'Take the free ferry across the IJ to a former shipyard covered in murals and graffiti, then end at a museum dedicated to street art.',
    tags: ['art', 'street art', 'walking'],
    durationMin: 150,
    distanceKm: 3,
    ratingAvg: 4.5,
    ratingCount: 64,
    costLevel: 1,
    suits: { kids: true, adultsOnly: false, accessible: true },
    demo: true,
    stops: [
      stop('ferry-centraal', 'Ferry behind Centraal Station', 52.3812, 4.8999, 'The ferries to Noord are free and leave every few minutes, day and night.', 'Take the NDSM ferry (about 15 minutes), not the short Buiksloterweg one.'),
      stop('ndsm-wharf', 'NDSM Wharf', 52.401, 4.892, 'A huge former shipyard turned creative hub. Almost every wall is painted.', undefined, 'Find the giant Anne Frank mural on the side of the building.'),
      stop('ndsm-loods', 'NDSM hangar walls', 52.4018, 4.8905, 'The old hangar and the containers around it change paint every few months.', 'Weekend flea markets happen here once a month.'),
      stop('straat-museum', 'STRAAT Museum', 52.4016, 4.893, 'A museum with large works by street artists from all over the world.', 'Tickets are cheaper online.', 'Watch an artist at work in the open studio.'),
    ],
  },
  {
    id: 'amsterdam-after-dark',
    title: 'Amsterdam After Dark',
    creatorId: 'demo',
    city: 'Amsterdam',
    coverUrl: '',
    description:
      'Start in a brown café, catch live music around Leidseplein and end with a late bite. An evening out like the locals do it.',
    tags: ['night', 'music', 'drink', 'walking'],
    durationMin: 210,
    distanceKm: 2,
    ratingAvg: 4.3,
    ratingCount: 38,
    costLevel: 3,
    suits: { kids: false, adultsOnly: true, accessible: false },
    demo: true,
    stops: [
      stop('spui', 'Spui', 52.3685, 4.8897, 'A small square with some of the oldest brown cafés in town: wood, candles and sand on the floor.', undefined, 'A small, cold pils (a "fluitje") at the bar.'),
      stop('leidseplein', 'Leidseplein', 52.3641, 4.8828, 'The busiest nightlife square, with street performers and theatres.', 'Pickpockets love crowds: keep your phone in a front pocket.'),
      stop('paradiso', 'Paradiso', 52.3622, 4.8838, 'A former church turned legendary concert hall.', 'Check the programme online before you go; popular shows sell out.'),
      stop('rembrandtplein', 'Rembrandtplein', 52.3663, 4.8964, 'Bars and clubs around a statue of Rembrandt and his Night Watch in bronze.'),
      stop('utrechtsestraat', 'Utrechtsestraat', 52.3628, 4.8985, 'A street of restaurants that stay open late.', undefined, 'Hot bitterballen with mustard, the classic late bite.'),
    ],
  },
]
