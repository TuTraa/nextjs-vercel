import * as React from 'react';
import { Box } from '@mui/system'
import { Container, Stack, Link as MuiLink } from '@mui/material';
import { ROUTE_LIST } from './route';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UseAuth } from '@/hooks';

export interface HeaderDestopProps {
}

export default function HeaderDestop(props: HeaderDestopProps) {
    const router = useRouter();
    const { aaa, logout } = UseAuth();
    const isLoggedIn = Boolean(aaa?.username)
    const routerList = ROUTE_LIST.filter(router => !router.requireLogin || isLoggedIn)



    return (
        < Box display={{ xs: 'none', md: 'block' }} py={2}>
            <Container >
                <Stack direction='row' justifyContent='flex-end'>
                    {ROUTE_LIST.map((route, index) => (
                        <MuiLink component={Link} key={index} sx={{ ml: 2 }}
                            href={route.path}
                            className={clsx({ active: router.pathname === route.path })}
                            fontWeight='700'
                        >
                            {route.label}
                        </MuiLink>
                    ))}
                    {!isLoggedIn &&
                        (<MuiLink component={Link} sx={{ ml: 2 }} href='/login' fontWeight='700'>Login</MuiLink>)
                    }
                    {isLoggedIn &&
                        (<MuiLink sx={{ ml: 2, cursor: 'pointer' }} onClick={logout} fontWeight='700'>Logout</MuiLink>)
                    }
                </Stack>
            </Container>
        </ Box >
    );
}
