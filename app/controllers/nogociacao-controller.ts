import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private InputQuantidade: HTMLInputElement;
    private InputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor(){
        this.inputData=document.querySelector('#data');
        this.InputQuantidade=document.querySelector('#quantidade');
        this.InputValor=document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao=this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());        
        this.limparFormulario();
    }
    criaNegociacao():Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade=parseInt(this.InputQuantidade.value);
        const valor=parseFloat(this.InputValor.value);
        return new Negociacao(date,quantidade,valor);
    }
    limparFormulario():void{
        this.inputData.value='';
        this.InputQuantidade.value='';
        this.InputValor.value='';
        this.inputData.focus();
    }
}