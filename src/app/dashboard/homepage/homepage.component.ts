import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit {
  widgets: any;
  tasks: any[];

  // onTasksChanged: Subscription;

  constructor() {
    // this.widgets = this.dataService.widgets;

    // this.onTasksChanged = this.dataService.onTasksChanged.subscribe((tasks) => {
    //   this.tasks = tasks;
    // });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //this.onTasksChanged.unsubscribe();
  }

}
