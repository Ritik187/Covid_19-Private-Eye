
const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

let ind;
let country_code = geoplugin_countryCode();
let user_country='India';
// console.log(country_code);
// country_list.forEach((country) => {
//   if (country.code == country_code) {
//     // console.log("first");
//     user_country = country.name;
//   }
// });

const country=[];
const cases_list = [];
const recovered_list = [];
const deaths_list = [];
const dates = [];
const new_cases_list=[];
const new_recovered_list=[];
const new_deaths_list=[];
const formatedDates = [];
let id;
// console.log(country[0])

function getdata(user_country)
{
  // console.log("second");
  // console.log(user_country);
  country_name_element.innerHTML="Loading..."
  url="https://api.covid19api.com/summary";
  fetch(url).then((response)=>{
    return response.json();
  }).then((data)=>{
    // console.log(data)
    let l=data['Countries'].length;
    let x=data['Countries'];
    for(let i=0;i<l;i++)
    {
     
     
      country.push(x[i].Country);
      // console.log(country[i]);
      cases_list.push(x[i].TotalConfirmed);
      // console.log(cases_list[i]);

      recovered_list.push(x[i].TotalRecovered);
      deaths_list.push(x[i].TotalDeaths);
      new_cases_list.push(x[i].NewConfirmed);
      new_recovered_list.push(x[i].NewRecovered);
      new_deaths_list.push(x[i].NewDeaths);
      







    }
    // console.log(new_deaths_list.length)
    // console.log("ig");
  })
  .then(()=>{
    index(user_country);
  })
  .then(()=>{
    print(user_country);
  })
  .then(()=>{
    update(user_country);
  })
  .catch(error=>{
    alert(error);
  })
  
  


}
getdata(user_country);

function index(user_country)
{
  for(let i=0;i<country.length;i++)
  {
    if(country[i].toUpperCase()==user_country.toUpperCase())
    {

      id=i;
      break;
    }

  }

}

function print(user_country)
{
//  console.log(id);
//  console.log(country[id]);
}

function update(user_country)
{

  country_name_element.innerHTML=user_country;
  total_cases_element.innerHTML=cases_list[id];
  new_recovered_element.innerHTML=`+${new_recovered_list[id]}`;
  new_cases_element.innerHTML=`+${new_cases_list[id]}`; 
  recovered_element.innerHTML=recovered_list[id]
  deaths_element.innerHTML=deaths_list[id];
  new_deaths_element.innerHTML=`+${new_deaths_list[id]}`;
}




