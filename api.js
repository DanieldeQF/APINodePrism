import express from "express"
import cors from "cors"
import { getFuncionarios, getFuncionario, addFuncionario, editFuncionario, deleteFuncionario } from './funcionariosRepository.js'

const app = express();
const PORT = 8080;

app.use(cors({ origin: 'http://localhost:5173' })); // precisa estar antes das rotas
app.use(express.json());

// app.options('*', cors())

app.get('/funcionario', (req, res) => {
    async function buscarFuncionarios() {
        const f = await getFuncionarios();
        console.log(f);
        res.json(f);
    }

    buscarFuncionarios();
});

app.get('/funcionario/:id', (req, res) => {
    async function buscarFuncionarios() {
        const f = await getFuncionario(+req.params.id);
        console.log(f);
        res.json(f);
    }

    buscarFuncionarios();
});

app.post('/funcionario', (req, res) => {
    async function criarFuncionario() {
        const f = await addFuncionario(req.body);
        res.send(f);
    }

    criarFuncionario();
})

app.put('/funcionario', (req, res) => {
    async function editarFuncionario() {
        console.log('Corpo: ', req.body);
        const f = await editFuncionario(req.body, req.body.idUsuario);
        res.send(f);
    }

    editarFuncionario();
})

app.delete('/funcionario/:id', (req, res) => {
    console.log(req.params.id);

    async function excluirFuncionario() {
        const f = await deleteFuncionario(+req.params.id);
        res.send(f);
    }

    excluirFuncionario();
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});