import { FC, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Header handleOpen={handleOpen} />
      <main className="app">
        <Sidebar open={open} handleOpen={handleOpen} />
        <Outlet />
      </main>
    </>
  );
};
