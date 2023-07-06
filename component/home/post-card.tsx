import * as React from 'react';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { Post } from '@/models/post';
import format from 'date-fns/format';

export interface PostCardProps {
    post: Post
}

export default function PostCard({ post }: PostCardProps) {
    if (!post) {
        return null
    }
    return (
        <Card>
            <CardContent>
                <Typography variant='h5' fontWeight="bold">{post.title}</Typography>
                <Stack direction="row" my={2}>
                    <Typography variant='body1'  >
                        {format(Number(post.publishedDate), 'dd MM yyyy')}
                    </Typography>
                    <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
                    <Typography>{post.taglist.join(',')}</Typography>

                </Stack>

                <Typography variant='body2'>{post.description}</Typography>
            </CardContent>
        </Card>
    );
}
