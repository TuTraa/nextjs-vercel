import { Work } from '@/models';
import * as React from 'react';
import { Box, Divider, Stack, Typography, Chip } from '@mui/material';
import Image from 'next/image';
export interface WorkCardProps {
    work: Work
}

export default function WorkCard({ work }: WorkCardProps) {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            alignItems={{ xs: 'center', md: 'center' }}
        // textAlign={{ xs: 'center', md: 'left' }} 
        >
            <Box width={{ xs: '100%', md: '246px' }} flexShrink={0} >
                <Image src={work.thumbnailUrl} width={246} height={180} alt='work thumbnaiUrl' />
            </Box>
            <Box>
                <Typography variant='h4' fontWeight="bold">{work.title}</Typography>
                <Stack direction='row' spacing={2} my={2}>
                    <Chip color='secondary' label={new Date(Number.parseInt(work.createdAt)).getFullYear()} size='small' />
                    <Typography color={'GrayText'}>{work && work?.tagList.join(', ')}</Typography>
                </Stack>
                <Typography>{work.shortDescription}</Typography>
            </Box>

        </Stack>
    );
}
