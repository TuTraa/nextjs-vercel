import * as React from 'react';
import { Box } from '@mui/system'
import { Container, Stack, Link as MuiLink } from '@mui/material';
import { ROUTE_LIST } from './route';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface HeaderDestopProps {
}

export default function HeaderDestop(props: HeaderDestopProps) {
    const router = useRouter();
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
                </Stack>
            </Container>
        </ Box >
    );
}
