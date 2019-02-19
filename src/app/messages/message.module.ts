import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { MessageComponent } from './message.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
	{
    path: 'messages',
    component: MessageComponent,
    outlet: 'popup'
	},

];

@NgModule({
  imports: [
    SharedModule,
		RouterModule.forChild(routes)
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }