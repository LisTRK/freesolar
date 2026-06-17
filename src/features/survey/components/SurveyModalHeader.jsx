function SurveyModalHeader({
  titleId,
  stepIndex,
  totalSteps,
  title,
  subtitle,
  isDone,
  onClose,
}) {
  return (
    <header className="survey-modal__header">
      <button
        type="button"
        className="survey-modal__close"
        aria-label="Закрити опитувальник"
        onClick={onClose}
      >
        ×
      </button>
      {!isDone ? (
        <>
          <span className="survey-modal__progress">
            Крок {stepIndex + 1} з {totalSteps}
          </span>
          <h2 id={titleId} className="survey-modal__title">
            {title}
          </h2>
          {subtitle ? (
            <p className="survey-modal__subtitle">{subtitle}</p>
          ) : null}
        </>
      ) : (
        <h2 id={titleId} className="survey-modal__title">
          Заявку надіслано
        </h2>
      )}
    </header>
  )
}

export default SurveyModalHeader
