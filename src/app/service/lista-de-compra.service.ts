import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 09:00",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 22:15",
      "comprado": true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeItem : string){
    const idNovo = this.listaDeCompra.length + 1;

    const item : Item = {
      id: idNovo,
      nome: nomeItem,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false
    }
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string){
    const novoItem = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(novoItem);
    }

    editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string){
      const itemEditado: Item ={
        id: itemAntigo.id,
        nome: nomeEditadoDoItem,
        data: new,
        comprado: itemAntigo.comprado
      }

      const id = itemAntigo.id;
      const index = this.listaDeCompra.findIndex(item => item.id == id);
      this.listaDeCompra[index] = itemEditado;
    }
  }








