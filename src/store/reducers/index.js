import maindata from "./maindata";

function rootReducer(state = {}, action) {
    return {
        maindata: maindata(state.maindata, action),
    }
}
export default rootReducer;
