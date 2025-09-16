'use client';

import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextProps = {
  locale: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  toggleLanguage: () => void;
  lan: string;
  isLanguageSwitching: boolean;
  finishLanguageSwitch: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const context = useSitecoreContext();
  const localeFromSitecore = context.sitecoreContext.language as string;

  // read locale directly from URL
  const urlLocale = pathname.startsWith('/en') ? 'en' : 'ar';
  const [locale, setLocale] = useState<'en' | 'ar'>(urlLocale);
  const [isLanguageSwitching, setIsLanguageSwitching] = useState(false);

  const lan = localeFromSitecore as string;
  const dir = locale.toLocaleLowerCase() === 'ar-ae' ? 'rtl' : 'ltr';

  useEffect(() => {
    // keep localStorage in sync with URL
    localStorage.setItem('locale', locale);
    document.cookie = `locale=${locale}; path=/;`;
  }, [locale]);

  useEffect(() => {
    // if URL and state get out of sync (eg. first load), fix it
    if (locale !== urlLocale) {
      setLocale(urlLocale);
    }
  }, [locale, urlLocale]);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';

    // strip current locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '');
    const newPath = `/${newLocale}${pathWithoutLocale === '' ? '/' : pathWithoutLocale}`;

    // Start language switching process
    setIsLanguageSwitching(true);
    setLocale(newLocale);
    router.push(newPath);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    // Only change direction if not currently switching languages
    if (!isLanguageSwitching) {
      document.documentElement.dir = dir;
    }
  }, [locale, dir, isLanguageSwitching]);

  // Function to finish language switching (called by preloader)
  const finishLanguageSwitch = () => {
    setIsLanguageSwitching(false);
    // Now apply the direction change
    document.documentElement.dir = dir;
  };

  return (
    <ThemeContext.Provider
      value={{ locale, dir, toggleLanguage, lan, isLanguageSwitching, finishLanguageSwitch }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeProvider Error');
  return context;
};
