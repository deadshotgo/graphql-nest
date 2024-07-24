import {Args, Query, Resolver} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {LoginDto} from "./dto/login.dto";

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => Object)
  login(
      @Args('loginInput') loginInput: LoginDto
  ) {
    return this.authService.login(loginInput.email, loginInput.password);
  }
}
