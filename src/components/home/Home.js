import Ract from 'react'
import Header from './Header'
import Page from './Page'
import frontPage1 from '../../img/frontPage1.jpg'
import frontPage2 from '../../img/frontPage2.jpg'


const Home = () =>{
    return(
        <>
        <Header/>
        <Page img={frontPage1} btn="Programming"/>
        <Page img={frontPage2} btn="Photograpgy"/>
        </>
    )
}

export default Home