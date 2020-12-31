import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class ToastService {
	constructor(public toastCtrl: ToastController) {}

	async presentSuccessfulToast() {
		const toast = await this.toastCtrl.create({
			message: "POST Request Successful",
			position: "middle",
			duration: 2000,
			color: "success",
		});
		toast.present();
	}
	async presentFailedToast() {
		const toast = await this.toastCtrl.create({
			message: "POST Request Failed",
			position: "middle",
			duration: 2000,
			color: "danger",
		});
		toast.present();
	}
}
