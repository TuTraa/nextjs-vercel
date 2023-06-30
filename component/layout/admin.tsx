import { LayoutProps } from 'models/index';
import Link from 'next/link';
import * as React from 'react';

// export interface IMainLayoutProps {
// }

export default function AdminLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>admin layout</h1>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <div>{children}</div>
            <h1>Footer</h1>
        </div>
    );
}
