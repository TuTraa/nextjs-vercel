import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import MainLayout from '@/component/layout/main';
import AdminLayout from '@/component/layout/admin';
import { getPostsList } from '@/utils/posts';

export interface ListBlogsProps {
    posts: any
}


export default function ListBlogs(posts: ListBlogsProps) {
    const router = useRouter()
    function goToDetailPage() {
        router.push({
            pathname: 'posts/[postsId]',
            query: {
                postsId: 123,
                ref: 'social'
            }
        })
    }
    return (
        <>
            <h1>list blog</h1>
            {/* <Link href="/about">
                go to about here
            </Link> */}
            <ul>
                {posts.posts && posts.posts.length && posts.posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* <button onClick={goToDetailPage}> click to the parameter</button> */}
        </>
    );
}

ListBlogs.Layout = MainLayout;

export const getStaticProps: GetStaticProps<ListBlogsProps> = async () => {
    // const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    // const data = await response.json();

    const data = await getPostsList();
    return {
        props: {
            posts: data.map((x: any) => ({ id: x.id, title: x.title })),
        }
    }
}   
