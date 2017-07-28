export const mutations = {
	'INIT_JOKES' (state, payload){
		state.jokes.push(...payload);
	},
	'ADD_JOKE' (state, payload){
		state.jokes.push(payload);
	},
	'REMOVE_JOKE' (state, index){
		state.jokes.splice(index, 1);
	}

};