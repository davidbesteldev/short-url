import { PickType } from '@nestjs/swagger'

import { CreateShortUrlDto } from '@app/modules/shorten/dto'

export class UpdateShortUrlDto extends PickType(CreateShortUrlDto, ['url']) {}
