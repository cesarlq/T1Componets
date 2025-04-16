import React, { 
  useState, 
  Children, 
  isValidElement, 
  cloneElement, 
  useCallback, 
  useMemo 
} from "react";
import { 
  Button, 
  Menu, 
  MenuItem, 
  Checkbox, 
  Divider,
  MenuItemProps,
  ButtonProps,
  SxProps,
  Theme,
  useTheme
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import styles from '../../styles/common/CommonStyles.module.scss';
import FormControlSelect from "./FormControlSelect";
import CheckBoxSelect from "./CheckBoxSelect";
import SelectItem from "./SelectItem";

// Enhanced Interfaces with Generics
interface AdditionalItemI {
  id: string;
  type?: 'item' | 'divider';
  label?: string;
  className?: string;
  onClick?: () => void;
}

interface SelectComponentPropsI {
  menuProps?: {
    sx?: SxProps<Theme>;
    anchorOrigin?: {
      vertical?: 'top' | 'bottom' | 'center';
      horizontal?: 'left' | 'right' | 'center';
    };
    onClose?: (event: React.SyntheticEvent) => void;
    onClick?: (event: React.MouseEvent) => void;
  };
  disableElevation ?: boolean;
  sx?: SxProps<Theme>;
  additionalItems?: AdditionalItemI[];
  children?: React.ReactNode;
  label: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  additionalIcon?: React.ReactNode;
  buttonType?: 'text' | 'outlined' | 'contained';
  className?: string;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  // New Accessibility Props
  ariaLabel?: string;
  testId?: string;
  
  // Button Configuration
  buttonProps?: ButtonProps;
}

// Extend interfaces for type safety with more specific prop types
interface SelectItemProps {
  label?: string | React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  icon?: string | React.ReactNode;
}

interface CheckBoxSelectProps {
  checkbox?: boolean;
  icon?: string | React.ReactNode;
  onCheckboxClick?: () => void;
}

// Interface for components with potential className
interface ClassNameProps {
  className?: string;
}

// Utility type to safely extract onClick from props
type OnClickProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

// Utility function to safely extract props
function extractProps<T>(props: unknown, defaultProps: T = {} as T): T {
  return typeof props === 'object' && props !== null 
    ? { ...defaultProps, ...(props as object) } 
    : defaultProps;
}

// Safe clone function for custom components with more flexible typing
function safeCloneElement(
  element: React.ReactElement, 
  additionalProps: Record<string, unknown> = {}, 
  marketplaceClass?: string
): React.ReactElement {
  // Ensure we're working with a valid element
  if (!isValidElement(element)) {
    return element;
  }

  // Get existing props, defaulting to an empty object
  const existingProps = typeof element.props === 'object' && element.props !== null 
    ? element.props 
    : {};

  // Merge classNames
  const className = marketplaceClass
    ? `${(existingProps as ClassNameProps).className || ''} ${marketplaceClass}`.trim()
    : (existingProps as ClassNameProps).className;

  // Merge props
  const mergedProps = {
    ...existingProps,
    ...additionalProps,
    ...(className ? { className } : {})
  };

  return cloneElement(element, mergedProps);
}

const SelectComponent: React.FC<SelectComponentPropsI> = ({
  menuProps,
  additionalItems = [],
  children,
  label,
  endIcon,
  startIcon,
  additionalIcon,
  buttonType = 'contained',
  disableElevation = false,
  className = '',
  ariaLabel,
  testId,
  sx,
  color = 'inherit',
  buttonProps = {}
}) => {
  const [moreAnchor, setMoreAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleAdditionalItemClick = useCallback((item: AdditionalItemI) => {
    if (item.onClick) {
      item.onClick();
    }
    setMoreAnchor(null);
  }, []);

  const wrapChildrenWithMenuItems = useCallback(() => {
    return Children.map(children, (child, index) => {
      // Ensure we're working with a valid React element
      if (!isValidElement(child)) return child;

      // SelectItem handling
      if (child.type === SelectItem) {
        const { label: itemLabel, onClick, icon } = extractProps<SelectItemProps>(child.props, {});
        
        return (
          <MenuItem
            key={index}
            className={`${styles["more-options-item"]}`}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onClick?.(e);
            }}
          >
            {icon && (typeof icon === 'string' ? (
              <Image
                alt={`selectIcon-${index}`}
                src={icon}
                height={25}
                width={25}
              />
            ) : (
              icon
            ))}
            {itemLabel}
          </MenuItem>
        );
      }

      // CheckBoxSelect handling
      if (child.type === CheckBoxSelect) {
        const { 
          checkbox, 
          icon, 
          onCheckboxClick 
        } = extractProps<CheckBoxSelectProps>(child.props, {});
        
        return (
          <MenuItem
            key={`menu-item-${index}`}
            className={styles['marketplace']}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onCheckboxClick?.();
            }}
          >
            <Checkbox
              checked={!!checkbox}
              onChange={(e) => {
                e.stopPropagation();
                onCheckboxClick?.();
              }}
            />
            
            {icon && (typeof icon === 'string' ? (
              <Image 
                src={icon}
                className={styles['marketplace-logo']} 
                alt="icon" 
                width={22}
                height={22}
                style={{ marginRight: '8px' }}
              />
            ) : (
              icon
            ))}
            
            {child}
          </MenuItem>
        );
      }

      // MenuItem handling
      if (child.type === MenuItem) {
        const childProps = extractProps<MenuItemProps & OnClickProps>(child.props, {});
        
        return cloneElement(child, {
          key: child.key || `menu-item-${index}`,
          ...(childProps.onClick && {
            onClick: (e: React.MouseEvent) => {
              e.stopPropagation();
              // Safely call onClick with type assertion
              (childProps.onClick as React.MouseEventHandler<HTMLElement>)?.(e as React.MouseEvent<HTMLElement>);
              setMoreAnchor(null);
            },
          }),
          ...(child.type === MenuItem && {
            sx: {
              ...childProps.sx,
              display: 'flex', 
              alignItems: 'center', 
              fontSize: '12px',
              paddingY: '6px'
            }
          })
        });
      }

      // FormControlSelect handling
      if (child.type === FormControlSelect) {
        return safeCloneElement(child, {
          key: child.key || `form-control-${index}`
        }, styles['marketplace']);
      }

      // Default handling for unknown children
      return safeCloneElement(child, {
        key: child.key || `unknown-${index}`
      }, styles['marketplace']);
    });
  }, [children]);

