// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyReqCallback, ProxyResCallback } from 'http-proxy'
import { resolve } from "path";
import { json } from "stream/consumers";
import Cookies from "cookies";
type Data = {
    name: string
}

export const config = {
    api: {
        bodyParser: false,
    }
}

const proxy = httpProxy.createProxyServer();


export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: 'method not supported' })
    }
    return new Promise((resolve) => {
        req.headers.cookie = "";

        //api/student


        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = '';
            proxyRes.on('data', function (chuck) {
                body += chuck
            })


            proxyRes.on('end', function () {
                try {
                    const { accessToken, expireAt } = JSON.parse(body);
                    console.log({ accessToken, expireAt });

                    //convert token to cookies
                    const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
                    cookies.set('access_token', accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expireAt)
                    });


                    (res as NextApiResponse).status(200).json({ message: 'login succesfully' })
                    // throw new Error('aws')
                }
                catch (error) {
                    (res as NextApiResponse).status(500).json({ message: 'wrong' })

                }
                resolve(true)
            })
        }

        proxy.once('proxyRes', handleLoginResponse)
        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        })
    })
    //dont send cookies to API server


    // res.status(200).json({ name: 'all paths' })
}

