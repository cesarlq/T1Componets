'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

// Tipos
interface SidebarProps {
  testMode?: boolean; // Flag para modo de prueba
  className?: string;
  logoFull: string;
  logoReduced: string;
  servicePaths?: ServiceOption[];
  menuItems: MenuItem[];
  initialReduceState?: boolean;
  breakpointWidth?: number;
  userInfo?: any;
  onServiceOptionClick?: (option: ServiceOption) => void;
  onSidebarReduceChange?: (reduced: boolean) => void;
  onClickMenuItem?: (item: MenuItem, index: number) => void;
  customStyles?: {
    sidebar?: React.CSSProperties;
    header?: React.CSSProperties;
    logo?: React.CSSProperties;
    submenu?: React.CSSProperties;
    paths?: React.CSSProperties;
    buttonReduce?: React.CSSProperties;
  };
}

interface ServiceOption {
  name: string;
  icon: string;
  type: string;
  width?: number;
  iconReduced?: string;
}

interface MenuItem {
  id: string;
  title: string;
  path?: string;
  icon?: string;
  subItems?: SubMenuItem[];
  hidden?: boolean;
}

interface SubMenuItem {
  id: string;
  title: string;
  path: string;
  hidden?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  className = '',
  testMode = false,
  logoFull,
  logoReduced,
  servicePaths = [],
  menuItems,
  initialReduceState = false,
  breakpointWidth = 1110,
  userInfo,
  onServiceOptionClick,
  onSidebarReduceChange,
  onClickMenuItem,
  customStyles = {}
}) => {

  const nextRouter = useRouter();
  const router = nextRouter;
  const [sidebarReduce, setSidebarReduce] = useState(initialReduceState);
  const [activePath, setActivePath] = useState('');
  const [activeSubPath, setActiveSubPath] = useState('');
  const [currentSubmenuOpen, setCurrentSubmenuOpen] = useState<number>(-1);
  const [showOptions, setShowOptions] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Detectar ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Inicializar
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ajustar sidebar según ancho de pantalla
  useEffect(() => {
    if (windowWidth <= breakpointWidth && windowWidth > 0) {
      handleSidebarReduceChange(true);
    } else if (windowWidth > breakpointWidth) {
      handleSidebarReduceChange(false);
    }
  }, [windowWidth, breakpointWidth]);

  const handleSidebarReduceChange = (reduced: boolean) => {
    setSidebarReduce(reduced);
    if (onSidebarReduceChange) {
      onSidebarReduceChange(reduced);
    }
  };

  const handleToggle = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option: ServiceOption) => {
    if (onServiceOptionClick) {
      onServiceOptionClick(option);
    }
  };

  const handleMenuItemClick = (item: MenuItem, index: number) => {
    setActivePath(item.id);
    
    if (item.subItems && item.subItems.length > 0) {
      setCurrentSubmenuOpen(currentSubmenuOpen === index ? -1 : index);
    } else if (item.path) {
      router.push(item.path);
      setCurrentSubmenuOpen(-1);
    }

    if (onClickMenuItem) {
      onClickMenuItem(item, index);
    }
  };

  const handleSubItemClick = (parentId: string, item: SubMenuItem) => {
    setActivePath(parentId);
    setActiveSubPath(item.id);
    if (item.path) {
      router.push(item.path);
    }
  };

  // Estilos base
  const styles = {
    sidebar: {
      display: 'flex',
      flexDirection: 'column' as const,
      width: sidebarReduce ? '80px' : '280px',
      height: '100%',
      background: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      transition: 'width 0.3s ease',
      position: 'relative' as const,
      ...customStyles.sidebar
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: sidebarReduce ? 'center' : 'space-between',
      padding: sidebarReduce ? '20px 0' : '20px',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      ...customStyles.header
    },
    logo: {
      objectFit: 'contain' as const,
      ...customStyles.logo
    },
    submenu: {
      display: 'flex',
      flexDirection: 'column' as const,
      padding: '10px 20px',
      gap: '10px',
      borderBottom: '1px solid #f0f0f0',
      ...customStyles.submenu
    },
    submenuLogo: {
      cursor: 'pointer',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)'
      }
    },
    paths: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      overflowY: 'auto' as const,
      height: 'calc(100% - 180px)',
      ...customStyles.paths
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      cursor: 'pointer',
      borderLeft: '4px solid transparent',
      transition: 'background-color 0.2s',
    },
    menuItemActive: {
      borderLeftColor: '#d9534f',
      backgroundColor: 'rgba(217, 83, 79, 0.1)',
    },
    menuIcon: {
      marginRight: sidebarReduce ? '0' : '16px',
      opacity: 0.7,
    },
    menuTitle: {
      display: sidebarReduce ? 'none' : 'block',
      whiteSpace: 'nowrap' as const,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    subMenu: {
      paddingLeft: sidebarReduce ? '0' : '20px',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease',
    },
    subMenuOpen: {
      maxHeight: '500px',
    },
    subMenuItem: {
      padding: sidebarReduce ? '10px 0' : '10px 20px',
      cursor: 'pointer',
      display: 'block',
      fontSize: '14px',
      whiteSpace: 'nowrap' as const,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    subMenuItemActive: {
      color: '#d9534f',
      fontWeight: 'bold' as const,
    },
    buttonReduce: {
      position: 'absolute' as const,
      right: '-15px',
      top: '50%',
      transform: 'translateY(-50%)',
      minWidth: '30px',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      ...customStyles.buttonReduce
    },
    doubleArrow: {
      transform: sidebarReduce ? 'rotate(0deg)' : 'rotate(180deg)',
      transition: 'transform 0.3s ease',
    },
    arrowIcon: {
      transition: 'transform 0.3s ease',
      transform: showOptions ? 'rotate(180deg)' : 'rotate(0deg)',
    }
  };

  return (
    <div className={className} style={styles.sidebar}>
      <div style={{ height: '100%' }}>
        <div style={styles.header} onClick={handleToggle}>
          {!sidebarReduce ? (
            <Image
              src={logoFull}
              alt="Logo"
              width={160}
              height={28}
              style={styles.logo}
            />
          ) : (
            <Image
              src={logoReduced}
              alt="Logo"
              width={40}
              height={40}
              style={styles.logo}
            />
          )}
          
          {!sidebarReduce && (
            <IconButton onClick={e => {
              e.stopPropagation();
              handleToggle();
            }}>
              <span style={styles.arrowIcon}>▼</span>
            </IconButton>
          )}
        </div>
        
        {showOptions && (
          <div style={styles.submenu}>
            {servicePaths.map((item, index) => (
              !sidebarReduce ? (
                <Image 
                  key={index}
                  src={item.icon || '/default-icon.png'}
                  alt={item.name}
                  width={item.width || 100}
                  height={30}
                  style={styles.submenuLogo}
                  onClick={() => handleOptionClick(item)}
                />
              ) : (
                <Image 
                  key={index}
                  src={item.iconReduced || item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  style={styles.submenuLogo}
                  onClick={() => handleOptionClick(item)}
                />
              )
            ))}
          </div>
        )}
        
        <ul style={styles.paths}>
          {menuItems.map((item, index) => (
            !item.hidden && (
              <li key={index}>
                <div 
                  style={{
                    ...styles.menuItem,
                    ...(activePath === item.id ? styles.menuItemActive : {})
                  }}
                  onClick={() => handleMenuItemClick(item, index)}
                >
                  <Image
                    src={item.icon || '/default-icon.png'}
                    alt={item.title}
                    width={24}
                    height={24}
                    style={styles.menuIcon}
                  />
                  <span style={styles.menuTitle}>{item.title}</span>
                  
                  {item.subItems && item.subItems.length > 0 && !sidebarReduce && (
                    <span style={{
                      marginLeft: 'auto',
                      transform: currentSubmenuOpen === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}>▼</span>
                  )}
                </div>
                
                {item.subItems && item.subItems.length > 0 && (
                  <div style={{
                    ...styles.subMenu,
                    ...(currentSubmenuOpen === index ? styles.subMenuOpen : {})
                  }}>
                    {item.subItems.map((subItem, subIndex) => (
                      !subItem.hidden && (
                        <div
                          key={subIndex}
                          style={{
                            ...styles.subMenuItem,
                            ...(activeSubPath === subItem.id ? styles.subMenuItemActive : {})
                          }}
                          onClick={() => handleSubItemClick(item.id, subItem)}
                        >
                          {!sidebarReduce && subItem.title}
                          {sidebarReduce && subItem.title.charAt(0)}
                        </div>
                      )
                    ))}
                  </div>
                )}
              </li>
            )
          ))}
        </ul>
      </div>
      
      <Button 
        style={styles.buttonReduce}
        onClick={(e) => {
          e.stopPropagation();
          handleSidebarReduceChange(!sidebarReduce);
        }}
      >
        <span style={styles.doubleArrow}>◄</span>
      </Button>
    </div>
  );
};

export default Sidebar