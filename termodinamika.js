function tampilkanKalkulator() {
  const topik = document.getElementById('pilih-topik').value;
  const area = document.getElementById('kalkulator-area');
  
  area.innerHTML = '';

  let htmlContent = '';

  switch (topik) {
    case 'hukum-pertama':
      htmlContent = `
        <h3>Hukum I Termodinamika</h3>
        <p>Rumus: Q = ΔU + W</p>
        <div class="input-group">
            <label>Perubahan Energi Dalam (ΔU) [Joule]:</label>
            <input type="number" id="delta_u">
        </div>
        <div class="input-group">
            <label>Usaha (W) [Joule]:</label>
            <input type="number" id="w_hukum1">
        </div>
        <button onclick="hitungHukumPertama()">Hitung Kalor (Q)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'usaha-gas':
      htmlContent = `
        <h3>Usaha Gas (Tekanan Tetap)</h3>
        <p>Rumus: W = P × (V₂ - V₁)</p>
        <div class="input-group">
            <label>Tekanan (P) [Pascal/Pa]:</label>
            <input type="number" id="p_gas">
        </div>
        <div class="input-group">
            <label>Volume Awal (V₁) [m³]:</label>
            <input type="number" id="v1_gas">
        </div>
        <div class="input-group">
            <label>Volume Akhir (V₂) [m³]:</label>
            <input type="number" id="v2_gas">
        </div>
        <button onclick="hitungUsahaGas()">Hitung Usaha (W)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'energi-dalam':
      htmlContent = `
        <h3>Perubahan Energi Dalam</h3>
        <p>Rumus: ΔU = (f/2) × n × R × ΔT</p>
        <p><small>(R = 8.314 J/mol·K)</small></p>
        <div class="input-group">
            <label>Derajat Kebebasan (f) [3=mono, 5=dia]:</label>
            <input type="number" id="f_gas" placeholder="3">
        </div>
        <div class="input-group">
            <label>Jumlah Mol (n) [mol]:</label>
            <input type="number" id="n_gas">
        </div>
        <div class="input-group">
            <label>Perubahan Suhu (ΔT) [Kelvin]:</label>
            <input type="number" id="dt_gas">
        </div>
        <button onclick="hitungEnergiDalam()">Hitung (ΔU)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'isobarik':
      htmlContent = `
        <h3>Proses Isobarik (Tekanan Tetap)</h3>
        <p>Menghitung Volume Akhir (Hukum Charles)</p>
        <p>Rumus: V₂ = V₁ × (T₂ / T₁)</p>
        <div class="input-group">
            <label>Volume Awal (V₁) [m³]:</label>
            <input type="number" id="v1_iso">
        </div>
        <div class="input-group">
            <label>Suhu Awal (T₁) [Kelvin]:</label>
            <input type="number" id="t1_iso">
        </div>
        <div class="input-group">
            <label>Suhu Akhir (T₂) [Kelvin]:</label>
            <input type="number" id="t2_iso">
        </div>
        <button onclick="hitungIsobarik()">Hitung Volume Akhir (V₂)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'isochorik':
      htmlContent = `
        <h3>Proses Isokhorik (Volume Tetap)</h3>
        <p>Menghitung Tekanan Akhir (Gay-Lussac)</p>
        <p>Rumus: P₂ = P₁ × (T₂ / T₁)</p>
        <div class="input-group">
            <label>Tekanan Awal (P₁) [Pa]:</label>
            <input type="number" id="p1_iso">
        </div>
        <div class="input-group">
            <label>Suhu Awal (T₁) [Kelvin]:</label>
            <input type="number" id="t1_isoc">
        </div>
        <div class="input-group">
            <label>Suhu Akhir (T₂) [Kelvin]:</label>
            <input type="number" id="t2_isoc">
        </div>
        <button onclick="hitungIsokhorik()">Hitung Tekanan Akhir (P₂)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;
      
    case 'isotermal':
      htmlContent = `
        <h3>Proses Isotermal (Suhu Tetap)</h3>
        <p>Rumus: W = n × R × T × ln(V₂/V₁)</p>
        <div class="input-group">
            <label>Jumlah Mol (n):</label>
            <input type="number" id="n_iso">
        </div>
        <div class="input-group">
            <label>Suhu (T) [Kelvin]:</label>
            <input type="number" id="t_iso">
        </div>
        <div class="input-group">
            <label>Volume Awal (V₁) [m³]:</label>
            <input type="number" id="v1_isot">
        </div>
        <div class="input-group">
            <label>Volume Akhir (V₂) [m³]:</label>
            <input type="number" id="v2_isot">
        </div>
        <button onclick="hitungIsotermal()">Hitung Usaha (W)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'adiabatik':
      htmlContent = `
        <h3>Proses Adiabatik</h3>
        <p>Menghitung Tekanan Akhir</p>
        <p>Rumus: P₂ = P₁ × (V₁/V₂)^γ</p>
        <div class="input-group">
            <label>Tetapan Laplace (γ):</label>
            <input type="number" id="gamma" placeholder="1.4">
        </div>
        <div class="input-group">
            <label>Tekanan Awal (P₁) [Pa]:</label>
            <input type="number" id="p1_adia">
        </div>
        <div class="input-group">
            <label>Volume Awal (V₁) [m³]:</label>
            <input type="number" id="v1_adia">
        </div>
        <div class="input-group">
            <label>Volume Akhir (V₂) [m³]:</label>
            <input type="number" id="v2_adia">
        </div>
        <button onclick="hitungAdiabatik()">Hitung Tekanan Akhir (P₂)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'efisiensi-mesin':
      htmlContent = `
        <h3>Efisiensi Mesin Kalor</h3>
        <p>Rumus: η = (W / Q₁) × 100%</p>
        <div class="input-group">
            <label>Usaha (W) [Joule]:</label>
            <input type="number" id="w_mesin">
        </div>
        <div class="input-group">
            <label>Kalor Masuk (Q₁) [Joule]:</label>
            <input type="number" id="q1_mesin">
        </div>
        <button onclick="hitungEfisiensiMesin()">Hitung Efisiensi (η)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'efisiensi-carnot':
      htmlContent = `
        <h3>Efisiensi Mesin Carnot</h3>
        <p>Rumus: η = (1 - T₂/T₁) × 100%</p>
        <div class="input-group">
            <label>Suhu Tinggi (T₁) [Kelvin]:</label>
            <input type="number" id="t1_carnot">
        </div>
        <div class="input-group">
            <label>Suhu Rendah (T₂) [Kelvin]:</label>
            <input type="number" id="t2_carnot">
        </div>
        <button onclick="hitungCarnot()">Hitung Efisiensi (η)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'cop-pendingin':
      htmlContent = `
        <h3>Koefisien Performa Pendingin (Kulkas)</h3>
        <p>Rumus: Kp = T₂ / (T₁ - T₂)</p>
        <div class="input-group">
            <label>Suhu Lingkungan (T₁) [Kelvin]:</label>
            <input type="number" id="t1_cop">
        </div>
        <div class="input-group">
            <label>Suhu Dalam Kulkas (T₂) [Kelvin]:</label>
            <input type="number" id="t2_cop">
        </div>
        <button onclick="hitungCOP()">Hitung Koefisien (Kp)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    default:
      htmlContent = '<p>Silakan pilih rumus termodinamika terlebih dahulu.</p>';
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

function hitungHukumPertama() {
    let dU = parseFloat(document.getElementById('delta_u').value) || 0;
    let W = parseFloat(document.getElementById('w_hukum1').value) || 0;
    
    let Q = dU + W;
    tampilkanHasil(Q, 'Joule');
    bersihkanInput();
}

function hitungUsahaGas() {
    let P = parseFloat(document.getElementById('p_gas').value) || 0;
    let V1 = parseFloat(document.getElementById('v1_gas').value) || 0;
    let V2 = parseFloat(document.getElementById('v2_gas').value) || 0;
    
    let W = P * (V2 - V1);
    tampilkanHasil(W, 'Joule');
    bersihkanInput();
}

function hitungEnergiDalam() {
    let f = parseFloat(document.getElementById('f_gas').value) || 3;
    let n = parseFloat(document.getElementById('n_gas').value) || 0;
    let dT = parseFloat(document.getElementById('dt_gas').value) || 0;
    let R = 8.314;

    let dU = (f / 2) * n * R * dT;
    tampilkanHasil(dU, 'Joule');
    bersihkanInput();
}

function hitungIsobarik() {
    let V1 = parseFloat(document.getElementById('v1_iso').value) || 0;
    let T1 = parseFloat(document.getElementById('t1_iso').value) || 0;
    let T2 = parseFloat(document.getElementById('t2_iso').value) || 0;

    if(T1 === 0) { alert("Suhu awal (T1) tidak boleh nol!"); return; }

    let V2 = V1 * (T2 / T1);
    tampilkanHasil(V2, 'm³');
    bersihkanInput();
}

function hitungIsokhorik() {
    let P1 = parseFloat(document.getElementById('p1_iso').value) || 0;
    let T1 = parseFloat(document.getElementById('t1_isoc').value) || 0;
    let T2 = parseFloat(document.getElementById('t2_isoc').value) || 0;

    if(T1 === 0) { alert("Suhu awal (T1) tidak boleh nol!"); return; }

    let P2 = P1 * (T2 / T1);
    tampilkanHasil(P2, 'Pa');
    bersihkanInput();
}

function hitungIsotermal() {
    let n = parseFloat(document.getElementById('n_iso').value) || 0;
    let T = parseFloat(document.getElementById('t_iso').value) || 0;
    let V1 = parseFloat(document.getElementById('v1_isot').value) || 0;
    let V2 = parseFloat(document.getElementById('v2_isot').value) || 0;
    let R = 8.314;

    if(V1 === 0 || V1 <= 0) { alert("Volume awal harus lebih dari nol!"); return; }

    let W = n * R * T * Math.log(V2 / V1);
    tampilkanHasil(W, 'Joule');
    bersihkanInput();
}

function hitungAdiabatik() {
    let gamma = parseFloat(document.getElementById('gamma').value) || 1.4;
    let P1 = parseFloat(document.getElementById('p1_adia').value) || 0;
    let V1 = parseFloat(document.getElementById('v1_adia').value) || 0;
    let V2 = parseFloat(document.getElementById('v2_adia').value) || 0;

    if(V2 === 0) { alert("Volume akhir tidak boleh nol!"); return; }

    let P2 = P1 * Math.pow((V1 / V2), gamma);
    tampilkanHasil(P2, 'Pa');
    bersihkanInput();
}

function hitungEfisiensiMesin() {
    let W = parseFloat(document.getElementById('w_mesin').value) || 0;
    let Q1 = parseFloat(document.getElementById('q1_mesin').value) || 0;

    if(Q1 === 0) { alert("Kalor masuk (Q1) tidak boleh nol!"); return; }

    let eff = (W / Q1) * 100;
    tampilkanHasil(eff, '%');
    bersihkanInput();
}

function hitungCarnot() {
    let T1 = parseFloat(document.getElementById('t1_carnot').value) || 0;
    let T2 = parseFloat(document.getElementById('t2_carnot').value) || 0;

    if(T1 === 0) { alert("Suhu tinggi (T1) tidak boleh nol!"); return; }
    if(T1 <= T2) { alert("Suhu tinggi (T1) harus lebih besar dari suhu rendah (T2)!"); }

    let eff = (1 - (T2 / T1)) * 100;
    tampilkanHasil(eff, '%');
    bersihkanInput();
}

function hitungCOP() {
    let T1 = parseFloat(document.getElementById('t1_cop').value) || 0;
    let T2 = parseFloat(document.getElementById('t2_cop').value) || 0;

    if(T1 <= T2) { alert("Suhu lingkungan (T1) harus lebih tinggi dari suhu kulkas (T2)!"); return; }

    let kp = T2 / (T1 - T2);
    tampilkanHasil(kp, '');
    bersihkanInput();
}