import { Command, CommandRunner, Option } from 'nest-commander';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/create-user.dto';

interface CreateUserOptions {
  username: string;
  password: string;
}

@Command({
  name: 'create-user',
  description: 'Create User',
})
export class CreateUserCommand extends CommandRunner {
  constructor(private readonly userService: UsersService) {
    super();
  }
  async run(inputs: string[], options: CreateUserOptions): Promise<void> {
    const dto = new CreateUserDto();
    dto.username = options.username;
    dto.password = options.password;
    await this.userService.create(dto);
  }

  @Option({
    flags: '-u, --username [username]',
    description: 'Username',
    required: true,
  })
  parseUsername(val: string): string {
    return val;
  }

  @Option({
    flags: '-p, --password [password]',
    description: 'Password',
    required: true,
  })
  parsePassword(val: string): string {
    return val;
  }
}
