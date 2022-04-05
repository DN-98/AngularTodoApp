import { Component } from '@angular/core';
import { Todo } from './models/Todo';
import { faTrash, faPenToSquare, faCheckSquare, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  faCheckSquare = faCheckSquare;
  faPlus = faPlus;
  title = 'todoApp';
  listTodo : Todo[] = [
    {
      content : "belajar",
      completed : true
    },
    {
      content: "berenang",
      completed: false
    }
  ];
  isClicked = false;
  isEdit = this.listTodo.length + 1;

  handleClicked = () => {
    this.isClicked = !this.isClicked
  }
  eventHandler = (val: any) => {
    this.listTodo = val;
  }

  handleClickDelete= (val: any) => {
    console.log(`delete ${val}`);
    this.listTodo.splice(val, 1);
  }

  handleClickEdit= (val: any) => {
    if(this.isEdit === val)
      this.isEdit = this.listTodo.length + 1;
    else{
      this.isEdit = val;
    };
    console.log(this.isEdit);
  }

  simpanHandler(id : number, val : string){
    this.listTodo[id].content = val;
    this.isEdit = this.listTodo.length + 1;
  }

  handleClickDone = (id: any) => {
    this.listTodo[id].completed = !this.listTodo[id].completed;
  }
}
