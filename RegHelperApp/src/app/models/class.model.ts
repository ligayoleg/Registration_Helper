export interface Subject {
  class?: number;
  section?: string;
  code?: string;
  name?: string;
  oncePerWeek?: boolean;
  dayOne?: string;
  dayOneTimeStart?: string;
  dayOneTimeFinish?: string;
  dayTwo?: string;
  dayTwoTimeStart?: string;
  dayTwoTimeFinish?: string;
}

export interface Event {
  id?: string;
  name?: string;
  type?: string;
  days?: Day[];
}

export interface Day {
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
}
