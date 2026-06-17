/*import meta from '@/assets/image-meta.json'
import './PageBackground.css'

const BG_WEBP = {
  640: '/images/main-bg-640.webp',
  1280: '/images/main-bg-1280.webp',
  1920: '/images/main-bg.webp',
}

const BG_AVIF = {
  640: '/images/main-bg-640.avif',
  1280: '/images/main-bg-1280.avif',
  1920: '/images/main-bg.avif',
}

const srcset = (map) =>
  `${map[640]} 640w, ${map[1280]} 1280w, ${map[1920]} 1920w`

function PageBackground() {
  return (
    <div className="page-bg" aria-hidden="true">
      <picture>
        <source type="image/avif" srcSet={srcset(BG_AVIF)} sizes="100vw" />
        <source type="image/webp" srcSet={srcset(BG_WEBP)} sizes="100vw" />
        <img
          className="page-bg__img"
          src={BG_WEBP[1920]}
          srcSet={srcset(BG_WEBP)}
          sizes="100vw"
          alt=""
          width={meta.mainBg.width}
          height={meta.mainBg.height}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </div>
  )
}

export default PageBackground
*/
import meta from '@/assets/image-meta.json'
import './PageBackground.css'

const BG_WEBP = {
  640: '/images/main-bg-640.webp',
  1280: '/images/main-bg-1280.webp',
  1920: '/images/main-bg.webp',
}

const BG_AVIF = {
  640: '/images/main-bg-640.avif',
  1280: '/images/main-bg-1280.avif',
  1920: '/images/main-bg.avif',
}

const srcset = (map) =>
  `${map[640]} 640w, ${map[1280]} 1280w, ${map[1920]} 1920w`

function PageBackground() {
  const imgWidth = meta?.mainBg?.width || 1920;
  const imgHeight = meta?.mainBg?.height || 1080;

  return (
    <div className="page-bg" aria-hidden="true">
      <picture>
        <source type="image/avif" srcSet={srcset(BG_AVIF)} sizes="100vw" />
        <source type="image/webp" srcSet={srcset(BG_WEBP)} sizes="100vw" />
        <img
          className="page-bg__img"
          src={BG_WEBP[1920]}
          srcSet={srcset(BG_WEBP)}
          sizes="100vw"
          alt=""
          width={imgWidth}
          height={imgHeight}
          {...{ fetchPriority: 'high' }} 
          decoding="async"
        />
      </picture>
    </div>
  )
}

export default PageBackground