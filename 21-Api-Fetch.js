async function weather(city) {
  try {
    const options = {
      method: "GET",
    };

    const data = await fetch(
      `http://api.weatherstack.com/current?access_key=80d7b6b428991b8b07ff93b077c1e449&query=${city}`,
      options
    );

    const result = await data.json();

    return {
      City: result.location.name,
      Country: result.location.country,
      Time: result.location.localtime,
      Temperature: result.current.temperature,
    };
  } catch (error) {
    console.log(error.message);
  }
}

weather("Bengaluru").then((data) => console.log(data));
