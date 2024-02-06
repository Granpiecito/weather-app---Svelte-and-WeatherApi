const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd521a9956emshe55685e4e113677p117148jsn93ba3b76a11b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function getweatherFrom(query = 'managua') {
    const response = await fetch(
        'https://weatherapi-com.p.rapidapi.com/current.json?q='+query,
        FETCH_OPTIONS

    );
    const data = await response.json()
    console.log(data);
    const { location, current } = data;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
    const { code, text } = condition;

    return {
        conditioncode: code,
        conditiontext: text,
        country,
        humidity,
        localtime,
        locationname: name,
        isday: is_day,
        feelslike: feelslike_c,
        temperature: temp_c,
        windspeed: wind_kph,
        windDir: wind_dir
    };

}
