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

  @Get('/list/')
  @ApiOkResponse({ type: [Object] })
  async getKnightsList(
    @Query() getKnightRequestDto: GetKnightRequestDto,
  ): Promise<GetKnightsResponse[]> {

    return await this.getKnights.listKnights(getKnightRequestDto);

  }

  @Get('/list/:idKnight')
  async getKnightProfile(
    @Param('idKnight') idKnight: string
  ): Promise<GetKnightsResponse[]> {
    
    return await this.getKnights.listOne(idKnight);
  
  }

  @Get('/view/:idKnight')
  async getKnightFullProfile(
    @Param('idKnight') idKnight: string
  ): Promise<GetKnightsResponse[]> {
    
    return await this.getKnights.viewKnight(idKnight);
  
  }

  // Estava voltando um erro, provavelmente de CORS, mas não tive tempo hábil de investigar. Como espero uma resposta da chamada, utilizei GET
  @Get('/update/')
  @ApiOkResponse({ type: [Object] })
  async getUpdateKnight(
    @Query() queryToSave: any
  ): Promise<CreateKnightResponse> {
    
    let knightToSave = JSON.parse(queryToSave.data) as PostKnightRequestDTO;
    return await this.postKnights.updateKnights(knightToSave);
  
  }

  // Estava voltando um erro, provavelmente de CORS, mas não tive tempo hábil de investigar. Como espero uma resposta da chamada, utilizei GET
  @Get('/create/')
  @ApiOkResponse({ type: [Object] })
  async getCreateKnights(
    @Query() queryToSave: any 
  ): Promise<CreateKnightResponse> {
    
    let knightToSave = JSON.parse(queryToSave.data) as PostKnightRequestDTO;
    return await this.postKnights.createKnights(knightToSave);
  
  }

  // Estava voltando um erro, provavelmente de CORS, mas não tive tempo hábil de investigar. Como espero uma resposta da chamada, utilizei GET
  @Get('/delete/:idKnight')
  async getDeleteKnight(
    @Param('idKnight') idKnight: string
  ): Promise<DeleteKnightRespone> {
  
    return await this.deleteKnights.deleteKnights(idKnight);
  
  }
  

  // Chamadas originais
  @Post('/update/')
  @ApiOkResponse({ type: [Object] })
  async updateKnight(
    @Body() knightToSave: PostKnightRequestDTO
  ): Promise<CreateKnightResponse> {
  
    return await this.postKnights.updateKnights(knightToSave);
  
  }

  @Post('/create/')
  @ApiOkResponse({ type: [Object] })
  async createKnights(
    @Body() knightToSave: PostKnightRequestDTO
  ): Promise<CreateKnightResponse> {

    return await this.postKnights.createKnights(knightToSave);
  
  }

  @Delete('/delete/:idKnight')
  async DeleteKnight(
    @Param('idKnight') idKnight: string
  ): Promise<DeleteKnightRespone> {
  
    return await this.deleteKnights.deleteKnights(idKnight);
  
  }

  
}
