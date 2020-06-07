import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes() {
    return ( // retorna HTML ou conteúdo JSX (html dentro de javascript)
        <BrowserRouter>
            <Route path="/" exact component={Main}/> {/* sem o exact, o router não irá diferenciar essas duas Routes, pois o Router compara o começo da rota somente*/ }
        </BrowserRouter>
    );
}