import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../pipes/translate.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-breaking-news-banner',
  templateUrl: './breaking-news-banner.component.html',
  styleUrls: ['./breaking-news-banner.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslatePipe, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BreakingNewsBannerComponent implements OnInit, OnDestroy {
  showBanner = false;
  private subscription?: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkSystemStatus();
    // Check status every 5 minutes to keep banner up-to-date
    this.subscription = timer(0, 300000).subscribe(() => {
      this.checkSystemStatus();
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private checkSystemStatus() {
    // Try to check the system status page for any incidents
    // Note: This might need CORS handling or a proxy endpoint
    this.http
      .get('https://corporates-status.thomsonreuters.com/api/v2/status.json')
      .pipe(
        catchError((error) => {
          console.log(
            'Could not fetch system status, assuming no incidents:',
            error
          );
          return of({ page: { status: 'all_systems_operational' } });
        })
      )
      .subscribe((response: any) => {
        // Show banner if there are any incidents or non-operational status
        this.showBanner = response?.page?.status !== 'all_systems_operational';
      });
  }
}
