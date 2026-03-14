import './globals.css'

export const metadata = {
  title: 'Bill Splitter',
  description: 'Divide facturas fácilmente',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
