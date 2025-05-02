import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents: string = await readFile('messages.json', 'utf8');
    const messages: object = JSON.parse(contents) as object;
    return messages[id] as string;
  }

  async findAll() {
    const contents: string = await readFile('messages.json', 'utf8');
    const messages: object = JSON.parse(contents) as object;
    return messages;
  }

  async create(content: string) {
    const contents: string = await readFile('messages.json', 'utf8');
    const messages: object = JSON.parse(contents) as object;

    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      id,
      content,
    };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
