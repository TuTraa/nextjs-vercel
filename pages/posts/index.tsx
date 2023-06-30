import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import MainLayout from '@/component/layout/main';
import AdminLayout from '@/component/layout/admin';

export interface IListPostsProps {
    posts: any
}


export default function ListPosts(posts: IListPostsProps) {
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
            <h1>list post</h1>
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

ListPosts.Layout = AdminLayout;

export const getStaticProps: GetStaticProps<IListPostsProps> = async (context: GetStaticPropsContext) => {
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();
    // console.log(data);
    return {
        props: {
            posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
        }
    }
}   
