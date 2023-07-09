import * as React from 'react';
// import { authApi } from '@/api';
import { UseAuth } from '@/hooks';
import { useRouter } from 'next/router';


export default function LoginPgae() {
    const router = useRouter();


    const { profile, login, logout, } = UseAuth({
        revalidateOnMount: false,
    });

    async function handleLoginClick() {
        try {
            await login();
            router.push('./about')
        } catch (error) {
            console.log('failse to login', error)
        }
    }
    // async function handleGetProfileClick() {
    //     try {
    //         await authApi.getProfile()
    //     } catch (error) {
    //         console.log('failse to get profile  ', error)
    //     }
    // }
    async function handleLogoutClick() {
        try {
            await logout();
            console.log('redireact to login page');
        } catch (error) {
            console.log('failse to get logout  ', error)
        }
    }


    return (
        <div>
            <h1>Login page</h1>

            <p>profile :{JSON.stringify(profile || {}, null, 404)}</p>
            <button onClick={handleLoginClick}>Login</button>
            {/* <button onClick={handleGetProfileClick}>Get profile</button> */}
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    );
}
