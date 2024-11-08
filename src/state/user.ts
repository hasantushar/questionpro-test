import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: {name: 'Tushar', email: 'tushar@gmail.com'},
  update: (newUser) => set({ user: newUser }),
}))

export default useUserStore