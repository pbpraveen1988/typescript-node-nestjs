import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
@Catch(QueryFailedError)
export class DBException implements ExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();
        const { url } = request;
        const errorResponse = {
            statu: HttpStatus.BAD_REQUEST,
            path: url,
            timestamp: new Date().toISOString(),
            message: exception.message,
        };
        response.status(HttpStatus.BAD_REQUEST).json(errorResponse);
    }
}