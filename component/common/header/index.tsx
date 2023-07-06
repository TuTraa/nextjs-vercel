import * as React from 'react';
import { Box } from '@mui/system'
import HeaderMobile from './header-mobile';
import HeaderDestop from './header-destop';

export function Header() {
    return (
        <>
            <HeaderMobile />
            <HeaderDestop />
        </>
    )
}
