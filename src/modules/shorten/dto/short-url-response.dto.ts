import { PickType } from '@nestjs/swagger'

import { ShortUrlEntity } from '@app/modules/shorten/repositories/entities/short-url.entity'

export class ShortUrlResponse extends PickType(ShortUrlEntity, [
  'id',
  'url',
  'shortCode',
  'createdAt',
  'updatedAt',
]) {}

export class ShortUrlStatsResponse extends ShortUrlEntity {}
