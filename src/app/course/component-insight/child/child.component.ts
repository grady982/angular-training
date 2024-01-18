import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child ngOnChanges');
  }

  ngOnInit(): void {
    console.log('Child ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Child ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    console.log('Child ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Child ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Child ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Child ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Child ngOnDestroy');
  }

}
