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
			title: 'Moblin Docs',
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
					  link: '/',
					  icon: 'open-book',
					  items: [
						{ label: 'Start here', items: [''] },
						{ label: 'A - Moblin Screen', items: ['a-screen/a1-overview','a-screen/a2-quick-buttons','a-screen/a3-info-displays'] },
						{ label: 'B - Setup Stream', items: ['b-setup/b1-twitch','b-setup/b2-kick','b-setup/b3-youtube','b-setup/b4-afreecatv','b-setup/b5-obs','b-setup/b6-custom'] },
						{ label: 'C - Customize Stream', items: ['c-customize/c1-widgets','c-customize/c2-scenes','c-customize/c3-camera','c-customize/c4-location','c-customize/c5-media-players'] },
						{ label: 'D - Interactive Features', items: ['d-interactive/d1-chat','d-interactive/d2-snapshots','d-interactive/d3-web-browser'] },
						{ label: 'E - Modify Moblin', items: ['e-modify/e1-display','e-modify/e2-cosmetics'] },
						{ label: 'F - Stream Settings', items: ['f-stream/f1-stream_url','f-stream/f2-stream_video_audio','f-stream/f3-stream_recording','f-stream/f4-stream_portrait','f-stream/f5-stream_rtmp','f-stream/f6-stream_srtla','f-stream/f7-stream_rist','f-stream/f8-stream_background','f-stream/f9-stream_realtimeirl'] },
						{ label: 'G - Remote control', items: ['g-remote/g1_moblin_remote','g-remote/g2-obs_remote'] },
						{ label: 'H - Moblink', items: ['h-moblink/h1-moblink_moblin','h-moblink/h2-moblink_android','h-moblink/h3-moblink_belabox'] },
						{ label: 'I - Moblin Servers', items: ['i-servers/i1-rtmp-srv','i-servers/i2-srtla-srv'] },
						{ label: 'J - External Devices', items: ['j-external/j1-game_controllers','j-external/j2-keyboards','j-external/j3-dji_devices','j-external/j4-cat_printers','j-external/j5-tesla','j-external/j6-cycling_power','j-external/j7-heart_rate','j-external/j8-apple_watch'] },
						{ label: 'K - Other Settings', items: ['k-others/k1-bitrate_presets','k-others/k2-recordings','k-others/k3-stream_history','k-others/k4-help_support','k-others/k5-about','k-others/k6-debug','k-others/k7-backup_settings','k-others/k8-deep_link','k-others/k9-show_all'] },
					  ]
					},
					{
						label: 'Spotlight',
						link: '/spotlight/',
						icon: 'rocket',
						items: [
						  { label: 'Info', items: ['spotlight'] },
						  { label: 'O - Features', items: ['spotlight/w-feature/w1-pip_facetrack','spotlight/w-feature/w2-mutli_rtmp',{slug: 'spotlight/w-feature/w3-replays', badge: { text: 'Testflight', variant: 'note' },}] },
						  { label: 'P - Guides', items: ['spotlight/x-guides/x1-srtla-srv'] },
						],
					},
					{
					  label: 'Technical and Dev',
					  link: '/dev/',
					  icon: 'seti:json',
					  items: [
						{ label: 'Info', items: ['dev'] },
						{ label: 'X - Dev', items: ['dev/x-dev/x1-intro','dev/x-dev/x2-files'] },
						{ label: 'Y - Support', items: ['dev/y-support/y1-faq'] },
						{ label: 'Z - Logs', items: ['dev/z-logs/z1-reading-logs'] },
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
