import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoadItems, selectTitleList } from 'src/app/store/selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  selectTitleList$: Observable<any> = new Observable();
  configCatalog$: Observable<any> = new Observable();
  title = "";

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.selectTitleList$ = this.store.select(selectTitleList);
    this.configCatalog$ = this.store.select(selectLoadItems);
  }

}
