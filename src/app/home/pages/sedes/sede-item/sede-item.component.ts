import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IBusiness } from 'src/app/core/models/i-business';
import { ICep } from 'src/app/core/models/i-cep';
import { SedeService } from 'src/app/core/services/sede.service';

@Component({
  selector: 'app-sede-item',
  templateUrl: './sede-item.component.html',
  styleUrls: ['./sede-item.component.scss'],
})
export class SedeItemComponent implements OnInit {
  polo!: IBusiness;
  private id: string = '';

  cep!: FormControl;

  sedeItemForm = new FormGroup({
    // cep: new FormControl(''),
    rua: new FormControl(''),
    bairro: new FormControl(''),
    estado: new FormControl(''),
    cidade: new FormControl(''),

    name: new FormControl(''),
    business: new FormControl(''),
    valuation: new FormControl(''),
    cnpj: new FormControl(''),
    active: new FormControl(''),
  });

  constructor(
    private sedeService: SedeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') as string;
    });
    this.sedeService.getSede(this.id).subscribe((response) => {
      this.polo = response;

      this.cep = new FormControl(response.cep);

      this.sedeItemForm = this.formBuilder.group({
        name: response.name,
        business: response.business,
        valuation: response.valuation,
        cnpj: response.cnpj,
        active: response.active,
        estado: '',
        rua: '',
        cidade: '',
        bairro: '',
      });
    });

    if (this.sedeItemForm.controls['cep']) {
      this.sedeItemForm.controls['cep'].valueChanges.subscribe((value) => {
        console.log(value);
      });
    }
  }

  onCepDataReceived(event: ICep) {
    this.sedeItemForm.patchValue({
      rua: event.logradouro,
      bairro: event.bairro,
      cidade: event.localidade,
      estado: event.uf,
    });
  }
}
