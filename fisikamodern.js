function tampilkanKalkulator() {
  const topik = document.getElementById('pilih-topik').value;
  const area = document.getElementById('kalkulator-area');

  area.innerHTML = '';

  let htmlContent = '';

  switch (topik) {
    case 'tetapan-transformasi':
      htmlContent = `
        <h3>Hitung Tetapan Lorentz (γ)</h3>
        <p>Rumus: γ = 1 / √(1 - v²/c²)</p>
        <div class="input-group">
            <label>Kecepatan (v) [dalam desimal c, misal 0.6]:</label>
            <input type="number" id="v_rel" placeholder="0.6" step="0.1" max="0.99">
        </div>
        <button onclick="hitungGamma()">Hitung Gamma (γ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'penjumlahan-kecepatan':
      htmlContent = `
        <h3>Penjumlahan Kecepatan Relativistik</h3>
        <p>Rumus: v = (v₁ + v₂) / (1 + (v₁·v₂)/c²)</p>
        <div class="input-group">
            <label>Kecepatan Benda 1 (v₁) [dalam c]:</label>
            <input type="number" id="v1_rel" placeholder="0.5">
        </div>
        <div class="input-group">
            <label>Kecepatan Benda 2 (v₂) [dalam c]:</label>
            <input type="number" id="v2_rel" placeholder="0.4">
        </div>
        <button onclick="hitungKecepatanRel()">Hitung (v)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'dilatasi-waktu':
      htmlContent = `
        <h3>Hitung Dilatasi Waktu</h3>
        <p>Rumus: t = t₀ × γ</p>
        <div class="input-group">
            <label>Waktu Diam (t₀) [detik/tahun]:</label>
            <input type="number" id="t0_rel">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [dalam c, misal 0.8]:</label>
            <input type="number" id="v_waktu" placeholder="0.8">
        </div>
        <button onclick="hitungDilatasiWaktu()">Hitung Waktu Mulur (t)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'kontraksi-panjang':
      htmlContent = `
        <h3>Hitung Kontraksi Panjang</h3>
        <p>Rumus: L = L₀ / γ</p>
        <div class="input-group">
            <label>Panjang Diam (L₀) [meter]:</label>
            <input type="number" id="l0_rel">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [dalam c, misal 0.6]:</label>
            <input type="number" id="v_panjang" placeholder="0.6">
        </div>
        <button onclick="hitungKontraksiPanjang()">Hitung Panjang (L)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'massa-relativistik':
      htmlContent = `
        <h3>Hitung Massa Relativistik</h3>
        <p>Rumus: m = m₀ × γ</p>
        <div class="input-group">
            <label>Massa Diam (m₀) [kg]:</label>
            <input type="number" id="m0_rel">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [dalam c]:</label>
            <input type="number" id="v_massa" placeholder="0.6">
        </div>
        <button onclick="hitungMassaRel()">Hitung Massa (m)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'energi-relativistik':
      htmlContent = `
        <h3>Hitung Energi Total</h3>
        <p>Rumus: E = m × c² = γ × m₀ × c²</p>
        <div class="input-group">
            <label>Massa Diam (m₀) [kg]:</label>
            <input type="number" id="m0_energi">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [dalam c]:</label>
            <input type="number" id="v_energi" placeholder="0.8">
        </div>
        <button onclick="hitungEnergiRel()">Hitung Energi (E)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'radiasi-benda-hitam':
      htmlContent = `
        <h3>Hukum Pergeseran Wien</h3>
        <p>Rumus: λₘₐₓ = C / T</p>
        <p><small>(C = 2,9 × 10⁻³ m.K)</small></p>
        <div class="input-group">
            <label>Suhu Mutlak (T) [Kelvin]:</label>
            <input type="number" id="suhu_wien">
        </div>
        <button onclick="hitungWien()">Hitung Panjang Gelombang (λ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'energi-foton':
      htmlContent = `
        <h3>Hitung Energi Foton</h3>
        <p>Rumus: E = (h × c) / λ</p>
        <div class="input-group">
            <label>Panjang Gelombang (λ) [meter]:</label>
            <input type="number" id="lambda_foton" placeholder="Contoh: 5e-7">
        </div>
        <button onclick="hitungEnergiFoton()">Hitung Energi (E)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'efek-fotolistrik':
      htmlContent = `
        <h3>Efek Fotolistrik (Energi Kinetik)</h3>
        <p>Rumus: Ek = E_foton - W₀</p>
        <div class="input-group">
            <label>Energi Foton Datang (E) [eV]:</label>
            <input type="number" id="e_datang">
        </div>
        <div class="input-group">
            <label>Fungsi Kerja Logam (W₀) [eV]:</label>
            <input type="number" id="w_fungsi">
        </div>
        <button onclick="hitungFotolistrik()">Hitung Ek Maks (eV)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'efek-compton':
      htmlContent = `
        <h3>Efek Compton (Hamburan)</h3>
        <p>Rumus: Δλ = (h/mc)(1 - cos θ)</p>
        <p><small>λ_c = h/mc ≈ 2.43 × 10⁻¹² m</small></p>
        <div class="input-group">
            <label>Sudut Hamburan (θ) [derajat]:</label>
            <input type="number" id="sudut_hamburan" placeholder="Contoh: 60">
        </div>
        <button onclick="hitungCompton()">Hitung Pergeseran (Δλ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'hipotesa-de-broglie':
      htmlContent = `
        <h3>Panjang Gelombang de Broglie</h3>
        <p>Rumus: λ = h / (m × v)</p>
        <div class="input-group">
            <label>Massa Partikel (m) [kg]:</label>
            <input type="number" id="m_broglie">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [m/s]:</label>
            <input type="number" id="v_broglie">
        </div>
        <button onclick="hitungDeBroglie()">Hitung λ (meter)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'jari-jari-bohr':
      htmlContent = `
        <h3>Jari-jari Lintasan Bohr</h3>
        <p>Rumus: rn = n² × r₀</p>
        <p><small>(r₀ = 5.3 × 10⁻¹¹ m atau 0.53 Å)</small></p>
        <div class="input-group">
            <label>Kulit ke-n (Bilangan Kuantum Utama):</label>
            <input type="number" id="n_jari" placeholder="1, 2, 3...">
        </div>
        <button onclick="hitungJariJariBohr()">Hitung Jari-jari (rn)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'energi-atom':
      htmlContent = `
        <h3>Tingkat Energi Atom Hidrogen</h3>
        <p>Rumus: En = -13.6 / n² (eV)</p>
        <div class="input-group">
            <label>Kulit ke-n (Bilangan Kuantum Utama):</label>
            <input type="number" id="n_kulit" placeholder="1, 2, 3...">
        </div>
        <button onclick="hitungEnergiBohr()">Hitung Energi (eV)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'spektrum-atom':
      htmlContent = `
        <h3>Deret Spektrum Hidrogen (Rydberg)</h3>
        <p>Rumus: 1/λ = R (1/nA² - 1/nB²)</p>
        <p><small>(R = 1.097 × 10⁷ m⁻¹)</small></p>
        <div class="input-group">
            <label>Kulit Tujuan (nA):</label>
            <input type="number" id="n_tujuan" placeholder="Contoh: 2 (Balmer)">
        </div>
        <div class="input-group">
            <label>Kulit Asal (nB):</label>
            <input type="number" id="n_asal" placeholder="Contoh: 3">
        </div>
        <button onclick="hitungSpektrum()">Hitung Panjang Gelombang (λ)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'defek-massa':
      htmlContent = `
        <h3>Hitung Energi Ikat Inti</h3>
        <p>Rumus: E = Δm × 931 MeV</p>
        <div class="input-group">
            <label>Defek Massa (Δm) [sma]:</label>
            <input type="number" id="delta_m">
        </div>
        <button onclick="hitungEnergiIkat()">Hitung Energi Ikat (MeV)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'waktu-paruh':
      htmlContent = `
        <h3>Peluruhan Radioaktif</h3>
        <p>Rumus: Nt = N₀ × (1/2)^(t / T½)</p>
        <div class="input-group">
            <label>Jumlah Awal (N₀):</label>
            <input type="number" id="n0_radio">
        </div>
        <div class="input-group">
            <label>Waktu Paruh (T½):</label>
            <input type="number" id="t_half">
        </div>
        <div class="input-group">
            <label>Waktu Berjalan (t):</label>
            <input type="number" id="t_jalan">
        </div>
        <button onclick="hitungPeluruhan()">Hitung Sisa (Nt)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'aktivitas-radiasi':
      htmlContent = `
        <h3>Aktivitas Radiasi</h3>
        <p>Rumus: A = (0.693 / T½) × N</p>
        <div class="input-group">
            <label>Waktu Paruh (T½) [detik]:</label>
            <input type="number" id="t_half_akt">
        </div>
        <div class="input-group">
            <label>Jumlah Partikel (N):</label>
            <input type="number" id="n_partikel_akt">
        </div>
        <button onclick="hitungAktivitas()">Hitung Aktivitas (Bq)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'reaksi-inti':
      htmlContent = `
        <h3>Energi Reaksi Inti</h3>
        <p>Rumus: E = (m_reaktan - m_produk) × 931 MeV</p>
        <div class="input-group">
            <label>Total Massa Reaktan [sma]:</label>
            <input type="number" id="m_reaktan">
        </div>
        <div class="input-group">
            <label>Total Massa Produk [sma]:</label>
            <input type="number" id="m_produk">
        </div>
        <button onclick="hitungReaksiInti()">Hitung Energi (Q)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    default:
      htmlContent = '<p>Silakan pilih topik atau fitur ini sedang dalam pengembangan.</p>';
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
          if (button) button.click();
        }
      }
    });
  });
}

