import { json } from '@sveltejs/kit'

const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': 'd521a9956emshe55685e4e113677p117148jsn93ba3b76a11b',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

export async function getweatherFrom(event) {
  console.log(event);
  const query = 'managua';
  const response = await fetch(
      'https://weatherapi-com.p.rapidapi.com/current.json?q='+query,
      FETCH_OPTIONS
  );

  const data = await response.json()

  const { location, current } = data;
  const { country, localtime, name } = location;
  const { condition, humidity, feelslikec, is_day, tempc, windkph, winddir } = current;
  const { code, text } = condition;

  const body= {
      conditioncode: code,
      conditiontext: text,
      country,
      humidity,
      localtime,
      locationname: name,
      isday: is_day,
      feelslike: feelslikec,
      temperature: tempc,
      windspeed: windkph,
      windDir: winddir
  };

  return{
    status: 200,
    body
  };
}