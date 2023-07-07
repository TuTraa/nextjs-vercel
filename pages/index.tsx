import HeroSeciton from '@/component/home/hero'
import { NextPageWithLayout } from '../models'
import MainLayout from '@/component/layout/main'
import { Box } from '@mui/system'
import RecentPost from '@/component/home/recent-posts'
import FeatureWork from '@/component/home/feature-works'

const Home: NextPageWithLayout = () => {

  return (
    <Box>
      <HeroSeciton />
      <RecentPost />
      <FeatureWork />
    </Box>
  )
}
Home.Layout = MainLayout
export default Home
