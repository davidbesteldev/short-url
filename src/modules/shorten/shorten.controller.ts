import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { CreateShortUrlDto } from '@app/modules/shorten/dto'
import { ShortenService } from '@app/modules/shorten/shorten.service'

@Controller('shorten')
export class ShortenController {
  constructor(private readonly shortenService: ShortenService) {}

  @Post()
  @ApiOperation({ summary: 'Create short URL' })
  create(@Body() body: CreateShortUrlDto) {
    return this.shortenService.create(body)
  }
}
