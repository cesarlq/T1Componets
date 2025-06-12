import React from 'react';
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface IconDisplayProps {
  name: string;
  children: React.ReactNode;
  icon?: boolean;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ name, children, icon }) => {
  // Determine the correct import path based on whether it's an icon or logo
  const importPath = icon 
    ? `import { ${name} } from "@t1-org/t1components";`
    : `import { ${name} } from "@t1-org/t1components";`;
    
  return (
    <div
      className="flex flex-col justify-center items-center space-y-2"
      style={{ width: 180 }}
    >
      {children}
      <CopyToClipboard text={importPath}>
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

export default IconDisplay;