import { ContactFormValues } from '../ContactForm/ContactForm.types';
import { FilmingFormValues } from '../FilmingForm/FilmingForm.types';

export type ContactTabKey = 'general' | 'filming' | 'press' | 'venue';

export type ContactTab = {
  key: ContactTabKey;
  title: string;
};

export type ContactBlockProps = {
  onContactSubmit?: (data: ContactFormValues) => void;
  onFilmingSubmit?: (data: FilmingFormValues) => void;
};

export type OverlayConfig = {
  leftTabs: ContactTabKey[];
  rightTabs: ContactTabKey[];
};
