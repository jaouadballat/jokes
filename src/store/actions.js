import axios from 'axios'
export const actions = {
	initJokes: ({commit}) => {
	
	return axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten')
				.then(response => {
					commit('INIT_JOKES', response.data)
				});			
		},
	addJoke: ({commit}) => {
		return axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
					.then(response => {
						commit('ADD_JOKE', response.data)
					})
	},
	removeJoke: ({commit}, index) => {
		console.log(index)
		commit('REMOVE_JOKE', index);
	}
}