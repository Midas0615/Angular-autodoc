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

    getProfile(user_id) {
        return this.apiService.get('/users/' + user_id);
    }

    setProfile(user_id, profileData) {
        return this.apiService.put('/users/' + user_id, profileData);
    }
}
