import { Timestamp } from "firebase/firestore";

export default function getFormattedDate(dateString: Timestamp | Date): string {
  const date = dateString instanceof Date ? new Date(dateString) : new Date(dateString.toDate());

  const year = date.getFullYear(); 
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}. ${month} ${year}`;
}
