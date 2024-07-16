import axiosRetry from 'axios-retry';
import axios from 'axios';
import toast from 'react-hot-toast';

axiosRetry(axios, {
  retries: 2,
  retryDelay: () => 2000,
  retryCondition: () => true,
});

export interface ITicket {
  selectedNumber: Record<string, number[]>;
  isTicketWon: boolean;
}

export const submitTicket = async (ticket: ITicket) => {
  try {
    await axios.post('https://httpstat.us/random/100-500', ticket);
    toast.success('Билет успешно отправлен!');
  } catch (error) {
    toast.error('Не получилось отправить билет :(');
  }
};
