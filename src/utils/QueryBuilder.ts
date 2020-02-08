import { Utils } from './Utils';


export class QueryBuilder {
    public static async Select(tableName: string, fields?: string, where?: string) {
        let queryString = `Select ${fields || '*'} from ${tableName}`;
        if (where) {

        }
        return await Utils.executeQuery(queryString);
    }
}