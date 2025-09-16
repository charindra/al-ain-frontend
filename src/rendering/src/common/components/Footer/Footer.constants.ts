import { SxProps } from '@mui/material';

export const FOOTER_TEXTFIELD_STYLES: SxProps = {
  '& .MuiInputBase-input': {
    fontFamily: 'Typography/Forms/Desktop/Input/font-family',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 'Typography/Forms/Desktop/Input/font-size',
    lineHeight: 'Typography/Forms/Desktop/Input/font-height',
    letterSpacing: '0%',
    color: '#C1C1C1',
  },
  '& .MuiInputLabel-root': {
    color: '#C1C1C1',
    fontFamily: 'Typography/Forms/Desktop/Input/font-family',
    fontWeight: 400,
    fontSize: 'Typography/Forms/Desktop/Input/font-size',
    lineHeight: 'Typography/Forms/Desktop/Input/font-height',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#C1C1C1',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#C1C1C1',
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: '#C1C1C1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#C1C1C1',
  },
};

export const SOCIAL_ICON_CONTAINER_CLASSES =
  'w-14 h-14 flex items-center justify-center rounded-full border border-gray-500 transition-colors duration-300 ease-in-out bg-transparent group-hover:bg-white group-hover:border-white';
