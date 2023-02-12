import { ApiProperty } from '@nestjs/swagger';

export class GetKnightRequestDto {
  @ApiProperty()
  filter: string;
}

export class PostKnightRequestDTO {
  @ApiProperty()
  name: string;
}
