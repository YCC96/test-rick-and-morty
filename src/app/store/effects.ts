import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Injectable()
export class LoadEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('loadItems'),
    mergeMap((data: any) => this.rickAndMortyService.getCatalog(data.catalog)
      .pipe(
        map(catalog => {
          return { type: 'loadedItems', listItems: catalog.results ? catalog.results : catalog };
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private rickAndMortyService: RickAndMortyService,
  ) {}
}
