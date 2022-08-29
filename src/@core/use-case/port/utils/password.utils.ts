export interface PasswordPort {
    getSalt(salt: number): Promise<string>
    hashIt(password: string, salt: string): Promise<string>
    compareIt(password: string, passwordHash: string): Promise<boolean>
}