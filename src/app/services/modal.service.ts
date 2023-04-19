import { Injectable } from '@angular/core';
import {elementAt} from "rxjs";
interface IModal{
  id:string;
  visible:boolean;
}
@Injectable({
  providedIn:'root'
})
export class ModalService {
  private modals:IModal[] = [] //shown or hidden modal(pop up)
  constructor() { }


    register(id:string){
      this.modals.push({
        id,
        visible: false
      })

    }
  isModalOpen(id: string): boolean{
    return !!this.modals.find(element => element.id === id)?.visible
  }


  unregister(id:string){
    this.modals = this.modals.filter(
      element => element.id !== id

    )
  }
  toggleModal(id: string){
    const modal = this.modals.find(element => element.id === id)

    if(modal){
      modal.visible = !modal.visible;
    }
    // this.visible = !this.visible
  }



}
