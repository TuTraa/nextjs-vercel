import * as React from 'react';

export interface HeaderProps {
}

export default function Header(props: HeaderProps) {
    console.log("render header client")
    return (
        <div className='header'>
            Header now
        </div>
    );
}