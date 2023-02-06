# nest-queue-sample

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Start redis

```bash
docker-compose up redis
```


## Confirm Queue

```bash
curl -X GET http://localhost:3000/audio/transcode
```

You can then check the following logs.

```bash
[Nest] 50444  - 02/07/2023, 8:11:53 AM   DEBUG [AudioProcessor] Start transcoding...
[Nest] 50444  - 02/07/2023, 8:11:53 AM   DEBUG [AudioProcessor] Object:
{
  "file": "audio.mp3"
}

[Nest] 50444  - 02/07/2023, 8:11:53 AM   DEBUG [AudioProcessor] Transcoding completed
```

## Reference

- https://docs.nestjs.com/techniques/queues
