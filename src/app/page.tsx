'use client'
import { useAppStore } from '@/store/appStore'
import Step1Home from '@/components/steps/Step1Home'

export default function Home() {
  const currentStep = useAppStore(state => state.currentStep)
  
  return (
    <main>
      {currentStep === 0 && <Step1Home />}
      {currentStep > 0 && <div className="p-6">Paso {currentStep}</div>}
    </main>
  )
}
