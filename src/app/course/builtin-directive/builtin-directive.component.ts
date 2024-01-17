import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-directive',
  templateUrl: './builtin-directive.component.html',
  styleUrls: ['./builtin-directive.component.scss']
})
export class BuiltinDirectiveComponent implements OnInit {

  // ngIf
  isDisplay: boolean = true;
  // ngFor
  itemList: string[] = ['Item 1', 'Item 2', 'Item 3'];

  isBlueColor: boolean = true;
  isTitle: boolean = true;
  isError: boolean = true;

  // ngCLass
  currentClasses: Record<string, boolean> = {};
  // ngStyle
  currentStyle: Record<string, string> = {};
  // ngModel
  item: string = '';
  item2: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setCurrentClass();
    this.setCurrentStyle();
  }

  onAddButtonClick() {
    this.itemList.push(`Item ${this.itemList.length + 1}`);
  }

  setCurrentClass() {
    this.currentClasses = {
      title: this.isTitle,
      'error-info': this.isError
    }
  }

  setCurrentStyle() {
    this.currentStyle = {
      'font-size': this.isTitle ? '2rem' : '12px',
      'font-weight': this.isTitle ? '600' : 'normal',
      'color': this.isError ? 'red' : 'black'
    };
  }

  getCurrentStyle() {

    console.log('getCurrentStyle');

    return {
      'font-size': this.isTitle ? '2rem' : '12px',
      'font-weight': this.isTitle ? '600' : 'normal',
      'color': this.isError ? 'red' : 'black'
    };
  }

  setUpperCaseName(event: string) {
    this.item2 = event.toLocaleUpperCase();
  }
}
