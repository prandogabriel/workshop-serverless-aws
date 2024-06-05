# Intro a app serverless na AWS com NodeJs

### Instalar as deps
```bash
    npm i
```

### Rodar local com serverless offline
```bash
    npm run start
```
testar req
```bash
    curl --request POST \
    --url http://localhost:3000/dev/hello \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/8.6.1' \
    --data '{
        "name": "Frederic"
    }'
```

### Deploy da app
```bash
    npm run sls deploy -- --stage dev
```

### Deletar a app
```bash
    npm run sls remove -- --stage dev
```


### Criar url encurtada
```bash
    curl --request POST \
    --url http://localhost:3000/dev/shortener \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/8.6.1' \
    --data '{
        "url": "https://docs.google.com/presentation/d/1TSHEy-mnCo9PcbIchY43Na67zXHTDgvpqd6pocNJMtQ/edit?usp=sharing"
    }'
```