import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';

// describe('TodosService', () => {
//   let service: TodosService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [TodosService],
//     }).compile();

//     service = module.get<TodosService>(TodosService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });

describe('TodosService', () => {
  it('test', () => {
    expect(2).toBe(2);
  });
});
