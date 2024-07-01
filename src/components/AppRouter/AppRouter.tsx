import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import Main from "../Main";
import PersonalPage from "../PersonalPage";
import Admin from "../Admin";
import GuessSTM from '../applications/GuessSTM';


const AppRouter: React.FC = () => (    

    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/personal-page" element={<PersonalPage/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/guess-stm" element={<GuessSTM/>}/>
    </Routes>
);

export default AppRouter;
