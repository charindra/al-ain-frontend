import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { FAQ_EMPTY_STATE_MESSAGE, FAQ_NO_ANSWER_MESSAGE } from './FaqList.constants';
import { faqListStyles } from './FaqList.styles';
import { FaqListProps } from './FaqList.types';

const FaqList = (props: FaqListProps): JSX.Element => {
  const faqItems = props?.fields?.data?.datasource?.children?.results ?? [];

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question?.value?.trim().toLowerCase() !== 'question' &&
      item.question?.value?.trim() !== ''
  );

  if (filteredFaqs.length === 0) {
    return (
      <div className="bg-faqs">
        <div className="text-center text-gray-600 py-10">
          <p>{FAQ_EMPTY_STATE_MESSAGE}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: faqListStyles }} />
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
                      {FAQ_NO_ANSWER_MESSAGE}
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
