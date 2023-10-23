import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreateEvent from "../customer-create.event";

export default class SendLog2Handler
  implements EventHandlerInterface<CustomerCreateEvent>
{
  handle(event: CustomerCreateEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated"); 
  }
}
