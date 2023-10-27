<script lang="ts">
	let date = new Date();

	const tick = () => {
		date = new Date();
	};

	setInterval(tick, 1000);

	const formatTime = (time: number) => time.toString().padStart(2, '0');

	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getMinutes();

	$: time = `${hours}:${minutes}:${seconds}`;
</script>

<div class="rounded-[theme(spacing.fluid-4)] bg-black-800 p-fluid-6">
	<p class="text-xxl font-semibold">{time}</p>
</div>
