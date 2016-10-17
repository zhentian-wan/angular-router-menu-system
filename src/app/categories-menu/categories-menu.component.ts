import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  id: string;
  constructor(route: ActivatedRoute, private router: Router) {
    route.params.subscribe(
        (params) => this.id = params['id']
    )

  }

  ngOnInit() {

  }

  nav(e, path){
    e.preventDefault();
    this.router.navigateByUrl(`/courses/(${path}//sidemenu:${path})`);
  }

}
