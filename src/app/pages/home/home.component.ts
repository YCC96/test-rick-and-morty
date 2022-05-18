import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadItems } from 'src/app/store/actions';
import { tableHeader } from './json-insumos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
  }

  async redirectTo(item: {titleList: string, catalog: "character" | "location" | "episode"}) {
    this.store.dispatch(loadItems({...item, tableHeaders: tableHeader[item.catalog]}));
    this.router.navigate(['list']);
  }


}
