import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    constructor(private http: HttpClient) { }

    //Http Client get method
    public getEvents(): Observable<any> {
        const url = 'http://localhost:8015/sample-workflows';
        return this.http.get<any>(url);
    }
}