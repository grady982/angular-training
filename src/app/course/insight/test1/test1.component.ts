import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() title: string = '';


  enable: boolean = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.title}: ngOnChanges`);
  }

  ngOnInit(): void {
    console.log(`${this.title}: ngOnInit`);
  }

  ngDoCheck(): void {
    console.log(`${this.title}: ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`${this.title}: ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`${this.title}: ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`${this.title}: ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`${this.title}: ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`${this.title}: ngOnDestroy`);
  }

  getTitle() {
    console.log('getTitle');
    return this.title;
  }
}
