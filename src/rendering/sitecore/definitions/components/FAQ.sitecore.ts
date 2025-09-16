// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FAQ component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export function addFAQComponents(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FAQItem',
    fields: [
      { name: 'question', type: CommonFieldTypes.SingleLineText },
      { name: 'answer', type: CommonFieldTypes.RichText },
    ],
  });
  manifest.addComponent({
    name: 'FAQSection',
    templateName: 'FAQ',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'images', type: CommonFieldTypes.Image },
    ],
    placeholders: ['faq-items'],
  });
}
