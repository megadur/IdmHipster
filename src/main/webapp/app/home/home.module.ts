import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IdmaHipsterSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [IdmaHipsterSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class IdmaHipsterHomeModule {}
