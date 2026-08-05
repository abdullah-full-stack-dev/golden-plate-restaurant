import React, { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { FeaturedMenu } from '../components/FeaturedMenu'
import { TodaySpecial } from '../components/TodaySpecial'
import { MasterChef } from '../components/MasterChef'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { Testimonials } from '../components/Testimonials'
import { Reservation } from '../components/Reservation'
import { useLocation } from 'react-router-dom'


export const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>

      <Hero />
      <FeaturedMenu />
      <TodaySpecial />
      <MasterChef />
      <WhyChooseUs />
      <Testimonials />
      <Reservation />
    </div>
  )
}
