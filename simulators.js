// ==========================================================================
// 8 PHÒNG THÍ NGHIỆM MÔ PHỎNG TƯƠNG TÁC KÝ SINH TRÙNG Y HỌC SĐH YDS 2026
// Mỗi bài học có 1 Phòng thí nghiệm Mô phỏng trực quan & phản hồi tức thời
// ==========================================================================

window.Simulators = {
  render(simId, container) {
    if (!container) return;
    if (typeof this[simId] === "function") {
      this[simId](container);
    } else {
      container.innerHTML = `<div class="callout">Đang tải mô phỏng...</div>`;
    }
  },

  // ========================================================================
  // BÀI 1: PHÒNG LAB PHÂN LOẠI KST – KÝ CHỦ & TIỀN THÍCH ỨNG
  // ========================================================================
  sim_taxonomy_hosts(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tình huống Ký sinh trùng – Ký chủ (Theo Chương 1):</label>
          <select id="s1_case" onchange="Simulators.upd_s1()">
            <option value="ecoli">1. Entamoeba coli / Pentatrichomonas trong ruột già người</option>
            <option value="cây_xanh">2. Người và động vật với các cây xanh (Câu 9 tr. 24)</option>
            <option value="ascaris_pancreas">3. Giun đũa Ascaris chui vào ống tụy / ống mật</option>
            <option value="pollen">4. Hạt phấn hoa trong mẫu phân bệnh nhân</option>
            <option value="ixodes">5. Ong Ixodiphagus caucurtei ký sinh trên ve Ixodes ricinus</option>
            <option value="dlatum_fish">6. Cá lớn nuốt cá bé chứa ấu trùng II Diphyllobothrium latum</option>
            <option value="anopheles">7. Muỗi Anopheles mang và truyền KST sốt rét</option>
            <option value="housefly">8. Ruồi nhà mang bào nang E. histolytica trên chân</option>
            <option value="toxo_organ">9. Toxoplasma gondii ở não, mắt, cơ tim, phổi nhiều loài</option>
          </select>
        </div>
        <div class="control-group">
          <label>Kiểm thử Tiến hóa – Trạng thái Ký sinh:</label>
          <select id="s1_evo" onchange="Simulators.upd_s1()">
            <option value="pre">Tiền thích ứng (Preadaptation)</option>
            <option value="adapt" selected>Thích ứng (Adaptation)</option>
          </select>
        </div>
      </div>
      <div id="s1_out"></div>
    `;
    this.upd_s1();
  },
  upd_s1() {
    const c = document.getElementById("s1_case").value;
    const evo = document.getElementById("s1_evo").value;

    const db = {
      ecoli: {
        cat: "Tương quan HỘI SINH (Commensalism)",
        color: "var(--primary)",
        bg: "var(--primary-light)",
        hostRole: "Một bên có lợi (+), người không lợi không hại (0)",
        spec: "Ký sinh ở ruột già người; không phải tác nhân gây bệnh",
        note: "Trang 4 (mục 2.3): Hội sinh gồm Pentatrichomonas intestinalis, Entamoeba coli, Escherichia coli trong ruột già người."
      },
      "cây_xanh": {
        cat: "Tương quan CỘNG SINH (Symbiosis)",
        color: "var(--success)",
        bg: "var(--success-light)",
        hostRole: "Bắt buộc và cả hai cùng có lợi (+/+)",
        spec: "Chuẩn đáp án Câu tự lượng giá 9 (tr. 555: A)",
        note: "Theo tr. 3 & đáp án tr. 555: Tương quan giữa người và động vật với cây xanh được xếp là Cộng sinh (symbiosis). (Tương sinh không bắt buộc là cua biển – hải tức)."
      },
      ascaris_pancreas: {
        cat: "KÝ SINH TRÙNG LẠC CHỖ (Erratic parasite)",
        color: "var(--danger)",
        bg: "var(--danger-light)",
        hostRole: "Người vẫn là KCVV (đặc hiệu hẹp ký chủ)",
        spec: "Lạc sang cơ quan khác trên cùng ký chủ quen thuộc",
        note: "Trang 5 (mục 6.5): Bình thường A. lumbricoides sống ở ruột non (đặc hiệu hẹp nơi ký sinh); chui vào ống tụy hay ống mật là KST lạc chỗ."
      },
      pollen: {
        cat: "KÝ SINH TRÙNG GIẢ HIỆU (Pseudoparasite)",
        color: "var(--warning)",
        bg: "var(--warning-light)",
        hostRole: "Không phải sinh vật ký sinh, chỉ là chất cặn bã",
        spec: "Hình dạng dưới kính hiển vi dễ nhầm trứng giun sán",
        note: "Trang 6 (mục 6.8): Chất cặn bã trong bệnh phẩm có hình dạng rất giống KST (ví dụ hạt phấn hoa gặp trong phân người)."
      },
      ixodes: {
        cat: "BỘI KÝ SINH TRÙNG (Hyperparasite)",
        color: "var(--purple)",
        bg: "var(--purple-light)",
        hostRole: "KST của một KST khác",
        spec: "Ixodes ricinus là ngoại KST hút máu người",
        note: "Trang 6 (mục 6.9): Ixodiphagus caucurtei ký sinh trên ve Ixodes ricinus là ví dụ kinh điển của Bội KST."
      },
      dlatum_fish: {
        cat: "KÝ CHỦ CHỜ THỜI (Paratenic host)",
        color: "var(--warning)",
        bg: "var(--warning-light)",
        hostRole: "Nuốt KCTG II nhưng ấu trùng vẫn dừng ở giai đoạn II",
        spec: "Lưu ý bẫy Câu 5: Người là KCVV, KHÔNG phải KC chờ thời!",
        note: "Trang 6 (mục 7.3) & Đáp án 5B (tr. 555): Cá lớn nuốt cá bé chứa ấu trùng II D. latum giữ nguyên ấu trùng II → cá lớn là Ký chủ chờ thời."
      },
      anopheles: {
        cat: "KCVV + TRUNG GIAN TRUYỀN BỆNH SINH HỌC",
        color: "var(--accent)",
        bg: "var(--accent-light)",
        hostRole: "Chứa giai đoạn hữu tính (KCVV) & KST tăng dân số",
        spec: "Muỗi cái Anopheles truyền Plasmodium spp.",
        note: "Trang 6 (mục 7.1 & 7.6): Muỗi Anopheles là KCVV của KST sốt rét đồng thời là TGTB sinh học (khác Culex/Mansonia với giun chỉ ở chỗ sốt rét tăng dân số trong muỗi)."
      },
      housefly: {
        cat: "TRUNG GIAN TRUYỀN BỆNH CƠ HỌC",
        color: "var(--warning)",
        bg: "var(--warning-light)",
        hostRole: "Chuyên chở thụ động, KST không phát triển thêm",
        spec: "Không tăng dân số bào nang trên cơ thể ruồi",
        note: "Trang 6 (mục 7.6): Bào nang Entamoeba histolytica dính trên cơ thể ruồi là TGTB cơ học."
      },
      toxo_organ: {
        cat: "ĐẶC HIỆU RỘNG (Cả Ký chủ & Cơ quan)",
        color: "var(--danger)",
        bg: "var(--danger-light)",
        hostRole: "Ký sinh nhiều loài (người, trâu bò, heo, chim...)",
        spec: "Tác hại đa dạng, rất khó diệt trừ & khó chẩn đoán",
        note: "Trang 4–5 (mục 4): Ngược với giun đũa (hẹp–hẹp, dễ phòng chống), Toxoplasma rộng cả về ký chủ lẫn cơ quan (não, mắt, cơ tim, phổi) nên rất khó diệt trừ."
      }
    };

    const d = db[c];
    const evoHtml = evo === "pre"
      ? `<strong>Tiền thích ứng (Preadaptation):</strong> Có thay đổi <em>sinh lý nội tại</em> giúp không bị hủy diệt khi vào nội môi, ra ngoại cảnh vẫn sống tự do; <strong>CHƯA</strong> có đĩa hút, răng, dao cắt (Câu 12 tr. 24–25).`
      : `<strong>Thích ứng (Adaptation):</strong> Phát triển cấu trúc hình thái mới (<strong>răng, dao cắt</strong> ở giun móc; <strong>đĩa hút, móc</strong> ở sán lá) để định vị luôn trong ký chủ và <strong>di truyền</strong> được.`;

    document.getElementById("s1_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Phân loại Chuẩn</div><div class="metric-val" style="color:${d.color};font-size:15px;">${d.cat}</div></div>
        <div class="metric-card"><div class="metric-label">Vai trò / Cơ chế</div><div class="metric-val" style="font-size:14px;">${d.hostRole}</div></div>
        <div class="metric-card"><div class="metric-label">Ý nghĩa Y học / Thi</div><div class="metric-val" style="font-size:14px;color:var(--accent);">${d.spec}</div></div>
      </div>
      <div class="callout" style="background:${d.bg};border-left-color:${d.color};">
        <div class="callout-title">📖 Biện luận theo Giáo trình YDS 2015</div>
        <p>${d.note}</p>
        <p style="margin-top:8px;padding-top:8px;border-top:1px dashed var(--border);">${evoHtml}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 2: BẢN ĐỒ TRUY VẾT DÂY TRUYỀN & CHU TRÌNH PHÁT TRIỂN KST
  // ========================================================================
  sim_transmission_chain(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Nguồn nhiễm / Phơi nhiễm Thực tế (tr. 7–9):</label>
          <select id="s2_src" onchange="Simulators.upd_s2()">
            <option value="cu_au">1. Ăn củ ấu (Trapa sp.) sống</option>
            <option value="tom_cua">2. Ăn tôm, cua suối nướng chưa chín</option>
            <option value="thit_heo">3. Ăn thịt heo sống / nem chua</option>
            <option value="ca_song">4. Ăn gỏi cá sống nước ngọt</option>
            <option value="chan_dat">5. Đi chân đất làm rẫy cao su / hầm mỏ</option>
            <option value="nuoc_tieu">6. Tiếp xúc nguồn nước &amp; xét nghiệm nước tiểu thấy trứng</option>
            <option value="tu_nhiem">7. Tự nhiễm ở trẻ em / người suy giảm miễn dịch</option>
            <option value="la_nhau">8. Nhiễm KST từ mẹ truyền qua lá nhau cho thai nhi</option>
          </select>
        </div>
      </div>
      <div id="s2_out"></div>
    `;
    this.upd_s2();
  },
  upd_s2() {
    const k = document.getElementById("s2_src").value;
    const map = {
      cu_au: { kst: "Fasciolopsis buski (Sán lá lớn ruột)", out: "Phân (trứng)", via: "Nuốt thực phẩm (Củ ấu Trapa sp.)", into: "Miệng", ctpt: "Gián tiếp qua 1–2 KCTG / thực vật thủy sinh", pos: "Giai đoạn chính ở heo/người" },
      tom_cua: { kst: "Paragonimus westermani (Sán lá phổi)", out: "Chất phân tiết (Đàm) & Phân", via: "Ăn tôm, cua chứa nang ấu trùng", into: "Miệng", ctpt: "Gián tiếp qua 2 KCTG (Ốc → Tôm/cua)", pos: "Xen kẽ động vật (Hoàn chỉnh)" },
      thit_heo: { kst: "Taenia solium & Trichinella spiralis", out: "Phân (T. solium) / Ăn thịt (T. spiralis)", via: "Ăn thịt heo sống / chưa chín", into: "Miệng", ctpt: "T. solium: KCVV đồng thời là KCTG! T. spiralis: Trực tiếp ngắn", pos: "T. solium: Xen kẽ; T. spiralis: Ngõ cụt cảnh ngộ" },
      ca_song: { kst: "Diphyllobothrium latum & Clonorchis sinensis", out: "Phân (trứng)", via: "Ăn cá sống (KCTG II)", into: "Miệng", ctpt: "Gián tiếp qua 2 KCTG (Cyclops/Ốc → Cá)", pos: "Xen kẽ ĐV / Tàng chủ mèo hoang (C. sinensis)" },
      chan_dat: { kst: "Giun móc (A. duodenale, N. americanus) & Giun lươn", out: "Phân → Đất ô nhiễm phân", via: "Đi chân đất (Nghề rẫy, cao su, hầm mỏ)", into: "Da (ấu trùng filariform)", ctpt: "Trực tiếp và DÀI (phát triển ở đất)", pos: "Người là KCVV" },
      nuoc_tieu: { kst: "Schistosoma haematobium", out: "Chất ngoại tiết: Nước tiểu", via: "Tiếp xúc nguồn nước có ấu trùng đuôi", into: "Da", ctpt: "Gián tiếp qua 1 KCTG (ốc nước ngọt)", pos: "KCVV" },
      tu_nhiem: { kst: "Enterobius vermicularis (Giun kim) & Strongyloides stercoralis", out: "Phân / Rìa hậu môn", via: "Tự nhiễm (mục 9.5.8) + Hô hấp (E. vermicularis)", into: "Miệng / Hô hấp / Niêm mạc ruột", ctpt: "Giun kim: Trực tiếp NGẮN; Giun lươn: Trực tiếp DÀI", pos: "Giun kim: Người là ký chủ duy nhất" },
      la_nhau: { kst: "Toxoplasma gondii & Plasmodium sp.", out: "Máu / Đờm-mô (ĐV họ Mèo với Toxo)", via: "Qua tuần hoàn mẹ–thai", into: "Lá nhau (mục 9.3.4 tr. 9)", ctpt: "Toxo: Trực tiếp dài / Ngõ cụt vô tính; Sốt rét: Gián tiếp Anopheles", pos: "Toxo ở người: Bệnh động vật một chiều (Câu 8 tr. 563)" }
    };
    const d = map[k];
    document.getElementById("s2_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Tác nhân KST</div><div class="metric-val" style="font-size:15px;">${d.kst}</div></div>
        <div class="metric-card"><div class="metric-label">Đường ra</div><div class="metric-val" style="font-size:14px;color:var(--warning);">${d.out}</div></div>
        <div class="metric-card"><div class="metric-label">Đường vào</div><div class="metric-val" style="font-size:14px;color:var(--danger);">${d.into}</div></div>
        <div class="metric-card"><div class="metric-label">Loại CTPT</div><div class="metric-val" style="font-size:13.5px;color:var(--accent);">${d.ctpt}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">⛓️ Chuỗi Truy vết 5 Mắt xích</div>
        <p><strong>Phương thức &amp; Nguồn nhiễm:</strong> ${d.via} &nbsp;|&nbsp; <strong>Vị trí của Con người:</strong> ${d.pos}.</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 3: MÔ PHỎNG BIỂU ĐỒ LAVIER & CỘNG ĐỒNG KHÁNG NGUYÊN BIGUET
  // ========================================================================
  sim_lavier_immunity(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Ký sinh trùng để Mô phỏng Biểu đồ Lavier:</label>
          <select id="s3_sp" onchange="Simulators.upd_s3()">
            <option value="ascaris">1. Giun đũa Ascaris lumbricoides (Hội chứng Loeffler)</option>
            <option value="strongy">2. Giun lươn Strongyloides stercoralis (Răng cưa tự nhiễm Faust)</option>
            <option value="fasciola">3. Sán lá lớn gan Fasciola hepatica (Chu du nhu mô gan 12 tuần)</option>
            <option value="toxocara">4. Toxocara canis / Gnathostoma (Ngõ cụt ký sinh 50–80%)</option>
            <option value="giardia">5. Giardia lamblia / Entamoeba histolytica (Đơn bào)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Mốc Thời gian theo dõi (Tuần): <span id="s3_wk_lbl" style="color:var(--primary);font-weight:800;">Tuần 2</span></label>
          <input type="range" id="s3_wk" min="0" max="16" value="2" oninput="Simulators.upd_s3()" />
        </div>
      </div>
      <div id="s3_out"></div>
    `;
    this.upd_s3();
  },
  upd_s3() {
    const sp = document.getElementById("s3_sp").value;
    const wk = parseInt(document.getElementById("s3_wk").value);
    document.getElementById("s3_wk_lbl").textContent = `Tuần ${wk}`;

    const calcVal = (w) => {
      if (sp === "giardia") return 2;
      if (sp === "ascaris") {
        if (w === 0) return 2;
        if (w === 1) return 28;
        if (w === 2) return 38;
        if (w <= 5) return Math.round(38 - (w - 2) * 7.5);
        return Math.max(4, Math.round(15 - (w - 5) * 1.1));
      }
      if (sp === "strongy") {
        if (w === 0) return 3;
        if (w <= 2) return w === 1 ? 26 : 36;
        const base = Math.max(12, 34 - (w - 2) * 1.6);
        return (w % 3 === 0) ? Math.min(42, Math.round(base + 14)) : Math.round(base);
      }
      if (sp === "fasciola") {
        if (w === 0) return 3;
        if (w < 3) return Math.round(w * 24);
        if (w <= 10) return 75;
        return Math.max(12, Math.round(75 - (w - 10) * 10));
      }
      // toxocara
      if (w === 0) return 3;
      if (w <= 2) return Math.round(w * 35);
      return 74;
    };

    const pct = calcVal(wk);
    let pts = [];
    for (let i = 0; i <= 16; i++) {
      const x = 60 + (i / 16) * 640;
      const y = 185 - (calcVal(i) / 90) * 145;
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    const curX = 60 + (wk / 16) * 640;
    const curY = 185 - (pct / 90) * 145;

    const infoMap = {
      ascaris: {
        phase: wk === 0 ? "1. Tiềm phục" : wk <= 2 ? "2. Tăng cực đại (Hội chứng Loeffler)" : "3. Giảm dần tiệm cận 3%",
        tx: wk < 3 ? "Chưa nên xổ (thuốc không tác dụng lên ấu trùng ở phổi)" : wk < 8 ? "✅ ĐÃ CHO THUỐC XỔ ĐƯỢC (giun non về ruột dù phân chưa có trứng – tr. 499!)" : "✅ Giun trưởng thành bắt đầu đẻ trứng trong phân",
        biguet: "Fasciola hepatica chỉ chung 1 KN với Ascaris lumbricoides (Biguet)."
      },
      strongy: {
        phase: wk <= 2 ? "Sơ nhiễm" : (wk % 3 === 0 ? "⚡ Đỉnh Răng cưa (Đợt tự nhiễm Faust)" : "Giai đoạn giảm xen kẽ đợt Faust"),
        tx: "Cần diệt giun trưởng thành và chặn chu trình tự nhiễm Faust (rất nguy hiểm ở người suy giảm MD).",
        biguet: "Biểu đồ Lavier hình răng cưa đặc trưng (Biểu đồ 2.1-4, tr. 494–495)."
      },
      fasciola: {
        phase: wk < 3 ? "Xâm nhập ổ bụng" : wk <= 10 ? "Ăn nhu mô gan → BCTT 40–80%" : "Chui vào ống mật → giảm dần",
        tx: "Chú ý tr. 496: Sán trưởng thành trong ống mật thì thuốc thông thường ít tác dụng bằng giai đoạn chu du, nhưng Praziquantel/Triclabendazole theo chỉ định.",
        biguet: "F. hepatica chung: 7 KN (D. dendriticum), 6 KN (C. sinensis), 5 KN (S. mansoni), 4 KN (P. westermani), 3 KN (T. saginata), 1 KN (A. lumbricoides)."
      },
      toxocara: {
        phase: wk <= 1 ? "Xâm nhập vách ruột" : "Ngõ cụt ký sinh → Giữ cao kéo dài 50–80%!",
        tx: "Không trưởng thành ở ruột nên không có giai đoạn giảm về 3% như giun đũa; đáp ứng với Albendazole / Thiabendazole / Notezin.",
        biguet: "Câu 2 Chương 1 (tr. 24, 555) & Câu 15 Bài 2 (tr. 523): BCTT tăng tới 80%!"
      },
      giardia: {
        phase: "Không tăng BCTT (≤ 3%)",
        tx: "Đơn bào nói chung (trừ Toxoplasma gondii) KHÔNG làm tăng BCTT theo Biểu đồ Lavier (tr. 12, 491).",
        biguet: "Nếu ca nhiễm Giardia có BCTT > 50%, phải tầm soát đồng nhiễm giun sán mô!"
      }
    };
    const d = infoMap[sp];

    document.getElementById("s3_out").innerHTML = `
      <div class="svg-stage">
        <svg viewBox="0 0 760 215" class="proc-svg">
          <line x1="60" y1="185" x2="710" y2="185" stroke="var(--text-main)" stroke-width="2"/>
          <line x1="60" y1="185" x2="60" y2="25" stroke="var(--text-main)" stroke-width="2"/>
          <line x1="60" y1="180" x2="710" y2="180" stroke="var(--success)" stroke-width="1" stroke-dasharray="4 3"/>
          <text x="52" y="184" text-anchor="end" font-size="10" font-weight="700" fill="var(--success)">3%</text>
          <text x="52" y="116" text-anchor="end" font-size="10" font-weight="700" fill="var(--warning)">45%</text>
          <text x="52" y="48" text-anchor="end" font-size="10" font-weight="700" fill="var(--danger)">85%</text>
          <polyline fill="none" stroke="var(--primary)" stroke-width="3.5" points="${pts.join(" ")}"/>
          <line x1="${curX}" y1="25" x2="${curX}" y2="185" stroke="var(--danger)" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="${curX}" cy="${curY}" r="7" fill="var(--danger)" stroke="#fff" stroke-width="2"/>
          <text x="${Math.min(640, curX + 12)}" y="${Math.max(40, curY - 8)}" font-size="11.5" font-weight="800" fill="var(--danger)">Tuần ${wk}: ${pct}% BCTT</text>
        </svg>
      </div>
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Tỉ lệ BCTT tại Tuần ${wk}</div><div class="metric-val" style="color:${pct > 3 ? "var(--danger)" : "var(--success)"}">${pct}%</div><div class="metric-sub">Ngưỡng tăng: &gt; 3% (&gt; 300/mm³)</div></div>
        <div class="metric-card"><div class="metric-label">Giai đoạn Biểu đồ Lavier</div><div class="metric-val" style="font-size:14.5px;">${d.phase}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🔬 Biện luận Lâm sàng &amp; Cộng đồng Kháng nguyên</div>
        <p><strong>Thời điểm xử trí:</strong> ${d.tx}</p>
        <p style="margin-top:6px;"><strong>Dữ liệu Biguet (tr. 14):</strong> ${d.biguet}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 4: PHÒNG LAB CHẨN ĐOÁN TRỰC TIẾP – GIÁN TIẾP & QUE THỬ NOW MALARIA
  // ========================================================================
  sim_immunodiagnosis(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>1. Thử nghiệm KIT NOW® Malaria (H1.dc-2 tr. 19):</label>
          <select id="s4_ict" onchange="Simulators.upd_s4()">
            <option value="pf_only">Mẫu 1: Nhiễm đơn Plasmodium falciparum (HRP-2 +)</option>
            <option value="pf_mixed">Mẫu 2: P. falciparum hoặc Đồng nhiễm (HRP-2 + Aldolase)</option>
            <option value="non_pf">Mẫu 3: Nhiễm P. vivax / P. malariae / P. ovale</option>
            <option value="neg">Mẫu 4: Người không nhiễm sốt rét (Âm tính)</option>
          </select>
        </div>
        <div class="control-group">
          <label>2. Tra cứu Kỹ thuật Miễn dịch Chẩn đoán (Bảng tr. 22 &amp; tr. 20–21):</label>
          <select id="s4_test" onchange="Simulators.upd_s4()">
            <option value="ouch">Ouchterlony (Khuếch tán thạch – H1.dc-6)</option>
            <option value="ie">Miễn dịch điện di (H1.dc-7)</option>
            <option value="electro">MD khuếch tán dưới điện trường (Électrosynérèse)</option>
            <option value="iha">Ngưng kết hồng cầu (IHA)</option>
            <option value="ifa">Miễn dịch huỳnh quang (IFA – H1.dc-5)</option>
            <option value="elisa">ELISA (* Tự động hóa)</option>
            <option value="sabin">Thử nghiệm màu Sabin–Feldman (Toxoplasma)</option>
            <option value="vogel">Vogel–Minning &amp; Kết tủa quanh trứng (H1.dc-3, H1.dc-4)</option>
          </select>
        </div>
      </div>
      <div id="s4_out"></div>
    `;
    this.upd_s4();
  },
  upd_s4() {
    const ict = document.getElementById("s4_ict").value;
    const t = document.getElementById("s4_test").value;

    const ictCfg = {
      pf_only: { t1: true, t2: false, txt: "C (+) • T1 (+)", res: "DƯƠNG TÍNH P. falciparum (Khay B trong H1.dc-2)" },
      pf_mixed: { t1: true, t2: true, txt: "C (+) • T1 (+) • T2 (+)", res: "DƯƠNG TÍNH P. falciparum hoặc Phối hợp P.f + P.v/m/o (Khay A)" },
      non_pf: { t1: false, t2: true, txt: "C (+) • T2 (+)", res: "DƯƠNG TÍNH P. vivax / P. malariae / P. ovale (Pan-malarial)" },
      neg: { t1: false, t2: false, txt: "Chỉ có C (+)", res: "ÂM TÍNH với KST sốt rét (Khay C trong H1.dc-2)" }
    }[ict];

    const testDb = {
      ouch: { kind: "Định tính (ĐT)", sens: "+", time: "3 ngày", cost: "+", sign: "Đường kết tủa trong thạch giữa các giếng (H1.dc-6)", app: "Sán lá, giòi ruồi, Aspergillus, Candida" },
      ie: { kind: "Định tính (ĐT)", sens: "++", time: "4 ngày", cost: "+", sign: "Các cung kết tủa giữa giếng KN và rãnh KT (H1.dc-7)", app: "Amip, sán máng, sán lá, giun chỉ, Larva migrans, giun xoắn, Echinococcus, giòi ruồi, nấm" },
      electro: { kind: "Định tính (ĐT)", sens: "++", time: "2 giờ (Rút ngắn!)", cost: "+", sign: "Đẩy nhanh gặp nhau của KN–KT bằng điện trường", app: "Amip, sốt rét, Leishmania, sán máng, Echinococcus, Aspergillus, Candida" },
      iha: { kind: "Định lượng (ĐL)", sens: "+++", time: "2 giờ", cost: "++", sign: "Thảm màu đỏ đều ở đáy giếng (ngưng kết trực tiếp = thảm trắng)", app: "Amip, sốt rét, Toxoplasma, Trypanosoma, sán máng, giun chỉ, Echinococcus, Aspergillus" },
      ifa: { kind: "Định lượng (ĐL)", sens: "+++", time: "2 giờ", cost: "++", sign: "UV: Dương = huỳnh quang xanh lá cây; Âm = màu đỏ (H1.dc-5)", app: "Hầu hết đơn bào, sán máng/lá, giun chỉ/xoắn, Larva migrans, Echinococcus, Candida, Histoplasma" },
      elisa: { kind: "Định lượng (ĐL) – Tự động hóa (*)", sens: "+++", time: "4 giờ", cost: "++++", sign: "Phản ứng men đổi màu dung dịch tương ứng nồng độ KT", app: "Amip, sốt rét, Leishmania, Toxoplasma, Trypanosoma, sán máng/lá, giun chỉ/xoắn, Echinococcus, Aspergillus" },
      sabin: { kind: "Kháng nguyên sống (Toxoplasma)", sens: "Đặc hiệu cao", time: "Nhuộm sống", cost: "++", sign: "Dương tính = KT phá hủy Toxoplasma nên KHÔNG bắt màu xanh methylen; Âm tính = bắt màu xanh", app: "Chẩn đoán Toxoplasma gondii (tr. 20, 22)" },
      vogel: { kind: "Kháng nguyên sống (Kết tủa)", sens: "Đặc hiệu", time: "Soi kính", cost: "+", sign: "Vogel–Minning: màng ấu trùng đuôi chẻ dày lên; COPT: kết tủa hình ngón tay quanh trứng; Roth: kết tủa ở miệng ấu trùng Trichinella", app: "Sán máng (Schistosoma) & Giun xoắn (Trichinella spiralis)" }
    }[t];

    document.getElementById("s4_out").innerHTML = `
      <div class="grid-2">
        <div class="svg-stage">
          <div style="font-size:12px;font-weight:800;color:var(--primary);margin-bottom:6px;">Mô phỏng Que thử NOW® Malaria (H1.dc-2)</div>
          <svg viewBox="0 0 320 118" style="width:100%;max-width:320px;">
            <rect x="10" y="14" width="300" height="90" rx="12" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
            <rect x="34" y="34" width="210" height="44" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
            <line x1="76" y1="38" x2="76" y2="74" stroke="${ictCfg.t2 ? "#e11d48" : "#cbd5e1"}" stroke-width="5"/>
            <line x1="138" y1="38" x2="138" y2="74" stroke="${ictCfg.t1 ? "#e11d48" : "#cbd5e1"}" stroke-width="5"/>
            <line x1="202" y1="38" x2="202" y2="74" stroke="#e11d48" stroke-width="5"/>
            <text x="76" y="92" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">T2 (Pan)</text>
            <text x="138" y="92" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">T1 (P.f)</text>
            <text x="202" y="92" text-anchor="middle" font-size="11" font-weight="800" fill="#e11d48">C (Chứng)</text>
            <circle cx="276" cy="56" r="16" fill="#991b1b"/><text x="276" y="60" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Máu</text>
          </svg>
          <div style="font-size:12.5px;font-weight:800;color:var(--danger);margin-top:4px;">${ictCfg.txt} → ${ictCfg.res}</div>
        </div>

        <div class="card" style="margin:0;">
          <div class="metric-cards" style="margin-top:0;">
            <div class="metric-card"><div class="metric-label">Loại</div><div class="metric-val" style="font-size:14px;">${testDb.kind}</div></div>
            <div class="metric-card"><div class="metric-label">Độ nhạy</div><div class="metric-val" style="color:var(--accent);">${testDb.sens}</div></div>
            <div class="metric-card"><div class="metric-label">Thời gian / Phí</div><div class="metric-val" style="font-size:14px;">${testDb.time} • ${testDb.cost}</div></div>
          </div>
          <p style="font-size:13px;"><strong>Hiện tượng đọc kết quả:</strong> ${testDb.sign}</p>
          <p style="font-size:13px;margin-top:6px;"><strong>Ứng dụng (Bảng tr. 22):</strong> ${testDb.app}</p>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 5: PHÒNG LAB PHÂN LOẠI BỆNH ĐỘNG VẬT & CƠ SỞ SINH HỌC
  // ========================================================================
  sim_zoonosis_classifier(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tác nhân / Ca bệnh để Phân loại Chuẩn Sách (tr. 505–508, 522–523):</label>
          <select id="s5_case" onchange="Simulators.upd_s5()">
            <option value="dlatum">1. Diphyllobothrium latum ở người (Câu 2 tr. 522)</option>
            <option value="paragonimus">2. Paragonimus westermani ở người (Câu 11 tr. 522)</option>
            <option value="parazoonosis">3. KST đẻ trứng ở người nhưng tuổi thọ trứng giảm rất nhiều</option>
            <option value="toxoplasma">4. Toxoplasma gondii ở người (Câu 8 tr. 522)</option>
            <option value="tsaginata">5. Taenia saginata trưởng thành ở người (Bẫy Câu 13 tr. 523!)</option>
            <option value="crypto">6. Cryptococcus neoformans / Aspergillus / Histoplasma từ đất</option>
            <option value="acaninum">7. Ancylostoma caninum dưới da người</option>
            <option value="angio">8. Angiostrongylus cantonensis ở màng não người</option>
          </select>
        </div>
      </div>
      <div id="s5_out"></div>
    `;
    this.upd_s5();
  },
  upd_s5() {
    const k = document.getElementById("s5_case").value;
    const db = {
      dlatum: { cls: "Bệnh động vật THẬT – HOÀN CHỈNH (Holozoonoses)", diag: "Biểu đồ 2.2-1 (mũi tên liền)", dyn: "Sán trưởng thành ở cả người & ĐV ăn cá", ans: "Đáp án Câu 2 tr. 563: B. Bệnh động vật hoàn chỉnh." },
      paragonimus: { cls: "Bệnh động vật THẬT – HOÀN CHỈNH (Holozoonoses)", diag: "Biểu đồ 2.2-1 (mũi tên liền)", dyn: "Sán phổi trưởng thành ở người và chó/mèo/cọp", ans: "Đáp án Câu 11 tr. 563: B. Bệnh động vật hoàn chỉnh." },
      parazoonosis: { cls: "Bệnh động vật THẬT – CHƯA HOÀN CHỈNH (Parazoonoses)", diag: "Biểu đồ 2.2-1 (mũi tên đứt nét)", dyn: "Người đẻ trứng nhưng tuổi thọ trứng giảm rất nhiều", ans: "Theo mục 2.(ii) tr. 505: phân biệt trực tiếp với holozoonoses nhờ giảm tuổi thọ trứng." },
      toxoplasma: { cls: "Bệnh động vật THẬT – MỘT CHIỀU (Hemizoonoses)", diag: "Biểu đồ 2.2-2 (Ngõ cụt ký sinh)", dyn: "Tính năng động ít/không có (Biểu đồ 2.2-5)", ans: "Đáp án Câu 8 tr. 563: D – Ở người và các ĐV ngoài loài Félidés, KST này chỉ có chu trình vô tính." },
      tsaginata: { cls: "⚠️ KHÔNG THUỘC 4 NHÓM TRÊN (Tất cả đều sai!)", diag: "Ngoại lệ Câu 13 (tr. 564)", dyn: "Người đã là KÝ CHỦ CHÍNH (KCVV)", ans: "Đáp án Câu 13 tr. 564: E. Tất cả đều sai! Với trâu bò là một chiều, còn với người chẳng có ý nghĩa bệnh ĐV gì vì người là KCVV." },
      crypto: { cls: "BỆNH ĐỘNG VẬT GIẢ (Pseudo-zoonoses)", diag: "Biểu đồ 2.2-3 (KST tùy nghi ngoại cảnh)", dyn: "KST tùy nghi sống tự do ngoài đất/cảnh", ans: "Đáp án Câu 3 tr. 563: B. Sai (KST bắt buộc KHÔNG thể gây bệnh động vật giả)." },
      acaninum: { cls: "Bệnh động vật THẬT – MỘT CHIỀU (Ngõ cụt thực sự)", diag: "Biểu đồ 2.2-2 & 2.2-5", dyn: "Tính năng động CAO (giun tròn) → Larva migrans ngoài da", ans: "Đáp án Câu 10 tr. 563: B; Câu 14 tr. 564: Larva migrans." },
      angio: { cls: "Bệnh động vật THẬT – MỘT CHIỀU (Ngõ cụt ký sinh)", diag: "Biểu đồ 2.2-2 & 2.2-5", dyn: "Xếp vào nhánh Tính năng động ÍT hoặc KHÔNG CÓ (Biểu đồ 2.2-5)", ans: "Theo Biểu đồ 2.2-5 tr. 508: Viêm màng não–não do Angiostrongylus nằm chung nhánh năng động ít với Sparganum, Echinococcus, Toxoplasma." }
    }[k];
    document.getElementById("s5_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Phân loại Chính thức</div><div class="metric-val" style="font-size:14.5px;">${db.cls}</div></div>
        <div class="metric-card"><div class="metric-label">Biểu đồ đối chiếu</div><div class="metric-val" style="font-size:14px;color:var(--accent);">${db.diag}</div></div>
        <div class="metric-card"><div class="metric-label">Đặc tính Biểu đồ 2.2-5</div><div class="metric-val" style="font-size:13.5px;color:var(--purple);">${db.dyn}</div></div>
      </div>
      <div class="callout pearl"><div class="callout-title">📌 Đối chiếu Đáp án Sách (tr. 563–564)</div><p>${db.ans}</p></div>
    `;
  },

  // ========================================================================
  // BÀI 6: PHÒNG LAB CHẨN ĐOÁN & KÊ PHÁC ĐỒ LARVA MIGRANS
  // ========================================================================
  sim_larva_migrans(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Bệnh cảnh Lâm sàng – Dịch tễ:</label>
          <select id="s6_case" onchange="Simulators.upd_s6()">
            <option value="clm">1. Đường gồ ngoằn ngoèo ngứa đêm sau đi chân đất bãi cát</option>
            <option value="vlm_kid">2. Trẻ 2 tuổi nhà nuôi chó con: sốt, suyễn, gan to nhẵn, BC 55k, BCTT 72%</option>
            <option value="vlm_eye">3. Người lớn giảm thị lực 1 bên, viêm hạt võng mạc, BC máu 7.200/mm³</option>
            <option value="gnatho">4. Ăn mắm thái / cá lóc nướng trui: u di động dưới da + mắt, BC 90k, BCTT 78%</option>
          </select>
        </div>
        <div class="control-group">
          <label>Kiểm tra Xử lý Cá nước ngọt (Gnathostoma):</label>
          <select id="s6_prep" onchange="Simulators.upd_s6()">
            <option value="raw">Ăn cá lóc nướng trui chưa kỹ / mắm thái sống</option>
            <option value="vinegar">Ngâm cá vào dấm đậm đặc trong 5 giờ 30 phút (Daengsvang)</option>
            <option value="cooked">Nấu chín kỹ cá, ếch nhái, rắn, lươn</option>
          </select>
        </div>
      </div>
      <div id="s6_out"></div>
    `;
    this.upd_s6();
  },
  upd_s6() {
    const c = document.getElementById("s6_case").value;
    const p = document.getElementById("s6_prep").value;
    const db = {
      clm: {
        dx: "Larva migrans ngoài da (Ancylostoma caninum, A. braziliense, Uncinaria stenocephala)",
        lab: "Chủ yếu dịch tễ & hình ảnh lâm sàng (tốc độ vài mm–cm/ngày; hiếm khi lên phổi Loeffler; KHÔNG gây xuất huyết ruột)",
        rx: "Thiabendazole 25 mg/kg/ngày × 3–5 ngày; HOẶC Flubendazole 500 mg/ngày × 7 ngày; HOẶC Albendazole 2 viên 200 mg/ngày × 3 ngày; tại chỗ HCH, Lindane 1%, xịt etylchlorur/fréon."
      },
      vlm_kid: {
        dx: "Larva migrans nội tạng (Toxocara canis / T. cati)",
        lab: "BC 10–100k, BCTT 50–80%, Globulin (IgE, IgG) tăng 10–15 lần. Sinh thiết gan giá trị chỉ 20% → ưu tiên ELISA với Toxocara ES antigen.",
        rx: "Thiabendazole 50 mg/kg/ngày × 7–10 ngày; HOẶC DEC (Notezin) 6 mg/kg/ngày × 3 tuần (giảm triệu chứng 50%); HOẶC Albendazole 2 viên 200 mg/ngày × 3 ngày (+ corticoid/kháng histamin)."
      },
      vlm_eye: {
        dx: "Toxocara thể ở MẮT (Viêm hạt võng mạc / Viêm nội nhãn mạn tính)",
        lab: "⚠️ Cạm bẫy kinh điển (tr. 511): Bạch cầu trong máu có thể KHÔNG TĂNG trong thể bệnh ở mắt! Dùng ELISA ES antigen + khám đáy mắt.",
        rx: "Phối hợp chuyên khoa mắt & điều trị đặc hiệu (Albendazole / Thiabendazole / Notezin + corticoid giảm viêm nội nhãn)."
      },
      gnatho: {
        dx: "Larva migrans do Gnathostoma spinigerum (kéo dài tới 17 năm)",
        lab: "BC tới 100.000/mm³, BCTT 50–80%; Phản ứng nội bì đáng tin cậy; Bắt giun non từ sang thương da/niêm mạc mắt.",
        rx: "Thuốc giun sán ít tác dụng; DEC (Hetrazan) 0,5–0,7 mg/kg/ngày × 5–7 ngày tương đối; Ở da hoặc niêm mạc mắt: RẠCH VÀ GẮP GIUN RA."
      }
    }[c];
    const prepNote = p === "raw"
      ? "⚠️ NGUY CƠ RẤT CAO nhiễm Gnathostoma (L3 ở bắp cơ cá lóc/ếch/rắn/lươn)!"
      : p === "vinegar"
        ? "✅ An toàn theo Daengsvang & Miyazaki (tr. 512): Ngâm cá dấm đậm đặc 5 giờ 30 phút diệt được giun."
        : "✅ An toàn tuyệt đối: Nấu chín kỹ phá hủy hoàn toàn ấu trùng L3.";

    document.getElementById("s6_out").innerHTML = `
      <div class="callout trap" style="margin-top:0;"><div class="callout-title">🩺 Chẩn đoán: ${db.dx}</div><p><strong>Cận lâm sàng:</strong> ${db.lab}</p></div>
      <div class="callout pearl"><div class="callout-title">💊 Phác đồ Chuẩn Sách (tr. 510–512) &amp; An toàn Thực phẩm</div><p>${db.rx}</p><p style="margin-top:6px;"><strong>Xử lý thực phẩm:</strong> ${prepNote}</p></div>
    `;
  },

  // ========================================================================
  // BÀI 7: PHÒNG LAB NANG HYDATID, ANISAKIS & ANGIOSTRONGYLUS
  // ========================================================================
  sim_neuro_hydatid(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>1. Giải phẫu các Lớp Nang Hydatid (Từ ngoài vào trong): <span id="s7_l_lbl" style="color:var(--primary);font-weight:800;">Lớp 1</span></label>
          <input type="range" id="s7_layer" min="1" max="5" value="3" oninput="Simulators.upd_s7()" />
        </div>
        <div class="control-group">
          <label>2. Quyết định Lâm sàng &amp; Thủ thuật Chẩn đoán/Điều trị:</label>
          <select id="s7_act" onchange="Simulators.upd_s7()">
            <option value="puncture">Chọc hút kim nhỏ bướu gan lấy dịch soi tìm cát sán</option>
            <option value="cft_post">Kiểm tra sót bướu sau mổ 1 năm: Chọn Casoni hay CFT?</option>
            <option value="op_formalin">Phẫu thuật bóc nang: Hút dịch + Bơm Formalin 10% trước khi bóc</option>
            <option value="anisakis_freeze">Dự phòng cá biển Anisakis: Đông lạnh -20°C / 24h vs Muối cá</option>
            <option value="angio_csf">Xử trí Viêm màng não Angiostrongylus (DNT 460 TB, 45% BCTT)</option>
          </select>
        </div>
      </div>
      <div id="s7_out"></div>
    `;
    this.upd_s7();
  },
  upd_s7() {
    const lv = parseInt(document.getElementById("s7_layer").value);
    const act = document.getElementById("s7_act").value;
    const layers = {
      1: { name: "Lớp 1 (Ngoài cùng): Màng cứng", desc: "Do mô sợi phản ứng của ký chủ tạo ra bao bọc quanh bướu sán; có khuynh hướng giữ muối calci hóa vôi sau nhiều năm (thấy trên X quang)." },
      2: { name: "Lớp 2: Màng phiến (Laminated membrane)", desc: "Không nhân, dày khoảng 1 mm, gồm nhiều lớp cuticule do màng sinh mầm tiết ra, hoạt động như một màng thẩm thấu chọn lọc." },
      3: { name: "Lớp 3: Lớp sinh mầm (Germinal layer)", desc: "Rất mỏng, dễ vỡ, tạo bởi hợp bào có nhân (chứa glycogen & mỡ), trực tiếp sinh ra các đầu sán và các bọc sinh mầm." },
      4: { name: "Lớp 4: Bọc sinh mầm (Brood capsule) & Bướu con", desc: "Chứa nhiều đầu sán thụt vào có móc và đĩa hút; tách khỏi màng sinh mầm tạo bướu con nội sinh hoặc ngoại sinh (H 1.4-35)." },
      5: { name: "Lớp 5 (Trong lòng): Cát sán (Hydatid sand) & Dịch vô khuẩn", desc: "Các đầu sán rụng xuống đáy bướu tạo cát sán (một bướu đủ độ có tới 2.000.000 đầu sán) lơ lửng trong dịch chất vô khuẩn không màu/vàng nhạt (gây shock phản vệ nếu vỡ!)." }
    }[lv];
    document.getElementById("s7_l_lbl").textContent = layers.name;

    const actDb = {
      puncture: { ok: false, msg: "⛔ CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI (tr. 517): Không được chọc hút bướu sán! Dịch bướu tràn vào máu gây shock phản vệ tử vong và gieo rắc đầu sán thành bướu thứ phát sau 2–5 năm." },
      cft_post: { ok: true, msg: "✅ CHỌN CFT (Cố định bổ thể): CFT (+) 80–90% khi còn bướu sống, và (–) khi bướu chết/hóa vôi nên dùng kiểm tra sót bướu sau mổ. Còn Casoni (0,1 ml, đọc 20', sẩn ≥ 1,6 cm²) vẫn (+) hàng năm sau mổ!" },
      op_formalin: { ok: true, msg: "✅ CHUẨN PHẪU THUẬT (tr. 517): Hút dịch bớt rồi bơm dung dịch formalin 10% để diệt đầu sán & màng sinh mầm trước khi bóc cả bướu (énucléation). Nội khoa: Albendazole 14 mg/kg/ngày (600–700 mg/ngày) × 28 ngày." },
      anisakis_freeze: { ok: true, msg: "✅ ANISAKIS: Đông lạnh -20°C trong 24 giờ hoặc nấu chín sẽ diệt ấu trùng L3; muối cá hoặc hun khói KHÔNG diệt được. Điều trị ca bệnh duy nhất hiệu quả là giải phẫu cắt u hạt." },
      angio_csf: { ok: true, msg: "✅ ANGIOSTRONGYLUS: Chưa có thuốc đặc hiệu → điều trị triệu chứng (giảm đau, chọc dò rút DNT giảm áp, kháng viêm). Lưu ý liệt dây VII, song thị, DNT 400–500 TB/mm³ (40–50% BCTT)." }
    }[act];

    document.getElementById("s7_out").innerHTML = `
      <div class="callout formula" style="margin-top:0;"><div class="callout-title">🔬 ${layers.name}</div><p>${layers.desc}</p></div>
      <div class="callout ${actDb.ok ? "pearl" : "trap"}"><div class="callout-title">${actDb.ok ? "Thái độ Lâm sàng Chuẩn" : "CẢNH BÁO AN TOÀN THỦ THUẬT"}</div><p>${actDb.msg}</p></div>
    `;
  },

  // ========================================================================
  // BÀI 8: MA TRẬN GHÉP CẶP BỆNH ĐỘNG VẬT & DỰ PHÒNG VIÊM DA SÁN MÁNG
  // ========================================================================
  sim_zoonosis_matching(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>1. Tra cứu Ma trận Câu 16–17 (tr. 523, 564) – Chọn Tác nhân / Động vật:</label>
          <select id="s8_match" onchange="Simulators.upd_s8()">
            <option value="angio">A. Viêm màng não–não do A. cantonensis (Câu 16A)</option>
            <option value="tcanis">B. Larva migrans do Toxocara canis (Câu 16B)</option>
            <option value="acaninum">C. Larva migrans do Ancylostoma caninum (Câu 16C)</option>
            <option value="gnatho">D. Larva migrans do Gnathostoma spinigerum (Câu 16D)</option>
            <option value="sparg">E. Bệnh do Sparganum nội tạng &amp; Mắt (Câu 4, 16E)</option>
            <option value="mouse">F. Động vật truyền: CHUỘT (Câu 17B)</option>
            <option value="dog">G. Động vật truyền: CHÓ (Câu 17A &amp; tr. 515)</option>
          </select>
        </div>
        <div class="control-group">
          <label>2. Kiểm thử Biện pháp Bảo vệ khi Lội ruộng / Chữa mắt:</label>
          <select id="s8_prev" onchange="Simulators.upd_s8()">
            <option value="dry">Lau khô da NGAY vừa tắm sông/lội ruộng xong</option>
            <option value="oil">Thoa dầu rái cá (gant invisible – Đặng Vũ Hỷ 1960)</option>
            <option value="snail">Diệt ốc Radix ovata bằng CuSO₄ / CuCO₃ + phát quang thủy sinh</option>
            <option value="frog">Đắp đùi ếch giã nát lên mắt để chữa viêm kết mạc</option>
          </select>
        </div>
      </div>
      <div id="s8_out"></div>
    `;
    this.upd_s8();
  },
  upd_s8() {
    const m = document.getElementById("s8_match").value;
    const p = document.getElementById("s8_prev").value;
    const mDb = {
      angio: "<strong>Phương thức nhiễm (Câu 16A–c): Ăn ốc</strong> (<em>Achatina fulica, Pila ampullacea</em> hoặc tôm/cua/đỉa phiến sống). Nguồn chính: Chuột (ĐM phổi).",
      tcanis: "<strong>Phương thức nhiễm (Câu 16B–d): Hay chơi với chó</strong> (nuốt trứng từ lông chó / đất cát). Xâm nhập nội tạng trẻ 1–4 tuổi, BCTT 50–80%.",
      acaninum: "<strong>Phương thức nhiễm (Câu 16C–e): Đi chân đất trong vườn</strong> (ấu trùng filariform từ phân chó mèo chui qua da).",
      gnatho: "<strong>Phương thức nhiễm (Câu 16D–b): Ăn mắm thái</strong> (hoặc cá lóc nướng trui chưa kỹ). BCTT tới 80%, giun non di chuyển 17 năm.",
      sparg: "<strong>Phương thức nhiễm (Câu 16E–a): Ăn thịt rắn nướng</strong> / ếch nhái chưa chín (hoặc uống nước <em>Cyclops</em>). Ở mắt (Câu 4C): do <strong>đắp đùi ếch lên mắt</strong> (<em>sparganose oculaire</em> sau 10 ngày); rạch gắp nhanh vì bò đi chỗ khác!",
      mouse: "<strong>Chuột truyền (Câu 17B–a, f):</strong> (a) Viêm MN–não do <em>A. cantonensis</em> và (f) Viêm da do <em>Schistosomatium</em> sp. (sán máng chuột).",
      dog: "<strong>Chó truyền (Câu 17A–b, c &amp; tr. 515):</strong> (b) <em>Larva migrans</em> ngoài da (<em>A. caninum</em>), (c) <em>Larva migrans</em> do <em>Toxocara canis</em>, cùng bướu sán <em>Echinococcus granulosus</em> và <em>Gnathostoma</em>."
    }[m];

    const pDb = {
      dry: { ok: true, msg: "✅ HIỆU QUẢ CAO: Vì ấu trùng đuôi chẻ (cercaria) chỉ chui vào da người VÀO THỜI ĐIỂM NƯỚC KHÔ ĐI (tr. 520). Lau khô ngay khi lên bờ cắt đứt sự xâm nhập!" },
      oil: { ok: true, msg: "✅ GANT INVISIBLE (Đặng Vũ Hỷ và ctv., 1960): Dầu rái cá tạo lớp bao trong suốt trên da nông dân, ngăn cơ học không cho ấu trùng đuôi chui qua da." },
      snail: { ok: true, msg: "✅ DIỆT KCTG: Diệt ốc Radix ovata quanh bãi tắm/ruộng bằng sulfat đồng, carbonat đồng hoặc pentachlorphenate kết hợp phát quang thực vật thủy sinh." },
      frog: { ok: false, msg: "⛔ HỦ TỤC NGUY HIỂM: 15–17% (thời Pháp thuộc tới 80%) ếch nhái miền Bắc mang plerocercoid/sparganum → sau 10 ngày gây lồi mắt, loét giác mạc (sparganose oculaire)!" }
    }[p];

    document.getElementById("s8_out").innerHTML = `
      <div class="callout pearl" style="margin-top:0;"><div class="callout-title">🔗 Giải mã Ma trận Ghép cặp (tr. 523, 564)</div><p>${mDb}</p></div>
      <div class="callout ${pDb.ok ? "pearl" : "trap"}"><div class="callout-title">🛡️ Kiểm thử Biện pháp Dự phòng</div><p>${pDb.msg}</p></div>
    `;
  }
};
