var overlay = document.querySelector(".overlay");
var input = document.querySelector("input");

function openPalette() {
  overlay.classList.add("open");
}
function closePalette() {
  overlay.classList.remove("open");
}

window.addEventListener("keydown", (e) => {
  const isCorrectKey = e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey);

  if (isCorrectKey) {
    e.preventDefault();
    overlay.classList.contains("open") ? closePalette() : openPalette();
  }

  if (e.key === "Escape") {
    closePalette();
  }
});

function normalizationoURL(url) {
  // Agar url http:// ya https:// se start nahi hota, to prefix add karo
  if (!/^https?:\/\//i.test(url)) {
    return "https://" + url;
  }
  return url;
}


function openNewTab(url) {
  window.open(url, "_blank", "noopener");
}

function parseInput(str) {
  var parts = str.split(" ");
  var verb = parts[0].toLowerCase();
  var args = parts.slice(1);

  return { verb: verb, args: args };
}

function runcmd(text) {
    // console.log(parseInput(text));
    
  var parsed = parseInput(text);
  var verb = parsed.verb;
  var args = parsed.args;

  if (verb == "open" || verb == "o") {
    openNewTab(normalizationoURL(args[0]))
    // console.log(openNewTab(normalizationoURL(args[0])));
    
  }
  if (verb == "google" || verb == "g") {
    var term = args.join(" ");
    openNewTab("https://google.com/search?q=" + encodeURIComponent(term));
  }
  if(verb == "youtube" || verb == "yt") {
    var term = args.join(" ");
    openNewTab("https://www.youtube.com/results?search_query=" + encodeURIComponent(term));
  }
}

input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    // console.log(input.value);
    runcmd(input.value)
    input.value = "";
    // closePalette();
    // console.log(runcmd(input.value));
    
  }
});
