import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Store, StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { reducers } from './state';
import { UserEffects } from './state/user/user.effects';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),    
    EffectsModule.forRoot([
     UserEffects
    ]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx tracker state', logOnly: environment.production
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
