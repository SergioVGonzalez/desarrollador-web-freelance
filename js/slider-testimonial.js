//Testimonial Data
const testimonials = [
  {
    name: "Nombre",
    job: "Ocupación",
    image: "./img/coding.gif",
    testimonial:
      '<span>"</span>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<span>"</span>',
  },
  {
    name: "Nombre",
    job: "Ocupación",
    image: "./img/coding.gif",
    testimonial:
      '<span>"</span>Sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam cumque alias aspernatur deleniti magnam.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<span>"</span>',
  },
  {
    name: "Nombre",
    job: "Ocupación",
    image: "./img/coding.gif",
    testimonial:
      '<span>"</span>Sit amet,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam cumque alias aspernatur deleniti magnam. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<span>"</span>',
  },
  {
    name: "Nombre",
    job: "Ocupación",
    image: "./img/coding.gif",
    testimonial:
      '<span>"</span>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<span>"</span>',
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    
  `;
};
window.onload = displayTestimonial;
// window.addEventListener("load", function () {
//   this.alert("La página ha terminado de cargarse!!");
// });
