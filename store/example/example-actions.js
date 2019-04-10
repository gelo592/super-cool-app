export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';

export const loadData = () => ({
  CALL_API: {
    call: api => api.loadData(),
    transformError: err => getErrorMessage(err, submitUserErrorStatusMessages(err)),
    types: [LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE],
  },
});