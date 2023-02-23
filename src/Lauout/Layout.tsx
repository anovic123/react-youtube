import { FC, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);

  // useEffect(() => {
  //   open && (document.body.style.overflow = 'hidden');
  //   !open && (document.body.style.overflow = 'unset');
  // }, [open]);

  return (
    <>
      <Header handleOpen={handleOpen} />
      <main className="app">
        <Sidebar open={open} handleOpen={handleOpen} />
        <div>{children}</div>
      </main>
    </>
  );
};
