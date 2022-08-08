import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICep } from 'src/app/core/models/i-cep';
import { MessageService } from 'src/app/core/services/message.service';
import { PoloService } from 'src/app/core/services/polo.service';

@Component({
  selector: 'app-polo-item',
  templateUrl: './polo-item.component.html',
  styleUrls: ['./polo-item.component.scss'],
})
export class PoloItemComponent implements OnInit {
  public id: string = '';
  public name: string = '';

  poloItemForm = new FormGroup({
    cep: new FormControl(''),
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
    private poloService: PoloService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') as string;
    });
    this.poloService.getPolo(this.id).subscribe((response) => {

      this.name = response.name;

      this.poloItemForm = this.formBuilder.group({
        cep: response.cep,
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
  }

  onCepDataReceived(event: ICep) {
    this.poloItemForm.patchValue({
      rua: event.logradouro,
      bairro: event.bairro,
      cidade: event.localidade,
      estado: event.uf,
    });
  }

  getFormControl(name: string): FormControl {
    return this.poloItemForm.controls[name] as FormControl;
  }

  onSubmit() {
    if (this.poloItemForm.valid) {
      this.poloService
        .setPolo(this.id, this.poloItemForm.value)
        .subscribe((response) => {
          console.log('This is the response from the fake PUT request', response);
          this.messageService
            .displayMessage('Informações atualizadas!', 'OK').subscribe((messageResponse) => {
              if(messageResponse === true) {
                this.router.navigate(['/']);
              }
            });
        });
    }
  }
}
