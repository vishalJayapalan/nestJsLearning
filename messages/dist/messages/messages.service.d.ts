import { MessagesRepository } from './messages.repository';
export declare class MessagesService {
    messagesRepo: MessagesRepository;
    constructor(messagesRepo: MessagesRepository);
    findOne(id: string): Promise<string>;
    findAll(): Promise<object>;
    create(content: string): Promise<void>;
}
