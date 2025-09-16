'use client';

import Image from 'next/image';
import ContactForm from '../ContactForm';
import FilmingForm from '../FilmingForm';
import PressAndMedia from '../PressAndMedia';
import {
  CONTACT_BANNER_IMAGE,
  CONTACT_OVERLAY_CONFIG,
  CONTACT_TABS,
} from './ContactBlock.constants';
import { ContactBlockProps } from './ContactBlock.types';
import { ContactFormValues } from '../ContactForm/ContactForm.types';
import { FilmingFormValues } from '../FilmingForm/FilmingForm.types';
import { useContactForms } from '../../hooks/useContactForms';

const ContactBlock = ({
  onContactSubmit,
  onFilmingSubmit,
}: ContactBlockProps = {}): JSX.Element => {
  const { contactForm, filmingForm, selectedTab, setSelectedTab, tabsListRef } = useContactForms();

  const {
    register: contactRegister,
    handleSubmit: contactHandleSubmit,
    formState: contactFormState,
    reset: contactReset,
    control: contactControl,
  } = contactForm;
  const contactErrors = contactFormState.errors;

  const {
    register: filmingRegister,
    control: filmingControl,
    handleSubmit: filmingHandleSubmit,
    reset: filmingReset,
    formState: filmingFormState,
  } = filmingForm;
  const filmingErrors = filmingFormState.errors;

  const handleContactSubmit = (data: ContactFormValues) => {
    onContactSubmit?.(data);
  };

  const handleFilmingSubmit = (data: FilmingFormValues) => {
    onFilmingSubmit?.(data);
  };

  const showLeftOverlay = CONTACT_OVERLAY_CONFIG.leftTabs.includes(selectedTab);
  const showRightOverlay = CONTACT_OVERLAY_CONFIG.rightTabs.includes(selectedTab);

  return (
    <div className="relative">
      <Image
        src={CONTACT_BANNER_IMAGE}
        alt="Contact Us Banner"
        fill
        priority
        className="object-cover -z-10 absolute !top-[78px] left-0 w-full h-full"
      />

      {showLeftOverlay && (
        <div
          className="
            absolute top-0 h-[78px] w-6 max-lg:block hidden pointer-events-none z-10
            ltr:left-0 ltr:bg-gradient-to-r ltr:from-gray-400 ltr:to-transparent
            rtl:right-0 rtl:bg-gradient-to-l rtl:from-gray-400 rtl:to-transparent
          "
        />
      )}

      {showRightOverlay && (
        <div
          className="
            absolute top-0 h-[78px] w-6 max-lg:block hidden pointer-events-none z-10
            ltr:right-0 ltr:bg-gradient-to-l ltr:from-gray-300 ltr:to-transparent
            rtl:left-0 rtl:bg-gradient-to-r rtl:from-gray-300 rtl:to-transparent
          "
        />
      )}

      <div className="w-full mx-auto lg:w-[83.1%] px-4 md:px-6 lg:px-0">
        <div className="border-gray-200 overflow-x-auto hide-scrollbar md:mb-[76px]">
          <div className="flex" ref={tabsListRef}>
            {CONTACT_TABS.map((tab) => (
              <button
                key={tab.key}
                data-key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                className={`
                  flex justify-center items-center gap-[var(--Spacing-8,8px)]
                  h-[78px] w-fit px-[var(--Spacing-24,24px)] py-[var(--Spacing-14,14px)]
                  border-b-[4px] border-transparent font-[700] text-[14px] leading-[18px]
                  tracking-[0.14px] font-inter text-[color:var(--Colors-Buttons-Secondary-Default-Default-default-FG,#1B1F27)]
                  ${selectedTab === tab.key ? 'border-[#33130A] bg-[#EDEDED]' : 'hover:bg-gray-100'}
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {selectedTab === 'general' && (
          <ContactForm
            onSubmit={handleContactSubmit}
            register={contactRegister}
            errors={contactErrors}
            handleSubmit={contactHandleSubmit}
            formState={contactFormState}
            reset={contactReset}
            control={contactControl}
          />
        )}

        {selectedTab === 'filming' && (
          <FilmingForm
            onSubmit={handleFilmingSubmit}
            register={filmingRegister}
            errors={filmingErrors}
            control={filmingControl}
            handleSubmit={filmingHandleSubmit}
            reset={filmingReset}
            formState={filmingFormState}
          />
        )}

        {selectedTab === 'press' && <PressAndMedia />}
        {selectedTab === 'venue' && <PressAndMedia />}
      </div>
    </div>
  );
};

export default ContactBlock;
