export function toSnakeCase(str: string) {
  return str
    .replace(/\W+/g, ' ') // Replace all non-letter and non-digit characters with a space
    .split(/(?=[A-Z])/) // Split by uppercase letters
    .join('_') // Join with underscores
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .toLowerCase() // Convert to lowercase
}
