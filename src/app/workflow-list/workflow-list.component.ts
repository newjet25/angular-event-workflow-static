import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css']
})
export class WorkflowListComponent implements OnInit {
workflows;
events = new Array<any>();
selectedWorkflow;
  constructor(public dataService:DataService, public eventService: EventService) { }
  
  ngOnInit() {
    this.workflows=this.dataService.getWorkflows();
    this.eventService.getEvents().subscribe((response) => {
      this.events = response});
    console.log(this.workflows)
  }

  public selectWorkflow(workflow)
  {
    this.selectedWorkflow="Sample";
    console.log(this.events);
  }

}

// import { Component, OnInit } from "@angular/core";

// import { List } from "../shared/list.model";

// @Component({
//     selector: 'app-workflow-list',
//     templateUrl: './workflow-list.component.html',
//     styleUrls: ['./workflow-list.component.css']
// })
// export class WorkflowListComponent implements OnInit {
//     full_list: List[] =[
//         new List('policy-eAlert-workflow'),
//         new List('policy-eDelivery-workflow'),
//         new List('policy-contractPackage-workflow')
//     ];

//     constructor(){  }
    
//     show_list = this.full_list;

//     ngOnInit() {
        
//     }
// }