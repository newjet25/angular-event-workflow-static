import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  workflows=[
    {name:"eAlert-workflow",coreappl:"Core",description:"workflow1 description"},
    {name:"eDelivery-workflow",coreappl:"Core",description:"workflow2 description"},
    {name:"Document-workflow",coreappl:"Doc Solutions",description:"workflow3 description"}
  ];
  constructor() { }
  public getWorkflows():Array<{name,coreappl,description}>{
          return this.workflows;
  }

  public createContact(workflow:{name,coreappl,description})
  {
    this.workflows.push(workflow);
  }
}
