import React, { Children, isValidElement, useEffect, useState } from 'react';
import { TypographyProps, RadioGroup, Radio, MenuItem, FormControlLabel } from '@mui/material';
import SelectItem from './SelectItem';


interface FormControlSelectItemProps {
  value?: any;
  onClick?: (e: any) => void;
  label?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const FormControlSelect: React.FC<FormControlSelectItemProps> = ({ 
  children,
  name, 
  onChange,
  initialValue
}) => {
  
      const [selectedValue, setSelectedValue] = useState<any>(name || initialValue || '');

      
      useEffect(() => {
        if (name !== undefined && name !== selectedValue) {
          setSelectedValue(name);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [name]);
  
      const handleSelection = (value: any, originalOnClick?: () => void) => {
        setSelectedValue(value);
        
        if (onChange) {
          onChange(value);
        }
        
        if (originalOnClick) {
          originalOnClick();
        }
      };
      
    const wrapChildrenWithMenuItems = () => {
      return Children.map(children, (child, index) => {
        const childWithProps = child as React.ReactElement<FormControlSelectItemProps>;

        if (!isValidElement(child)) return child;
        
        const { props } = childWithProps;
        
        
        if (child.type === SelectItem) {
          const isChecked = name !== undefined ? name === props?.value : selectedValue === props?.value;

          return (
            <MenuItem
              key={`menu-item-${index}`}
              onClick={(e) => {
                e.stopPropagation(); 
                handleSelection(props?.value, props?.onClick ? () => props.onClick!(event) : undefined);
              }}
            >
              <FormControlLabel
                value={props?.value}
                control={
                  <Radio 
                    checked={isChecked}
                    onChange={(e) => {
                      e.stopPropagation(); 
                      handleSelection(props?.value,  props?.onClick ? () => props.onClick!(event) : undefined);
                    }}
                  />
                }
                label={<>
                {props?.label}
               { props?.children}
                </>}
                onClick={(e) => {
                  e.preventDefault(); 
                  e.stopPropagation();
                  handleSelection(props?.value,  props?.onClick ? () => props.onClick!(event) : undefined);
                }}
                sx={{ 
                  '& .MuiFormControlLabel-label': { 
                    fontSize: '12px' 
                  } 
                }}
              />
            </MenuItem>
          );
        }
        
        return child;
      });
    };

  return (
    <RadioGroup
      value={name !== undefined ? name : selectedValue}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
    >
      {children && wrapChildrenWithMenuItems()}
    </RadioGroup>
  );
};

export default FormControlSelect;