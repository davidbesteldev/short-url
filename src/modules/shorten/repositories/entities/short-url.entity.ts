import { ApiProperty } from '@nestjs/swagger'

import { ShortUrl } from '@generated/prisma/client'

export class ShortUrlEntity implements ShortUrl {
  @ApiProperty()
  id: number

  @ApiProperty()
  url: string

  @ApiProperty()
  shortCode: string

  @ApiProperty()
  accessCount: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
