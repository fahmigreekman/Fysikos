function tampilkanKalkulator() {
  const topik = document.getElementById('pilih-topik').value;
  const area = document.getElementById('kalkulator-area');
  
  area.innerHTML = '';

  let htmlContent = '';

  switch (topik) {
    case 'cepat-rambat-dasar':
      htmlContent = `
        <h3>Hitung Cepat Rambat Gelombang</h3>
        <p>Rumus: v = λ × f</p>
        <div class="input-group">
            <label>Panjang Gelombang (λ) [m]:</label>
            <input type="number" id="lambda" placeholder="0">
        </div>
        <div class="input-group">
            <label>Frekuensi (f) [Hz]:</label>
            <input type="number" id="frekuensi" placeholder="0">
        </div>
        <button onclick="hitungV()">Hitung Cepat Rambat (v)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'persamaan-simpangan':
      htmlContent = `
        <h3>Hitung Simpangan (Gelombang Berjalan)</h3>
        <p>Rumus: y = A sin(ωt - kx)</p>
        <div class="input-group">
            <label>Amplitudo (A) [m]:</label>
            <input type="number" id="amp_jalan">
        </div>
        <div class="input-group">
            <label>Frekuensi Sudut (ω) [rad/s]:</label>
            <input type="number" id="omega_jalan">
        </div>
        <div class="input-group">
            <label>Bilangan Gelombang (k):</label>
            <input type="number" id="k_jalan">
        </div>
        <div class="input-group">
            <label>Waktu (t) [s]:</label>
            <input type="number" id="t_jalan">
        </div>
        <div class="input-group">
            <label>Posisi (x) [m]:</label>
            <input type="number" id="x_jalan">
        </div>
        <button onclick="hitungSimpangan()">Hitung Simpangan (y)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'amplitudo-stasioner':
      htmlContent = `
        <h3>Amplitudo Stasioner (Ujung Terikat)</h3>
        <p>Rumus: As = 2A sin(kx)</p>
        <div class="input-group">
            <label>Amplitudo Sumber (A) [m]:</label>
            <input type="number" id="amp_sumber">
        </div>
        <div class="input-group">
            <label>Bilangan Gelombang (k):</label>
            <input type="number" id="k_stasioner">
        </div>
        <div class="input-group">
            <label>Jarak dari Ujung (x) [m]:</label>
            <input type="number" id="x_stasioner">
        </div>
        <button onclick="hitungAmplitudoStasioner()">Hitung Amplitudo (As)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'letak-simpul-perut':
      htmlContent = `
        <h3>Letak Simpul ke-n (Ujung Terikat)</h3>
        <p>Rumus: x = n × (λ / 2)</p>
        <div class="input-group">
            <label>Orde Simpul (n) [0, 1, 2...]:</label>
            <input type="number" id="n_simpul">
        </div>
        <div class="input-group">
            <label>Panjang Gelombang (λ) [m]:</label>
            <input type="number" id="lambda_simpul">
        </div>
        <button onclick="hitungLetakSimpul()">Hitung Posisi (x)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'cepat-rambat-dawai':
      htmlContent = `
        <h3>Hukum Melde (Dawai)</h3>
        <p>Rumus: v = √( (F × L) / m )</p>
        <div class="input-group">
            <label>Gaya Tegangan (F) [N]:</label>
            <input type="number" id="f_melde">
        </div>
        <div class="input-group">
            <label>Panjang Dawai (L) [m]:</label>
            <input type="number" id="l_melde">
        </div>
        <div class="input-group">
            <label>Massa Dawai (m) [kg]:</label>
            <input type="number" id="m_melde">
        </div>
        <button onclick="hitungMelde()">Hitung Cepat Rambat (v)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'frekuensi-pipa-organa':
      htmlContent = `
        <h3>Frekuensi Pipa Organa Terbuka</h3>
        <p>Rumus: fn = (n + 1) × v / (2 × L)</p>
        <div class="input-group">
            <label>Nada ke-n (0=Dasar, 1=Atas 1):</label>
            <input type="number" id="n_pipa">
        </div>
        <div class="input-group">
            <label>Cepat Rambat Bunyi (v) [m/s]:</label>
            <input type="number" id="v_pipa" value="340">
        </div>
        <div class="input-group">
            <label>Panjang Pipa (L) [m]:</label>
            <input type="number" id="l_pipa">
        </div>
        <button onclick="hitungPipa()">Hitung Frekuensi (f)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'efek-doppler':
      htmlContent = `
        <h3>Efek Doppler</h3>
        <p>Rumus: fp = fs × (v + vp) / (v + vs)</p>
        <p><small>Gunakan tanda (-) jika menjauh/mendekat sesuai aturan vektor</small></p>
        <div class="input-group">
            <label>Frekuensi Sumber (fs) [Hz]:</label>
            <input type="number" id="fs">
        </div>
        <div class="input-group">
            <label>Cepat Rambat Bunyi (v) [m/s]:</label>
            <input type="number" id="v_udara" value="340">
        </div>
        <div class="input-group">
            <label>Kec. Pendengar (vp) [m/s]:</label>
            <input type="number" id="vp" placeholder="+ mendekat, - menjauh">
        </div>
        <div class="input-group">
            <label>Kec. Sumber (vs) [m/s]:</label>
            <input type="number" id="vs" placeholder="+ menjauh, - mendekat">
        </div>
        <button onclick="hitungDoppler()">Hitung Frekuensi Pendengar (fp)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'taraf-intensitas':
      htmlContent = `
        <h3>Taraf Intensitas Bunyi</h3>
        <p>Rumus: TI = 10 × log(I / I₀)</p>
        <p><small>I₀ = 10⁻¹² W/m²</small></p>
        <div class="input-group">
            <label>Intensitas Bunyi (I) [W/m²]:</label>
            <input type="number" id="intensitas">
        </div>
        <button onclick="hitungTI()">Hitung Taraf Intensitas (dB)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'interferensi-celah-ganda':
      htmlContent = `
        <h3>Interferensi Celah Ganda (Young)</h3>
        <p>Rumus Terang: y = (n × λ × L) / d</p>
        <div class="input-group">
            <label>Orde (n):</label>
            <input type="number" id="n_young">
        </div>
        <div class="input-group">
            <label>Panjang Gelombang (λ) [m]:</label>
            <input type="number" id="lambda_young">
        </div>
        <div class="input-group">
            <label>Jarak Layar (L) [m]:</label>
            <input type="number" id="L_young">
        </div>
        <div class="input-group">
            <label>Jarak Antar Celah (d) [m]:</label>
            <input type="number" id="d_young">
        </div>
        <button onclick="hitungYoung()">Hitung Jarak Pola (y)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'difraksi-celah-tunggal':
      htmlContent = `
        <h3>Difraksi Celah Tunggal (Pola Gelap)</h3>
        <p>Rumus: y = (n × λ × L) / d</p>
        <div class="input-group">
            <label>Orde (n):</label>
            <input type="number" id="n_difraksi">
        </div>
        <div class="input-group">
            <label>Panjang Gelombang (λ) [m]:</label>
            <input type="number" id="lambda_difraksi">
        </div>
        <div class="input-group">
            <label>Jarak Layar (L) [m]:</label>
            <input type="number" id="L_difraksi">
        </div>
        <div class="input-group">
            <label>Lebar Celah (d) [m]:</label>
            <input type="number" id="d_difraksi">
        </div>
        <button onclick="hitungDifraksi()">Hitung Jarak Pola (y)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    default:
      htmlContent = '<p>Silakan pilih topik materi gelombang terlebih dahulu.</p>';
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
    box.innerHTML = `Hasil Perhitungan: <strong>${nilai.toFixed(4)} ${satuan}</strong>`;
}

function bersihkanInput() {
    const inputs = document.querySelectorAll('#kalkulator-area input');
    inputs.forEach(input => {
        input.value = '';
    });
}

function hitungV() {
    let lambda = parseFloat(document.getElementById('lambda').value) || 0;
    let f = parseFloat(document.getElementById('frekuensi').value) || 0;
    
    let v = lambda * f;
    tampilkanHasil(v, 'm/s');
    bersihkanInput();
}

function hitungSimpangan() {
    let A = parseFloat(document.getElementById('amp_jalan').value) || 0;
    let w = parseFloat(document.getElementById('omega_jalan').value) || 0;
    let k = parseFloat(document.getElementById('k_jalan').value) || 0;
    let t = parseFloat(document.getElementById('t_jalan').value) || 0;
    let x = parseFloat(document.getElementById('x_jalan').value) || 0;

    let y = A * Math.sin((w * t) - (k * x));
    tampilkanHasil(y, 'meter');
    bersihkanInput();
}

function hitungAmplitudoStasioner() {
    let A = parseFloat(document.getElementById('amp_sumber').value) || 0;
    let k = parseFloat(document.getElementById('k_stasioner').value) || 0;
    let x = parseFloat(document.getElementById('x_stasioner').value) || 0;

    let As = 2 * A * Math.sin(k * x);
    tampilkanHasil(As, 'meter');
    bersihkanInput();
}

function hitungLetakSimpul() {
    let n = parseFloat(document.getElementById('n_simpul').value) || 0;
    let lambda = parseFloat(document.getElementById('lambda_simpul').value) || 0;

    let x = n * (lambda / 2);
    tampilkanHasil(x, 'meter');
    bersihkanInput();
}

function hitungMelde() {
    let F = parseFloat(document.getElementById('f_melde').value) || 0;
    let L = parseFloat(document.getElementById('l_melde').value) || 0;
    let m = parseFloat(document.getElementById('m_melde').value) || 0;

    if(m === 0) { alert("Massa tidak boleh nol!"); return; }

    let v = Math.sqrt((F * L) / m);
    tampilkanHasil(v, 'm/s');
    bersihkanInput();
}

function hitungPipa() {
    let n = parseFloat(document.getElementById('n_pipa').value) || 0;
    let v = parseFloat(document.getElementById('v_pipa').value) || 0;
    let L = parseFloat(document.getElementById('l_pipa').value) || 0;

    if(L === 0) { alert("Panjang pipa tidak boleh nol!"); return; }

    let f = ((n + 1) * v) / (2 * L);
    tampilkanHasil(f, 'Hz');
    bersihkanInput();
}

function hitungDoppler() {
    let fs = parseFloat(document.getElementById('fs').value) || 0;
    let v = parseFloat(document.getElementById('v_udara').value) || 0;
    let vp = parseFloat(document.getElementById('vp').value) || 0;
    let vs = parseFloat(document.getElementById('vs').value) || 0;

    let fp = fs * ((v + vp) / (v + vs));
    tampilkanHasil(fp, 'Hz');
    bersihkanInput();
}

function hitungTI() {
    let I = parseFloat(document.getElementById('intensitas').value) || 0;
    let I0 = 1e-12;

    if(I <= 0) { alert("Intensitas harus lebih besar dari 0!"); return; }

    let TI = 10 * Math.log10(I / I0);
    tampilkanHasil(TI, 'dB');
    bersihkanInput();
}

function hitungYoung() {
    let n = parseFloat(document.getElementById('n_young').value) || 0;
    let lambda = parseFloat(document.getElementById('lambda_young').value) || 0;
    let L = parseFloat(document.getElementById('L_young').value) || 0;
    let d = parseFloat(document.getElementById('d_young').value) || 0;

    if(d === 0) { alert("Jarak antar celah tidak boleh nol!"); return; }

    let y = (n * lambda * L) / d;
    tampilkanHasil(y, 'meter');
    bersihkanInput();
}

function hitungDifraksi() {
    let n = parseFloat(document.getElementById('n_difraksi').value) || 0;
    let lambda = parseFloat(document.getElementById('lambda_difraksi').value) || 0;
    let L = parseFloat(document.getElementById('L_difraksi').value) || 0;
    let d = parseFloat(document.getElementById('d_difraksi').value) || 0;

    if(d === 0) { alert("Lebar celah tidak boleh nol!"); return; }

    let y = (n * lambda * L) / d;
    tampilkanHasil(y, 'meter');
    bersihkanInput();
}