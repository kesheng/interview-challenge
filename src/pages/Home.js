import React from "react";

import MenuContainer from "./../components/MenuContainer";
import MenuPreviewContainer from "./../components/MenuPreviewContainer";
import SummaryContainer from "./../components/SummaryContainer";

const Home = () => {
    return <div className="wrapper">
        <div className="menu-summary">
            <SummaryContainer />
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