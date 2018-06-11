import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }

  getDocuments(claim_id) {
    return this.apiService.get(`/documents/${claim_id}`)
  }

  getDocument(filename) {
    return this.http.get(`http://localhost:5000/api/v1/document/${filename}`, {responseType: 'blob'})
  }

  generateDocuments(claimId) {
    const payload = { claim_id: claimId}
    return this.apiService.post('/documents', payload)
  }

}
