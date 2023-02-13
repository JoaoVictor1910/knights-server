import { ApiProperty } from '@nestjs/swagger';

export class GetKnightRequestDto {
  @ApiProperty()
  filter: string;
}

export class PostKnightRequestDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  nickname: string;
  
  @ApiProperty()
  birthday: Date;

  @ApiProperty()
  weaponse:'';
  
  @ApiProperty()
  attributes: '';
  
  @ApiProperty()
  keyAttribute: string;
}
