import produce from 'immer';

export const homeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MENU':
            return produce(state, draft => {
                let duplicate = false;

                let addedMenus = state.addedMenus.filter(item => {
                    if (item.id === action.payload.menu.id) {
                        duplicate = true;
                    }

                    return item.id !== action.payload.menu.id
                });
                addedMenus = addedMenus.concat(action.payload.menu);
                draft.addedMenus = addedMenus;

                let newDietaries = state.addedDietaries;
                if (!duplicate) {
                    action.payload.menu.dietaries.forEach(item => newDietaries[item] = (newDietaries[item] || 0) + 1);
                    draft.addedDietaries = newDietaries;
                }

                draft.totalAddedMenuNum = addedMenus.length;

                let totalAddedDietaryNum = state.totalAddedDietaryNum;
                if (!duplicate) {
                    totalAddedDietaryNum = 0;
                    let newDietariesArray = Object.values(newDietaries);
                    newDietariesArray.forEach(dietaryNum => {
                        totalAddedDietaryNum = totalAddedDietaryNum + dietaryNum;
                    });
                }
                draft.totalAddedDietaryNum = totalAddedDietaryNum;
            });
        case 'REMOVE_MENU':
            return produce(state, draft => {
                let addedMenus = state.addedMenus.filter(item => {
                    return item.id !== action.payload.menu.id
                });
                draft.addedMenus = addedMenus;

                let newDietaries = state.addedDietaries;
                action.payload.menu.dietaries.forEach(item => newDietaries[item] = (newDietaries[item] > 0 ? newDietaries[item] - 1 : 0));
                draft.addedDietaries = newDietaries;

                draft.totalAddedMenuNum = addedMenus.length;

                let totalAddedDietaryNum = 0;
                let newDietariesArray = Object.values(newDietaries);
                newDietariesArray.forEach(dietaryNum => {
                    totalAddedDietaryNum = totalAddedDietaryNum + dietaryNum;
                });
                draft.totalAddedDietaryNum = totalAddedDietaryNum;
            });
        default:
            return state;
    }
};