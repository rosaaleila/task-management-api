import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
    
    private task: TaskDto[] = [];
    
    create(task: TaskDto) {
        this.task.push(task);
    }

    findById(id: string): TaskDto {
        const foundTask = this.task.filter(task => task.id === id);

        if(foundTask.length) {
            return foundTask[0];
        }
        
        throw new NotFoundException(`Task with id ${id} not found`); 

        // throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND); 
    }
}
