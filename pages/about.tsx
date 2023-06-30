import * as React from 'react';
// import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Header from '@/component/common/header';
import { useRouter } from 'next/router';
import MainLayout from '@/component/layout/main';
import AdminLayout from '@/component/layout/main';
import EmptyLayout from '@/component/layout/empty';
// import MainLayout from '@/component/layout/main';
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
        <div>
            about page
            <Header />
            <ul className='post-list'>
                {postList.map((post: any) => <li key={post.id}>{post.title}</li>)}
            </ul>
            <button onClick={() => handleClick()} >Next page</button>
        </div>
    );
}

AboutPage.Layout = MainLayout

export async function getStaticProps() {
    console.log("get static props")
    return {
        props: {

        }
    }
}