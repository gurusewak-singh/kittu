import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirthdayCard from "./components/BirthdayCard";
import Tingu from "./pages/Tingu";
import NextPage from "./pages/NextPage";
import Gadhi from "./pages/Gadhi";
import WarningUllu from "./pages/WarningUllu";
import PersonalMoments from "./pages/PersonalMoments";
import AajKeMoments from "./pages/AajKeMoments";
import MessagePage from "./pages/MessagePage";
import FewMore from "./pages/FewMore"; // Added FewMore page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayCard />} />
        <Route path="/tingu" element={<Tingu />} />
        <Route path="/next-page" element={<NextPage />} />
        <Route path="/gadhi" element={<Gadhi />} />
        <Route path="/warning-ullu" element={<WarningUllu />} />
        <Route path="/personal-moments" element={<PersonalMoments />} />
        <Route path="/aaj-ke-moments" element={<AajKeMoments />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/few-more" element={<FewMore />} /> {/* Added FewMore route */}
      </Routes>
    </Router>
  );
}

export default App;