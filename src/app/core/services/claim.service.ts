import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(
    private apiService: ApiService
  ) { }

  getClaims() {
    return this.apiService.get('/claims')
      .pipe(map(data => {
        const result = []
        data.forEach(el => {
          result.push({
            position: el.id,
            created_at: el.created_at,
            status: el.status,
            details: `/claim/${el.id}`
          })
        });
        return result
      }))
  }

  getClaimDetail(claim_id) {
    return this.apiService.get(`/claims/${claim_id}`)
  }

  createClaim(payload) {
    return this.apiService.post('/claims', payload)
  }

  acceptClaim(claim_id) {
    return this.apiService.put(`/claims/${claim_id}/accept`)
  }

  rejectClaim(claim_id) {
    return this.apiService.put(`/claims/${claim_id}/reject`)
  }
}
