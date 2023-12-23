var typed = new Typed("#typed", {
  strings: ["Welcome to MathGuru..."],
  typeSpeed: 110,
  startDelay: 500,
  loop: true,
  loopCount: Infinity,
  backDelay: 1000,
});

const reviews = [
  {
    id: 1,
    name: "David Wilson",
    job: "Engineering Student",
    img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    text: "I was struggling with calculus until I discovered MathGuru. The comprehensive curriculum and step-by-step explanations made complex concepts easier to understand.",
  },
  {
    id: 2,
    name: "Jennifer Lee",
    job: "Competitive Learner",
    img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    text: "MathGuru's interactive platform has made learning math fun and engaging. The gamified elements and challenges motivate me to improve my skills and reach new milestones.",
  },
  {
    id: 3,
    name: "Alex Chen",
    job: "Parent",
    img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    text: "MathGuru has been a lifesaver for my son. The personalized approach and patient instructors have helped him overcome his math challenges and improve his grades.",
  },
  {
    id: 4,
    name: "Lisa Brown",
    job: "Visual Learner",
    img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    text: "MathGuru's video lessons are top-notch. The instructors break down complex math problems into simple steps, making it easier for me to grasp difficult concepts.",
  },

  {
    id: 5,
    name: " Alex Chen",
    job: "Math Competition Enthusiast",
    img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    text: "I highly recommend MathGuru for anyone preparing for math competitions. The advanced problem-solving techniques and practice resources have helped me excel in various math contests.",
  },

  {
    id: 6,
    name: "Emily Johnson",
    job: "Data Analyst",
    img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    text: "As a data analyst, the Statistics course provided by MathGuru has been invaluable to my career. The comprehensive content and practical exercises have enhanced my understanding and skills in statistical analysis. Highly recommended!",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
