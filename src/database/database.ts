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


    public static mysql : TypeOrmModuleOptions = {
        type: 'mysql',
        port: 3306,
        username: 'root',
        password: '',
        database: 'typescript_node',
        synchronize: true,
        entities: []
    }
}