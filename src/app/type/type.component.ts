import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
animal='did not do anything';
constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.animal = this.route.snapshot.paramMap.get("animal")
  }

}
