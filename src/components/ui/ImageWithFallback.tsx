'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className,
  ...rest
}: ImageWithFallbackProps) {
  // If src is "/images/Rubby.png", auto fallback to "/images/Rubby.svg"
  const defaultFallback = fallbackSrc || (src.endsWith('.png') ? src.replace('.png', '.svg') : src);
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...rest}
      src={hasError ? defaultFallback : imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(defaultFallback);
        }
      }}
    />
  );
}
