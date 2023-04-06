import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartSpinner, StopSpinner } from './state/spinner/spinner.actions';
import { Subscription } from 'rxjs';
import { AppState } from './state';
import { Store } from '@ngrx/store';
import { UserLoad } from './state/user/user.actions';
import { environment } from 'src/environments/environment';
import { selectSpinnerIsOn } from './state/spinner/spinner.selector';
import { selectUserData } from './state/user/user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  subscriptions: Subscription = new Subscription();
  title = 'angular-tour-of-heroes';

  constructor(
    private store: Store<AppState>
  ) {
    this.subscriptionsData();
  }

  ngOnInit(): void {
    debugger;
    this.triggerUserLoad();
  }

  triggerUserLoad(): void {
    const url = environment.origin;
    this.store.dispatch(new StartSpinner());
    this.store.dispatch(new UserLoad(url));
  }

  subscriptionsData(): void {
    this.subscriptions.add(
      // this.store.select('user').subscribe(res => {
      //   debugger;
      //   if (res?.data) {
      //     console.log('res data', res?.data);
      //     this.store.dispatch(new StopSpinner());
      //   }
      // })
      this.store.select(selectUserData).subscribe(res => {
        debugger;
        if (res) {
          console.log('user data', res);
          this.store.dispatch(new StopSpinner());
        }
      })
    );
    this.subscriptions.add(
      this.store.select(selectSpinnerIsOn).subscribe(res => {
        debugger;
        console.log(' spinnerIsOn', res);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
