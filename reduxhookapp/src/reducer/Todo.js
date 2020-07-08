const todoReducer  = (state, action)=> {
    switch(action.type) {
        case 'ADD_TODO':
         return [...state, action.newTodo];
        default: 
        return state;
    }

}

export default todoReducer;