import { create } from 'zustand'

interface CoverState {
  currentCoverId: number
  setCurrentId: (id: number) => void
}

export const useCurrentCover = create<CoverState>(set => ({
  currentCoverId: 0,
  setCurrentId: (newId: number) => set({ currentCoverId: newId }),
}))
