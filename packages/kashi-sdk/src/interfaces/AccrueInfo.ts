import { JSBI } from '@empireswap/core-sdk'

export interface AccrueInfo {
  interestPerSecond: JSBI
  lastAccrued: JSBI
  feesEarnedFraction: JSBI
}
