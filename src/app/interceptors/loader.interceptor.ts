import { LoaderService } from './../service/loader.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    return next.handle(req).pipe(
      tap(() => {},
      () => {},
      () => {
        this.loaderService.hideLoader();
      })
    );
  }

}
