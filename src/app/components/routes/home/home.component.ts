import { Component, Input, OnInit } from '@angular/core';





interface Card {

    title: string,
    imgUrl: string,
    cuerpo: string,
    flag: boolean,
    band: boolean


  }


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

 

export class HomeComponent implements OnInit {

   

   title: string= "PERFIL DE LA EMPRESA";
   parrafo: string= "Somos proveedores de todo tipo de hierros para construcción, chapas negras y galvanizadas, perfiles, tubos estructurales y accesorios. Disponemos de un parque tecnológico de última generación, operado y dirigido por un capital humano de amplia experiencia en el rubro. Más de 30 años de trabajos altamente especializados nos avalan asegurando calidad en nuestros productos y servicios.";
   
   textoContent: Array<any> = [
    {
       subt:"MISION",
       subparraf:"Consolidar nuestro liderazgo en el mercado y tambien afianzar nuestra presencia a nivel provincial,satisfaciendo las expectativas."   

    },
    {
      subt:"VALORES",
      subparraf:"Profesionalismo para brindar un excelente servicio y el mejor asesoramiento. Calidad garantizada en todos nuestros productos."   
 
    },
    {
      subt:"INSTALACIONES",
      subparraf:"Nuestras instalaciones cuentan con un amplio stock en toda la gama de nuestros productos. Maquinaria especializada nos permite manipular adecuadamente la mercadería para lograr la calidad de servicio que usted merece. Ofrecemos atención personalizada y artículos de primera línea a los mejores precios."   
 
    }
   
  
   ]


   cardsContent: Array<Card> = [

     {
      title: "Atencion al Cliente",
      imgUrl: "../../../../assets/clientes.jpg",
      cuerpo: "En Alumetal cada cliente es especial, por lo cual nuestro personal de contacto se capacita permanentemente en el trato humano, para lograr una calificada atención y una fiel muestra de la calidad de nuestros productos.",
      flag: true,
      band: false
    },
    {
      title: "Servicio de Entrega",
      imgUrl: "../../../../assets/entrega.jpg",
      cuerpo: "Alumetal posee un sistema de entrega programada hecho a la medida de sus necesidades. Nuestra amplia y versatil flota de vehículos constituye la manera más segura de transportar su mercadería desde nuestros depositos hacia su obra.",
      flag:true,
      band: false
    },
    {
      title: "Atencion Telefónico",
      imgUrl: "../../../../assets/telefonico.jpg",
      cuerpo: "Telefónicamente o vía e-mail, usted podrá acceder al presupuesto que necesite. Nuestra atención apunta a que usted pueda resolver todas sus dudas y comprar en forma segura desde su hogar o lugar de trabajo.",
      flag: false,
      band: true

    }
  
   ]
   
   alertBody(body: string)
   {
     
    alert(body);
    

   }
   


  constructor() { }

  dataFromChild(data: string)
  {

    alert(data);
  }

  ngOnInit(): void {
    
  }
}

