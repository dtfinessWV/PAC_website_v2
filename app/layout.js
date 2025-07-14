import './globals.css'
import { Bebas_Neue, Montserrat } from 'next/font/google'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Power Alley CrossFit',
  description: 'Veteran-owned gym for everyone, wherever you are starting.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${montserrat.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
