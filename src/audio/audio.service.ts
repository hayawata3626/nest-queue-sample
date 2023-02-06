import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class AudioService {
  constructor(@InjectQueue('audio') private readonly audioQueue: Queue) {}

  async addQueue() {
    const job = await this.audioQueue.add(
      { file: 'audio.mp3' },
      { lifo: true },
    );
    return job.id;
  }
}
