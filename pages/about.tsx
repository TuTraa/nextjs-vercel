import * as React from 'react';
// import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/component/layout/admin';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Header } from '@/component/common';
export interface IAboutPageProps {
}

// const Header = dynamic(() => import("@/component/common/header"), { ssr: false })

export default function AboutPage(props: IAboutPageProps) {
    const router = useRouter();
    const [postList, setPostList] = useState([]);
    const page = (Number(router.query?.page) || 1)

    useEffect(() => {
        if (!page) { return; }

        (async () => {
            const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
            const data = await response.json();
            setPostList(data.data)
            // console.log("data about", data.data)

        })()
    }, [page])

    function handleClick() {
        router.push({
            pathname: "./about",
            query: {
                page: (Number(router.query?.page) || 1) + 1,
            }
        }
            , undefined, { shallow: true }
        )
    }

    return (
        <Box>
            <h3 style={{ color: 'secondary.main' }}  >about page</h3>
            <Typography component='h1' variant="h3" color='primary.main' >
                about page
            </Typography>
            <Header />
            <ul className='post-list'>
                {postList.map((post: any) => <li key={post.id}>{post.title}</li>)}
            </ul>
            <button onClick={() => handleClick()} >Next page</button>
        </Box>
    );
}

AboutPage.Layout = AdminLayout

export async function getStaticProps() {
    console.log("get static props")
    return {
        props: {

        }
    }
}