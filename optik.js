function tampilkanKalkulator() {
  const topik = document.getElementById('pilih-topik').value;
  const area = document.getElementById('kalkulator-area');
  
  area.innerHTML = '';

  let htmlContent = '';

  switch (topik) {
    case 'cermin-lengkung':
      htmlContent = `
        <h3>Cermin Cekung/Cembung (Jarak Bayangan)</h3>
        <p>Rumus: 1/f = 1/s + 1/s'</p>
        <div class="input-group">
            <label>Jarak Benda (s) [cm]:</label>
            <input type="number" id="s_cermin">
        </div>
        <div class="input-group">
            <label>Fokus (f) [cm] (- untuk cembung):</label>
            <input type="number" id="f_cermin">
        </div>
        <button onclick="hitungCermin()">Hitung Jarak Bayangan (s')</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'pembiasan-snellius':
      htmlContent = `
        <h3>Hukum Snellius (Sudut Bias)</h3>
        <p>Rumus: n₁ × sin(i) = n₂ × sin(r)</p>
        <div class="input-group">
            <label>Indeks Bias Medium 1 (n₁):</label>
            <input type="number" id="n1" placeholder="1">
        </div>
        <div class="input-group">
            <label>Sudut Datang (i) [derajat]:</label>
            <input type="number" id="sudut_i">
        </div>
        <div class="input-group">
            <label>Indeks Bias Medium 2 (n₂):</label>
            <input type="number" id="n2" placeholder="1.33">
        </div>
        <button onclick="hitungSnellius()">Hitung Sudut Bias (r)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'kedalaman-semu':
      htmlContent = `
        <h3>Kedalaman Semu</h3>
        <p>Rumus: h' = h × (n₂ / n₁)</p>
        <div class="input-group">
            <label>Kedalaman Asli (h) [cm]:</label>
            <input type="number" id="h_asli">
        </div>
        <div class="input-group">
            <label>Indeks Bias Pengamat (n₂):</label>
            <input type="number" id="n_pengamat" placeholder="1">
        </div>
        <div class="input-group">
            <label>Indeks Bias Benda (n₁):</label>
            <input type="number" id="n_benda" placeholder="1.33">
        </div>
        <button onclick="hitungKedalaman()">Hitung Kedalaman Semu (h')</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'lensa-tipis':
      htmlContent = `
        <h3>Lensa Tipis (Jarak Bayangan)</h3>
        <p>Rumus: 1/f = 1/s + 1/s'</p>
        <div class="input-group">
            <label>Jarak Benda (s) [cm]:</label>
            <input type="number" id="s_lensa">
        </div>
        <div class="input-group">
            <label>Fokus (f) [cm] (- untuk cekung):</label>
            <input type="number" id="f_lensa">
        </div>
        <button onclick="hitungLensa()">Hitung Jarak Bayangan (s')</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'kekuatan-lensa':
      htmlContent = `
        <h3>Kekuatan Lensa (Power)</h3>
        <p>Rumus: P = 100 / f (cm)</p>
        <div class="input-group">
            <label>Fokus Lensa (f) [cm]:</label>
            <input type="number" id="f_power">
        </div>
        <button onclick="hitungDioptri()">Hitung Kekuatan (P)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'pembuat-lensa':
      htmlContent = `
        <h3>Rumus Pembuat Lensa</h3>
        <p>Rumus: 1/f = (nL/nM - 1)(1/R₁ + 1/R₂)</p>
        <div class="input-group">
            <label>Indeks Bias Lensa (nL):</label>
            <input type="number" id="n_lensa">
        </div>
        <div class="input-group">
            <label>Indeks Bias Medium (nM):</label>
            <input type="number" id="n_medium" placeholder="1">
        </div>
        <div class="input-group">
            <label>Jari-jari 1 (R₁) [cm]:</label>
            <input type="number" id="r1">
        </div>
        <div class="input-group">
            <label>Jari-jari 2 (R₂) [cm]:</label>
            <input type="number" id="r2">
        </div>
        <button onclick="hitungPembuatLensa()">Hitung Fokus (f)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'mata-kacamata':
      htmlContent = `
        <h3>Kacamata (Miopi/Rabun Jauh)</h3>
        <p>Rumus: P = -100 / PR</p>
        <div class="input-group">
            <label>Titik Jauh Mata (PR) [cm]:</label>
            <input type="number" id="pr_miopi">
        </div>
        <button onclick="hitungMiopi()">Hitung Kekuatan Lensa (P)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'lup':
      htmlContent = `
        <h3>Perbesaran Lup (Akomodasi Maksimum)</h3>
        <p>Rumus: M = (Sn / f) + 1</p>
        <div class="input-group">
            <label>Fokus Lup (f) [cm]:</label>
            <input type="number" id="f_lup">
        </div>
        <button onclick="hitungLup()">Hitung Perbesaran (M)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'mikroskop':
      htmlContent = `
        <h3>Perbesaran Total Mikroskop</h3>
        <p>Rumus: M = M_objektif × M_okuler</p>
        <div class="input-group">
            <label>Perbesaran Objektif (M_ob) [kali]:</label>
            <input type="number" id="m_ob">
        </div>
        <div class="input-group">
            <label>Perbesaran Okuler (M_ok) [kali]:</label>
            <input type="number" id="m_ok">
        </div>
        <button onclick="hitungMikroskop()">Hitung Total (M)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'teropong-bintang':
      htmlContent = `
        <h3>Perbesaran Teropong Bintang</h3>
        <p>Rumus: M = f_objektif / f_okuler</p>
        <div class="input-group">
            <label>Fokus Objektif (f_ob) [cm]:</label>
            <input type="number" id="f_ob_teropong">
        </div>
        <div class="input-group">
            <label>Fokus Okuler (f_ok) [cm]:</label>
            <input type="number" id="f_ok_teropong">
        </div>
        <button onclick="hitungTeropong()">Hitung Perbesaran (M)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'celah-ganda':
      htmlContent = `
        <h3>Interferensi Celah Ganda (Young)</h3>
        <p>Rumus: d(y/L) = nλ</p>
        <div class="input-group">
            <label>Jarak antar celah (d) [mm]:</label>
            <input type="number" id="d_young">
        </div>
        <div class="input-group">
            <label>Jarak Layar (L) [m]:</label>
            <input type="number" id="L_young">
        </div>
        <div class="input-group">
            <label>Orde terang (n):</label>
            <input type="number" id="n_young" placeholder="1">
        </div>
        <div class="input-group">
            <label>Panjang Gelombang (λ) [nm]:</label>
            <input type="number" id="lambda_young" placeholder="500">
        </div>
        <button onclick="hitungYoung()">Hitung Jarak (y)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;
      
    case 'difraksi-kisi':
      htmlContent = `
        <h3>Difraksi Kisi</h3>
        <p>Rumus: (1/N) sin θ = nλ</p>
        <div class="input-group">
            <label>Konstanta Kisi (N) [garis/mm]:</label>
            <input type="number" id="N_kisi">
        </div>
        <div class="input-group">
            <label>Orde (n):</label>
            <input type="number" id="n_kisi" placeholder="1">
        </div>
        <div class="input-group">
            <label>Panjang Gelombang (λ) [nm]:</label>
            <input type="number" id="lambda_kisi">
        </div>
        <button onclick="hitungKisi()">Hitung Sudut (θ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'celah-tunggal':
      htmlContent = `
        <h3>Difraksi Celah Tunggal (Pita Gelap)</h3>
        <p>Rumus: d sin θ = nλ</p>
        <div class="input-group">
            <label>Lebar Celah (d) [mm]:</label>
            <input type="number" id="d_tunggal">
        </div>
        <div class="input-group">
            <label>Orde Gelap (n):</label>
            <input type="number" id="n_tunggal" placeholder="1">
        </div>
        <div class="input-group">
            <label>Panjang Gelombang (λ) [nm]:</label>
            <input type="number" id="lambda_tunggal">
        </div>
        <button onclick="hitungCelahTunggal()">Hitung Sudut (θ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'polarisasi':
      htmlContent = `
        <h3>Polarisasi (Hukum Malus)</h3>
        <p>Rumus: I₂ = I₁ × cos²(θ)</p>
        <div class="input-group">
            <label>Intensitas Awal (I₁) [W/m²]:</label>
            <input type="number" id="i_awal">
        </div>
        <div class="input-group">
            <label>Sudut Analisator (θ) [derajat]:</label>
            <input type="number" id="theta_polarisasi">
        </div>
        <button onclick="hitungPolarisasi()">Hitung Intensitas (I₂)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    default:
      htmlContent = '<p>Silakan pilih materi optik terlebih dahulu.</p>';
  }

  area.innerHTML = htmlContent;

  const inputs = area.querySelectorAll('input');
  const button = area.querySelector('button');

  inputs.forEach((input, index) => {
    input.addEventListener('keydown', function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          button.click();
        }
      }
    });
  });
}

