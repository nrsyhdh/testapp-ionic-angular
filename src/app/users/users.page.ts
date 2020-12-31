import { Component } from "@angular/core";
import { ApiTestService } from "./../service/api-test.service";
import { LoaderService } from "./../service/loader.service";
import { ToastService } from "./../service/toast.service";
import { Storage } from "@ionic/storage";

@Component({
	selector: "app-users",
	templateUrl: "./users.page.html",
	styleUrls: ["./users.page.scss"],
})
export class UsersPage {
	users: any[] = [];
	storage: Storage;

	constructor(
		private apiService: ApiTestService,
		private loaderService: LoaderService,
		private toastService: ToastService,
		ionicStorage: Storage
	) {
		this.storage = ionicStorage;
	}

	ionViewDidEnter() {
		// this.loaderService.presentLoading();
		this.storage.get("users").then((userData) => {
			console.log("userData:", userData);
			this.users.push({
				name: userData,
			});
			// this.loaderService.dismissLoading();
			console.log("users arr", this.users);
		});
	}

	clear() {
		this.storage.clear();
	}
}
