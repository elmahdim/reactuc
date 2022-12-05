import React, { SyntheticEvent } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  fallback: string;
  src: string;
  alt: string;
}

export const Image = ({ fallback, alt, src, ...rest }: Props) => {
  const handleBrokenImage = (event: SyntheticEvent<HTMLImageElement, Event>) =>
    (event.currentTarget.src = fallback);
  return <img src={src} alt={alt} {...rest} onError={handleBrokenImage} />;
};
