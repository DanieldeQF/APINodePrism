import express from "express"

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Olá')
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});