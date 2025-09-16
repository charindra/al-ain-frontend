import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { isEditorActive } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { default as NextjsLink } from 'next/link';
import { useI18n } from 'next-localization';
import {
  buildRelText,
  composeClassName,
  extractLinkValue,
  getCanonicalLink,
  resolveHref,
  shouldOpenModal,
} from './NextLink.utils';
import { LinkFieldJsonValue, NextLinkProps } from './NextLink.types';

const NextLink = (props: NextLinkProps): JSX.Element => {
  const editorActive = isEditorActive();
  const { locale } = useI18n();
  const noFollow = props.linkCustomizations?.noFollow?.value;
  const link: LinkFieldJsonValue | undefined = extractLinkValue(props.field);
  const canonicalLink = getCanonicalLink(link);
  const hideText = props.hideText ?? false;

  if (props.field == null) {
    return <></>;
  }

  const relText = buildRelText(link, noFollow);
  const cssClasses = composeClassName(props.className, link?.class);
  const modalPopup = shouldOpenModal(link);

  return (
    <>
      {editorActive && (
        <span className="box-border inline-block w-full relative">
          <span className={`box-border block max-w-full ${props.className}`}>
            <Link field={props.field}>{props.children && props.children}</Link>
          </span>
        </span>
      )}
      {!editorActive && link && link?.href != '' && (
        <NextjsLink
          href={resolveHref(link, canonicalLink, modalPopup)}
          passHref
          locale={locale()}
          //placeholder={props.placeholder}
          prefetch={false}
          legacyBehavior
        >
          <a
            onClick={(): void => {
              if (props.onClick != null) {
                props.onClick();
              }
            }}
            rel={relText}
            title={link?.displayName as string}
            target={link?.target as string}
            className={cssClasses}
            id={props.id}
            aria-label={props.ariaLabel}
            role={props.role}
          >
            {props.children && props.children}
            {!hideText ? link?.text : ''}
          </a>
        </NextjsLink>
      )}
    </>
  );
};

export default NextLink;
