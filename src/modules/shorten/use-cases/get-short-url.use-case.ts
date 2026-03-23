import { Injectable } from '@nestjs/common'

import { ShortUrlResponse } from '@app/modules/shorten/dto'
import {
  ShortUrlRepository,
  shortUrlStandardSelect,
} from '@app/modules/shorten/repositories/short-url.repository'

@Injectable()
export class GetShortUrlUseCase {
  constructor(private readonly shortUrlRepo: ShortUrlRepository) {}

  async execute(shortCode: string): Promise<ShortUrlResponse> {
    await this.shortUrlRepo.model.findUniqueOrThrow({
      where: { shortCode },
    })

    return await this.shortUrlRepo.model.update({
      where: { shortCode },
      data: { accessCount: { increment: 1 } },
      select: shortUrlStandardSelect,
    })
  }
}
