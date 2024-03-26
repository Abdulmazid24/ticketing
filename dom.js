const allseat = document.getElementsByClassName('seat');

let seatSelected = getConvertedValue('seat-booking');
let allTickets = getConvertedValue('total-seats');
const seatClass = 'Economy';
const ticketPrice = getConvertedValue('ticket-price');

for (const seat of allseat) {
  seat.addEventListener('click', function (event) {
    event.target.classList.add('text-white', 'bg-green-500');
    getConvertedValue('seat-booking');
    seatSelected = seatSelected + 1;
    allTickets = allTickets - 1;
    setConvertedValue('total-seats', allTickets);
    setConvertedValue('seat-booking', seatSelected);

    const seatName = event.target.innerText;

    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between');
    const bookingAddress = document.getElementById('ticket-booking-address');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.innerText = seatName;
    p2.innerText = seatClass;
    p3.innerText = ticketPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    bookingAddress.appendChild(div);

    const totalPrice = getConvertedValue('total-price');
    const sum1 = totalPrice + ticketPrice;
    setConvertedValue('total-price', sum1);
  });
}

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseInt(price);
  return convertedPrice;
}

function setConvertedValue(id, value) {
  document.getElementById(id).innerText = value;
}

function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}

document
  .getElementById('number-input')
  .addEventListener('keyup', function (event) {
    let numInput = event.target.value;
    const convertedIntValue = parseInt(numInput);
    const next = document.getElementById('next-button');

    if (seatSelected > 0 && typeof convertedIntValue === 'number') {
      next.removeAttribute('disabled');
    }
  });

document.getElementById('next-button').addEventListener('click', function (e) {
  const successfull = document.getElementById('success');
  const header = document.getElementById('header');
  const main = document.getElementById('main');
  header.classList.add('hidden');
  main.classList.add('hidden');
  successfull.classList.remove('hidden');
});