function tampilkanHasil(nilai, satuan) {
  const box = document.getElementById('hasil-output');
  box.style.display = 'block';

  let displayVal = nilai;
  if (Math.abs(nilai) < 0.01 || Math.abs(nilai) > 10000) {
    displayVal = nilai.toExponential(3);
  } else {
    displayVal = nilai.toFixed(3);
  }
  box.innerHTML = `Hasil Perhitungan: <strong>${displayVal} ${satuan}</strong>`;
}

function bersihkanInput() {
  const inputs = document.querySelectorAll('#kalkulator-area input');
  inputs.forEach(input => {
    input.value = '';
  });
}

function hitungGamma() {
  let v = parseFloat(document.getElementById('v_rel').value) || 0;
  if (v >= 1 || v < 0) {
    alert("Kecepatan harus 0 < v < 1 c");
    return;
  }

  let gamma = 1 / Math.sqrt(1 - (v * v));
  tampilkanHasil(gamma, '');
  bersihkanInput();
}

function hitungKecepatanRel() {
  let v1 = parseFloat(document.getElementById('v1_rel').value) || 0;
  let v2 = parseFloat(document.getElementById('v2_rel').value) || 0;

  let v_total = (v1 + v2) / (1 + (v1 * v2));
  tampilkanHasil(v_total, 'c');
  bersihkanInput();
}

