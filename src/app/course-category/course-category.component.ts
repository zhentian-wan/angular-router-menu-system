import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CoursesCategoryComponent implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
        (p) => this.id = p['id']
    )
  }

  ngOnInit() {

  }

}
