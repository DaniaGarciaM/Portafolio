let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(150)
  .typeString('FULL STACK WEB DEVELOPER')
  .pauseFor(200)
  .deleteChars(10)
  .start();