function tampilkanHasil(nilai, satuan) {
    const box = document.getElementById('hasil-output');
    box.style.display = 'block';
    box.innerHTML = `Hasil Perhitungan: <strong>${nilai.toFixed(2)} ${satuan}</strong>`;
}

function bersihkanInput() {
    const inputs = document.querySelectorAll('#kalkulator-area input');
    inputs.forEach(input => {
        input.value = '';
    });
}

function hitungCermin() {
    let s = parseFloat(document.getElementById('s_cermin').value) || 0;
    let f = parseFloat(document.getElementById('f_cermin').value) || 0;
    
    if (s === f) { 
        alert("Jarak benda sama dengan titik fokus, bayangan di tak hingga."); 
        return; 
    }

    let s_aksen = (s * f) / (s - f);
    tampilkanHasil(s_aksen, 'cm');
    bersihkanInput();
}

function hitungSnellius() {
    let n1 = parseFloat(document.getElementById('n1').value) || 0;
    let n2 = parseFloat(document.getElementById('n2').value) || 0;
    let i = parseFloat(document.getElementById('sudut_i').value) || 0;

    if (n2 === 0) { alert("Indeks bias n2 tidak boleh 0"); return; }

    let i_rad = i * (Math.PI / 180);
    let sin_r = (n1 * Math.sin(i_rad)) / n2;

    if (sin_r > 1 || sin_r < -1) {
        alert("Terjadi pemantulan sempurna (Total Internal Reflection)");
        return;
    }

    let r_rad = Math.asin(sin_r);
    let r = r_rad * (180 / Math.PI);

    tampilkanHasil(r, 'derajat');
    bersihkanInput();
}

