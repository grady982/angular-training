import { 
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
  Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() state: string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges');
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }
  

}
