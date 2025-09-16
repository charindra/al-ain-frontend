import { EnquiryOption } from './ContactForm.types';

export const CONTACT_FORM_COPY = {
  heading: 'General Enquiry',
  intro:
    'Please fill out the form to request additional information. We will review your enquiry and get back to you as soon as possible.',
};

export const ENQUIRY_OPTIONS: EnquiryOption[] = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'filming', label: 'Filming & Photography' },
  { value: 'press', label: 'Press & Media' },
  { value: 'venue', label: 'Venue Hiring' },
];
