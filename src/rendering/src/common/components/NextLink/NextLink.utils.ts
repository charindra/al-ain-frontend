import { LinkField, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import { LinkFieldJsonValue } from './NextLink.types';

const MODAL_PREFIX = 'rte-modal-';

export const extractLinkValue = (
  field: LinkField | LinkFieldValue | LinkFieldJsonValue | null | undefined
): LinkFieldJsonValue | undefined => {
  if (!field) {
    return undefined;
  }

  if ((field as LinkField).value) {
    return (field as LinkField).value as LinkFieldJsonValue;
  }

  return field as LinkFieldJsonValue;
};

export const getCanonicalLink = (link?: LinkFieldJsonValue): string => {
  const baseUrl = process.env.PUBLIC_URL ?? '';
  const href = link?.href ?? '';
  return `${baseUrl}${href}`;
};

export const shouldOpenModal = (link?: LinkFieldJsonValue): boolean => {
  return link?.linktype === 'anchor' && !!link?.anchor?.startsWith(MODAL_PREFIX);
};

export const getModalHref = (link?: LinkFieldJsonValue, fallback?: string): string => {
  const modalId = link?.anchor?.replace(MODAL_PREFIX, '');
  return modalId ? `javascript:openClientModal('${modalId}')` : fallback ?? '';
};

export const resolveHref = (
  link: LinkFieldJsonValue | undefined,
  canonicalLink: string,
  openModal: boolean
): string => {
  if (!link) {
    return canonicalLink;
  }

  const isExternal =
    link.linktype === 'external' || link.linktype === 'media' || link.linktype === 'mailto';
  const isAnchor = link.linktype === 'anchor';

  if (isExternal || (isAnchor && !openModal)) {
    return link.href as string;
  }

  if (openModal) {
    return getModalHref(link, canonicalLink);
  }

  return canonicalLink;
};

export const buildRelText = (
  link: LinkFieldJsonValue | undefined,
  noFollow: boolean | undefined
): string => {
  if (!link) {
    return '';
  }

  if (link.linktype === 'internal' && !noFollow) {
    return 'follow';
  }

  return noFollow ? 'nofollow' : '';
};

export const composeClassName = (baseClassName: string | undefined, linkClass?: string): string => {
  const classes = [baseClassName, linkClass].filter(Boolean);
  return classes.join(' ').trim();
};
