export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type AppointmentStatus = "confirmed" | "pending" | "cancelled" | "completed";

export interface SelectOption {
  label: string;
  value: string;
}
