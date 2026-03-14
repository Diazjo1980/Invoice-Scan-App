'use client'
import { FiCamera } from 'react-icons/fi'
import { useAppStore } from '@/store/appStore'

export default function Step1Home() {
  const nextStep = useAppStore(state => state.nextStep)
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-2 text-4xl font-bold text-text">Bill Splitter</h1>
        <p className="mb-8 text-lg text-textLight">Divide facturas y cobra fácilmente</p>
        
        <div className="mb-8 flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
            <FiCamera size={64} className="text-primary" />
          </div>
        </div>
        
        <button
          onClick={nextStep}
          className="w-full rounded-xl bg-primary py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-primary/90"
        >
          Nueva División
        </button>
        
        <div className="mt-8 text-sm text-textLight">
          <p>✓ Captura facturas con tu cámara</p>
          <p>✓ Divide montos automáticamente</p>
          <p>✓ Envía por WhatsApp instantáneamente</p>
        </div>
      </div>
    </div>
  )
}
