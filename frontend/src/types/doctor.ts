export interface Doctor {
  id: string;
  name: string;
  initials: string;
  specialty: string;
  experience: number;
  rating: number;
  todayCount: number;
  monthCount: number;
  availability: string;
  onLeave: boolean;
}
