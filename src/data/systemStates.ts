import { SystemStateOption } from '../types'

export const systemStates: SystemStateOption[] = [
  {
    id: 'clarity',
    label: 'We need clarity',
    description: 'Perception, decisions, or communication is foggy'
  },
  {
    id: 'challenge',
    label: 'We need challenge',
    description: 'The team is in a groove but may be cruising'
  },
  {
    id: 'connection',
    label: 'We need connection',
    description: 'Energy, communication, or spacing feels fragmented'
  },
  {
    id: 'stability',
    label: 'We need stability',
    description: 'Errors, collapses, or panic are happening too fast'
  },
  {
    id: 'flow',
    label: 'We need flow',
    description: 'Rhythm is choppy; play lacks continuity'
  }
]
