import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Profile } from '..';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class ProfileService {

    constructor(
        private apiService: ApiService,
        private http: HttpClient
    ) {}

    getProfile(user) {
        return this.apiService.get('/users/' + user.id)
            // .pipe(map(
            //     data => {
            //         this.profileSubject.next(user)
            //     }
            // ))
    }
}
