import { Component, OnInit } from '@angular/core';
import { ClaimService, UserService, User, DocumentService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {
  claimId: String = '';

  claimDetails: ClaimDetails;
  currentUser: User;
  readyDocuments: any[];

  constructor(
    private claimService: ClaimService,
    private userService: UserService,
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.claimId = data[data.length - 1].path;
      this.documentService.getDocuments(this.claimId).subscribe(
        documentData => {
          this.readyDocuments = documentData
          console.log(documentData)
      })
    });
    this.claimService.getClaimDetail(this.claimId).subscribe(
      data => {
        this.claimDetails = {
          id: data.id,
          created_at: data.created_at,
          request_person_id: data.request_person.email,
          status: data.status,
          dst_city: data.claim_data.dst_city,
          dst_country: data.claim_data.dst_country,
          dst_organization: data.claim_data.dst_organization,
          goal: data.claim_data.goal,
          start_date: data.claim_data.start_date,
          finish_date: data.claim_data.finish_date,
          term: data.claim_data.term,
          financial_source: data.claim_data.financial_source,
          transport: data.claim_data.transport,
          head_of_department: data.claim_data.head_of_department
        }
      }
    );
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }

  accept() {
    this.claimService.acceptClaim(this.claimId).subscribe(
      data => {
        this.claimDetails.status = 'accepted';
      }
    )
  }

  reject() {
    this.claimService.rejectClaim(this.claimId).subscribe(
      data => {
        this.claimDetails.status = 'rejected';
      }
    )
  }

  createDocuments() {
    this.documentService.generateDocuments(this.claimId).subscribe(
      data => console.log(data)
    )
  }

  getDocument(filename) {
    this.documentService.getDocument(filename).subscribe(
      data => console.log(data)
    )
  }

}

interface ClaimDetails {
  id: string;
  created_at: number;
  request_person_id: string;
  status: string;
  dst_city: string;
  dst_country: string;
  dst_organization: string;
  goal: string;
  start_date: number;
  finish_date: number;
  term: number;
  financial_source: string;
  transport: string;
  head_of_department: string;
}
