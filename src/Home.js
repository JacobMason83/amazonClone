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
      {/* product  that takes properties and displayed here  */}
      <div className='home__row'>
      {/* Product id, title, price rating, image are props used to send it down to products to display them, could use a fetch call to get the data from amazon for that user */}
        <Product
          id='3048'
          title='2021 Playstation Console and Playstation VR Bundle - PS5 Disk Version with Wireless Controller'
          price={(1969.99)}
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
      <div className='home__row'>
        <Product
          id='3046'
          title='INSIGNIA NS-55DF710NA21 55-inch Smart 4K UHD - Fire TV Edition, Released 2020'
          price={429.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61%2BOhM4LEUL._AC_SX679_.jpg'
        />
        <Product
          id='3049'
          title='Microsoft Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller and 1 Month Xbox Live Gold Membership  White'
          price={440.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71pDaLVdGgL._SX425_.jpg'
        />
        <Product
          id='3050'
          title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)'
          price={299.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SX679_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='3043'
          title='Funko Pop! Animation: Naruto - Naruto Six Path Sage'
          price={22.95}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61-TOi%2B8cuL._AC_SX679_.jpg'
        />
      </div>
    </div>
  )
}

export default Home
