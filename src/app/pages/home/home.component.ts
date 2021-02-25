import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public authSvc: AuthService
    ) {}

  ngOnInit(): void {}


  reload(): void{
    this.document.location.reload();
  }

}
