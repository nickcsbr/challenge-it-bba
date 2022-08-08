import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICep } from 'src/app/core/models/i-cep';
import { CepService } from 'src/app/core/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss'],
})
export class CepComponent implements OnInit {
  @Input() size: string = '';
  @Input() control!: FormControl;
  @Output() cepData: EventEmitter<ICep> = new EventEmitter();

  constructor(private cepService: CepService) {}

  ngOnInit(): void {
    this.cepService.getData(this.control.value).subscribe((result) => {
      this.cepData.emit(result);
    });
  }
}
