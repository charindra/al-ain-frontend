'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
const faqStyles = `
.bg-faqs {
  padding: 72px 0;
   background-color: #EDEDED;
}
   @media (max-width: 1023.98px) {
  .bg-faqs {
  padding: 56px 0;
  }
}
   @media (max-width: 767.98px) {
  .bg-faqs {
  background-color: transparent;
  padding: 0;
  }
}
  .faqs-accordion span[aria-hidden="true"] {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
    font-size: 32px;
    transition: 0.4s;
    color: #757575;
  }
  
  .faqs-accordion span[aria-hidden="true"] svg {
    display: none;
  }
  
  .faqs-accordion span[aria-hidden="true"]::after {
    content: "";
    width: 32px;
    height: 32px;
    background-image: url("/images/accordion-arrow.svg");
  }
  
  .faqs-accordion span[aria-hidden="true"][data-open="true"] {
    transform: rotate(0);
    color: #1b1f27;
  }
  
  .faqs-accordion .text-foreground {
    text-align: left;
    font-size: 28px;
    line-height: 32px;
    color: #000000;
    font-family: font-heading;
  }
    @media (max-width: 768px) {
  .faqs-accordion .text-foreground {
    font-size: 24px;
    line-height: 28px;
  }
}
  
  .faqs-accordion p {
    font-size: 18px;
    color: #000000;
  }
 .faqs-accordion-list {
  position: relative;
}

.faqs-accordion-list::after {
  content: "";
  position: absolute;
  left: 24px; 
  right: 24px;
  top: 0;
  height: .5px;
  background-color: #C1C1C1; 
  transition: 0.4s;
}
    @media (max-width: 767.98px) {
  .faqs-accordion-list::after {
  left: 0px;
  right: 0px;
  }
  }
  .faqs-accordion-list:last-child::before {
  content: "";
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 0;
  height: .5px;
  background-color: #C1C1C1;
  transition: 0.4s;
}
  @media (max-width: 767.98px) {
  .faqs-accordion-list:last-child::before {
  left: 0px;
  right: 0px;
  }
  }
.faqs-accordion-list[data-open="true"]::after {
  background-color: #1B1F27;
  height: 1px;
  transition: 0.4s;
}

`;

type FaqItem = {
  id: string;
  name: string;
  question: Field<string>;
  answer: Field<string>;
};

type FaqListProps = {
  fields: {
    data: {
      datasource: {
        children: {
          results: FaqItem[];
        };
      };
    };
  };
};

const FaqList = (props: FaqListProps): JSX.Element => {
  const faqItems = props?.fields?.data?.datasource?.children?.results ?? [];

  // Filter out empty or placeholder questions
  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question?.value?.trim().toLowerCase() !== 'question' &&
      item.question?.value?.trim() !== ''
  );

  if (filteredFaqs.length === 0) {
    return (
      <div className="bg-faqs">
        <div className="text-center text-gray-600 py-10">
          <p>No FAQs available at this time.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: faqStyles }} />
      <div className="bg-faqs">
        <div className="block mx-auto w-full lg:w-[83.1%] px-4 md:px-6 lg:px-0">
          <div className="w-full max-w-[942px] border-2 border-[#ffff] bg-white py-[48px] px-2">
            <Accordion className="p-0 faqs-accordion">
              {filteredFaqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  aria-label={item.question.value}
                  title={item.question.value}
                  className="min-h-[80px] data-[open=true]:min-h-[142px] md:px-6 py-2 faqs-accordion-list"
                >
                  {item.answer?.value ? (
                    <RichText
                      tag="p"
                      field={item.answer}
                      className="text-gray-600 text-sm leading-relaxed -mt-1"
                    />
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed -mt-1">
                      No answer available.
                    </p>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqList;
