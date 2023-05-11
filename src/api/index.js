import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key':'0b7722af79mshc4c0e4b5b33925ep17fc29jsn12e8bcc8dcbf',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) =>{
  try {
    const { data } = await axios.get('https://ai-weather-by-meteosource.p.rapidapi.com/current',{
      params: {
        lat: lng,
        lon: lat,
        
        
      },
      headers: {
        'X-RapidAPI-Key': '0b7722af79mshc4c0e4b5b33925ep17fc29jsn12e8bcc8dcbf',
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
      }
    
    })
      return data;
   
  }catch (error){
    console.log(error)

  }
}