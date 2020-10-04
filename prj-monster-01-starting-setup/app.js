function calculateRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
	data(){
		return {
            roundNumber: 0,
            playerHealth: 100,
            enemyHealth: 100,
            winner: null,
            logs: []
		}
    },
    methods: {
        startGame(){
            this.roundNumber = 0;
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.winner = null;
            this.logs = []
        },
        surrender(){
            this.winner = 'monster';
        },
        playerAttack(){
            var damage = calculateRandomValue(5, 12);
            this.enemyHealth -= damage;
            this.insertLogs("Player", "Attack", damage)
            this.enemyAttack();
            this.roundNumber++;
        },
        specialAttack(){
            var damage = calculateRandomValue(15, 20);
            this.enemyHealth -= damage;
            this.insertLogs("Player", "Special Attack", damage)
            this.enemyAttack();
            this.roundNumber++;
        },
        enemyAttack(){
            var damage = calculateRandomValue(8, 15);
            this.playerHealth -= damage;
            this.insertLogs("Monster", "Attack", damage)
        },
        heal(){
            var healValue = calculateRandomValue(10, 15);
            if(this.playerHealth + healValue <= 100){
                this.playerHealth += healValue;
                this.insertLogs("Player", "Heal", healValue)
            } else {
                this.playerHealth = 100;
                this.insertLogs("Player", "Heal", 100 - healValue)
            }
            this.roundNumber++;
            this.enemyAttack();
        },
        insertLogs(who, action, value){
            this.logs.unshift({
                who: who,
                action: action,
                value: value
            });
        }

    },
    computed: {
        playerHealthBar(){
            if(this.playerHealth <= 0)
                return {width: '0%'}
            
            return {width: this.playerHealth + '%'}
        },
        enemyHealthBar(){
            if(this.enemyHealth <= 0)
                return {width: '0%'}
            return {width: this.enemyHealth + '%'}
        },
        mayUseSpecialAttack(){
            console.log(this.roundNumber);
            return this.roundNumber % 3 !== 0;
        }

    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.enemyHealth <=0){
                this.winner = 'drawn';
            } else if (value <= 0){
                this.winner = 'monster';
            }
        },
        enemyHealth(value){
            if(value <= 0 && this.playerHealth <=0){
                this.winner = 'drawn';
            } else if (value <= 0){
                this.winner = 'player';
            }
        }
    },
});

app.mount("#game");	