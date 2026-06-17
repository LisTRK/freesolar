import meta from '@/assets/image-meta.json'
import logoAvif from '@/images/FreeSolar.avif'
import logoWebp from '@/images/FreeSolar.webp'
import './Footer.css'

const { width, height } = meta.FreeSolar

function Footer() {
  return (
    <footer className="footer" aria-label="Партнерський бренд та контакти">
      {/* Додали блок контактів перед логотипом */}
      <div className="footer__contacts">
        <span className="footer__cta-text">Зв'язатися прямо зараз</span>
        <a href="tel:+380123456789" className="footer__phone">
          +380 12 345 67 89
        </a>
      </div>

      <div className="footer__brand">
        <picture>
          <source type="image/avif" srcSet={logoAvif} />
          <source type="image/webp" srcSet={logoWebp} />
          <img
            className="footer__logo"
            src={logoWebp}
            alt="Free Solar — вільна енергія для вас"
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </footer>
  )
}

export default Footer

// import meta from '@/assets/image-meta.json'
// import logoAvif from '@/images/FreeSolar.avif'
// import logoWebp from '@/images/FreeSolar.webp'
// import './Footer.css'

// const { width, height } = meta.FreeSolar

// function Footer() {
//   return (
//     <footer className="footer" aria-label="Партнерський бренд">
//       <div className="footer__brand">
//         <picture>
//           <source type="image/avif" srcSet={logoAvif} />
//           <source type="image/webp" srcSet={logoWebp} />
//           <img
//             className="footer__logo"
//             src={logoWebp}
//             alt="Free Solar — вільна енергія для вас"
//             width={width}
//             height={height}
//             loading="lazy"
//             decoding="async"
//           />
//         </picture>
//       </div>
//     </footer>
//   )
// }

// export default Footer
