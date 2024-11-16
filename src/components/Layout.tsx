import { LayoutProps } from '@/types';
import React from 'react';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-[#ECF2F8] flex items-center justify-center px-6 py-16 md:p-12 lg:px-24'>
      <div className='max-w-[1110px] mx-auto'>{children}</div>
    </div>
  );
};

export default Layout;
