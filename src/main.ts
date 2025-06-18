/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import Config from './app/root.config';
import App from './app/root';

bootstrapApplication(App, Config)
  .catch((err) => console.error(err));
