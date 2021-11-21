import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {
@Input() taskName: string;
@Input() taskDesc: string;
@Input() fullTask: {project: string, description: string};
@Input() taskID: number;
  constructor() {
   
   }

  ngOnInit(): void {
    console.log("taskitem.component taskName = ", this.taskName);
    console.log("taskitem.component taskDesc = ", this.taskDesc);
    console.log("taskitem.component fullTask = ", this.fullTask);
  }

}
