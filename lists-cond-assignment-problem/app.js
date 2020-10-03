const app = Vue.createApp({
	data(){
		return {
            isVisible: true,
            task: '',
            tasks: []
		}
    },
    methods: {
        addTask(){
            this.tasks.push(this.task);
            this.task = '';
        },
        setVisibility(){
            this.isVisible = !this.isVisible;
        }
    },
});

app.mount("#assignment");	