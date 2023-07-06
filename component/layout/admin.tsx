import { LayoutProps } from 'models';
import Link from 'next/link';
import * as React from 'react';
import AuthComponent from '../common/auth';
import { UseAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';

// export interface IMainLayoutProps {
// }

export default function AdminLayout({ children }: LayoutProps) {
    const { logout } = UseAuth();
    const router = useRouter();
    async function handleLogoutClick() {
        try {
            await logout();
            router.push('login');

        }
        catch (error) {
            console.log('error:', error);
        }
    }

    return (
        <AuthComponent>
            <h1>admin layout</h1><br />
            <button style={{ width: '200px', height: '50px' }} onClick={handleLogoutClick}>logout</button><br />
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <div>{children}</div>
            <h1>Footer</h1>
        </AuthComponent>
    );
}
