<script>
	const appURL = 'https://example.com';
	const ogImageUrl = new URL('og-image.png', appURL).toString();
</script>

<svelte:head>
	<title>GANHEI - Sorteio de nomes interativos</title>
	<meta
		name="description"
		content="GANHEI é um sistema de sorteios interativos onde os participantes podem aumentar suas chances de vitória com Pontos de Sorte. Crie sorteios personalizados com facilidade."
	/>

	<meta
		name="keywords"
		content="sorteio, sorteios, pontos de sorte, sorteio interativo, Svelte, Svelte 5, MVC, luck points, raffle system, sorteio de nomes"
	/>

	<meta property="og:title" content="GANHEI - Sorteio de nomes interativos" />
	<meta
		property="og:description"
		content="GANHEI é um sistema de sorteios interativos onde os participantes podem aumentar suas chances de vitória com Pontos de Sorte. Crie sorteios personalizados com facilidade."
	/>
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:url" content={appURL} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="GANHEI - Sorteio de nomes interativos" />
	<meta
		name="twitter:description"
		content="GANHEI é um sistema de sorteios interativos onde os participantes podem aumentar suas chances de vitória com Pontos de Sorte. Crie sorteios personalizados com facilidade."
	/>
	<meta name="twitter:image" content={ogImageUrl} />

	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
