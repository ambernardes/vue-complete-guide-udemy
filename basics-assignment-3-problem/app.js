const app = Vue.createApp({
	data(){
		return {
			value: 0
		}
	},
	methods: {
		add(value){
			this.value+=value;
		}
	},
	computed: {
		showResult(){
			if(this.value = 37){
				return 'Not there yet';
			} else if(this.value == 37){
				return this.value;
			} else {
				return 'Too much!'
			}			
		}
	},
	watch: {
		showResult() {
			const self = this
			setInterval(function(){
                self.value = 0;
            }, 5000);
		}
	}
});

app.mount("#assignment");	