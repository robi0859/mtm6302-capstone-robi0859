async function getImage(day, month, year) {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}}`);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data.url;
}

document.querySelector('button').addEventListener('click', () => {
    const day = document.querySelector('#day').value;
    const month = document.querySelector('select[name="month"]').value;
    const year = document.querySelector('select[name="year"]').value;
    getImage(day, month, year);
});