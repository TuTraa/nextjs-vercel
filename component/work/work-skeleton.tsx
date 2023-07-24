import { Work } from '@/models';
import * as React from 'react';
import { Box, Divider, Stack, Typography, Chip, Skeleton } from '@mui/material';
import Image from 'next/image';


export default function WorkSkeleton() {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }}
            spacing={2}
        // alignItems={{ xs: 'center', md: 'center' }}
        >
            <Box width={{ xs: '100%', md: '246px' }} flexShrink={0} >
                <Skeleton variant='rectangular' width={246} height={180} />
            </Box>
            <Box flexGrow={1}>
                <Typography variant='h4' fontWeight="bold"><Skeleton /></Typography>
                <Stack direction='row' spacing={2} my={2}>
                    <Skeleton variant='rectangular' width={50} height={20} />
                    <Typography color={'GrayText'} flexGrow={1}><Skeleton /></Typography>
                </Stack>
                <Typography>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton width='40%' />
                </Typography>
            </Box>

        </Stack>
    );
}
