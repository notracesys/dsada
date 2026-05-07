import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elite Access | Oportunidade Única',
  description: 'Acesso exclusivo ao painel premium. Vagas limitadas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased overflow-x-hidden min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}
