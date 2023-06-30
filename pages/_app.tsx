import EmptyLayout from '@/component/layout/empty';
import AdminLayout from '@/component/layout/admin';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/common';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log("running...");
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
