/*
  Warnings:

  - You are about to drop the column `acessoId` on the `responsavel` table. All the data in the column will be lost.
  - You are about to drop the column `enderecoId` on the `responsavel` table. All the data in the column will be lost.
  - Added the required column `acesso_id` to the `responsavel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco_id` to the `responsavel` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "crianca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "responsavel_id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "crianca_responsavel_id_fkey" FOREIGN KEY ("responsavel_id") REFERENCES "responsavel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "vacina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "historico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "crianca_id" INTEGER NOT NULL,
    "vacina_id" INTEGER NOT NULL,
    "responsavel_id" INTEGER NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "historico_crianca_id_fkey" FOREIGN KEY ("crianca_id") REFERENCES "crianca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "historico_vacina_id_fkey" FOREIGN KEY ("vacina_id") REFERENCES "vacina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "historico_responsavel_id_fkey" FOREIGN KEY ("responsavel_id") REFERENCES "responsavel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_responsavel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endereco_id" INTEGER NOT NULL,
    "acesso_id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "responsavel_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "responsavel_acesso_id_fkey" FOREIGN KEY ("acesso_id") REFERENCES "acesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_responsavel" ("cpf", "data_criacao", "data_nascimento", "id", "nome") SELECT "cpf", "data_criacao", "data_nascimento", "id", "nome" FROM "responsavel";
DROP TABLE "responsavel";
ALTER TABLE "new_responsavel" RENAME TO "responsavel";
CREATE UNIQUE INDEX "responsavel_endereco_id_key" ON "responsavel"("endereco_id");
CREATE UNIQUE INDEX "responsavel_acesso_id_key" ON "responsavel"("acesso_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "crianca_responsavel_id_key" ON "crianca"("responsavel_id");
