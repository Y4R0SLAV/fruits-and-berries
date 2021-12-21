import { Layout } from 'antd'
import { Epigraph } from './../Epigraph/Epigraph'
import './content.css'
import Tables from './../Tables/Tables'
import AboutDate from './../AboutDate/AboutDate'

const { Content } = Layout

const _Content = () => {
  return <Content className='content'>
    <div className="site-layout-content">
      <Epigraph />
      <Tables />
      <AboutDate />
    </div>
    
  </Content>
}

export default _Content