import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connections } from '../database';


@Module({
    imports: [TypeOrmModule.forRoot(Connections.mysql)]
})
export class DatabaseModule { }
