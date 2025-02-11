import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import {UserModule} from "../users/user.module";

@Module({
  providers: [AuthResolver, AuthService],
  imports: [UserModule]
})
export class AuthModule {}
