import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HomeService {
    constructor(private httpClient: HttpClient) { }

    /**
     * Chama a api de previsao do tempo
     *
     * https://api.open-meteo.com
     */
    getWheader(cidade: any) {
        const parametros = [
            `latitude=${cidade?.latitude ?? '-23.25'}`,
            `longitude=${cidade?.longitude ?? '-51.125'}`,
            'current_weather=true',
            'daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min',
            'timezone=America%2FSao_Paulo'
        ].join('&');
        const url = `https://api.open-meteo.com/v1/forecast?${parametros}`;

        this.httpClient.get(url);
    }

}