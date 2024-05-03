import { LogInInputs } from 'shared/types/auth'
import { ZodType, z } from 'zod'

export const logInSchema: ZodType<LogInInputs> = z.object({
  email: z
    .string()
    .min(1, { message: 'Поле обязательно к заполнению' })
    .email({ message: 'Неверный формат email' }),
  password: z
    .string()
    .min(1, { message: 'Поле обязательно к заполнению' })
    .min(8, { message: 'Пароль слишком короткий' }),
})
