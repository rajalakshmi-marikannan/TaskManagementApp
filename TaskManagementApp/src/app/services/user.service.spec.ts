import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { of } from 'rxjs';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach((async () => {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [HttpClientModule]
    }).compileComponents();

  }));

  describe('getUsers', () => {
    it('should return an array of users', (inject([HttpClient], async (http) => {
      const mockUsers = [{
        id: 2,
        username: 'Rajalakshmi',
        password: 'Raji456',
        email: 'rajalakshmi.marikannan@incipientus.com'
      }];

      spyOn(http, 'get').and.returnValue(of(mockUsers));
      const service = new UserService(http);
      service.getUsers().subscribe((users) => {
        // Assert the response matches the mock users
        expect(users).toEqual(mockUsers);
      });

    })));
  });

  describe('getUser', () => {
    it('should return a single user', (inject([HttpClient], async (http) => {
      const mockUser = {
        id: 2,
        username: 'Rajalakshmi',
        password: 'Raji456',
        email: 'rajalakshmi.marikannan@incipientus.com'
      }

      spyOn(http, 'get').and.returnValue(of(mockUser));
      const service = new UserService(http);
      service.getUser(mockUser.id).subscribe(user => {
        expect(user).toEqual(mockUser)
      });

    })));
  });

  describe('createUser', () => {
    it('should return the new user', (inject([HttpClient], async (http) => {
      const mockUser = {
        id: 2,
        username: 'Rajalakshmi',
        password: 'Raji456',
        email: 'rajalakshmi.marikannan@incipientus.com'
      }

      const service = new UserService(http);
      spyOn(http, 'post').and.returnValue(of(mockUser));
      service.createUser(mockUser).subscribe(user => {
        expect(user).toEqual(mockUser);
      });

    })));
  });

  describe('updateUser', () => {
    it('should return true', (inject([HttpClient], async (http) => {
      const mockUser = {
        id: 2,
        username: 'Rajalakshmi',
        password: 'Raji789',
        email: 'rajalakshmi.marikannan@incipientus.com'
      }

      const service = new UserService(http);
      spyOn(http, 'put').and.returnValue(of(true));
      service.updateUser(mockUser).subscribe(response => {
        expect(response).toEqual(true)
      })

    })));
  });

  describe('deleteUser', () => {
    it('should return true', (inject([HttpClient], async (http) => {
      const mockUser = {
        id: 2,
        username: 'Rajalakshmi',
        password: 'Raji456',
        email: 'rajalakshmi.marikannan@incipientus.com'
      }

      const service = new UserService(http);
      spyOn(http, 'delete').and.returnValue(of(true));
      service.deleteUser(mockUser.id).subscribe(response => {
        expect(response).toEqual(true)
      })

    })));
  });

});
