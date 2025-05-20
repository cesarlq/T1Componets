import React from 'react';

// Un componente de imagen simple que reemplaza a next/image
const NextImageMock = (props) => {
  const { src, alt, width, height, ...rest } = props;
  
  // Maneja diferentes formatos de src
  const imgSrc = typeof src === 'object' && src.src ? src.src : src;
  
  return (
    <img
      src={imgSrc}
      alt={alt || ''}
      width={width}
      height={height}
      style={{ objectFit: 'contain', ...rest.style }}
      {...rest}
    />
  );
};

export default NextImageMock;