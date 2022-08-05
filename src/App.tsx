import { AuthProvider } from './context/AuthProvider';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import { Login } from './components/Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedLayout>
                <h1>Perfil!</h1>
              </ProtectedLayout>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
