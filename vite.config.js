import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: '/projects/',
	plugins: [sveltekit()]
};

export default config;
