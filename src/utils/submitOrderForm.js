import db from '../firestore';
import { SubmissionError } from 'redux-form';

const submitOrderForm = order => async ({ address, address2, ...rest }) => {
  if (!order.length) {
    throw new SubmissionError({
      _error: "Koszyk jest pusty!"
    })
  }

  try {
    await db.collection('orders').add({
      order,
      ...rest,
      address: `${address} ${address2}`
    })
    alert('Pomyślnie złożono zamówienie. Nastąpi przekierowanie na stronę główną.')
    window.location.href = "/"
  } catch (error) {
    throw new SubmissionError({
      _error: 'Błąd podczas składania zamówienia, prosimy spróbować później.'
    })
  }
}

export default submitOrderForm;