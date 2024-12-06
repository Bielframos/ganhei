import type { Participant } from './app.model';
import createRaffle from './app.model';

export default function createController() {
	const raffle = createRaffle();
	let participants = $state<Participant[]>([]);
	let winnerId = $state<string | undefined>(undefined);

	function handleAddParticipant(e: Event) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const nicknameInput = form.nickname as HTMLInputElement;
		const luckyPointsInput = form.luckyPoints as HTMLInputElement;
		const formData = new FormData(form);

		const nickname = formData.get('nickname')?.toString();
		const luckyPoints = formData.get('luckyPoints')?.toString() || '1';

		if (nickname && luckyPoints) {
			raffle.addParticipant(nickname, parseInt(luckyPoints));
			participants = raffle.getParticipants();
		}

		nicknameInput.value = '';
		luckyPointsInput.value = '';

		nicknameInput.focus();
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
