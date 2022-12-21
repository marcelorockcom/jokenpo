(function(){
    
    class Jokenpo{
        constructor(){
            this.btnsChoose = document.querySelectorAll('input')
            this.btnPlay = document.querySelector('button')
            this.scorePlayer = document.querySelector('.score-player')
            this.scoreCpu = document.querySelector('.score-cpu')
            this.playerBattle = document.querySelector('.player-battle')
            this.cpuBatte = document.querySelector('.cpu-battle')
            this.info = document.querySelector('.info')
            this.score = {player: 0, cpu: 0}
        }

        init(){
            document.addEventListener('click', (e)=>{
                if(e.target.tagName === 'INPUT'){
                    this.playerBattle.className = 'player-battle'
                    this.cpuBatte.className = 'cpu-battle'
                    this.info.classList.remove('d-block')
                }
            })

            this.btnPlay.addEventListener('click', e =>{
                const playerChosen = document.querySelector('input[type="radio"]:checked')
                if(playerChosen !== null){
                    const cpuChosen = this.cpuChoose()
                    this.result(playerChosen.id, cpuChosen)
                    this.insertSvg(playerChosen.id, cpuChosen)
                }else{
                    this.info.classList.add('d-block')
                }
            })
        }
        
        cpuChoose(){
            const opt = ['pedra', 'papel', 'tesoura']
            const rand = Math.floor(Math.random() * (3 - 0) + 1) - 1
            return opt[rand]
        }

        result(player, cpu){
            if(player === 'pedra' && cpu === 'tesoura')
                return this.printResult('win', 'lose', cpu)
            if(player === 'papel' && cpu === 'pedra')
                return this.printResult('win', 'lose', cpu)
            if(player === 'tesoura' && cpu === 'papel')
                return this.printResult('win', 'lose', cpu)
            if(player === cpu)
                return this.printResult('tie', 'tie', cpu)
            return this.printResult('lose', 'win', cpu)
        }

        printResult(player){
            this.updateScore(player)
        }

        insertSvg(player, cpu){
            const svgs = {
                pedra: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><defs><style>.a,.b{fill:none;stroke:#1d1d1b;stroke-linecap:round;stroke-width:4.01px;}.a{stroke-linejoin:round;}.b{stroke-miterlimit:10;}</style></defs><path class="a" d="M145.72,36.28A33,33,0,0,1,139.59,69c-6.8,7.71-14.41,17-14.64,20-.4,5.44-.4,10-8.87,18.72s-28.77,38-39.39,39.77c-13.92,2.37-45.88-14.81-49.94-18.12-5-4.08-3.78-10.25.76-11.1,0,0-11.09-4-7-15,0,0-11.5-5.62-5.14-21.21,0,0-4.54-1.47-5.3-9,0,0-7.26,1-7.72-11.26S8.14,46.05,15.25,38.54,25.85,24.67,34,25s41.61,1,43,0S91.06,5,98.47,3.12C107.55.82,133.37,1.77,145.72,36.28Z"/><path class="b" d="M67,39.85s.76,14,0,19.42S60,72.82,56.26,72.82,32.81,65.47,29.33,63"/><path class="b" d="M10.11,73C7.84,51.43,22.52,42.29,28,41.15s30,11.26,30,11.26,11.71,7.3,2.93,17.81"/><path class="b" d="M15.41,82S44.46,95.23,70.08,99.58"/><path class="b" d="M20.55,103.17s27.14,12.52,48.52,14.69"/><path class="b" d="M27.51,118.19s20.34,11.64,39.83,14"/><line class="b" x1="76.99" y1="24.98" x2="88.64" y2="24.98"/><line class="b" x1="124.95" y1="88.92" x2="124.95" y2="75.21"/></svg>',
                papel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><defs><style>.a,.b{fill:none;stroke:#1d1d1b;stroke-linecap:round;stroke-width:3.71px;}.a{stroke-linejoin:round;}.b{stroke-miterlimit:10;}</style></defs><path class="a" d="M115.25,2.61c8.93,1.91,24.61,7.76,31.22,25.52,2.33,6.25,1.07,13.61-3.09,18.26-5.78,6.48-13.77,16-13.66,19.32.18,5.12-.35,11.53-9.16,22.43s-37.38,45.3-42.49,50.21-10.58,4.06-13.22-3.2c0,0-8.9,14.41-15.78,12.26-5-1.57-7.36-7.51-7.1-10.55,0,0-8.19,11.93-16.53,7.37-6.29-3.44-6.25-11-6.25-11s-8.42,2.83-12.92-1-5.55-12.5-.79-19.55,44-53.58,44-53.58-7.41.06-9.65-5.23S38.8,42.47,41.44,39.42s14-15.86,16.27-20,5.92-5.82,18.08-5,21.85-.22,23.44-2.36c.75-1,3-3.44,5.06-5.68A11.61,11.61,0,0,1,115.25,2.61Z"/><path class="b" d="M64.85,135.15a11.92,11.92,0,0,1,1.32-7.8c2.2-3.85,21-25.21,21-25.21"/><path class="b" d="M42,136.86s-1.28-5.58,4.4-12.32c4.14-4.92,23.5-27.74,23.5-27.74"/><path class="b" d="M19.19,133.23s-.71-4.49,3.79-9.83S52,88.57,52,88.57"/><line class="b" x1="49.51" y1="59.08" x2="69.87" y2="34.3"/><line class="b" x1="129.72" y1="65.71" x2="128.84" y2="54.97"/></svg>',
                tesoura: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><defs><style>.a{fill:none;stroke:#1d1d1b;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3.88px;}</style></defs><path class="a" d="M116.69,3C127,5.86,141.34,14.45,147,39.71a23.54,23.54,0,0,1-5.23,20.92c-5.52,6-12.31,13.51-13,14.85-1.13,2.28.57,9.27-3.41,14.16s-24.08,27.89-28.35,32.88-8.25,9-12.8,7.59-23.33-9.87-23.33-9.87S43.82,141.57,37.65,146a9.35,9.35,0,0,1-13.79-3.75,17.55,17.55,0,0,1,2.7-18.39c4.84-6,18-19.53,18-19.53s-4.17,0-3.6-16.28c0,0-16.65,7-25.18,7.81S2.1,92.41,2.38,84.1,6.36,70.76,15,67.83s24.47-8.51,24.47-8.51-.72-11,1.56-14.61C44.24,39.61,58.3,21.44,63.68,20c4.46-1.22,25,0,25,0L99.29,8.35A17.12,17.12,0,0,1,116.69,3Z"/><path class="a" d="M40.78,58.87s28.59-8.3,29.87-11.23,0-9.76,0-9.76"/><path class="a" d="M40.93,88s23.8-11.67,25.31-10.56S51.85,96.62,44.53,104.29"/><line class="a" x1="60.93" y1="120.24" x2="79.9" y2="98.27"/><line class="a" x1="68.38" y1="111.61" x2="80.75" y2="117.64"/><line class="a" x1="56" y1="88.01" x2="59.04" y2="88.01"/><line class="a" x1="128.82" y1="75.48" x2="128.82" y2="64.57"/><line class="a" x1="88.71" y1="19.97" x2="98.1" y2="19.97"/></svg>'
            }
            this.playerBattle.innerHTML = svgs[player]
            this.cpuBatte.innerHTML = svgs[cpu]
        }

        updateScore(player){
            if(player === "win"){
                this.score.player++
                this.scorePlayer.innerHTML = this.score.player
                this.playerBattle.classList.add('win')
                this.cpuBatte.classList.add('lose')
            }
            if(player === "lose"){
                this.score.cpu++
                this.scoreCpu.innerHTML = this.score.cpu
                this.cpuBatte.classList.add('win')
                this.playerBattle.classList.add('lose')
            }
            if(player === "tie"){
                this.cpuBatte.classList.add('tie')
                this.playerBattle.classList.add('tie')
            }
            this.reset()
        }

        reset(){
            const playerChosen = document.querySelector('input[type="radio"]:checked')
            playerChosen.checked = false
        }

    }

const newGame = new Jokenpo()
newGame.init()

})()