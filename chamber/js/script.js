function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
  }

const datefieldUK = document.querySelector("#currentDate");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const year = now.getFullYear();
document.getElementById('copyright').innerHTML = `&copy ${year} | Giovanni Bonfim | WDD 230 Project <br> Last modified : ${document.lastModified}`;