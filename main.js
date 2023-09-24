let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #a20019;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#a20019;">Desarrollo sitios web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
