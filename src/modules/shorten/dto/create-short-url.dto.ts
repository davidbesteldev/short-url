import { PickType } from '@nestjs/swagger'
import { IsUrl } from 'class-validator'

import { ShortUrlEntity } from '@app/modules/shorten/repositories/entities/short-url.entity'

export class CreateShortUrlDto {
  @IsUrl()
  url: string
}

export class CreateShortUrlResponse extends PickType(ShortUrlEntity, [
  'id',
  'url',
  'shortCode',
  'createdAt',
  'updatedAt',
]) {}
