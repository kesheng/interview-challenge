import React, { useMemo, useReducer } from "react";

import list from "./item";
import "./assets/css/App.css";
import Home from "./pages/Home";
import HomeContext from "./contexts/HomeContext";
import { homeReducer } from "./reducers/homeReducer";

const initialState = {
    menus: list,
    addedMenus: [],
    addedDietaries: {},
    totalAddedMenuNum: 0,
    totalAddedDietaryNum: 0
};

const App = () => {
    const [state, dispatch] = useReducer(homeReducer, initialState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return <HomeContext.Provider value={ contextValue }>
        <Home />
    </HomeContext.Provider>
};

export default App;