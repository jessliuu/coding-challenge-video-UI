import ViewHome from "./Views/ViewHome";
import ViewNoMatch from "./Views/ViewNoMatch";
import ViewOverview from "./Views/ViewOverview";
import ViewSingleVideo from "./Views/ViewSingleVideo";
import { Routes, Route, useNavigate } from "react-router-dom";
import { VideoContextProvider } from "./Contexts/VideoContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  // const [showModal, setShowModal] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    redirectTo("/browse");
    setIsAuthenticated(true);
  };
  const handleLogout = () => setIsAuthenticated(false);
  const redirectTo = useNavigate();

  return (
    <div className="App">
      <VideoContextProvider>
        <h1>Video UI</h1>
        {isAuthenticated ? (
          <Button onClick={handleLogout}>Sign Out</Button>
        ) : (
          <div className="modalBackground">
            <div className="modalContainer">
              <h4>Thank you for visiting us!</h4>
              <div className="login-btn-container">
                <Button
                  className="login-btn"
                  variant="outline-dark"
                  onClick={handleLogin}
                >
                  <i className="fab fa-facebook-f"></i>
                  <span> Log in with Facebook</span>
                </Button>

                <Button
                  className="login-btn"
                  variant="outline-dark"
                  onClick={handleLogin}
                >
                  <i className="fab fa-google"></i>
                  <span> Log in with Google</span>
                </Button>
                <Button
                  className="login-btn"
                  variant="outline-dark"
                  onClick={handleLogin}
                >
                  <i className="fab fa-twitter"></i>
                  <span> Log in with Twitter</span>
                </Button>
              </div>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<ViewHome />} />
          <Route
            path="/browse"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ViewOverview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/browse/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ViewSingleVideo />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ViewNoMatch />} />
        </Routes>
      </VideoContextProvider>
    </div>
  );
}

export default App;
