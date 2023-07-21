import { UseAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface AuthProps {
    children: any,
}

export default function AuthComponent({ children }: { children: any }) {
    const router = useRouter();
    const { aaa, firstLoading } = UseAuth();

    useEffect(() => {
        if (!firstLoading && !aaa?.username) {
            router.push('/login')
        }
    }, [router, aaa, firstLoading])

    if (!aaa?.username) return <p>loading...</p>
    return (
        <div>
            <h1>{children}</h1>
        </div>
    );
}
