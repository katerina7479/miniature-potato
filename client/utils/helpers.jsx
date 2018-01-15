
const createStaticAction = staticCall =>
  dispatch =>
    (...args) => {
      dispatch(staticCall(...args));
      return null;
    };


const createAsyncAction = (fetchCall, successCall, failureCall, apiMethod) =>
	dispatch =>
		(...args) => {
			dispatch(fetchCall());
			return apiMethod(...args).then(
				response => (
					!response.error
						? dispatch(successCall(response, ...args))
						: dispatch(failureCall(response, ...args))
				),
			)
			.catch(
				(response) => {
					console.log('There was an error', response);
				},
			);
		};

export {
	createStaticAction,
	createAsyncAction
};
