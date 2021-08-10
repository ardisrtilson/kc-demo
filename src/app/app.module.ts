import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SecurePageComponent } from './pages/secure-page/secure-page.component';
import { RouterModule } from '@angular/router';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'demo-realm',
        clientId: 'eris'
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25
    },
    loadUserProfileAtStartUp: true
      // initOptions: {
      //   onLoad: 'check-sso',
      //   silentCheckSsoRedirectUri:
      //     window.location.origin + '/assets/silent-check-sso.html',
      // }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SecurePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    RouterModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
