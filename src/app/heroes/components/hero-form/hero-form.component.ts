import { Component, OnInit } from '@angular/core';
import {Hero} from "./Classes/Hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  public powers: string[] = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  public myHero: Hero =  new Hero(42, 'SkyDog','Fetch any object at any distance',
    'Leslie Rollover');
  public model: Hero = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  public submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;
  }
}
