export interface User {
  name: string;
  email: string;
  storeId?: string;
}

export interface Store {
  id: number;
  name: string;
}

export interface MenuItem {
  href: string;
  text: string;
  icon: string;
  subPaths?: SubMenuItem[];
  concatStoreId?: boolean;
}

export interface SubMenuItem {
  href: string;
  text: string;
}