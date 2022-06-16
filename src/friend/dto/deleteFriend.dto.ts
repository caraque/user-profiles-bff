import { IsNotEmpty } from 'class-validator';

export class DeleteFriend {
  @IsNotEmpty()
  readonly id: number;
  @IsNotEmpty()
  readonly email: string;
}
