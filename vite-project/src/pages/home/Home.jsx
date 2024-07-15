import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { Link } from 'react-router-dom'

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';




function Home() {
  return (
    <Layout>
      
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
     
        <Link to={'/allproducts'}>
        
          <button className=' bg-blue-500 text-white px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      
    </Layout>
  )
}

export default Home