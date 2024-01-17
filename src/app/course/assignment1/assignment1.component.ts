import { Component } from '@angular/core';
import { ToDo } from 'src/app/core/data.model';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.scss']
})
export class Assignment1Component {

  toDoList: ToDo[] = [
    {
      title: "Complete Project Proposal",
      content: "Draft and submit the project proposal before the deadline.",
      isUrgent: true,
      isFinish: false,
    },
    {
      title: "Buy Groceries",
      content: "Make a list of essential groceries and head to the supermarket.",
      isUrgent: false,
      isFinish: false,
    },
    {
      title: "Attend Team Meeting",
      content: "Join the team meeting at 2:00 PM to discuss project updates.",
      isUrgent: true,
      isFinish: false,
    },
    {
      title: "Read Chapter 5",
      content: "Read and summarize Chapter 5 for the upcoming exam.",
      isUrgent: false,
      isFinish: false,
    },
    {
      title: "Exercise",
      content: "Go for a jog or hit the gym for at least 30 minutes.",
      isUrgent: false,
      isFinish: false,
    },
  ];

  constructor() {}

  onAddClick() {
    this.toDoList.push({
      title: 'TEST',
      content: 'test test',
      isUrgent: true,
      isFinish: false
    });
  }

  onSave() {
    this.toDoList = this.toDoList.filter((item) => !item.isFinish);
  }

  onCheckboxChange(item: ToDo) {
    item.isFinish = !item.isFinish;
  }
}
