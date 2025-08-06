// Type definitions for learning paths data
export interface Module {
  title: string
  duration: string
}

export interface Step {
  id: string
  title: string
  modules?: Module[] | number
  totalHours?: number
}

export interface VendorPath {
  steps: Step[]
}

export interface LearningPaths {
  google: VendorPath
  amazon: VendorPath | {}
  microsoft: VendorPath | {}
}

export type VendorName = 'google' | 'amazon' | 'microsoft'