function hitungDilatasiWaktu() {
  let t0 = parseFloat(document.getElementById('t0_rel').value) || 0;
  let v = parseFloat(document.getElementById('v_waktu').value) || 0;

  if (v >= 1) {
    alert("Kecepatan harus < 1 c");
    return;
  }

  let gamma = 1 / Math.sqrt(1 - (v * v));
  let t = t0 * gamma;

  tampilkanHasil(t, 'satuan waktu (s/thn)');
  bersihkanInput();
}

function hitungKontraksiPanjang() {
  let L0 = parseFloat(document.getElementById('l0_rel').value) || 0;
  let v = parseFloat(document.getElementById('v_panjang').value) || 0;

  if (v >= 1) {
    alert("Kecepatan harus < 1 c");
    return;
  }

  let gamma = 1 / Math.sqrt(1 - (v * v));
  let L = L0 / gamma;

  tampilkanHasil(L, 'meter');
  bersihkanInput();
}

function hitungMassaRel() {
  let m0 = parseFloat(document.getElementById('m0_rel').value) || 0;
  let v = parseFloat(document.getElementById('v_massa').value) || 0;

  if (v >= 1) {
    alert("Kecepatan harus < 1 c");
    return;
  }

  let gamma = 1 / Math.sqrt(1 - (v * v));
  let m = m0 * gamma;

  tampilkanHasil(m, 'kg');
  bersihkanInput();
}

function hitungEnergiRel() {
  let m0 = parseFloat(document.getElementById('m0_energi').value) || 0;
  let v = parseFloat(document.getElementById('v_energi').value) || 0;
  const c = 3e8;

  if (v >= 1) {
    alert("Kecepatan harus < 1 c");
    return;
  }

  let gamma = 1 / Math.sqrt(1 - (v * v));
  let E = gamma * m0 * Math.pow(c, 2);

  tampilkanHasil(E, 'Joule');
  bersihkanInput();
}

function hitungWien() {
  let T = parseFloat(document.getElementById('suhu_wien').value) || 0;
  const C_wien = 2.9e-3;

  if (T === 0) {
    alert("Suhu tidak boleh 0 K");
    return;
  }

  let lambda = C_wien / T;
  tampilkanHasil(lambda, 'meter');
  bersihkanInput();
}

