import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class ApiTestService {
	private readonly staffNames: string[] = [
		"Yuzrie",
		"Hamzi",
		"Desmond",
		"Arthur",
		"Jaclyn",
		"Ezly",
		"Lily",
		"Edmund",
		"Louis",
		"Simon",
		"Voon",
		"Christie",
		"Yvonne",
		"Koh",
	];

	private readonly API_URL = "http://127.0.0.1:8000";

	http: HttpClient;

	httpOptions = {
		headers: new HttpHeaders({
			"Content-Type": "application/json",
		}),
	};

	constructor(httpClient: HttpClient) {
		this.http = httpClient;
	}

	public getApiTest() {
		return this.http.get<any>(`${this.API_URL}/api/api-test`);
	}

	public setApiTest(keyword: string) {
		return this.http.post<any>(`${this.API_URL}/api/api-test-post`, {
			name: keyword,
		});
	}

	public getAllStaff(): Observable<string[]> {
		return of(this.staffNames);
	}
}
