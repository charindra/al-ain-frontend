import { GalleryPreviewSlide, GalleryPreviewThumbnail } from './GalleryPreviewSlider.types';

export const GALLERY_PREVIEW_SLIDES: GalleryPreviewSlide[] = [
  {
    topHeading: 'GALLERY NAME',
    heading: 'Artefact Name',
    subHeading: 'ca -2300 to ca -1900',
    origin: 'Lorem ipsum dolor sit amet, Lorem ipsum',
    material: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/images/gallery-img-1.png',
    galleryID: 'Artefact Name',
  },
  {
    topHeading: 'ROYAL TREASURES',
    heading: 'Gold Necklace of Queen Puabi',
    subHeading: 'ca -2600 BCE',
    origin: 'Royal Cemetery of Ur, Mesopotamia',
    material: 'Gold, lapis lazuli, and carnelian beads',
    description:
      'Discovered in the tomb of Queen Puabi, this exquisite gold necklace represents the pinnacle of Sumerian jewelry craftsmanship. The intricate design features alternating gold and semi-precious stone beads, showcasing the advanced metallurgical skills of ancient artisans.',
    img: '/images/gal1.jpg',
    galleryID: 'Gold Necklace of Queen Puabi',
  },
  {
    topHeading: 'RELIGIOUS ICONS',
    heading: 'Ziggurat Model',
    subHeading: 'ca -2000 BCE',
    origin: 'Southern Mesopotamia',
    material: 'Terracotta with painted decoration',
    description:
      'This miniature model of a ziggurat temple represents the architectural marvels of ancient Mesopotamia. Ziggurats were massive stepped pyramids that served as temples and were believed to be dwelling places for the gods.',
    img: '/images/gallery-img-1.png',
    galleryID: 'Ziggurat Model',
  },
  {
    topHeading: 'DAILY LIFE',
    heading: "Potter's Wheel Fragment",
    subHeading: 'ca -3000 BCE',
    origin: 'Ancient workshop site, Mesopotamia',
    material: 'Terracotta with wear patterns',
    description:
      "This fragment from an ancient potter's wheel demonstrates the technological advancements in ceramic production during the Neolithic period. The wheel revolutionized pottery making, allowing for more efficient and consistent production.",
    img: '/images/gallery-img-1.png',
    galleryID: "Potter's Wheel Fragment",
  },
];

export const GALLERY_PREVIEW_THUMBNAILS: GalleryPreviewThumbnail[] = [
  {
    img: '/images/gallery-img-1.png',
  },
  {
    img: '/images/gal1.jpg',
  },
  {
    img: '/images/gallery-img-1.png',
  },
  {
    img: '/images/gallery-img-1.png',
  },
];
