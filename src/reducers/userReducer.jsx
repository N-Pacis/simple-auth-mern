const userReducer = (state=null,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return state=action.payload;
        default:
            return state;
    }
}
export default userReducer