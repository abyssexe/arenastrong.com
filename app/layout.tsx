import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Arena Training Center',
  description: 'Elite Olympic Boxing & Recovery Facility in Livermore, CA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
