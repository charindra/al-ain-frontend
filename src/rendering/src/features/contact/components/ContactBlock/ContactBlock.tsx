import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ContactForm from '../ContactForm';
import FilmingForm from '../FilmingForm';
import PressAndMedia from '../PressAndMedia';

// Contact form fields
interface ContactFormValues {
  firstName: string;
  familyName: string;
  email: string;
  enquiry: string;
  message: string;
  privacy: boolean;
}

// Filming form fields
interface FilmingFormValues {
  fullName: string;
  bookingType: string;
  filmingDate: string;
  timeFrom: string;
  timeTo: string;
  phoneNumber: string;
  email: string;
  privacy: boolean;
}

// type ContactBlockProps = {
//   heading: string;
//   className?: string;
// };

// const ContactBlock = (props: ContactBlockProps): JSX.Element => {
const ContactBlock = (): JSX.Element => {
  // React Hook Form for Contact
  const {
    register: contactRegister,
    handleSubmit: contactHandleSubmit,
    formState: { errors: contactErrors },
    formState,
    reset: contactReset,
    control: contactControl,
  } = useForm<ContactFormValues>({
    mode: 'onChange',
  });

  // React Hook Form for Filming
  const {
    register: filmingRegister,
    control: filmingControl,
    handleSubmit: filmingHandleSubmit,
    reset: filmingReset,
    formState: { errors: filmingErrors },
    formState: filmingFormState,
  } = useForm<FilmingFormValues>({
    mode: 'onChange',
  });

  // Track selected tab
  const [selectedTab, setSelectedTab] = useState('general');
  const tabsListRef = useRef<HTMLDivElement | null>(null);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (!tabsListRef.current) return;
    if (window.innerWidth >= 1024) return; // only mobile/tablet

    const activeTab = tabsListRef.current.querySelector(`[data-key="${selectedTab}"]`);
    if (activeTab) {
      (activeTab as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [selectedTab]);

  // Submit handlers
  const onContactSubmit = (data: ContactFormValues) => {
    console.log('Contact Form Submitted:', data);
  };

  const onFilmingSubmit = (data: FilmingFormValues) => {
    console.log('Filming Form Submitted:', data);
  };

  // Tab and Tabs props interfaces (move outside JSX)

  return (
    <div className="relative">
      {/* Background image - single image for all tabs */}
      <Image
        src="/images/contact-us/contact-us-banner.png"
        alt="Contact Us Banner"
        fill
        priority
        className="object-cover -z-10 absolute !top-[78px] left-0 w-full h-full"
      />

      {/* Gradient Overlay (mobile only, for General / Filming tabs) */}
      {(selectedTab === 'general' || selectedTab === 'filming') && (
        <div
          className="
              absolute top-0 h-[78px] w-6 max-lg:block hidden pointer-events-none z-10
              ltr:left-0 ltr:bg-gradient-to-r ltr:from-gray-400 ltr:to-transparent
              rtl:right-0 rtl:bg-gradient-to-l rtl:from-gray-400 rtl:to-transparent
            "
        />
      )}

      {/* Gradient Overlay (mobile only, for Press / Venue tabs) */}
      {(selectedTab === 'press' || selectedTab === 'venue') && (
        <div
          className="
              absolute top-0 h-[78px] w-6 max-lg:block hidden pointer-events-none z-10
              ltr:right-0 ltr:bg-gradient-to-l ltr:from-gray-300 ltr:to-transparent
              rtl:left-0 rtl:bg-gradient-to-r rtl:from-gray-300 rtl:to-transparent
            "
        />
      )}

      <div className="w-full mx-auto lg:w-[83.1%] px-4 md:px-6 lg:px-0">
        {/* Custom Tab Navigation */}
        <div className="border-gray-200 overflow-x-auto hide-scrollbar md:mb-[76px]">
          <div className="flex">
            {[
              { key: 'general', title: 'GENERAL ENQUIRY' },
              { key: 'filming', title: 'FILMING & PHOTOGRAPHY' },
              { key: 'press', title: 'PRESS & MEDIA' },
              { key: 'venue', title: 'VENUE HIRING' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                className={`
                  flex justify-center items-center gap-[var(--Spacing-8,8px)]
                  h-[78px] w-fit 
                  px-[var(--Spacing-24,24px)] py-[var(--Spacing-14,14px)]
                  border-b-[4px] border-transparent
                  font-[700] text-[14px] leading-[18px] tracking-[0.14px] font-inter
                  text-[color:var(--Colors-Buttons-Secondary-Default-Default-default-FG,#1B1F27)]
                  ${selectedTab === tab.key ? 'border-[#33130A] bg-[#EDEDED]' : 'hover:bg-gray-100'}
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        {/* Tab Content */}
        {selectedTab === 'general' && (
          <ContactForm
            onSubmit={onContactSubmit}
            register={contactRegister}
            errors={contactErrors}
            handleSubmit={contactHandleSubmit}
            formState={formState}
            reset={contactReset}
            control={contactControl}
          />
        )}
        {selectedTab === 'filming' && (
          <FilmingForm
            onSubmit={onFilmingSubmit}
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