function hitungKedalaman() {
    let h = parseFloat(document.getElementById('h_asli').value) || 0;
    let n2 = parseFloat(document.getElementById('n_pengamat').value) || 0;
    let n1 = parseFloat(document.getElementById('n_benda').value) || 0;

    if (n1 === 0) return;

    let h_semu = h * (n2 / n1);
    tampilkanHasil(h_semu, 'cm');
    bersihkanInput();
}

function hitungLensa() {
    let s = parseFloat(document.getElementById('s_lensa').value) || 0;
    let f = parseFloat(document.getElementById('f_lensa').value) || 0;

    if (s === f) { 
        alert("Bayangan di tak hingga"); 
        return; 
    }

    let s_aksen = (s * f) / (s - f);
    tampilkanHasil(s_aksen, 'cm');
    bersihkanInput();
}

function hitungDioptri() {
    let f = parseFloat(document.getElementById('f_power').value) || 0;
    if (f === 0) return;

    let P = 100 / f;
    tampilkanHasil(P, 'Dioptri');
    bersihkanInput();
}

function hitungPembuatLensa() {
    let nL = parseFloat(document.getElementById('n_lensa').value) || 0;
    let nM = parseFloat(document.getElementById('n_medium').value) || 0;
    let r1 = parseFloat(document.getElementById('r1').value) || 0;
    let r2 = parseFloat(document.getElementById('r2').value) || 0;

    if (nM === 0) return;
    
    let term1 = (nL / nM) - 1;
    let term2 = (1/r1) + (1/r2);
    
    if (term2 === 0) { alert("Lensa datar (Fokus tak hingga)"); return; }

    let seper_f = term1 * term2;
    let f = 1 / seper_f;

    tampilkanHasil(f, 'cm');
    bersihkanInput();
}

