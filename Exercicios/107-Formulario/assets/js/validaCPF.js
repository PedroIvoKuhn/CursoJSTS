class ValidaCPF {
    constructor(cpfEnviado) {
     this.cpf = cpfEnviado.replace(/\D+/g, '');
    }

    valida(){
        if(typeof this.cpf === 'undefined') return false;
        if(this.cpf.length !== 11) return false;
        
        const cpfParcial = this.cpf.slice(0,-2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpf;
    }

    criaDigito(cpf){
        const cpfArray = Array.from(cpf);

        const total = cpfArray.reduce((ac, val, index)=>{
            ac += Number(val) * ((cpfArray.length + 1) - index);
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia(){
        const sequencia = this.cpfFormatado[0].repeat(this.cpfFormatado.length);
        return sequencia === this.cpfFormatado;
    }
}
