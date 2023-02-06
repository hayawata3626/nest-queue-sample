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

## Start redis and bull-board

```bash
docker-compose up
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

## Visualize queues and jobs 

<img width="1430" alt="スクリーンショット 2023-02-07 8 38 05" src="https://user-images.githubusercontent.com/15213369/217112111-a5811883-5e28-49db-ae17-ea1fba8a46d0.png">


## Reference

- https://docs.nestjs.com/techniques/queues
