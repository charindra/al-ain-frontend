import { Link, LinkField, LinkFieldValue, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { default as NextjsLink } from 'next/link';
import { useI18n } from 'next-localization';
import { isEditorActive } from '@sitecore-jss/sitecore-jss-nextjs/utils';

type LinkCustomizations = {
  noFollow?: Field<boolean>;
};

type NextLinkProps = {
  field: LinkField | LinkFieldValue | undefined | null;
  editable?: boolean;
  role?: string;
  className?: string;
  children?: React.ReactNode;
  placeholder?: string;
  hideText?: boolean;
  ariaLabel?: string;
  id?: string;
  onClick?: () => void;
  linkCustomizations?: LinkCustomizations;
};

type LinkFieldJsonValue = {
  [key: string]: string;
};

const NextLink = (props: NextLinkProps): JSX.Element => {
  const editorActive = isEditorActive();
  const { locale } = useI18n();
  const noFollow = props.linkCustomizations?.noFollow?.value;
  const link = props?.field?.value as LinkFieldJsonValue;
  const canonicalLink = `${process.env.PUBLIC_URL}${link?.href}`;
  const hideText = props.hideText ? props.hideText : false;
  if (props.field == null) {
    return <></>;
  }

  let relText = '';
  if (link?.linktype === 'internal' && !noFollow) {
    relText += 'follow';
  } else if (noFollow) {
    relText += 'nofollow';
  }

  const cssClasses = props.className + (link?.class?.length > 0 ? ' ' + link?.class : '');

  const modalPopup = link?.linktype === 'anchor' && link?.anchor.startsWith('rte-modal-');
  const getModalUrl = (): string => {
    const modalId = link?.anchor?.replace('rte-modal-', '');
    return modalId ? `javascript:openClientModal('${modalId}')` : canonicalLink;
  };

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
          href={
            link?.linktype === 'external' ||
            link?.linktype === 'media' ||
            link?.linktype === 'mailto' ||
            (link?.linktype === 'anchor' && !link?.anchor.startsWith('rte-modal-'))
              ? (link?.href as string)
              : modalPopup
              ? getModalUrl()
              : canonicalLink
          }
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
