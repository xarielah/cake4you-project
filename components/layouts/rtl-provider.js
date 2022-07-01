import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';

const RtlProvider = ({ children }) => {
  const cache = createCache({ key: 'css-he', stylisPlugins: [rtl] });
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default RtlProvider;
