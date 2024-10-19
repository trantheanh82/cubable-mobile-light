import { NavigationEntry } from '@nativescript/core';
import { CONFIG } from '../../shared/config';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = {};
}

export function onSubmit(args) {
  const page = args.object.page;
  const accessToken = page.getViewById('accessTokenInput').text;
  const errorMessageLabel = page.getViewById('errorMessage');

  // Simulating token validation (replace with actual API call)
  if (accessToken === 'valid_token') {
    const navigationEntry = {
      moduleName: 'pages/workspaces/workspaces-page',
      context: { accessToken: accessToken },
      clearHistory: true
    };
    page.frame.navigate(navigationEntry);
  } else {
    errorMessageLabel.text = 'Invalid access token. Please try again.';
  }
}