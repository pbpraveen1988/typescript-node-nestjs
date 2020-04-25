import { Utils } from './Utils';
import { QueryParams } from '../model';


export class QueryBuilder {

    /*
    * @author : Praveen Kumar
    * @comment : Will generate the statement for where clause from URL 
    * @date: 2020-04-25 13:50:18
    */
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
                } else if (_valueEquals[1] && _valueEquals[1].includes(':')) {
                    console.log(':');
                    _valueEquals[1].split(":").forEach((x: string, _index: number) => {
                        if (_index !== 0) {
                            _whereString += ' OR ';
                        }
                        _whereString += _valueEquals[0] + '=' + `"${x}"`
                    })
                } else {
                    console.log('else');
                    _whereString += _valueEquals[0] + '=' + `"${_valueEquals[1]}"`;
                }
            } else if (value.includes('>=')) {
                const _valueEquals = value.split('>=');
                if (_valueEquals[1] && _valueEquals[1].includes(',')) {
                    console.log(',')
                } else if (_valueEquals[1] && _valueEquals.includes(':')) {
                    _valueEquals[1].split(":").forEach((x: string, _index: number) => {
                        if (_index !== 0) {
                            _whereString += ' OR ';
                        }
                        _whereString += _valueEquals[0] + '>=' + `"${x}"`
                    })
                } else {
                    console.log('else');
                    _whereString += _valueEquals[0] + '>=' + `"${_valueEquals[1]}"`;
                }
            } else if (value.includes('>')) {
                const _valueEquals = value.split('>');
                if (_valueEquals[1] && _valueEquals[1].includes(',')) {
                    console.log(',')
                } else if (_valueEquals[1] && _valueEquals.includes(':')) {
                    _valueEquals[1].split(":").forEach((x: string, _index: number) => {
                        if (_index !== 0) {
                            _whereString += ' OR ';
                        }
                        _whereString += _valueEquals[0] + '>' + `"${x}"`
                    })
                } else {
                    console.log('else');
                    _whereString += _valueEquals[0] + '>' + `"${_valueEquals[1]}"`;
                }
            } else if (value.includes('<=')) {
                const _valueEquals = value.split('<=');
                if (_valueEquals[1] && _valueEquals[1].includes(',')) {
                    console.log(',')
                } else if (_valueEquals[1] && _valueEquals.includes(':')) {
                    _valueEquals[1].split(":").forEach((x: string, _index: number) => {
                        if (_index !== 0) {
                            _whereString += ' OR ';
                        }
                        _whereString += _valueEquals[0] + '<=' + `"${x}"`
                    })
                } else {
                    console.log('else');
                    _whereString += _valueEquals[0] + '<=' + `"${_valueEquals[1]}"`;
                }
            } else if (value.includes('<')) {
                const _valueEquals = value.split('<');
                if (_valueEquals[1] && _valueEquals[1].includes(',')) {
                    console.log(',')
                } else if (_valueEquals[1] && _valueEquals.includes(':')) {
                    _valueEquals[1].split(":").forEach((x: string, _index: number) => {
                        if (_index !== 0) {
                            _whereString += ' OR ';
                        }
                        _whereString += _valueEquals[0] + '<' + `"${x}"`
                    })
                } else {
                    console.log('else');
                    _whereString += _valueEquals[0] + '<' + `"${_valueEquals[1]}"`;
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
        } else {
            const _fields = `id`;
            queryString = `Select ${_fields} from ${tableName} `;
        }
        if (queryParams && queryParams.where) {
            queryString += QueryBuilder.createWhereStatement(queryParams.where);
        }
        return await Utils.executeQuery(queryString);
    }


}
