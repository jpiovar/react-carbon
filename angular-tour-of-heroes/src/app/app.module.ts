import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Store, StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { reducer as spinner } from './state/spinner/spinner.reducer';
import { reducers } from './state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),    
    StoreDevtoolsModule.instrument({
      name: 'NgRx tracker state', logOnly: true
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
