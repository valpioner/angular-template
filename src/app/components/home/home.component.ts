import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef,
  ContentChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [AuthService],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input('user') systemUser: { type: string; name: string };
  @Input() age: number;

  @Output() onChange = new EventEmitter<any>();

  // reference to #myDiv in template
  @ViewChild('myDiv', { static: false }) div: ElementRef;

  // reference to #contentParagraph in ng-content that was passed from parent component
  @ContentChild('contentParagraph') paragraph: ElementRef;

  subscription: Subscription;
  items = [{ name: 'arr Item #1' }, { name: 'arr Item #2' }];

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Called as first hook and after a bound input propery changes
  ngOnChanges(): void {}
  // Called once the component is initialized, called after constructor, Can't access ViewChild # elements
  ngOnInit(): void {
    this.authService.logCurrentUser();

    // Cross component communication (traditional way instead of using Input/Output chain):
    {
      // subscribe to service event
      this.authService.userLoggedIn.subscribe(
        (user: { name: string; age: number }) => console.log(user)
      );
      // trigger service event
      this.authService.userLoggedIn.emit({ name: 'xz', age: 55 });
    }

    // HOW TO GET queryParams & fragment
    {
      // this.route.snapshot.queryParams // wont react to changes
      // this.route.snapshot.fragment // wont react to changes
      this.route.queryParams.subscribe((params) => {
        console.log(params);
      });
      this.route.fragment.subscribe((fragment) => {
        console.log(fragment);
      });
    }
  }
  // Called during every change detection run
  ngDoCheck(): void {}
  // Called after projected content (ng-content) initialized
  ngAfterContentInit(): void {}
  // Called every time projected content has been checked
  ngAfterContentChecked(): void {}
  // Called after component's view (& child views) has been initialized, Can access ViewChild # elements
  ngAfterViewInit(): void {}
  // Called every time the view (and child views) has been checked
  ngAfterViewChecked(): void {}
  // Called once component is about to destroy
  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  onChildChanged(event: any): void {}

  setValue() {
    this.age = 28;
  }

  loadChild() {
    this.router.navigate(['child'], {
      // relativeTo: this.route // for relative path
      queryParams: { param: '2' },
      fragment: 'fromHome',
    });
  }
}
