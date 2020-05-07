import React from "react";

const SummaryContainerHOC = WrappedComponent => {
    return props => {
        return <div className="container">
            <div className="row">
                <WrappedComponent { ...props } />
            </div>
        </div>;
    };
};

export default SummaryContainerHOC;