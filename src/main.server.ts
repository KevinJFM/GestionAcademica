import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppComponent } from './app/app.component';
=======
import { AppComponent } from './app/utils/app.component';
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
