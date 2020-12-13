import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['title', 'platform', 'genre', 'editors_choice', 'score'];
  dataSource;
  dataSourceCard;
  apiData;

  selectedView: string = 'table';

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe((res:any)=>{
      res.shift();
      this.apiData = res;
      this.dataSource =  new MatTableDataSource(this.apiData);
      this.dataSource.sort = this.sort;
      this.dataSourceCard = this.apiData;
    });
  }

  filterData(searchText){
    let filteredResult = this.apiData.filter(data => data.title.toLowerCase().indexOf(searchText.toLowerCase()) >-1);
    this.dataSource =  new MatTableDataSource(filteredResult);
    this.dataSourceCard = filteredResult;
  }

  setViewAs(selectedView){
    this.selectedView = selectedView;
  }


}