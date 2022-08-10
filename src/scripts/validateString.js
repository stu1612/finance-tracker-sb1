export default function validateString(string) {
  const trimmedString = string.trim();
  const validatedString = trimmedString.length > 5;
  const data = validatedString ? trimmedString : "";
  const error = validatedString ? "" : "Input requires more than 5 characters";

  return { data: data, error: error };
}
