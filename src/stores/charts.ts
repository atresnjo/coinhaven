import type { ChartData } from '../dtos';
import { writable } from 'svelte/store';

export const chartData = writable<ChartData[]>([
	{ id: 0, name: 'BTC/USDT', price: '9441.3881', volume: '28864.479901', change: '%0.73' },
	{ id: 1, name: 'ETH/USDT', price: '235.57', volume: '88864.479901', change: '%12.73' },
	{ id: 2, name: 'LTC/USDT', price: '43.62', volume: '778864.479901', change: '%53.73' },
	{ id: 3, name: 'ADA/USDT', price: '0.7179', volume: '28564.479901', change: '%5.73' },
	{ id: 4, name: 'XRP/USDT', price: '2.5432', volume: '288.479901', change: '%99.73' }
]);