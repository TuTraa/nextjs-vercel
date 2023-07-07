import Head from 'next/head';
import * as React from 'react';

export interface SeoDatas {
    title: string,
    description: string,
    url: string,
    thumbnaiUrl: string,
}

export interface SeoProps {
    data: SeoDatas
}

export default function Seo({ data }: SeoProps) {
    const { title, description, url, thumbnaiUrl } = data
    return (
        <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>tu tran lean nextjs</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={thumbnaiUrl} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={thumbnaiUrl} />

            {/* <!-- Meta Tags Generated with https://metatags.io --> */}
        </Head>
    );
}
