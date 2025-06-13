import React from 'react';
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface IconDisplayProps {
  name: string;
  children: React.ReactNode;
  type?: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ name, children, type }) => {
  // Determine the correct import path based on whether it's an icon or logo
  let importPath='';

   switch (type) {
    case 'icon':
      importPath = `
        import { Icons } from "@t1-org/t1components";
        const { ${name} } = Icons;
      `;
      break;
    case 'logo':
      importPath = `
      import { Logos } from "@t1-org/t1components";
      const { ${name} } = Logos;
      `;
      break;
    case 'menuIcon':
      importPath = `
        import { MenuIcon } from "@t1-org/t1components";
        const { ${name} } = MenuIcon;
      `;
      break;
    case 'menuIconActive':
      importPath = `
        import { MenuIconActive } from "@t1-org/t1components";
        const { ${name} } = MenuIconActive;
      `;
      break;
    case 'menuIconInactive':
      importPath = `
        import { MenuIconInactive } from "@t1-org/t1components";
        const { ${name} } = MenuIconInactive;
      `;
      break;
    default:
      break;
  }
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