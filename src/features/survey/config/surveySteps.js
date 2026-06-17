export const SURVEY_STEPS = [
  {
    id: 'purpose',
    type: 'choice',
    title: 'З якою метою ви бажаєте поставити сонячну електростанцію?',
    options: [
      { value: 'savings', label: 'Заощаджувати на власному споживанні' },
      { value: 'green_tariff', label: 'Заробляти на зеленому тарифі' },
      { value: 'autonomy', label: 'Забезпечити автономність енергопостачання' },
    ],
  },
  {
    id: 'greenTariff',
    type: 'choice',
    title: 'Чи знаєте Ви, як заробити на зеленому тарифі?',
    options: [
      { value: 'yes', label: 'Так' },
      { value: 'no', label: 'Ні' },
      { value: 'consultation', label: 'Потрібна консультація' },
    ],
  },
  {
    id: 'stationType',
    type: 'choice',
    title: 'Яка електростанція Вас цікавить?',
    options: [
      { value: 'grid', label: 'Мережева' },
      { value: 'hybrid', label: 'Гібридна' },
      { value: 'autonomous', label: 'Автономна' },
      { value: 'unknown', label: 'Ще не знаю. Потрібна консультація' },
    ],
  },
  {
    id: 'power',
    type: 'choice',
    title: 'Яка потужність станції необхідна, кВт',
    options: [
      { value: '3-5', label: '3-5 кВт' },
      { value: '10-15', label: '10-15 кВт' },
      { value: '15-20', label: '15-20 кВт' },
      { value: '30', label: '30 кВт' },
      { value: '50', label: '50 кВт' },
      { value: 'unknown', label: 'Ще не знаю. Потрібна консультація' },
    ],
  },
  {
    id: 'placement',
    type: 'choice',
    title: 'Як хотіли б розмістити станцію?',
    options: [
      { value: 'ground', label: 'На земельній ділянці' },
      { value: 'roof', label: 'На даху' },
      { value: 'both', label: 'Сумісний варіант' },
    ],
  },
  {
    id: 'consumption',
    type: 'consumption',
    title: 'Яке власне споживання електроенергії кВт/год на місяць?',
    inputLabel: 'кВт·год на місяць',
    skipHard: { value: 'hard', label: 'Важко відповісти' },
    skip: { value: 'skipped', label: 'Пропустити питання' },
  },
  {
    id: 'location',
    type: 'location',
    title: 'Вкажіть місцезнаходження будинку',
    inputLabel: 'Район',
    placeholder: 'Наприклад: Оболонський район',
    skip: { value: 'skipped', label: 'Пропустити питання' },
  },
  {
    id: 'timeline',
    type: 'choice',
    title: 'Коли плануєте ставити сонячну електростанцію?',
    options: [
      { value: 'soon', label: 'Найближчим часом' },
      { value: 'year', label: 'Протягом року' },
      { value: 'research', label: 'Поки що тільки збираю інформацію' },
    ],
  },
  {
    id: 'contact',
    type: 'contact',
    title: 'Дякуємо за відповіді',
    subtitle:
      'Отримайте результат розрахунку, залишивши свій контактний телефон. На нього Вам зателефонує менеджер та повідомить результат розрахунку.',
  },
]

export const INITIAL_ANSWERS = {
  purpose: '',
  greenTariff: '',
  stationType: '',
  power: '',
  placement: '',
  consumption: '',
  location: '',
  timeline: '',
  name: '',
  phone: '',
}
