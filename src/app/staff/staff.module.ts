import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StaffPageRoutingModule } from "./staff-routing.module";

import { StaffPage } from "./staff.page";

import { SearchComponent } from "../component/search.component";

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, StaffPageRoutingModule],
	declarations: [StaffPage, SearchComponent],
})
export class StaffPageModule {}
