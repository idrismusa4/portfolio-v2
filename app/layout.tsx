import './globals.css'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import AIChatBot from './components/AIChatBot'

export const metadata = {
  title: 'Idris Shaaba | Portfolio',
  description: 'Portfolio and works of Idris Shaaba',
  icons: {
    icon: '/cd.png',
  },
  ogImage: '/og.png',
  siteName: 'Idris Shaaba',
  siteUrl: 'https://devidris.me',
  keywords: ['Portfolio', 'Developer', 'Software Engineer', 'Idris Shaaba'],
  social: {
    linkedin: 'https://www.linkedin.com/in/idris-shaaba',
    github: 'https://github.com/idrismusa4',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`bg-[#0a0a0f] text-white`}>
        <Navigation />
        <ScrollProgress />
        {children}
        <AIChatBot />
      </body>
    </html>
  )
}

