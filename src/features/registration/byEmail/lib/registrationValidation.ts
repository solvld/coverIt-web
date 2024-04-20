import { SignUpInputs } from 'shared/types/auth'
import { ZodType, z } from 'zod'

const uppercaseRegex = new RegExp(/^(?=.*?[A-Z])/)
const lowercaseRegex = new RegExp(/^(?=.*?[a-z])/)
const digitRegex = new RegExp(/^(?=.*?[0-9])/)
const specialCharRegex = RegExp(/^(?=.*?[#?!@$%^&*-])/)
//пофиксить правило
//const consecutiveRegex = RegExp(/^(?!.*(?:\d){5})(?!.*[a-zA-Z]{5})/)
export const registrationSchema: ZodType<SignUpInputs> = z
  .object({
    username: z
      .string()
      .min(1, { message: 'Поле обязательно к заполнению' })
      .min(2, 'Минимум два символа')
      .max(20),
    email: z
      .string()
      .min(1, { message: 'Поле обязательно к заполнению' })
      .email({ message: 'Неверный формат email' }),
    password: z
      .string()
      .min(1, { message: 'Поле обязательно к заполнению' })
      .min(8, { message: 'Минимум 8 символов' })
      .regex(lowercaseRegex, { message: 'Минимум одна строчная буква' })
      .regex(uppercaseRegex, { message: 'Минимум одна заглавная буква' })
      .regex(digitRegex, { message: 'Минимум одна цифра' })
      .regex(specialCharRegex, { message: 'Минимум один спецсимвол' })
      //.regex(consecutiveRegex, { message: 'Придумай пароль получше ;)' })
      .max(20, { message: 'Максимум 20 символов' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Поле обязательно к заполнению' })
      .max(20),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароль не совпадает :(',
    path: ['confirmPassword'],
  })
