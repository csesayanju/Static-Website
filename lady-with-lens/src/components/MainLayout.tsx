import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

// Main layout component that wraps pages
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
