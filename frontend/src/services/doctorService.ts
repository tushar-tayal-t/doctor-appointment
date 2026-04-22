import { mockDoctors } from "@/data/mock/doctors";
import type { Doctor } from "@/types/doctor";

export const getDoctors = async (): Promise<Doctor[]> => {
  // --- REAL API (uncomment when backend is ready) ---
  // const { data } = await apiClient.get("/doctors");
  // return data;
  // --------------------------------------------------
  return mockDoctors;
};

export const getDoctorById = async (id: string): Promise<Doctor | undefined> => {
  // --- REAL API (uncomment when backend is ready) ---
  // const { data } = await apiClient.get(`/doctors/${id}`);
  // return data;
  // --------------------------------------------------
  return mockDoctors.find((item) => item.id === id);
};
