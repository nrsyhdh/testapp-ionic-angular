import { Component } from "@angular/core";
import { ApiTestService } from "./../service/api-test.service";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	todos: any[] = [];
	title: string;
	constructor(private apiService: ApiTestService) {}

	ionViewWillEnter() {
		this.getTodo();
	}

	public getTodo() {
		this.apiService.getApiTest().subscribe((val) => {
			// console.log(val);
			this.title = val.title;
			console.log(this.title);

			this.todos = val.todo;
			console.log(val.todo);
		});
	}
}
