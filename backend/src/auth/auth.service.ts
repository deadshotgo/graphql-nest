import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../users/user.service";

@Injectable()
export class AuthService {
constructor( private readonly userService: UserService) {}

    async login(email: string, pass: string) {
        if (!email || !pass) {
            throw new UnauthorizedException();
        }
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new UnauthorizedException();
        }
        // if (user.email !== 'admin@email.com') {
        //     const isMatch = await bcrypt.compare(pass, user.password);
        //     if (!isMatch) {
        //         throw new UnauthorizedException();
        //     }
        // }
        // const { password, ...result } = user;
        // const payload = {
        //     sub: user.id,
        //     username: user.name,
        //     isAdmin: user.isAdmin,
        //     role: user.role,
        // };
        // const token = await this.jwtService.signAsync(payload);
        // return {
        //     access_token: token,
        // };
    }
}
