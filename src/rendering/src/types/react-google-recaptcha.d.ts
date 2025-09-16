declare module 'react-google-recaptcha' {
  import React from 'react';

  export interface ReCAPTCHAProps {
    sitekey: string | undefined;
    size?: 'compact' | 'normal' | 'invisible';
    theme?: 'dark' | 'light';
    tabindex?: number;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    ref?: React.MutableRefObject<any>;
  }

  class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    executeAsync?: () => Promise<string>;
    reset?: () => void;
  }

  export default ReCAPTCHA;
}
