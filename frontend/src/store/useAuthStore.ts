import {create} from "zustand";

type UserType = {
  email: string;
  fullName: string;
  id: string;
  role: string;
};

type AuthStore = {
  user: UserType | null;
  isAuth: boolean;
  setUser: (data: UserType | null) => void;
  setIsAuth: (val: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuth: false,
  setUser: (data: UserType | null) => set({user: data, isAuth: true}),
  setIsAuth: (auth: boolean) => set({isAuth: auth}),
}))