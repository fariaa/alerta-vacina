/*
  Warnings:

  - You are about to drop the column `dataCriacao` on the `responsavel` table. All the data in the column will be lost.
  - You are about to drop the column `dataNascimento` on the `responsavel` table. All the data in the column will be lost.
  - You are about to drop the column `dataCriacao` on the `acesso` table. All the data in the column will be lost.
  - Added the required column `data_nascimento` to the `responsavel` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_responsavel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enderecoId" INTEGER NOT NULL,
    "acessoId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "responsavel_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "endereco" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "responsavel_acessoId_fkey" FOREIGN KEY ("acessoId") REFERENCES "acesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_responsavel" ("acessoId", "cpf", "enderecoId", "id", "nome") SELECT "acessoId", "cpf", "enderecoId", "id", "nome" FROM "responsavel";
DROP TABLE "responsavel";
ALTER TABLE "new_responsavel" RENAME TO "responsavel";
CREATE UNIQUE INDEX "responsavel_enderecoId_key" ON "responsavel"("enderecoId");
CREATE UNIQUE INDEX "responsavel_acessoId_key" ON "responsavel"("acessoId");
CREATE TABLE "new_acesso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "apelido" TEXT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_acesso" ("apelido", "email", "id", "senha") SELECT "apelido", "email", "id", "senha" FROM "acesso";
DROP TABLE "acesso";
ALTER TABLE "new_acesso" RENAME TO "acesso";
CREATE UNIQUE INDEX "acesso_email_key" ON "acesso"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
