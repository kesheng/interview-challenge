import React, { useMemo, useContext } from "react";

import HomeContext from "./../contexts/HomeContext";

const SummaryContainerHOC = (WrappedLComponent, WrappedRComponent) => {
    return () => {
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

        return <div className="container">
            <div className="row">
                <div className="col-6 menu-summary-left">
                    { summaryL }
                </div>
                <div className="col-6 menu-summary-right">
                    { summaryR }
                </div>
            </div>
        </div>;
    };
};

export default SummaryContainerHOC;