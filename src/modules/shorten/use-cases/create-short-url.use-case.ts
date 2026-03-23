import { Injectable } from '@nestjs/common'
import { customAlphabet } from 'nanoid'

import { CreateShortUrlDto, ShortUrlResponse } from '@app/modules/shorten/dto'
import {
  ShortUrlRepository,
  shortUrlStandardSelect,
} from '@app/modules/shorten/repositories/short-url.repository'

const nanoid = customAlphabet(
  '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  6,
)

/**
 * NOTE: For high-volume scenarios, consider increasing the size
 * and implementing a retry mechanism to handle potential collisions.
 */

@Injectable()
export class CreateShortUrlUseCase {
  constructor(private readonly shortUrlRepo: ShortUrlRepository) {}

  async execute(dto: CreateShortUrlDto): Promise<ShortUrlResponse> {
    return this.shortUrlRepo.model.create({
      data: { ...dto, shortCode: nanoid() },
      select: shortUrlStandardSelect,
    })
  }
}
