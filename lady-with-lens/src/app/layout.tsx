import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'LadyWithLens',
  description: 'A graphic design portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white text-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
