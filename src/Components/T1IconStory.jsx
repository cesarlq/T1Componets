const T1IconStory = ({ icon, width, height, sx, className }) => {
  // Si icon es una cadena (nombre de archivo), construye la ruta 
  const src = typeof icon === 'string' 
    ? `/logos/${icon}.svg`  // Ruta al archivo en public/logos
    : icon;  // Si es un componente React, úsalo directamente
  
  return (
    <img
      src={src}
      alt="Icon"
      width={width || 20}
      height={height || 20}
      style={sx}
      className={className}
    />
  );
};

export default T1IconStory;