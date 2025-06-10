import PropTypes from 'prop-types';

const T1IconStory = ({ type, icon, width, height, sx, className }) => {
  // Prop types for runtime type checking

  T1IconStory.propTypes = {
    type: PropTypes.oneOf(['icon', 'logo', 'menuIcon']).isRequired,
    icon: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sx: PropTypes.object,
    className: PropTypes.string,
  };
  let src = '';
  
  switch (type) {
    case 'icon':
      src = `/icons/${icon}.svg`;
      break;
    case 'logo':
      src = `/logos/${icon}.svg`;
      break;
    case 'menuIcon':
      src = `/menuicons/${icon}.svg`;
      break;
    default:
      break;
  }
  
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