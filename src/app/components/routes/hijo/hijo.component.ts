import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  
  @Input() dato:string ="";
  @Input() card: any;

 
  
   

  @Output() sendData = new EventEmitter<string>();


  alertBody(body: string)
  {
    
   alert(body);
   

  }
  


  constructor() { 
    this.sendData = new EventEmitter;

  }

  ngOnInit(): void { 
   // this.sendData = new EventEmitter;
  }

  sendDataFunction(){
    this.sendData.emit('Informacion del componente hijo: Telefónicamente o vía e-mail, usted podrá acceder al presupuesto que necesite. Nuestra atención apunta a que usted pueda resolver todas sus dudas y comprar en forma segura desde su hogar o lugar de trabajo.');
    
  }

  dataFromChild(data: string)
  {

    alert(data);
  }

}
