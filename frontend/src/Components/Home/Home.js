import React, { useState } from 'react'
import './Home.css'
import Header from '../Navbar/Navbar'
import Footer from '../Footer/Footer.js'
import Corousel from '../Home/Carousel'
import Cards from '../Home/Card'
import Chatbot from '../Chatbot/Chatbot'
import chatbot_icon from '../../Assets/chatbot.png'

const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='imag'>
      <Header />
      <Corousel />
      <a><h3>Check out all we have to offer!</h3></a>
      <Cards />
      <Footer />
      <div>
        <button className='btn chatbotButton d-flex justify-content-center align-items-center' onClick={() => setButtonPopup(true)}><img src={chatbot_icon} style={{ height: '3rem' }} /></button>
        <Chatbot trigger={buttonPopup} setTrigger={setButtonPopup}></Chatbot>
      </div>
    </div>
  )
}

export default Home