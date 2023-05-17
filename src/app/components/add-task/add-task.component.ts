import { Component, Output, EventEmitter} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string | any;
  day: string | any;
  reminder: boolean = false;
  
  constructor(private taskService: TaskService) {}
  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newTask);
    //@todo = emit event
    this.text = '';
    this.day = '';
    this.reminder = false;
    // this.taskService.addTask(newTask).subscribe();
  }
}
