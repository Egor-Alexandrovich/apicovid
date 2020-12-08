export async function getFlag() {
    try {
        const url = `https://restcountries.eu/rest/v2/all?fields=name;population;flag;alpha2Code`;
        const res = await fetch(url);
        if(res.status == 404) {
        }
        if(res.ok) {
            const data = await res.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
  }