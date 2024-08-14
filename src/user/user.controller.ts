import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags()
export class UserController {
 
  constructor(private readonly userService: UserService) {}

  
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    // return "hello"
    return this.userService.create(createUserDto);
  }

  @Get('users')
  findAll() {
    return this.userService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOneById(+id);
  } 

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
   let userId=7
    return this.userService.update(id,userId, UpdateUserDto,);
  } 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  } 
  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete: number[]) {
 
    return this.userService.removeMultiple(toDelete);
  } 
}
