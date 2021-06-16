import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { classmates } from '../core/classmates';

@Component({
  selector: 'app-classmate',
  templateUrl: './classmate.page.html',
  styleUrls: ['./classmate.page.scss'],
})
export class ClassmatePage implements OnInit {

  private classmateId: string;
  private classmate = {};

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.classmateId = params.get('id');
    this.classmate = classmates[this.classmateId];
  }

}
