import { ApiProperty } from '@nestjs/swagger';
import { User } from '../interfaces/user.interface';

export class UserDto {
  constructor(user: User) {
    this.id = user._id;
    this.username = user.username;
    this.dob = user.dob;
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  dob: Date;
}
