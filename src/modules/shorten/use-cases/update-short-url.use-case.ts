import { Injectable } from '@nestjs/common'

import { ShortUrlResponse, UpdateShortUrlDto } from '@app/modules/shorten/dto'
import {
  ShortUrlRepository,
  shortUrlStandardSelect,
} from '@app/modules/shorten/repositories/short-url.repository'

@Injectable()
export class UpdateShortUrlUseCase {
  constructor(private readonly shortUrlRepo: ShortUrlRepository) {}

  async execute(shortCode: string, dto: UpdateShortUrlDto): Promise<ShortUrlResponse> {
    await this.shortUrlRepo.model.findUniqueOrThrow({
      where: { shortCode },
    })

    return this.shortUrlRepo.model.update({
      where: { shortCode },
      data: { url: dto.url },
      select: shortUrlStandardSelect,
    })
  }
}
