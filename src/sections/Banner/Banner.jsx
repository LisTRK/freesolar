import meta from "@/assets/image-meta.json";
import panelAvifLarge from "@/images/solnechnyhPanel-352.avif";
import panelAvifSmall from "@/images/solnechnyhPanel-176.avif";
import panelWebpLarge from "@/images/solnechnyhPanel-352.webp";
import panelWebpSmall from "@/images/solnechnyhPanel-176.webp";
import "./Banner.css";

const { width, height } = meta.solnechnyhPanelSmall;

function Banner() {
  return (
    <section className="banner" role="banner" aria-label="Промо банер">
      <div className="banner__inner">
        <div className="banner__headline">
          <span className="banner__title">СОНЯЧНА СТАНЦІЯ</span>
          <div className="banner__highlights">
            <span className="banner__accent">30 КВТ</span>
            <span className="banner__accent banner__price">ЗА 9 999 $</span>
            <span className="banner__sep" aria-hidden="true" />
          </div>
        </div>
        <p className="banner__sub">Окупність — менше 2 років</p>
      </div>

      <div className="banner__hero-media">
        <picture>
          <source
            type="image/avif"
            srcSet={`${panelAvifSmall} 176w, ${panelAvifLarge} 352w`}
            sizes="(max-width: 768px) 28vw, 11rem"
          />
          <source
            type="image/webp"
            srcSet={`${panelWebpSmall} 176w, ${panelWebpLarge} 352w`}
            sizes="(max-width: 768px) 28vw, 11rem"
          />
          <img
            className="banner__photo"
            src={panelWebpSmall}
            srcSet={`${panelWebpSmall} 176w, ${panelWebpLarge} 352w`}
            sizes="(max-width: 768px) 28vw, 11rem"
            alt="Приватний будинок із сонячними панелями на даху"
            width={width}
            height={height}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <p className="banner__profit">6 480 євро прибутку на рік</p>
      </div>
    </section>
  );
}

export default Banner;
