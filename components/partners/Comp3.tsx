import React from 'react'
import CardLeft from '../services/CardLeft'
import CardLeftP from './CardLeftP'
import CardRightP from './CardRightP'

export const Comp3 = () => {
  return (
    <div>
      <div className='font-bold text-5xl mx-12 px-4'>How it Works?</div>
      <div className='text-textPurple text-xl ml-12 px-4 my-8'>Amahmatch: Partnering with the best to make your life easier.</div>
      <div className='m-12'>
        <CardLeftP title="Choose an ad format that works for your business objective" content="Our targeted social media carousel ads showcase your brand to a relevant audience, while informative native ads on trusted websites build credibility and trust. Let Amahmatch handle the advertising, so you can focus on what you do best providing exceptional service." image="./partner2.png"icon="./icon1.png"></CardLeftP>
        <CardRightP title="Choose your budget and bid value" content="Set a budget that works for you and choose your ideal bid value to control how much you spend per customer acquisition. Reaching a targeted audience of potential customers actively seeking reliable home service providers." image="./partner1.png" icon="./icon2.png"></CardRightP>
        <CardLeftP title="Track campaign’s performance" content="Partnering with Amahmatch allows you to track your campaign's performance in real-time. See how many potential customers interacted with your brand, downloaded your app, or made a purchase" image="./partner3.png" icon="./icon3.png"></CardLeftP>
      </div>
    </div>
  )
}
