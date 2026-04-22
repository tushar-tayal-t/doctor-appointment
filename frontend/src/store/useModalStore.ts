"use client";

import { create } from "zustand";

interface ModalState {
  modalType: "appointment-detail" | null;
  modalData: Record<string, string> | null;
  openModal: (modalType: "appointment-detail", modalData: Record<string, string>) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  modalData: null,
  openModal: (modalType, modalData) => set({ modalType, modalData }),
  closeModal: () => set({ modalType: null, modalData: null }),
}));
