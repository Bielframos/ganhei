import { describe, it, expect } from 'vitest';
import createRaffle from '$lib/app.model';

describe('Testa o funcionamneto da aplicação', () => {
	it('Deve criar um objeto do tipo Raffle com os métodos corretos', () => {
		const raffle = createRaffle();

		expect(raffle).toBeTypeOf('object');
		expect(raffle.addParticipant).toBeTypeOf('function');
		expect(raffle.getParticipants).toBeTypeOf('function');

		// Verifica o estado inicial do sorteio
		expect(raffle.getParticipants()).toEqual([]);
	});

	it('Deve permitir adicionar participantes e atualizar o estado', () => {
		const raffle = createRaffle();
		const { id, nickname, multiplier } = raffle.addParticipant('Bielframos', 20);
		expect(typeof id === 'string' && id.length === 36).toBe(true);
		expect(nickname).toBe('Bielframos');
		expect(multiplier).toBe(20);
	});

	it('Um participante deve ter tickets equivalentes a sua pontuação', () => {
		const raffle = createRaffle();
		const bielframos = raffle.addParticipant('Bielframos', 6);
		const lotto = raffle.addParticipant('Lotto', 10);
		const tickets = raffle.getTickets();

		const bielframosOccurences = tickets.filter((ticket) => ticket === bielframos.id).length;
		const lottoOccurences = tickets.filter((ticket) => ticket === lotto.id).length;
		expect(bielframosOccurences).toBe(6);
		expect(lottoOccurences).toBe(10);

		const totalTickets = raffle.getTickets().length;
		expect(totalTickets).toBe(16);
	});

	it('Deve retornar o ID do ganhador de forma aleatória', () => {
		const raffle = createRaffle();
		raffle.addParticipant('Bielframos', 6);
		raffle.addParticipant('Lotto', 10);
		raffle.addParticipant('Mayke', 4);

		const winner = raffle.draw();
		expect(typeof winner === 'string' && winner.length === 36).toBe(true);
	});

	it('Deve limpar o sorteio possibilitando o início de um novo sorteio', () => {
		const raffle = createRaffle();
		raffle.addParticipant('Bielframos', 6);
		raffle.addParticipant('Lotto', 10);
		raffle.addParticipant('Mayke', 4);

		const winner = raffle.draw();
		expect(typeof winner === 'string' && winner.length === 36).toBe(true);

		raffle.clear();
		const participants = raffle.getParticipants();
		const tickets = raffle.getTickets();

		expect(participants.length).toBe(0);
		expect(tickets.length).toBe(0);
	});
});
