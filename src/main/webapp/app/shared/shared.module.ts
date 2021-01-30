import { NgModule } from '@angular/core';
import { IdmaHipsterSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [IdmaHipsterSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LoginModalComponent],
  exports: [IdmaHipsterSharedLibsModule, AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
})
export class IdmaHipsterSharedModule {}
