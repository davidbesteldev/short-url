import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { CreateShortUrlDto, UpdateShortUrlDto } from '@app/modules/shorten/dto'
import { ShortenService } from '@app/modules/shorten/shorten.service'

@Controller('shorten')
export class ShortenController {
  constructor(private readonly shortenService: ShortenService) {}

  @Post()
  @ApiOperation({ summary: 'Create short URL' })
  create(@Body() body: CreateShortUrlDto) {
    return this.shortenService.create(body)
  }

  @Get('/:shortCode')
  @ApiOperation({
    summary: 'Get short URL',
    description: 'Returns the original URL and increments the accessCount.',
  })
  get(@Param('shortCode') shortCode: string) {
    return this.shortenService.get(shortCode)
  }

  @Get('/:shortCode/stats')
  @ApiOperation({
    summary: 'Get stats from short URL',
    description: 'Returns detailed information including the total number of accesses.',
  })
  getStats(@Param('shortCode') shortCode: string) {
    return this.shortenService.getStats(shortCode)
  }

  @Put('/:shortCode')
  @ApiOperation({ summary: 'Update short URL' })
  update(@Param('shortCode') shortCode: string, @Body() body: UpdateShortUrlDto) {
    return this.shortenService.update(shortCode, body)
  }

  @Delete('/:shortCode')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete short URL' })
  delete(@Param('shortCode') shortCode: string) {
    return this.shortenService.delete(shortCode)
  }
}
