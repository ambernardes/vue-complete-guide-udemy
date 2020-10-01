const app = Vue.createApp({
	data(){
		return {
			output:'',
			enterOutput: ''
		}
	},
	methods: {
		callAlert(){
			alert("E la vamos nos")
		},
		callKeyDown(event){
			this.output = event.target.value;
		},
		callEnter(event){
			this.enterOutput = this.output
		}
	}
});

app.mount("#assignment");