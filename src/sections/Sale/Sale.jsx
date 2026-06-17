import Button from "@/shared/ui/Button/Button.jsx";
import { BUTTON_LABELS } from "@/shared/constants/buttons.js";
import "./Sale.css";

function Sale({ onSurveyOpen }) {
  return (
    <section className="sale" aria-label="Сонячна електростанція під ключ">
      <div className="sale__inner">
        <h1 className="sile-header__title">
          <span className="sile-header__free">FREE</span>
          <span className="sile-header__solar">SOLAR</span>
        </h1>
        <p className="sale__subtitle">вільна енергія для вас</p>
        <h2 className="sale__title">
          Сонце — інвестиція в автономність вашого дому та бізнесу.
        </h2>
        <p className="sale__lead">
          Переходьте на власну генерацію «під ключ». Отримуйте гарантовану
          енергонезалежність, захист від блекаутів та економію на десятиліття по
          всій тереторії України.
        </p>
        <Button onClick={onSurveyOpen}>{BUTTON_LABELS.PICK_STATION}</Button>
      </div>
    </section>
  );
}

export default Sale;