function hitungMiopi() {
    let pr = parseFloat(document.getElementById('pr_miopi').value) || 0;
    if (pr === 0) return;

    let P = -100 / pr;
    tampilkanHasil(P, 'Dioptri');
    bersihkanInput();
}

function hitungLup() {
    let f = parseFloat(document.getElementById('f_lup').value) || 0;
    if (f === 0) return;

    let Sn = 25;
    let M = (Sn / f) + 1;
    tampilkanHasil(M, 'kali');
    bersihkanInput();
}

function hitungMikroskop() {
    let Mob = parseFloat(document.getElementById('m_ob').value) || 0;
    let Mok = parseFloat(document.getElementById('m_ok').value) || 0;

    let M = Mob * Mok;
    tampilkanHasil(M, 'kali');
    bersihkanInput();
}

function hitungTeropong() {
    let fob = parseFloat(document.getElementById('f_ob_teropong').value) || 0;
    let fok = parseFloat(document.getElementById('f_ok_teropong').value) || 0;

    if (fok === 0) return;

    let M = fob / fok;
    tampilkanHasil(M, 'kali');
    bersihkanInput();
}

function hitungYoung() {
    let d = parseFloat(document.getElementById('d_young').value) || 0;
    let L = parseFloat(document.getElementById('L_young').value) || 0;
    let n = parseFloat(document.getElementById('n_young').value) || 0;
    let lamda = parseFloat(document.getElementById('lambda_young').value) || 0;

    let d_m = d * 1e-3;
    let lamda_m = lamda * 1e-9;
    
    if (d_m === 0) return;
    
    let y_m = (n * lamda_m * L) / d_m;
    let y_mm = y_m * 1000;

    tampilkanHasil(y_mm, 'mm');
    bersihkanInput();
}

function hitungKisi() {
    let N = parseFloat(document.getElementById('N_kisi').value) || 0;
    let n = parseFloat(document.getElementById('n_kisi').value) || 0;
    let lamda = parseFloat(document.getElementById('lambda_kisi').value) || 0;

    if (N === 0) return;
    
    let d_mm = 1 / N;
    let d_nm = d_mm * 1e6;

    let sin_theta = (n * lamda) / d_nm;

    if (sin_theta > 1) {
        alert("Orde difraksi tidak mungkin terjadi (sin > 1)");
        return;
    }

    let theta_rad = Math.asin(sin_theta);
    let theta = theta_rad * (180 / Math.PI);

    tampilkanHasil(theta, 'derajat');
    bersihkanInput();
}

function hitungCelahTunggal() {
    let d = parseFloat(document.getElementById('d_tunggal').value) || 0;
    let n = parseFloat(document.getElementById('n_tunggal').value) || 0;
    let lamda = parseFloat(document.getElementById('lambda_tunggal').value) || 0;

    let d_nm = d * 1e6;

    if (d_nm === 0) return;

    let sin_theta = (n * lamda) / d_nm;

    if (sin_theta > 1) {
        alert("Nilai tidak valid (sin > 1)");
        return;
    }

    let theta_rad = Math.asin(sin_theta);
    let theta = theta_rad * (180 / Math.PI);

    tampilkanHasil(theta, 'derajat');
    bersihkanInput();
}

function hitungPolarisasi() {
    let I0 = parseFloat(document.getElementById('i_awal').value) || 0;
    let theta = parseFloat(document.getElementById('theta_polarisasi').value) || 0;

    let rad = theta * (Math.PI / 180);
    let I2 = I0 * Math.pow(Math.cos(rad), 2);

    tampilkanHasil(I2, 'W/m²');
    bersihkanInput();
}