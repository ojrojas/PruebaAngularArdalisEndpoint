import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './home.reducer';

export const selectFeatureHome = createFeatureSelector<fromReducer.State>(fromReducer.homeFeatureKey);

// export const selectFeatureCount = createSelector(
//   selectFeature,
//   (state: FeatureState) => state.counter
// );
