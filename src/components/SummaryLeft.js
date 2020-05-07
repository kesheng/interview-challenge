import React from "react";

const SummaryLeft = (props) => {
    console.log('Summary left component loaded!');

    return <React.Fragment>
        <span>{ props.totalNum } items</span>
    </React.Fragment>
};

export default SummaryLeft;