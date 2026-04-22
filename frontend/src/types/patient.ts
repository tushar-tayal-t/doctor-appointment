export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  contact: string;
  condition: string;
  lastVisit: string;
  nextAppointment: string;
}
