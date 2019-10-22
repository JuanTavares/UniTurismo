import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  places = [
    {
      title: 'TREKKING - PICO DO CORCOVADO  - UBATUBA - SP',
      img: '../../assets/imgs/corcovado.jpg',
      lat: -23.449067,
      lng: -45.192604,
      description: 'O Pico do Corcovado em Ubatuba/SP possui 1.181 metros de altitude, é o pico mais imponente do litoral norte paulista e o ponto culminante da Serra do Mar Paulista.'
    },
    {
      title: 'TREKKING CANYON DO FUNIL - BOM JARDIM DA SERRA - RS',
      img: '../../assets/imgs/funil.jpg',
      lat: -28.339509,
      lng: -49.532249,
      description: 'Os mais belos cenários, na maioria das vezes, exigem um pouco mais de dedicação para serem contemplados. Esse é o caso do estonteante Cânion do Funil. Até chegar a beira do Cânion é possível desfrutar do contato com a natureza, cercado das mais belas paisagens de um lugar pouco conhecido e sentir sua energia singular. É realmente uma experiência única! Situado à esquerda da Serra do Rio do Rastro e altitude de 1590 metros, não possui acesso de carro, somente a pé ou a cavalo pelas trilhas das fazendas onde faz parte o referido cânion. O Cânion do Funil está localizado em Bom Jardim da Serra, no estado de Santa Catarina.'
    },
    {
      title: 'PARAQUEDISMO - BOITUVA - SP',
      img: '../../assets/imgs/paraquedas.jpg',
      lat: -23.297028,
      lng: -47.688925,
      description: 'O Salto Duplo é a maneira mais simples de conhecer e sentir todas as emoções do esporte. Capaz de proporcionar todas as emoções de um salto de paraquedas, no salto duplo, o aluno é acompanhado por um instrutor. Este salto é ideal para quem não tem conhecimento prévio das técnicas do paraquedismo. Confira os preços para saltar de paraquedas e viva a emoção do salto duplo aqui na nossa Escola de Paraquedismo em Boituva.'
    }
  ];
  interest: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.places.forEach(place => {
        if (data.param === place.title) {
          this.interest = place;
          console.log(this.interest);
        }
      });
    });
  }

}
