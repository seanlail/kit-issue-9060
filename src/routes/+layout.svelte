<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';

	import type { LayoutData } from './$types';
	import { config } from '../config.client';

	export let data: LayoutData;
</script>

<div class="app">
	<Header />

	<h4>Private</h4>
	<ul>
		<li>nodeEnvironment: {data.nodeEnvironment}</li>
		<li>privateEnvKey: {data.privateEnvKey}</li>
		<li>prodOnlyKey: {data.prodOnlyKey}</li>
	</ul>

	<h4>Public</h4>
	<ul>
		<li>publicEnvVar: {config.publicEnvVar}</li>
	</ul>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
