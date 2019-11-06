const validateOrderForm = values => {
  const errors = {}
  const regExps = {
    phone_number: /^[0-9]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    zip_code: /^[0-9]{2}-[0-9]{3}$/,
    letters_only: new RegExp('^\\p{L}+$', 'u')
  }

  const required = 'To pole jest wymagane!';
  const lettersOnly= 'Pole może składać się tylko z liter!';

  if (!values.phone_number) errors.phone_number = required;
  else if (!regExps.phone_number.test(values.phone_number)) errors.phone_number = "Numer telefonu może zawierać tylko cyfry."
  else if (values.phone_number.length !== 9) errors.phone_number = "Numer telefonu powinien składać się z dokładnie 9 cyfr.";
  
  if (!values.email) errors.email = required;
  else if (!regExps.email.test(values.email)) errors.email = "Email powinien zostać wprowadzony w formacie example@example.com.";

  if (!values.zip_code) errors.zip_code = required;
  else if (!regExps.zip_code.test(values.zip_code)) errors.zip_code = "Kod pocztowy powinien zostać podany w formacie 00-000."

  if (!values.first_name) errors.first_name = required;
  else if(!regExps.letters_only.test(values.first_name)) errors.first_name = lettersOnly;

  if (!values.last_name) errors.last_name = required;
  else if(!regExps.letters_only.test(values.last_name)) errors.last_name = lettersOnly;

  if (!values.address) errors.address = required;
  else if(!regExps.letters_only.test(values.address)) errors.address = lettersOnly;
  
  if (!values.city) errors.city = required;
  else if(!regExps.letters_only.test(values.city)) errors.city = lettersOnly;

  if (!values.address2) errors.address2 = required;

  return errors
}

export default validateOrderForm;