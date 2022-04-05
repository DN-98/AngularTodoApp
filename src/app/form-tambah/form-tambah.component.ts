import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../models/Todo';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-tambah',
  templateUrl: './form-tambah.component.html',
  styleUrls: ['./form-tambah.component.css']
})
export class FormTambahComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  @Input() listTodo : Todo[] = [];
  @Output() onAddList = new EventEmitter();

  handleClicked = (val : string) => {
    this.listTodo = [...this.listTodo, {content: val, completed: false}];
    this.onAddList.emit(this.listTodo);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
