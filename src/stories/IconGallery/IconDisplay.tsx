/**
 * IconDisplay module.
 * @module @massds/mayflower-react/IconDisplay
 * @requires module:@massds/mayflower-assets/scss/00-base/mixins/ma-button-reset
 * @requires module:@massds/mayflower-assets/scss/01-atoms/svg-icons
 * @requires module:@massds/mayflower-assets/scss/01-atoms/svg-loc-icons
 */
// import ButtonCopy from "MayflowerReactButtons/ButtonCopy";
// eslint-disable-next-line
import React from 'react';
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface IconDisplayProps {
  name: string;
  children: React.ReactNode;
  icon?: boolean; // Haciendo que icon sea opcional con "?"
}

const IconDisplay: React.FC<IconDisplayProps> = ({ name, children, icon }) => {
  return (
    <div
      className="flex flex-col justify-center items-center space-y-2"
      style={{ width: 180 }}
    >
      {/* {IconComponent && <IconComponent {...props} />} */}
      {children}
      <CopyToClipboard
        text={`import { ${name} } from "@t1-org/t1components/src/assets/${icon ? `icons` : `logos`}"`}
      >
        <Button
          sx={{ width: 50, height: 20, fontSize: 10 }}
          size="small"
          variant="outlined"
          color="secondary"
        >
          Copy
        </Button>
      </CopyToClipboard>
    </div>
  );
};

// IconDisplay.propTypes = {
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   eight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   classes: PropTypes.arrayOf(PropTypes.string),
//   ariaHidden: PropTypes.bool,
//   fill: PropTypes.string,
// };

export default IconDisplay;
