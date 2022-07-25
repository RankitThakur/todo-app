import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataTitle = "todolist"
  datashow: boolean = true;
  products =[{
    taskName: ""
  }]
  editindex: any = "";

  constructor(private data: TodoService) { }

  ngOnInit(): void {
   this.fatchData()
  }
  
  onAddProduct(taskName: any){
    if(this.editMode){
      this.products[this.editindex] = {
        taskName: taskName.value
      }
      this.editMode = false;
    }
    else{ 
        this.products.push({
        taskName: taskName.value
      })
      this.onSaveProduct()
    }
  }

  onSaveProduct(){
    this.data.saveProduct(this.products).subscribe(
      (res) => console.log(res),
    )
  }

  fatchData(){
    this.data.showData().subscribe((res) => {
      const dataFatch =JSON.stringify(res)
      this.products = JSON.parse(dataFatch)
    })
  }

  onDelete(taskName:any){
    this.products.splice(taskName,1)
    this.onSaveProduct()
  }

  editMode:boolean = false
  @ViewChild('id') taskName: ElementRef | any ;

  onEdit(index:number){
    this.editindex = index
    this.editMode = true;
    this.taskName.nativeElement.value = this.products[index].taskName
  }

}
