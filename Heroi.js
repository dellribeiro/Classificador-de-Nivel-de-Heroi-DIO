export class Heroi {
    constructor(nome, xp) {
        this.nome = nome;
        this.xp = xp;
    }

    determinarNivel() {
        switch (true) {
            case this.xp < 1000:
                return "Ferro";
            case this.xp >= 1001 && this.xp <= 2000:
                return "Bronze";
            case this.xp >= 2001 && this.xp <= 5000:
                return "Prata";
            case this.xp >= 5001 && this.xp <= 7000:
                return "Ouro";
            case this.xp >= 7001 && this.xp <= 8000:
                return "Platina";
            case this.xp >= 8001 && this.xp <= 9000:
                return "Ascendente";
            case this.xp >= 9001 && this.xp <= 10000:
                return "Imortal";
            default:
                return "Radiante";
        }
    }

    exibirMensagem() {
        const nivel = this.determinarNivel();
        console.log(`O Herói de nome ${this.nome} está no nível de ${nivel}`);
    }
}
