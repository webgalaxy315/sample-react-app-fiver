// import { SETTINGSKEY } from "../constants/main";

const maindata = (state = {}, action) => {
    switch (action.type) {
        // case SETTINGSKEY: {
        //     return {
        //         ...state,
        //         SettingsState: action.payload
        //     };
        // }
        default: {
            return { ...state };
        }
    }
};
export default maindata;
