import { Component, OnInit } from '@angular/core';
import { ICONES } from './model/home.model';

@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	ICONES:any = ICONES;

	currentCity = {
		nome: 'Londrina/PR',
		latitude: -23.25,
		longitude: -51.125,
	};

	iconDesc = { icon: 'sol', desc: 'Dia Ensolarado' };

	cidades = [
		{
			label: 'Londrina/PR',
			value: {
				nome: 'Londrina/PR',
				latitude: -23.25,
				longitude: -51.125,
			}
		},
		{
			label: 'São Paulo/SP',
			value: {
				nome: 'São Paulo/SP',
				latitude: -23.55,
				longitude: -46.64,
			}
		}
	];

	retornoAPI: any = {
		latitude: -23.25,
		longitude: -51.125,
		generationtime_ms: 0.3210306167602539,
		utc_offset_seconds: -10800,
		timezone: "America/Sao_Paulo",
		timezone_abbreviation: "-03",
		elevation: 585,
		current_weather: {
			temperature: 15.6,
			windspeed: 3.1,
			winddirection: 144,
			weathercode: 61,
			is_day: 0,
			time: "2023-05-30T21:00"
		},
		daily_units: {
			time: "iso8601",
			weathercode: "wmo code",
			temperature_2m_max: "°C",
			temperature_2m_min: "°C",
			apparent_temperature_max: "°C",
			apparent_temperature_min: "°C"
		},
		daily: {
			time: [
				"2023-05-30",
				"2023-05-31",
				"2023-06-01",
				"2023-06-02",
				"2023-06-03",
				"2023-06-04",
				"2023-06-05"
			],
			weathercode: [
				80,
				3,
				45,
				45,
				1,
				1,
				45
			],
			temperature_2m_max: [
				18.4,
				20.3,
				23,
				22.7,
				23.4,
				25,
				23.3
			],
			temperature_2m_min: [
				14.5,
				15.9,
				13.6,
				13.4,
				13.2,
				11.6,
				11.7
			],
			apparent_temperature_max: [
				18.1,
				21.8,
				24.1,
				23.1,
				24.5,
				25.8,
				23.9
			],
			apparent_temperature_min: [
				14.6,
				16.4,
				14.2,
				13.7,
				13.3,
				11.4,
				11.6
			]
		}
	};

	constructor() {
		this.iconDesc = this.calculaIntencidadeTemperaturaWMO(this.retornoAPI.current_weather.weathercode);
	}

	ngOnInit() { }

	/** Refatorar para PIPE nas próximas aulas */
	calculaIntencidadeTemperaturaWMO(wmo: number) {
		/** Código	     Descrição
			0	         Céu limpo
			1, 2, 3	     Principalmente limpo, parcialmente nublado e encoberto
			45, 48	     Nevoeiro e depósito de nevoeiro de geada
			51, 53, 55   Garoa: Intensidade leve, moderada e densa
			56, 57	     Garoa Congelante: Intensidade leve e densa
			61, 63, 65   Chuva: Intensidade leve, moderada e forte
			66, 67	     Chuva Congelante: Intensidade leve e forte
			71, 73, 75   Queda de neve: Intensidade leve, moderada e forte
			77	         Grãos de neve
			80, 81, 82   Pancadas de chuva: Leves, moderadas e violentas
			85, 86	     Aguaceiros de neve leves e pesados
			95 *	     Trovoada: leve ou moderada
			96, 99 *     Trovoada com granizo leve e forte

			*-  A previsão de trovoada com granizo só está disponível na Europa Central
		*/

		if (wmo < 1) return { icon: 'sol', desc: 'Dia Ensolarado' };
		if (wmo > 0 && wmo < 51) return { icon: 'nublado', desc: 'Dia Nublado' };
		if (wmo > 50 && wmo < 60) return { icon: 'garoa', desc: 'Garoando' };
		return { icon: 'chuva', desc: 'Muita chuva' };
	}
}