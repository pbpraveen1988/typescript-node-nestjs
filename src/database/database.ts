import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class Connections {
    public static postgres : TypeOrmModuleOptions = {
        type: 'postgres',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'typescriptLocal',
        synchronize: true,
        entities: []
    };
}