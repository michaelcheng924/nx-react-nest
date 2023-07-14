import { MaxLength } from 'class-validator';

export class CreateTodoDto {
  @MaxLength(10)
  readonly task: string;
}
