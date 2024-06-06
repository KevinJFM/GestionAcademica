import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
<<<<<<< HEAD
import { appConfig } from './app.config';
=======
import { appConfig } from './utils/app.config';
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
