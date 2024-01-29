import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/popular'
import Offers from  '../components/offers/offers' 
// import NewCollections from '../components/newcollections/newcollections'
import NewCollections from '../components/Newcollections/newcollections';
import NewsLetter from '../components/NewsLetter/newsletter'
import Footer from '../components/Footer/footer'
const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Shop




