import { Application } from '@nativescript/core';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './fonts/font-awesome.css',
};
TNSFontIcon.loadCss();

Application.setResources({ fonticon });

Application.run({ moduleName: 'app-root' });