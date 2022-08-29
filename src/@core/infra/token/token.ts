import { JwtService } from "@nestjs/jwt";
import { TokenPort } from "src/@core/use-case/port/utils/token.utils";

export class Token implements TokenPort {

    constructor(private jwtService: JwtService) { }

    sign(user: any): string {

        return this.jwtService.sign(user);
    }
}