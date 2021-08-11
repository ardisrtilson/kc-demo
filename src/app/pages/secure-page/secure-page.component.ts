import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-secure-page',
  templateUrl: './secure-page.component.html',
  styleUrls: ['./secure-page.component.scss']
})
export class SecurePageComponent implements OnInit {

  user = '';

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
    console.log(this.keycloakService)
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200/secure');
  }
}