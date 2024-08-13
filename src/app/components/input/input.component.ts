import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado!: Item;
  editando: boolean = false;
  textoBtn: string = 'Salvar item';

  itemAdicionado: string = "";

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnChanges(changes: SimpleChanges){
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.itemAdicionado = this.itemQueVaiSerEditado.nome;
    }
  }

  ngOnInit(): void { }

  adicionarItemNaLista(){
    // console.log(this.itemAdicionado);
    this.listaDeCompraService.adicionarItemNaLista(this.itemAdicionado);
    this.limparInput();
  }

  limparInput(){
    this.itemAdicionado = "";
  }

  editarItem(){
    this.listaDeCompraService.editarItemDaLista(this.itemQueVaiSerEditado, this.itemAdicionado);
      this.limparInput();
      this.textoBtn = 'Editar item';
      this.editando = false;
  }
}
