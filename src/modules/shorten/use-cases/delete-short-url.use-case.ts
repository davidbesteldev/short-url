import { Injectable } from '@nestjs/common'

import { ShortUrlRepository } from '@app/modules/shorten/repositories/short-url.repository'

@Injectable()
export class DeleteShortUrlUseCase {
  constructor(private readonly shortUrlRepo: ShortUrlRepository) {}

  async execute(shortCode: string): Promise<void> {
    await this.shortUrlRepo.model.findUniqueOrThrow({
      where: { shortCode },
    })

    await this.shortUrlRepo.model.delete({
      where: { shortCode },
    })
  }
}
