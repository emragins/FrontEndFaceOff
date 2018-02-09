import { Component } from '@angular/core';
import { ChuckyService } from "./chucky.service";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app';
  categories = [];
  category = "";
  jokeText = "";

  constructor(private chuckyService: ChuckyService) {
  }

  setCategory(cat: string) {
    this.category = cat;

    this.chuckyService.getJokeFromCategory(this.category)
      .subscribe(r => this.jokeText = <string>r.value);
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {

    this.chuckyService.getCategories()
      .map(x => x.sort())
      .subscribe(c => this.categories = c)
      ;
  }
}
