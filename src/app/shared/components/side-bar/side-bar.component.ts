import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs-Service.service';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private gifsService : GifsService) { }


  get tags () : string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ): void {
    this.gifsService.searchTag(tag);
  }

}
