import { mockPatients } from "@/data/mock/patients";
import type { Patient } from "@/types/patient";

export const getPatients = async (): Promise<Patient[]> => {
  // --- REAL API (uncomment when backend is ready) ---
  // const { data } = await apiClient.get("/patients");
  // return data;
  // --------------------------------------------------
  return mockPatients;
};

export const getPatientById = async (id: string): Promise<Patient | undefined> => {
  // --- REAL API (uncomment when backend is ready) ---
  // const { data } = await apiClient.get(`/patients/${id}`);
  // return data;
  // --------------------------------------------------
  return mockPatients.find((item) => item.id === id);
};
