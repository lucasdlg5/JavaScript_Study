function calcular(valor) {
    var temp_valor = valor;
    var quantidade_troco = {
        nota_100: 0,
        nota_50: 0,
        nota_20: 0,
        nota_10: 0,
        nota_5: 0,
        nota_1: 0,
        moeda_0_50: 0,
        moeda_0_25: 0,
        moeda_0_10: 0,
        moeda_0_05: 0,
        moeda_0_01: 0
    }
    while (temp_valor != 0) {
        if (temp_valor >= 100) {
            temp_valor -= 100;
            quantidade_troco.nota_100 += 1;
        } else if (temp_valor >= 50) {
            temp_valor -= 50
            quantidade_troco.nota_50 += 1;
        } else if (temp_valor >= 20) {
            temp_valor -= 20
            quantidade_troco.nota_20 += 1;
        } else if (temp_valor >= 10) {
            temp_valor -= 10
            quantidade_troco.nota_10 += 1;
        } else if (temp_valor >= 5) {
            temp_valor -= 5
            quantidade_troco.nota_5 += 1;
        } else if (temp_valor >= 1) {
            temp_valor -= 1
            quantidade_troco.nota_1 += 1;
        } else if (temp_valor >= 0.50) {
            temp_valor -= 0.50
            quantidade_troco.moeda_0_50 += 1;
        } else if (temp_valor >= 0.25) {
            temp_valor -= 0.25
            quantidade_troco.moeda_0_25 += 1;
        } else if (temp_valor >= 0.10) {
            temp_valor -= 0.10
            quantidade_troco.moeda_0_10 += 1;
        } else if (temp_valor >= 0.05) {
            temp_valor -= 0.05
            quantidade_troco.moeda_0_05 += 1;
        } else if (temp_valor >= 0.01) {
            temp_valor -= 0.01
            quantidade_troco.moeda_0_01 += 1;
        }
    }
    return quantidade_troco
}

console.table(calcular(105.75))