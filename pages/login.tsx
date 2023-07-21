import * as React from 'react';
// import { authApi } from '@/api';
import { UseAuth } from '@/hooks';
import { useRouter } from 'next/router';
import { LoginForm } from '@/component/auth';
import { LoginPayLoad } from '@/models';


export default function LoginPgae() {
    const router = useRouter();


    const { aaa, login, logout, } = UseAuth({
        revalidateOnMount: false,
    });

    async function handleLoginClick() {
        try {
            await login({
                username: 'test',
                password: '123'
            });
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
            console.log('failse to get logout', error)
        }
    }
    async function handleLoginSubmit(payload: LoginPayLoad) {
        try {
            await login(payload);
            router.push('/')
        }
        catch (error) {
            console.log('login err:', error)
        }
    }


    return (
        <div>
            <h1>Login page</h1>

            <p>profile :{JSON.stringify(aaa || {}, null, 404)}</p>
            <button onClick={handleLoginClick}>Login</button>
            {/* <button onClick={handleGetProfileClick}>Get profile</button> */}
            <button onClick={handleLogoutClick}>Logout</button>
            <LoginForm onSubmit={handleLoginSubmit} />
        </div>
    );
}
