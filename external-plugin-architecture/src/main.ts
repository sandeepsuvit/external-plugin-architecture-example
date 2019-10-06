import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// For external plugins to work - start
declare const SystemJS;

import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularForms from '@angular/forms';

SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
SystemJS.set('@angular/forms', SystemJS.newModule(angularForms));
// For external plugins to work - end


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
