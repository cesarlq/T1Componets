import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import React, { Children, cloneElement, isValidElement, useState } from 'react';
import { actionMenuI } from '../../interfaces/commonInterfaces';
import styles from '../../styles/common/CommonStyles.module.scss';


const ActionMenu: React.FC<actionMenuI> = ({
    children,
    onClose
}) => {
    const [optionsOpenAnchor, setOptionsOpenAnchor] =useState<null | HTMLElement>(null);

    const handleOptionsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOptionsOpenAnchor(event.currentTarget);
    };
    const handleClose = (event:any) => {
        setOptionsOpenAnchor(null);
        if (onClose) {
            onClose(event);
        }
    };


     const wrapChildrenWithMenuItems = () => {
        return Children.map(children, (child, index) => {

            if (!isValidElement(child)) return child;

            if (child.type === MenuItem) {
            // Definimos una interfaz para los props del MenuItem
            interface MenuItemProps {
              onClick?: (e: any) => void;
              sx?: any;
              [key: string]: any;
            }
            
            const childWithProps = child as React.ReactElement<MenuItemProps>;
            return cloneElement(childWithProps, {
              key: child.key || `menu-item-${index}`,
              onClick: (e: any) => {
                e.stopPropagation();

                if (childWithProps.props.onClick) {
                  childWithProps.props.onClick(e);
                }

                setOptionsOpenAnchor(null);
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
          // Definimos una interfaz para los props de los elementos hijo
          interface ChildProps {
            label?: string;
            onClick?: () => void;
            icon?: string;
            [key: string]: any;
          }
          
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
        });
      };


    return (
        <div className={styles['ActionMenu']}>
            <div className={styles["dots-menu-step"]}>
                <IconButton
                onClick={handleOptionsClick}
                className={styles["button"]}
                >
                    <MoreVertIcon className={styles["icon"]} />
                </IconButton>
            </div>
            <Menu
            sx={{ mt: "40px" }}
            anchorOrigin={{
            vertical: "top",
            horizontal: "right",
            }}
            anchorEl={optionsOpenAnchor}
            transformOrigin={{
            vertical: "top",
            horizontal: "right",
            }}
            open={Boolean(optionsOpenAnchor)}
            onClose={(event) => handleClose(event)}
            >
            {children && wrapChildrenWithMenuItems()}
            </Menu>
        </div>
    );
};

export default ActionMenu;