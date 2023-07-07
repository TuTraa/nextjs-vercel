import HeroSeciton from '@/component/home/hero'
import { NextPageWithLayout } from '../models'
import MainLayout from '@/component/layout/main'
import { Box } from '@mui/system'
import RecentPost from '@/component/home/recent-posts'
import FeatureWork from '@/component/home/feature-works'
import Seo from '@/component/common/seo'

const Home: NextPageWithLayout = () => {

  return (
    <Box>
      <Seo data={{
        title: "tutran learn next js",
        description: "this is seo from tutran",
        url: 'tutran0000.click',
        thumbnaiUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ftestrigor.com%2Fwp-content%2Fuploads%2F2023%2F04%2Fnextjs-logo-square.png&tbnid=eMIjlypk6IiYuM&vet=12ahUKEwjLlpuZ1_v_AhXd0DQHHc1XCiEQMygBegUIARDBAQ..i&imgrefurl=https%3A%2F%2Ftestrigor.com%2Fnext-js-testing%2F&docid=munYKTkK1ZWvXM&w=957&h=957&q=next%20js&ved=2ahUKEwjLlpuZ1_v_AhXd0DQHHc1XCiEQMygBegUIARDBAQ'
      }} />
      <HeroSeciton />
      <RecentPost />
      <FeatureWork />
    </Box>
  )
}
Home.Layout = MainLayout
export default Home
