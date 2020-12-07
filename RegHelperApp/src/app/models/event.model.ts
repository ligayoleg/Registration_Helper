import {CalendarEvent, DAYS_OF_WEEK} from 'angular-calendar';
import RRule, { Frequency, Weekday } from 'rrule'


export interface Event  {
  id?: number;
  title?: string;
  type?: string;
  days?: CalendarEvent[];
  locked?: boolean;
  recurring?: boolean;
  rrule?: {
    freq:  any,
    byweekday: any,
  } 
}


export interface RecurringEvent {
  id?: number,
  title: string;
  color?: any;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
    byhour?: any,
  };
  type?:any;
}



// export interface EventTwo {
//   id?: number;
//   name?: string;
//   type?: string;
//   days?: WeekDay[];
// }


