'use client';

import { useForm } from 'react-hook-form';
import { FormValues } from '../Footer.types';

export const useFooterForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  return {
    register,
    handleSubmit,
    formState,
    onSubmit,
  };
};
