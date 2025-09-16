'use client';

import Link from 'next/link';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormReset,
  FormState,
  Controller,
  Control,
} from 'react-hook-form';
import { TextField } from '@mui/material';
import clsx from 'clsx';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import HeadingText from '../HeadingText';

interface FormValues {
  fullName: string;
  bookingType: string;
  filmingDate: string;
  timeFrom: string;
  timeTo: string;
  phoneNumber: string;
  email: string;
  privacy: boolean;
}

interface FilmingFormProps {
  onSubmit: (data: FormValues) => void;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  reset: UseFormReset<FormValues>;
  errors: FieldErrors<FormValues>;
  formState: FormState<FormValues>;
  control: Control<FormValues>;
}

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
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              setSubmitted(true);
              reset();
            })}
            className="w-full max-w-2xl p-6 mx-auto bg-white shadow-md sm:p-8"
          >
            {/* Title */}
            <HeadingText heading="Filming & Photography" className="text-[#1B1F27] mb-4" />

            {/* Intro text */}
            <p className="text-[#1B1F27] font-inter text-[18px] leading-[24px] font-[500] mb-8">
              Want to film or take photos here? <br />
              Just let us know your details below.
            </p>

            {/* Full Name */}
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

            {/* Booking type */}
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
                      {['individual', 'company'].map((type) => (
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

            {/* Filming Date */}
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
                      onChange={(newValue) => {
                        field.onChange(newValue ? dayjs(newValue).format('YYYY-MM-DD') : '');
                      }}
                      disablePast
                      slotProps={{
                        textField: {
                          variant: 'standard',
                          fullWidth: true,
                          error: !!errors.filmingDate,
                          helperText: errors.filmingDate ? errors.filmingDate.message : '',
                          InputLabelProps:
                            document?.dir === 'rtl'
                              ? {
                                  sx: {
                                    textAlign: 'right',
                                    right: 0,
                                    left: 'auto',
                                    direction: 'rtl',
                                  },
                                }
                              : {},
                          inputProps:
                            document?.dir === 'rtl'
                              ? { style: { textAlign: 'right', direction: 'rtl' } }
                              : {},
                        },
                      }}
                      sx={{
                        '& .MuiInputBase-root': {
                          '&:before': {
                            borderBottom: '1px solid #8D8F94',
                          },
                          '&:after': {
                            borderBottom: '1px solid black',
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                )}
              />
            </div>

            {/* Shooting Time */}
            <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2">
              {/* Time From */}
              <div>
                <Controller
                  name="timeFrom"
                  control={control}
                  rules={{ required: 'Please select a starting time' }}
                  render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        {...field}
                        label="Shooting Time From*"
                        value={field.value ? dayjs(field.value, 'HH:mm') : null}
                        onChange={(newValue) => {
                          field.onChange(newValue ? dayjs(newValue).format('HH:mm') : '');
                        }}
                        slotProps={{
                          textField: {
                            variant: 'standard',
                            fullWidth: true,
                            error: !!errors.timeFrom,
                            helperText: errors.timeFrom ? errors.timeFrom.message : '',
                            InputLabelProps:
                              document?.dir === 'rtl'
                                ? {
                                    sx: {
                                      textAlign: 'right',
                                      right: 0,
                                      left: 'auto',
                                      direction: 'rtl',
                                    },
                                  }
                                : {},
                            inputProps:
                              document?.dir === 'rtl'
                                ? { style: { textAlign: 'right', direction: 'rtl' } }
                                : {},
                          },
                        }}
                        sx={{
                          '& .MuiInputBase-root': {
                            '&:before': {
                              borderBottom: '1px solid #8D8F94',
                            },
                            '&:after': {
                              borderBottom: '1px solid black',
                            },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  )}
                />
              </div>

              {/* Time To */}
              <div>
                <Controller
                  name="timeTo"
                  control={control}
                  rules={{ required: 'Please select an ending time' }}
                  render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        {...field}
                        label="Shooting Time To*"
                        value={field.value ? dayjs(field.value, 'HH:mm') : null}
                        onChange={(newValue) => {
                          field.onChange(newValue ? dayjs(newValue).format('HH:mm') : '');
                        }}
                        slotProps={{
                          textField: {
                            variant: 'standard',
                            fullWidth: true,
                            error: !!errors.timeTo,
                            helperText: errors.timeTo ? errors.timeTo.message : '',
                            InputLabelProps:
                              document?.dir === 'rtl'
                                ? {
                                    sx: {
                                      textAlign: 'right',
                                      right: 0,
                                      left: 'auto',
                                      direction: 'rtl',
                                    },
                                  }
                                : {},
                            inputProps:
                              document?.dir === 'rtl'
                                ? { style: { textAlign: 'right', direction: 'rtl' } }
                                : {},
                          },
                        }}
                        sx={{
                          '& .MuiInputBase-root': {
                            '&:before': {
                              borderBottom: '1px solid #8D8F94',
                            },
                            '&:after': {
                              borderBottom: '1px solid black',
                            },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  )}
                />
              </div>
            </div>

            {/* Phone Number with flag + code */}
            <div className="mb-12">
              <label
                className={
                  document?.dir === 'rtl'
                    ? 'block text-[#1B1F27] font-inter text-[16px] mb-1 text-right'
                    : 'block text-[#1B1F27] font-inter text-[16px] mb-1'
                }
              >
                Phone Number*
              </label>

              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: 'Phone number is required',
                  pattern: { value: /^\d{9,14}$/, message: 'Invalid phone number' },
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={'ae'} // default UAE
                    enableSearch
                    inputClass={`!w-full !bg-transparent !border-0 !border-b !border-gray-400 !rounded-none 
          focus:!border-black focus:!ring-0 focus:!shadow-none
          !py-2 !text-[18px] !font-inter !text-[#1B1F27]
          ${document?.dir === 'rtl' ? '!text-right pr-10' : ''}`}
                    containerClass={`!w-full ${document?.dir === 'rtl' ? '!flex-row-reverse' : ''}`}
                    buttonClass={`!border-0 !bg-transparent ${
                      document?.dir === 'rtl' ? '!ml-2' : '!mr-2'
                    }`}
                    dropdownClass="!text-[16px]"
                  />
                )}
              />

              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message as string}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <TextField
                type="email"
                {...register('email', {
                  required: 'email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                label="Email*"
                variant="standard"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                slotProps={{
                  inputLabel:
                    document?.dir === 'rtl'
                      ? {
                          sx: {
                            textAlign: 'right',
                            right: 0,
                            left: 'auto',
                            direction: 'rtl',
                            color: 'black',
                          },
                        }
                      : {},
                  input:
                    document?.dir === 'rtl'
                      ? { style: { textAlign: 'right', direction: 'rtl', color: 'black' } }
                      : {},
                }}
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                {...register('privacy', { required: true })}
                className="w-4 h-4 mt-1 border border-gray-400 me-3 accent-black"
              />
              <span className="font-inter text-[16px] leading-[20px] font-[400] text-[#1B1F27]">
                All information provided will be handled in accordance with our{' '}
                <Link href="/privacy-notice" className="underline underline-offset-2">
                  Privacy Notice
                </Link>
                .
              </span>
            </div>
            {errors.privacy && (
              <p className="mb-4 text-xs text-red-500">You must accept the Privacy Notice</p>
            )}

            {/* Submit */}
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
          <div className="p-8 bg-white shadow-md">
            <h2 className='text-[#1B1F27] font-["Big Caslon"] text-[32px] leading-[40px] font-[500] mb-4'>
              Filming & Photography
            </h2>
            <div className="relative p-6 border border-gray-200 rounded-md bg-gray-50">
              <button
                onClick={() => setSubmitted(false)}
                className="absolute text-gray-600 top-3 right-3 hover:text-black"
              >
                ✕
              </button>
              <p className="text-[#1B1F27] font-inter text-[20px] leading-[28px] font-[400] mb-2">
                Thanks for your request, we&apos;ve received your details.
              </p>
              <p className="text-[#1B1F27] font-inter text-[20px] leading-[28px] font-[400]">
                Our team will contact you shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmingForm;
