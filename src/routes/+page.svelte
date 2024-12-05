<script lang="ts">
	import createController from '$lib/app.controller.svelte';
	import { Clover, Info, Plus, X, InstagramIcon, YoutubeIcon, GithubIcon } from 'lucide-svelte';
	import { onMount, untrack } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import Head from './Head.svelte';

	const controller = createController();
	let winnerId = $derived(controller.winnerId);
	let timeLeft = $state(5);
	let showInfo = $state(false);

	function triggerShowInfo(e?: Event) {
		showInfo = !showInfo;
	}

	$effect(() => {
		if (winnerId) {
			const timer = setInterval(() => {
				if (untrack(() => timeLeft) > 0) {
					timeLeft -= 1;
				} else {
					clearInterval(timer);
				}
			}, 1000);
		}
	});

	onMount(() => {
		window.addEventListener('keyup', (e) => {
			if (e.key === 'Escape' && showInfo) triggerShowInfo();
		});
	});
</script>

<Head />

<main class="mx-auto mb-10 max-w-4xl px-6">
	<header class="flex justify-between py-8">
		<h1 class="text-3xl font-black uppercase">ganhei</h1>

		<button
			class="flex rounded-full p-2 ring-blue-9 transition-colors hover:bg-blue-3 hover:text-blue-12 focus:bg-blue-3 focus:text-blue-12 focus:outline-none focus:ring-4 max-lg:mr-10"
			onclick={() => triggerShowInfo()}
		>
			<Info />
		</button>
	</header>

	{#if winnerId}
		{@const winner = controller.participants.filter(
			(participant) => participant.id === winnerId
		)[0]}

		<div class="flex flex-col items-center" in:fly={{ y: 46, delay: 400 }} out:fly={{ y: 46 }}>
			{#if timeLeft === 0}
				<div
					class="relative my-40 flex flex-col items-center text-blue-11"
					in:fly={{ y: 46, delay: 400 }}
				>
					<h4 class="text-2xl">E o vencedor é:</h4>
					<span class="mt-4 text-center text-6xl font-black text-blue-12 text-white md:text-9xl"
						>{winner.nickname}</span
					>
					<button
						class="mt-4 rounded-2xl px-6 py-2 text-blue-9 transition-colors hover:bg-blue-3"
						onclick={() => controller.handleClear()}>Novo sorteio</button
					>
				</div>
			{:else}
				<div
					class="flex flex-col items-center text-blue-11"
					in:fly={{ y: 46, delay: 400 }}
					out:fly={{ y: 46 }}
				>
					<h4 class="text-2xl">Descubra o resultado em:</h4>
					<span class="text-center text-9xl font-black">{timeLeft}</span>
				</div>
			{/if}
		</div>
	{:else}
		<form
			onsubmit={controller.handleAddParticipant}
			class="grid gap-4 md:grid-cols-[1fr,_240px,_auto]"
			in:fly={{ y: 46, delay: 400 }}
		>
			<h2 class="mb-2 rounded-xl px-4 py-2 text-center text-2xl md:col-span-3">
				Adicione participantes ao sorteio 🍀
			</h2>
			<label for="nickname" class="relative flex-1">
				<span class="absolute -top-2 left-4 bg-blue-2 px-4 text-sm text-blue-12"
					>Nome do participante</span
				>
				<input
					type="text"
					id="nickname"
					name="nickname"
					placeholder="Neymar"
					class="w-full rounded-2xl border-2 border-blue-6 bg-[transparent] px-8 py-4 text-xl text-blue-12 ring-blue-9 placeholder:text-white/60 focus:outline-none focus:ring-4"
					autocomplete="off"
					autofocus
					required
				/></label
			>

			<label for="multiplier" class="relative flex-1">
				<span class="absolute -top-2 left-4 bg-blue-2 px-4 text-sm text-blue-12"
					>Pontos de sorte</span
				>
				<input
					type="text"
					id="multiplier"
					name="multiplier"
					placeholder="12"
					class="w-full rounded-2xl border-2 border-blue-6 bg-[transparent] px-8 py-4 text-xl text-blue-12 ring-blue-9 placeholder:text-white/60 focus:outline-none focus:ring-4"
					autocomplete="off"
				/></label
			>

			<button
				aria-label="Adicionar participante"
				type="submit"
				class="flex h-16 items-center justify-center gap-2 rounded-2xl border-4 border-b-8 border-blue-7 bg-blue-9 text-xl transition-all hover:bg-blue-10 focus:outline-none active:border-b-4 md:w-16"
				><Plus /> <span class="md:hidden">Adicionar</span></button
			>
		</form>

		<div class="relative">
			<button
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-4 border-b-8 border-blue-7 bg-blue-9 px-8 py-4 text-3xl transition-all hover:bg-blue-10 active:border-b-4"
				onclick={() => controller.handleDraw()}>Sortear</button
			>
			<hr class="my-20 border-4 border-blue-2" />
		</div>

		<div class="mx-auto flex max-w-md flex-col gap-4" out:fly={{ y: 46 }}>
			{#each controller.participants as participant}
				<div
					class="flex h-20 items-center justify-evenly rounded-2xl bg-blue-2 px-6 py-4 text-2xl"
					in:fly={{ y: -24 }}
				>
					<span class="text-3xl">{participant.nickname}</span>
					<span
						class="flex items-center gap-2 rounded-2xl bg-blue-3 px-4 py-2 data-[disabled=true]:hidden"
						data-disabled={participant.multiplier === 0}>{participant.multiplier} <Clover /></span
					>
				</div>
			{/each}
		</div>
	{/if}

	{#if showInfo}
		<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
		<div
			id="scrim"
			class="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-blue-1/90"
			onclick={() => triggerShowInfo()}
			transition:fade
		>
			<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
			<article
				class="relative w-full max-w-md rounded-2xl bg-blue-2 p-10"
				onclick={(e) => {
					e.stopPropagation();
				}}
				in:fly={{ y: 46, delay: 600 }}
			>
				<h2 class="text-2xl font-black">Hey there!👋</h2>
				<p class="mt-4 text-xl">
					O <b class="text-blue-12">GANHEI</b> é um projeto pessoal inspirado pela ideia de ajudar um
					amigo a organizar um sorteio de um passe de temporada para o clã dele no Clash of Clans.
				</p>
				<p class="mt-4 text-xl">
					Aqui, você pode criar sorteios de forma divertida e dinâmica: basta cadastrar uma lista de
					participantes e personalizar as chances de vitória usando <b class="text-blue-12"
						>Pontos de Sorte</b
					>.
				</p>

				<hr class="my-6 border-blue-6" />

				<h2 class="text-xl font-black">Visite minhas redes sociais:</h2>
				<div class="mt-2 flex gap-2">
					<a
						href="https://www.instagram.com/gabrielfrdev/"
						target="_blank"
						aria-label="Link para o Instagram"
						class="flex h-16 w-16 items-center justify-center gap-2 rounded-2xl border-4 border-b-8 border-blue-7 bg-blue-9 text-xl transition-all hover:bg-blue-10 focus:outline-none active:border-b-4"
						><InstagramIcon />
					</a>

					<a
						href="https://www.youtube.com/@gabrielfrdev"
						target="_blank"
						aria-label="Link para o YouTube"
						class="flex h-16 w-16 items-center justify-center gap-2 rounded-2xl border-4 border-b-8 border-blue-7 bg-blue-9 text-xl transition-all hover:bg-blue-10 focus:outline-none active:border-b-4"
						><YoutubeIcon />
					</a>

					<a
						href="https://github.com/Bielframos"
						target="_blank"
						aria-label="Link para o GitHub"
						class="flex h-16 w-16 items-center justify-center gap-2 rounded-2xl border-4 border-b-8 border-blue-7 bg-blue-9 text-xl transition-all hover:bg-blue-10 focus:outline-none active:border-b-4"
						><GithubIcon />
					</a>
				</div>

				<hr class="my-6 border-blue-6" />

				<a
					class="mt-1 flex w-fit items-center gap-2 text-sm text-white/60 hover:text-white hover:underline"
					href="https://github.com/Bielframos/ganhei"
					><GithubIcon size={16} /> Repositório no GitHub</a
				>
				<p class="text-sm text-white/60">Desenvolvido com 💖 por Gabriel França</p>

				<!-- Botão para fechar o modal -->
				<button
					class="absolute right-4 top-4 flex rounded-full p-2 ring-blue-9 transition-colors hover:bg-blue-3 hover:text-blue-12 focus:bg-blue-3 focus:text-blue-12 focus:outline-none focus:ring-4 max-lg:mr-10"
					onclick={() => triggerShowInfo()}
				>
					<X size={20} />
				</button>
			</article>
		</div>
	{/if}

	<!-- Animacão de fogos de artificio -->
	{#if winnerId && timeLeft === 0}
		<div class="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
			<div class="pointer-events-none absolute -left-[240px] top-[64px] h-[320px] md:left-[240px]">
				<DotLottieSvelte src="/fireworks-blue-9.lottie" autoplay />
			</div>
			<div
				class="pointer-events-none absolute -right-[240px] -top-[64px] h-[320px] md:right-[240px]"
			>
				<DotLottieSvelte src="/fireworks-blue-12.lottie" autoplay />
			</div>
		</div>
	{/if}

	<!-- GitHub Corner -->
	<a
		href="https://github.com/Bielframos/ganhei"
		class="github-corner"
		aria-label="Veja a fonte no GitHub"
		><svg
			width="80"
			height="80"
			viewBox="0 0 250 250"
			style="position: absolute; top: 0; border: 0; right: 0;"
			class="fill-blue-9 text-blue-1"
			aria-hidden="true"
			><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /><path
				d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
				fill="currentColor"
				style="transform-origin: 130px 106px;"
				class="octo-arm"
			/><path
				d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
				fill="currentColor"
				class="octo-body"
			/></svg
		></a
	>
</main>

<style>
	.github-corner:hover .octo-arm {
		animation: octocat-wave 560ms ease-in-out;
	}
	@keyframes octocat-wave {
		0%,
		100% {
			transform: rotate(0);
		}
		20%,
		60% {
			transform: rotate(-25deg);
		}
		40%,
		80% {
			transform: rotate(10deg);
		}
	}
	@media (max-width: 500px) {
		.github-corner:hover .octo-arm {
			animation: none;
		}
		.github-corner .octo-arm {
			animation: octocat-wave 560ms ease-in-out;
		}
	}
</style>
