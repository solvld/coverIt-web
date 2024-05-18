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
      .min(1, { message: 'Please enter your username' })
      .min(2, 'Minimum 2 characters')
      .max(20),
    email: z
      .string()
      .min(1, { message: 'Please enter your email address' })
      .email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(1, { message: 'Please create a password' })
      .min(8, { message: 'Minimum 8 characters' })
      .regex(lowercaseRegex, { message: 'Minimum one lowercase letter' })
      .regex(uppercaseRegex, { message: 'Minimum one uppercase letter' })
      .regex(digitRegex, { message: 'Minimum one digit' })
      .regex(specialCharRegex, { message: 'Minimum one special character' })
      //.regex(consecutiveRegex, { message: 'Придумай пароль получше ;)' })
      .max(20, { message: 'Maximum 20 characters' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Please confirm your password' })
      .max(20),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match. Try again.',
    path: ['confirmPassword'],
  })
