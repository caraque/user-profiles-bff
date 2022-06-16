import { IsNotEmpty } from 'class-validator';

export class AddFriend {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly lastname: string;
  @IsNotEmpty()
  readonly cell: string;
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  readonly imageUrl: string;
}
