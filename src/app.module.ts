import { Module } from '@nestjs/common'

import { EnvModule } from '@app/core/config'
import { DatabaseModule } from '@app/core/database/database.module'
import { ShortenModule } from '@app/modules/shorten/shorten.module'

@Module({
  imports: [EnvModule, DatabaseModule, ShortenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
