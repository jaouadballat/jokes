<template>
	<div class="col-md-6">
		<div class="joke-card">
			<div class="close" @click="removeJoke(index)">x</div>
			<div class="card-block">
				<p><u>{{ joke.setup }}</u></p>
				<p><em>{{ joke.punchline }}</em></p>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex'

	export default {
		props : ['joke', 'index'],
		methods:mapActions(['removeJoke'])
}
</script>
<style>
	.joke-card{
		    border: 2px solid #2C3350;
		    border-radius: 2px;
		    padding: 5px;
		    margin: 5px;
	}
</style>