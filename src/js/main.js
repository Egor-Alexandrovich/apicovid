export async function getCovid19Info() {
  try {
      const url = `https://api.covid19api.com/summary`;
      // url = "https://api.covid19api.com/total/country/belarus/status/confirmed";
      const res = await fetch(url);
      if(res.status == 404) {
      }
      if(res.ok) {
          const data = await res.json();
          // console.log(data);
          return data;
      }
  } catch (error) {
      console.log(error);
  }
}
