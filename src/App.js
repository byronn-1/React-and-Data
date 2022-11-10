import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}  />
        <Route path='/new-meetup' element={<NewMeetupsPage />} />
        <Route path='/favorite-meetups' element={<FavoritesPage />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
