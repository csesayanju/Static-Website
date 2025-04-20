import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'LadyWithLens',
  description: 'A graphic design portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="relative bg-white text-black overflow-x-hidden font-sans antialiased selection:bg-[#FF7D66]/20 selection:text-[#CE3D51]">
        {/* Optional background glow */}
        <div className="pointer-events-none fixed top-0 left-1/2 z-0 h-[400px] w-[800px] -translate-x-1/2 bg-[#CE3D51]/5 blur-3xl opacity-30" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />

          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
