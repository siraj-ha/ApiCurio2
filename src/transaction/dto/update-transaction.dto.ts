import { PartialType } from '@nestjs/swagger';
import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
    public id?: number
    public name?:string
    public description?: string
    public amount?: number
    public isCompleted?: boolean
    public isCredit?: boolean
    public sourceId?: number
    public ban?: string
    public checkNumber?: string
    public checkImage?: string
    public dueDate?: Date
    public isOver?: boolean
    public operationNumber?: number
   
}