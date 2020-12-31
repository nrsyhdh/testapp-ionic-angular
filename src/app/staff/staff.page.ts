import { Component } from "@angular/core";
import { ApiTestService } from "./../service/api-test.service";

@Component({
	selector: "app-staff",
	templateUrl: "./staff.page.html",
	styleUrls: ["./staff.page.scss"],
})
export class StaffPage {
	public allStaff: string[] = [];
	isLoading: boolean = false;
	copyOfStaff: string[] = []; //for searching purpose

	constructor(private testService: ApiTestService) {
		this.getStaffs();
	}

	private getStaffs() {
		this.testService.getAllStaff().subscribe((allStaff: string[]) => {
			this.allStaff = allStaff;

			this.copyOfStaff = Array.from(this.allStaff);
		});
	}

	searchResult(/* event: any */ allStaff: string[]) {
		// console.log(event);
		this.allStaff = allStaff;
		// this.isLoading = false;
	}
}
