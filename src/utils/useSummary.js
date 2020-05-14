import React, { useMemo, useContext } from "react";

import HomeContext from "./../contexts/HomeContext";

const useSummary = (WrappedLComponent, WrappedRComponent) => {
    const contextValue = useContext(HomeContext);

    const summaryL = useMemo(
        () => {
            return <WrappedLComponent totalNum={ contextValue.state.totalAddedMenuNum } />;
        },
        [contextValue.state.totalAddedMenuNum]
    );

    const summaryR = useMemo(
        () => {
            const addedDietaries = Object.entries(contextValue.state.addedDietaries);

            return <WrappedRComponent addedDietaries={ addedDietaries } />;
        },
        [contextValue.state.totalAddedDietaryNum]
    );

    return [summaryL, summaryR];
};

export default useSummary;
