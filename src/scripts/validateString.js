export default function validateString(string) {
  const trimmedString = string.trim();
  const validString = trimmedString.length > 5;
  const data = validString ? validString : "";
  const error = !validString
    ? "Password must be greater than 5 characters"
    : "";
  return { data: data, error: error };
}
