import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { loadRemoteModule } from '@microfrontends/load-remote-module';

const Remote = React.lazy(() => loadRemoteModule('remote', './Module'));

export function App() {
  return (
    <React.Suspense fallback={<>Remote app is loading...</>}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/remote">Remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/remote" element={<Remote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
