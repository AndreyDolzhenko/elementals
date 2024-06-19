import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import Main from "../Main";
import PersonalPage from "../PersonalPage";
import GuessSTM from '../applications/GuessSTM';


const AppRouter: React.FC = () => (


    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/personal-page" element={<PersonalPage/>} />
        <Route path="/guess-stm" element={<GuessSTM/>}/>
    </Routes>
);

export default AppRouter;
