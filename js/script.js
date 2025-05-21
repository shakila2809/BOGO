// document.querySelectorAll('.accordion-header').forEach(header => {
//     header.addEventListener('click', () => {
//       const content = header.nextElementSibling;
  
//       content.classList.toggle('open');
  
//       // Optionally close others
//       document.querySelectorAll('.accordion-content').forEach(other => {
//         if (other !== content) {
//           other.classList.remove('open');
//         }
//       });
//     });
//   });
const cards = document.querySelectorAll('.card');
const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    cards.forEach(card => card.classList.remove('selected'));
    if (radio.checked) {
      cards[index].classList.add('selected');
    }
  });
});