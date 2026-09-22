import RouteProtection from '../components/routeprotection'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
        <RouteProtection>
          {children}
        </RouteProtection>
      </body>
    </html>
  );
}
