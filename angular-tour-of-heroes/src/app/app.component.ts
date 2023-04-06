import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartSpinner, StopSpinner } from './state/spinner/spinner.actions';
import { Subscription } from 'rxjs';
import { AppState } from './state';
import { Store } from '@ngrx/store';
import { UserLoad } from './state/user/user.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  subscription: Subscription = new Subscription();
  title = 'angular-tour-of-heroes';
  
  constructor(
    private store: Store<AppState>
  ) {
    store.select('user').subscribe(res => {
      setTimeout(() => {
        store.dispatch(new StopSpinner());
      }, 5000);
      
    });
  }
  
  ngOnInit(): void {
    debugger;
    const url = environment.origin;

    this.store.dispatch(new StartSpinner());
    this.store.dispatch(new UserLoad(url));



  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
