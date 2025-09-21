import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowListComponent } from "./workflow-list/workflow-list.component";
import { DataService } from './data.service';
import { EventService } from './event.service';

const routes:Routes=[
  {path:"",pathMatch:"full",redirectTo:"home"},
  {path:"home",component:HomeComponent},
  {path:"workflow-list",component:WorkflowListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WorkflowListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService, EventService],
  bootstrap: [AppComponent]
})

export class AppModule {  }