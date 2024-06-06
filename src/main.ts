import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
=======
import { appConfig } from './app/utils/app.config';
import { AppComponent } from './app/utils/app.component';
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
