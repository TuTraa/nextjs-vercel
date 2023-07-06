import { LayoutProps } from 'models';
import Link from 'next/link';
import * as React from 'react';

// export interface IMainLayoutProps {
// }

export default function EmptyLayout({ children }: LayoutProps) {
    return (
        <>
            {children}
        </>
    );
}
