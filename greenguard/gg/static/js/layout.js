const navbar = document.getElementById("navbar");
const burgermenu = document.getElementById("burgermenu");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

let is_ready = true;

let open = false;

burgermenu.addEventListener("click", function() {
    if (is_ready == true) {
        if (open == false) {
            span1.style.animation = "span1_open ease 1s";
            span2.style.animation = "span2_open ease 1s";
            span3.style.animation = "span3_open ease 1s";

            span1.addEventListener("animationend", function() {
                span1.style.animation = '';
                span2.style.animation = '';
                span3.style.animation = '';
                span1.style.top = "20px";
                span2.style.opacity = "0";
                span3.style.top = '-20px';
                span1.style.rotate = "45deg";
                span2.style.rotate = "-45deg";
            })
        } else {

        }
    }
})