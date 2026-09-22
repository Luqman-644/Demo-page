'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RouteProtection({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLogged = localStorage.getItem('logged') === 'true';
    const publicRoutes = ['/login', '/register'];

    if (!isLogged && !publicRoutes.includes(pathname)) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [pathname, router]);

  if (loading) return null;

  return <>{children}</>;
}
