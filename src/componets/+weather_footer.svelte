<script>
	import { getweatherFrom } from '../services/servicesweather';
	const weatherpromise = getweatherFrom();
</script>

<footer>
	<div>
		{#await weatherpromise then weather}
			<span> Humidity </span>
			<span>
				{weather.humidity}
			</span>

			<span> Wind Speed </span>
			<span>
				{weather.windspeed} Km/h
			</span>
			<span> FeelsLike </span>
			<span>
				{weather.feelslike}°
			</span>
		{/await}
	</div>
</footer>

<style>
	footer {
		border: 2px solid #000;
		padding: 12px 32px;
		width: 80%;
		margin: 0 auto;
		border-radius: 10px;
		display: flex;
		text-align: center;
		justify-content: space-evenly;
	}

	span {
		display: block;
	}
</style>
