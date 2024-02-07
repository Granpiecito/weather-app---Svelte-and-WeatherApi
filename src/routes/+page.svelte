<script>
	import {getweatherFrom} from '../services/servicesweather';
    import WeatherFooter from '../componets/+weather_footer.svelte';
    const weatherpromise = getweatherFrom();
</script>

{#await weatherpromise then weather}
<section>
    <h1>{weather.locationname}</h1>
    <h4> {weather.country}</h4>
    <h2> {weather.temperature}°</h2>
    <div>
        <img src='https://cdn.weatherapi.com/weather/64x64/day/116.png'/>
        <h3> {weather.conditiontext}</h3>
    </div>
    
</section>
<WeatherFooter/>
{/await}

<style>
    section{
        padding:12px;
    }
    h1{
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    padding: 32px 0 2px 0;
    }

    h2{
        font-weight: 300;
        font-size: 120px;
        color: #ffffff; 
        text-transform: uppercase;
        padding: 0;
    }

    h3{
    font-weight: 700;
    transform: rotate(-90deg);
    position: absolute;
    top: 70px;
    right:12px ;
    color: #ffffff;
    }

    h4{
        font-weight: 400;
        font-size: 24px;
        font-display: block;
        color: #ffffff;
    }

    img{
        transform: rotate(-90deg);
        position: absolute;
        top: 145px;
        right: 40px;
    }
</style>