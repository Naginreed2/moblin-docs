// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import ImageZoom from 'starlight-image-zoom'
import CoolerCredit from 'starlight-cooler-credit'
import HeadingBadges from 'starlight-heading-badges'
import SidebarTopics from 'starlight-sidebar-topics'


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Moblin',
			logo: { src: './src/assets/moblin-logo.svg', },
			social: [
				{ icon: 'apple', label: 'Moblin', href: 'https://apps.apple.com/app/id6466745933' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/nt3UwHqbMM' },
				{ icon: 'github', label: 'Github', href: 'https://github.com/eerimoq/moblin' },
			],
			editLink: { baseUrl: 'https://github.com/Naginreed2/mobdocs/tree/main/', },
			components: {
				TableOfContents: './src/components/TableOfContents.astro',
				Sidebar: './src/components/Sidebar.astro',
			  },
			plugins: [
				ImageZoom(),
				HeadingBadges(),
				CoolerCredit({
					credit: {
						title: {
							en: "Ready to Stream?",
							de: "Bereit zu Streamen?",
						},
						href: "https://apps.apple.com/app/id6466745933",
						description: {
							en: "Download the App from the Appstore",
							de: "Willst du deine eigene statische Website erstellen?",
						},
					},
						showImage: true,
						customImage: "./src/assets/moblin-peek.svg",
						customImageAlt: "Moblin Logo"
					
				}),
				SidebarTopics([
					{
					  label: 'Docs',
					  link: '/docs/',
					  icon: 'open-book',
					  items: [
						{ label: 'Start here', items: ['docs'] },
						{ label: 'A - Moblin Screen', items: ['docs/a-screen/a1-overview','docs/a-screen/a2-quick-buttons','docs/a-screen/a3-info-displays'] },
						{ label: 'B - Setup Stream', items: ['docs/b-setup/b1-twitch','docs/b-setup/b2-kick','docs/b-setup/b3-youtube','docs/b-setup/b4-afreecatv','docs/b-setup/b5-obs','docs/b-setup/b6-custom'] },
						{ label: 'C - Customize Stream', items: ['docs/c-customize/c1-widgets','docs/c-customize/c2-scenes','docs/c-customize/c3-camera','docs/c-customize/c4-location','docs/c-customize/c5-media-players'] },
						{ label: 'D - Interactive Features', items: ['docs/d-interactive/d1-chat','docs/d-interactive/d2-snapshots','docs/d-interactive/d3-web-browser'] },
						{ label: 'E - Modify Moblin', items: ['docs/e-modify/e1-display','docs/e-modify/e2-cosmetics'] },
						{ label: 'F - Stream Settings', items: ['docs/f-stream/f1-stream_url','docs/f-stream/f2-stream_video_audio','docs/f-stream/f3-stream_recording','docs/f-stream/f4-stream_portrait','docs/f-stream/f5-stream_rtmp','docs/f-stream/f6-stream_srtla','docs/f-stream/f7-stream_rist','docs/f-stream/f8-stream_background','docs/f-stream/f9-stream_realtimeirl'] },
						{ label: 'G - Remote control', items: ['docs/g-remote/g1_moblin_remote','docs/g-remote/g2-obs_remote'] },
						{ label: 'H - Moblink', items: ['docs/h-moblink/h1-moblink_moblin','docs/h-moblink/h2-moblink_android','docs/h-moblink/h3-moblink_belabox'] },
						{ label: 'I - Moblin Servers', items: ['docs/i-servers/i1-rtmp-srv','docs/i-servers/i2-srtla-srv'] },
						{ label: 'J - External Devices', items: ['docs/j-external/j1-game_controllers','docs/j-external/j2-keyboards','docs/j-external/j3-dji_devices','docs/j-external/j4-cat_printers','docs/j-external/j5-tesla','docs/j-external/j6-cycling_power','docs/j-external/j7-heart_rate','docs/j-external/j8-apple_watch'] },
						{ label: 'K - Other Settings', items: ['docs/k-others/k1-bitrate_presets','docs/k-others/k2-recordings','docs/k-others/k3-stream_history','docs/k-others/k4-help_support','docs/k-others/k5-about','docs/k-others/k6-debug','docs/k-others/k7-backup_settings','docs/k-others/k8-deep_link','docs/k-others/k9-show_all'] },
					  ]
					},
					{
						label: 'Spotlight',
						link: '/spotlight/',
						icon: 'rocket',
						items: [
						  { label: 'Start here', items: ['spotlight'] },
						  { label: 'O - Features', items: ['spotlight/w-feature/w1-pip_facetrack','spotlight/w-feature/w2-mutli_rtmp',{slug: 'spotlight/w-feature/w3-replays', badge: { text: 'Testflight', variant: 'note' },}] },
						  { label: 'P - Guides', items: ['spotlight/x-guides/x1-srtla-srv'] },
						],
					},
					{
					  label: 'Dev',
					  link: '/dev/',
					  icon: 'seti:html',
					  items: [
						{ label: 'Start here', items: ['dev'] },
						{ label: 'Z - Logs', items: ['dev/b-setup/b1-twitch','dev/b-setup/b2-kick','dev/b-setup/b3-youtube','dev/b-setup/b4-afreecatv','dev/b-setup/b5-obs','dev/b-setup/b6-custom'] },
					  ],
					},
				  ]),
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
