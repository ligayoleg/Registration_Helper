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
  id?: number;
  name?: string;
  type?: string;
  days?: [];
}
