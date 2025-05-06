import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor(messagesService: MessagesService);
    listMessages(): Promise<object>;
    createMessage(body: CreateMessageDto): Promise<void>;
    getMessage(id: string): Promise<string>;
}
