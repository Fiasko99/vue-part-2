<template>
  <div>
		<button v-on:click="show = !show" class="btn">Part 7</button>
		<transition name="fade">
			<form @click.prevent class="form-control" v-if="show">
				<span>{{count}} / {{limit}}</span>
				<textarea v-model="text" class="textarea"></textarea>
				<button type="submit" class="btn" :disabled="count > limit">Send</button>
				<button type="submit" class="btn" v-if="count <= limit">Send</button>
			</form>
		</transition>	
  </div>	
</template>

<script>
export default {
	data() {
		return {
			text: '',
			limit: 10,
			show: false,
		}
	},
	computed: {
		count() {
			return this.text.length
		}
	}
}
</script>

<style scoped>
.form-control {
	margin-left: 20%;
	width: 60%;
	font-size: 24px;
	font-weight: bold;
}
.textarea {
	display: block;
	width: 100%;
	height: 20vh;
	resize: none;
}

</style>