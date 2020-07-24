import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: '2 месяца',
    start: '2020-06-20',
    end: '2020-08-20',
    color: 'red'
  },
  {
    id: createEventId(),
    title: '1.5 месяца',
    start: '2020-06-20',
    end: '2020-07-20',
    color: 'green',
  },
  {
    id: createEventId(),
    title: '2772 месяца',
    start: '2020-07-10',
    end: '2020-08-20'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
