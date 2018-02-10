import { Component } from '@angular/core';
import { ChuckyService } from "./chucky.service";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

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

  cycleRandomJokes = true;
  randomJokeText = "";

  constructor(private chuckyService: ChuckyService, ) {
  }


  ngOnInit() {
    this.getCategories();
    this.loopRandomJokes();
  }

  loopRandomJokes() {
    Observable.timer(0, 10000)
      .subscribe(ticks => {
        if (this.cycleRandomJokes) {
          this.updateRandomJoke();
        }
      });
  }

  updateRandomJoke() {
    this.chuckyService.getRandomJoke()
      .subscribe(j => this.randomJokeText = j.value);
  }


  setCategory(cat: string) {
    this.category = cat;

    this.chuckyService.getJokeFromCategory(this.category)
      .subscribe(r => this.jokeText = <string>r.value);
  }


  getCategories(): void {

    this.chuckyService.getCategories()
      .map(x => x.sort())
      .subscribe(c => this.categories = c)
      ;
  }
}
