'use client';

import { TrainContext } from '@/context/trainContext';
import { useState } from 'react';
import type { TrainContextTypes } from '@/context/trainContext';

export default function TrainProviderComponent({ children }: { children: React.ReactNode }) {
  const [trainState, setTrainState] = useState<TrainContextTypes['trainState']>('running');
  return (
    <TrainContext.Provider value={{ trainState, setTrainState }}>{children}</TrainContext.Provider>
  );
}
