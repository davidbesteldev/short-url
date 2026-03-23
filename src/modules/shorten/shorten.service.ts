import { Injectable } from '@nestjs/common'

import { CreateShortUrlDto, CreateShortUrlResponse } from '@app/modules/shorten/dto'
import { CreateShortUrlUseCase } from '@app/modules/shorten/use-cases'

@Injectable()
export class ShortenService {
  constructor(private readonly createShortUrlUseCase: CreateShortUrlUseCase) {}

  create(dto: CreateShortUrlDto): Promise<CreateShortUrlResponse> {
    return this.createShortUrlUseCase.execute(dto)
  }
}
