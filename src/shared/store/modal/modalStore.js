import { create } from "zustand";
import { MODAL_NAMES } from "@/shared/constants/modalNames.js";

// Ініціалізація: всі модалки = false
const initialState = Object.values(MODAL_NAMES).reduce(
  (acc, name) => ({ ...acc, [name]: false }),
  {},
);

export const useModalStore = create((set) => ({
  ...initialState,

  openModal: (name) => set({ [name]: true }),
  closeModal: (name) => set({ [name]: false }),
  toggleModal: (name) => set((state) => ({ [name]: !state[name] })),
}));
