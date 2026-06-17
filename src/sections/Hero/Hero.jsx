import Banner from '@/sections/Banner/Banner.jsx'
import Sale from '@/sections/Sale/Sale.jsx'
import './Hero.css'

function Hero({ onSurveyOpen }) {
  return (
    <div className="hero">
      <Banner />
      <Sale onSurveyOpen={onSurveyOpen} />
    </div>
  )
}

export default Hero
