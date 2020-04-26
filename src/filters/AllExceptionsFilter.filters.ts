import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
  
  @Catch()
  export class AllExceptionsFilter  extends BaseExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
      super.catch(exception, host);
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
  
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }