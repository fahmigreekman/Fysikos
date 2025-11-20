function tampilkanKalkulator() {
  const topik = document.getElementById('pilih-topik').value;
  const area = document.getElementById('kalkulator-area');
  
  area.innerHTML = '';

  let htmlContent = '';

  switch (topik) {
    case 'massa-jenis':
      htmlContent = `
        <h3>Hitung Massa Jenis</h3>
        <p>Rumus: ρ = m / V</p>
        <div class="input-group">
            <label>Massa (m) [kg]:</label>
            <input type="number" id="m_rho">
        </div>
        <div class="input-group">
            <label>Volume (V) [m³]:</label>
            <input type="number" id="v_rho">
        </div>
        <button onclick="hitungMassaJenis()">Hitung (ρ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'tekanan-umum':
      htmlContent = `
        <h3>Hitung Tekanan</h3>
        <p>Rumus: P = F / A</p>
        <div class="input-group">
            <label>Gaya (F) [N]:</label>
            <input type="number" id="f_press">
        </div>
        <div class="input-group">
            <label>Luas Penampang (A) [m²]:</label>
            <input type="number" id="a_press">
        </div>
        <button onclick="hitungTekanan()">Hitung (P)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'tekanan-hidrostatis':
      htmlContent = `
        <h3>Hitung Tekanan Hidrostatis</h3>
        <p>Rumus: Ph = ρ × g × h</p>
        <p><small>(Gravitasi g = 10 m/s²)</small></p>
        <div class="input-group">
            <label>Massa Jenis (ρ) [kg/m³]:</label>
            <input type="number" id="rho_ph" placeholder="1000 untuk air">
        </div>
        <div class="input-group">
            <label>Kedalaman (h) [m]:</label>
            <input type="number" id="h_ph">
        </div>
        <button onclick="hitungHidrostatis()">Hitung (Ph)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'hukum-pascal':
      htmlContent = `
        <h3>Hukum Pascal (Gaya Output)</h3>
        <p>Rumus: F₂ = F₁ × (A₂ / A₁)</p>
        <div class="input-group">
            <label>Gaya Input (F₁) [N]:</label>
            <input type="number" id="f1_pascal">
        </div>
        <div class="input-group">
            <label>Luas Penampang 1 (A₁) [m²]:</label>
            <input type="number" id="a1_pascal">
        </div>
        <div class="input-group">
            <label>Luas Penampang 2 (A₂) [m²]:</label>
            <input type="number" id="a2_pascal">
        </div>
        <button onclick="hitungPascal()">Hitung Gaya Output (F₂)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'gaya-archimedes':
      htmlContent = `
        <h3>Hukum Archimedes (Gaya Apung)</h3>
        <p>Rumus: Fa = ρ × g × V_celup</p>
        <div class="input-group">
            <label>Massa Jenis Fluida (ρ) [kg/m³]:</label>
            <input type="number" id="rho_arc" placeholder="1000">
        </div>
        <div class="input-group">
            <label>Volume Tercelup (V) [m³]:</label>
            <input type="number" id="v_arc">
        </div>
        <button onclick="hitungArchimedes()">Hitung Gaya Apung (Fa)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'tegangan-permukaan':
      htmlContent = `
        <h3>Hitung Tegangan Permukaan</h3>
        <p>Rumus: γ = F / L</p>
        <div class="input-group">
            <label>Gaya (F) [N]:</label>
            <input type="number" id="f_teg">
        </div>
        <div class="input-group">
            <label>Panjang Permukaan (L) [m]:</label>
            <input type="number" id="l_teg">
        </div>
        <button onclick="hitungTeganganPermukaan()">Hitung (γ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'kapilaritas':
      htmlContent = `
        <h3>Hitung Kenaikan Zat Cair (Kapilaritas)</h3>
        <p>Rumus: h = (2 γ cos θ) / (ρ g r)</p>
        <div class="input-group">
            <label>Tegangan Permukaan (γ) [N/m]:</label>
            <input type="number" id="gamma_kap">
        </div>
        <div class="input-group">
            <label>Sudut Kontak (θ) [derajat]:</label>
            <input type="number" id="theta_kap">
        </div>
        <div class="input-group">
            <label>Jari-jari Pipa (r) [m]:</label>
            <input type="number" id="r_kap">
        </div>
        <div class="input-group">
            <label>Massa Jenis (ρ) [kg/m³]:</label>
            <input type="number" id="rho_kap">
        </div>
        <button onclick="hitungKapilaritas()">Hitung Tinggi (h)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'hukum-stokes':
      htmlContent = `
        <h3>Hukum Stokes (Gaya Gesek Fluida)</h3>
        <p>Rumus: Fs = 6 × π × η × r × v</p>
        <div class="input-group">
            <label>Viskositas (η) [Pa.s]:</label>
            <input type="number" id="eta_stokes">
        </div>
        <div class="input-group">
            <label>Jari-jari Bola (r) [m]:</label>
            <input type="number" id="r_stokes">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [m/s]:</label>
            <input type="number" id="v_stokes">
        </div>
        <button onclick="hitungStokes()">Hitung Gaya Gesek (Fs)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'debit-aliran':
      htmlContent = `
        <h3>Hitung Debit Aliran</h3>
        <p>Rumus: Q = A × v</p>
        <div class="input-group">
            <label>Luas Penampang (A) [m²]:</label>
            <input type="number" id="a_debit">
        </div>
        <div class="input-group">
            <label>Kecepatan Aliran (v) [m/s]:</label>
            <input type="number" id="v_debit">
        </div>
        <button onclick="hitungDebit()">Hitung Debit (Q)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'azas-kontinuitas':
      htmlContent = `
        <h3>Azas Kontinuitas (Cari Kecepatan V₂)</h3>
        <p>Rumus: v₂ = (A₁ × v₁) / A₂</p>
        <div class="input-group">
            <label>Luas Penampang 1 (A₁) [m²]:</label>
            <input type="number" id="a1_kont">
        </div>
        <div class="input-group">
            <label>Kecepatan 1 (v₁) [m/s]:</label>
            <input type="number" id="v1_kont">
        </div>
        <div class="input-group">
            <label>Luas Penampang 2 (A₂) [m²]:</label>
            <input type="number" id="a2_kont">
        </div>
        <button onclick="hitungKontinuitas()">Hitung Kecepatan (v₂)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;
    
    case 'hukum-bernoulli':
      htmlContent = `
        <h3>Hukum Bernoulli (Cari Tekanan P₂)</h3>
        <p>Rumus: P₁ + ρgh₁ + ½ρv₁² = P₂ + ρgh₂ + ½ρv₂²</p>
        <div class="input-group">
            <label>Tekanan 1 (P₁) [Pa]:</label>
            <input type="number" id="p1_ber">
        </div>
        <div class="input-group">
            <label>Kecepatan 1 (v₁) [m/s]:</label>
            <input type="number" id="v1_ber">
        </div>
        <div class="input-group">
            <label>Ketinggian 1 (h₁) [m]:</label>
            <input type="number" id="h1_ber">
        </div>
        <div class="input-group">
            <label>Kecepatan 2 (v₂) [m/s]:</label>
            <input type="number" id="v2_ber">
        </div>
        <div class="input-group">
            <label>Ketinggian 2 (h₂) [m]:</label>
            <input type="number" id="h2_ber">
        </div>
        <div class="input-group">
            <label>Massa Jenis (ρ) [kg/m³]:</label>
            <input type="number" id="rho_ber" placeholder="1000">
        </div>
        <button onclick="hitungBernoulli()">Hitung Tekanan (P₂)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'teorema-torricelli':
      htmlContent = `
        <h3>Teorema Torricelli (Kecepatan Semburan)</h3>
        <p>Rumus: v = √(2 × g × h)</p>
        <p><small>h = Jarak permukaan ke lubang</small></p>
        <div class="input-group">
            <label>Ketinggian (h) [m]:</label>
            <input type="number" id="h_tor">
        </div>
        <button onclick="hitungTorricelli()">Hitung Kecepatan (v)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'gaya-angkat-pesawat':
      htmlContent = `
        <h3>Gaya Angkat Pesawat</h3>
        <p>Rumus: F = ½ × ρ × A × (v₁² - v₂²)</p>
        <div class="input-group">
            <label>Massa Jenis Udara (ρ) [kg/m³]:</label>
            <input type="number" id="rho_air">
        </div>
        <div class="input-group">
            <label>Luas Sayap (A) [m²]:</label>
            <input type="number" id="a_sayap">
        </div>
        <div class="input-group">
            <label>Kecepatan Atas (v₁) [m/s]:</label>
            <input type="number" id="v1_sayap">
        </div>
        <div class="input-group">
            <label>Kecepatan Bawah (v₂) [m/s]:</label>
            <input type="number" id="v2_sayap">
        </div>
        <button onclick="hitungGayaAngkat()">Hitung Gaya (F)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'venturimeter':
      htmlContent = `
        <h3>Venturimeter (Tanpa Manometer)</h3>
        <p>Rumus: v₁ = √[ (2gh) / ((A₁/A₂)² - 1) ]</p>
        <div class="input-group">
            <label>Luas Penampang 1 (A₁) [m²]:</label>
            <input type="number" id="a1_ven">
        </div>
        <div class="input-group">
            <label>Luas Penampang 2 (A₂) [m²]:</label>
            <input type="number" id="a2_ven">
        </div>
        <div class="input-group">
            <label>Beda Tinggi (h) [m]:</label>
            <input type="number" id="h_ven">
        </div>
        <button onclick="hitungVenturimeter()">Hitung Kecepatan Masuk (v₁)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    default:
      htmlContent = '<p>Silakan pilih topik terlebih dahulu.</p>';
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

function hitungMassaJenis() {
    let m = parseFloat(document.getElementById('m_rho').value) || 0;
    let v = parseFloat(document.getElementById('v_rho').value) || 0;
    
    if(v === 0) { alert("Volume tidak boleh nol!"); return; }

    let rho = m / v;
    tampilkanHasil(rho, 'kg/m³');
    bersihkanInput();
}

function hitungTekanan() {
    let f = parseFloat(document.getElementById('f_press').value) || 0;
    let a = parseFloat(document.getElementById('a_press').value) || 0;

    if(a === 0) { alert("Luas tidak boleh nol!"); return; }

    let p = f / a;
    tampilkanHasil(p, 'Pa');
    bersihkanInput();
}

function hitungHidrostatis() {
    let rho = parseFloat(document.getElementById('rho_ph').value) || 0;
    let h = parseFloat(document.getElementById('h_ph').value) || 0;
    let g = 10;

    let ph = rho * g * h;
    tampilkanHasil(ph, 'Pa');
    bersihkanInput();
}

function hitungPascal() {
    let f1 = parseFloat(document.getElementById('f1_pascal').value) || 0;
    let a1 = parseFloat(document.getElementById('a1_pascal').value) || 0;
    let a2 = parseFloat(document.getElementById('a2_pascal').value) || 0;

    if(a1 === 0) { alert("Luas A1 tidak boleh nol!"); return; }

    let f2 = f1 * (a2 / a1);
    tampilkanHasil(f2, 'Newton');
    bersihkanInput();
}

function hitungArchimedes() {
    let rho = parseFloat(document.getElementById('rho_arc').value) || 0;
    let v = parseFloat(document.getElementById('v_arc').value) || 0;
    let g = 10;

    let fa = rho * g * v;
    tampilkanHasil(fa, 'Newton');
    bersihkanInput();
}

function hitungTeganganPermukaan() {
    let f = parseFloat(document.getElementById('f_teg').value) || 0;
    let l = parseFloat(document.getElementById('l_teg').value) || 0;

    if(l === 0) { alert("Panjang tidak boleh nol!"); return; }

    let gamma = f / l;
    tampilkanHasil(gamma, 'N/m');
    bersihkanInput();
}

function hitungKapilaritas() {
    let gamma = parseFloat(document.getElementById('gamma_kap').value) || 0;
    let theta = parseFloat(document.getElementById('theta_kap').value) || 0;
    let r = parseFloat(document.getElementById('r_kap').value) || 0;
    let rho = parseFloat(document.getElementById('rho_kap').value) || 0;
    let g = 10;

    if(r === 0 || rho === 0) { alert("Jari-jari atau massa jenis tidak boleh nol!"); return; }

    let rad = theta * (Math.PI / 180);
    let h = (2 * gamma * Math.cos(rad)) / (rho * g * r);
    
    tampilkanHasil(h, 'meter');
    bersihkanInput();
}

function hitungStokes() {
    let eta = parseFloat(document.getElementById('eta_stokes').value) || 0;
    let r = parseFloat(document.getElementById('r_stokes').value) || 0;
    let v = parseFloat(document.getElementById('v_stokes').value) || 0;

    let fs = 6 * Math.PI * eta * r * v;
    tampilkanHasil(fs, 'Newton');
    bersihkanInput();
}

function hitungDebit() {
    let a = parseFloat(document.getElementById('a_debit').value) || 0;
    let v = parseFloat(document.getElementById('v_debit').value) || 0;

    let q = a * v;
    tampilkanHasil(q, 'm³/s');
    bersihkanInput();
}

function hitungKontinuitas() {
    let a1 = parseFloat(document.getElementById('a1_kont').value) || 0;
    let v1 = parseFloat(document.getElementById('v1_kont').value) || 0;
    let a2 = parseFloat(document.getElementById('a2_kont').value) || 0;

    if(a2 === 0) { alert("Luas A2 tidak boleh nol!"); return; }

    let v2 = (a1 * v1) / a2;
    tampilkanHasil(v2, 'm/s');
    bersihkanInput();
}

function hitungTorricelli() {
    let h = parseFloat(document.getElementById('h_tor').value) || 0;
    let g = 10;

    if(h < 0) { alert("Ketinggian tidak boleh negatif!"); return; }

    let v = Math.sqrt(2 * g * h);
    tampilkanHasil(v, 'm/s');
    bersihkanInput();
}

function hitungGayaAngkat() {
    let rho = parseFloat(document.getElementById('rho_air').value) || 0;
    let a = parseFloat(document.getElementById('a_sayap').value) || 0;
    let v1 = parseFloat(document.getElementById('v1_sayap').value) || 0;
    let v2 = parseFloat(document.getElementById('v2_sayap').value) || 0;

    let f = 0.5 * rho * a * (Math.pow(v1, 2) - Math.pow(v2, 2));
    tampilkanHasil(f, 'Newton');
    bersihkanInput();
}

function hitungBernoulli() {
    let p1 = parseFloat(document.getElementById('p1_ber').value) || 0;
    let v1 = parseFloat(document.getElementById('v1_ber').value) || 0;
    let h1 = parseFloat(document.getElementById('h1_ber').value) || 0;
    let v2 = parseFloat(document.getElementById('v2_ber').value) || 0;
    let h2 = parseFloat(document.getElementById('h2_ber').value) || 0;
    let rho = parseFloat(document.getElementById('rho_ber').value) || 0;
    let g = 10;

    let energi1 = p1 + (rho * g * h1) + (0.5 * rho * Math.pow(v1, 2));
    let energiPotensial2 = rho * g * h2;
    let energiKinetik2 = 0.5 * rho * Math.pow(v2, 2);

    let p2 = energi1 - energiPotensial2 - energiKinetik2;
    tampilkanHasil(p2, 'Pa');
    bersihkanInput();
}

function hitungVenturimeter() {
    let a1 = parseFloat(document.getElementById('a1_ven').value) || 0;
    let a2 = parseFloat(document.getElementById('a2_ven').value) || 0;
    let h = parseFloat(document.getElementById('h_ven').value) || 0;
    let g = 10;

    if(a1 <= a2) { alert("A1 harus lebih besar dari A2 pada Venturimeter"); return; }
    
    let rasioArea = Math.pow((a1/a2), 2);
    let v1 = Math.sqrt( (2 * g * h) / (rasioArea - 1) );
    
    tampilkanHasil(v1, 'm/s');
    bersihkanInput();
}