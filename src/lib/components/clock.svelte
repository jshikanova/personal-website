<script lang="ts">
	type Time = {
		hours: string;
		minutes: string;
		seconds: string;
	};

	export let timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const date = new Date();
	const fullDate = date.toLocaleString('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		timeZone
	});
	let time: Time = { hours: '00', minutes: '00', seconds: '00' };
	const timeZoneCode = date
		.toLocaleTimeString('en', { timeZoneName: 'short', timeZone })
		.split(' ')[2];

	const setTime = () => {
		const date = new Date();

		const options: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false,
			timeZone
		};

		const timeString = date.toLocaleTimeString('en-US', options);
		const [hours, minutes, seconds] = timeString.split(':');
		const formattedHours = hours === '24' ? '00' : hours;

		time.hours = formattedHours;
		time.minutes = minutes;
		time.seconds = seconds;
	};

	setTime();
	setInterval(setTime, 1000);
</script>

<div class="flex flex-col items-center">
	<h2 class="flex items-center gap-1 pb-1 text-sm">
		{(timeZone || '').replaceAll('_', ' ').replaceAll('/', ', ')}
	</h2>
	<p
		class="my-2 rounded-sm bg-lightblue-200 px-2 py-[0.125rem] text-xs font-semibold text-black-800"
	>
		{timeZoneCode}
	</p>
	<p class="mb-2 text-xs text-white-100 text-opacity-60">{fullDate}</p>
	<p class="font-monospace text-lg font-extrabold leading-[0.8]">
		{time.hours}<span class="animate-pulse">:</span>{time.minutes}<span class="animate-pulse"
			>:</span
		>{time.seconds}
	</p>
</div>
