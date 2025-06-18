'use client';
import { Metadata } from 'next';
import Layout from '../../layout/layout';
import { LayoutContext } from '@/layout/context/layoutcontext';
import { useContext, useEffect } from 'react';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Incapacidades',
    description: '',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'PrimeReact SAKAI-REACT',
        url: 'https://sakai.primereact.org/',
        description: '',
        images: ['https://www.primefaces.org/static/social/sakai-react.png'],
        ttl: 604800
    },
    icons: {
        icon: ''
    }
};

export default function AppLayout({ children }: AppLayoutProps) {
    const { layoutConfig } = useContext(LayoutContext);
    useEffect(() => {
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
    }, [layoutConfig.scale]);
    return <Layout>{children}</Layout>;
}
