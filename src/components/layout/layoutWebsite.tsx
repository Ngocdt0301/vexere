import React from 'react'
import Header from '../header'
import Banner from '../banner'
import Main from '../main'
import Footer from '../footer'
import FooterContainer from '../footerContainer'

type Props = {}

const LayoutWebsite = (props: Props) => {
  return (
    <>
        <Header/>
        <Banner/>
        <Main/>
        <FooterContainer/>
        <Footer/>

    </>
  )
}

export default LayoutWebsite