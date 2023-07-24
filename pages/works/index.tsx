import { workApi } from '@/api-client';
import MainLayout from '@/component/layout/main';
import { WorkFilter } from '@/component/work/work-filter';
import WorkList from '@/component/work/work-list';
import { useWorkList } from '@/hooks/use-works-list';
import { ListParam, WorkFilterPayload } from '@/models';
import { Box, Button, Container, LinearProgress, Pagination, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export interface WorkPageProps {
}

export default function WorkPage(props: WorkPageProps) {
    const router = useRouter()
    const filter: Partial<ListParam> = {
        _page: 1,
        _limit: 4,
        ...router.query
    }
    const initfiltersPayload: WorkFilterPayload = {
        search: filter.title_like || ''
    }
    console.log('page search router:', { search: filter.title_like });

    // const [filter, setFilter] = useState<Partial<ListParam>>({ _page: 1, _limit: 4 })
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const workList = await workApi.getAll({})
    //         } catch (e) {
    //             console.log('err api:', e);
    //         }
    //     })()
    // }, [])
    const { data, isLoading } = useWorkList({ params: filter, enabled: router.isReady })

    const { _limit, _totalRows, _page } = data?.pagination || {};
    const totalPages = Boolean(_totalRows) ? Math.ceil(_totalRows / _limit) : 0;

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        // setFilter(prevFilter => ({
        //     ...prevFilter,
        //     _page: value
        // }))

        router.push({
            pathname: router.pathname,
            query: {
                ...filter,
                _page: value,
            }
        }
            , undefined, { shallow: true }
        )

    }

    function handleFiltersChange(newFilters: WorkFilterPayload) {
        // console.log('page filter:', newFilters.search);
        // setFilter(prevFilter => ({
        //     ...prevFilter,
        //     _page: 1,
        //     title_like: newFilters.search,
        // }))

        router.push({
            pathname: router.pathname,
            query: {
                ...filter,
                _page: 1,
                title_like: newFilters.search,
            }
        }
            , undefined, { shallow: true }
        )
    }

    return (
        <Box>
            <Container>
                <Box mb={4} mt={8}>
                    <Typography component='h1' variant='h3' fontWeight='bold'>Work</Typography>
                </Box>
                {router.isReady && <WorkFilter initialValues={initfiltersPayload} onSubmit={handleFiltersChange} />}
                <WorkList workList={data?.data || []} loadding={isLoading} />
                {_totalRows &&
                    <Stack style={{ alignItems: 'center' }}>
                        <Pagination count={totalPages} page={_page} onChange={handlePageChange}></Pagination>
                    </Stack>
                }

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
