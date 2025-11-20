function tampilkanKalkulator() {
  const topik = document.getElementById('pilih-topik').value;
  const area = document.getElementById('kalkulator-area');
  
  area.innerHTML = '';

  let htmlContent = '';

  switch (topik) {
    case 'kinematika-glb-glbb':
      htmlContent = `
        <h3>Hitung Jarak Tempuh (GLBB)</h3>
        <p>Rumus: s = v₀ × t + ½ × a × t²</p>
        <div class="input-group">
            <label>Kecepatan Awal (v₀) [m/s]:</label>
            <input type="number" id="v0" placeholder="0">
        </div>
        <div class="input-group">
            <label>Waktu (t) [s]:</label>
            <input type="number" id="t" placeholder="0">
        </div>
        <div class="input-group">
            <label>Percepatan (a) [m/s²]:</label>
            <input type="number" id="a" placeholder="0">
        </div>
        <button onclick="hitungGLBB()">Hitung Jarak (s)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'kinematika-parabola':
      htmlContent = `
        <h3>Hitung Tinggi Maksimum Parabola</h3>
        <p>Rumus: h_max = (v₀² × sin² θ) / 2g</p>
        <p><small>(Gravitasi g = 10 m/s²)</small></p>
        <div class="input-group">
            <label>Kecepatan Awal (v₀) [m/s]:</label>
            <input type="number" id="v0_parabola">
        </div>
        <div class="input-group">
            <label>Sudut Elevasi (θ) [derajat]:</label>
            <input type="number" id="theta">
        </div>
        <button onclick="hitungParabola()">Hitung Tinggi Maks (h_max)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'kinematika-melingkar':
      htmlContent = `
        <h3>Hitung Percepatan Sentripetal</h3>
        <p>Rumus: as = v² / R</p>
        <div class="input-group">
            <label>Kecepatan Linear (v) [m/s]:</label>
            <input type="number" id="v_melingkar">
        </div>
        <div class="input-group">
            <label>Jari-jari (R) [m]:</label>
            <input type="number" id="R_melingkar">
        </div>
        <button onclick="hitungSentripetal()">Hitung (as)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'dinamika-partikel':
      htmlContent = `
        <h3>Hukum II Newton (Mencari Gaya)</h3>
        <p>Rumus: F = m × a</p>
        <div class="input-group">
            <label>Massa (m) [kg]:</label>
            <input type="number" id="massa">
        </div>
        <div class="input-group">
            <label>Percepatan (a) [m/s²]:</label>
            <input type="number" id="acc">
        </div>
        <button onclick="hitungNewton()">Hitung Gaya (F)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'usaha-energi':
      htmlContent = `
        <h3>Hitung Energi Kinetik</h3>
        <p>Rumus: Ek = ½ × m × v²</p>
        <div class="input-group">
            <label>Massa (m) [kg]:</label>
            <input type="number" id="m_ek">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [m/s]:</label>
            <input type="number" id="v_ek">
        </div>
        <button onclick="hitungEk()">Hitung Energi (Ek)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;
      
    case 'impuls-momentum':
      htmlContent = `
        <h3>Hitung Momentum</h3>
        <p>Rumus: p = m × v</p>
        <div class="input-group">
            <label>Massa (m) [kg]:</label>
            <input type="number" id="m_mom">
        </div>
        <div class="input-group">
            <label>Kecepatan (v) [m/s]:</label>
            <input type="number" id="v_mom">
        </div>
        <button onclick="hitungMomentum()">Hitung Momentum (p)</button>
        <div id="hasil-output" class="hasil-box" style="display:none;"></div>
      `;
      break;

    case 'dinamika-rotasi':
      htmlContent = `
        <h3>Hitung Torsi (Momen Gaya)</h3>
        <p>Rumus: τ = F × r × sin(θ)</p>
        <div class="input-group">
            <label>Gaya (F) [Newton]:</label>
            <input type="number" id="f_torsi">
        </div>
        <div class="input-group">
            <label>Lengan Gaya (r) [meter]:</label>
            <input type="number" id="r_torsi">
        </div>
        <div class="input-group">
            <label>Sudut (θ) [derajat]:</label>
            <input type="number" id="theta_torsi" value="90">
        </div>
        <button onclick="hitungTorsi()">Hitung Torsi (τ)</button>
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

function hitungGLBB() {
    let v0 = parseFloat(document.getElementById('v0').value) || 0;
    let t = parseFloat(document.getElementById('t').value) || 0;
    let a = parseFloat(document.getElementById('a').value) || 0;
    
    let s = (v0 * t) + (0.5 * a * Math.pow(t, 2));
    tampilkanHasil(s, 'meter');
    bersihkanInput();
}

function hitungParabola() {
    let v0 = parseFloat(document.getElementById('v0_parabola').value) || 0;
    let theta = parseFloat(document.getElementById('theta').value) || 0;
    let g = 10;
    
    let rad = theta * (Math.PI / 180);
    let hmax = (Math.pow(v0, 2) * Math.pow(Math.sin(rad), 2)) / (2 * g);
    
    tampilkanHasil(hmax, 'meter');
    bersihkanInput();
}

function hitungSentripetal() {
    let v = parseFloat(document.getElementById('v_melingkar').value) || 0;
    let R = parseFloat(document.getElementById('R_melingkar').value) || 0;
    
    if(R === 0) { alert("Jari-jari tidak boleh nol!"); return; }
    
    let as = (v * v) / R;
    tampilkanHasil(as, 'm/s²');
    bersihkanInput();
}

function hitungNewton() {
    let m = parseFloat(document.getElementById('massa').value) || 0;
    let a = parseFloat(document.getElementById('acc').value) || 0;
    
    let F = m * a;
    tampilkanHasil(F, 'Newton');
    bersihkanInput();
}

function hitungEk() {
    let m = parseFloat(document.getElementById('m_ek').value) || 0;
    let v = parseFloat(document.getElementById('v_ek').value) || 0;
    
    let Ek = 0.5 * m * v * v;
    tampilkanHasil(Ek, 'Joule');
    bersihkanInput();
}

function hitungMomentum() {
    let m = parseFloat(document.getElementById('m_mom').value) || 0;
    let v = parseFloat(document.getElementById('v_mom').value) || 0;
    
    let p = m * v;
    tampilkanHasil(p, 'kg·m/s');
    bersihkanInput();
}

function hitungTorsi() {
    let F = parseFloat(document.getElementById('f_torsi').value) || 0;
    let r = parseFloat(document.getElementById('r_torsi').value) || 0;
    let theta = parseFloat(document.getElementById('theta_torsi').value) || 0;
    
    let rad = theta * (Math.PI / 180);
    let tau = F * r * Math.sin(rad);
    
    tampilkanHasil(tau, 'N·m');
    bersihkanInput();
}