function hitungEnergiFoton() {
  let lambda = parseFloat(document.getElementById('lambda_foton').value) || 0;
  const h = 6.63e-34;
  const c = 3e8;

  if (lambda === 0) {
    alert("Panjang gelombang tidak valid");
    return;
  }

  let E = (h * c) / lambda;
  tampilkanHasil(E, 'Joule');
  bersihkanInput();
}

function hitungFotolistrik() {
  let E = parseFloat(document.getElementById('e_datang').value) || 0;
  let W0 = parseFloat(document.getElementById('w_fungsi').value) || 0;

  let Ek = E - W0;

  if (Ek < 0) {
    alert("Energi tidak cukup untuk melepaskan elektron!");
    Ek = 0;
  }

  tampilkanHasil(Ek, 'eV');
  bersihkanInput();
}

function hitungCompton() {
  let theta = parseFloat(document.getElementById('sudut_hamburan').value) || 0;
  const lambda_c = 2.43e-12;

  let rad = theta * (Math.PI / 180);
  let delta_lambda = lambda_c * (1 - Math.cos(rad));

  tampilkanHasil(delta_lambda, 'meter');
  bersihkanInput();
}

function hitungDeBroglie() {
  let m = parseFloat(document.getElementById('m_broglie').value) || 0;
  let v = parseFloat(document.getElementById('v_broglie').value) || 0;
  const h = 6.63e-34;

  if (m === 0 || v === 0) {
    alert("Massa dan kecepatan harus > 0");
    return;
  }

  let lambda = h / (m * v);
  tampilkanHasil(lambda, 'meter');
  bersihkanInput();
}

function hitungJariJariBohr() {
  let n = parseFloat(document.getElementById('n_jari').value) || 0;
  const r0 = 5.3e-11;

  if (n <= 0 || !Number.isInteger(n)) {
    alert("Kulit n harus bilangan bulat positif");
    return;
  }

  let rn = n * n * r0;
  tampilkanHasil(rn, 'meter');
  bersihkanInput();
}

function hitungEnergiBohr() {
  let n = parseFloat(document.getElementById('n_kulit').value) || 0;

  if (n <= 0 || !Number.isInteger(n)) {
    alert("Kulit n harus bilangan bulat positif (1,2,3...)");
    return;
  }

  let En = -13.6 / (n * n);
  tampilkanHasil(En, 'eV');
  bersihkanInput();
}

function hitungSpektrum() {
  let nA = parseFloat(document.getElementById('n_tujuan').value) || 0;
  let nB = parseFloat(document.getElementById('n_asal').value) || 0;
  const R = 1.097e7;

  if (nA <= 0 || nB <= 0) {
    alert("Nilai kulit n harus positif");
    return;
  }
  if (nB <= nA) {
    alert("Kulit asal (nB) harus lebih besar dari kulit tujuan (nA)");
    return;
  }

  let term = (1 / (nA * nA)) - (1 / (nB * nB));
  let lambda = 1 / (R * term);

  tampilkanHasil(lambda, 'meter');
  bersihkanInput();
}

function hitungEnergiIkat() {
  let dm = parseFloat(document.getElementById('delta_m').value) || 0;
  let E = dm * 931;
  tampilkanHasil(E, 'MeV');
  bersihkanInput();
}

function hitungPeluruhan() {
  let N0 = parseFloat(document.getElementById('n0_radio').value) || 0;
  let T_half = parseFloat(document.getElementById('t_half').value) || 0;
  let t = parseFloat(document.getElementById('t_jalan').value) || 0;

  if (T_half === 0) {
    alert("Waktu paruh tidak boleh 0");
    return;
  }

  let rasio = t / T_half;
  let Nt = N0 * Math.pow(0.5, rasio);

  tampilkanHasil(Nt, 'partikel');
  bersihkanInput();
}

function hitungAktivitas() {
  let T = parseFloat(document.getElementById('t_half_akt').value) || 0;
  let N = parseFloat(document.getElementById('n_partikel_akt').value) || 0;

  if (T === 0) {
    alert("Waktu paruh tidak boleh 0");
    return;
  }

  let lambda_konstanta = 0.693 / T;
  let A = lambda_konstanta * N;

  tampilkanHasil(A, 'Becquerel (Bq)');
  bersihkanInput();
}

function hitungReaksiInti() {
  let mR = parseFloat(document.getElementById('m_reaktan').value) || 0;
  let mP = parseFloat(document.getElementById('m_produk').value) || 0;

  let delta_m = mR - mP;
  let Q = delta_m * 931;

  tampilkanHasil(Q, 'MeV');
  bersihkanInput();
}