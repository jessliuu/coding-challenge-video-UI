import ViewLogin from "./Views/ViewLogin";
import ViewNoMatch from "./Views/ViewNoMatch";
import ViewOverview from "./Views/ViewOverview";
import ViewSingleVideo from "./Views/ViewSingleVideo";
import { Routes, Route } from "react-router-dom";
import { VideoContextProvider } from "./Contexts/VideoContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <VideoContextProvider>
        <h1>Video UI</h1>
        <Routes>
          <Route path="/" element={<ViewLogin />} />
          <Route
            path="/browse"
            element={
              <ProtectedRoute>
                <ViewOverview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/browse/:id"
            element={
              <ProtectedRoute>
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
