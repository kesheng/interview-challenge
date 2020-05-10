import React from "react";

import MenuContainer from "./../components/MenuContainer";
import MenuPreviewContainer from "./../components/MenuPreviewContainer";
import SummaryContainerHOC from "./../components/SummaryContainerHOC";
import SummaryLeft from "./../components/SummaryLeft";
import SummaryRight from "./../components/SummaryRight";

const SummaryContainerComponent = SummaryContainerHOC(SummaryLeft, SummaryRight);

const Home = () => {
    return <div className="wrapper">
        <div className="menu-summary">
            <SummaryContainerComponent />
        </div>
        <div className="container menu-builder">
            <div className="row">
                <div className="col-4">
                    <MenuContainer />
                </div>

                <div className="col-8">
                    <MenuPreviewContainer />
                </div>
            </div>
        </div>
    </div>;
};

export default Home;