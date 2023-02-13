import { Controller, Get, Query, Param, Post, Delete, Body } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { GetKnightRequestDto, PostKnightRequestDTO } from 'src/dto/controllers/KnightRequest.dto';
import { GetKnightsResponse } from "src/dto/services/get-knights.dto";
import { CreateKnightResponse } from 'src/dto/services/post-knights.dto';
import { DeleteKnightRespone } from 'src/dto/services/delete-knights.dto';
import { GetKnights } from 'src/services/knights-services/get-knights.service';
import { PostKnights } from 'src/services/knights-services/post-knights.service';
import { DeleteKnights } from 'src/services/knights-services/delete-knights.service';

@Controller('/knights')
export class KnightsController {
  constructor(
    private readonly getKnights: GetKnights,
    private readonly postKnights: PostKnights,
    private readonly deleteKnights: DeleteKnights
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
  ): Promise<CreateKnightResponse> {

    return await this.postKnights.createKnights(knightToSave);
  
  }
  
  @Post('/update/:idKnight')
  async updateKnight(
    @Param('idKnight') idKnight: string,
    @Body() knightToSave: PostKnightRequestDTO
  ): Promise<CreateKnightResponse> {
  
    return await this.postKnights.updateKnights(idKnight, knightToSave);
  
  }

  @Delete('/delete/:idKnight')
  async DeleteKnight(
    @Param('idKnight') idKnight: string
  ): Promise<DeleteKnightRespone> {
  
    return await this.deleteKnights.deleteKnights(idKnight);
  
  }

  
}
