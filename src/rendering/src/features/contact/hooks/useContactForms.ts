'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormValues } from '../components/ContactForm/ContactForm.types';
import { FilmingFormValues } from '../components/FilmingForm/FilmingForm.types';

export const useContactForms = () => {
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const [selectedTab, setSelectedTab] = useState<'general' | 'filming' | 'press' | 'venue'>(
    'general'
  );

  const contactForm = useForm<ContactFormValues>({ mode: 'onChange' });
  const filmingForm = useForm<FilmingFormValues>({ mode: 'onChange' });

  useEffect(() => {
    if (!tabsListRef.current) return;
    if (typeof window === 'undefined' || window.innerWidth >= 1024) return;

    const activeTab = tabsListRef.current.querySelector<HTMLElement>(`[data-key="${selectedTab}"]`);
    activeTab?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [selectedTab]);

  return {
    contactForm,
    filmingForm,
    selectedTab,
    setSelectedTab,
    tabsListRef,
  };
};
