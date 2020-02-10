import { Utils } from './Utils';
import { QueryParams } from '../model';


export class QueryBuilder {

    public static createWhereStatement = (whereClause: string): string => {
        const _whereClauses = whereClause.split(',');
        let _whereString = '';
        _whereClauses.forEach((value: string, index: number) => {
            console.log(value);
            if (index !== 0) {
                _whereString += ' AND '
            }
            if (value.includes('=')) {
                const _valueEquals = value.split('=');
                if (_valueEquals[1] && _valueEquals[1].includes(',')) {
                    console.log(',')
                } else if (_valueEquals[1] && _valueEquals.includes(':')) {
                    console.log(':');
                } else {
                    console.log('else');
                    _whereString += value;
                }
            }
        });
        return ` where ${_whereString}`;
    }


    public static Select = async (tableName: string, queryParams?: QueryParams): Promise<Object> => {
        let queryString = '';
        if (queryParams && queryParams.select) {
            const _fields = queryParams.select === 'all' ? '*' : queryParams.select;
            queryString = `Select ${_fields} from ${tableName} `;
        }
        if (queryParams && queryParams.where) {
            queryString += QueryBuilder.createWhereStatement(queryParams.where);
        }
        return await Utils.executeQuery(queryString);
    }


}
