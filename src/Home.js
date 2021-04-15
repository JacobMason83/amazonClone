import Product from './Product'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='amazon_img'
      />
      {/* Product id, title, price rating, image  */}
      {/* product  that takes properties and displayed here  */}
      <div className='home__row'>
        <Product
          id='3048'
          title='2021 Playstation Console and Playstation VR Bundle - PS5 Disk Version with Wireless Controller'
          price={(1, 969.99)}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/615y%2BIiStnL._AC_SX425_.jpg'
        />
        <Product
          id='3047'
          title='SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)'
          price={547.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SX679_.jpg'
        />
      </div>
    </div>
  )
}

export default Home
