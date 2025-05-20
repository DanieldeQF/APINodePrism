import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

async function connect() {
    await prisma.$connect();
}

connect();

export function getFuncionarios() {
    return prisma.funcionario.findMany();
}

export function getFuncionario(idUsuario) {
    return prisma.funcionario.findUnique({
        where: { idUsuario }
    });
}

export function addFuncionario(newFuncionario) {
    return prisma.funcionario.create(
        {
            data: newFuncionario
        }
    );
}

export function editFuncionario(funcionario, idUsuario) {
    return prisma.funcionario.update(
        {
            data: funcionario,
            where: { idUsuario }
        }
    )
}

export function deleteFuncionario(idUsuario) {
    return prisma.funcionario.delete(
        {
            where: { idUsuario }
        }
    )
}