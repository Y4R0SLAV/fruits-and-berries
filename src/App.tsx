import React from 'react'
import 'antd/dist/antd.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import { Layout } from 'antd'



function App() {
  return (
    <div>
      <Layout className="layout">
        <Header />
        <Content />
        <Footer />
      </Layout>
    </div>
  );
}

export default App
