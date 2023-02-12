import { Controller, Get, Query, Param, Post, Delete, Body } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { GetKnightRequestDto, PostKnightRequestDTO } from 'src/dto/controllers/KnightRequest.dto';
import { GetKnightsResponse } from "src/dto/services/get-knights.dto";
import { GetKnights } from 'src/services/knights-services/get-knights.service';

@Controller('/knights')
export class KnightsController {
  constructor(
    private readonly getKnights: GetKnights
  ) {}

  @Get('/')
  @ApiOkResponse({ type: [Object] })
  async getKnightsList(
    @Query() getKnightRequestDto: GetKnightRequestDto,
  ): Promise<GetKnightsResponse[]> {

    return await this.getKnights.listKnights(getKnightRequestDto);

  }

  @Get('/:idKnight')
  async getKnightProfile(
    @Param('idKnight') idKnight: string
  ): Promise<GetKnightsResponse> {
    
    return await this.getKnights.listOne(idKnight);
  
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
