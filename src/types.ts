import type { ReactNode } from 'react';

export interface buttonType {
  children: ReactNode;
}

type items= {url:string; name:string}

export interface headerProps{
  logo:string;
  navItem:items[]
}

export interface footerProps{
  copyrightText: string 
}