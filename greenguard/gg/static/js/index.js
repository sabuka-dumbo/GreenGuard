const line = document.getElementById("main_page_line");
const text = document.getElementById("main_page_text");
const icon = document.getElementById("main_page_icon");

text.style.color = "#DA8359";
line.style.color = "#DA8359";
icon.classList = "bi bi-house-door navbar-icon";
icon.innerHTML = `<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>`


const usage_name = document.getElementById("usage_name");
const usage_name_label = document.getElementById("usage_name_label");

usage_name.addEventListener("focus", function() {
    usage_name_label.style.animation = "usage_name_label_animation_open 0.3s ease";

    usage_name_label.addEventListener("animationend", function() {
        usage_name_label.style.animation = '';
        usage_name_label.style.top = "5px";
        usage_name_label.style.left = "145px";
        usage_name_label.style.fontSize = "15px";
    })
})

usage_name.addEventListener("focusout", function() {
    if (usage_name.value == '') {
        usage_name_label.style.animation = "usage_name_label_animation_close 0.3s ease";

        usage_name_label.addEventListener("animationend", function() {
            usage_name_label.style.animation = '';
            usage_name_label.style.top = '';
            usage_name_label.style.left = '';
            usage_name_label.style.fontSize = '';
        })
    }
})

const usage_value = document.getElementById("usage_value");
const usage_value_label = document.getElementById("usage_value_label");

usage_value.addEventListener("focus", function() {
    usage_value_label.style.animation = "usage_value_label_animation_open 0.3s ease";

    usage_value_label.addEventListener("animationend", function() {
        usage_value_label.style.animation = '';
        usage_value_label.style.top = "5px";
        usage_value_label.style.left = "380px";
        usage_value_label.style.fontSize = "15px";
    })
})

usage_value.addEventListener("focusout", function() {
    if (usage_value.value == '') {
        usage_value_label.style.animation = "usage_value_label_animation_close 0.3s ease";

        usage_value_label.addEventListener("animationend", function() {
            usage_value_label.style.animation = '';
            usage_value_label.style.top = '';
            usage_value_label.style.left = '';
            usage_value_label.style.fontSize = '';
        })
    }
})