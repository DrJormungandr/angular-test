import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

constructor() { }

  private _isShown = new BehaviorSubject(false);

  public isShown: Observable<boolean> = this._isShown.asObservable();

  public showLoader() {
    this._isShown.next(true);
  }

  public hideLoader() {
    this._isShown.next(false);
  }

}
