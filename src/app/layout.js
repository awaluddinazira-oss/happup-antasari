import { CartProvider } from '@/context/CartContext';
import AffiliateWrapper from '@/components/AffiliateWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientInit from '@/components/ClientInit';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

export const metadata = {
  title: 'Happup Antasari — Karaoke Keluarga Terbaik di Samarinda',
  description: 'Tempat karaoke keluarga terbaik dengan fasilitas modern, pilihan lagu terlengkap, dan suasana yang nyaman untuk momen seru Anda.',
  icons: {
    icon: '/images/favicon.png?v=2',
  },
  openGraph: {
    title: 'Happup Antasari — Karaoke Keluarga Terbaik di Samarinda',
    description: 'Nikmati karaoke modern dengan room nyaman, sound berkualitas, pilihan makanan & minuman favorit, serta promo menarik setiap hari.',
    url: 'https://happupantasari.com',
    siteName: 'Happup Antasari',
    images: [
      {
        url: '/images/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Puppy Antasari Karaoke Samarinda',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happup Antasari — Karaoke Keluarga Terbaik di Samarinda',
    description: 'Nikmati karaoke modern dengan room nyaman, sound berkualitas, pilihan makanan & minuman favorit, serta promo menarik setiap hari.',
    images: ['/images/og-preview.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap */}
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
        {/* Custom styles */}
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/css/responsive.css" />
      </head>
      <body>
        <CartProvider>
          <AffiliateWrapper>
            <ClientInit />
            {children}
            <Footer />
            <ScrollToTop />
          </AffiliateWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
