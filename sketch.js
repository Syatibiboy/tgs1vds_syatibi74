let astronot;
let rightImgX, rightImgY;
let speedX, speedY;
let acceleration = 0.2; // Percepatan
let directionX = 1; // Arah horizontal: 1 = kanan, -1 = kiri
let directionY = 1; // Arah vertikal: 1 = bawah, -1 = atas

function preload(){
  astronot = loadImage('astronot.png');
}

function setup() {
  createCanvas(600, 400);
  rightImgX = 300; // Mulai di tengah layar
  rightImgY = 0; // Mulai dari atas layar
  speedX = 0; // Kecepatan horizontal
  speedY = 1; // Kecepatan vertikal
}

function draw() {
  background("#094D64");
  line(300,0,300,400)
  
  //gambar astronot
  image(astronot,rightImgX, rightImgY,150,150,80,80)
  image(astronot,70,150,150,150)
  
  // Menambah kecepatan gerakan
  speedX += acceleration * directionX;
  speedY += acceleration * directionY;
  
  // Gerakan gambar ke bawah
  rightImgX += speedX * directionX;
  rightImgY += speedY * directionY;

  
  // Pemantulan saat mencapai batas bawah layar
  if (rightImgX > 300 - 150 / 2 || rightImgX < 0) {
    directionX *= -1; // Mengubah arah gerakan horizontal
  }
  
  if (rightImgY > 380 - 150 / 2 || rightImgY < 0) {
    directionY *= -1; // Mengubah arah gerakan vertikal
  }
}