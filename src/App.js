import ViewLogin from "./Views/ViewLogin";
import ViewNoMatch from "./Views/ViewNoMatch";
import ViewOverview from "./Views/ViewOverview";
import ViewProfile from "./Views/ViewProfile";
import ViewSingleVideo from "./Views/ViewSingleVideo";
import { Routes, Route } from "react-router-dom";
import { VideoContextProvider } from "./Contexts/VideoContext";

function App() {
  return (
    <div className="App">
      <VideoContextProvider>
        <h1>Video UI</h1>
        <Routes>
          <Route path="/" element={<ViewOverview />} />
          <Route path="/browse/:id" element={<ViewSingleVideo />} />
          <Route
            path="/profile"
            element={
              // <ProtectedRoute>
              <ViewProfile />
              // </ProtectedRoute>
            }
          />
          <Route path="/login" element={<ViewLogin />} />
          <Route path="*" element={<ViewNoMatch />} />
        </Routes>
      </VideoContextProvider>
    </div>
  );
}

export default App;
