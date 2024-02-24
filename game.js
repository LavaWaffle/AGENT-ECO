import OpenAI from "openai";
// import openaiApi from "https://cdn.jsdelivr.net/npm/openai-api@1.3.1/+esm";
const modalDiv = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const normImg = document.getElementById("normImg");
const nextBtn = document.getElementById("nextBtn");
const cover = document.getElementById("cover");
const continueBtn = document.getElementById("continueBtn");

let modalOpen = false;
normImg.addEventListener("click", () => {
  if (modalOpen) {
    modalDiv.style.display = "none";
    cover.style.display = "none";
    modalOpen = false;
  } else {
    modalDiv.style.display = "block";
    cover.style.display = "block";
    modalOpen = true;
  }
});

cover.addEventListener("click", () => {
  modalDiv.style.display = "none";
  cover.style.display = "none";
  modalOpen = false;
});

let i = 0;
nextBtn.addEventListener("click", () => {
  // get current src of normImg
  // get next src of normImg
  i++;
  const currentSrc = normImg.src;
  const img = currentSrc.split("/").pop();
  console.log(img);

  if (i >= 2) {
    continueBtn.style.display = "block";
  }

  switch (img) {
    case "env.png":
      normImg.src = "public/health.png";
      modalImg.src = "public/health.png";
      break;
    case "health.png":
      normImg.src = "public/joe.png";
      modalImg.src = "public/joe.png";
      break;
    case "joe.png":
      normImg.src = "public/env.png";
      modalImg.src = "public/env.png";
      break;
  }
});
const chatMODAL = document.getElementById("chatMODAL");
document.getElementById("togglehand").addEventListener("click", handbook);
// function openModal(asdf) {}
function handbook() {
  console.log("HI");
  if (chatMODAL.style.display === "block") {
    chatMODAL.style.display = "none";
  } else {
    chatMODAL.style.display = "block";
  }
}

const input = document.getElementById("input");
const inputText = document.getElementById("inputText");

inputText.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    submitQuesiton(e);
  },
  false,
);

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

async function submitQuesiton(e) {
  console.log("HI");
  console.log(e);
  const question = input.value;
  console.log(question);
  inputText.value = "";
  // chatMODAL.innerHTML += `<div class="chat-bubble">${question}</div>`;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistance there has been an oil spill and you will help the user figure that out. They are playing a simple detective game where they are figuring out what happened through files. When they ask for help, reply with somthing simple like there may have been an oil spill",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const res = completion.choices[0].message.content;
  // console.log(response);
  let UL = document.getElementById("UL");
  UL.innerHTML += `<li class="flex items-center p-4">
            <img src="public/user.png" alt="" class="mr-4" />
            <p>
              ${input.value}
            </p>
          </li>`;

  UL.innerHTML += `<li class="flex items-center p-4">
            <img src="public/bot.png" alt="" class="mr-4" />
            <p>
              ${res}
            </p>
          </li>`;
}

// console.log(openai);
var open = false;
const imgthing = document.getElementById("handimg");
document.getElementById("han").addEventListener("click", () => {
  console.log("HI");
  console.log(imgthing.src);
  if (open) {
    imgthing.src = "public/SOLARA.png";
    open = false;
  } else {
    imgthing.src = "public/SOLARA2.png";
    open = true;
  }
});
