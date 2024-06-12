import { Route, Routes } from "react-router-dom";

import Main from "../Main";
import PersonalPage from "../PersonalPage";


const AppRouter: React.FC = () => (
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/personal-page" element={<PersonalPage/>} />
    </Routes>
);

export default AppRouter;
