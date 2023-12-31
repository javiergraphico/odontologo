import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clinica Dental',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metadata.description} />
      <title>{metadata.title}</title>
      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  )
}
