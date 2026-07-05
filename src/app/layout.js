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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EntertainmentBusiness',
              name: 'Happy Puppy Antasari',
              alternateName: 'Happup Antasari',
              description: 'Tempat karaoke keluarga terbaik di Samarinda dengan fasilitas modern, pilihan lagu terlengkap, dan suasana nyaman.',
              url: 'https://happupantasari.com',
              telephone: '+6282148004822',
              email: 'happup.samarinda.antasari@gmail.com',
              image: 'https://happupantasari.com/images/og-preview.jpg',
              logo: 'https://happupantasari.com/images/logo.png',
              priceRange: 'Rp 100.000 – Rp 500.000',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. P Antasari No.2, Air Putih',
                addressLocality: 'Samarinda',
                addressRegion: 'Kalimantan Timur',
                postalCode: '75124',
                addressCountry: 'ID',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -0.4941927,
                longitude: 117.1470192,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                  opens: '11:00',
                  closes: '02:00',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '200',
              },
              sameAs: [
                'https://www.instagram.com/happup.samarinda.antasari/',
                'https://www.facebook.com/happup.samarinda.antasari/',
                'https://www.tiktok.com/@happupantasari',
              ],
            }),
          }}
        />
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
