import HeroSeciton from '@/component/home/hero'
import { NextPageWithLayout } from '../models'
import MainLayout from '@/component/layout/main'
import { Box } from '@mui/system'
import RecentPost from '@/component/home/recent-posts'

const Home: NextPageWithLayout = () => {

  return (
    <Box>
      <HeroSeciton />
      <RecentPost />
    </Box>
  )
}
Home.Layout = MainLayout
export default Home
