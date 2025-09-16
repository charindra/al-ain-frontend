'use client';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';
import HeadingText from '../HeadingText';

interface FormValues {
  firstName: string;
  familyName: string;
  email: string;
  enquiry: string;
  message: string;
  privacy: boolean;
}

interface ContactFormProps {
  onSubmit: (data: FormValues) => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  formState: FormState<FormValues>;
  reset: UseFormReset<FormValues>;
  control: Control<FormValues>;
}

const enquiryOptions = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'filming', label: 'Filming & Photography' },
  { value: 'press', label: 'Press & Media' },
  { value: 'venue', label: 'Venue Hiring' },
];

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
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              setSubmitted(true);
              reset();
            })}
            className="bg-white md:mx-auto p-8 break-normal shadow-md"
          >
            {/* Title */}
            <HeadingText heading="General Enquiry" className="text-[#1B1F27] mb-4" />

            {/* Intro text */}
            <p className="text-[#1B1F27] font-inter text-[18px] leading-[24px] font-[500] mb-8">
              Please fill out the form to request additional information. <br />
              We will review your enquiry and get back to you as soon as possible.
            </p>

            {/* First name & Family name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
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
                  slotProps={{
                    inputLabel:
                      document?.dir === 'rtl'
                        ? { sx: { textAlign: 'right', right: 0, left: 'auto', direction: 'rtl' } }
                        : {},
                    input:
                      document?.dir === 'rtl'
                        ? { style: { textAlign: 'right', direction: 'rtl' } }
                        : {},
                  }}
                />
              </div>

              <div>
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
                  slotProps={{
                    inputLabel:
                      document?.dir === 'rtl'
                        ? { sx: { textAlign: 'right', right: 0, left: 'auto', direction: 'rtl' } }
                        : {},
                    input:
                      document?.dir === 'rtl'
                        ? { style: { textAlign: 'right', direction: 'rtl' } }
                        : {},
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <TextField
                type="email"
                {...register('email', {
                  required: 'email is required',
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
                slotProps={{
                  inputLabel:
                    document?.dir === 'rtl'
                      ? { sx: { textAlign: 'right', right: 0, left: 'auto', direction: 'rtl' } }
                      : {},
                  input:
                    document?.dir === 'rtl'
                      ? { style: { textAlign: 'right', direction: 'rtl' } }
                      : {},
                }}
              />
            </div>

            {/* Enquiry */}
            <div className="mb-6">
              <Controller
                name="enquiry"
                control={control}
                rules={{ required: 'Please select an enquiry type' }}
                render={({ field }) => (
                  <FormControl
                    sx={{
                      borderBottom: '1px solid #8D8F94',
                      '& .MuiInputBase-root:before': {
                        borderBottom: 'none',
                      },
                      '& .MuiInputBase-root:after': {
                        borderBottom: '1px solid black',
                      },
                    }}
                    variant="standard"
                    fullWidth
                    error={!!errors.enquiry}
                  >
                    <InputLabel
                      id="enquiry-label"
                      sx={
                        document?.dir === 'rtl'
                          ? { textAlign: 'right', right: 0, left: 'auto', direction: 'rtl' }
                          : {}
                      }
                    >
                      What&apos;s your enquiry about?*
                    </InputLabel>

                    <Select
                      {...field}
                      labelId="enquiry-label"
                      id="enquiry"
                      value={field.value || ''}
                      sx={{
                        ...(document?.dir === 'rtl'
                          ? {
                              textAlign: 'right',
                              direction: 'rtl',
                              '& .MuiSelect-icon': {
                                right: 'auto', // remove default right
                                left: 0, // push to left
                              },
                            }
                          : {
                              '& .MuiSelect-icon': {
                                right: 0, // normal (English)
                                left: 'auto',
                              },
                            }),
                      }}
                    >
                      {enquiryOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>

                    {errors.enquiry && (
                      <p className="text-red-500 text-xs mt-1">{errors.enquiry.message}</p>
                    )}
                  </FormControl>
                )}
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <TextField
                {...register('message', { required: true })}
                label="Write your message here"
                multiline
                rows={4}
                variant="outlined" // keep border box for message
                fullWidth
                error={!!errors.message}
                helperText={errors.message ? 'Message is required' : ''}
                slotProps={{
                  inputLabel:
                    document?.dir === 'rtl'
                      ? {
                          sx: {
                            textAlign: 'right',
                            right: 20, // offset for outlined variant
                            left: 'auto',
                            transformOrigin: 'top right', // fixes floating animation
                            direction: 'rtl',
                          },
                        }
                      : {},
                  input:
                    document?.dir === 'rtl'
                      ? { style: { textAlign: 'right', direction: 'rtl' } }
                      : {},
                }}
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                {...register('privacy', { required: true })}
                className="mt-1 me-3 h-6 w-6 border border-gray-400 accent-black"
              />
              <span className="font-inter text-[16px] leading-[20px] font-[400] text-[#1B1F27]">
                All information provided will be handled in accordance with our{' '}
                <Link
                  href="/privacy-notice"
                  className="font-inter text-[16px] leading-[20px] font-[400] text-[#1B1F27] underline underline-offset-2"
                >
                  Privacy Notice
                </Link>
                .
              </span>
            </div>
            {errors.privacy && (
              <p className="text-red-500 text-xs mb-4">You must accept the Privacy Notice</p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`flex justify-center items-center gap-2 w-full md:w-[150px] px-[24px] py-[14px]
    ${
      isValid
        ? 'bg-black text-white cursor-pointer hover:bg-gray-800'
        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
    }
    font-inter text-[16px] font-[700] transition`}
            >
              Submit
            </button>
          </form>
        ) : (
          // Success Message
          <div className="bg-white p-8 shadow-md">
            <h2 className='text-[#1B1F27] font-["Big Caslon"] text-[32px] leading-[40px] font-[500] mb-4'>
              General Enquiry
            </h2>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-md relative">
              <button
                onClick={() => setSubmitted(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                ✕
              </button>
              <p className="text-[#1B1F27] font-inter text-[20px] leading-[28px] font-[400] mb-2">
                We&apos;ve received your message, <br />
                thanks for reaching out.
              </p>
              <p className="text-[#1B1F27] font-inter text-[20px] leading-[28px] font-[400]">
                Someone from our team will get back to you shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
