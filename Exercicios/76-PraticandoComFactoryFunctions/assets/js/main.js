/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliquesBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch (error) {
                alert('Conta inválida');
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        cliquesBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor
        },
    };
}
*/

function Calculadora(){
    const display = document.querySelector('.display');

    const pressionaEnter = function(){
        display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13){
                realizaConta();
            }
        });
    };

    const realizaConta = function(){
        let conta = display.value;
        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }
            display.value = conta;
        } catch (error) {
            alert('Conta inválida');
        }
    };

    const clearDisplay = function(){
        display.value = '';
    };

    const apagaUm = function(){
        display.value = this.display.value.slice(0, -1);
    };

    const cliquesBotoes = function(){
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')){
                btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                realizaConta();
            }
        });
    };

    const btnParaDisplay = function(valor){
        display.value += valor;
        display.focus();
    };

    this.inicia = function(){
        cliquesBotoes();
        pressionaEnter();
    };
}

//const calculadora = criaCalculadora();
const calculadora = new Calculadora();
calculadora.inicia();