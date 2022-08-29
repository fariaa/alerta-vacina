-- CreateTable
CREATE TABLE "Acesso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "apelido" TEXT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT,
    "cep" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Acesso_email_key" ON "Acesso"("email");
