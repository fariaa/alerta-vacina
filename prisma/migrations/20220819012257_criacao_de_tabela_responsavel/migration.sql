/*
  Warnings:

  - You are about to drop the `Acesso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Acesso";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Endereco";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "acesso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "apelido" TEXT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT,
    "cep" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "responsavel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enderecoId" INTEGER NOT NULL,
    "acessoId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "responsavel_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "endereco" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "responsavel_acessoId_fkey" FOREIGN KEY ("acessoId") REFERENCES "acesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "acesso_email_key" ON "acesso"("email");

-- CreateIndex
CREATE UNIQUE INDEX "responsavel_enderecoId_key" ON "responsavel"("enderecoId");

-- CreateIndex
CREATE UNIQUE INDEX "responsavel_acessoId_key" ON "responsavel"("acessoId");
