import { Injectable } from '@nestjs/common'

import { ShortUrlStatsResponse } from '@app/modules/shorten/dto'
import {
  ShortUrlRepository,
  shortUrlStatsSelect,
} from '@app/modules/shorten/repositories/short-url.repository'

@Injectable()
export class GetShortUrlStatsUseCase {
  constructor(private readonly shortUrlRepo: ShortUrlRepository) {}

  async execute(shortCode: string): Promise<ShortUrlStatsResponse> {
    return this.shortUrlRepo.model.findUniqueOrThrow({
      where: { shortCode },
      select: shortUrlStatsSelect,
    })
  }
}
