import { useCallback, useState } from 'react'

export function useSurveyModal() {
  const [open, setOpen] = useState(false)

  const openSurvey = useCallback(() => setOpen(true), [])
  const closeSurvey = useCallback(() => setOpen(false), [])

  return {
    open,
    openSurvey,
    closeSurvey,
    modalProps: { open, onClose: closeSurvey },
  }
}
