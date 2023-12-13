document.getElementById("menu-toggle").addEventListener("click", function(){
    document.getElementById("list").classList.toggle("active");
}); 

document.getElementById("light-button").addEventListener("click", function(e) {
    e.preventDefault();
    
    document.getElementById("light-content").classList.add("visible");
    document.getElementById("watering-content").classList.remove("visible");
    document.getElementById("soil-content").classList.remove("visible");
    document.getElementById("repotting-content").classList.remove("visible");
});

document.getElementById("watering-button").addEventListener("click", function(e) {
  e.preventDefault();


  document.getElementById("light-content").classList.remove("visible");
  document.getElementById("watering-content").classList.add("visible");
  document.getElementById("soil-content").classList.remove("visible");
  document.getElementById("repotting-content").classList.remove("visible");
});

document.getElementById("soil-button").addEventListener("click", function(e) {
  e.preventDefault();

  document.getElementById("light-content").classList.remove("visible");
  document.getElementById("watering-content").classList.remove("visible");
  document.getElementById("soil-content").classList.add("visible");
  document.getElementById("repotting-content").classList.remove("visible");
}); 

document.getElementById("repotting-button").addEventListener("click", function(e) {
  e.preventDefault();

    document.getElementById("light-content").classList.remove("visible");
    document.getElementById("watering-content").classList.remove("visible");
    document.getElementById("soil-content").classList.remove("visible");
    document.getElementById("repotting-content").classList.add("visible");
});