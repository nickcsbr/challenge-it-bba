import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CnpjPipe } from '../../pipes/cnpj.pipe';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() size: string = '';
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() placeholder: string = '';

  constructor(
    private currencyPipe : CurrencyPipe,
    private cnpjPipe: CnpjPipe
    ) { }

  ngOnInit(): void {
    if(this.type === 'currency') {
      this.control.setValue(this.currencyPipe.transform(this.control.value, 'BRL'));
    }
    if(this.type === 'cnpj') {
      this.control.setValue(this.cnpjPipe.transform(this.control.value));
    }    
  }
}
