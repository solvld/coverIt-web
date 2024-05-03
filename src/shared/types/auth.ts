export type LogInInputs = {
  email: string
  password: string
}

export type SignUpInputs = {
  username: string
  email: string
  password: string
  confirmPassword?: string
}

export interface LoginSuccessResponse {
  token: string
}

export interface LoginErrorResponse {
  message: string
  reason: string
  status: string
  timestamp: string
}
