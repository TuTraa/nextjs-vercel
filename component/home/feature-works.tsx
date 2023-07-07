import * as React from 'react';
import { Box } from '@mui/system'
import { Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import PostCard from './post-card';
import { Work } from "@/models/index"
import WorkList from '../work/work-list';

export interface FuatureWorkProps {
}

export default function FeatureWork(props: FuatureWorkProps) {
    //call api recent box
    const workList: Work[] = [
        {
            id: '1',
            title: 'Designing Dashboards',
            createdAt: '1688547634432',
            updateAt: '1688547634432',
            taglist: ['Dashboard'],
            shotDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: "",
            thumbnailUrl: "https://res.cloudinary.com/dl7cuyn2v/image/upload/v1688628875/Rectangle_30_ffkhdc.jpg",
        },
        {
            id: '2',
            title: 'Vibrant Portraits of 2020',
            createdAt: '1688547634432',
            updateAt: '1688547634432',
            taglist: ['Illustration'],
            shotDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: "",
            thumbnailUrl: "https://res.cloudinary.com/dl7cuyn2v/image/upload/v1688629062/Rectangle_32_xvg0o3.jpg",
        },
        {
            id: '3',
            title: '36 Days of Malayalam type',
            createdAt: '1688547634432',
            updateAt: '1688547634432',
            taglist: ['Typography'],
            shotDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: "",
            thumbnailUrl: "https://res.cloudinary.com/dl7cuyn2v/image/upload/v1688629062/Rectangle_32_xvg0o3.jpg",
        },
    ]
    return (
        <Box component="section" bgcolor='secondary.light' pt={2} pb={4}>
            <Container >
                <Typography variant='h5'>Feature Works</Typography>
                <WorkList workList={workList} />
            </Container>
        </Box>
    );
}
