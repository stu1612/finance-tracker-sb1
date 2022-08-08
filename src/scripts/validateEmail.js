export default function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const validEmail = email.match(pattern);
  const data = validEmail ? validEmail : "";
  const error = !validEmail ? "Please enter a valid email" : "";
  return { data: data, error: error };
}
