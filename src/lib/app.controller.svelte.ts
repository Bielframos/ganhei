import type { Participant } from './app.model';
import createRaffle from './app.model';

export default function createController() {
	const raffle = createRaffle();
	let participants = $state<Participant[]>([]);
	let winnerId = $state<string | undefined>(undefined);

	function handleAddParticipant(e: Event) {
		const form = e.target as HTMLFormElement;
		const nicknameInput = form.nickname as HTMLInputElement;
		const multiplierInput = form.multiplier as HTMLInputElement;
		const formData = new FormData(form);

		const nickname = formData.get('nickname')?.toString();
		const points = formData.get('multiplier')?.toString() || '0';

		if (nickname && points) {
			raffle.addParticipant(nickname, parseInt(points));
			participants = raffle.getParticipants();
		}

		nicknameInput.value = '';
		multiplierInput.value = '';
	}

	function handleDraw() {
		winnerId = raffle.draw();
		return winnerId;
	}

	function handleClear() {
		raffle.clear();
		participants = raffle.getParticipants();
		winnerId = undefined;
	}

	return {
		get participants() {
			return participants;
		},
		get winnerId() {
			return winnerId;
		},
		handleAddParticipant,
		handleDraw,
		handleClear
	};
}