<script>
	import { getweatherFrom } from '../services/servicesweather';
	const weatherpromise = getweatherFrom();
</script>

<footer>
	
		{#await weatherpromise then weather}
			<div>
				<span>
					{weather.humidity}
				</span>
				<small>Humidity</small>
			</div>

			<div>
				<span>
					{weather.windspeed} Km/h
				</span>
				<small>Wind Speed</small>
			</div>

			<div>
				<span>
					{weather.feelslike}°
				</span>
				<small>FeelsLike</small>
			</div>
		{/await}

</footer>

<style>
	footer {
		border: 2px solid #a7a7a7;
		padding: 12px 32px;
		width: 80%;
		margin: 0 auto;
		border-radius: 10px;
		display: flex;
		text-align: center;
		justify-content: space-around;

	}

	small{
		display: block;
		color: #ffffff;
		font-weight: 700;
	}

	span {
		color: #ffffff;
		font-weight: 600;

	}

</style>
