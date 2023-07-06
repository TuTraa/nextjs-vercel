import StudentDetail from '@/component/swr/studentDetail';
import * as React from 'react';

export default function swrPage() {
    return (
        <div>
            <h1>SWR page</h1>
            <ul>
                <li><StudentDetail studentId={'lea11ziflg8xoiza'}></StudentDetail></li>
                <li><StudentDetail studentId={'lea11ziflg8xoiza'}></StudentDetail></li>
                <li><StudentDetail studentId={'lea11ziflg8xoiza'}></StudentDetail></li>
            </ul>
        </div>
    );
}
