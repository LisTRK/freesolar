const ENDPOINT = 'https://api.web3forms.com/submit'

const FIELD_LABELS = {
  purpose: 'Мета встановлення',
  greenTariff: 'Знання про зелений тариф',
  stationType: 'Тип електростанції',
  power: 'Потужність станції',
  placement: 'Розміщення станції',
  consumption: 'Споживання (кВт·год/міс)',
  location: 'Місцезнаходження',
  timeline: 'Терміни встановлення',
  name: "Ім'я",
  phone: 'Телефон',
}

function formatAnswers(answers) {
  return Object.entries(FIELD_LABELS)
    .map(([key, label]) => `${label}: ${answers[key] || '—'}`)
    .join('\n')
}

export async function submitSurvey(answers) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error(
      'Не налаштовано VITE_WEB3FORMS_ACCESS_KEY. Створіть ключ на web3forms.com і додайте в .env',
    )
  }

  const body = {
    access_key: accessKey,
    subject: 'Greenak — заявка з опитувальника',
    from_name: answers.name || 'Клієнт Greenak',
    name: answers.name,
    phone: answers.phone,
    botcheck: '',
    message: formatAnswers(answers),
    ...Object.fromEntries(
      Object.entries(FIELD_LABELS).map(([key, label]) => [
        label,
        answers[key] || '—',
      ]),
    ),
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Не вдалося надіслати форму. Спробуйте пізніше.')
  }

  return data
}
