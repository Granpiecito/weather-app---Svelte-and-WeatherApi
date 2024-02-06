<script>
	import {getweatherFrom} from '../services/servicesweather';
    const weatherpromise = getweatherFrom();
</script>

{#await weatherpromise then weather}
<section>
    <h1>{weather.locationname}</h1>
    <h2> {weather.temperature}°</h2>
    <h3> {weather.conditiontext}</h3>
    <h4> {weather.windspeed} Km/h</h4>
</section>

{/await}

<style>
    section{
        padding:12px;
    }
    h1{
    font-weight: 400;
    color: #333;
    text-transform: uppercase;
    padding: 32px 0 2px 0;
    }

    h2{
        font-weight: 300;
        font-size: 120px;
        color: #333; 
        text-transform: uppercase;
        padding: 0;
    }

    h3{
    font-weight: 700;
    transform: rotate(-90deg);
    position: absolute;
    top: 70px;
    right: 11px;
    }
</style>