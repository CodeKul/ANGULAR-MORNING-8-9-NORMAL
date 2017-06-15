import { RemoteService } from './services/remote.service';
import { BackendService } from './services/backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TomComponent } from './tom/tom.component';
import { JerryComponent } from './tom/jerry.component';
import { TweetyComponent } from './tom/tweety.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ViewAndContentComponent } from './view-and-content/view-and-content.component';
import { PiViewComponent } from './view-and-content/pi-view.component';
import { PiContentComponent } from './view-and-content/pi-content.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReSizerDirective } from './directives/re-sizer.directive';
import { NotIfDirective } from './directives/not-if.directive';
import { ServicesComponent } from './services/services.component';
import { IotComponent } from './services/iot.component';
import { BitcoinComponent } from './services/bitcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    TomComponent,
    JerryComponent,
    TweetyComponent,
    DatabindingComponent,
    ViewAndContentComponent,
    PiViewComponent,
    PiContentComponent,
    DirectivesComponent,
    ReSizerDirective,
    NotIfDirective,
    ServicesComponent,
    IotComponent,
    BitcoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BackendService, RemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
