const app = Vue.createApp({
	data(){
		return {
            userCondition: '',
            visible: true,
            color: ''
		}
    },
    methods: {
        changeVisibility(){
            this.visible = !this.visible;
        }
    },
});

app.mount("#assignment");	