import {
  Control,
  FieldErrors,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';

export type FilmingFormValues = {
  fullName: string;
  bookingType: string;
  filmingDate: string;
  timeFrom: string;
  timeTo: string;
  phoneNumber: string;
  email: string;
  privacy: boolean;
};

export type FilmingFormProps = {
  onSubmit: (data: FilmingFormValues) => void;
  register: UseFormRegister<FilmingFormValues>;
  handleSubmit: UseFormHandleSubmit<FilmingFormValues>;
  reset: UseFormReset<FilmingFormValues>;
  errors: FieldErrors<FilmingFormValues>;
  formState: FormState<FilmingFormValues>;
  control: Control<FilmingFormValues>;
};
