function tampilkanKalkulator() {
  const topik = document.getElementById('pilih-topik').value;
  const area = document.getElementById('kalkulator-area');
  
  area.innerHTML = '';

  let htmlContent = '';

  switch (topik) {
    case 'medan-kawat-lurus':
      htmlContent = `
        <h3>Medan Magnet Kawat Lurus Panjang</h3>
        <p>Rumus: B = (μ₀ × I) / (2π × a)</p>
        <p><small>(μ₀ = 4π×10⁻⁷ Wb/A.m)</small></p>
        <div class="input-group">
            <label>Kuat Arus (I) [Ampere]:</label>
            <input type="number" id="i_lurus">
        </div>
        <div class="input-group">
            <label>Jarak ke Kawat (a) [meter]:</label>
            <input type="number" id="a_lurus">
        </div>
        <button onclick="hitungKawatLurus()">Hitung Medan (B)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'medan-kawat-melingkar':
      htmlContent = `
        <h3>Medan Magnet Kawat Melingkar (Pusat)</h3>
        <p>Rumus: B = (μ₀ × I × N) / (2 × a)</p>
        <div class="input-group">
            <label>Kuat Arus (I) [Ampere]:</label>
            <input type="number" id="i_melingkar">
        </div>
        <div class="input-group">
            <label>Jari-jari Lingkaran (a) [meter]:</label>
            <input type="number" id="a_melingkar">
        </div>
        <div class="input-group">
            <label>Jumlah Lilitan (N):</label>
            <input type="number" id="n_melingkar" value="1">
        </div>
        <button onclick="hitungKawatMelingkar()">Hitung Medan (B)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'medan-solenoida':
      htmlContent = `
        <h3>Medan Magnet Solenoida (Pusat)</h3>
        <p>Rumus: B = (μ₀ × I × N) / L</p>
        <div class="input-group">
            <label>Kuat Arus (I) [Ampere]:</label>
            <input type="number" id="i_solenoida">
        </div>
        <div class="input-group">
            <label>Jumlah Lilitan (N):</label>
            <input type="number" id="n_solenoida">
        </div>
        <div class="input-group">
            <label>Panjang Solenoida (L) [meter]:</label>
            <input type="number" id="l_solenoida">
        </div>
        <button onclick="hitungSolenoida()">Hitung Medan (B)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'medan-toroida':
      htmlContent = `
        <h3>Medan Magnet Toroida</h3>
        <p>Rumus: B = (μ₀ × I × N) / (2π × R_eff)</p>
        <div class="input-group">
            <label>Kuat Arus (I) [Ampere]:</label>
            <input type="number" id="i_toroida">
        </div>
        <div class="input-group">
            <label>Jumlah Lilitan (N):</label>
            <input type="number" id="n_toroida">
        </div>
        <div class="input-group">
            <label>Jari-jari Efektif (R) [meter]:</label>
            <input type="number" id="r_toroida">
        </div>
        <button onclick="hitungToroida()">Hitung Medan (B)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'lorentz-kawat':
      htmlContent = `
        <h3>Gaya Lorentz (Kawat Berarus)</h3>
        <p>Rumus: F = B × I × L × sin(θ)</p>
        <div class="input-group">
            <label>Medan Magnet (B) [Tesla]:</label>
            <input type="number" id="b_lorentz">
        </div>
        <div class="input-group">
            <label>Kuat Arus (I) [Ampere]:</label>
            <input type="number" id="i_lorentz">
        </div>
        <div class="input-group">
            <label>Panjang Kawat (L) [meter]:</label>
            <input type="number" id="l_lorentz">
        </div>
        <div class="input-group">
            <label>Sudut (θ) [derajat]:</label>
            <input type="number" id="theta_lorentz" value="90">
        </div>
        <button onclick="hitungLorentzKawat()">Hitung Gaya (F)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'lorentz-muatan':
      htmlContent = `
        <h3>Gaya Lorentz (Muatan Bergerak)</h3>
        <p>Rumus: F = q × v × B × sin(θ)</p>
        <div class="input-group">
            <label>Muatan (q) [Coulomb]:</label>
            <input type="number" id="q_muatan">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [m/s]:</label>
            <input type="number" id="v_muatan">
        </div>
        <div class="input-group">
            <label>Medan Magnet (B) [Tesla]:</label>
            <input type="number" id="b_muatan">
        </div>
        <div class="input-group">
            <label>Sudut (θ) [derajat]:</label>
            <input type="number" id="theta_muatan" value="90">
        </div>
        <button onclick="hitungLorentzMuatan()">Hitung Gaya (F)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'lorentz-dua-kawat':
      htmlContent = `
        <h3>Gaya Antara Dua Kawat Sejajar</h3>
        <p>Rumus: F = (μ₀ × I₁ × I₂ × L) / (2π × a)</p>
        <div class="input-group">
            <label>Arus Kawat 1 (I₁) [Ampere]:</label>
            <input type="number" id="i1_dua">
        </div>
        <div class="input-group">
            <label>Arus Kawat 2 (I₂) [Ampere]:</label>
            <input type="number" id="i2_dua">
        </div>
        <div class="input-group">
            <label>Panjang Kawat (L) [meter]:</label>
            <input type="number" id="l_dua">
        </div>
        <div class="input-group">
            <label>Jarak Antar Kawat (a) [meter]:</label>
            <input type="number" id="a_dua">
        </div>
        <button onclick="hitungLorentzDuaKawat()">Hitung Gaya (F)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'siklotron':
      htmlContent = `
        <h3>Jari-jari Lintasan Partikel (Siklotron)</h3>
        <p>Rumus: R = (m × v) / (q × B)</p>
        <div class="input-group">
            <label>Massa Partikel (m) [kg]:</label>
            <input type="number" id="m_siklo">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [m/s]:</label>
            <input type="number" id="v_siklo">
        </div>
        <div class="input-group">
            <label>Muatan (q) [Coulomb]:</label>
            <input type="number" id="q_siklo">
        </div>
        <div class="input-group">
            <label>Medan Magnet (B) [Tesla]:</label>
            <input type="number" id="b_siklo">
        </div>
        <button onclick="hitungSiklotron()">Hitung Jari-jari (R)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'fluks-magnetik':
      htmlContent = `
        <h3>Fluks Magnetik</h3>
        <p>Rumus: Φ = B × A × cos(θ)</p>
        <div class="input-group">
            <label>Medan Magnet (B) [Tesla]:</label>
            <input type="number" id="b_fluks">
        </div>
        <div class="input-group">
            <label>Luas Penampang (A) [m²]:</label>
            <input type="number" id="a_fluks">
        </div>
        <div class="input-group">
            <label>Sudut Normal (θ) [derajat]:</label>
            <input type="number" id="theta_fluks" value="0">
        </div>
        <button onclick="hitungFluks()">Hitung Fluks (Φ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'hukum-faraday':
      htmlContent = `
        <h3>Hukum Faraday (GGL Induksi)</h3>
        <p>Rumus: ε = -N × (ΔΦ / Δt)</p>
        <div class="input-group">
            <label>Jumlah Lilitan (N):</label>
            <input type="number" id="n_faraday">
        </div>
        <div class="input-group">
            <label>Perubahan Fluks (ΔΦ) [Weber]:</label>
            <input type="number" id="dphi_faraday">
        </div>
        <div class="input-group">
            <label>Selang Waktu (Δt) [s]:</label>
            <input type="number" id="dt_faraday">
        </div>
        <button onclick="hitungFaraday()">Hitung GGL (ε)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'ggl-kawat-bergerak':
      htmlContent = `
        <h3>GGL Induksi Kawat Bergerak</h3>
        <p>Rumus: ε = B × L × v × sin(θ)</p>
        <div class="input-group">
            <label>Medan Magnet (B) [Tesla]:</label>
            <input type="number" id="b_ggl">
        </div>
        <div class="input-group">
            <label>Panjang Kawat (L) [meter]:</label>
            <input type="number" id="l_ggl">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [m/s]:</label>
            <input type="number" id="v_ggl">
        </div>
        <button onclick="hitungGGLKawat()">Hitung GGL (ε)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'generator':
      htmlContent = `
        <h3>GGL Maksimum Generator</h3>
        <p>Rumus: ε_max = N × B × A × ω</p>
        <div class="input-group">
            <label>Jumlah Lilitan (N):</label>
            <input type="number" id="n_gen">
        </div>
        <div class="input-group">
            <label>Medan Magnet (B) [Tesla]:</label>
            <input type="number" id="b_gen">
        </div>
        <div class="input-group">
            <label>Luas Penampang (A) [m²]:</label>
            <input type="number" id="a_gen">
        </div>
        <div class="input-group">
            <label>Kecepatan Sudut (ω) [rad/s]:</label>
            <input type="number" id="w_gen">
        </div>
        <button onclick="hitungGenerator()">Hitung GGL Maks (ε)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'transformator':
      htmlContent = `
        <h3>Transformator (Mencari Tegangan Sekunder)</h3>
        <p>Rumus: Vs = (Ns / Np) × Vp</p>
        <div class="input-group">
            <label>Tegangan Primer (Vp) [Volt]:</label>
            <input type="number" id="vp_trafo">
        </div>
        <div class="input-group">
            <label>Lilitan Primer (Np):</label>
            <input type="number" id="np_trafo">
        </div>
        <div class="input-group">
            <label>Lilitan Sekunder (Ns):</label>
            <input type="number" id="ns_trafo">
        </div>
        <button onclick="hitungTrafo()">Hitung Tegangan (Vs)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'reaktansi':
      htmlContent = `
        <h3>Reaktansi Induktif & Kapasitif</h3>
        <p>XL = 2π.f.L | XC = 1 / (2π.f.C)</p>
        <div class="input-group">
            <label>Frekuensi (f) [Hz]:</label>
            <input type="number" id="f_reak">
        </div>
        <div class="input-group">
            <label>Induktansi (L) [Henry]:</label>
            <input type="number" id="l_reak" placeholder="Biarkan 0 jika tidak ada">
        </div>
        <div class="input-group">
            <label>Kapasitansi (C) [Farad]:</label>
            <input type="number" id="c_reak" placeholder="Biarkan 0 jika tidak ada">
        </div>
        <button onclick="hitungReaktansi()">Hitung Reaktansi</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'impedansi':
      htmlContent = `
        <h3>Impedansi Rangkaian R-L-C Seri</h3>
        <p>Rumus: Z = √[ R² + (XL - XC)² ]</p>
        <div class="input-group">
            <label>Hambatan (R) [Ohm]:</label>
            <input type="number" id="r_imp">
        </div>
        <div class="input-group">
            <label>Reaktansi Induktif (XL) [Ohm]:</label>
            <input type="number" id="xl_imp">
        </div>
        <div class="input-group">
            <label>Reaktansi Kapasitif (XC) [Ohm]:</label>
            <input type="number" id="xc_imp">
        </div>
        <button onclick="hitungImpedansi()">Hitung Impedansi (Z)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'resonansi':
      htmlContent = `
        <h3>Frekuensi Resonansi</h3>
        <p>Rumus: f = 1 / (2π√(L.C))</p>
        <div class="input-group">
            <label>Induktansi (L) [Henry]:</label>
            <input type="number" id="l_res">
        </div>
        <div class="input-group">
            <label>Kapasitansi (C) [Farad]:</label>
            <input type="number" id="c_res">
        </div>
        <button onclick="hitungResonansi()">Hitung Frekuensi (f)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    default:
      htmlContent = '<p>Silakan pilih rumus terlebih dahulu.</p>';
  }

  area.innerHTML = htmlContent;

  const inputs = area.querySelectorAll('input');
  const button = area.querySelector('button');

  if(inputs.length > 0 && button) {
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
}

function tampilkanHasil(nilai, satuan) {
    const box = document.getElementById('hasil-output');
    box.style.display = 'block';
    if (typeof nilai === 'string') {
        box.innerHTML = `Hasil Perhitungan:<br><strong>${nilai}</strong>`;
    } else {
        box.innerHTML = `Hasil Perhitungan: <strong>${nilai.toExponential(2)} ${satuan}</strong> <small>(${nilai.toFixed(4)})</small>`;
    }
}

function bersihkanInput() {
    const inputs = document.querySelectorAll('#kalkulator-area input');
    inputs.forEach(input => {
        input.value = '';
    });
}

const MU0 = 4 * Math.PI * 1e-7;

function hitungKawatLurus() {
    let I = parseFloat(document.getElementById('i_lurus').value) || 0;
    let a = parseFloat(document.getElementById('a_lurus').value) || 0;

    if(a === 0) { alert("Jarak tidak boleh nol!"); return; }

    let B = (MU0 * I) / (2 * Math.PI * a);
    tampilkanHasil(B, 'Tesla');
    bersihkanInput();
}

function hitungKawatMelingkar() {
    let I = parseFloat(document.getElementById('i_melingkar').value) || 0;
    let a = parseFloat(document.getElementById('a_melingkar').value) || 0;
    let N = parseFloat(document.getElementById('n_melingkar').value) || 1;

    if(a === 0) { alert("Jari-jari tidak boleh nol!"); return; }

    let B = (MU0 * I * N) / (2 * a);
    tampilkanHasil(B, 'Tesla');
    bersihkanInput();
}

function hitungSolenoida() {
    let I = parseFloat(document.getElementById('i_solenoida').value) || 0;
    let N = parseFloat(document.getElementById('n_solenoida').value) || 0;
    let L = parseFloat(document.getElementById('l_solenoida').value) || 0;

    if(L === 0) { alert("Panjang tidak boleh nol!"); return; }

    let B = (MU0 * I * N) / L;
    tampilkanHasil(B, 'Tesla');
    bersihkanInput();
}

function hitungToroida() {
    let I = parseFloat(document.getElementById('i_toroida').value) || 0;
    let N = parseFloat(document.getElementById('n_toroida').value) || 0;
    let R = parseFloat(document.getElementById('r_toroida').value) || 0;

    if(R === 0) { alert("Jari-jari tidak boleh nol!"); return; }

    let B = (MU0 * I * N) / (2 * Math.PI * R);
    tampilkanHasil(B, 'Tesla');
    bersihkanInput();
}

function hitungLorentzKawat() {
    let B = parseFloat(document.getElementById('b_lorentz').value) || 0;
    let I = parseFloat(document.getElementById('i_lorentz').value) || 0;
    let L = parseFloat(document.getElementById('l_lorentz').value) || 0;
    let theta = parseFloat(document.getElementById('theta_lorentz').value) || 90;

    let rad = theta * (Math.PI / 180);
    let F = B * I * L * Math.sin(rad);
    tampilkanHasil(F, 'Newton');
    bersihkanInput();
}

function hitungLorentzMuatan() {
    let q = parseFloat(document.getElementById('q_muatan').value) || 0;
    let v = parseFloat(document.getElementById('v_muatan').value) || 0;
    let B = parseFloat(document.getElementById('b_muatan').value) || 0;
    let theta = parseFloat(document.getElementById('theta_muatan').value) || 90;

    let rad = theta * (Math.PI / 180);
    let F = q * v * B * Math.sin(rad);
    tampilkanHasil(F, 'Newton');
    bersihkanInput();
}

function hitungLorentzDuaKawat() {
    let I1 = parseFloat(document.getElementById('i1_dua').value) || 0;
    let I2 = parseFloat(document.getElementById('i2_dua').value) || 0;
    let L = parseFloat(document.getElementById('l_dua').value) || 0;
    let a = parseFloat(document.getElementById('a_dua').value) || 0;

    if(a === 0) { alert("Jarak antar kawat tidak boleh nol!"); return; }

    let F = (MU0 * I1 * I2 * L) / (2 * Math.PI * a);
    tampilkanHasil(F, 'Newton');
    bersihkanInput();
}

function hitungSiklotron() {
    let m = parseFloat(document.getElementById('m_siklo').value) || 0;
    let v = parseFloat(document.getElementById('v_siklo').value) || 0;
    let q = parseFloat(document.getElementById('q_siklo').value) || 0;
    let B = parseFloat(document.getElementById('b_siklo').value) || 0;

    if(q === 0 || B === 0) { alert("Muatan atau Medan Magnet tidak boleh nol!"); return; }

    let R = (m * v) / (q * B);
    tampilkanHasil(R, 'meter');
    bersihkanInput();
}

function hitungFluks() {
    let B = parseFloat(document.getElementById('b_fluks').value) || 0;
    let A = parseFloat(document.getElementById('a_fluks').value) || 0;
    let theta = parseFloat(document.getElementById('theta_fluks').value) || 0;
    let rad = theta * (Math.PI / 180);
    let phi = B * A * Math.cos(rad);
    tampilkanHasil(phi, 'Weber');
    bersihkanInput();
}

function hitungFaraday() {
    let N = parseFloat(document.getElementById('n_faraday').value) || 0;
    let dPhi = parseFloat(document.getElementById('dphi_faraday').value) || 0;
    let dt = parseFloat(document.getElementById('dt_faraday').value) || 0;

    if(dt === 0) { alert("Selang waktu tidak boleh nol!"); return; }

    let eps = -N * (dPhi / dt);
    tampilkanHasil(eps, 'Volt');
    bersihkanInput();
}

function hitungGGLKawat() {
    let B = parseFloat(document.getElementById('b_ggl').value) || 0;
    let L = parseFloat(document.getElementById('l_ggl').value) || 0;
    let v = parseFloat(document.getElementById('v_ggl').value) || 0;
    let eps = B * L * v;
    tampilkanHasil(eps, 'Volt');
    bersihkanInput();
}

function hitungGenerator() {
    let N = parseFloat(document.getElementById('n_gen').value) || 0;
    let B = parseFloat(document.getElementById('b_gen').value) || 0;
    let A = parseFloat(document.getElementById('a_gen').value) || 0;
    let w = parseFloat(document.getElementById('w_gen').value) || 0;

    let epsMax = N * B * A * w;
    tampilkanHasil(epsMax, 'Volt');
    bersihkanInput();
}

function hitungTrafo() {
    let Vp = parseFloat(document.getElementById('vp_trafo').value) || 0;
    let Np = parseFloat(document.getElementById('np_trafo').value) || 0;
    let Ns = parseFloat(document.getElementById('ns_trafo').value) || 0;

    if(Np === 0) { alert("Lilitan Primer tidak boleh nol!"); return; }

    let Vs = (Ns / Np) * Vp;
    tampilkanHasil(Vs, 'Volt');
    bersihkanInput();
}

function hitungReaktansi() {
    let f = parseFloat(document.getElementById('f_reak').value) || 0;
    let L = parseFloat(document.getElementById('l_reak').value) || 0;
    let C = parseFloat(document.getElementById('c_reak').value) || 0;
    
    if(f === 0) { alert("Frekuensi tidak boleh nol!"); return; }

    let output = "";
    
    if(L > 0) {
        let XL = 2 * Math.PI * f * L;
        output += `XL: ${XL.toFixed(2)} Ohm<br>`;
    }
    
    if(C > 0) {
        let XC = 1 / (2 * Math.PI * f * C);
        output += `XC: ${XC.toFixed(2)} Ohm`;
    }

    if(output === "") {
        output = "Masukkan nilai L atau C.";
    }

    tampilkanHasil(output, '');
    bersihkanInput();
}

function hitungImpedansi() {
    let R = parseFloat(document.getElementById('r_imp').value) || 0;
    let XL = parseFloat(document.getElementById('xl_imp').value) || 0;
    let XC = parseFloat(document.getElementById('xc_imp').value) || 0;

    let Z = Math.sqrt(Math.pow(R, 2) + Math.pow(XL - XC, 2));
    tampilkanHasil(Z, 'Ohm');
    bersihkanInput();
}

function hitungResonansi() {
    let L = parseFloat(document.getElementById('l_res').value) || 0;
    let C = parseFloat(document.getElementById('c_res').value) || 0;

    if(L === 0 || C === 0) { alert("L dan C tidak boleh nol!"); return; }

    let f = 1 / (2 * Math.PI * Math.sqrt(L * C));
    tampilkanHasil(f, 'Hz');
    bersihkanInput();
}