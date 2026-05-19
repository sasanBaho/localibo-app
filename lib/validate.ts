export function isValidEmail(email: unknown): boolean {
  return (
    typeof email === "string" &&
    email.length >= 3 &&
    email.length <= 254 &&
    !email.includes("\n") &&
    !email.includes("\r") &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

export function isValidString(value: unknown, maxLength = 2000): boolean {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export function sanitizeString(value: string, maxLength = 2000): string {
  return value.trim().slice(0, maxLength);
}

export function isValidFirestoreId(id: unknown): boolean {
  return (
    typeof id === "string" &&
    id.length > 0 &&
    id.length <= 128 &&
    /^[a-zA-Z0-9_\-]+$/.test(id)
  );
}
