const range = document.getElementById("myRange");
const trialBtn = document.querySelector(".card__trial");
const trialTxt = document.querySelector(".card__trial-txt")

range.oninput = function() {
    const fillColor = "hsl(174, 77%, 80%)";
    const bgColor = "hsl(224, 65%, 95%)";
    let value = Math.floor((this.value - this.min) / (this.max - this.min) * 100);
    this.style.background = `linear-gradient(to right, ${fillColor} 0%, ${fillColor} ${value}%, 
                                            ${bgColor} ${value}%, ${bgColor} 100%)`;
}

trialBtn.addEventListener("mousedown", () => trialTxt.style.opacity = '1');
trialBtn.addEventListener("mouseup", () => trialTxt.style.opacity = '0.8');