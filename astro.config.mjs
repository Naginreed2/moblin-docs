// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Moblin',
			logo: { src: './src/assets/moblin-logo.svg', },
			social: [
				{ icon: 'download', label: 'Moblin', href: 'https://apps.apple.com/app/id6466745933' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/nt3UwHqbMM' },
				{ icon: 'github', label: 'Github', href: 'https://github.com/eerimoq/moblin' },
			],
			editLink: { baseUrl: 'https://github.com/Naginreed2/mobdocs/tree/main/', },
			sidebar: [
				{
					label: 'Start here',
					autogenerate: { directory: '0-start' },
				},
				{
					label: 'A-Moblin Screen',
					collapsed: false,
					autogenerate: { directory: 'a-screen' },
				},
				{
					label: 'B-Setup Stream',
					collapsed: false,
					autogenerate: { directory: 'b-setup' },
				},
				{
					label: 'C-Customize Stream',
					collapsed: false,
					autogenerate: { directory: 'c-customize' },
				},
				{
					label: 'D-Interactive Features',
					collapsed: false,
					autogenerate: { directory: 'd-interactive' },
				},
				{
					label: 'E-Modify Moblin',
					collapsed: false,
					autogenerate: { directory: 'e-modify' },
				},
				{
					label: 'F-Feature Spotlight',
					collapsed: false,
					autogenerate: { directory: 'f-feature' },
				},
				{
					label: 'G-Stream Settings',
					collapsed: false,
					autogenerate: { directory: 'g-stream' },
				},
				{
					label: 'H-Remote control',
					collapsed: false,
					autogenerate: { directory: 'h-remote' },
				},
				{
					label: 'I-Moblink',
					collapsed: false,
					autogenerate: { directory: 'i-moblink' },
				},
				{
					label: 'J-Moblin Servers',
					collapsed: false,
					autogenerate: { directory: 'j-servers' },
				},
				{
					label: 'K-External Devices',
					collapsed: false,
					autogenerate: { directory: 'k-external' },
				},
				{
					label: 'L-Other Settings',
					collapsed: false,
					autogenerate: { directory: 'l-others' },
				},
				{
					label: 'M-Guides',
					collapsed: false,
					autogenerate: { directory: 'm-guides' },
				},
				{
					label: 'N-Experimental',
					collapsed: false,
					badge: 'Testflight',
					autogenerate: { directory: 'n-experimental' },
				},
			],
			defaultLocale: 'en',
			locales: {
				en: {label: 'English',lang: 'en',},
				'zh-cn': {label: '简体中文',lang: 'zh-CN',},
				ar: {label: 'العربية',dir: 'rtl',},
				de: {label: 'Deutsch',lang: 'de'},
			  },
		}),
	],
});
