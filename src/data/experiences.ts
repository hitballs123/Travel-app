import type { Experience } from '../types'

// To add a tour: append an Experience to this array. Nothing else needs to change.
export const experiences: Experience[] = [
  {
    id: 'bokbier-amsterdam',
    title: 'Autumn Bokbier Tour',
    creatorId: 'nico',
    city: 'Amsterdam',
    coverUrl: '',
    description:
      'A relaxed afternoon past four classic beer spots in the centre, ending at a brewery next to a windmill. Best Tuesday to Saturday, start around 14:00. The last stop is a tram ride away.',
    tags: ['beer', 'bokbier', 'autumn', 'walking'],
    durationMin: 240,
    distanceKm: 1.5,
    ratingAvg: 0,
    ratingCount: 0,
    stops: [
      {
        id: 'in-de-wildeman',
        name: 'In de Wildeman',
        address: 'Kolksteeg 3',
        lat: 52.3761179,
        lng: 4.8951025,
        googlePlaceId: 'ChIJ-UZn7McJxkcRGQkp-vCx-1U',
        blocks: [
          {
            id: 'wildeman-text',
            type: 'text',
            data: {
              text: 'A tasting room in a former distillery, minutes from Centraal. Rotating taps, so autumn usually brings a bok or two.',
            },
          },
          { id: 'wildeman-tip', type: 'tip', data: { text: 'Closed on Sundays.' } },
          {
            id: 'wildeman-try',
            type: 'tryThis',
            data: { text: 'Ask which bokbiers are on and start with the lightest.' },
          },
        ],
      },
      {
        id: 'arendsnest',
        name: 'Proeflokaal Arendsnest',
        address: 'Herengracht 90',
        lat: 52.3767312,
        lng: 4.8892983,
        googlePlaceId: 'ChIJx_aU48UJxkcRxOEtx6d5Lng',
        blocks: [
          {
            id: 'arendsnest-text',
            type: 'text',
            data: {
              text: 'Dutch beer only, 50+ taps in a canal house. The best place on the route to compare boks side by side.',
            },
          },
          {
            id: 'arendsnest-tip',
            type: 'tip',
            data: { text: 'Order small 25 cl glasses so you can try more.' },
          },
          {
            id: 'arendsnest-try',
            type: 'tryThis',
            data: { text: 'Two different boks next to each other, a classic dark bok and a stronger one.' },
          },
        ],
      },
      {
        id: 'bierkoning',
        name: 'De Bierkoning',
        address: 'Paleisstraat 125',
        lat: 52.372254,
        lng: 4.8898681,
        googlePlaceId: 'ChIJ1RvbssYJxkcRaCUQBZf3Ks0',
        blocks: [
          {
            id: 'bierkoning-text',
            type: 'text',
            data: { text: 'A bottle shop just off Dam Square with a huge range of Dutch and Belgian beer.' },
          },
          {
            id: 'bierkoning-tip',
            type: 'tip',
            data: { text: 'Closed Mondays and closes at 19:00, which is why it comes early.' },
          },
          {
            id: 'bierkoning-try',
            type: 'tryThis',
            data: { text: "A bottle of a bok you haven't tried yet, to take home." },
          },
        ],
      },
      {
        id: 'gollem-raamsteeg',
        name: 'Café Gollem Raamsteeg',
        address: 'Raamsteeg 4',
        lat: 52.3702783,
        lng: 4.888726,
        googlePlaceId: 'ChIJzSPYfMEJxkcR-UUyFYCRqTg',
        blocks: [
          {
            id: 'gollem-text',
            type: 'text',
            data: { text: "Amsterdam's original specialist beer bar, open since 1974. Small, dark and cosy." },
          },
          {
            id: 'gollem-tip',
            type: 'tip',
            data: { text: "Opens at 16:00 on weekdays. If it's full downstairs, look upstairs." },
          },
          {
            id: 'gollem-try',
            type: 'tryThis',
            data: { text: 'Ask the bar for their favourite bok this season.' },
          },
        ],
      },
      {
        id: 'brouwerij-t-ij',
        name: "Brouwerij 't IJ",
        address: 'Funenkade 7',
        lat: 52.3666908,
        lng: 4.9264253,
        googlePlaceId: 'ChIJk_jIQQsJxkcRxEsf3kkT_nc',
        blocks: [
          {
            id: 'tij-text',
            type: 'text',
            data: {
              text: 'Finish at the brewery beside the De Gooyer windmill, with a terrace when the weather allows.',
            },
          },
          {
            id: 'tij-tip',
            type: 'tip',
            data: { text: 'About 20 minutes by tram from the centre; use the Google Maps button for the route.' },
          },
          {
            id: 'tij-try',
            type: 'tryThis',
            data: { text: "The brewery's own seasonal bok, if it's on tap." },
          },
        ],
      },
    ],
  },
]

export function findExperience(id: string | undefined): Experience | undefined {
  return experiences.find((e) => e.id === id)
}