const customSx: SxProps<Theme> = {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        ...(buttonType === 'contained' && !disableElevation && {
            boxShadow: theme.shadows[2],
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: theme.shadows[4],
                transform: 'translateY(-2px)',
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                transform: 'translateY(0)',
            }
        }),
        ...sx
    };

  // Memoized button style classes
  const buttonStyleClasses = useMemo(() => {
    const baseClasses = [
      styles["options-button"], 
      'text-red', 
      className
    ];

    return baseClasses.join(' ');
  }, [ className]);

  return (
    <div 
      className={styles['select-component']} 
      data-testid={testId}
    >
      <Button
        aria-label={ariaLabel || label}
        variant={buttonType}
        className={buttonStyleClasses}
        endIcon={
          <div style={{display: 'flex', alignItems: 'center'}}>
            {endIcon || <ExpandMoreIcon />} 
            {additionalIcon && (
              <>
                <Divider orientation="vertical" flexItem />
                {additionalIcon}
              </>
            )}
          </div>
        }
        startIcon={startIcon}
        color={color}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => setMoreAnchor(event.currentTarget)}
        {...buttonProps}
        sx={customSx}
      >
        {label}
      </Button>

      <Menu
        sx={{
          ...menuProps?.sx,
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
        onClose={(event: React.SyntheticEvent) => {
          setMoreAnchor(null);
          menuProps?.onClose?.(event);
        }}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          menuProps?.onClick?.(e);
        }}
        role="menu"
        aria-labelledby="select-menu-button"
      >
        {children && wrapChildrenWithMenuItems()}

        {additionalItems.length > 0 && <Divider />}

        {additionalItems.map((item) => {
          if (item.type === 'divider') {
            return <Divider key={item.id} className="py-3" />;
          }
          
          return (
            <div
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
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

export default React.memo(SelectComponent);