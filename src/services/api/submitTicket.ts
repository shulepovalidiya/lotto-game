import axiosRetry from 'axios-retry';
import axios from 'axios';
import toast from 'react-hot-toast';

axiosRetry(axios, {
  retries: 2,
  retryDelay: () => 2000,
  // Повторяем запрос по заданному условию — если в ответ придет код не 200 OK, а любой другой
  retryCondition: () => true,
});

export interface Ticket {
  selectedNumber: Record<string, number[]>;
  isTicketWon: boolean;
}

export const submitTicket = async (ticket: Ticket, ticketId: number) => {
  try {
    await axios.post('https://httpstat.us/random/100-500/cors', ticket);
    toast.success(`Билет ${ticketId} успешно отправлен!`);
  } catch (error) {
    toast.error(`Не получилось отправить билет ${ticketId} :(`);
  }
};
