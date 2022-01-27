export default (adoptions = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
                return [...adoptions, action.payload];
        case 'UPDATE':
            return adoptions.map((adoption) => (adoption._id === action.payload._id ? action.payload : adoption));
        case 'DELETE':
            return adoptions.filter((adoption) => adoption._id !== action.payload);
        default:
            return adoptions;
    }
}