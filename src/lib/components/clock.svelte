<script lang="ts">
	import { ClockIcon } from 'svelte-feather-icons';

	type Time = {
		hours: string;
		minutes: string;
	};

	const myTimeZone = 'Asia/Almaty';
	const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const formatTimeZoneTitle = (timeZone: string): string =>
		timeZone.replaceAll('_', ' ').replaceAll('/', ', ');

	const getTimeZoneCode = (timeZone: string) => {
		return Number(
			new Intl.DateTimeFormat('en-UK', {
				timeZone,
				timeZoneName: 'shortOffset'
			})
				.formatToParts(new Date())
				.findLast(({ type }) => type === 'timeZoneName')
				?.value.slice(3)
		);
	};

	const getTimeZonesDiff = (timeZone1: string, timeZone2: string): number => {
		return getTimeZoneCode(timeZone1) - getTimeZoneCode(timeZone2);
	};

	const timeDiff = getTimeZonesDiff(myTimeZone, localTimeZone);

	let time: Time = { hours: '00', minutes: '00' };

	const setTime = () => {
		const date = new Date();

		const options: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false,
			timeZone: myTimeZone
		};

		const timeString = date.toLocaleTimeString('en-UK', options);
		const [hours, minutes, seconds] = timeString.split(':');
		const formattedHours = hours === '24' ? '00' : hours;

		time.hours = formattedHours;
		time.minutes = minutes;

		setTimeout(setTime, (60 - +seconds) * 1000);
	};

	setTime();
</script>

<div class="flex h-full flex-wrap items-center justify-center gap-x-4">
	<div class="flex items-center gap-2">
		<ClockIcon class="flex-shrink-0" size="20" />
		<p class="font-monospace font-extrabold" title={myTimeZone && formatTimeZoneTitle(myTimeZone)}>
			{time.hours}<span class="animate-pulse">:</span>{time.minutes}
		</p>
	</div>

	<p
		class="text-sm text-black-800 text-opacity-60 dark:text-linen-100 dark:text-opacity-60"
		title={localTimeZone && formatTimeZoneTitle(localTimeZone)}
	>
		{#if timeDiff === 0}
			Same timezone
		{:else if timeDiff >= 0}
			{Math.abs(timeDiff)}h behind
		{:else}
			{Math.abs(timeDiff)}h ahead
		{/if}
	</p>
</div>
