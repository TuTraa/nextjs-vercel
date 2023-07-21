import { LoginPayLoad, UserProfile } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';
import { authApi } from '../api-client';
import { StorageKeys } from '@/contants';


function getUserInfor() {
    try {
        return JSON.parse(localStorage.getItem(StorageKeys?.USER_INFOR) || '')
    } catch (e) {
        console.log("faild storage:", e);
        return null
    }
}

export function UseAuth(options?: Partial<PublicConfiguration>) {
    //mange profile
    const {
        data: aaa,
        error,
        mutate,
    } = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options,
        fallbackData: getUserInfor(),
        onSuccess(data) {
            console.log("set storage");
            localStorage.setItem(StorageKeys.USER_INFOR, JSON.stringify(data))
        },
        onError(err: any) {
            console.log("err1111:", err);
            localStorage.removeItem(StorageKeys.USER_INFOR)
        }
    });

    const firstLoading = aaa === undefined && error === undefined;

    async function login(payLoad: LoginPayLoad) {
        await authApi.login(payLoad)
        await mutate();
    }
    async function logout() {
        await authApi.logout();
        mutate(null, false)
        localStorage.removeItem(StorageKeys.USER_INFOR)
    }
    return {
        aaa, error, login, logout, firstLoading
    }
}