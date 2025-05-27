import React, { ReactNode } from 'react';
import { LayoutProvider } from './LayoutProvider';
import { Navbar, NavbarProps } from './Navbar';
import { Sidebar, SidebarProps } from './Sidebar';

// ============= MAIN LAYOUT COMPONENTS =============
export interface LayoutProps {
  children: ReactNode;
  navbarProps?: NavbarProps;
  sidebarProps?: SidebarProps;
  showNavbar?: boolean;
  showSidebar?: boolean;
  className?: string;
}

export function Layout({ 
  children, 
  navbarProps = {}, 
  sidebarProps = {},
  showNavbar = true,
  showSidebar = true,
  className = ""
}: LayoutProps) {
  return (
    <LayoutProvider>
      <div className={`flex h-screen bg-gray-50 ${className}`}>
        {showSidebar && <Sidebar {...sidebarProps} />}
        <div className="flex-1 flex flex-col min-w-0">
          {showNavbar && <Navbar {...navbarProps} />}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </LayoutProvider>
  );
}

// ============= ADDITIONAL LAYOUTS =============
export function BasicLayout({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div className={`min-h-screen ${className}`}>
      {children}
    </div>
  );
}

export function NavbarLayout({ 
  children, 
  navbarProps = {},
  className = ""
}: { 
  children: ReactNode; 
  navbarProps?: NavbarProps;
  className?: string;
}) {
  return (
    <LayoutProvider>
      <div className={`min-h-screen flex flex-col ${className}`}>
        <Navbar {...navbarProps} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </LayoutProvider>
  );
}

export function SidebarLayout({ 
  children, 
  sidebarProps = {},
  className = ""
}: { 
  children: ReactNode; 
  sidebarProps?: SidebarProps;
  className?: string;
}) {
  return (
    <LayoutProvider>
      <div className={`flex h-screen ${className}`}>
        <Sidebar {...sidebarProps} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </LayoutProvider>
  );
}