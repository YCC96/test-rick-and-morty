import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItemSelected } from 'src/app/store/selectors';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  itemSelected$: Observable<any> = new Observable();
  itemSelected: any = null;

  constructor(
    private store: Store<any>,
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.itemSelected$ = this.store.select(selectItemSelected);
    this.itemSelected$.subscribe(response => {
      if (!response || response?.length === 0) {
        // this.router.navigate(['/'])
      } else {
        this.itemSelected = response;
      }
    })
  }

  goToBack() {
    this.location.back();
  }

}
