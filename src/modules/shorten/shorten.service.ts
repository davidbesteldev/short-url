import { Injectable } from '@nestjs/common'

import {
  CreateShortUrlDto,
  ShortUrlResponse,
  ShortUrlStatsResponse,
  UpdateShortUrlDto,
} from '@app/modules/shorten/dto'
import {
  CreateShortUrlUseCase,
  DeleteShortUrlUseCase,
  GetShortUrlStatsUseCase,
  GetShortUrlUseCase,
  UpdateShortUrlUseCase,
} from '@app/modules/shorten/use-cases'

@Injectable()
export class ShortenService {
  constructor(
    private readonly createShortUrlUseCase: CreateShortUrlUseCase,
    private readonly getShortUrlUseCase: GetShortUrlUseCase,
    private readonly getShortUrlStatsUseCase: GetShortUrlStatsUseCase,
    private readonly updateShortUrlUseCase: UpdateShortUrlUseCase,
    private readonly deleteShortUrlUseCase: DeleteShortUrlUseCase,
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

  update(shortCode: string, dto: UpdateShortUrlDto): Promise<ShortUrlResponse> {
    return this.updateShortUrlUseCase.execute(shortCode, dto)
  }

  delete(shortCode: string): Promise<void> {
    return this.deleteShortUrlUseCase.execute(shortCode)
  }
}
