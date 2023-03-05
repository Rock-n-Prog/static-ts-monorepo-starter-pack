import 'react-i18next';
import common from './translations/en/common.json';
import forms from './translations/en/forms.json';
import index from './translations/en/index.json';
import hello from './translations/en/hello.json';
import users from './translations/en/users.json';

// If editing here, remember to check defaults in 'types' directory
declare module 'react-i18next' {
  /* eslint-disable-next-line prefer-type-alias/prefer-type-alias,no-unused-vars */
  interface CustomTypeOptions {
    readonly defaultNs: 'common';
    readonly resources: Readonly<{
      common: typeof common;
      forms: typeof forms & typeof common;
      index: typeof index & typeof common;
      hello: typeof hello & typeof common;
      users: typeof users & typeof common;
    }>;
  }
}
