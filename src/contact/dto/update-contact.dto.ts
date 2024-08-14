import { PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    id?: number;
  
    title?: string;
  
    description?: string;
  
    tel?: number;
  
    email?: string;

    fax?:number;
    type?:string;
}
