import React from 'react';
import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import appRoutes from './app.routes';
import store from '@shared/redux/store';

function App() {
  const routing = useRoutes(appRoutes);

  return <Provider store={store}>{routing}</Provider>;
}

export default App;
