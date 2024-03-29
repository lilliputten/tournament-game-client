/** @module types
 *  @since 2023.03.05, 04:16
 *  @changed 2023.03.19, 02:21
 */

import { AnyAction, Reducer } from 'redux';

import { TRecordsTable } from '@/core/types';

export interface TRecordsTableState {
  resultsTable?: TRecordsTable;

  // State...
  loadingCount: number;
  isLoading: boolean;
  hasInited: boolean;
  error?: Error;
}

export type TRecordsTableReducerType = Reducer<TRecordsTableState, AnyAction>;
