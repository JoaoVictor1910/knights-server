import { ApiProperty } from '@nestjs/swagger';

export class GetKnightRequestDto {
  @ApiProperty()
  filter: string;
}

export class PostKnightRequestDTO {
  @ApiProperty()
  _id: string

  @ApiProperty()
  name: string;

  @ApiProperty()
  nickname: string;
  
  @ApiProperty()
  birthday: Date;

  @ApiProperty()
  weaponse: Array<Weapons>;
  
  @ApiProperty()
  attributes: Attributes;
  
  @ApiProperty()
  keyAttribute: string;
}


type Weapons = {
  name: string;
  mod: number;
  attr: string;
  equipped: Boolean;
}
type Attributes = {
  strength: number; 
  dexterity: number; 
  constitution: number; 
  intelligence: number; 
  wisdom: number; 
  charisma: number; 
}