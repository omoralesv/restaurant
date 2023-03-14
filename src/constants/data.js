import award01 from '../assets/award01.png'
import award02 from '../assets/award02.png'
import award03 from '../assets/award03.png'
import award05 from '../assets/award05.png'

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: award02,
    title: 'Bib Gourmand',
    subtitle: 'Pretty good. Not gonna lie.',
  },
  {
    imgUrl: award01,
    title: 'Rising Star',
    subtitle: 'A must try for any foodie.',
  },
  {
    imgUrl: award05,
    title: 'AA Hospitality',
    subtitle: 'Treats you like family.',
  },
  {
    imgUrl: award03,
    title: 'Outstanding Chef',
    subtitle: 'Elevates the dining experience to levels once though to be impossible.',
  },
];

export default { wines, cocktails, awards };