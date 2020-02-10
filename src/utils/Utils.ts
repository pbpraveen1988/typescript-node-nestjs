import { getConnection } from "typeorm";

export class Utils {

    public static async executeQuery<T>(queryString: string): Promise<T> {
        return await getConnection().query(queryString)
            .then((response: any) => {
                return this.newResolvedPromise(response);
            })
    }

    public static newResolvedPromise<T>(value: T): Promise<T> {
        return new Promise((resolve, reject) => resolve(value));
    }

}