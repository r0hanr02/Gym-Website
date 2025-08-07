var typed = new Typed('#element', {
  strings: ['Physical Fitness', 'Weight Lifting', 'Strength Training', 'Fat Loss', 'Weight Gain'],
  typeSpeed: 60,
  loop: true,
  backSpeed: 40,
  backDelay: 1500,
});

let currentIndex = 0
const Slider_images = [
  "image/bodybuilder-removebg.png",
  "image/bodybuilder1.webp",
  "image/bodybuilder2.png",
  "image/bodybuilder3.png",
]
const ImageContainer = document.querySelector(".imageContainer")


function updateImage() {
  currentIndex = (currentIndex + 1) % Slider_images.length
  ImageContainer.style.backgroundImage = `url(${Slider_images[currentIndex]})`
}
setInterval(updateImage, 3000)

const FAQ_DATA = [
  {
    question: "What are your gym opening hours?",
    answer: "Our gym is open from 6 AM to 10 PM from Monday to Saturday, and 8 AM to 2 PM on Sundays. We aim to provide flexible hours for all fitness enthusiasts, whether you're an early bird or a night owl."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes, we have certified personal trainers available. You can book sessions as per your goals. Our trainers specialize in weight loss, strength building, muscle gain, and injury recovery programs."
  },
  {
    question: "Is there a trial membership available?",
    answer: "Yes, we offer a 3-day trial membership so you can try out our facilities. This includes access to all equipment, group classes, and even one free personal training consultation."
  },
  {
    question: "What facilities are included in the membership?",
    answer: "Our membership includes access to gym equipment, group classes, lockers, and steam rooms. We also offer nutrition guidance, open workout spaces, and regular fitness assessments to help track your progress."
  },
];

const faqContainer = document.getElementById("FAQContainer");

FAQ_DATA.forEach((item, index) => {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  // Create header (question + icon)
  const questionWrapper = document.createElement("div");
  questionWrapper.classList.add("faq-question");

  const questionText = document.createElement("span");
  questionText.textContent = item.question;

  const icon = document.createElement("span");
  icon.classList.add("icon");
  icon.textContent = "+"; // default icon

  questionWrapper.appendChild(questionText);
  questionWrapper.appendChild(icon);

  const answer = document.createElement("p");
  answer.textContent = item.answer;
  answer.classList.add("faq-answer");
  answer.style.display = "none";
  questionWrapper.addEventListener("click", () => {
    document.querySelectorAll(".faq-answer").forEach((ans, i) => {
      const icons = document.querySelectorAll(".faq-question .icon");
      if (i === index) {
        const isOpen = ans.style.display === "block";
        ans.style.display = isOpen ? "none" : "block";
        icons[i].textContent = isOpen ? "+" : "−";
      } else {
        ans.style.display = "none";
        icons[i].textContent = "+";
      }
    });
  });

  faqItem.appendChild(questionWrapper);
  faqItem.appendChild(answer);
  faqContainer.appendChild(faqItem);
});
