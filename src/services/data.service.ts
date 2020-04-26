import { Injectable } from '@nestjs/common';
import { QueryBuilder } from '../utils/QueryBuilder';
import { QueryParams } from '../model';

@Injectable()
export class DataService {
    async getList(object: string, query: QueryParams): Promise<any> {
        const _listOfRecords = await QueryBuilder.Select(object, query);
        return _listOfRecords;
    }

    async getRecordByIdOrKey(object: string, idOrKey: string, query: QueryParams): Promise<any> {
        const _record = await QueryBuilder.SelectRecord(object, idOrKey, query);
        return _record;
    }
}
