export type Participant = { id: string; nickname: string; multiplier: number };

export type Raffle = {
	getParticipants: () => Participant[];
	getTickets: () => string[];
	addParticipant: (nickname: string, multiplier: number) => Participant;
	draw: () => string;
	clear: () => void;
};

export default function createRaffle(): Raffle {
	let participants: Participant[] = [];
	let tickets: string[] = [];

	function addParticipant(nickname: string, multiplier: number): Participant {
		const newParticipant = { id: crypto.randomUUID(), nickname, multiplier };
		const newParticipantTickets = new Array(multiplier).fill(newParticipant.id);

		tickets = tickets.concat(newParticipantTickets);
		participants.push(newParticipant);
		return newParticipant;
	}

	function getParticipants() {
		return participants;
	}

	function getTickets() {
		return tickets;
	}

	function draw() {
		let shuffledTickets = tickets;

		for (let i = shuffledTickets.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledTickets[i], shuffledTickets[j]] = [shuffledTickets[j], shuffledTickets[i]];
		}

		return shuffledTickets[Math.floor(Math.random() * tickets.length)];
	}

	function clear() {
		participants = [];
		tickets = [];
	}

	return {
		getParticipants,
		getTickets,
		addParticipant,
		draw,
		clear
	};
}
