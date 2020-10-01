const app = Vue.createApp({
	data(){
		return {
			age: 15,
			name: 'AM',
			url: 'https://image.shutterstock.com/z/stock-photo-luxury-abstract-fluid-art-painting-background-alcohol-ink-technique-black-and-gold-1471082564.jpg'
		}
	},
	methods: {
		getRandomAge(){
			return Math.random();
		}
	}
});

app.mount("#assignment");