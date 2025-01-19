const People = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Tech Solutions Inc.",
      location: "New York, USA",
      image: "https://source.unsplash.com/random/200x200?person1"
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      company: "Global Ventures Ltd.",
      location: "London, UK",
      image: "https://source.unsplash.com/random/200x200?person2"
    },
    {
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      company: "Innovatech Co.",
      location: "Toronto, Canada",
      image: "https://source.unsplash.com/random/200x200?person3"
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      company: "NextGen Solutions",
      location: "Sydney, Australia",
      image: "https://source.unsplash.com/random/200x200?person4"
    },
    {
      name: "Chris Brown",
      email: "chris.brown@example.com",
      company: "FutureWorks LLC",
      location: "San Francisco, USA",
      image: "https://source.unsplash.com/random/200x200?person5"
    },
    {
      name: "Sophia Wilson",
      email: "sophia.wilson@example.com",
      company: "Creative Minds Ltd.",
      location: "Berlin, Germany",
      image: "https://source.unsplash.com/random/200x200?person6"
    },
    {
      name: "David Martinez",
      email: "david.martinez@example.com",
      company: "Visionary Tech",
      location: "Madrid, Spain",
      image: "https://source.unsplash.com/random/200x200?person7"
    },
    {
      name: "Olivia Garcia",
      email: "olivia.garcia@example.com",
      company: "Bright Future Inc.",
      location: "Paris, France",
      image: "https://source.unsplash.com/random/200x200?person8"
    },
    {
      name: "Liam Thomas",
      email: "liam.thomas@example.com",
      company: "Elite Solutions",
      location: "Melbourne, Australia",
      image: "https://source.unsplash.com/random/200x200?person9"
    },
    {
      name: "Ava Lee",
      email: "ava.lee@example.com",
      company: "Prime Tech Ltd.",
      location: "Singapore",
      image: "https://source.unsplash.com/random/200x200?person10"
    },
    {
      name: "Noah Walker",
      email: "noah.walker@example.com",
      company: "SkyHigh Innovations",
      location: "Dubai, UAE",
      image: "https://source.unsplash.com/random/200x200?person11"
    },
    {
      name: "Isabella Taylor",
      email: "isabella.taylor@example.com",
      company: "Tech Savvy Co.",
      location: "Seattle, USA",
      image: "https://source.unsplash.com/random/200x200?person12"
    },
    {
      name: "Lucas Harris",
      email: "lucas.harris@example.com",
      company: "AlphaWorks Inc.",
      location: "Tokyo, Japan",
      image: "https://source.unsplash.com/random/200x200?person13"
    },
    {
      name: "Mia Moore",
      email: "mia.moore@example.com",
      company: "Digital Edge Ltd.",
      location: "Amsterdam, Netherlands",
      image: "https://source.unsplash.com/random/200x200?person14"
    },
    {
      name: "Ethan Jackson",
      email: "ethan.jackson@example.com",
      company: "Core Innovators",
      location: "Chicago, USA",
      image: "https://source.unsplash.com/random/200x200?person15"
    },
    {
      name: "Amelia White",
      email: "amelia.white@example.com",
      company: "Bright Horizon LLC",
      location: "Dublin, Ireland",
      image: "https://source.unsplash.com/random/200x200?person16"
    },
    {
      name: "Logan Martin",
      email: "logan.martin@example.com",
      company: "ProTech Inc.",
      location: "Cape Town, South Africa",
      image: "https://source.unsplash.com/random/200x200?person17"
    },
    {
      name: "Charlotte Lopez",
      email: "charlotte.lopez@example.com",
      company: "Innovative Labs",
      location: "Mexico City, Mexico",
      image: "https://source.unsplash.com/random/200x200?person18"
    },
    {
      name: "James Evans",
      email: "james.evans@example.com",
      company: "NextWave Solutions",
      location: "Mumbai, India",
      image: "https://source.unsplash.com/random/200x200?person19"
    },
    {
      name: "Grace Cooper",
      email: "grace.cooper@example.com",
      company: "BlueSky Ventures",
      location: "Rio de Janeiro, Brazil",
      image: "https://source.unsplash.com/random/200x200?person20"
    }
  ];
  
People.forEach((person)=>{
  const tBody= document.querySelector("tbody");
const tablerow = document.createElement("tr");
const name = document.createElement("td");
const email = document.createElement("td");
const company = document.createElement("td");
const location = document.createElement("td");
tablerow.appendChild(name).textContent = person.name;
tablerow.appendChild(email).textContent = person.email;
tablerow.appendChild(company).textContent = person.company;
tablerow.appendChild(location).textContent = person.location;
tBody.appendChild(tablerow);

})
People.forEach((pes)=>{
  const TD = document.querySelectorAll("td");
TD.addEventListener("click", (index)=>{alert(index)})
})  