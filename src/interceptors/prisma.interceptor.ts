import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isPrismaError } from 'src/utils/is-prisma-error.util';

@Injectable()
export class PrismaInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                catchError((error) => {
                    console.log(error)
                    if (isPrismaError(error)) {
                        throw new BadRequestException('Database error');
                    } else {
                        throw error;
                    }
                }),
            );
    }
}
