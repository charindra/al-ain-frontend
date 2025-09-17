import React from 'react';
import { RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

import type { SharedRichTextProps } from './RichText.types';

export const Default = (props: SharedRichTextProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;
  const styles = props.params.styles?.trimEnd?.() ?? '';

  return (
    <div className={`component rich-text ${styles}`.trim()} id={id ? id : undefined}>
      <div className="component-content">{text}</div>
    </div>
  );
};
