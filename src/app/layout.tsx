// Module imports
import { cookies } from 'next/headers';

// Component imports
import { Header, Footer } from '../components';

// Style imports
import './globals.scss';


// Declare cookie store
const cookieStore = cookies();


interface LayoutProps {
  children: React.ReactNode;
}

// Main layout declaration
export default async function RootLayout({ children }: LayoutProps) {

  const userSession = cookieStore.get('session');

  return (
    <html lang="en">
      <head>
        <title>The Workshop Racing Championship</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"></link>
      </head>
      <Header
        logo="/logo.svg"
        notification='2024 inaugural race on the 27th of January, stay tuned for our racing results!'
        session={userSession}
      />
      <body className="app-body">
        <div className="content">
          {children}
        </div>
      </body>
      <Footer
        logo="/logo.svg"
      />
    </html>
  );
};
