import { Component, OnInit } from '@angular/core';
import { ClaimService, UserService, User, DocumentService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {
  claimId: String = '';

  claim: any;
  currentUser: User;
  readyDocuments: any[];

  constructor(
    private claimService: ClaimService,
    private userService: UserService,
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.claimId = data[data.length - 1].path;
      this.documentService.getDocuments(this.claimId).subscribe(
        documentData => {
          this.readyDocuments = documentData;
      })
    });
    this.claimService.getClaimDetail(this.claimId).subscribe(
      data => {
        this.claim = data
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
        this.claim.status = 'accepted';
        this.toastr.success('Заявка одобрена');
      }
    )
  }

  reject() {
    this.claimService.rejectClaim(this.claimId).subscribe(
      data => {
        this.claim.status = 'rejected';
        this.toastr.success('Заявка отклонена');
      }
    )
  }

  createDocuments() {
    this.documentService.generateDocuments(this.claimId).subscribe(
      (data) => {
        this.readyDocuments = data
        this.toastr.success('Документы сгенерированы');
      }
    )
  }

  getDocument(filename) {
    this.documentService.getDocument(filename).subscribe(
      data => {
        const url = window.URL.createObjectURL(data)
        window.open(url)
      }
    )
  }

}
