import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TaskService } from './task.service';
import { of } from 'rxjs';

describe('TaskService', () => {

  beforeEach((async () => {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [HttpClientModule]
    }).compileComponents();

  }));

  describe('getTasks', () => {
    it('should return an array of tasks', (inject([HttpClient], async (http) => {
      const mockTasks = [{
        id: 1,
        title: 'Implement Test',
        description: 'Implement Test for Internship',
        createdDate: '2024-02-03 17:00:00.4479888',
        dueDate: '2024-02-11 17:00:00.4479888',
        isCompleted: true,
        user: 'Rajalakshmi'
      }];

      const service = new TaskService(http);
      spyOn(http, 'get').and.returnValue(of(mockTasks));
      service.getTasks().subscribe(tasks => {
        expect(tasks).toEqual(mockTasks)
      })

    })));
  });

  describe('getTask', () => {
    it('should return a single task', (inject([HttpClient], async (http) => {
      const mockTask = {
        id: 1,
        title: 'Implement Test',
        description: 'Implement Test for Internship',
        createdDate: '2024-02-03 17:00:00.4479888',
        dueDate: '2024-02-11 17:00:00.4479888',
        isCompleted: true,
        user: 'Rajalakshmi'
      };

      const service = new TaskService(http);
      spyOn(http, 'get').and.returnValue(of(mockTask));
      service.getTask(mockTask.id).subscribe(task => {
        expect(task).toEqual(mockTask)
      })

    })));
  });

  describe('createTask', () => {
    it('should return true', (inject([HttpClient], async (http) => {
      const mockTask = {
        id: 1,
        title: 'Implement Test',
        description: 'Implement Test for Internship',
        createdDate: '2024-02-03 17:00:00.4479888',
        dueDate: '2024-02-11 17:00:00.4479888',
        isCompleted: true,
        user: 'Rajalakshmi'
      };

      const service = new TaskService(http);
      spyOn(http, 'post').and.returnValue(of(true));
      service.createTask(mockTask).subscribe(response => {
        expect(response).toEqual(true)
      })

    })));
  });

  describe('updateTask', () => {
    it('should return true', (inject([HttpClient], async (http) => {
      const mockTask = {
        id: 1,
        title: 'Implement Test',
        description: 'Implement Test for Internship',
        createdDate: '2024-02-03 17:00:00.4479888',
        dueDate: '2024-02-11 17:00:00.4479888',
        isCompleted: true,
        user: 'Rajalakshmi'
      };

      const service = new TaskService(http);
      spyOn(http, 'put').and.returnValue(of(true));
      service.updateTask(mockTask).subscribe(response => {
        expect(response).toEqual(true)
      })

    })));
  });

  describe('deleteTask', () => {
    it('should return true', (inject([HttpClient], async (http) => {
      const mockTask = {
        id: 1,
        title: 'Implement Test',
        description: 'Implement Test for Internship',
        createdDate: '2024-02-03 17:00:00.4479888',
        dueDate: '2024-02-11 17:00:00.4479888',
        isCompleted: true,
        user: 'Rajalakshmi'
      };

      const service = new TaskService(http);
      spyOn(http, 'delete').and.returnValue(of(true));
      service.deleteTask(mockTask.id).subscribe(response => {
        expect(response).toEqual(true)
      })

    })));
  });

});
