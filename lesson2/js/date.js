const date = new Date();
const year = date.getFullYear();

document.querySelector('#lastmod').innerHTML = `Last modified : ${document.lastModified}`;
document.getElementById('copyright').innerHTML = `&copy ${year} | Giovanni Bonfim | São Paulo`;