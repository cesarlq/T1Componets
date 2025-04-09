import React, { useState, Children, isValidElement, cloneElement } from "react";
import { 
  Button, 
  Menu, 
  MenuItem, 
  Checkbox, 
  Divider,
  MenuItemProps
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import styles from '../../styles/common/CommonStyles.module.scss';
import FormControlSelect from "./FormControlSelect";
import CheckBoxSelect from "./CheckBoxSelect";
import SelectItem from "./SelectItem";
import { AdditionalItemI, SelectComponentPropsI } from "../../interfaces/commonInterfaces";


const SelectComponent: React.FC<SelectComponentPropsI> = ({
    menuProps,
    additionalItems = [],
    children,
    label,
    endIcon,
    startIcon,
    additionalIcon,
    buttonType,
    className
}) => {

  const [moreAnchor, setMoreAnchor] = useState<null | HTMLElement>(null);

  const handleAdditionalItemClick = (item: AdditionalItemI) => {
    if (item.onClick) {
      item.onClick();
    }
    
    setMoreAnchor(null);
  };

  
  const wrapChildrenWithMenuItems = () => {
    return Children.map(children, (child, index) => {

    const childWithProps = child as React.ReactElement<MenuItemProps>;

      if (!isValidElement(child)) return child;
      
      if (child.type === MenuItem) {

       
        return cloneElement(childWithProps, {
          key: child.key || `menu-item-${index}`,
          onClick: (e: any) => {
            e.stopPropagation(); 
            
            if (childWithProps.props.onClick) {
              childWithProps.props.onClick(e);
            }
            
            setMoreAnchor(null);
          },
          sx: {
            ...childWithProps.props.sx,
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '12px',
            paddingY: '6px'
          }
        });
      }

      interface ChildProps {
        label?: string;
        onClick?: () => void;
        icon?: string;
        [key: string]: any;
      }

      if(child.type === SelectItem){
        const { label, onClick, icon } = child.props as ChildProps;

        return (
            <MenuItem
                key={index}
                className={`${styles["more-options-item"]}`}
                onClick={()=> {onClick && onClick();}}
            >
                {icon && 
                    <Image
                        alt={`selectIcon-${index}`}
                        src={icon}
                        height={25}
                        width={25}
                    />
                }
                
                {label}
            </MenuItem>
        );
      }

      if (child.type === FormControlSelect) {
        return cloneElement(childWithProps, {
          key: child.key || `form-control-${index}`,
          className: styles['marketplace'],
          
        });
      }

      if(child.type === CheckBoxSelect){
            const { checkbox, icon, onCheckboxClick } = child.props as ChildProps;

            return (
                <MenuItem
                key={`menu-item-${index}`}
                className={styles['marketplace']}
                onClick={(e) => {
                    e.stopPropagation();
                    if (onCheckboxClick) {
                    onCheckboxClick();
                    }
                }}
                >
                <Checkbox
                    checked={checkbox || false}
                    onChange={(e) => {
                    e.stopPropagation(); 
                    if (onCheckboxClick) {
                        onCheckboxClick();
                    }
                    }}
                />
                
                {icon && (
                    <Image 
                    src={icon} 
                    className={styles['marketplace-logo']} 
                    alt={icon || 'icon'} 
                    width={22}
                    height={22}
                    style={{ marginRight: '8px' }}
                    />
                )}
                
                {child}
                </MenuItem>
            );

      }

      // If it's not a MenuItem, wrap it
    return cloneElement(childWithProps, {
        key: child.key || `form-control-${index}`,
        className: styles['marketplace'],
        // Don't add onClick here as it will be handled by the FormControlSelect component
        });
    });
  };

  return (
    <div className={styles['select-component']}>
      <Button
        variant="outlined"
        className={`${styles["options-button"]} ${className} ${buttonType === 'solid' ? '' : buttonType === 'outline' && '!border-[0px]'}`}
        endIcon={<div className="gap-2 flex">
            {endIcon ? endIcon : <ExpandMoreIcon />} 
            {additionalIcon && (<>
                <Divider orientation="vertical" flexItem />
                {additionalIcon}
            </>)}
        </div>
            
        }
        startIcon={startIcon}
        color="inherit"
        onClick={(event) => {

          setMoreAnchor(event.currentTarget);
        }}
      >
        {label}
      </Button>

      <Menu
        sx={{...menuProps?.sx,
            mt: '35px', 
            maxHeight: '60vh',
            cursor: 'pointer'
        }}
        anchorEl={moreAnchor}
        anchorOrigin={{
          vertical: menuProps?.anchorOrigin?.vertical || "top",
          horizontal: menuProps?.anchorOrigin?.horizontal || "left"
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        open={Boolean(moreAnchor)}
        onClose={(event) => {
          setMoreAnchor(null);
          menuProps?.onClose?.(event);
        }}
        onClick={(e) => {
          // Don't close the menu on general click
          e.stopPropagation();
          menuProps?.onCLick?.(e);
        }}
      >
        {children && wrapChildrenWithMenuItems()}

        {additionalItems.length > 0 && <Divider />}

        {/* Additional items */}
        {additionalItems.map((item) => {
          if (item.type === 'divider') {
            return <Divider key={item.id} className="py-3" />;
          }
          
          return (
            <div
              key={item.id}
              onClick={(e) => {
                e.stopPropagation(); // Stop event propagation
                handleAdditionalItemClick(item);
              }}
              className={`${styles['clean-button']} ${item.className} justify-self-end`}
            >
              <Button variant='text'>
                {item.label}
              </Button>
            </div>
          );
        })}
      </Menu>
    </div>
  );
};


export default SelectComponent;