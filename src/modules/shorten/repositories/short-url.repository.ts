import { Injectable } from '@nestjs/common'

import { ShortUrlDelegate } from '@generated/prisma/models'

import { BaseRepository } from '@app/common/database/base.repository'
import { DatabaseService } from '@app/core/database/database.service'

export const shortUrlStandardSelect = {
  id: true,
  url: true,
  shortCode: true,
  createdAt: true,
  updatedAt: true,
} as const

export const shortUrlStatsSelect = {
  ...shortUrlStandardSelect,
  accessCount: true,
} as const

@Injectable()
export class ShortUrlRepository extends BaseRepository<ShortUrlDelegate> {
  constructor(prisma: DatabaseService) {
    super(prisma.shortUrl)
  }
}
