import Image, { ImageProps } from 'next/image';

const prefix = process.env.PUBLIC_URL ?? '';

export default function PrefixedImage(props: ImageProps) {
  const { src, ...rest } = props;

  let fullSrc = src;
  if (typeof src === 'string' && !src.startsWith('http')) {
    fullSrc = prefix ? `${prefix}${src}` : src; // only prepend if prefix is set
  }

  return <Image src={fullSrc} {...rest} />;
}
