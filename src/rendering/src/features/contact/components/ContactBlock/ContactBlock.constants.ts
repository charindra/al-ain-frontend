import { ContactTab } from './ContactBlock.types';

export const CONTACT_BANNER_IMAGE = '/images/contact-us/contact-us-banner.png';

export const CONTACT_TABS: ContactTab[] = [
  { key: 'general', title: 'GENERAL ENQUIRY' },
  { key: 'filming', title: 'FILMING & PHOTOGRAPHY' },
  { key: 'press', title: 'PRESS & MEDIA' },
  { key: 'venue', title: 'VENUE HIRING' },
];

export const CONTACT_OVERLAY_CONFIG = {
  leftTabs: ['general', 'filming'],
  rightTabs: ['press', 'venue'],
};
