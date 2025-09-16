'use client';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import HeadingText from 'common/components/HeadingText';
import Link from 'next/link';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { CONTACT_FORM_COPY, ENQUIRY_OPTIONS } from './ContactForm.constants';
import { ContactFormProps } from './ContactForm.types';

const ContactForm = ({
  onSubmit,
  register,
  errors,
  handleSubmit,
  formState,
  reset,
  control,
}: ContactFormProps): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const { isValid } = formState;

  return (
    <div>
      <div className="w-full md:max-w-2xl bg-white/90 md:mb-[163px]">
        {!submitted ? (
          <form
            onSubmit={handleSubmit((formData) => {
              onSubmit(formData);
              setSubmitted(true);
              reset();
            })}
            className="bg-white md:mx-auto p-8 break-normal shadow-md"
          >
            <HeadingText heading={CONTACT_FORM_COPY.heading} className="text-[#1B1F27] mb-4" />
            <p className="text-[#1B1F27] font-inter text-[18px] leading-[24px] font-[500] mb-8">
              {CONTACT_FORM_COPY.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <TextField
                type="text"
                {...register('firstName', {
                  required: 'First name is required',
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'First name cannot contain numbers or special characters',
                  },
                })}
                label="First name*"
                variant="standard"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ''}
              />

              <TextField
                type="text"
                {...register('familyName', {
                  required: 'Family name is required',
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'Family name cannot contain numbers or special characters',
                  },
                })}
                label="Family Name*"
                variant="standard"
                fullWidth
                error={!!errors.familyName}
                helperText={errors.familyName ? errors.familyName.message : ''}
              />
            </div>

            <div className="mb-6">
              <TextField
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email',
                  },
                })}
                label="Your email*"
                variant="standard"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            </div>

            <div className="mb-6">
              <Controller
                name="enquiry"
                control={control}
                rules={{ required: 'Please select an enquiry type' }}
                render={({ field, fieldState }) => (
                  <FormControl variant="standard" fullWidth error={!!fieldState.error}>
                    <InputLabel id="enquiry-label">What&apos;s your enquiry about?*</InputLabel>
                    <Select
                      {...field}
                      labelId="enquiry-label"
                      id="enquiry"
                      value={field.value || ''}
                    >
                      <MenuItem value="">Select enquiry type</MenuItem>
                      {ENQUIRY_OPTIONS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {fieldState.error && (
                      <p className="mt-1 text-xs text-red-500">{fieldState.error.message}</p>
                    )}
                  </FormControl>
                )}
              />
            </div>

            <div className="mb-6">
              <TextField
                {...register('message', {
                  required: 'Please enter your message',
                  minLength: {
                    value: 10,
                    message: 'Please enter a message with at least 10 characters',
                  },
                })}
                label="Your message*"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
              />
            </div>

            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="contact-privacy"
                {...register('privacy', {
                  required: 'Please acknowledge our privacy policy',
                })}
                className="mt-[6px] w-[18px] h-[18px] border border-[#8D8F94]"
              />
              <label
                htmlFor="contact-privacy"
                className="text-[16px] leading-[24px] text-[#1B1F27]"
              >
                I have read and agree with the{' '}
                <Link href="/privacy-policy" className="underline">
                  privacy policy.
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className="page-btn grad-btn-bg w-full md:w-auto disabled:opacity-50"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="p-8 bg-white shadow-md">
            <HeadingText heading="Thank You" className="text-[#1B1F27] mb-4" />
            <p className="text-[#1B1F27]">
              We have received your enquiry and will get back to you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
