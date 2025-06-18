"use client"
import { Metadata } from 'next';
import AppConfig from '../../layout/AppConfig';
import React, { use, useContext, useEffect } from 'react';
import { LayoutContext } from '@/layout/context/layoutcontext';

interface SimpleLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Incapacidades',
    description: ''
};

   
export default function SimpleLayout({ children }: SimpleLayoutProps) {
    const { layoutConfig } = useContext(LayoutContext);
    useEffect(() => {        
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
    }, [layoutConfig.scale]);
    return (
        <React.Fragment>
            {children}
            
        </React.Fragment>
    );
}
