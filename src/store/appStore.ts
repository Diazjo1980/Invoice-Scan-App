import { create } from 'zustand'

interface AppState {
  currentStep: number
  setCurrentStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
}

export const useAppStore = create<AppState>((set) => ({
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),
}))
