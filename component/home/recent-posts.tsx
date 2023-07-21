import * as React from 'react';
import { Box } from '@mui/system'
import { Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import PostCard from './post-card';
import { Post } from "@/models/index"

export interface RecentPostProps {
}

export default function RecentPost(props: RecentPostProps) {
    //call api recent box
    const PostList: Post[] = [
        {
            id: '1',
            title: 'Making a design system from scratch',
            publishedDate: '1688547634432',
            tagList: ['Design', 'Pattern'],
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            id: '2',
            title: 'Creating pixel perfect icons in Figma',
            publishedDate: '1688547634432',
            tagList: ['Figma', 'Icon design'],
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
    ]
    return (
        <Box component="section" bgcolor='secondary.light' pt={2} pb={4}>
            <Container >
                <Stack direction='row' justifyContent={{ xs: "center", md: "space-between" }} alignItems="center">
                    <Typography variant='h5'>Recent Posts</Typography>
                    <MuiLink
                        passHref href='/blog'
                        component={Link}
                        sx={{ display: { xs: "none", md: "inline" } }}
                    >
                        View All
                    </MuiLink>
                </Stack>
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row'
                    }}
                    spacing={3}
                    pt={2}
                    sx={{
                        '&>div': {
                            width: { xs: "100%", md: "50%" }
                        }
                    }}>

                    {PostList.map((item) => (
                        <Box key={item.id}>
                            <PostCard post={item} />
                        </Box>
                    ))}

                </Stack>
            </Container>
        </Box>
    );
}
