import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { json } from 'stream/consumers';

export interface IPostsIdProps {
    post: string
}

export default function PostDetailPage(post: any) {
    if (!post) return null
    console.log("post path : ", post.id)
    return (
        <div>
            <p>running...</p>
            <p>sit</p>
            <p>{post.title}</p>

            {/* <p>{post.author}</p> */}
            {/* <p>{post.description}</p> */}
        </div>
    );
}

type PageParams = {
    postId: string;
};

// Hàm getStaticPaths
export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
    // Trả về một object chứa một mảng các paths
    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=1`);
    const data = await response.json();
    console.log('data paths :', data)
    return {
        paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
        fallback: false,
    };

    // return {
    //     paths: [{ params: { postId: "lea11ziflg8xoixz" } }],
    //     fallback: false
    // }
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const postId = context.params?.postId;
    if (!postId) return { notFound: true }
    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
    const data = await response.json();
    console.log('get static props', data);

    return {
        props: {
            id: data.id,
            title: data.title,
        }
    }
}  
