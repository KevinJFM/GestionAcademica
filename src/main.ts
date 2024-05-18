import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/utils/app.config';
import { AppComponent } from './app/utils/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
