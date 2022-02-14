
let table = [];
let residentArr = [];
let arrayOfPlanetObj = [];
let speciesArr = [];

async function getPlanet(url) {
  try {
    const planets = await fetch(url); //fetch url with planet list
    console.group("Loading planets...");

    const data = await planets.json(); //response convertation

    const planet = Object.assign({}, data.results); //separate planet url
    //create array of planet objects
    for (let key in planet) {
      if (planet[key].residents.length !== 0) {
        arrayOfPlanetObj.push(
          Object.assign(
            {},
            { planet: planet[key].name, residents: planet[key].residents }
          )
        );
        console.log(`Loading planet --> ${planet[key].name}...`);
      }
    }
    //return result
    return arrayOfPlanetObj;
  } catch (err) {
    console.error("Error: ", err.message);
  } finally {
    console.group("Success: All planets is loaded!");
    console.groupEnd();
    console.groupEnd();
  }
}

const getResidents = async (planet) => {
  try {
    let residentArray = [];
    // create array of residents for each planet
    for (let key in planet) {
      residentArray.push(planet[key].residents);
    }
    console.group("Loading residents...");
    const rawUrls = residentArray;
    //concatenate urls in one array
    const urls = rawUrls.flat();

    const results = [];
    for (let i = 0; i < urls.length; i++) {
      const rawData = fetch(urls[i]); //fetch residents

      results.push(rawData);
    }
    const raw = await Promise.all(results).then(
      (data) => data.map((item) => item.json()) //response convertation
    );
    const fresh = await Promise.all(raw);

    fresh.forEach((item) =>
      console.log(`Loading resident --> ${item.name}...`)
    );

    residentArr = fresh;
    //return result
    return fresh;
  } catch (err) {
    console.error("Error: ", err.message);
  } finally {
    console.group("Success: All residents is loaded!");
    console.groupEnd();
    console.groupEnd();
  }
};

const getSpecies = async (data) => {
  try {
    // create array of species for each
    // resident("Human" if resident haven't species)
    const rawUrls = await data.map((item) => {
      if (item.species.length === 0) {
        return (item.species = ["https://swapi.dev/api/species/1/"]);
      } else {
        return item.species;
      }
    });
    console.group("Loading species...");
    //concatenate urls in one array
    const urls = rawUrls.flat();

    const results = [];
    for (let i = 0; i < urls.length; i++) {
      const rawData = fetch(urls[i]); //fetch species
      results.push(rawData);
    }
    const raw = await Promise.all(results).then(
      (data) => data.map((item) => item.json()) //response convertation
    );
    const fresh = await Promise.all(raw);
    fresh.forEach((item) => console.log(`Loading species --> ${item.name}...`));
    speciesArr = fresh;
    //return result
    return fresh;
  } catch (err) {
    console.error("Error: ", err.message);
  } finally {
    console.group("Success: All species is loaded!");
    console.groupEnd();
    console.groupEnd();
  }
};

async function postTable(sourse) {
  try {
    await getPlanet(sourse) //call all planet
      .then((data) => getResidents(data)) //call all residents
      .then((data) => getSpecies(data)); //call all species

    console.info("Creating table...");
    //create array of objects for each resident with planet name
    for (let key in arrayOfPlanetObj) {
      arrayOfPlanetObj[key].residents.forEach((item) =>
        table.push(Object.assign({}, { planet: arrayOfPlanetObj[key].planet }))
      );
    }
    //add residentName and spiceis
    table.forEach((item, i) => {
      Object.assign(item, {
        residentName: residentArr[i].name,
        species: speciesArr[i].name,
      });
    });
  } catch (err) {
    console.error("Error: ", err.message);
  } finally {
    return table;
  }
}

export async function setTableToSStorage(page) {
  try {
    clearSStorage();
    postTable(`https://swapi.dev/api/planets/?page=${page}`).then((data) => {
      sessionStorage.setItem("swapi", JSON.stringify(data));
      console.table(data);
    });
   
  } catch (err) {
    console.error("Error: ", err.message);
  } finally {
    console.log("Loading will be success!");
  }
}

function clearSStorage() {
  sessionStorage.setItem("swapi", []);
}
