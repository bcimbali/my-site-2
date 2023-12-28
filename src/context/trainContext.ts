import { createContext, Dispatch, SetStateAction } from 'react';

export type TrainContextTypes = {
  trainState: 'running' | 'paused';
  setTrainState: Dispatch<SetStateAction<'running' | 'paused'>>;
};

export const TrainContext = createContext<TrainContextTypes>({
  trainState: 'running',
  setTrainState: () => {}
});
