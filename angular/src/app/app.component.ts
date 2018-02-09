import { Component } from '@angular/core';
import { ChuckyService } from "./chucky.service";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app';
  categories = [];
  category = "";

  constructor(private chuckyService: ChuckyService) {
  }

  setCategory(cat: string) {
    debugger
    this.category = cat;
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.chuckyService.getCategories()
      .subscribe(c => this.categories = c);
  }
}
