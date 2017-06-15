import { RemoteService } from './remote.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    currencies: string[];

    constructor(
        private remote: RemoteService
    ) {
        this.currencies = [
            'usd', 'inr', 'dinr', 'pounds', 'Asd'
        ];
    }

    allCurrencies() {
        return this.currencies;
    }

    addCur(cur: string) {
        this.currencies.push(cur);
    }
}
