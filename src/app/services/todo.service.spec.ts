import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TodoService } from './todo.service';


describe('TodoService', () => {
  let service: TodoService;
  let httpContoller: HttpTestingController;

  beforeEach(() => 
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [TodoService ]
    }));
  beforeEach(() =>{
    service = TestBed.inject(TodoService);
    httpContoller = TestBed.inject(HttpTestingController)
  });
  it('should be check httpClient get ', () => {
    let service: TodoService = TestBed.get<any>(TodoService);
    expect(service.showData()).toBeTruthy();
  });
  it('serviceUrl', () => {
    expect(service.serviceURL).toBe("https://todonew-5bc3d-default-rtdb.firebaseio.com/products.json")
  });

});


// import { of } from "rxjs";
// import { TodoService } from "./todo.service";

// describe('TodoService', () => {
//   let service: TodoService;
//   let mockhttpClient: any;
//   let mockMessageSerivce: any;

//   beforeEach(function () {
//     service = new TodoService(mockhttpClient);
//   });
//   it('it should return heros data', () => {
//     let response;
//     let mockResponse: any = "https://todonew-5bc3d-default-rtdb.firebaseio.com/products.json";
//     spyOn(service, 'showData').and.returnValue(of(mockResponse));
//     service.showData().subscribe(res => { response = res});
//     expect(response).toEqual(mockResponse);
//   });
// });