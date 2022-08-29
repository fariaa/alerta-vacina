import * as bcrypt from 'bcrypt';
import { PasswordPort } from "src/@core/use-case/port/utils/password.utils";


export class PasswordBcrypt implements PasswordPort {

    getSalt(salt: number): Promise<string> {
        return bcrypt.genSalt(salt);
    }

    async hashIt(password: string, salt: string): Promise<string> {

        return bcrypt.hash(password, salt);
    }

    compareIt(password: string, passwordHash: string): Promise<boolean> {

        return bcrypt.compare(password, passwordHash);
    }
}