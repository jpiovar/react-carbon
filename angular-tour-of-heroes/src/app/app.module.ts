import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Store, StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { effects, reducers } from './state';
import { UserEffects } from './state/user/user.effects';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NavigationActionTiming, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer, MergedRouterStateSerializer } from './shared/utils/routerStateSerializer';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),    
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      name: 'NgRx tracker state', logOnly: isDevMode()
    }),
    StoreRouterConnectingModule.forRoot({
      // serializer: CustomSerializer,         // contains router: { state: { url, params, queryParams }, navigationId }
      serializer: MergedRouterStateSerializer, // contains router: { state: { url, params, queryParams, data }, navigationId }
      navigationActionTiming: NavigationActionTiming.PostActivation
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
