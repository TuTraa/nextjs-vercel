import { LayoutProps } from 'models/index';
import Link from 'next/link';
import * as React from 'react';
import { useEffect } from 'react';

export default function MainLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log("mouting")
        return () => { console.log('unMounting'); }
    }, [])
    return (
        <div>
            <h1>Main layout</h1>
            <Link href="/">
                Home
            </Link>
            <br />
            <Link href="/about">
                About
            </Link>
            <div>{children}</div>
            <h1>Footer</h1>
        </div>
    );
}
