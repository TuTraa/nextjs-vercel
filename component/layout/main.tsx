import { Container, Stack } from '@mui/material';
import { LayoutProps } from 'models';
import Link from 'next/link';
import * as React from 'react';
import { useEffect } from 'react';
import { Header, Footer } from '../common';
import { Box } from '@mui/system'

export default function MainLayout({ children }: LayoutProps) {
    useEffect(() => {
        // console.log("mouting")
        // return () => { console.log('unMounting'); }
    }, [])
    return (
        <Stack minHeight='100vh '>
            <Header />

            <Box component='main' flexGrow={1}>
                {/* <Container maxWidth='sm' sx={{ bgcolor: 'primary.main' }}>SM contaner</Container>
                <Container sx={{ bgcolor: 'primary.main' }}>Md container</Container> */}
                {children}
            </Box>
            <Footer />
        </Stack>
    );
}
