import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";
import { FormsModule } from "@angular/forms";
import { MomentModule } from "angular2-moment";

@NgModule({
	imports: [CommonModule],
	declarations: [StarComponent],
	exports: [StarComponent, CommonModule, FormsModule, MomentModule]
})
export class SharedModule {}
