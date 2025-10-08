import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LayoutComponent } from './app/layout/layout';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(LayoutComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
