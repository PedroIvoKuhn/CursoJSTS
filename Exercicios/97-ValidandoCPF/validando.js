function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfFormatado', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfFormatado === 'undefined') return false;
    if(this.cpfFormatado.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfFormatado.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfFormatado;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    
    const total = cpfArray.reduce((ac, val, index)=>{
        ac += Number(val) * ((cpfArray.length + 1) - index);
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfFormatado[0].repeat(this.cpfFormatado.length);
    return sequencia === this.cpfFormatado;
}

const cpf = new ValidaCPF("705.484.450-52");
console.log(cpf.valida());