const allseat = document.getElementsByClassName('seat');

let seatBooking = getConvertedValue('seat-booking');
let = getConvertedValue('total-seats');
const seatClass = 'Economy';
const ticketPrice = getConvertedValue('ticket-price');
const copunCode1 = getInnerText('new-15');
const copunCode2 = getInnerText('couple-20');

for (const seat of allseat) {
  seat.addEventListener('click', function (event) {
    event.target.classList.add('text-white', 'bg-green-500');
    getConvertedValue('seat-booking');
    seatBooking = seatBooking + 1;
    allTickets = allTickets - 1;
    setConvertedValue('total-seats', allTickets);
    setConvertedValue('seat-booking', seatBooking);

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
