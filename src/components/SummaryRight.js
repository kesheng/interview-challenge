import React from "react";

const SummaryRight = (props) => {
    console.log('Summary right component loaded!');

   return props.addedDietaries.map((dietaryArray) => {
        return dietaryArray[1] > 0 ?
            <React.Fragment key={ Math.random() }>
                { dietaryArray[1] }x <span className="dietary">{ dietaryArray[0] }</span>
            </React.Fragment>
            :
            null
    });
};

export default SummaryRight;