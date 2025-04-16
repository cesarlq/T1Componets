import React, { useState, ReactNode } from 'react';
import { 
  Avatar, 
  IconButton, 
  ListItemIcon, 
  ListItemText, 
  Menu, 
  MenuItem, 
  Stack,
  SxProps,
  Theme
} from '@mui/material';

export interface ProfileMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  divider?: boolean;
}

export interface ProfileUser {
  name?: string;
  email: string;
  avatar?: string;
}

export interface ProfileAvatarMenuProps {
  /**
   * User data to display
   */
  user: ProfileUser;
  
  /**
   * Menu items to display in the dropdown
   */
  menuItems: ProfileMenuItem[];
  
  /**
   * Whether to show the user name in header (next to avatar)
   * @default true
   */
  showNameInHeader?: boolean;
  
  /**
   * Whether to show user details at top of menu
   * @default true
   */
  showUserInMenu?: boolean;
  
  /**
   * Custom avatar component
   */
  customAvatar?: ReactNode;
  
  /**
   * Size of avatar in header
   * @default 40
   */
  avatarSize?: number;
  
  /**
   * Size of avatar in menu
   * @default 50
   */
  menuAvatarSize?: number;
  
  /**
   * Primary color for avatar background
   * @default '#db3b2b'
   */
  avatarBgColor?: string;
  
  /**
   * CSS class names for styling
   */
  className?: {
    container?: string;
    name?: string;
    avatarButton?: string;
    menu?: string;
    menuUserInfo?: string;
    menuUsername?: string;
    menuEmail?: string;
    menuItem?: string;
  };
  
  /**
   * Additional styles using MUI sx prop
   */
  sx?: {
    container?: SxProps<Theme>;
    avatar?: SxProps<Theme>;
    menuAvatar?: SxProps<Theme>;
    menu?: SxProps<Theme>;
  };
}

/**
 * ProfileAvatarMenu component
 * 
 * A reusable profile avatar with dropdown menu component
 */
const UserProfileMenu: React.FC<ProfileAvatarMenuProps> = ({
  user,
  menuItems,
  showNameInHeader = true,
  showUserInMenu = true,
  customAvatar,
  avatarSize = 40,
  menuAvatarSize = 50,
  avatarBgColor = '#db3b2b',
  className = {},
  sx = {}
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (onClick?: () => void) => {
    if (onClick) {
      onClick();
    }
    handleClose();
  };

  // Generate avatar initials from name or email
  const getInitials = (user: ProfileUser): string => {
    // If we have a name, use first letters of first and last name
    if (user.name) {
      const nameParts = user.name.split(' ');
      if (nameParts.length >= 2 && nameParts[0][0] && nameParts[1][0]) {
        return `${nameParts[0][0].toUpperCase()}${nameParts[1][0].toUpperCase()}`;
      } else if (nameParts[0] && nameParts[0][0]) {
        // If only one name, use first two letters
        return nameParts[0].length > 1 
          ? `${nameParts[0][0].toUpperCase()}${nameParts[0][1].toUpperCase()}`
          : nameParts[0][0].toUpperCase();
      }
    }
    
    // Fallback to email
    if (user.email) {
      return user.email[0].toUpperCase();
    }
    
    // Ultimate fallback
    return 'U';
  };

  const initials = getInitials(user);
  
  // Style configs for avatars
  const avatarStyles = {
    bgcolor: avatarBgColor,
    width: avatarSize,
    height: avatarSize,
    fontSize: `${avatarSize * 0.4}px`,
    fontWeight: 600,
    cursor: 'pointer',
    ...sx.avatar
  };
  
  const menuAvatarStyles = {
    bgcolor: avatarBgColor,
    width: menuAvatarSize,
    height: menuAvatarSize,
    fontSize: `${menuAvatarSize * 0.4}px`,
    fontWeight: 600,
    ...sx.menuAvatar
  };

  return (
    <Stack
      className={className.container}
      direction="row"
      alignItems="center"
      spacing={1}
      sx={sx.container}
    >
      {showNameInHeader && (
        <span 
          className={className.name}
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#333'
          }}
        >
          {user.email}
        </span>
      )}
      
      <IconButton
        id="profile-button"
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={className.avatarButton}
        size="small"
      >
        {customAvatar || (
          <Avatar 
            src={user.avatar}
            sx={avatarStyles}
          >
            {initials}
          </Avatar>
        )}
      </IconButton>
      
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ 
          marginLeft: '-30px',
          '& .MuiPaper-root': { 
            borderRadius: '14px',
            minWidth: '200px'
          },
          ...sx.menu
        }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        className={className.menu}
      >
        {showUserInMenu && (
          <MenuItem sx={{ padding: '16px 24px' }} className={className.menuUserInfo}>
            <Stack direction="column" spacing={1} alignItems="center" width="100%">
              {customAvatar || (
                <Avatar 
                  src={user.avatar}
                  sx={menuAvatarStyles}
                >
                  {initials}
                </Avatar>
              )}
              
              {user.name && (
                <h3 
                  className={className.menuUsername}
                  style={{
                    margin: 0,
                    fontSize: '16px',
                    fontWeight: 600
                  }}
                >
                  {user.name}
                </h3>
              )}
              
              <p 
                className={className.menuEmail}
                style={{
                  margin: 0,
                  fontSize: '14px',
                  color: '#666'
                }}
              >
                {user.email}
              </p>
            </Stack>
          </MenuItem>
        )}
        
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            onClick={() => handleMenuItemClick(item.onClick)}
            className={className.menuItem}
            divider={item.divider}
            sx={{ paddingLeft: '24px' }}
          >
            {item.icon && (
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
};

export default UserProfileMenu;