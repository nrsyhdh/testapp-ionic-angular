import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiTestService } from "../../service/api-test.service";
import { LoaderService } from "../../service/loader.service";
import { ToastService } from "../../service/toast.service";

@Component({
	selector: "app-create",
	templateUrl: "./create.page.html",
	styleUrls: ["./create.page.scss"],
})
export class CreatePage {
	newUser: string;
	storage: Storage;
	users: any[] = [];

	constructor(
		private apiService: ApiTestService,
		private loaderService: LoaderService,
		private toastService: ToastService,
		public activatedRoute: ActivatedRoute,
		public router: Router,
		ionicStorage: Storage
	) {
		this.storage = ionicStorage;
	}

	public setUser(keyword: string) {
		this.loaderService.presentLoading();

		this.apiService.setApiTest(keyword).subscribe(
			(response) => {
				// console.log(response);

				this.newUser = response.name;
				console.log("New User:", this.newUser);

				this.storage.set("users", this.newUser);

				this.loaderService.dismissLoading();

				this.toastService.presentSuccessfulToast();
			},
			(error) => {
				console.log("err:", error);

				this.loaderService.dismissLoading();

				this.toastService.presentFailedToast();
			}
		);
		this.router.navigate([`/users`]);
	}
}
