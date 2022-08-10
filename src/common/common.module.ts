import { Module } from '@nestjs/common';
import { AxiosAdaper } from './adapters/axios.adapter';

@Module({
  providers: [AxiosAdaper],
  exports: [AxiosAdaper],
})
export class CommonModule {}
