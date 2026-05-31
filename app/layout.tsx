import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ITS-R Wiki',
  description: 'Knowledge and learning platform — ITS-R Universe',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{background:'#0a0a0f',color:'#f8fafc'}}>
        <header style={{borderBottom:'1px solid #1e293b',padding:'1rem 2rem',display:'flex',alignItems:'center',gap:'0.75rem'}}>
          <span style={{color:'#d4af37',fontWeight:'bold',fontSize:'1.25rem'}}>ITS-R</span>
          <span style={{color:'#f8fafc',fontWeight:'600'}}>Wiki</span>
        </header>
        <main>{children}</main>
        <footer style={{borderTop:'1px solid #1e293b',padding:'1.5rem 2rem',textAlign:'center',marginTop:'4rem'}}>
          <p style={{color:'#94a3b8',fontSize:'0.875rem'}}>ITS-R Universe</p>
          <p style={{color:'#64748b',fontSize:'0.75rem',marginTop:'0.25rem'}}>In loving memory of Roshan Ali Sahab 🤲</p>
        </footer>
      </body>
    </html>
  )
}
