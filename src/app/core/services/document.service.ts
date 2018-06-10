import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private apiService: ApiService
  ) { }

  getDocuments(claim_id) {
    return this.apiService.get(`/documents/${claim_id}`)
  }

  getDocument(filename) {
    return this.apiService.get(`/document/${filename}`)
  }

  generateDocuments(claimId) {
    const payload = { claim_id: claimId}
    return this.apiService.post('/documents', payload)
  }

}
