import { workApi } from '@/api-client';
import MainLayout from '@/component/layout/main';
import WorkList from '@/component/work/work-list';
import { useWorkList } from '@/hooks/use-works-list';
import { ListParam } from '@/models';
import { Box, Button, Container, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface WorkPageProps {
}

export default function WorkPage(props: WorkPageProps) {
    const [filter, setFilter] = useState<Partial<ListParam>>({ _page: 1, _limit: 10 })
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const workList = await workApi.getAll({})
    //         } catch (e) {
    //             console.log('err api:', e);
    //         }
    //     })()
    // }, [])
    const { data, isLoading } = useWorkList({ params: filter })
    function handleNextPage() {
        setFilter(prevFilter => ({
            ...prevFilter,
            _page: (prevFilter?._page || 0) + 1
        }))
    }
    function handlePrevPage() {
        setFilter(prevFilter => ({
            ...prevFilter,
            _page: (prevFilter?._page || 0) - 1
        }))
    }
    return (
        <Box>
            <Container>
                <Box mb={4} mt={8}>
                    <Typography component='h1' variant='h3' fontWeight='bold'>Work</Typography>
                </Box>
                {isLoading ? <LinearProgress /> : <WorkList workList={data?.data || []} />}

                <Box>
                    <Button onClick={handlePrevPage} variant='contained'> prev page</Button>
                    <Button onClick={handleNextPage} variant='contained'> next page</Button>
                </Box>
            </Container>
        </Box>
    );
}
WorkPage.Layout = MainLayout


export async function getStaticProps() {
    console.log("get static props")
    // const workList = await workApi
    return {
        props: {

        }
    }
}
