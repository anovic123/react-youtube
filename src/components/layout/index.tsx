import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useMediaQuery } from '../../hooks';

import { Header } from './header';
import { Sidebar } from './sidebar';

export const Layout: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const isMobile = useMediaQuery(600);

  return (
    <>
      <Header handleOpen={handleOpen} />
      <main className="app">
        {!isMobile && <Sidebar open={open} handleOpen={handleOpen} />}
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  );
};
