'use client';

import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import HeadingText from 'common/components/HeadingText';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { BOOKING_TYPES, FILMING_FORM_COPY } from './FilmingForm.constants';
import { FilmingFormProps } from './FilmingForm.types';

const FilmingForm = ({
  onSubmit,
  register,
  errors,
  control,
  handleSubmit,
  reset,
  formState,
}: FilmingFormProps): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const { isValid } = formState;

  return (
    <div>
      <div className="w-full max-w-2xl bg-white/90 md:mb-[163px]">
        {!submitted ? (
          <form
            onSubmit={handleSubmit((formData) => {
              onSubmit(formData);
              setSubmitted(true);
              reset();
            })}
            className="w-full max-w-2xl p-6 mx-auto bg-white shadow-md sm:p-8"
          >
            <HeadingText heading={FILMING_FORM_COPY.heading} className="text-[#1B1F27] mb-4" />
            <p className="text-[#1B1F27] font-inter text-[18px] leading-[24px] font-[500] mb-8">
              {FILMING_FORM_COPY.intro}
            </p>

            <div className="mb-12">
              <TextField
                {...register('fullName', {
                  required: 'Full name is required',
                  pattern: {
                    value: /^[A-Za-z\s]{9,15}$/i,
                    message:
                      'Full name cannot contain numbers or special characters and must be 9-15 characters long',
                  },
                })}
                label="Full Name*"
                variant="standard"
                fullWidth
                error={!!errors.fullName}
                helperText={errors.fullName ? errors.fullName.message : ''}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#1B1F27] font-inter text-[16px] mb-2">
                Booking as*
              </label>
              <Controller
                name="bookingType"
                control={control}
                rules={{ required: 'Please select booking type' }}
                render={({ field, fieldState }) => (
                  <>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      {BOOKING_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => field.onChange(type)}
                          className={clsx(
                            'cursor-pointer w-full sm:w-[120px] h-[40px] flex items-center justify-center border text-[16px] font-inter transition rounded-none',
                            field.value === type
                              ? 'bg-black text-white border-black'
                              : 'bg-white text-[#1B1F27] border-gray-300 hover:bg-gray-100'
                          )}
                        >
                          {type === 'individual' ? 'Individual' : 'Company'}
                        </button>
                      ))}
                    </div>
                    {fieldState.error && (
                      <p className="mt-1 text-xs text-red-500">{fieldState.error.message}</p>
                    )}
                  </>
                )}
              />
            </div>

            <div className="mb-10">
              <Controller
                name="filmingDate"
                control={control}
                rules={{ required: 'Please select a filming date' }}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      label="Filming Date*"
                      value={field.value ? dayjs(field.value) : null}
                      onChange={(newValue) =>
                        field.onChange(newValue ? dayjs(newValue).format('YYYY-MM-DD') : '')
                      }
                      disablePast
                    />
                  </LocalizationProvider>
                )}
              />
              {errors.filmingDate && (
                <p className="mt-1 text-xs text-red-500">{errors.filmingDate.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2">
              <Controller
                name="timeFrom"
                control={control}
                rules={{ required: 'Start time is required' }}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      {...field}
                      label="Time From*"
                      value={field.value ? dayjs(field.value, 'HH:mm') : null}
                      onChange={(newValue) =>
                        field.onChange(newValue ? dayjs(newValue).format('HH:mm') : '')
                      }
                    />
                  </LocalizationProvider>
                )}
              />

              <Controller
                name="timeTo"
                control={control}
                rules={{ required: 'End time is required' }}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      {...field}
                      label="Time To*"
                      value={field.value ? dayjs(field.value, 'HH:mm') : null}
                      onChange={(newValue) =>
                        field.onChange(newValue ? dayjs(newValue).format('HH:mm') : '')
                      }
                    />
                  </LocalizationProvider>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2">
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: 'Phone number is required' }}
                render={({ field, fieldState }) => (
                  <div>
                    <PhoneInput
                      country={'ae'}
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      inputProps={{ name: 'phone', required: true }}
                      specialLabel="Phone number*"
                      inputStyle={{ width: '100%' }}
                    />
                    {fieldState.error && (
                      <p className="mt-1 text-xs text-red-500">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />

              <TextField
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                label="Email address*"
                variant="standard"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            </div>

            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="filming-privacy"
                {...register('privacy', {
                  required: 'Please acknowledge our privacy policy',
                })}
                className="mt-[6px] w-[18px] h-[18px] border border-[#8D8F94]"
              />
              <label
                htmlFor="filming-privacy"
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
              We have received your request and will contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmingForm;
