import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tableHeader } from 'src/app/pages/home/json-insumos';
import { loadData, loadItems } from 'src/app/store/actions';
import { selectListItems, selectTableHeaders, selectTitleList } from 'src/app/store/selectors';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  selectTitleList$: Observable<any> = new Observable();
  tableHeaders$: Observable<any> = new Observable();
  selectListItems$: Observable<any> = new Observable();
  listItems = [];
  listItemsBU = [];
  title = '';

  constructor(
    private store: Store<any>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.selectTitleList$ = this.store.select(selectTitleList);
    this.selectTitleList$.subscribe(title => this.title = title)
    this.tableHeaders$ = this.store.select(selectTableHeaders);
    this.selectListItems$ = this.store.select(selectListItems);
    this.selectListItems$.subscribe(response => {
      if (!response || response?.length === 0) {
        // this.router.navigate(['/'])
      } else {
        this.listItems = response;
        this.listItemsBU = response;
      }
    })
  }

  selectedItem(item: any) {
    if (this.title.toLowerCase() === 'locations' || this.title.toLowerCase() === 'episodes') {
      const listCharacters = [];
      const list = this.title.toLowerCase() === 'locations' ? 'residents' : 'characters';
      for (const character of item[list]) {
        listCharacters.push(character.replace('https://rickandmortyapi.com/api/character/', ''));
      }
      this.store.dispatch(loadItems({itemSelected: item, titleList: `Characters in ${item.name}`, catalog: `character/${listCharacters.join(',')}`, tableHeaders: tableHeader.character}));
    } else {
      this.store.dispatch(loadData({itemSelected: item}));
      this.router.navigate(['character-detail'])
    }
  }

  search(value: string) {
    const attrs: any = {
      characters: ['name', 'status', 'species', 'gender'],
      locations: ['name', 'type', 'dimension'],
      episodes: ['name', 'air_date', 'episode'],
    }
    if (value === '') {
      this.listItems = JSON.parse(JSON.stringify(this.listItemsBU));
    } else {
      const finded = this.listItemsBU.filter( (item: any) => {
        let flag = false;
        for (const att of attrs[this.title.toLowerCase()]) {
          if (item[att].toLowerCase().includes(value)) {
            flag = true;
          }
        }
        return flag;
      });
      this.listItems = finded;

    }
  }

}
