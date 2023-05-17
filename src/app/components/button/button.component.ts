import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() btnClick: EventEmitter<Task>= new EventEmitter();


  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
    console.log("add clicked")
    this.taskService.addTask();
  }
}
