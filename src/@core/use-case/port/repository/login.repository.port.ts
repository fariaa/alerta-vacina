export interface LoginRepositoryPort {
    login(email: string, senha: string): Promise<any>
    findByEmail(email: string): Promise<any>
}