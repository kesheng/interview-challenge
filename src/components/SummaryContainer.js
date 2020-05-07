import React, { useMemo, useContext } from "react";

import HomeContext from "./../contexts/HomeContext";
import SummaryLeft from "./SummaryLeft";
import SummaryRight from "./SummaryRight";

const SummaryContainer = () => {
    const contextValue = useContext(HomeContext);
    
    const summaryL = useMemo(
        () => {
            return <SummaryLeft totalNum={ contextValue.state.totalAddedMenuNum } />;
        },
        [contextValue.state.totalAddedMenuNum]
    );

    const summaryR = useMemo(
        () => {
            const addedDietaries = Object.entries(contextValue.state.addedDietaries);

            return <SummaryRight addedDietaries={ addedDietaries } />;
        },
        [contextValue.state.totalAddedDietaryNum]
    );

    return <React.Fragment>
        <div className="col-6 menu-summary-left">
            { summaryL }
        </div>
        <div className="col-6 menu-summary-right">
            { summaryR }
        </div>
    </React.Fragment>;
};

export default SummaryContainer