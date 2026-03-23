import { Module } from '@nestjs/common'

import { DatabaseModule } from '@app/core/database/database.module'
import { ShortUrlRepository } from '@app/modules/shorten/repositories/short-url.repository'
import { ShortenController } from '@app/modules/shorten/shorten.controller'
import { ShortenService } from '@app/modules/shorten/shorten.service'

import * as useCases from './use-cases'

@Module({
  imports: [DatabaseModule],
  controllers: [ShortenController],
  providers: [ShortUrlRepository, ...Object.values(useCases), ShortenService],
  exports: [ShortUrlRepository],
})
export class ShortenModule {}
