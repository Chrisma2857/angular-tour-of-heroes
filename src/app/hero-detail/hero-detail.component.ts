import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
// 一个 Angular 的服务，用来与浏览器打交道。可用来导航回上一个视图。
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot 是一个路由信息的静态快照
    // paramMap 是一个从 URL 中提取的路由参数值的字典。 "id" 对应的值就是要获取的英雄的 id。
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
