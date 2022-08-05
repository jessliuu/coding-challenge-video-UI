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

  // const handleSignIn = () => {
  //   setShowModal(false);
  //   console.log("showModal", showModal);
  //   setIsAuthenticated(true);
  //   console.log("isAuth", isAuthenticated);
  //   redirectTo("/browse");
  // };

  return (
    <div className="App">
      <VideoContextProvider>
        <h1>Video UI</h1>
        {isAuthenticated ? (
          <Button onClick={handleLogout}>Sign Out</Button>
        ) : (
          <div
            className="modalPart1"
            style={{ alignSelf: "center", marginBottom: "4px" }}
          >
            <Button variant="outline-dark" onClick={handleLogin}>
              Log in with Facebook
            </Button>
            <Button variant="outline-dark" onClick={handleLogin}>
              Log in with Google
            </Button>
            <Button variant="outline-dark" onClick={handleLogin}>
              Log in with Apple
            </Button>
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
