import { Controller, Get, Query, Param, Post, Delete, Body } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { GetKnightRequestDto, PostKnightRequestDTO } from 'src/dto/controllers/KnightRequest.dto';

@Controller('/knights')
export class KnightsController {
  constructor(
    
  ) {}

  @Get('/')
  @ApiOkResponse({ type: [Object] })
  async getKnightsList(
    @Query() getKnightRequestDto: GetKnightRequestDto,
  ): Promise<void> {

    return;

  }

  @Get('/:idKnight')
  async getKnightProfile(
    @Param('idKnight') idKnight: string
  ): Promise<void> {
    return;
  }

  @Post('/create')
  @ApiOkResponse({ type: [Object] })
  async createKnights(
    @Body() knightToSave: PostKnightRequestDTO
  ): Promise<void> {
    return;
  }
  
  @Post('/update/:idKnight')
  async updateKnight(
    @Param('idKnight') idKnight: string
  ): Promise<void> {
    return;
  }

  @Delete('/delete/:idKnight')
  async DeleteKnight(
    @Param('idKnight') idKnight: string
  ): Promise<void> {
    return;
  }

  
}
