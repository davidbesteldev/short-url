import { Injectable } from '@nestjs/common'

import {
  CreateShortUrlDto,
  ShortUrlResponse,
  ShortUrlStatsResponse,
} from '@app/modules/shorten/dto'
import {
  CreateShortUrlUseCase,
  GetShortUrlStatsUseCase,
  GetShortUrlUseCase,
} from '@app/modules/shorten/use-cases'

@Injectable()
export class ShortenService {
  constructor(
    private readonly createShortUrlUseCase: CreateShortUrlUseCase,
    private readonly getShortUrlUseCase: GetShortUrlUseCase,
    private readonly getShortUrlStatsUseCase: GetShortUrlStatsUseCase,
  ) {}

  create(dto: CreateShortUrlDto): Promise<ShortUrlResponse> {
    return this.createShortUrlUseCase.execute(dto)
  }

  get(shortCode: string): Promise<ShortUrlResponse> {
    return this.getShortUrlUseCase.execute(shortCode)
  }

  getStats(shortCode: string): Promise<ShortUrlStatsResponse> {
    return this.getShortUrlStatsUseCase.execute(shortCode)
  }
}
