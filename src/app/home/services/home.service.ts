import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../store/home.reducer';
import { selectFeatureHome } from '../store/home.selectors';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private store: Store<State>) { }

  getState(): Observable<State> {
    return this.store.pipe(select(selectFeatureHome));
  }
}
