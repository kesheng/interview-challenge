import React, { useContext, useCallback } from "react";

import HomeContext from "./../contexts/HomeContext";

const MenuPreviewListItem = (props) => {
    const contextValue = useContext(HomeContext);

    const handleItemClickRemove = useCallback(() => {
        contextValue.dispatch({
            type: "REMOVE_MENU",
            payload: {
                menu: {
                    id: props.id,
                    name: props.name,
                    dietaries: props.dietaries
                }
            }
        })
    }, [contextValue.state.addedMenus.length]);

    const dietaries = (props.dietaries && props.dietaries.length > 0) ?
        props.dietaries.map(dietary =>
            <span key={ Math.random() } className="dietary">{ dietary }</span>
        )
        :
        null;

    return <li className="item">
        <h2>{ props.name }</h2>
        <p>
            { dietaries }
        </p>
        <button className="remove-item" onClick={ handleItemClickRemove }>x</button>
    </li>
};

export default MenuPreviewListItem;