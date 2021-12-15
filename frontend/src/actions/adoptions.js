import * as api from '../api/index.js';

export const getAdoptions = () => async(dispatch) =>{
    try{
        const { data } = await api.fetchAdoptions();
        return dispatch({type: 'FETCH_ALL', payload: data});

    } catch(error){
            console.log(error);
    }
};
export const createAdoption = (adoption) => async(dispatch) =>{
    try{
        const { data } = await api.createAdoption(adoption);
        return dispatch({type: 'CREATE', payload: data});

    } catch(error){
            console.log(error);
    }
};

export const updateAdoption = (id, adoption) => async (dispatch) => {
    try {
      const { data } = await api.updateAdoption(id, adoption);
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deleteAdoption = (id) =>  async(dispatch) => {
    try{
        await api.deleteAdoption(id);
        dispatch({ type: 'DELETE', payload: id })
    } catch(error) {
        console.log(error.message);
    }
  }