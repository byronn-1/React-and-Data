import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";


import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupsPage />} />
          <Route path="/favorite-meetups" element={<FavoritesPage />} />
          <Route
            path="*"
            element={<h1 className="not-found">Page Not Found</h1>}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
