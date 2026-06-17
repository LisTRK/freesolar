import { object, string } from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { SKIP_VALUES } from "./constants.js";

/**
 * Схема для кроку контактів
 */
export const contactSchema = object().shape({
  name: string()
    .trim()
    .min(2, "Ім'я занадто коротке")
    .required("Обов'язкове поле"),
  phone: string()
    .required("Обов'язкове поле")
    .test("is-valid-phone", "Невірний формат номера", (value) => {
      if (!value) return false;
      const phoneNumber = parsePhoneNumberFromString(value, "UA");
      return phoneNumber ? phoneNumber.isValid() : false;
    }),
});

export function canProceedStep(step, answers) {
  if (!step) return false;

  switch (step.type) {
    case "contact": {
      try {
        contactSchema.validateSync({
          name: answers.name,
          phone: answers.phone,
        });
        return true;
      } catch (e) {
        return false;
      }
    }
    case "consumption": {
      const value = answers.consumption?.trim() ?? "";
      return Boolean(value) && !SKIP_VALUES.includes(value);
    }
    case "location": {
      const value = answers.location?.trim() ?? "";
      return Boolean(value) && value !== "Пропущено";
    }
    case "choice":
      return Boolean(answers[step.id]);
    default:
      return false;
  }
}
