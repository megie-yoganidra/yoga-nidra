export type Errors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Validates a plain object of form values. Returns a field → message map. */
export function validate(values: Record<string, string>, required: string[] = []): Errors {
  const errors: Errors = {};
  for (const key of required) {
    if (!values[key]?.trim()) {
      errors[key] = "This field is required.";
    }
  }
  if (!errors["email"] && "email" in values) {
    const email = values["email"]?.trim() ?? "";
    if (!email) errors["email"] = "Please enter your email address.";
    else if (!EMAIL_RE.test(email)) errors["email"] = "Please enter a valid email address.";
  }
  return errors;
}

/** Reads all named inputs of a form into a plain object of trimmed strings. */
export function readForm(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const values: Record<string, string> = {};
  for (const [key, value] of data.entries()) {
    values[key] = typeof value === "string" ? value.trim() : "";
  }
  return values;
}
