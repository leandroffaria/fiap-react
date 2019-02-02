const ActionTypes = {
    [NOME]_TEST: '[NOME]_TEST',
};

const request = type => ({ type });
const receive = (type, payload, error = false) => ({ type, payload, error });

const test = (dispatch) => {
    dispatch(request(ActionTypes.[NOME]_TEST));
};

export { ActionTypes, test };