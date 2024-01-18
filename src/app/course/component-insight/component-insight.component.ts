import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-insight',
  templateUrl: './component-insight.component.html',
  styleUrls: ['./component-insight.component.scss']
})
export class ComponentInsightComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  
  message: string = 'Say Hi from parent';
  showChildComponent: boolean = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ComponentInsight ngOnChanges');
  }

  ngOnInit(): void {
    // console.log('ComponentInsight ngOnInit');
  }

  ngDoCheck(): void {
    // console.log('ComponentInsight ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    // console.log('ComponentInsight ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('ComponentInsight ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('ComponentInsight ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('ComponentInsight ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // console.log('ComponentInsight ngOnDestroy');
  }

}
