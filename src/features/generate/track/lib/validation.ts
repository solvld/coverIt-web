import { ZodType, z } from 'zod'
import { TrackInputs } from 'shared/types/generate'

export const generateTrackSchema: ZodType<TrackInputs> = z.object({
  title: z
    .string()
    .min(1, { message: "Don't leave this field empty." })
    .max(50, { message: 'Too long...' }),
  mood: z.string().min(1, { message: 'Please select at least one tag.' }),
  object: z
    .string()
    .min(1, { message: "Don't leave this field empty." })
    .min(2, 'Please enter one or more words.')
    .max(250, { message: 'Too long...' }),
  surrounding: z
    .string()
    .min(1, { message: "Don't leave this field empty." })
    .min(2, 'Please enter one or more words.')
    .max(250, { message: 'Too long...' }),
  coverDescription: z
    .string()
    .min(1, { message: 'Please select at least one tag.' }),
  isLoFi: z.string(),
})
