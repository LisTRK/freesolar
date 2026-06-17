import { SKIP_VALUES } from "../lib/constants.js";

export function SurveyStepSuccess({ phone, name }) {
  return (
    <div className="survey-modal__success">
      <p>
        <strong>Дякуємо, {name}!</strong> Менеджер зателефонує на номер{" "}
        <strong>{phone}</strong> і повідомить результат розрахунку.
      </p>
    </div>
  );
}

export function SurveyStepChoice({ step, value, onSelect }) {
  return (
    <fieldset className="survey-modal__options">
      <legend className="survey-modal__legend">{step.title}</legend>
      {step.options.map((opt) => (
        <label key={opt.value} className="survey-modal__option">
          <input
            type="radio"
            name={step.id}
            value={opt.value}
            checked={value === opt.label}
            onChange={() => onSelect(opt.label)}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
}

export function SurveyStepConsumption({ step, value, onChange, onSkip }) {
  const displayValue = value && !SKIP_VALUES.includes(value) ? value : "";

  return (
    <>
      <div className="survey-modal__field">
        <label htmlFor="survey-consumption">{step.inputLabel}</label>
        <input
          id="survey-consumption"
          type="number"
          min="0"
          inputMode="decimal"
          placeholder="Наприклад: 350"
          value={displayValue}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="survey-modal__skip-row">
        <button
          type="button"
          className="survey-modal__skip"
          onClick={() => onSkip(step.skipHard.label)}
        >
          {step.skipHard.label}
        </button>
        <button
          type="button"
          className="survey-modal__skip"
          onClick={() => onSkip("Пропущено")}
        >
          {step.skip.label}
        </button>
      </div>
    </>
  );
}

export function SurveyStepLocation({ step, value, onChange, onSkip }) {
  return (
    <>
      <div className="survey-modal__field">
        <label htmlFor="survey-location">{step.inputLabel}</label>
        <input
          id="survey-location"
          type="text"
          autoComplete="address-level2"
          placeholder={step.placeholder}
          value={value === "Пропущено" ? "" : value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="survey-modal__skip-row">
        <button
          type="button"
          className="survey-modal__skip"
          onClick={() => onSkip("Пропущено")}
        >
          {step.skip.label}
        </button>
      </div>
    </>
  );
}

export function SurveyStepContact({
  error,
  name,
  phone,
  validationErrors = {},
  onNameChange,
  onPhoneChange,
}) {
  return (
    <>
      {error ? <p className="survey-modal__error">{error}</p> : null}
      <div className="survey-modal__field">
        <label htmlFor="survey-name">Ваше ім&apos;я</label>
        <input
          id="survey-name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
        {validationErrors.name && name.length > 0 && (
          <span className="survey-modal__error-text">
            {validationErrors.name}
          </span>
        )}
      </div>
      <div className="survey-modal__field">
        <label htmlFor="survey-phone">Контактний телефон</label>
        <input
          id="survey-phone"
          type="tel"
          autoComplete="tel"
          placeholder="+380 XX XXX XX XX"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
        />
        {validationErrors.phone && phone.length > 0 && (
          <span className="survey-modal__error-text">
            {validationErrors.phone}
          </span>
        )}
      </div>
    </>
  );
}
