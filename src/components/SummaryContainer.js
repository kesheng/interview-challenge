import React from "react";

import useSummary from "./../utils/useSummary";
import SummaryLeft from "./../components/SummaryLeft";
import SummaryRight from "./../components/SummaryRight";

const SummaryContainer = () => {
    const [summaryL, summaryR] = useSummary(SummaryLeft, SummaryRight);

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

export default SummaryContainer;