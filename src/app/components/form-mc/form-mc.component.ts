import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FixerService } from '../../services/fixer.service';

@Component({
  selector: 'app-form-mc',
  templateUrl: './form-mc.component.html',
  styleUrls: ['./form-mc.component.css']
})
export class FormMcComponent implements OnInit {

  eurMask = createNumberMask({
    prefix: '€ ',
    allowDecimal: true,
    decimalLimit: 4
  });

  private patternMoney = '(?=.*\d)^([\$\€] )?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,4})?$';

  private rate = 0;
  private rateTime = 0;
  private rateTimeLimit = 10;

  changeForm = new FormGroup({
    moneyEUR: new FormControl('', [
      Validators.required,
      Validators.pattern(this.patternMoney)
    ]),
    moneyUSD: new FormControl('')
  });

  constructor(private fixerService: FixerService) { }

  ngOnInit() {
  }

  async updateMoneyChange() {
    if (this.rateTime === 0 || (Date.now() - this.rateTime) / 60000 > this.rateTimeLimit) {
      this.rateTime = Date.now();
      this.rate = <number>await this.fixerService.getExchangeRateUSD();
    }

    let eur = this.changeForm.value.moneyEUR.replace(/[$€ ,]/g, '');

    this.changeForm.patchValue({
      moneyUSD: `$ ${ Number(this.rate * eur).toFixed(4) }`
    });
  }

}
