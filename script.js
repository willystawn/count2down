let initialSeconds = 10; // Jumlah detik awal
let currentSeconds = 10; // Mengikuti jumlah detik saat ini

// Fungsi untuk memulai menghitung mundur
document.getElementById("start-button").onclick = startCountdown;

// Fungsi untuk mengatur ulang hitungan
document.getElementById("restart-button").onclick = resetCountdown;

// Fungsi untuk mengulang hitungan dengan jumlah detik yang sama
document.getElementById("repeat-button").onclick = repeatCountdown;

function startCountdown() {
  let countdown = document.getElementById("countdown");
  let input = document.getElementById("countdown-input");
  let startButton = document.getElementById("start-button");
  let restartButton = document.getElementById("restart-button");
  let repeatButton = document.getElementById("repeat-button");
  currentSeconds = parseInt(input.value);

  // Validasi masukan
  if (isNaN(currentSeconds) || currentSeconds <= 0) {
    alert("Masukkan jumlah detik yang valid.");
    return;
  }

  // Sembunyikan input dan tombol "Mulai" setelah memulai hitungan mundur
  input.style.display = "none";
  startButton.style.display = "none";

  // Menampilkan countdown setelah menyembunyikan input
  countdown.style.display = "block";

  // Fungsi rekursif untuk mengupdate angka mundur setiap detik
  function updateCountdown() {
    if (currentSeconds <= 0) {
      countdown.innerHTML = "Waktu Habis! 🎉";
      restartButton.style.display = "block"; // Tampilkan tombol "Hitung Ulang"
      repeatButton.style.display = "block"; // Tampilkan tombol "Ulang Detik"
      countdown.classList.add("waktu-habis"); // Tambahkan kelas waktu-habis
      document.body.classList.add("waktu-habis"); // Tambahkan kelas waktu-habis
    } else {
      countdown.innerHTML = currentSeconds;
      currentSeconds--;
      countdown.style.animation = "none"; // Hentikan animasi saat mengubah angka
      void countdown.offsetWidth; // Pertahankan repaint
      countdown.style.animation = "zoomInOut 1s"; // Mulai animasi lagi
      setTimeout(updateCountdown, 1000);
    }
  }

  updateCountdown();
}

function resetCountdown() {
  let countdown = document.getElementById("countdown");
  let input = document.getElementById("countdown-input");
  let startButton = document.getElementById("start-button");
  let restartButton = document.getElementById("restart-button");
  let repeatButton = document.getElementById("repeat-button");

  countdown.style.display = "none"; // Sembunyikan tampilan waktu habis
  restartButton.style.display = "none"; // Sembunyikan tombol "Hitung Ulang"
  repeatButton.style.display = "none"; // Sembunyikan tombol "Ulang Detik"
  input.style.display = "block"; // Tampilkan kembali input
  startButton.style.display = "block"; // Tampilkan kembali tombol "Mulai"

  // Hapus kelas waktu-habis dari countdown dan body
  countdown.classList.remove("waktu-habis");
  document.body.classList.remove("waktu-habis");
}

function repeatCountdown() {
  currentSeconds = initialSeconds;
  resetCountdown();
  startCountdown();
}
