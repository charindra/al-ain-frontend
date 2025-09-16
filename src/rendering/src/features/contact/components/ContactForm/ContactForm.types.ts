import {
  Control,
  FieldErrors,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';

export type ContactFormValues = {
  firstName: string;
  familyName: string;
  email: string;
  enquiry: string;
  message: string;
  privacy: boolean;
};

export type EnquiryOption = {
  value: string;
  label: string;
};

export type ContactFormProps = {
  onSubmit: (data: ContactFormValues) => void;
  register: UseFormRegister<ContactFormValues>;
  errors: FieldErrors<ContactFormValues>;
  handleSubmit: UseFormHandleSubmit<ContactFormValues>;
  formState: FormState<ContactFormValues>;
  reset: UseFormReset<ContactFormValues>;
  control: Control<ContactFormValues>;
};
