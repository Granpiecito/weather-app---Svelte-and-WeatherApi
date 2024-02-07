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
				<strong>Humidity</strong>
			</div>

			<div>
				<span>
					{weather.windspeed} Km/h
				</span>
				<strong>Wind Speed</strong>
			</div>

			<div>
				<span>
					{weather.feelslike}°
				</span>
				<strong>FeelsLike</strong>
			</div>
		{/await}

</footer>

<style>
	footer {
		border: 2px solid #a7a7a7;
		padding: 12px 15px;
		width: 80%;
		margin: 0 auto;
		border-radius: 10px;
		display: flex;
		text-align: center;
		justify-content: space-around;
		position: absolute;
		left: 0;
		right: 0;
		bottom: -32px;

	}

	strong{
		display: block;
		color: #ffffff;
		font-size: 14px;
		font-weight: 700;
	}

	span {
		color: #ffffff;
		font-weight: 600;
		font-size: 14px;

	}

</style>
