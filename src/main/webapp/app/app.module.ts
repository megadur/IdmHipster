import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { IdmaHipsterSharedModule } from 'app/shared/shared.module';
import { IdmaHipsterCoreModule } from 'app/core/core.module';
import { IdmaHipsterAppRoutingModule } from './app-routing.module';
import { IdmaHipsterHomeModule } from './home/home.module';
import { IdmaHipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    IdmaHipsterSharedModule,
    IdmaHipsterCoreModule,
    IdmaHipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    IdmaHipsterEntityModule,
    IdmaHipsterAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class IdmaHipsterAppModule {}
