import { useRouter } from 'next/router';
import * as React from 'react';
import { json } from 'stream/consumers';

export interface ParamPaseProps {
}

export default function ParamPase(props: ParamPaseProps) {
    const router = useRouter();
    return (
        <div>
            param pase
            <p>Query : {JSON.stringify(router.query)}</p>
        </div>
    );
}
