export declare class MessagesRepository {
    findOne(id: string): Promise<string>;
    findAll(): Promise<object>;
    create(content: string): Promise<void>;
}
