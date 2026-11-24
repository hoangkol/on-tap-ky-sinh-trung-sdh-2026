// ==========================================================================
// 34 HOẠT CẢNH ĐỘNG TÁI TẠO HÌNH SÁCH GIÁO KHOA & CHU TRÌNH KÝ SINH TRÙNG
// Tái tạo trực quan: H1.dc-1..7, Sabin-Feldman, Biểu đồ 2.1-1, Biểu đồ Lavier,
// Biểu đồ 2.2-1..5, H 1.4-33..36 (Hydatid), H 1.4-45..46 (Sparganum), H 1.4-53
// ==========================================================================

window.ProcessAnimations = {
  timer: null,
  currentLessonId: null,
  currentStep: 0,
  isPlaying: false,

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isPlaying = false;
  },

  specs: {
    // ======================================================================
    // BÀI 1: TƯƠNG QUAN, TIỀN THÍCH ỨNG, 7 KÝ CHỦ & TGTB
    // ======================================================================
    1: {
      title: "🎬 Hoạt cảnh Minh họa: 4 Kiểu Tương quan, Tiền thích ứng & Phân loại Ký chủ",
      steps: [
        {
          pill: "1. 4 Tương quan",
          ref: "Mục 2 (tr. 3–4)",
          name: "4 Kiểu Tương quan Giữa các Sinh vật (Cộng sinh – Tương sinh – Hội sinh – Ký sinh)",
          desc: "Phân biệt rõ: <strong>Cộng sinh</strong> (bắt buộc, cả hai cùng có lợi), <strong>Tương sinh</strong> (không bắt buộc, cả hai có lợi), <strong>Hội sinh</strong> (1 bên lợi, bên kia không lợi không hại: <em>E. coli, Entamoeba coli</em>) và <strong>Ký sinh</strong> (bên bám hưởng lợi, ký chủ bị thiệt hại).",
          highlight: "Đáp án Câu 9 (tr. 555): Người & ĐV với cây xanh = Cộng sinh"
        },
        {
          pill: "2. Tiền thích ứng",
          ref: "Mục 3 (tr. 4) & Câu 12",
          name: "Nguồn gốc Sự ký sinh: Tiền thích ứng (Preadaptation) → Thích ứng (Adaptation)",
          desc: "Sinh vật tự do xâm nhập ký chủ: giai đoạn <strong>tiền thích ứng</strong> chỉ có thay đổi sinh lý nội tại giúp sống sót (chưa có cơ cấu bám ngoài). Sang giai đoạn <strong>thích ứng</strong> mới phát triển răng, dao cắt (giun móc), đĩa hút, móc (sán) và di truyền.",
          highlight: "Câu 12: Đĩa hút, răng, dao = Thích ứng (KHÔNG phải tiền thích ứng)"
        },
        {
          pill: "3. KCVV & KCTG & Chờ thời",
          ref: "Mục 7.1–7.3 (tr. 6) & Câu 5",
          name: "Phân biệt KCVV, KCTG I – II và Ký chủ Chờ thời qua Chu trình Diphyllobothrium latum",
          desc: "Sán dải cá <em>D. latum</em> qua <strong>KCTG I (lăng quăng đỏ <em>Cyclops</em>)</strong> → <strong>KCTG II (cá bé)</strong>. Nếu <strong>cá lớn nuốt cá bé</strong>, ấu trùng II vẫn dừng ở giai đoạn II → cá lớn là <strong>Ký chủ chờ thời</strong>! Người là <strong>KCVV</strong>.",
          highlight: "Câu 5 (tr. 555): Người KHÔNG phải ký chủ chờ thời của D. latum"
        },
        {
          pill: "4. TGTB Sinh học vs Cơ học",
          ref: "Mục 6.9 & 7.6 (tr. 6)",
          name: "Trung gian Truyền bệnh Sinh học vs Cơ học & Bội Ký sinh trùng",
          desc: "<strong>TGTB sinh học:</strong> KST phát triển/tăng dân số (<em>Plasmodium</em> trong <em>Anopheles</em>; giun chỉ trong <em>Culex/Mansonia</em>). <strong>TGTB cơ học:</strong> chuyên chở thụ động (bào nang amip dính chân ruồi). <strong>Bội KST:</strong> <em>Ixodiphagus caucurtei</em> ký sinh trên ve <em>Ixodes ricinus</em>.",
          highlight: "Ngoại KST khác Nội KST • Hạt phấn hoa = KST giả hiệu"
        }
      ],
      renderSvg(s) {
        if (s === 0) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <rect x="12" y="18" width="174" height="244" rx="14" fill="var(--success-light)" stroke="var(--success)" stroke-width="2.5"/>
              <text x="99" y="44" text-anchor="middle" font-size="13" font-weight="800" fill="var(--success)">1. CỘNG SINH</text>
              <text x="99" y="61" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Bắt buộc • Cùng lợi (+/+)</text>
              <circle cx="70" cy="118" r="24" fill="#16a34a" opacity="0.88"/>
              <text x="70" y="122" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Mối</text>
              <circle cx="128" cy="118" r="24" fill="#0d9488" opacity="0.88"/>
              <text x="128" y="122" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Đơn bào</text>
              <path d="M84 92 Q99 78 114 92" fill="none" stroke="#15803d" stroke-width="2.5"/>
              <path d="M114 144 Q99 158 84 144" fill="none" stroke="#15803d" stroke-width="2.5"/>
              <circle cx="99" cy="85" r="4" fill="#fbbf24"><animate attributeName="cx" values="84;114;84" dur="1.8s" repeatCount="indefinite"/></circle>
              <text x="99" y="184" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">• Mối – Đơn bào ruột</text>
              <text x="99" y="202" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">• Nấm – Tảo (Địa y)</text>
              <text x="99" y="220" text-anchor="middle" font-size="10" fill="var(--success)">• Người/ĐV – Cây xanh</text>
              <text x="99" y="238" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Tách rời sẽ chết)</text>

              <rect x="200" y="18" width="174" height="244" rx="14" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5"/>
              <text x="287" y="44" text-anchor="middle" font-size="13" font-weight="800" fill="var(--accent)">2. TƯƠNG SINH</text>
              <text x="287" y="61" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Không bắt buộc (+/+)</text>
              <ellipse cx="262" cy="118" rx="22" ry="18" fill="#059669"/>
              <text x="262" y="122" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Cua biển</text>
              <ellipse cx="314" cy="118" rx="22" ry="18" fill="#0284c7">
                <animate attributeName="cx" values="314;326;314" dur="2.6s" repeatCount="indefinite"/>
              </ellipse>
              <text x="318" y="122" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Hải tức</text>
              <text x="287" y="184" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">• Cua biển &amp; Hải tức</text>
              <text x="287" y="204" text-anchor="middle" font-size="10" fill="var(--text-muted)">Sống chung đều lợi,</text>
              <text x="287" y="220" text-anchor="middle" font-size="10" fill="var(--text-muted)">tách ra vẫn tự sống</text>

              <rect x="388" y="18" width="174" height="244" rx="14" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5"/>
              <text x="475" y="44" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">3. HỘI SINH</text>
              <text x="475" y="61" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">1 lợi • 1 vô hại (+/0)</text>
              <rect x="415" y="96" width="120" height="44" rx="12" fill="#4f46e5" opacity="0.16" stroke="var(--primary)" stroke-width="2"/>
              <text x="475" y="114" text-anchor="middle" font-size="10" font-weight="700" fill="var(--primary)">Ruột già Người (0)</text>
              <circle cx="445" cy="128" r="6" fill="var(--primary)"><animate attributeName="cx" values="440;510;440" dur="3s" repeatCount="indefinite"/></circle>
              <text x="475" y="184" text-anchor="middle" font-size="10.2" font-weight="700" fill="var(--text-main)">• Entamoeba coli</text>
              <text x="475" y="202" text-anchor="middle" font-size="10.2" font-weight="700" fill="var(--text-main)">• Pentatrichomonas</text>
              <text x="475" y="220" text-anchor="middle" font-size="10.2" font-weight="700" fill="var(--text-main)">• Escherichia coli</text>

              <rect x="576" y="18" width="172" height="244" rx="14" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2.5"/>
              <text x="662" y="44" text-anchor="middle" font-size="13" font-weight="800" fill="var(--danger)">4. KÝ SINH</text>
              <text x="662" y="61" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">KST lợi • Ký chủ hại (+/–)</text>
              <circle cx="662" cy="116" r="28" fill="#fecdd3" stroke="var(--danger)" stroke-width="2"/>
              <text x="662" y="112" text-anchor="middle" font-size="10" font-weight="800" fill="#9f1239">Ký chủ (–)</text>
              <path d="M640 126 Q662 114 684 126" fill="none" stroke="#be123c" stroke-width="4" stroke-linecap="round">
                <animate attributeName="d" values="M640 126 Q662 114 684 126;M640 122 Q662 134 684 122;M640 126 Q662 114 684 126" dur="1.4s" repeatCount="indefinite"/>
              </path>
              <text x="662" y="176" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">Giun đũa &amp; Người</text>
              <text x="662" y="198" text-anchor="middle" font-size="9.5" fill="var(--text-main)">• Ngoại hoại sinh (Aspergillus)</text>
              <text x="662" y="216" text-anchor="middle" font-size="9.5" fill="var(--text-main)">• Nội hoại sinh (E. h. minuta)</text>
              <text x="662" y="234" text-anchor="middle" font-size="9.5" fill="var(--text-main)">• Thượng hoại sinh (Sarcoptes)</text>
            </svg>
          `;
        }
        if (s === 1) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <rect x="14" y="28" width="166" height="220" rx="12" fill="var(--bg-card)" stroke="var(--border)" stroke-width="2"/>
              <text x="97" y="54" text-anchor="middle" font-size="12" font-weight="800" fill="var(--text-main)">1. SINH VẬT TỰ DO</text>
              <circle cx="97" cy="118" r="24" fill="#94a3b8"/>
              <text x="97" y="122" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Men tự do</text>
              <text x="97" y="170" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Ngoại môi khắc nghiệt,</text>
              <text x="97" y="186" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">kém ổn định → tìm vào</text>
              <text x="97" y="202" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">nội môi động vật lớn</text>

              <path d="M184 134 L214 134" stroke="var(--primary)" stroke-width="3" marker-end="url(#arr1)"/>
              <defs><marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="var(--primary)"/></marker></defs>

              <rect x="218" y="28" width="246" height="220" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2.5"/>
              <text x="341" y="54" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--warning)">2. TIỀN THÍCH ỨNG (Preadaptation)</text>
              <circle cx="341" cy="114" r="28" fill="#fef3c7" stroke="#d97706" stroke-width="2.5" stroke-dasharray="5 3">
                <animate attributeName="r" values="26;30;26" dur="1.8s" repeatCount="indefinite"/>
              </circle>
              <text x="341" y="110" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Sinh lý</text>
              <text x="341" y="124" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">nội tại</text>
              <text x="341" y="164" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">✓ Không bị hủy diệt khi vào ký chủ</text>
              <text x="341" y="182" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">✓ Thay đổi nội tại chưa lộ ra ngoài</text>
              <text x="341" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">✗ CHƯA có cơ cấu bám ngoài!</text>
              <text x="341" y="220" text-anchor="middle" font-size="10" fill="var(--text-muted)">(Ra ngoài lại sống tự do, tái xâm nhập)</text>

              <path d="M468 134 L498 134" stroke="var(--accent)" stroke-width="3"/>

              <rect x="502" y="28" width="244" height="220" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5"/>
              <text x="624" y="54" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--accent)">3. THÍCH ỨNG (Adaptation)</text>
              <ellipse cx="624" cy="112" rx="34" ry="20" fill="#059669"/>
              <path d="M600 100 L592 86 M612 94 L608 80 M636 94 L640 80 M648 100 L656 86" stroke="#fbbf24" stroke-width="3" stroke-linecap="round">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite"/>
              </path>
              <circle cx="614" cy="112" r="5" fill="#fff"/>
              <circle cx="634" cy="112" r="5" fill="#fff"/>
              <text x="624" y="162" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">✓ Phát triển Răng, Dao cắt (giun móc)</text>
              <text x="624" y="180" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">✓ Phát triển Đĩa hút, Móc bám (sán)</text>
              <text x="624" y="198" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--accent)">✓ Định vị luôn trong ký chủ</text>
              <text x="624" y="218" text-anchor="middle" font-size="10" font-weight="700" fill="var(--primary)">→ Ký sinh thường xuyên &amp; DI TRUYỀN</text>
            </svg>
          `;
        }
        if (s === 2) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="26" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--primary)">CHU TRÌNH DIPHYLLOBOTHRIUM LATUM: PHÂN BIỆT KCTG I – II – KÝ CHỦ CHỜ THỜI – KCVV</text>

              <rect x="20" y="54" width="154" height="150" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
              <text x="97" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">KCTG I</text>
              <circle cx="97" cy="120" r="24" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
              <text x="97" y="118" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">Cyclops</text>
              <text x="97" y="131" text-anchor="middle" font-size="9" fill="#991b1b">Lăng quăng đỏ</text>
              <text x="97" y="172" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Chứa Ấu trùng I</text>
              <text x="97" y="188" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Procercoid)</text>

              <line x1="176" y1="128" x2="210" y2="128" stroke="var(--primary)" stroke-width="3"/>
              <circle cx="193" cy="128" r="5" fill="var(--danger)"><animate attributeName="cx" values="176;210" dur="1.3s" repeatCount="indefinite"/></circle>

              <rect x="212" y="54" width="156" height="150" rx="12" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2"/>
              <text x="290" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">KCTG II</text>
              <ellipse cx="290" cy="120" rx="34" ry="18" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
              <text x="290" y="124" text-anchor="middle" font-size="10.5" font-weight="800" fill="#075985">Cá bé</text>
              <text x="290" y="172" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Chứa Ấu trùng II</text>
              <text x="290" y="188" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Plerocercoid)</text>

              <line x1="370" y1="128" x2="404" y2="128" stroke="var(--warning)" stroke-width="3"/>
              <circle cx="387" cy="128" r="5" fill="var(--warning)"><animate attributeName="cx" values="370;404" dur="1.3s" repeatCount="indefinite"/></circle>

              <rect x="406" y="46" width="166" height="166" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="3"/>
              <text x="489" y="70" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">KÝ CHỦ CHỜ THỜI</text>
              <ellipse cx="489" cy="116" rx="44" ry="24" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
              <text x="489" y="115" text-anchor="middle" font-size="10.5" font-weight="800" fill="#78350f">Cá lớn nuốt cá bé</text>
              <text x="489" y="129" text-anchor="middle" font-size="9" fill="#92400e">(L2 không tiến hóa thêm)</text>
              <text x="489" y="168" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warning)">Vẫn ở Ấu trùng II!</text>
              <text x="489" y="186" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Đợi ký chủ vĩnh viễn</text>

              <line x1="574" y1="128" x2="608" y2="128" stroke="var(--success)" stroke-width="3"/>
              <circle cx="591" cy="128" r="5" fill="var(--success)"><animate attributeName="cx" values="574;608" dur="1.3s" repeatCount="indefinite"/></circle>

              <rect x="610" y="54" width="134" height="150" rx="12" fill="var(--success-light)" stroke="var(--success)" stroke-width="2.5"/>
              <text x="677" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--success)">KCVV: NGƯỜI</text>
              <circle cx="677" cy="116" r="22" fill="#16a34a"/>
              <text x="677" y="120" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Người</text>
              <text x="677" y="164" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Sán trưởng thành</text>
              <text x="677" y="182" text-anchor="middle" font-size="9.5" fill="var(--danger)">Cướp B12 (Biermer)</text>

              <rect x="40" y="226" width="680" height="36" rx="8" fill="var(--danger-light)" stroke="var(--danger)"/>
              <text x="380" y="248" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--danger)">⚠️ Câu 5 (tr. 24, 555): Người KHÔNG PHẢI là ký chủ chờ thời của Diphyllobothrium latum — Người là Ký chủ vĩnh viễn!</text>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 760 280" class="proc-svg">
            <rect x="16" y="24" width="236" height="232" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5"/>
            <text x="134" y="48" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">TGTB SINH HỌC</text>
            <ellipse cx="134" cy="108" rx="46" ry="26" fill="#059669" opacity="0.2" stroke="var(--accent)" stroke-width="2"/>
            <text x="134" y="102" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">Muỗi Anopheles</text>
            <text x="134" y="118" text-anchor="middle" font-size="9.5" fill="var(--text-main)">(Culex, Mansonia)</text>
            <circle cx="114" cy="108" r="4" fill="#e11d48"><animate attributeName="r" values="3;7;3" dur="1.1s" repeatCount="indefinite"/></circle>
            <circle cx="154" cy="108" r="4" fill="#e11d48"><animate attributeName="r" values="3;7;3" dur="1.4s" repeatCount="indefinite"/></circle>
            <text x="134" y="162" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">✓ KST phát triển &amp; tăng dân số</text>
            <text x="134" y="182" text-anchor="middle" font-size="10" fill="var(--text-main)">(KST sốt rét trong Anopheles)</text>
            <text x="134" y="202" text-anchor="middle" font-size="10" fill="var(--text-main)">✓ Hoặc tiến hóa sang giai đoạn lây</text>
            <text x="134" y="220" text-anchor="middle" font-size="10" fill="var(--text-main)">(Giun chỉ trong Mansonia, Culex)</text>

            <rect x="266" y="24" width="236" height="232" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2.5"/>
            <text x="384" y="48" text-anchor="middle" font-size="12" font-weight="800" fill="var(--warning)">TGTB CƠ HỌC</text>
            <ellipse cx="384" cy="108" rx="42" ry="22" fill="#f59e0b" opacity="0.2" stroke="var(--warning)" stroke-width="2"/>
            <text x="384" y="105" text-anchor="middle" font-size="10.5" font-weight="800" fill="#92400e">Ruồi nhà</text>
            <circle cx="362" cy="126" r="5" fill="#7c3aed"><animate attributeName="cx" values="356;412;356" dur="2.2s" repeatCount="indefinite"/></circle>
            <text x="384" y="162" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Chuyên chở THỤ ĐỘNG</text>
            <text x="384" y="182" text-anchor="middle" font-size="10" fill="var(--text-main)">✗ KHÔNG tăng dân số</text>
            <text x="384" y="202" text-anchor="middle" font-size="10" fill="var(--text-main)">✗ KHÔNG phát triển xa hơn</text>
            <text x="384" y="222" text-anchor="middle" font-size="10" fill="var(--warning)">(Bào nang E. histolytica trên ruồi)</text>

            <rect x="516" y="24" width="228" height="232" rx="12" fill="var(--purple-light)" stroke="var(--purple)" stroke-width="2.5"/>
            <text x="630" y="48" text-anchor="middle" font-size="12" font-weight="800" fill="var(--purple)">BỘI KÝ SINH TRÙNG</text>
            <circle cx="630" cy="108" r="30" fill="#ede9fe" stroke="var(--purple)" stroke-width="2"/>
            <text x="630" y="104" text-anchor="middle" font-size="10" font-weight="800" fill="#5b21b6">Ixodes ricinus</text>
            <circle cx="630" cy="122" r="9" fill="#e11d48">
              <animate attributeName="r" values="7;11;7" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <text x="630" y="162" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">KST của một KST</text>
            <text x="630" y="184" text-anchor="middle" font-size="10" fill="var(--text-main)">Ve Ixodes ricinus ký sinh người</text>
            <text x="630" y="202" text-anchor="middle" font-size="10" fill="var(--purple)">lại bị côn trùng khác</text>
            <text x="630" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="var(--purple)">Ixodiphagus caucurtei ký sinh</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 2: CHU TRÌNH PHÁT TRIỂN & DÂY TRUYỀN NHIỄM KST
    // ======================================================================
    2: {
      title: "🎬 Hoạt cảnh Minh họa: 3 Loại CTPT Đường ruột, Ngõ cụt Ký sinh & Dây truyền 5 Mắt xích",
      steps: [
        {
          pill: "1. 3 CTPT Đường ruột",
          ref: "Mục 8.2 (tr. 7–8)",
          name: "Đường tròn Khép kín: Trực tiếp ngắn – Trực tiếp dài – Gián tiếp",
          desc: "<strong>Trực tiếp ngắn:</strong> lây ngay khi ra ngoài (trùng roi, amip, giun kim, <em>H. nana</em>, giun xoắn). <strong>Trực tiếp dài:</strong> phải phát triển ở ngoại cảnh (giun đũa, giun móc, giun lươn, giun tóc, <em>Toxoplasma</em>). <strong>Gián tiếp:</strong> qua 1 KCTG, 2 KCTG hoặc KCVV=KCTG (<em>T. solium</em>).",
          highlight: "Câu 4: T. solium = KCVV đồng thời là KCTG • Câu 20: Giun đũa = Trực tiếp dài"
        },
        {
          pill: "2. 4 Vị trí Con người",
          ref: "Mục 8.1 (tr. 7)",
          name: "4 Vị trí của Người trong CTPT: Ngõ cụt Thực sự vs Ngõ cụt Cảnh ngộ",
          desc: "(1) <strong>Duy nhất:</strong> <em>A. lumbricoides, E. vermicularis, E. histolytica</em>; (2) <strong>Xen kẽ ĐV:</strong> <em>Taenia, D. latum</em>; (3) <strong>Giai đoạn phụ:</strong> <em>F. hepatica, B. coli, M. canis</em>; (4) <strong>Ngõ cụt:</strong> Thực sự (hủy diệt – <em>Larva migrans</em>) vs Cảnh ngộ (tồn tại lâu – <em>Echinococcus, Trichinella</em>).",
          highlight: "Ngõ cụt cảnh ngộ hoàn tất chu trình nếu thú ăn thịt ăn người"
        },
        {
          pill: "3. Dây truyền 5 Mắt xích",
          ref: "Mục 9 (tr. 8–9)",
          name: "5 Mắt xích Dây truyền: Đường ra → Phương thức → Nguồn → Đường vào → Cảm thụ",
          desc: "Nhớ kỹ các bẫy: Đường ra qua <strong>nước tiểu</strong> (trứng <em>S. haematobium</em>), qua <strong>đàm</strong> (<em>P. westermani</em>), qua <strong>dịch loét da</strong> (<em>O. volvulus</em>); Nguồn thực phẩm: <strong>củ ấu</strong> (<em>F. buski</em>), <strong>tôm cua</strong> (<em>P. westermani</em>); Đường vào <strong>lá nhau</strong> (<em>Toxoplasma, Plasmodium</em>).",
          highlight: "Tự nhiễm: Enterobius vermicularis & Strongyloides stercoralis"
        }
      ],
      renderSvg(s) {
        if (s === 0) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <rect x="16" y="20" width="228" height="240" rx="14" fill="var(--success-light)" stroke="var(--success)" stroke-width="2.5"/>
              <text x="130" y="46" text-anchor="middle" font-size="12" font-weight="800" fill="var(--success)">1. TRỰC TIẾP &amp; NGẮN</text>
              <circle cx="130" cy="116" r="46" fill="none" stroke="var(--success)" stroke-width="3" stroke-dasharray="6 3"/>
              <circle cx="130" cy="70" r="9" fill="#16a34a">
                <animateMotion dur="2.6s" repeatCount="indefinite" path="M0,46 A46,46 0 1,1 -0.1,46 Z"/>
              </circle>
              <text x="130" y="114" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--text-main)">Lây nhiễm NGAY</text>
              <text x="130" y="129" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">không cần KCTG</text>
              <text x="130" y="186" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Trùng roi, Amip, Giun kim,</text>
              <text x="130" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">H. nana, Giun xoắn,</text>
              <text x="130" y="222" text-anchor="middle" font-size="10" fill="var(--text-muted)">Pentatrichomonas...</text>

              <rect x="264" y="20" width="232" height="240" rx="14" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2.5"/>
              <text x="380" y="46" text-anchor="middle" font-size="12" font-weight="800" fill="var(--warning)">2. TRỰC TIẾP &amp; DÀI</text>
              <rect x="292" y="74" width="76" height="36" rx="8" fill="#4f46e5"/>
              <text x="330" y="96" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Ký chủ</text>
              <rect x="394" y="74" width="76" height="36" rx="8" fill="#92400e"/>
              <text x="432" y="96" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Đất / Ẩm</text>
              <path d="M368 86 L394 86 M394 102 L368 102" stroke="#d97706" stroke-width="2.5"/>
              <circle cx="432" cy="134" r="14" fill="#fde68a" stroke="#d97706" stroke-width="2">
                <animate attributeName="r" values="12;16;12" dur="1.5s" repeatCount="indefinite"/>
              </circle>
              <text x="432" y="138" text-anchor="middle" font-size="9" font-weight="800" fill="#78350f">Phát triển</text>
              <text x="380" y="176" text-anchor="middle" font-size="10.2" font-weight="700" fill="var(--text-main)">Cần thời gian ở ngoại cảnh</text>
              <text x="380" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="var(--warning)">Ascaris lumbricoides, Giun móc,</text>
              <text x="380" y="216" text-anchor="middle" font-size="10" font-weight="700" fill="var(--warning)">Giun lươn, Giun tóc, Toxoplasma</text>

              <rect x="516" y="20" width="228" height="240" rx="14" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5"/>
              <text x="630" y="46" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">3. GIÁN TIẾP (KCTG)</text>
              <rect x="536" y="72" width="188" height="34" rx="8" fill="var(--bg-card)" stroke="var(--primary)"/>
              <text x="630" y="93" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• 1 KCTG: T. saginata, Echinococcus</text>
              <rect x="536" y="114" width="188" height="34" rx="8" fill="var(--bg-card)" stroke="var(--primary)"/>
              <text x="630" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• 2 KCTG: Sán lá lưỡng tính, D. latum</text>
              <rect x="536" y="158" width="188" height="58" rx="8" fill="#ffe4e6" stroke="var(--danger)" stroke-width="2"/>
              <text x="630" y="178" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">⭐ KCVV đồng thời là KCTG:</text>
              <text x="630" y="196" text-anchor="middle" font-size="10" font-weight="700" fill="#9f1239">Taenia solium &amp; Hymenolepis nana</text>
            </svg>
          `;
        }
        if (s === 1) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <rect x="14" y="22" width="172" height="236" rx="12" fill="var(--bg-card)" stroke="var(--success)" stroke-width="2"/>
              <text x="100" y="46" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--success)">1. DUY NHẤT Ở NGƯỜI</text>
              <circle cx="70" cy="100" r="18" fill="#16a34a"/><text x="70" y="104" text-anchor="middle" font-size="9.5" fill="#fff">Người</text>
              <circle cx="130" cy="100" r="18" fill="#16a34a"/><text x="130" y="104" text-anchor="middle" font-size="9.5" fill="#fff">Người</text>
              <line x1="88" y1="100" x2="112" y2="100" stroke="#16a34a" stroke-width="3"/>
              <circle cx="100" cy="100" r="4" fill="#fbbf24"><animate attributeName="cx" values="88;112" dur="1.1s" repeatCount="indefinite"/></circle>
              <text x="100" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">A. lumbricoides</text>
              <text x="100" y="174" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">E. vermicularis</text>
              <text x="100" y="192" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">E. histolytica</text>

              <rect x="200" y="22" width="172" height="236" rx="12" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2"/>
              <text x="286" y="46" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">2. XEN KẼ ĐỘNG VẬT</text>
              <circle cx="256" cy="100" r="18" fill="#059669"/><text x="256" y="104" text-anchor="middle" font-size="9.5" fill="#fff">Người</text>
              <circle cx="316" cy="100" r="18" fill="#0284c7"/><text x="316" y="104" text-anchor="middle" font-size="9.5" fill="#fff">ĐV</text>
              <path d="M272 88 Q286 74 300 88 M300 112 Q286 126 272 112" fill="none" stroke="#059669" stroke-width="2.5"/>
              <text x="286" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Taenia saginata</text>
              <text x="286" y="174" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Taenia solium</text>
              <text x="286" y="192" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Diphyllobothrium latum</text>

              <rect x="386" y="22" width="172" height="236" rx="12" fill="var(--bg-card)" stroke="var(--warning)" stroke-width="2"/>
              <text x="472" y="46" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">3. GIAI ĐOẠN PHỤ</text>
              <circle cx="446" cy="94" r="18" fill="#d97706"/><text x="446" y="98" text-anchor="middle" font-size="9.5" fill="#fff">ĐV↔ĐV</text>
              <circle cx="504" cy="112" r="15" fill="#94a3b8"/><text x="504" y="116" text-anchor="middle" font-size="8.5" fill="#fff">Người</text>
              <line x1="464" y1="100" x2="490" y2="108" stroke="#d97706" stroke-width="2" stroke-dasharray="3 2"/>
              <text x="472" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Fasciola hepatica</text>
              <text x="472" y="174" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Balantidium coli</text>
              <text x="472" y="192" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">M. canis, T. mentagrophytes</text>

              <rect x="572" y="22" width="174" height="236" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2.5"/>
              <text x="659" y="46" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">4. NGÕ CỤT KÝ SINH</text>
              <rect x="584" y="62" width="150" height="84" rx="8" fill="var(--bg-card)" stroke="var(--danger)"/>
              <text x="659" y="80" text-anchor="middle" font-size="10" font-weight="800" fill="var(--danger)">Ngõ cụt THỰC SỰ</text>
              <text x="659" y="96" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Ngưng trệ → Bị hủy diệt</text>
              <text x="659" y="114" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-muted)">Larva migrans (giun đũa,</text>
              <text x="659" y="128" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-muted)">giun móc chó mèo)</text>

              <rect x="584" y="156" width="150" height="90" rx="8" fill="var(--bg-card)" stroke="var(--purple)"/>
              <text x="659" y="174" text-anchor="middle" font-size="10" font-weight="800" fill="var(--purple)">Ngõ cụt CẢNH NGỘ</text>
              <text x="659" y="190" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Tồn tại lâu dài (nếu thú</text>
              <text x="659" y="204" text-anchor="middle" font-size="9.5" fill="var(--text-main)">ăn thịt → hoàn tất CT)</text>
              <text x="659" y="224" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--purple)">Echinococcus, T. spiralis</text>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 760 280" class="proc-svg">
            <rect x="14" y="22" width="166" height="236" rx="12" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2"/>
            <text x="97" y="46" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">1. ĐƯỜNG RA</text>
            <text x="97" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• Phân: giun sán, đơn bào</text>
            <text x="97" y="94" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">• Nước tiểu: S. haematobium</text>
            <text x="97" y="116" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">• Đàm: Sán lá phổi</text>
            <text x="97" y="138" text-anchor="middle" font-size="10" fill="var(--text-main)">• Da: D. medinensis, giòi</text>
            <text x="97" y="160" text-anchor="middle" font-size="10" fill="var(--text-main)">• Máu: Sốt rét, Giun chỉ</text>
            <text x="97" y="182" text-anchor="middle" font-size="10" fill="var(--text-main)">• Dịch loét: O. volvulus</text>
            <text x="97" y="204" text-anchor="middle" font-size="10" fill="var(--text-muted)">• Chết: Cừu (Echinococcus)</text>

            <path d="M184 140 L214 140" stroke="var(--primary)" stroke-width="3"/>
            <circle cx="199" cy="140" r="5" fill="var(--accent)"><animate attributeName="cx" values="184;214" dur="1.1s" repeatCount="indefinite"/></circle>

            <rect x="216" y="22" width="236" height="236" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2"/>
            <text x="334" y="46" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">2. NGUỒN NHIỄM (8 NHÓM)</text>
            <text x="334" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• Đất / Nước / Chó / Thú ăn cỏ</text>
            <text x="334" y="94" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">• Củ ấu (Trapa sp.) → F. buski</text>
            <text x="334" y="116" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">• Tôm, cua → P. westermani</text>
            <text x="334" y="138" text-anchor="middle" font-size="10" fill="var(--text-main)">• Cá → D. latum, C. sinensis</text>
            <text x="334" y="160" text-anchor="middle" font-size="10" fill="var(--text-main)">• Heo → T. spiralis, T. solium</text>
            <text x="334" y="182" text-anchor="middle" font-size="10" fill="var(--text-main)">• Bò → T. saginata</text>
            <text x="334" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">• Tự nhiễm: E. vermicularis,</text>
            <text x="334" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">  Strongyloides stercoralis</text>

            <path d="M456 140 L486 140" stroke="var(--accent)" stroke-width="3"/>
            <circle cx="471" cy="140" r="5" fill="var(--danger)"><animate attributeName="cx" values="456;486" dur="1.1s" repeatCount="indefinite"/></circle>

            <rect x="488" y="22" width="258" height="236" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2"/>
            <text x="617" y="46" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">3. ĐƯỜNG VÀO &amp; CẢM THỤ</text>
            <text x="617" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• Miệng (đa số đơn bào/giun sán)</text>
            <text x="617" y="94" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• Da (giun móc, Schistosoma, muỗi)</text>
            <text x="617" y="116" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• Hô hấp (E. vermicularis, nấm)</text>
            <text x="617" y="138" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">• Lá nhau: Toxoplasma, Plasmodium</text>
            <text x="617" y="160" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">• Sinh dục: T. vaginalis, L. donovani</text>
            <rect x="506" y="178" width="222" height="64" rx="8" fill="var(--bg-card)" stroke="var(--border)"/>
            <text x="617" y="198" text-anchor="middle" font-size="9.8" font-weight="800" fill="var(--primary)">8 Yếu tố Cảm thụ &amp; Phân bố:</text>
            <text x="617" y="214" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Nhân chủng (da vàng nhạy sốt rét),</text>
            <text x="617" y="230" text-anchor="middle" font-size="9.5" fill="var(--text-main)">HIV/AIDS, Tôn giáo, Nghề nghiệp</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 3: TƯƠNG TÁC, BIỂU ĐỒ 2.1-1, BIỂU ĐỒ LAVIER & MIỄN DỊCH KST
    // ======================================================================
    3: {
      title: "🎬 Tái tạo Động Sách Giáo khoa: Biểu đồ 2.1-1, Biểu đồ Lavier & Cơ chế Miễn dịch KST",
      steps: [
        {
          pill: "1. Biểu đồ 2.1-1 (BCTT)",
          ref: "Biểu đồ 2.1-1 (tr. 492)",
          name: "Tái tạo Biểu đồ 2.1-1: Cơ chế Bệnh sinh Gia tăng Bạch cầu Toan tính",
          desc: "Dị nguyên gắn IgE trên dưỡng bào phóng thích <strong>Histamin, SRS-A, ECF, PAF</strong> gây hại cơ quan đích. KST kích thích Lympho T (lymphokins) và B (kháng thể) huy động tủy xương tổng hợp <strong>BCTT</strong> → tiết <strong>histaminase, aryl sulfatase, phospholipase</strong> trung hòa &amp; dọn phức hợp KN–KT.",
          highlight: "BCTT trung hòa độc tính dị ứng của dưỡng bào & tiểu cầu"
        },
        {
          pill: "2. Biểu đồ Lavier",
          ref: "Biểu đồ 2.1-2..6 (tr. 12, 493–499)",
          name: "Tái tạo Động Biểu đồ Lavier (3 Giai đoạn: Tiềm phục – Tăng – Giảm)",
          desc: "<strong>(1) Tiềm phục:</strong> trước khi xâm nhập mô. <strong>(2) Tăng:</strong> chu du mô (<em>Ascaris</em> Loeffler 20–40%; <em>Fasciola</em> 40–80%). <strong>(3) Giảm tiệm cận 3%:</strong> khi trưởng thành ở ruột. Riêng <em>Strongyloides</em> tạo hình răng cưa (tự nhiễm Faust), còn <em>Toxocara</em> (ngõ cụt) giữ cao 50–80%.",
          highlight: "Đơn bào (trừ Toxoplasma) nói chung KHÔNG tăng BCTT"
        },
        {
          pill: "3. Cộng đồng Kháng nguyên",
          ref: "Biguet & ctv (tr. 14)",
          name: "Thảm Kháng nguyên & Hiện tượng Cộng đồng Kháng nguyên (Biguet 1962, 1965)",
          desc: "KST có rất nhiều thành phần KN nên xuất hiện phản ứng chéo giữa các KST gần/xa và giữa KST với vi khuẩn: <em>Fasciola hepatica</em> chung <strong>7</strong> KN với <em>D. dendriticum</em>, <strong>6</strong> với <em>C. sinensis</em>, <strong>5</strong> với <em>S. mansoni</em>, <strong>4</strong> với <em>P. westermani</em>, <strong>3</strong> với <em>T. saginata</em>, <strong>1</strong> với <em>A. lumbricoides</em>.",
          highlight: "KST – Vi khuẩn: Trichinella – S. typhi • Leishmania – Mycobacteria"
        },
        {
          pill: "4. Né tránh Miễn dịch",
          ref: "Mục 12.4 (tr. 14–15)",
          name: "4 Cơ chế Tồn tại của KST Trước Đáp ứng Miễn dịch Ký chủ",
          desc: "(1) <strong>Ẩn trong tế bào</strong> (bào tương đại thực bào: <em>Toxoplasma, Leishmania, T. cruzi</em>); (2) <strong>Ức chế miễn dịch</strong> (<em>Leishmania, Candida</em>); (3) <strong>Thay đổi KN bề mặt</strong> (<em>Trypanosoma gambiense/rhodesiense</em>, sốt rét → khó làm vaccin); (4) <strong>Ngụy trang KN ký chủ</strong> (<em>Schistosoma</em> gắn nhóm máu ABO).",
          highlight: "Tiền miễn nhiễm (hết KST = hết MD) vs Dung nạp (trung hòa độc tố)"
        }
      ],
      renderSvg(s) {
        if (s === 0) {
          return `
            <svg viewBox="0 0 760 295" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO BIỂU ĐỒ 2.1-1 (tr. 492): CƠ CHẾ BỆNH SINH TĂNG BẠCH CẦU TOAN TÍNH</text>

              <rect x="64" y="38" width="196" height="32" rx="8" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2"/>
              <text x="162" y="59" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">IgE – Dị nguyên</text>

              <line x1="162" y1="70" x2="162" y2="88" stroke="var(--danger)" stroke-width="2"/>
              <rect x="34" y="88" width="256" height="38" rx="8" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2"/>
              <text x="162" y="105" text-anchor="middle" font-size="10.5" font-weight="800" fill="#92400e">BC đa nhân trung tính – kiềm – dưỡng bào</text>
              <text x="162" y="119" text-anchor="middle" font-size="9.5" fill="#78350f">(Poly-baso-mastocytes)</text>

              <line x1="60" y1="126" x2="60" y2="228" stroke="#d97706" stroke-width="2"/>
              <rect x="30" y="148" width="60" height="32" rx="6" fill="var(--bg-card)" stroke="#d97706"/>
              <text x="60" y="163" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">PAF →</text>
              <text x="60" y="175" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">Tiểu cầu</text>

              <line x1="132" y1="126" x2="132" y2="228" stroke="#e11d48" stroke-width="2"/>
              <rect x="96" y="142" width="74" height="44" rx="6" fill="var(--bg-card)" stroke="#e11d48"/>
              <text x="133" y="159" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--danger)">SRS-A</text>
              <text x="133" y="175" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--danger)">Histamin</text>

              <line x1="224" y1="126" x2="224" y2="188" stroke="#059669" stroke-width="2"/>
              <rect x="180" y="142" width="90" height="36" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/>
              <text x="225" y="158" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--accent)">ECF &amp; Histamin</text>
              <text x="225" y="171" text-anchor="middle" font-size="8.5" fill="var(--text-main)">Hóa hướng động</text>

              <rect x="34" y="232" width="234" height="44" rx="10" fill="#ffe4e6" stroke="var(--danger)" stroke-width="2"/>
              <text x="151" y="252" text-anchor="middle" font-size="11" font-weight="800" fill="#9f1239">CƠ QUAN ĐÍCH (Phế quản, ruột...)</text>
              <text x="151" y="268" text-anchor="middle" font-size="9.5" fill="#9f1239">Co thắt cơ trơn, xuất tiết, phù nề</text>

              <rect x="466" y="38" width="204" height="32" rx="8" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2"/>
              <text x="568" y="59" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">Ký sinh trùng (Thảm KN)</text>

              <line x1="498" y1="70" x2="498" y2="108" stroke="var(--primary)" stroke-width="2"/>
              <text x="488" y="96" text-anchor="end" font-size="10" font-weight="700" fill="var(--primary)">Lympho T</text>
              <line x1="636" y1="70" x2="636" y2="108" stroke="var(--primary)" stroke-width="2"/>
              <text x="646" y="96" font-size="10" font-weight="700" fill="var(--primary)">Lympho B</text>

              <rect x="540" y="114" width="184" height="34" rx="8" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.8"/>
              <text x="632" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">(Ký sinh trùng – Kháng thể)</text>

              <rect x="434" y="150" width="92" height="34" rx="8" fill="var(--purple-light)" stroke="var(--purple)"/>
              <text x="480" y="166" text-anchor="middle" font-size="10" font-weight="800" fill="var(--purple)">Tủy xương</text>
              <text x="480" y="179" text-anchor="middle" font-size="8.5" fill="var(--text-main)">Lymphokins → Sinh</text>

              <line x1="480" y1="184" x2="536" y2="232" stroke="var(--purple)" stroke-width="2.5"/>
              <line x1="646" y1="148" x2="646" y2="232" stroke="var(--primary)" stroke-width="2.5"/>
              <text x="656" y="196" font-size="9.5" font-weight="700" fill="var(--primary)">Phá hủy /</text>
              <text x="656" y="210" font-size="9.5" font-weight="700" fill="var(--primary)">Dọn sạch</text>

              <rect x="454" y="232" width="268" height="44" rx="10" fill="var(--accent)" stroke="var(--accent)" stroke-width="2"/>
              <text x="588" y="253" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">BẠCH CẦU TOAN TÍNH (BCTT)</text>
              <text x="588" y="269" text-anchor="middle" font-size="9.5" fill="#d1fae5">Trung hòa tác hại của Dưỡng bào</text>

              <path d="M454 242 L268 190" stroke="#059669" stroke-width="2.2" stroke-dasharray="5 3"/>
              <path d="M454 250 L172 192" stroke="#059669" stroke-width="2.2" stroke-dasharray="5 3"/>
              <path d="M454 258 L84 204" stroke="#059669" stroke-width="2.2" stroke-dasharray="5 3"/>
              <circle cx="360" cy="216" r="5" fill="#10b981"><animate attributeName="cx" values="450;260" dur="1.8s" repeatCount="indefinite"/><animate attributeName="cy" values="244;186" dur="1.8s" repeatCount="indefinite"/></circle>
              <rect x="282" y="182" width="150" height="46" rx="8" fill="var(--bg-card)" stroke="var(--accent)"/>
              <text x="357" y="198" text-anchor="middle" font-size="9.2" font-weight="800" fill="var(--accent)">• Histaminase (diệt Histamin)</text>
              <text x="357" y="211" text-anchor="middle" font-size="9.2" font-weight="800" fill="var(--accent)">• Aryl sulfatase (diệt SRS-A)</text>
              <text x="357" y="224" text-anchor="middle" font-size="9.2" font-weight="800" fill="var(--accent)">• Phospholipase (diệt PAF)</text>
            </svg>
          `;
        }
        if (s === 1) {
          return `
            <svg viewBox="0 0 760 290" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO ĐỘNG BIỂU ĐỒ LAVIER (Biểu đồ 2.1-2..4 tr. 493–495) – 3 GIAI ĐOẠN</text>
              <line x1="70" y1="240" x2="710" y2="240" stroke="var(--text-main)" stroke-width="2"/>
              <line x1="70" y1="240" x2="70" y2="44" stroke="var(--text-main)" stroke-width="2"/>
              <text x="38" y="54" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">% BCTT</text>
              <text x="46" y="78" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--danger)">80%</text>
              <text x="46" y="142" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--warning)">40%</text>
              <text x="46" y="226" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--success)">3%</text>
              <line x1="70" y1="222" x2="700" y2="222" stroke="var(--success)" stroke-width="1.5" stroke-dasharray="5 4"/>

              <line x1="150" y1="48" x2="150" y2="240" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="4 3"/>
              <line x1="270" y1="48" x2="270" y2="240" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="4 3"/>
              <text x="110" y="258" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-muted)">(1) Tiềm phục</text>
              <text x="210" y="258" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warning)">(2) Tăng cực đại</text>
              <text x="490" y="258" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">(3) Giảm tiệm cận 3% (hoặc răng cưa / giữ cao)</text>

              <path d="M70,222 L140,218 Q180,150 235,126 Q265,120 310,155 Q420,206 680,218" fill="none" stroke="var(--primary)" stroke-width="4"/>
              <circle r="6" fill="var(--primary)">
                <animateMotion dur="3.6s" repeatCount="indefinite" path="M70,222 L140,218 Q180,150 235,126 Q265,120 310,155 Q420,206 680,218"/>
              </circle>

              <path d="M235,126 L305,152 L345,112 L390,158 L440,118 L490,162 L540,126 L610,178" fill="none" stroke="var(--warning)" stroke-width="2.5" stroke-dasharray="6 3"/>
              <path d="M140,218 Q185,90 250,72 L680,78" fill="none" stroke="var(--danger)" stroke-width="3" stroke-dasharray="8 4"/>

              <rect x="460" y="42" width="248" height="96" rx="10" fill="var(--bg-card)" stroke="var(--border)"/>
              <line x1="474" y1="62" x2="504" y2="62" stroke="var(--danger)" stroke-width="3" stroke-dasharray="6 3"/>
              <text x="512" y="66" font-size="10" font-weight="700" fill="var(--danger)">Toxocara / Gnathostoma (50–80%)</text>
              <line x1="474" y1="88" x2="504" y2="88" stroke="var(--warning)" stroke-width="2.5" stroke-dasharray="5 2"/>
              <text x="512" y="92" font-size="10" font-weight="700" fill="var(--warning)">Giun lươn (Răng cưa tự nhiễm Faust)</text>
              <line x1="474" y1="114" x2="504" y2="114" stroke="var(--primary)" stroke-width="3.5"/>
              <text x="512" y="118" font-size="10" font-weight="700" fill="var(--primary)">Giun đũa (Loeffler 20–40% → giảm)</text>
            </svg>
          `;
        }
        if (s === 2) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">THẢM KHÁNG NGUYÊN &amp; CỘNG ĐỒNG KHÁNG NGUYÊN (Biguet &amp; ctv 1962, 1965 – tr. 14)</text>
              <ellipse cx="185" cy="146" rx="88" ry="48" fill="var(--primary)" opacity="0.9"/>
              <text x="185" y="140" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">Fasciola hepatica</text>
              <text x="185" y="158" text-anchor="middle" font-size="10" fill="#e0e7ff">Thảm Kháng nguyên lớn</text>
              <circle cx="185" cy="146" r="56" fill="none" stroke="#818cf8" stroke-width="2" stroke-dasharray="6 4">
                <animate attributeName="r" values="52;62;52" dur="2.2s" repeatCount="indefinite"/>
              </circle>

              <line x1="273" y1="120" x2="390" y2="54" stroke="#059669" stroke-width="4.5"/>
              <rect x="392" y="38" width="334" height="30" rx="8" fill="var(--accent-light)" stroke="var(--accent)"/>
              <text x="559" y="57" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">7 KN chung ↔ Dicrocoelium dendriticum</text>

              <line x1="273" y1="130" x2="390" y2="90" stroke="#0284c7" stroke-width="4"/>
              <rect x="392" y="74" width="334" height="30" rx="8" fill="var(--primary-light)" stroke="var(--primary)"/>
              <text x="559" y="93" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--primary)">6 KN chung ↔ Clonorchis sinensis</text>

              <line x1="273" y1="142" x2="390" y2="126" stroke="#7c3aed" stroke-width="3.5"/>
              <rect x="392" y="110" width="334" height="30" rx="8" fill="var(--purple-light)" stroke="var(--purple)"/>
              <text x="559" y="129" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--purple)">5 KN chung ↔ Schistosoma mansoni</text>

              <line x1="273" y1="152" x2="390" y2="162" stroke="#d97706" stroke-width="3"/>
              <rect x="392" y="146" width="334" height="30" rx="8" fill="var(--warning-light)" stroke="var(--warning)"/>
              <text x="559" y="165" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warning)">4 KN chung ↔ Paragonimus westermani</text>

              <line x1="273" y1="162" x2="390" y2="198" stroke="#e11d48" stroke-width="2.5"/>
              <rect x="392" y="182" width="334" height="30" rx="8" fill="var(--danger-light)" stroke="var(--danger)"/>
              <text x="559" y="201" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">3 KN chung ↔ Taenia saginata | 1 KN ↔ A. lumbricoides</text>

              <rect x="32" y="224" width="694" height="40" rx="10" fill="var(--bg-card)" stroke="var(--border)"/>
              <text x="379" y="248" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">Cộng đồng KST – Vi khuẩn: Trichinella spiralis ↔ Salmonella typhi | Leishmania donovani ↔ Mycobacteria</text>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 760 280" class="proc-svg">
            <rect x="14" y="24" width="174" height="232" rx="12" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2"/>
            <text x="101" y="48" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">1. ẨN TRONG TẾ BÀO</text>
            <circle cx="101" cy="112" r="34" fill="#c7d2fe" stroke="var(--primary)" stroke-width="2"/>
            <circle cx="92" cy="106" r="7" fill="#e11d48"/><circle cx="112" cy="116" r="7" fill="#e11d48"/>
            <text x="101" y="168" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Đại thực bào</text>
            <text x="101" y="188" text-anchor="middle" font-size="10" fill="var(--primary)">Toxoplasma, Leishmania,</text>
            <text x="101" y="204" text-anchor="middle" font-size="10" fill="var(--primary)">Trypanosoma cruzi</text>
            <text x="101" y="226" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">Thoát kháng thể truy lùng</text>

            <rect x="200" y="24" width="174" height="232" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2"/>
            <text x="287" y="48" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">2. ỨC CHẾ MIỄN DỊCH</text>
            <circle cx="287" cy="112" r="24" fill="#d97706"/>
            <text x="287" y="116" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">⛔ MD</text>
            <circle cx="287" cy="112" r="34" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="4 4">
              <animate attributeName="r" values="28;38;28" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <text x="287" y="170" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Leishmania sp.</text>
            <text x="287" y="188" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Candida albicans</text>
            <text x="287" y="214" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">Tổng hợp chất ức chế MD</text>

            <rect x="386" y="24" width="174" height="232" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2"/>
            <text x="473" y="48" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">3. ĐỔI KHÁNG NGUYÊN</text>
            <ellipse cx="473" cy="112" rx="34" ry="18" fill="#e11d48">
              <animate attributeName="fill" values="#e11d48;#7c3aed;#0284c7;#e11d48" dur="2.6s" repeatCount="indefinite"/>
            </ellipse>
            <text x="473" y="116" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Áo KN mới</text>
            <text x="473" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Trypanosoma gambiense,</text>
            <text x="473" y="188" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">T. rhodesiense, Sốt rét</text>
            <text x="473" y="214" text-anchor="middle" font-size="9.5" fill="var(--danger)">→ Rất khó làm vaccin</text>

            <rect x="572" y="24" width="174" height="232" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2"/>
            <text x="659" y="48" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">4. NGỤY TRANG (ABO)</text>
            <ellipse cx="659" cy="112" rx="30" ry="20" fill="#059669"/>
            <circle cx="634" cy="96" r="9" fill="#fbbf24"/><text x="634" y="100" text-anchor="middle" font-size="9" font-weight="800" fill="#78350f">A</text>
            <circle cx="684" cy="96" r="9" fill="#fbbf24"/><text x="684" y="100" text-anchor="middle" font-size="9" font-weight="800" fill="#78350f">B</text>
            <circle cx="659" cy="136" r="9" fill="#fbbf24"/><text x="659" y="140" text-anchor="middle" font-size="9" font-weight="800" fill="#78350f">O</text>
            <text x="659" y="172" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Schistosoma sp.</text>
            <text x="659" y="190" text-anchor="middle" font-size="10" fill="var(--text-main)">(và Trypanosoma sp.)</text>
            <text x="659" y="214" text-anchor="middle" font-size="9.5" fill="var(--accent)">Thâu nhập KN nhóm máu</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 4: TÁI TẠO ĐẦY ĐỦ 7 HÌNH CHẨN ĐOÁN CHƯƠNG 1 (H1.dc-1 → H1.dc-7) + SABIN-FELDMAN
    // ======================================================================
    4: {
      title: "🎬 Tái tạo Động Toàn bộ Hình Chẩn đoán Chương 1 (H1.dc-1 đến H1.dc-7 & Sabin–Feldman)",
      steps: [
        {
          pill: "H1.dc-1 Cầu thận",
          ref: "Hình H1.dc-1 (tr. 19)",
          name: "Tái tạo H1.dc-1: Phôi giun chỉ trong Cầu thận (Xét nghiệm trực tiếp mô học)",
          desc: "Tái tạo lát cắt mô cầu thận: <strong>Bao Bowman</strong>, tiểu động mạch đến/đi và cuộn mao mạch cầu thận chứa <strong>phôi giun chỉ (microfilaria)</strong> đang cuộn mình bên trong lòng mao mạch – minh họa phát hiện KST trực tiếp trong mô.",
          highlight: "Trực tiếp: Soi tươi/nhuộm mô, máu, phân, tập trung KST, DNA probe"
        },
        {
          pill: "H1.dc-2 KIT Sốt rét",
          ref: "Hình H1.dc-2 (tr. 19)",
          name: "Tái tạo H1.dc-2: KIT Chẩn đoán nhanh Sốt rét NOW® Malaria (3 Khay A – B – C)",
          desc: "Mô phỏng dòng mao dẫn sắc ký miễn dịch trên 3 khay test (<strong>C</strong> chứng, <strong>T1</strong> HRP-2 <em>P. falciparum</em>, <strong>T2</strong> Pan-malarial aldolase <em>P.v/P.m/P.o</em>): Khay A (<strong>C+T1+T2</strong>: <em>P.f</em> hoặc phối hợp), Khay B (<strong>C+T1</strong>: <em>P.f</em>), Khay C (<strong>C</strong> đơn độc: Âm tính).",
          highlight: "T1 = HRP-2 (P. falciparum) • T2 = Pan-malarial (P.v, P.m, P.o)"
        },
        {
          pill: "Sabin–Feldman",
          ref: "Sơ đồ tr. 20 & tr. 22",
          name: "Tái tạo Sơ đồ Thử nghiệm Màu Sabin–Feldman (Toxoplasma + Xanh Methylen)",
          desc: "<em>Toxoplasma</em> sống + huyết thanh bệnh nhân + <strong>xanh methylen (nhuộm sống)</strong>: Nếu có kháng thể (<strong>Dương tính</strong>) → màng KST bị phá hủy và <strong>KHÔNG bắt màu xanh</strong>; Nếu không có KT (<strong>Âm tính</strong>) → KST nguyên vẹn <strong>bắt màu xanh đậm</strong>.",
          highlight: "Dương tính = KHÔNG bắt màu xanh methylen!"
        },
        {
          pill: "H1.dc-3 Vogel–Minning",
          ref: "Hình H1.dc-3 (tr. 20)",
          name: "Tái tạo H1.dc-3: Phản ứng Kết tủa Quanh Ấu trùng (Vogel–Minning & Roth)",
          desc: "Dùng <strong>kháng nguyên sống</strong>: Trái là <strong>Phản ứng Vogel–Minning (H1.dc-3)</strong>: ấu trùng đuôi chẻ + huyết thanh → kết tủa làm <strong>màng ấu trùng dày lên</strong>. Phải là <strong>Vi thử nghiệm Roth</strong>: ấu trùng <em>Trichinella</em> + huyết thanh → <strong>kết tủa ở miệng ấu trùng</strong>.",
          highlight: "H1.dc-3: Màng ấu trùng đuôi chẻ dày lên khi gặp kháng thể"
        },
        {
          pill: "H1.dc-4 Quanh trứng",
          ref: "Hình H1.dc-4 (tr. 20)",
          name: "Tái tạo H1.dc-4: Phản ứng Kết tủa Quanh Trứng Sán máng (COPT)",
          desc: "Trứng sán máng sống (chứa phôi lông tơ bên trong, gai đặc trưng) khi ủ cùng huyết thanh bệnh nhân sẽ xuất hiện các <strong>dải kết tủa hình ngón tay</strong> mọc tủa ra từ các lỗ vỏ trứng.",
          highlight: "Hình ngón tay đặc trưng quanh trứng sán máng"
        },
        {
          pill: "H1.dc-5 Huỳnh quang",
          ref: "Hình H1.dc-5 (tr. 21)",
          name: "Tái tạo H1.dc-5: Miễn dịch Huỳnh quang Gián tiếp (IFA) dưới Ánh sáng Cực tím",
          desc: "Kháng nguyên thân KST gắn lam kính + huyết thanh BN + kháng thể gắn huỳnh quang (FITC) soi dưới <strong>tia UV</strong>: <strong>Dương tính = phát huỳnh quang xanh lá cây</strong> sáng rực trên nền tối (như H1.dc-5); <strong>Âm tính = màu đỏ</strong> (thuốc nhuộm đối lập).",
          highlight: "Dương tính = Huỳnh quang xanh lá cây • Âm tính = Màu đỏ"
        },
        {
          pill: "H1.dc-6 Ouchterlony",
          ref: "Hình H1.dc-6 (tr. 21)",
          name: "Tái tạo H1.dc-6: Đường Kết tủa trong Phương pháp Ouchterlony (Khuếch tán Thạch)",
          desc: "Tái tạo đúng bố cục hoa thị trong sách: Giếng trung tâm chứa KN <strong><em>Asc. suum</em></strong>, các giếng ngoài chứa huyết thanh <strong><em>Ser. Oncho</em></strong>, <strong><em>S. Oncho + Med</em></strong>, <strong><em>Ser. Med</em></strong>. KN và KT khuếch tán đồng tâm trong thạch gặp nhau tạo các <strong>đường kết tủa trắng</strong> (minh họa cộng đồng KN!).",
          highlight: "Định tính (+) • Thời gian 3 ngày • Phí tổn thấp (+)"
        },
        {
          pill: "H1.dc-7 Điện di",
          ref: "Hình H1.dc-7 (tr. 21)",
          name: "Tái tạo H1.dc-7: Cung Kết tủa trong Miễn dịch Điện di (Immunoelectrophoresis)",
          desc: "<strong>Pha 1:</strong> Điện di tách các phân đoạn kháng nguyên theo chiều ngang trong bản thạch. <strong>Pha 2:</strong> Cho kháng huyết thanh vào rãnh dọc song song để khuếch tán vuông góc gặp kháng nguyên → hình thành các <strong>cung kết tủa hình vòng cung</strong> đặc hiệu!",
          highlight: "MD điện di (4 ngày, ++) → Électrosynérèse (2 giờ) → ELIEDA (+ men)"
        }
      ],
      renderSvg(s) {
        if (s === 0) {
          return `
            <svg viewBox="0 0 760 290" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO H1.dc-1 (tr. 19): PHÔI GIUN CHỈ TRONG CẦU THẬN (SINH THIẾT MÔ HỌC)</text>
              <circle cx="320" cy="152" r="106" fill="#fce7f3" stroke="#9d174d" stroke-width="4" stroke-dasharray="10 4"/>
              <circle cx="320" cy="152" r="92" fill="#fff1f2" stroke="#be185d" stroke-width="2"/>
              <path d="M180 120 Q235 125 270 140 Q315 100 355 130 Q395 160 355 190 Q310 215 275 180 Q230 175 180 185" fill="none" stroke="#e11d48" stroke-width="18" opacity="0.28" stroke-linecap="round"/>
              <path d="M270 140 Q315 100 355 130 Q395 160 355 190 Q310 215 275 180 Z" fill="none" stroke="#be123c" stroke-width="2.5"/>
              <path d="M286 146 Q310 116 342 136 Q364 156 336 184 Q308 192 292 168" fill="none" stroke="#3730a3" stroke-width="6.5" stroke-linecap="round">
                <animate attributeName="d" values="M286 146 Q310 116 342 136 Q364 156 336 184 Q308 192 292 168;M282 152 Q316 110 348 142 Q358 166 330 188 Q302 184 298 162;M286 146 Q310 116 342 136 Q364 156 336 184 Q308 192 292 168" dur="2.1s" repeatCount="indefinite"/>
              </path>
              <circle cx="286" cy="146" r="4" fill="#fbbf24"/>
              <text x="150" y="106" text-anchor="end" font-size="10.5" font-weight="700" fill="#9d174d">Tiểu ĐM đến →</text>
              <text x="150" y="198" text-anchor="end" font-size="10.5" font-weight="700" fill="#9d174d">← Tiểu ĐM đi</text>
              <rect x="234" y="34" width="172" height="20" rx="6" fill="#fce7f3" stroke="#9d174d" stroke-width="1.2"/>
              <text x="320" y="48" text-anchor="middle" font-size="10.5" font-weight="800" fill="#9d174d">Bao Bowman &amp; Khoang niệu</text>

              <rect x="466" y="54" width="272" height="196" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
              <text x="602" y="80" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">Chú giải Vi thể H1.dc-1</text>
              <text x="484" y="108" font-size="10.5" font-weight="700" fill="#3730a3">● Phôi giun chỉ (Microfilaria):</text>
              <text x="494" y="125" font-size="10" fill="var(--text-main)">Cuộn xoắn mắc kẹt trong lòng</text>
              <text x="494" y="140" font-size="10" fill="var(--text-main)">cuộn mao mạch cầu thận.</text>
              <text x="484" y="168" font-size="10.5" font-weight="700" fill="var(--danger)">● Ý nghĩa Xét nghiệm Trực tiếp:</text>
              <text x="494" y="185" font-size="10" fill="var(--text-main)">Tìm thấy KST trực tiếp trên lát</text>
              <text x="494" y="200" font-size="10" fill="var(--text-main)">cắt mô nhuộm, giúp chẩn đoán</text>
              <text x="494" y="215" font-size="10" fill="var(--text-main)">xác định khi lấy đúng bệnh phẩm.</text>
            </svg>
          `;
        }
        if (s === 1) {
          return `
            <svg viewBox="0 0 760 290" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO H1.dc-2 (tr. 19): KIT CHẨN ĐOÁN NHANH SỐT RÉT NOW® MALARIA (A – B – C)</text>

              <rect x="46" y="42" width="186" height="222" rx="14" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
              <text x="139" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f172a">NOW® Malaria • A</text>
              <rect x="114" y="76" width="50" height="96" rx="6" fill="#fff" stroke="#64748b" stroke-width="2"/>
              <rect x="114" y="172" width="50" height="0" fill="#fecdd3" opacity="0.5"><animate attributeName="height" values="0;96" dur="2.2s" repeatCount="indefinite"/><animate attributeName="y" values="172;76" dur="2.2s" repeatCount="indefinite"/></rect>
              <text x="104" y="96" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">C</text>
              <text x="104" y="124" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">T1</text>
              <text x="104" y="152" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">T2</text>
              <line x1="120" y1="92" x2="158" y2="92" stroke="#e11d48" stroke-width="4"/>
              <line x1="120" y1="120" x2="158" y2="120" stroke="#e11d48" stroke-width="4"/>
              <line x1="120" y1="148" x2="158" y2="148" stroke="#e11d48" stroke-width="4"/>
              <text x="139" y="196" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">Khay A: C + T1 + T2</text>
              <text x="139" y="214" text-anchor="middle" font-size="9.8" fill="#0f172a">(+) P. falciparum</text>
              <text x="139" y="230" text-anchor="middle" font-size="9.5" fill="#475569">(hoặc phối hợp P.f + P.v/m/o)</text>

              <rect x="286" y="42" width="186" height="222" rx="14" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
              <text x="379" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f172a">NOW® Malaria • B</text>
              <rect x="354" y="76" width="50" height="96" rx="6" fill="#fff" stroke="#64748b" stroke-width="2"/>
              <text x="344" y="96" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">C</text>
              <text x="344" y="124" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">T1</text>
              <text x="344" y="152" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">T2</text>
              <line x1="360" y1="92" x2="398" y2="92" stroke="#e11d48" stroke-width="4"/>
              <line x1="360" y1="120" x2="398" y2="120" stroke="#e11d48" stroke-width="4"/>
              <text x="379" y="196" text-anchor="middle" font-size="11" font-weight="800" fill="#d97706">Khay B: C + T1</text>
              <text x="379" y="214" text-anchor="middle" font-size="9.8" fill="#0f172a">(+) P. falciparum đơn thuần</text>
              <text x="379" y="230" text-anchor="middle" font-size="9.5" fill="#475569">(Kháng nguyên HRP-2)</text>

              <rect x="526" y="42" width="186" height="222" rx="14" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
              <text x="619" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f172a">NOW® Malaria • C</text>
              <rect x="594" y="76" width="50" height="96" rx="6" fill="#fff" stroke="#64748b" stroke-width="2"/>
              <text x="584" y="96" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">C</text>
              <text x="584" y="124" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">T1</text>
              <text x="584" y="152" text-anchor="end" font-size="10" font-weight="800" fill="#0f172a">T2</text>
              <line x1="600" y1="92" x2="638" y2="92" stroke="#e11d48" stroke-width="4"/>
              <text x="619" y="196" text-anchor="middle" font-size="11" font-weight="800" fill="#16a34a">Khay C: Chỉ có C</text>
              <text x="619" y="214" text-anchor="middle" font-size="9.8" fill="#0f172a">(–) Âm tính</text>
              <text x="619" y="230" text-anchor="middle" font-size="9.5" fill="#475569">(C + T2 = P.v, P.m hoặc P.o)</text>
            </svg>
          `;
        }
        if (s === 2) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO SƠ ĐỒ SABIN–FELDMAN (tr. 20, 22): THỬ NGHIỆM MÀU TOXOPLASMA</text>

              <rect x="26" y="94" width="166" height="90" rx="12" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2"/>
              <text x="109" y="122" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">Toxoplasma sống</text>
              <text x="109" y="142" text-anchor="middle" font-size="10.5" fill="var(--text-main)">+ Kháng thể (Huyết thanh)</text>
              <text x="109" y="162" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0284c7">+ Xanh methylen (nhuộm sống)</text>

              <path d="M192 126 L310 78" stroke="var(--text-muted)" stroke-width="2.5"/>
              <path d="M192 152 L310 202" stroke="var(--danger)" stroke-width="2.5"/>

              <rect x="314" y="42" width="420" height="86" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
              <text x="415" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">Không có Kháng thể đặc hiệu</text>
              <path d="M360 96 Q380 80 400 96 Q380 112 360 96" fill="#0284c7"/>
              <path d="M412 96 Q432 80 452 96 Q432 112 412 96" fill="#0284c7"/>
              <text x="580" y="78" text-anchor="middle" font-size="13" font-weight="800" fill="#0369a1">→ ÂM TÍNH</text>
              <text x="580" y="102" text-anchor="middle" font-size="10.5" fill="#0f172a">KST nguyên vẹn → Bắt màu xanh</text>

              <rect x="314" y="152" width="420" height="94" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2.5"/>
              <text x="415" y="182" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">Có Kháng thể đặc hiệu</text>
              <path d="M360 206 Q380 190 400 206 Q380 222 360 206" fill="#ffffff" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3">
                <animate attributeName="opacity" values="1;0.35;1" dur="1.4s" repeatCount="indefinite"/>
              </path>
              <path d="M412 206 Q432 190 452 206 Q432 222 412 206" fill="#ffffff" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/>
              <text x="580" y="188" text-anchor="middle" font-size="13" font-weight="800" fill="var(--danger)">→ DƯƠNG TÍNH</text>
              <text x="580" y="212" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Phá hủy KST → KHÔNG bắt màu xanh!</text>
            </svg>
          `;
        }
        if (s === 3) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <rect x="20" y="26" width="350" height="232" rx="14" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2.5"/>
              <text x="195" y="52" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">H1.dc-3 (tr. 20): PHẢN ỨNG VOGEL–MINNING</text>
              <ellipse cx="170" cy="136" rx="46" ry="18" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
              <ellipse cx="170" cy="136" rx="54" ry="26" fill="none" stroke="var(--danger)" stroke-width="6" opacity="0.75">
                <animate attributeName="stroke-width" values="2;9;2" dur="2s" repeatCount="indefinite"/>
              </ellipse>
              <path d="M216 136 L268 136 L296 116 M268 136 L296 156" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
              <text x="195" y="198" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">Ấu trùng đuôi chẻ + Huyết thanh</text>
              <text x="195" y="218" text-anchor="middle" font-size="10.5" fill="var(--text-main)">→ Kết tủa làm MÀNG ẤU TRÙNG DÀY LÊN</text>

              <rect x="390" y="26" width="350" height="232" rx="14" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2.5"/>
              <text x="565" y="52" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">VI THỬ NGHIỆM ROTH (tr. 20)</text>
              <path d="M476 152 Q524 106 574 148 Q610 176 644 134" fill="none" stroke="#059669" stroke-width="11" stroke-linecap="round"/>
              <circle cx="472" cy="154" r="14" fill="#fbbf24" opacity="0.85">
                <animate attributeName="r" values="9;17;9" dur="1.8s" repeatCount="indefinite"/>
              </circle>
              <text x="472" y="128" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--danger)">Kết tủa miệng</text>
              <text x="565" y="198" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">Ấu trùng Trichinella + Huyết thanh</text>
              <text x="565" y="218" text-anchor="middle" font-size="10.5" fill="var(--text-main)">→ Tạo khối KẾT TỦA Ở MIỆNG ẤU TRÙNG</text>
            </svg>
          `;
        }
        if (s === 4) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO H1.dc-4 (tr. 20): PHẢN ỨNG KẾT TỦA QUANH TRỨNG SÁN MÁNG (COPT)</text>

              <ellipse cx="300" cy="148" rx="82" ry="52" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
              <path d="M352 188 L374 206 L342 194" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
              <ellipse cx="300" cy="148" rx="64" ry="36" fill="#94a3b8" opacity="0.55"/>
              <text x="300" y="152" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">Trứng Sán máng (Phôi)</text>

              <path d="M236 108 Q208 82 222 72 Q238 82 248 102" fill="#fbbf24" stroke="#d97706" stroke-width="2">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.7s" repeatCount="indefinite"/>
              </path>
              <path d="M300 96 Q296 58 312 58 Q322 72 314 96" fill="#fbbf24" stroke="#d97706" stroke-width="2">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.1s" repeatCount="indefinite"/>
              </path>
              <path d="M372 126 Q412 104 420 120 Q408 138 380 138" fill="#fbbf24" stroke="#d97706" stroke-width="2">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
              </path>
              <path d="M222 162 Q180 176 186 192 Q208 190 230 172" fill="#fbbf24" stroke="#d97706" stroke-width="2">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.9s" repeatCount="indefinite"/>
              </path>

              <rect x="466" y="64" width="268" height="172" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2"/>
              <text x="600" y="94" text-anchor="middle" font-size="12" font-weight="800" fill="#92400e">Cơ chế H1.dc-4</text>
              <text x="484" y="122" font-size="10.5" font-weight="700" fill="var(--text-main)">• Trứng sán máng sống tiết</text>
              <text x="494" y="139" font-size="10.5" fill="var(--text-main)">kháng nguyên qua lỗ vỏ.</text>
              <text x="484" y="166" font-size="10.5" font-weight="700" fill="var(--danger)">• Gặp kháng thể huyết thanh:</text>
              <text x="494" y="184" font-size="10.5" font-weight="800" fill="var(--danger)">Tạo kết tủa HÌNH NGÓN TAY</text>
              <text x="494" y="202" font-size="10" fill="var(--text-muted)">tỏa quanh bề mặt vỏ trứng.</text>
            </svg>
          `;
        }
        if (s === 5) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO H1.dc-5 (tr. 21): MIỄN DỊCH HUỲNH QUANG DƯƠNG TÍNH DƯỚI TIA UV</text>

              <rect x="24" y="42" width="350" height="218" rx="14" fill="#090d16" stroke="#334155" stroke-width="2.5"/>
              <text x="199" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#4ade80">Vi trường H1.dc-5 (Ánh sáng Cực tím UV)</text>
              <circle cx="176" cy="142" r="14" fill="#4ade80"><animate attributeName="opacity" values="0.7;1;0.7" dur="1.3s" repeatCount="indefinite"/></circle>
              <circle cx="204" cy="128" r="13" fill="#22c55e"><animate attributeName="opacity" values="0.6;1;0.6" dur="1.6s" repeatCount="indefinite"/></circle>
              <circle cx="212" cy="158" r="15" fill="#4ade80"/>
              <circle cx="182" cy="170" r="12" fill="#86efac"/>
              <circle cx="144" cy="158" r="11" fill="#4ade80"/>
              <circle cx="256" cy="144" r="12" fill="#22c55e"/>
              <circle cx="96" cy="122" r="14" fill="#64748b" opacity="0.38"/>
              <circle cx="122" cy="198" r="12" fill="#64748b" opacity="0.38"/>
              <circle cx="292" cy="198" r="13" fill="#ef4444" opacity="0.75"/>
              <text x="199" y="238" text-anchor="middle" font-size="10.5" font-weight="800" fill="#86efac">Dương tính = Huỳnh quang xanh lá cây</text>

              <rect x="394" y="42" width="346" height="218" rx="14" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2"/>
              <text x="567" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">Nguyên lý Bánh kẹp Huỳnh quang</text>
              <rect x="424" y="190" width="286" height="16" rx="4" fill="#cbd5e1"/>
              <text x="567" y="224" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Lam kính gắn Kháng nguyên thân KST</text>
              <circle cx="567" cy="174" r="16" fill="#4f46e5"/><text x="567" y="178" text-anchor="middle" font-size="9.5" font-weight="800" fill="#fff">KST</text>
              <path d="M554 140 L567 156 L580 140 M567 156 L567 160" fill="none" stroke="#0284c7" stroke-width="3"/>
              <text x="646" y="150" font-size="9.5" font-weight="700" fill="#0284c7">KT huyết thanh BN</text>
              <path d="M556 108 L567 124 L578 108" fill="none" stroke="#16a34a" stroke-width="3"/>
              <circle cx="567" cy="100" r="8" fill="#4ade80"><animate attributeName="r" values="6;11;6" dur="1.2s" repeatCount="indefinite"/></circle>
              <text x="646" y="114" font-size="9.5" font-weight="700" fill="#16a34a">Anti-IgG gắn huỳnh quang</text>
              <text x="567" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">Âm tính: Màu đỏ (nhuộm đối lập)</text>
            </svg>
          `;
        }
        if (s === 6) {
          return `
            <svg viewBox="0 0 760 285" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO H1.dc-6 (tr. 21): ĐƯỜNG KẾT TỦA TRONG PHƯƠNG PHÁP OUCHTERLONY</text>
              <rect x="130" y="38" width="290" height="232" rx="18" fill="#e2e8f0" stroke="#64748b" stroke-width="2.5"/>

              <circle cx="275" cy="154" r="34" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
              <text x="275" y="150" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">Asc.</text>
              <text x="275" y="164" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">suum</text>
              <circle cx="275" cy="154" r="40" fill="none" stroke="#4f46e5" stroke-width="2" opacity="0.6">
                <animate attributeName="r" values="36;66" dur="2.2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0" dur="2.2s" repeatCount="indefinite"/>
              </circle>

              <circle cx="275" cy="74" r="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
              <text x="275" y="72" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">Ser.</text>
              <text x="275" y="83" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">Oncho</text>

              <circle cx="352" cy="112" r="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
              <text x="352" y="110" text-anchor="middle" font-size="9" font-weight="800" fill="#0f172a">Ser.</text>
              <text x="352" y="121" text-anchor="middle" font-size="9" font-weight="800" fill="#0f172a">Oncho</text>

              <circle cx="352" cy="196" r="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
              <text x="352" y="192" text-anchor="middle" font-size="8.5" font-weight="800" fill="#0f172a">S.</text>
              <text x="352" y="201" text-anchor="middle" font-size="8.5" font-weight="800" fill="#0f172a">Oncho</text>
              <text x="352" y="210" text-anchor="middle" font-size="8.5" font-weight="800" fill="#0f172a">+ Med</text>

              <circle cx="275" cy="234" r="24" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
              <text x="275" y="232" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">Ser.</text>
              <text x="275" y="243" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">Med</text>

              <circle cx="198" cy="112" r="22" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
              <circle cx="198" cy="196" r="22" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>

              <path d="M242 110 L318 112 L342 152 L316 196 L246 198" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round">
                <animate attributeName="opacity" values="0.35;1;0.35" dur="2s" repeatCount="indefinite"/>
              </path>

              <rect x="444" y="54" width="290" height="196" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
              <text x="589" y="80" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">Giải mã Hình H1.dc-6</text>
              <text x="462" y="108" font-size="10.5" font-weight="700" fill="var(--text-main)">1. Giếng giữa (Asc. suum):</text>
              <text x="472" y="125" font-size="10" fill="var(--text-muted)">Chứa kháng nguyên hòa tan giun đũa.</text>
              <text x="462" y="150" font-size="10.5" font-weight="700" fill="var(--text-main)">2. Giếng xung quanh:</text>
              <text x="472" y="167" font-size="10" fill="var(--text-muted)">Huyết thanh kháng Onchocerca / Med.</text>
              <text x="462" y="194" font-size="10.5" font-weight="700" fill="var(--danger)">3. Đường kết tủa trong thạch:</text>
              <text x="472" y="211" font-size="10" fill="var(--text-main)">Hình thành ở vùng tương đương KN–KT</text>
              <text x="472" y="227" font-size="10" fill="var(--primary)">(minh họa Cộng đồng Kháng nguyên!).</text>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 760 285" class="proc-svg">
            <text x="380" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">TÁI TẠO H1.dc-7 (tr. 21): CUNG KẾT TỦA TRONG MIỄN DỊCH ĐIỆN DI</text>

            <rect x="64" y="46" width="380" height="202" rx="12" fill="#cbd5e1" stroke="#334155" stroke-width="2.5"/>
            <rect x="92" y="64" width="324" height="20" rx="4" fill="#1e293b"/>
            <text x="254" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#f8fafc">Rãnh Kháng huyết thanh (trên)</text>

            <circle cx="150" cy="146" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
            <text x="150" y="150" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">KN</text>
            <line x1="170" y1="146" x2="394" y2="146" stroke="#4f46e5" stroke-width="2" stroke-dasharray="5 3"/>
            <circle cx="180" cy="146" r="4" fill="#4f46e5"><animate attributeName="cx" values="164;384" dur="2.2s" repeatCount="indefinite"/></circle>

            <path d="M126 118 Q150 96 176 118" fill="none" stroke="#0f172a" stroke-width="3.5"/>
            <path d="M188 122 Q232 94 276 122" fill="none" stroke="#0f172a" stroke-width="3.5">
              <animate attributeName="opacity" values="0.35;1;0.35" dur="1.8s" repeatCount="indefinite"/>
            </path>
            <path d="M292 124 Q336 98 378 124" fill="none" stroke="#0f172a" stroke-width="3"/>

            <path d="M126 174 Q150 196 176 174" fill="none" stroke="#0f172a" stroke-width="3.5"/>
            <path d="M188 170 Q232 198 276 170" fill="none" stroke="#0f172a" stroke-width="3.5">
              <animate attributeName="opacity" values="0.35;1;0.35" dur="1.8s" repeatCount="indefinite"/>
            </path>

            <rect x="92" y="210" width="324" height="20" rx="4" fill="#1e293b"/>
            <text x="254" y="224" text-anchor="middle" font-size="10" font-weight="700" fill="#f8fafc">Rãnh Kháng huyết thanh (dưới)</text>

            <rect x="466" y="46" width="270" height="202" rx="12" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2"/>
            <text x="601" y="74" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">2 Bước Thực hiện</text>
            <text x="484" y="102" font-size="10.5" font-weight="700" fill="var(--primary)">Bước 1: Điện di Kháng nguyên</text>
            <text x="494" y="119" font-size="10" fill="var(--text-main)">Tách các phân đoạn KN theo điện tích.</text>
            <text x="484" y="146" font-size="10.5" font-weight="700" fill="var(--primary)">Bước 2: Khuếch tán Kháng huyết thanh</text>
            <text x="494" y="163" font-size="10" fill="var(--text-main)">KN và KT gặp nhau tạo CUNG KẾT TỦA.</text>
            <text x="484" y="194" font-size="10.5" font-weight="700" fill="var(--danger)">Cải tiến: Électrosynérèse (2 giờ)</text>
            <text x="494" y="211" font-size="10" fill="var(--text-main)">&amp; ELIEDA (nhuộm cung bằng men).</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 5: TÁI TẠO ĐẦY ĐỦ 5 BIỂU ĐỒ BỆNH ĐỘNG VẬT (Biểu đồ 2.2-1 → 2.2-5)
    // ======================================================================
    5: {
      title: "🎬 Tái tạo Động 5 Biểu đồ Kinh điển Bệnh Động vật Ký sinh (Biểu đồ 2.2-1 → 2.2-5)",
      steps: [
        {
          pill: "Biểu đồ 2.2-1",
          ref: "Biểu đồ 2.2-1 (tr. 505)",
          name: "Tái tạo Biểu đồ 2.2-1: Bệnh Động vật Hoàn chỉnh vs Chưa Hoàn chỉnh",
          desc: "<strong>Hoàn chỉnh (Holozoonoses):</strong> ĐV có xương sống ↔ Người (đều mang KST trưởng thành, mũi tên liền 2 chiều: <em>D. latum, P. westermani</em>). <strong>Chưa hoàn chỉnh (Parazoonoses):</strong> người có đẻ trứng nhưng tuổi thọ trứng giảm rất nhiều (mũi tên đứt nét).",
          highlight: "Lưu ý Câu 13: Taenia saginata KHÔNG xếp vào 2 nhóm này vì người là KCVV"
        },
        {
          pill: "Biểu đồ 2.2-2",
          ref: "Biểu đồ 2.2-2 (tr. 506)",
          name: "Tái tạo Biểu đồ 2.2-2: Bệnh Động vật Một chiều (Ngõ cụt Ký sinh)",
          desc: "Bình thường KST trưởng thành truyền khép kín giữa các động vật có xương sống; khi truyền sang <strong>Người</strong> chỉ phát triển đến <strong>giai đoạn ấu trùng / giai đoạn vô tính</strong> → mắc kẹt thành <strong>ngõ cụt ký sinh (<em>impasse parasitaire</em>)</strong>.",
          highlight: "VD: Toxoplasma gondii (vô tính ở người), Larva migrans, Echinococcus"
        },
        {
          pill: "Biểu đồ 2.2-3",
          ref: "Biểu đồ 2.2-3 (tr. 506)",
          name: "Tái tạo Biểu đồ 2.2-3: Bệnh Động vật Giả (KST Tùy nghi Ngoại cảnh)",
          desc: "Nguồn bệnh là <strong>KST tùy nghi sống tự do ở ngoại cảnh</strong> (đất, nước, thực vật...) rồi xâm nhập đồng thời nhưng độc lập vào <strong>Người</strong> và <strong>Động vật có xương sống</strong> (<em>Cryptococcus neoformans, Histoplasma capsulatum, Aspergillus</em>).",
          highlight: "Câu 3 (tr. 563): KST bắt buộc KHÔNG thể gây bệnh động vật giả!"
        },
        {
          pill: "Biểu đồ 2.2-4",
          ref: "Biểu đồ 2.2-4 (tr. 507)",
          name: "Tái tạo Biểu đồ 2.2-4: Tính Thích ứng của KST trong Nôi Sinh thái",
          desc: "KST trong <strong>Nôi sinh thái</strong> (ngoại cảnh / cơ thể ký chủ; gồm 5 yếu tố: thức ăn, lý, hóa, cơ, sinh) thích ứng tạo nên: (1) <strong>Tính đặc hiệu ký chủ</strong> (<em>sténoxène, oligoxène, euryxène, holoxène</em>) &amp; (2) <strong>Giai đoạn phát triển</strong> (Trưởng thành vs Ấu trùng/ngõ cụt).",
          highlight: "Giun không lột xác được thì không thể lên giai đoạn trưởng thành (Câu 6)"
        },
        {
          pill: "Biểu đồ 2.2-5",
          ref: "Biểu đồ 2.2-5 (tr. 508)",
          name: "Tái tạo Biểu đồ 2.2-5: Tính Năng động của KST Tương ứng Bệnh Động vật",
          desc: "KST xâm nhập ký chủ tách thành 2 nhánh: <strong>Năng động cao (giun tròn)</strong> → <em>Hội chứng Larva migrans</em> (Nội tạng: <em>Toxocara, Gnathostoma</em>; Ngoài da: <em>Ancylostoma, Uncinaria</em>) vs <strong>Năng động ít/không có</strong> → 6 bệnh định vị tại chỗ.",
          highlight: "Câu 14: Ấu trùng giun năng động cao vào người → Larva migrans"
        }
      ],
      renderSvg(s) {
        if (s === 0) {
          return `
            <svg viewBox="0 0 760 285" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">TÁI TẠO BIỂU ĐỒ 2.2-1 (tr. 505): BỆNH ĐỘNG VẬT HOÀN CHỈNH vs CHƯA HOÀN CHỈNH</text>

              <rect x="20" y="38" width="350" height="232" rx="14" fill="var(--success-light)" stroke="var(--success)" stroke-width="2"/>
              <rect x="44" y="54" width="128" height="50" rx="8" fill="var(--bg-card)" stroke="#0f172a" stroke-width="1.8"/>
              <text x="108" y="74" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">ĐV CÓ XƯƠNG SỐNG</text>
              <text x="108" y="90" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(KST trưởng thành)</text>

              <rect x="220" y="54" width="128" height="50" rx="8" fill="#16a34a" stroke="#14532d" stroke-width="1.8"/>
              <text x="284" y="74" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">NGƯỜI</text>
              <text x="284" y="90" text-anchor="middle" font-size="9.5" fill="#dcfce7">(KST trưởng thành)</text>

              <rect x="44" y="164" width="128" height="50" rx="8" fill="var(--bg-card)" stroke="#0f172a" stroke-width="1.8"/>
              <text x="108" y="184" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">ĐV CÓ XƯƠNG SỐNG</text>
              <text x="108" y="200" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(KST trưởng thành)</text>

              <rect x="220" y="164" width="128" height="50" rx="8" fill="var(--bg-card)" stroke="#0f172a" stroke-width="1.8"/>
              <text x="284" y="184" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">ĐV CÓ XƯƠNG SỐNG</text>
              <text x="284" y="200" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(KST trưởng thành)</text>

              <path d="M44 79 L28 79 L28 189 L44 189 M172 79 L220 79 M348 79 L360 79 L360 189 L348 189 M220 189 L172 189" fill="none" stroke="#15803d" stroke-width="3"/>
              <circle r="5" fill="#fbbf24"><animateMotion dur="3.5s" repeatCount="indefinite" path="M172,79 L360,79 L360,189 L28,189 L28,79 Z"/></circle>
              <text x="195" y="246" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--success)">Bệnh động vật hoàn chỉnh (Holozoonoses)</text>
              <text x="195" y="262" text-anchor="middle" font-size="9.8" fill="var(--text-main)">VD: D. latum, Paragonimus westermani</text>

              <rect x="390" y="38" width="350" height="232" rx="14" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2"/>
              <rect x="414" y="54" width="128" height="50" rx="8" fill="var(--bg-card)" stroke="#0f172a" stroke-width="1.8"/>
              <text x="478" y="74" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">ĐV CÓ XƯƠNG SỐNG</text>
              <text x="478" y="90" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(KST trưởng thành)</text>

              <rect x="590" y="54" width="128" height="50" rx="8" fill="#d97706" stroke="#78350f" stroke-width="1.8"/>
              <text x="654" y="74" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">NGƯỜI</text>
              <text x="654" y="90" text-anchor="middle" font-size="9.5" fill="#fef3c7">(Tuổi thọ trứng giảm!)</text>

              <rect x="414" y="164" width="128" height="50" rx="8" fill="var(--bg-card)" stroke="#0f172a" stroke-width="1.8"/>
              <text x="478" y="184" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">ĐV CÓ XƯƠNG SỐNG</text>
              <text x="478" y="200" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(KST trưởng thành)</text>

              <rect x="590" y="164" width="128" height="50" rx="8" fill="var(--bg-card)" stroke="#0f172a" stroke-width="1.8"/>
              <text x="654" y="184" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">ĐV CÓ XƯƠNG SỐNG</text>
              <text x="654" y="200" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(KST trưởng thành)</text>

              <path d="M414 79 L398 79 L398 189 L414 189" fill="none" stroke="#92400e" stroke-width="2.5"/>
              <path d="M542 79 L590 79 M718 79 L730 79 L730 189 L718 189 M590 189 L542 189" fill="none" stroke="#b45309" stroke-width="3" stroke-dasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite"/>
              </path>
              <text x="565" y="246" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">Bệnh động vật chưa hoàn chỉnh (Parazoonoses)</text>
              <text x="565" y="262" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Nét đứt = Tuổi thọ trứng giảm rất nhiều</text>
            </svg>
          `;
        }
        if (s === 1) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--danger)">TÁI TẠO BIỂU ĐỒ 2.2-2 (tr. 506): BỆNH ĐỘNG VẬT MỘT CHIỀU (NGÕ CỤT KÝ SINH)</text>

              <rect x="86" y="48" width="210" height="58" rx="10" fill="var(--bg-card)" stroke="#0f172a" stroke-width="2"/>
              <text x="191" y="72" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--text-main)">ĐV CÓ XƯƠNG SỐNG</text>
              <text x="191" y="90" text-anchor="middle" font-size="10.5" fill="var(--accent)">(KST trưởng thành)</text>

              <rect x="86" y="178" width="210" height="58" rx="10" fill="var(--bg-card)" stroke="#0f172a" stroke-width="2"/>
              <text x="191" y="202" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--text-main)">ĐV CÓ XƯƠNG SỐNG</text>
              <text x="191" y="220" text-anchor="middle" font-size="10.5" fill="var(--accent)">(KST trưởng thành)</text>

              <path d="M86 77 L54 77 L54 207 L86 207 M296 77 L328 77 L328 207 L296 207" fill="none" stroke="var(--accent)" stroke-width="3"/>
              <circle r="5.5" fill="#059669"><animateMotion dur="2.8s" repeatCount="indefinite" path="M86,77 L54,77 L54,207 L328,207 L328,77 Z"/></circle>

              <line x1="296" y1="77" x2="436" y2="77" stroke="var(--danger)" stroke-width="4"/>
              <circle cx="360" cy="77" r="5.5" fill="var(--danger)"><animate attributeName="cx" values="302;432" dur="1.6s" repeatCount="indefinite"/></circle>

              <rect x="442" y="46" width="256" height="86" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="3"/>
              <text x="570" y="74" text-anchor="middle" font-size="13" font-weight="800" fill="var(--danger)">NGƯỜI (NGÕ CỤT KÝ SINH)</text>
              <text x="570" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">(Ấu trùng, giai đoạn vô tính)</text>
              <text x="570" y="116" text-anchor="middle" font-size="10.5" font-weight="800" fill="#9f1239">⛔ KHÔNG quay lại được thú!</text>

              <rect x="442" y="154" width="256" height="90" rx="10" fill="var(--bg-card)" stroke="var(--border)"/>
              <text x="570" y="176" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">Ví dụ Chuẩn Sách (tr. 506, 563):</text>
              <text x="570" y="196" text-anchor="middle" font-size="10" fill="var(--text-main)">• Toxoplasma gondii (chu trình vô tính)</text>
              <text x="570" y="213" text-anchor="middle" font-size="10" fill="var(--text-main)">• Larva migrans (A. caninum, Toxocara)</text>
              <text x="570" y="230" text-anchor="middle" font-size="10" fill="var(--text-main)">• Echinococcus, Sparganum, Angiostrongylus</text>
            </svg>
          `;
        }
        if (s === 2) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--purple)">TÁI TẠO BIỂU ĐỒ 2.2-3 (tr. 506): BỆNH ĐỘNG VẬT GIẢ (KST TÙY NGHI NGOẠI CẢNH)</text>

              <rect x="54" y="88" width="234" height="114" rx="14" fill="var(--purple-light)" stroke="var(--purple)" stroke-width="3"/>
              <text x="171" y="118" text-anchor="middle" font-size="12" font-weight="800" fill="var(--purple)">KST tùy nghi ở NGOẠI CẢNH</text>
              <text x="171" y="138" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">(Đất, nước, thực vật...)</text>
              <text x="171" y="162" text-anchor="middle" font-size="10" fill="var(--text-muted)">Cryptococcus neoformans,</text>
              <text x="171" y="180" text-anchor="middle" font-size="10" fill="var(--text-muted)">Histoplasma capsulatum, Aspergillus</text>

              <line x1="288" y1="136" x2="454" y2="82" stroke="var(--purple)" stroke-width="3.5"/>
              <line x1="288" y1="154" x2="454" y2="208" stroke="var(--purple)" stroke-width="3.5"/>
              <text x="374" y="148" text-anchor="middle" font-size="11" font-weight="800" fill="var(--purple)">xâm nhập độc lập</text>
              <circle cx="370" cy="110" r="5" fill="#7c3aed"><animate attributeName="cx" values="294;448" dur="1.5s" repeatCount="indefinite"/><animate attributeName="cy" values="134;84" dur="1.5s" repeatCount="indefinite"/></circle>
              <circle cx="370" cy="180" r="5" fill="#7c3aed"><animate attributeName="cx" values="294;448" dur="1.5s" repeatCount="indefinite"/><animate attributeName="cy" values="156;206" dur="1.5s" repeatCount="indefinite"/></circle>

              <rect x="460" y="54" width="236" height="62" rx="12" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5"/>
              <text x="578" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">NGƯỜI</text>

              <rect x="460" y="176" width="236" height="62" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5"/>
              <text x="578" y="212" text-anchor="middle" font-size="13" font-weight="800" fill="var(--accent)">ĐỘNG VẬT CÓ XƯƠNG SỐNG</text>
            </svg>
          `;
        }
        if (s === 3) {
          return `
            <svg viewBox="0 0 760 285" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">TÁI TẠO BIỂU ĐỒ 2.2-4 (tr. 507): TÍNH THÍCH ỨNG CỦA KST GÂY BỆNH ĐỘNG VẬT</text>

              <rect x="190" y="38" width="214" height="72" rx="10" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5"/>
              <text x="297" y="60" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">KÝ SINH TRÙNG trong</text>
              <text x="297" y="78" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">NÔI SINH THÁI</text>
              <text x="297" y="96" text-anchor="middle" font-size="10" fill="var(--text-main)">• Ngoại cảnh • Cơ thể ký chủ</text>

              <rect x="424" y="38" width="210" height="72" rx="10" fill="var(--bg-card)" stroke="var(--border)"/>
              <text x="529" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="var(--accent)">5 Yếu tố Nôi sinh thái:</text>
              <text x="444" y="70" font-size="9.5" fill="var(--text-main)">a. Thức ăn (Glucid, đạm, lipid...)</text>
              <text x="444" y="83" font-size="9.5" fill="var(--text-main)">b. Sinh học (MD, men) | c. Cơ học</text>
              <text x="444" y="96" font-size="9.5" fill="var(--text-main)">d. Lý học (ánh sáng, nhiệt, ẩm, áp suất)</text>
              <text x="444" y="106" font-size="9.5" fill="var(--text-main)">e. Hóa học (oxy hóa khử, acid, kiềm)</text>

              <line x1="297" y1="110" x2="297" y2="146" stroke="var(--primary)" stroke-width="3"/>
              <rect x="308" y="114" width="90" height="22" rx="6" fill="var(--accent)"/>
              <text x="353" y="129" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">thích ứng</text>

              <path d="M168 166 L168 146 L526 146 L526 166" fill="none" stroke="var(--primary)" stroke-width="3"/>

              <rect x="34" y="168" width="308" height="102" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
              <text x="188" y="190" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">Tính đặc hiệu về ký chủ</text>
              <text x="54" y="210" font-size="10.5" fill="var(--text-main)">★ Hẹp (1 ký chủ): <tspan font-weight="800" fill="var(--primary)">sténoxène</tspan></text>
              <text x="54" y="226" font-size="10.5" fill="var(--text-main)">★ Tương đối hẹp (1–2): <tspan font-weight="800" fill="var(--primary)">oligoxène</tspan></text>
              <text x="54" y="242" font-size="10.5" fill="var(--text-main)">★ Rộng (nhiều): <tspan font-weight="800" fill="var(--primary)">euryxène</tspan></text>
              <text x="54" y="258" font-size="10.5" fill="var(--text-main)">★ Rất rộng (bất kỳ): <tspan font-weight="800" fill="var(--primary)">holoxène</tspan></text>

              <rect x="376" y="168" width="350" height="102" rx="12" fill="var(--bg-card)" stroke="var(--danger)" stroke-width="2"/>
              <text x="551" y="190" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Giai đoạn phát triển</text>
              <text x="394" y="216" font-size="10.8" font-weight="700" fill="var(--success)">★ Trưởng thành → Ký chủ vĩnh viễn</text>
              <text x="394" y="238" font-size="10.8" font-weight="700" fill="var(--danger)">★ Ấu trùng → KCTG / Ngõ cụt ký sinh</text>
              <text x="394" y="256" font-size="9.8" fill="var(--text-muted)">(do thiếu điều kiện lột xác lên trưởng thành)</text>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 760 285" class="proc-svg">
            <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">TÁI TẠO BIỂU ĐỒ 2.2-5 (tr. 508): TÍNH NĂNG ĐỘNG KST TƯƠNG ỨNG BỆNH ĐỘNG VẬT</text>

            <rect x="266" y="36" width="228" height="34" rx="8" fill="var(--primary)" stroke="var(--primary-dark)"/>
            <text x="380" y="58" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">KST xâm nhập ký chủ</text>
            <path d="M190 92 L190 78 L570 78 L570 92" fill="none" stroke="var(--primary)" stroke-width="3"/>
            <line x1="380" y1="70" x2="380" y2="78" stroke="var(--primary)" stroke-width="3"/>

            <rect x="30" y="94" width="320" height="44" rx="10" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2.5"/>
            <text x="190" y="114" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Tính năng động CAO (giun tròn)</text>
            <text x="190" y="130" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Di chuyển vô vọng tìm cơ quan lột xác</text>

            <line x1="190" y1="138" x2="190" y2="156" stroke="var(--danger)" stroke-width="2.5"/>
            <rect x="86" y="156" width="208" height="28" rx="6" fill="var(--danger)"/>
            <text x="190" y="174" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">Hội chứng Larva Migrans</text>
            <path d="M106 198 L106 188 L274 188 L274 198" fill="none" stroke="var(--danger)" stroke-width="2.5"/>

            <rect x="26" y="200" width="160" height="72" rx="10" fill="var(--bg-card)" stroke="var(--danger)"/>
            <text x="106" y="218" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">Nội tạng</text>
            <text x="106" y="236" text-anchor="middle" font-size="10" fill="var(--text-main)">Toxocara spp.</text>
            <text x="106" y="254" text-anchor="middle" font-size="10" fill="var(--text-main)">Gnathostoma spp.</text>

            <rect x="196" y="200" width="160" height="72" rx="10" fill="var(--bg-card)" stroke="var(--warning)"/>
            <text x="276" y="218" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warning)">Ngoài da</text>
            <text x="276" y="236" text-anchor="middle" font-size="10" fill="var(--text-main)">Ancylostoma spp.</text>
            <text x="276" y="254" text-anchor="middle" font-size="10" fill="var(--text-main)">Uncinaria sp.</text>

            <rect x="410" y="94" width="320" height="44" rx="10" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5"/>
            <text x="570" y="114" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">Tính năng động ÍT hoặc KHÔNG CÓ</text>
            <text x="570" y="130" text-anchor="middle" font-size="9.5" fill="var(--text-main)">(Sán, đơn bào... một số ít giun)</text>

            <line x1="570" y1="138" x2="570" y2="156" stroke="var(--accent)" stroke-width="2.5"/>
            <rect x="410" y="158" width="320" height="114" rx="10" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2"/>
            <text x="430" y="178" font-size="10.2" font-weight="700" fill="var(--text-main)">– Viêm da do sán máng</text>
            <text x="430" y="195" font-size="10.2" font-weight="700" fill="var(--text-main)">– Bệnh do Sparganum • Bệnh do Cenurus</text>
            <text x="430" y="212" font-size="10.2" font-weight="700" fill="var(--text-main)">– Bệnh do Echinococcus</text>
            <text x="430" y="229" font-size="10.2" font-weight="700" fill="var(--text-main)">– Bệnh do Toxoplasma</text>
            <text x="430" y="246" font-size="10.2" font-weight="700" fill="var(--primary)">– Viêm màng não – não do Angiostrongylus</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 6: LARVA MIGRANS NGOÀI DA & NỘI TẠNG
    // ======================================================================
    6: {
      title: "🎬 Hoạt cảnh Minh họa Quá trình Di chuyển của 3 Tác nhân Larva migrans",
      steps: [
        {
          pill: "1. Ngoài da (A. caninum)",
          ref: "Mục 5.1 (tr. 509–510)",
          name: "Larva migrans Ngoài da: Vì sao Ấu trùng Bị kẹt Dưới da Người?",
          desc: "Ấu trùng <em>filariform</em> (<em>A. caninum, A. braziliense, U. stenocephala</em>) chui qua da tiếp xúc đất cát. Nhưng <strong>men collagenase KHÔNG làm tiêu được vách tĩnh mạch người</strong> → không về phổi được → bò lang thang tạo đường gồ ngoằn ngoèo vài mm–cm/ngày.",
          highlight: "Không gây xuất huyết đường ruột ở người (Câu 7)"
        },
        {
          pill: "2. Nội tạng (Toxocara)",
          ref: "Mục 5.2 (tr. 510–511)",
          name: "Larva migrans Nội tạng (Toxocara canis / T. cati): Chó con → Trẻ 1–4 tuổi & Mắt",
          desc: "80% chó nhiệt đới nhiễm (200.000 trứng/ngày; chó mẹ truyền qua nhau &amp; sữa). Trẻ 1–4 tuổi nuốt trứng → <strong>ấu trùng II (L2)</strong> theo máu lên gan, phổi, não, mắt... gây BC 10–100k, BCTT 50–80% (<em>cẩn thận thể mắt BC có thể không tăng!</em>).",
          highlight: "ELISA ES antigen • Sinh thiết gan chỉ giá trị 20%"
        },
        {
          pill: "3. Gnathostoma spinigerum",
          ref: "Mục 5.3 (tr. 511–513)",
          name: "Gnathostoma spinigerum: 2 KCTG (Cyclops → Cá lóc/Ếch/Rắn) & Di chuyển 17 năm",
          desc: "Bướu bao tử chó mèo → trứng nút 1 cực → <strong>KCTG I: <em>Cyclops</em> sp.</strong> (L2 4 hàng móc) → <strong>KCTG II: cá, ếch, lươn, rắn</strong> (L3). Người ăn <strong>cá lóc nướng trui, mắm thái</strong> → giun non đi khắp gan, xoang bụng, mắt, da kéo dài đến <strong>17 năm</strong>!",
          highlight: "BCTT 50–80% • Ngâm cá dấm đậm đặc 5 giờ 30 phút"
        }
      ],
      renderSvg(s) {
        if (s === 0) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--danger)">MẶT CẮT DA NGƯỜI: CƠ CHẾ LARVA MIGRANS NGOÀI DA (A. caninum, A. braziliense)</text>

              <rect x="40" y="48" width="440" height="44" rx="6" fill="#fed7aa" stroke="#ea580c"/>
              <text x="260" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#9a3412">Biểu bì (Epidermis) – Đường gồ ngoằn ngoèo vài mm–cm/ngày</text>

              <rect x="40" y="92" width="440" height="84" rx="6" fill="#fecdd3" stroke="#e11d48"/>
              <text x="260" y="114" text-anchor="middle" font-size="10.5" font-weight="700" fill="#881337">Mô dưới da (Bò lang thang → Bóng nước, ngứa đêm)</text>

              <rect x="40" y="176" width="440" height="58" rx="8" fill="#9f1239" opacity="0.88"/>
              <text x="260" y="210" text-anchor="middle" font-size="11.5" font-weight="800" fill="#fff">Thành Tĩnh mạch Người — ⛔ Collagenase KHÔNG tiêu được!</text>

              <path d="M96 42 L116 122 Q150 165 186 128 Q226 96 270 132 Q314 166 364 126 Q400 100 440 130" fill="none" stroke="#e11d48" stroke-width="5" stroke-linecap="round"/>
              <circle r="6" fill="#fbbf24" stroke="#78350f" stroke-width="1.5">
                <animateMotion dur="3.4s" repeatCount="indefinite" path="M96,42 L116,122 Q150,165 186,128 Q226,96 270,132 Q314,166 364,126 Q400,100 440,130"/>
              </circle>

              <rect x="500" y="48" width="236" height="186" rx="12" fill="var(--bg-card)" stroke="var(--danger)" stroke-width="2"/>
              <text x="618" y="74" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Chẩn đoán &amp; Phác đồ</text>
              <text x="516" y="100" font-size="10" fill="var(--text-main)">• Sau 2–3 ngày nổi đường gồ đỏ</text>
              <text x="516" y="118" font-size="10" fill="var(--text-main)">• Tự lành vài tuần – vài tháng</text>
              <text x="516" y="136" font-size="10" font-weight="700" fill="var(--primary)">• Hiếm gặp: lên phổi (Loeffler)</text>
              <text x="516" y="160" font-size="10" font-weight="700" fill="var(--success)">• Thiabendazole 25mg/kg × 3–5d</text>
              <text x="516" y="178" font-size="10" font-weight="700" fill="var(--success)">• Flubendazole 500mg × 7d</text>
              <text x="516" y="196" font-size="10" font-weight="700" fill="var(--success)">• Albendazole 400mg/d × 3d</text>
              <text x="516" y="214" font-size="9.5" fill="var(--text-muted)">• Bôi HCH, Lindane 1%, etylchlorur</text>
            </svg>
          `;
        }
        if (s === 1) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">CHU TRÌNH &amp; DI CHUYỂN NỘI TẠNG CỦA TOXOCARA CANIS (tr. 510–511)</text>

              <rect x="20" y="54" width="166" height="162" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2"/>
              <text x="103" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="#92400e">Chó (&lt; 3–6 tháng)</text>
              <text x="103" y="98" text-anchor="middle" font-size="10" fill="var(--text-main)">80% chó nhiệt đới nhiễm</text>
              <text x="103" y="116" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">200.000 trứng / ngày</text>
              <text x="103" y="140" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Chó mẹ truyền qua</text>
              <text x="103" y="156" text-anchor="middle" font-size="9.8" font-weight="700" fill="#92400e">Lá nhau &amp; Tuyến vú</text>
              <text x="103" y="182" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Chó lớn miễn dịch đẩy ra)</text>

              <line x1="186" y1="134" x2="226" y2="134" stroke="var(--warning)" stroke-width="3"/>
              <circle cx="206" cy="134" r="5" fill="#d97706"><animate attributeName="cx" values="188;224" dur="1.2s" repeatCount="indefinite"/></circle>

              <rect x="228" y="54" width="176" height="162" rx="12" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2"/>
              <text x="316" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">Trẻ 1–4 tuổi / Người lớn</text>
              <text x="316" y="102" text-anchor="middle" font-size="10" fill="var(--text-main)">Nuốt trứng từ đất / chó</text>
              <text x="316" y="122" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">Ấu trùng II (L2)</text>
              <text x="316" y="140" text-anchor="middle" font-size="10" fill="var(--text-main)">chui vách ruột → vào máu</text>
              <text x="316" y="168" text-anchor="middle" font-size="10" font-weight="700" fill="var(--primary)">Sống nhiều tháng/năm</text>
              <text x="316" y="186" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Ngõ cụt ký sinh)</text>

              <path d="M404 126 L448 76 M404 134 L448 134 M404 142 L448 192" stroke="var(--danger)" stroke-width="2.5"/>

              <rect x="450" y="48" width="290" height="56" rx="10" fill="var(--danger-light)" stroke="var(--danger)"/>
              <text x="595" y="72" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">Gan – Phổi – Tim – Não (Trẻ 1–4t)</text>
              <text x="595" y="90" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Gan to cứng nhẵn, khò khè suyễn, mề đay, phù Quinck</text>

              <rect x="450" y="114" width="290" height="56" rx="10" fill="var(--purple-light)" stroke="var(--purple)"/>
              <text x="595" y="138" text-anchor="middle" font-size="11" font-weight="800" fill="var(--purple)">Thể Mắt (Thường ở Người lớn)</text>
              <text x="595" y="156" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--danger)">Viêm hạt võng mạc • Coi chừng BC có thể KHÔNG tăng!</text>

              <rect x="450" y="180" width="290" height="56" rx="10" fill="var(--accent-light)" stroke="var(--accent)"/>
              <text x="595" y="202" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">BC 10–100k • BCTT 50–80% • Globulin ×10–15</text>
              <text x="595" y="220" text-anchor="middle" font-size="9.5" fill="var(--text-main)">ELISA ES antigen • Thiabendazole 50mg/kg | Notezin 6mg/kg</text>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 760 280" class="proc-svg">
            <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">CHU TRÌNH 2 KCTG &amp; DI CHUYỂN ĐẾN 17 NĂM CỦA GNATHOSTOMA SPINIGERUM (tr. 511–512)</text>

            <rect x="18" y="54" width="154" height="154" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
            <text x="95" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">KCVV: Chó, Mèo</text>
            <text x="95" y="96" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Bướu vách bao tử</text>
            <text x="95" y="114" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Đầu phình 4–8 hàng móc</text>
            <text x="95" y="132" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Trứng nút trong suốt</text>
            <text x="95" y="150" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--accent)">Trưởng thành: 6 tháng</text>

            <line x1="172" y1="130" x2="202" y2="130" stroke="var(--primary)" stroke-width="3"/>
            <circle cx="187" cy="130" r="4.5" fill="#e11d48"><animate attributeName="cx" values="174;200" dur="1.1s" repeatCount="indefinite"/></circle>

            <rect x="204" y="54" width="144" height="154" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2"/>
            <text x="276" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warning)">KCTG I: Cyclops</text>
            <circle cx="276" cy="116" r="22" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
            <text x="276" y="120" text-anchor="middle" font-size="9.5" font-weight="800" fill="#991b1b">L2 (4 hàng móc)</text>
            <text x="276" y="160" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Lăng quăng đỏ nuốt</text>
            <text x="276" y="176" text-anchor="middle" font-size="9.8" fill="var(--text-main)">ấu trùng từ phân</text>

            <line x1="348" y1="130" x2="378" y2="130" stroke="var(--warning)" stroke-width="3"/>
            <circle cx="363" cy="130" r="4.5" fill="#d97706"><animate attributeName="cx" values="350;376" dur="1.1s" repeatCount="indefinite"/></circle>

            <rect x="380" y="54" width="160" height="154" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2"/>
            <text x="460" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">KCTG II (L3 ở bắp cơ)</text>
            <text x="460" y="102" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Cá, Ếch, Lươn, Rắn</text>
            <text x="460" y="128" text-anchor="middle" font-size="10" font-weight="800" fill="var(--danger)">Món VN (tr. 512):</text>
            <text x="460" y="146" text-anchor="middle" font-size="10" font-weight="700" fill="#9f1239">• Cá lóc nướng trui</text>
            <text x="460" y="164" text-anchor="middle" font-size="10" font-weight="700" fill="#9f1239">• Mắm thái</text>
            <text x="460" y="188" text-anchor="middle" font-size="9" fill="var(--accent)">Ngâm giấm 5h30' diệt được</text>

            <line x1="540" y1="130" x2="570" y2="130" stroke="var(--danger)" stroke-width="3"/>
            <circle cx="555" cy="130" r="4.5" fill="#e11d48"><animate attributeName="cx" values="542;568" dur="1.1s" repeatCount="indefinite"/></circle>

            <rect x="572" y="44" width="170" height="176" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2.5"/>
            <text x="657" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">NGƯỜI (Giun non 17 năm)</text>
            <text x="657" y="92" text-anchor="middle" font-size="9.8" fill="var(--text-main)">• Gan to, bướu giả viêm</text>
            <text x="657" y="110" text-anchor="middle" font-size="9.8" fill="var(--text-main)">• Mắt (viêm mống mắt/X.huyết)</text>
            <text x="657" y="128" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--danger)">• Da: Cục u di động</text>
            <text x="657" y="150" text-anchor="middle" font-size="9.8" font-weight="800" fill="var(--primary)">BC 100k • BCTT 50–80%</text>
            <text x="657" y="172" text-anchor="middle" font-size="9.5" fill="var(--text-main)">• Rạch gắp giun / nội bì</text>
            <text x="657" y="190" text-anchor="middle" font-size="9.5" fill="var(--text-main)">• DEC Hetrazan 0,5–0,7mg/kg</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 7: ANGIOSTRONGYLUS, ANISAKIS & BỘ 4 HÌNH ECHINOCOCCUS (H 1.4-33..36)
    // ======================================================================
    7: {
      title: "🎬 Tái tạo Động: Angiostrongylus, Anisakis & Bộ Hình Echinococcus / Hydatid (H 1.4-33..36)",
      steps: [
        {
          pill: "1. Angiostrongylus",
          ref: "Mục 5.4 (tr. 513–514)",
          name: "Chu trình & Xâm nhập Màng não của Angiostrongylus cantonensis",
          desc: "ĐM phổi chuột ↔ ốc (<strong><em>Achatina fulica, Pila ampullacea</em></strong> chứa L3; tôm/cua/đỉa phiến). Ở chuột: lên não sau 7 giờ, lưu 2 tuần → ĐM phổi. Ở người: mắc kẹt ở màng não → <strong>DNT 400–500 TB/mm³ (40–50% BCTT)</strong>, dấu màng não 15%, liệt TK VII, song thị.",
          highlight: "Chưa có thuốc đặc hiệu • Chọc dò DNT giảm áp lực"
        },
        {
          pill: "2. Anisakis Biển",
          ref: "Mục 5.5 (tr. 514–515)",
          name: "Chu trình Biển Anisakinae & U hạt Dạ dày – Ruột (Đông lạnh -20°C / 24h)",
          desc: "Bao tử cá voi/cá heo → giáp xác biển → cá thu, cá hồi, mực (L3). Người ăn cá sống → u hạt BCTT giả loét/giả ung thư/tắc ruột. <strong>Giải phẫu cắt u hạt</strong> là duy nhất hiệu quả. Dự phòng: nấu chín hoặc <strong>-20°C × 24h</strong> (muối/hun khói vô hiệu!).",
          highlight: "Muối cá & hun khói KHÔNG diệt được ấu trùng Anisakis"
        },
        {
          pill: "3. Cấu trúc Nang Hydatid",
          ref: "H 1.4-33..35 (tr. 277–278, 515)",
          name: "Tái tạo H 1.4-33, H 1.4-34 & H 1.4-35: Sán 3 đốt & Các Lớp Nang Hydatid",
          desc: "Sán trưởng thành dài <strong>3–6 mm</strong> (3 đốt, 45–60 tinh hoàn). Nang Hydatid từ ngoài vào trong: <strong>Màng cứng</strong> (mô ký chủ) → <strong>Màng phiến 1 mm</strong> (thẩm thấu chọn lọc) → <strong>Lớp sinh mầm</strong> → <strong>Bọc sinh mầm</strong> → <strong>Cát sán (2.000.000 đầu sán)</strong> &amp; bướu con nội/ngoại sinh.",
          highlight: "TUYỆT ĐỐI CẤM chọc hút bướu sán (nguy cơ shock phản vệ tử vong!)"
        },
        {
          pill: "4. Chu trình H 1.4-36",
          ref: "H 1.4-36 (tr. 279, 516–517)",
          name: "Tái tạo H 1.4-36: Chu trình Chó – Cừu – Người & Phân bố Bướu Theo Cơ quan",
          desc: "Chó (KCVV) ↔ Cừu (KCTG) → Người (vuốt lông chó, ăn rau sống; người nuôi chó nguy cơ cao ×21): <strong>Gan &amp; phúc mạc 66% (&gt;75% thùy phải)</strong>, <strong>Phổi 22%</strong>, Thận 3%, Xương 2%, Khác 6%. Casoni (+) lâu năm; <strong>CFT (-) sau mổ khi hết bướu</strong>!",
          highlight: "Mổ hút dịch + Bơm Formalin 10% • Albendazole 14mg/kg × 28 ngày"
        }
      ],
      renderSvg(s) {
        if (s === 0) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">CHU TRÌNH &amp; VIÊM MÀNG NÃO TĂNG BCTT DO ANGIOSTRONGYLUS CANTONENSIS (tr. 513–514)</text>

              <rect x="20" y="54" width="166" height="156" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
              <text x="103" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">Chuột (KCVV)</text>
              <text x="103" y="100" text-anchor="middle" font-size="10" fill="var(--text-main)">Trưởng thành ở ĐM phổi</text>
              <text x="103" y="120" text-anchor="middle" font-size="9.8" fill="var(--text-muted)">Phôi 6 ngày → L1 theo phân</text>
              <text x="103" y="148" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--accent)">Nuốt L3 → Não (7 giờ,</text>
              <text x="103" y="164" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--accent)">2 tuần) → ĐM phổi</text>

              <line x1="186" y1="130" x2="222" y2="130" stroke="var(--primary)" stroke-width="3"/>
              <circle cx="204" cy="130" r="4.5" fill="#4f46e5"><animate attributeName="cx" values="188;220" dur="1.1s" repeatCount="indefinite"/></circle>

              <rect x="224" y="54" width="192" height="156" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2.5"/>
              <text x="320" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">KCTG: Ốc sên (L3)</text>
              <circle cx="320" cy="118" r="24" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
              <text x="320" y="115" text-anchor="middle" font-size="9.5" font-weight="800" fill="#78350f">Achatina fulica</text>
              <text x="320" y="129" text-anchor="middle" font-size="9" fill="#92400e">Pila ampullacea</text>
              <text x="320" y="164" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">+ Tôm, cua, đỉa phiến</text>
              <text x="320" y="182" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(nuốt ốc chứa L3)</text>

              <line x1="416" y1="130" x2="452" y2="130" stroke="var(--danger)" stroke-width="3"/>
              <circle cx="434" cy="130" r="4.5" fill="#e11d48"><animate attributeName="cx" values="418;450" dur="1.1s" repeatCount="indefinite"/></circle>

              <rect x="454" y="42" width="286" height="186" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2.5"/>
              <text x="597" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">NGƯỜI: Màng não – Não</text>
              <text x="597" y="92" text-anchor="middle" font-size="10.2" font-weight="700" fill="var(--text-main)">• Nhức đầu dữ dội, sốt nhẹ/không sốt</text>
              <text x="597" y="110" text-anchor="middle" font-size="10.2" font-weight="700" fill="var(--danger)">• 15% dấu màng não • Liệt TK VII, song thị</text>
              <text x="597" y="132" text-anchor="middle" font-size="10.2" font-weight="800" fill="var(--primary)">• DNT: Trong/đục, vô khuẩn, albumin ↑</text>
              <text x="597" y="150" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--primary)">  400–500 TB/mm³ (40–50% BCTT)</text>
              <text x="597" y="172" text-anchor="middle" font-size="9.8" fill="var(--text-main)">• Rất hiếm thấy giun non trong DNT</text>
              <text x="597" y="196" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Điều trị triệu chứng (Chọc dò giảm áp DNT)</text>
            </svg>
          `;
        }
        if (s === 1) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">CHU TRÌNH BIỂN ANISAKINAE &amp; KIỂM CHỨNG AN TOÀN THỰC PHẨM (tr. 514–515)</text>

              <rect x="20" y="52" width="166" height="106" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
              <text x="103" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">Hữu nhũ Biển</text>
              <text x="103" y="96" text-anchor="middle" font-size="9.8" fill="#0f172a">Cá voi, Cá heo, Hải cẩu</text>
              <text x="103" y="114" text-anchor="middle" font-size="9.5" fill="#475569">Trứng nở nước biển</text>
              <text x="103" y="130" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">5–7°C sau 20–30 ngày</text>

              <line x1="186" y1="104" x2="212" y2="104" stroke="#0284c7" stroke-width="2.5"/>
              <rect x="214" y="52" width="148" height="106" rx="10" fill="var(--bg-card)" stroke="#0284c7" stroke-width="2"/>
              <text x="288" y="80" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">Giáp xác &amp; Cá biển</text>
              <text x="288" y="102" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Tôm biển (L2) → Cá mòi,</text>
              <text x="288" y="118" text-anchor="middle" font-size="9.8" fill="var(--text-main)">cá thu, cá hồi, mực (L3)</text>

              <line x1="362" y1="104" x2="394" y2="104" stroke="var(--danger)" stroke-width="3"/>
              <circle cx="378" cy="104" r="4.5" fill="#e11d48"><animate attributeName="cx" values="364;392" dur="1.1s" repeatCount="indefinite"/></circle>

              <rect x="396" y="46" width="344" height="118" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2"/>
              <text x="568" y="70" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">NGƯỜI ĂN CÁ BIỂN SỐNG → U HẠT BCTT</text>
              <text x="568" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• Thể bao tử: Giả loét, GIẢ UNG THƯ, XHTH</text>
              <text x="568" y="110" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• Thể ruột: Tắc ruột / Giả tắc ruột</text>
              <text x="568" y="132" text-anchor="middle" font-size="10.2" font-weight="800" fill="var(--primary)">⭐ Điều trị duy nhất hiệu quả: CẮT BỎ U HẠT (Nội soi/Phẫu thuật)</text>

              <rect x="20" y="180" width="342" height="76" rx="10" fill="var(--danger-light)" stroke="var(--danger)"/>
              <text x="191" y="206" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">❌ MUỐI CÁ hoặc HUN KHÓI</text>
              <text x="191" y="228" text-anchor="middle" font-size="10.5" fill="var(--text-main)">KHÔNG làm chết được ấu trùng Anisakis!</text>

              <rect x="396" y="180" width="344" height="76" rx="10" fill="var(--success-light)" stroke="var(--success)"/>
              <text x="568" y="206" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--success)">✅ ĐÔNG LẠNH -20°C × 24 GIỜ / NẤU CHÍN</text>
              <text x="568" y="228" text-anchor="middle" font-size="10.5" fill="var(--text-main)">Diệt hoàn toàn ấu trùng L3 trong cá &amp; mực biển</text>
            </svg>
          `;
        }
        if (s === 2) {
          return `
            <svg viewBox="0 0 760 295" class="proc-svg">
              <text x="380" y="20" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">TÁI TẠO H 1.4-33..35 (tr. 277–278, 515): SÁN ECHINOCOCCUS (3 ĐỐT) &amp; CẤU TRÚC NANG HYDATID</text>

              <rect x="18" y="38" width="176" height="240" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
              <text x="106" y="58" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">H 1.4-33: Sán 3–6 mm</text>
              <circle cx="106" cy="84" r="11" fill="#e0e7ff" stroke="#3730a3" stroke-width="2"/>
              <circle cx="101" cy="84" r="2.5" fill="#3730a3"/><circle cx="111" cy="84" r="2.5" fill="#3730a3"/>
              <rect x="99" y="95" width="14" height="14" fill="#c7d2fe" stroke="#3730a3"/>
              <rect x="94" y="109" width="24" height="26" rx="4" fill="#a5b4fc" stroke="#3730a3"/>
              <rect x="90" y="135" width="32" height="44" rx="5" fill="#818cf8" stroke="#3730a3"/>
              <circle cx="106" cy="148" r="2" fill="#fff"/><circle cx="101" cy="156" r="2" fill="#fff"/><circle cx="111" cy="156" r="2" fill="#fff"/>
              <rect x="86" y="179" width="40" height="62" rx="8" fill="#4f46e5" stroke="#312e81"/>
              <text x="106" y="210" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">Đốt già</text>
              <text x="106" y="222" text-anchor="middle" font-size="8" fill="#e0e7ff">(Vài trăm trứng)</text>
              <text x="106" y="258" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">3 đốt • 45–60 tinh hoàn</text>

              <circle cx="388" cy="158" r="110" fill="#475569" opacity="0.2" stroke="#334155" stroke-width="5"/>
              <circle cx="388" cy="158" r="98" fill="#fef3c7" stroke="#d97706" stroke-width="7"/>
              <circle cx="388" cy="158" r="88" fill="#e0f2fe" stroke="#0284c7" stroke-width="3" stroke-dasharray="6 3"/>

              <circle cx="348" cy="126" r="20" fill="#fff" stroke="#059669" stroke-width="2">
                <animate attributeName="r" values="19;22;19" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="344" cy="122" r="4" fill="#059669"/><circle cx="354" cy="130" r="4" fill="#059669"/>
              <circle cx="430" cy="126" r="18" fill="#fff" stroke="#059669" stroke-width="2"/>
              <circle cx="428" cy="124" r="4" fill="#059669"/>
              <circle cx="346" cy="192" r="19" fill="#fff" stroke="#7c3aed" stroke-width="2"/>
              <circle cx="346" cy="192" r="6" fill="#7c3aed"/>

              <circle cx="496" cy="70" r="14" fill="#e0f2fe" stroke="#059669" stroke-width="2"/>
              <text x="518" y="74" font-size="9.5" font-weight="800" fill="var(--accent)">Nang ngoại sinh</text>

              <ellipse cx="408" cy="212" rx="46" ry="18" fill="#fbbf24" opacity="0.55"/>
              <text x="408" y="216" text-anchor="middle" font-size="9" font-weight="800" fill="#78350f">Cát sán (2 triệu đầu sán)</text>

              <line x1="486" y1="108" x2="538" y2="108" stroke="#334155" stroke-width="2"/>
              <text x="544" y="112" font-size="10.2" font-weight="700" fill="var(--text-main)">1. Màng cứng (Mô sợi ký chủ)</text>
              <line x1="482" y1="134" x2="538" y2="134" stroke="#d97706" stroke-width="2"/>
              <text x="544" y="138" font-size="10.2" font-weight="700" fill="#d97706">2. Màng phiến (1mm, thấm chọn lọc)</text>
              <line x1="472" y1="160" x2="538" y2="160" stroke="#0284c7" stroke-width="2"/>
              <text x="544" y="164" font-size="10.2" font-weight="700" fill="#0284c7">3. Lớp sinh mầm (Có nhân → đầu sán)</text>
              <line x1="448" y1="186" x2="538" y2="186" stroke="#059669" stroke-width="2"/>
              <text x="544" y="190" font-size="10.2" font-weight="700" fill="var(--accent)">4. Bọc sinh mầm &amp; Bướu con nội sinh</text>

              <rect x="536" y="212" width="210" height="62" rx="8" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2"/>
              <text x="641" y="232" text-anchor="middle" font-size="10" font-weight="800" fill="var(--danger)">⛔ CẤM CHỌC HÚT BƯỚU SÁN!</text>
              <text x="641" y="248" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Vỡ → Shock phản vệ + bướu thứ phát</text>
              <text x="641" y="264" text-anchor="middle" font-size="9.2" fill="var(--text-muted)">(Mất đầu sán = Sterile cyst)</text>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 760 285" class="proc-svg">
            <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">TÁI TẠO H 1.4-36 (tr. 279, 516–517): CHU TRÌNH CHÓ – CỪU – NGƯỜI &amp; PHÂN BỐ BƯỚU</text>

            <rect x="24" y="46" width="194" height="86" rx="12" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2"/>
            <text x="121" y="72" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">KCVV: Chó, Chó sói</text>
            <text x="121" y="92" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Thải trứng theo phân/dính lông</text>
            <text x="121" y="110" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--danger)">Người nuôi chó nguy cơ ×21</text>

            <rect x="24" y="176" width="194" height="84" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2"/>
            <text x="121" y="202" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">KCTG: Cừu, Trâu bò</text>
            <text x="121" y="222" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Mang bướu Hydatid ở phổi/gan</text>
            <text x="121" y="240" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Chó ăn tạng cừu quanh lò mổ)</text>

            <path d="M90 132 L90 176 M152 176 L152 132" stroke="var(--accent)" stroke-width="2.5"/>
            <circle cx="90" cy="154" r="4.5" fill="#4f46e5"><animate attributeName="cy" values="134;174" dur="1.4s" repeatCount="indefinite"/></circle>

            <line x1="218" y1="88" x2="278" y2="128" stroke="var(--danger)" stroke-width="3"/>
            <circle cx="248" cy="108" r="5" fill="#e11d48"><animate attributeName="cx" values="220;276" dur="1.4s" repeatCount="indefinite"/><animate attributeName="cy" values="89;127" dur="1.4s" repeatCount="indefinite"/></circle>

            <rect x="284" y="46" width="452" height="214" rx="14" fill="var(--bg-card)" stroke="var(--danger)" stroke-width="2.5"/>
            <text x="510" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">NGƯỜI (Ngõ cụt cảnh ngộ): Phân bố Vị trí Bướu sán (tr. 516)</text>

            <text x="304" y="102" font-size="10.5" font-weight="700" fill="var(--text-main)">Gan &amp; Phúc mạc (&gt;75% thùy phải)</text>
            <rect x="520" y="88" width="160" height="18" rx="4" fill="var(--danger)"/><text x="688" y="101" font-size="11" font-weight="800" fill="var(--danger)">66%</text>

            <text x="304" y="130" font-size="10.5" font-weight="700" fill="var(--text-main)">Phổi (Ho, vỡ khạc đầu sán)</text>
            <rect x="520" y="116" width="60" height="18" rx="4" fill="var(--warning)"/><text x="588" y="129" font-size="11" font-weight="800" fill="var(--warning)">22%</text>

            <text x="304" y="158" font-size="10.5" font-weight="700" fill="var(--text-main)">Thận (Đau lưng, tiểu máu)</text>
            <rect x="520" y="144" width="16" height="18" rx="4" fill="var(--primary)"/><text x="544" y="157" font-size="11" font-weight="800" fill="var(--primary)">3%</text>

            <text x="304" y="186" font-size="10.5" font-weight="700" fill="var(--text-main)">Xương (Xốp dễ gãy, không đầu sán)</text>
            <rect x="520" y="172" width="12" height="18" rx="4" fill="var(--purple)"/><text x="540" y="185" font-size="11" font-weight="800" fill="var(--purple)">2%</text>

            <text x="304" y="214" font-size="10.5" font-weight="700" fill="var(--text-main)">Cơ quan khác (Não, lách, tim, mắt)</text>
            <rect x="520" y="200" width="26" height="18" rx="4" fill="#64748b"/><text x="554" y="213" font-size="11" font-weight="800" fill="#475569">6%</text>

            <text x="510" y="244" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Casoni 0,1ml/20' ≥ 1,6cm² (nhạy &gt;85%, vẫn + sau mổ) | CFT (–) khi bướu chết/hóa vôi</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 8: SPARGANUM (H 1.4-45..46) & VIÊM DA SÁN MÁNG (H 1.4-53)
    // ======================================================================
    8: {
      title: "🎬 Tái tạo Động: Chu trình Sparganum (H 1.4-45, H 1.4-46) & Viêm da Sán máng (H 1.4-53)",
      steps: [
        {
          pill: "H 1.4-45 Sparganum",
          ref: "H 1.4-45 (tr. 286, 518)",
          name: "Tái tạo H 1.4-45: Chu trình Phát triển Spirometra mansoni (S. erinacei)",
          desc: "Sán trưởng thành ở ruột non chó, mèo → trứng có nắp không đối xứng → ấu trùng lông (<em>coracidium</em>) → <strong><em>Cyclops</em> sp. (<em>procercoid</em>)</strong> → <strong>ếch, nhái, rắn, lươn, chuột (<em>sparganum / plerocercoid</em>)</strong>.",
          highlight: "Thời Pháp thuộc 80% ếch nhái miền Bắc nhiễm; nay còn 15–17%"
        },
        {
          pill: "H 1.4-46 Đường nhiễm",
          ref: "H 1.4-46 (tr. 287, 518–519)",
          name: "Tái tạo H 1.4-46: 3 Con đường Nhiễm & Các Vị trí Ký sinh Sparganum ở Người",
          desc: "(1) <strong>Đắp thịt ếch nhái lên mắt</strong> chữa viêm kết mạc → <em>sparganose oculaire</em> sau 10 ngày; (2) <strong>Ăn thịt rắn, ếch nhái</strong> chưa chín; (3) <strong>Uống nước có <em>Cyclops</em></strong>. Ở người sán dài <strong>10–15 cm</strong>; điều trị phải <strong>rạch &amp; gắp nhanh tay</strong> kẻo bò đi chỗ khác!",
          highlight: "Khi chết xác Sparganum gây sưng tấy, hoại tử, mề đay, tăng BCTT"
        },
        {
          pill: "H 1.4-53 Viêm da sán máng",
          ref: "H 1.4-53 (tr. 303, 519–520)",
          name: "Tái tạo H 1.4-53: Chu trình & Cơ chế Ấu trùng Đuôi chui Da khi Nước Khô",
          desc: "Vịt/chim (<em>Trichobilharzia</em> nước ngọt, <em>Microbilharzia</em> nước mặn) hoặc chuột (<em>Schistosomatium</em>) → <em>miracidium</em> → <strong>ốc <em>Radix ovata</em></strong> → <strong>ấu trùng đuôi chẻ</strong> chui vào da người <strong>khi lớp nước trên da khô đi</strong> → sẩn đạt tối đa <strong>ngày 2–3</strong>, tự lặn &gt;1 tuần. Phòng bằng <strong>lau khô ngay</strong> &amp; <strong>dầu rái cá (<em>gant invisible</em>)</strong>.",
          highlight: "Không thuốc đặc hiệu • Chỉ dùng kem kháng histamin"
        }
      ],
      renderSvg(s) {
        if (s === 0) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">TÁI TẠO H 1.4-45 (tr. 286, 518): CHU TRÌNH PHÁT TRIỂN SPIROMETRA MANSONI</text>

              <rect x="260" y="38" width="240" height="60" rx="12" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5"/>
              <text x="380" y="62" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">KCVV: Chó, Mèo, Félidés</text>
              <text x="380" y="80" text-anchor="middle" font-size="10" fill="var(--text-main)">Sán trưởng thành ở ruột non (~60 cm)</text>

              <path d="M500 68 L620 68 L620 116" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
              <rect x="526" y="116" width="194" height="72" rx="10" fill="var(--bg-card)" stroke="var(--warning)" stroke-width="2"/>
              <text x="623" y="140" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warning)">Trứng có nắp không đối xứng</text>
              <text x="623" y="158" text-anchor="middle" font-size="9.5" fill="var(--text-main)">65 × 40 µm → nước ao hồ</text>
              <text x="623" y="174" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">Nở Phôi lông tơ (Coracidium)</text>

              <path d="M526 178 L466 206" stroke="var(--warning)" stroke-width="2.5"/>
              <rect x="272" y="182" width="194" height="78" rx="12" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2.5"/>
              <text x="369" y="206" text-anchor="middle" font-size="11" font-weight="800" fill="#92400e">KCTG I: Cyclops sp.</text>
              <circle cx="369" cy="232" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="2">
                <animate attributeName="r" values="12;16;12" dur="1.5s" repeatCount="indefinite"/>
              </circle>
              <text x="369" y="236" text-anchor="middle" font-size="9" font-weight="800" fill="#78350f">Procercoid</text>

              <path d="M272 220 L216 188" stroke="var(--accent)" stroke-width="2.5"/>
              <rect x="34" y="114" width="198" height="82" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5"/>
              <text x="133" y="138" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">KCTG II: Ếch, Nhái, Rắn</text>
              <text x="133" y="158" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">Ấu trùng II: Sparganum</text>
              <text x="133" y="176" text-anchor="middle" font-size="9.5" fill="var(--text-main)">(Plerocercoid ở cơ: 15–17% nay)</text>

              <path d="M133 114 L133 68 L256 68" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
              <circle r="5" fill="#4f46e5">
                <animateMotion dur="4s" repeatCount="indefinite" path="M380,68 L620,68 L620,150 L369,220 L133,154 L133,68 L380,68"/>
              </circle>
            </svg>
          `;
        }
        if (s === 1) {
          return `
            <svg viewBox="0 0 760 280" class="proc-svg">
              <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--danger)">TÁI TẠO H 1.4-46 (tr. 287, 518–519): 3 ĐƯỜNG NHIỄM &amp; VỊ TRÍ SPARGANUM Ở NGƯỜI</text>

              <rect x="24" y="44" width="236" height="62" rx="10" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2"/>
              <text x="142" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">1. Đắp thịt ếch nhái lên mắt</text>
              <text x="142" y="88" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Sparganose oculaire (lồi mắt sau 10 ngày)</text>

              <rect x="24" y="120" width="236" height="62" rx="10" fill="var(--warning-light)" stroke="var(--warning)" stroke-width="2"/>
              <text x="142" y="144" text-anchor="middle" font-size="11" font-weight="800" fill="#92400e">2. Ăn thịt rắn, ếch nấu chưa chín</text>
              <text x="142" y="164" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Chứa plerocercoid → Sparganum nội tạng</text>

              <rect x="24" y="196" width="236" height="62" rx="10" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2"/>
              <text x="142" y="220" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">3. Uống nước có Cyclops sp.</text>
              <text x="142" y="240" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Nuốt procercoid → chui vách ruột ra da</text>

              <path d="M260 75 L380 86 M260 151 L380 151 M260 227 L380 206" stroke="var(--danger)" stroke-width="2.5"/>
              <circle cx="320" cy="80" r="4.5" fill="#e11d48"><animate attributeName="cx" values="262;378" dur="1.5s" repeatCount="indefinite"/><animate attributeName="cy" values="75;86" dur="1.5s" repeatCount="indefinite"/></circle>

              <rect x="384" y="44" width="352" height="214" rx="14" fill="var(--bg-card)" stroke="var(--danger)" stroke-width="2.5"/>
              <text x="560" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">Cơ thể Người (Ấu trùng 10–15 cm)</text>
              <text x="404" y="102" font-size="10.5" font-weight="700" fill="var(--danger)">👁️ Hốc mắt / Mi mắt / Quanh hốc mắt:</text>
              <text x="414" y="119" font-size="10" fill="var(--text-main)">Nhôn nhốt, lồi mắt, không nhắm được, loét giác mạc.</text>
              <text x="404" y="144" font-size="10.5" font-weight="700" fill="var(--primary)">🧠 Dưới da, Phúc mạc, Màng phổi, Não:</text>
              <text x="414" y="161" font-size="10" fill="var(--text-main)">Áp xe di chuyển; khi chết gây hoại tử, mề đay, BCTT ↑.</text>
              <rect x="404" y="182" width="312" height="60" rx="8" fill="var(--accent-light)" stroke="var(--accent)"/>
              <text x="560" y="204" text-anchor="middle" font-size="10.8" font-weight="800" fill="var(--accent)">✂️ Điều trị: Rạch và gắp Sparganum ra</text>
              <text x="560" y="224" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Cần khéo tay &amp; THAO TÁC NHANH vì dễ bò đi chỗ khác!</text>
            </svg>
          `;
        }
        return `
          <svg viewBox="0 0 760 285" class="proc-svg">
            <text x="380" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">TÁI TẠO H 1.4-53 (tr. 303, 519–520): VIÊM DA DO SÁN MÁNG (TRICHOBILHARZIA)</text>

            <rect x="20" y="48" width="154" height="92" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
            <text x="97" y="72" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">Vịt, Chim / Chuột</text>
            <text x="97" y="92" text-anchor="middle" font-size="9.5" fill="var(--text-main)">• Trichobilharzia (n.ngọt)</text>
            <text x="97" y="108" text-anchor="middle" font-size="9.5" fill="var(--text-main)">• Microbilharzia (n.mặn)</text>
            <text x="97" y="124" text-anchor="middle" font-size="9.5" fill="var(--text-main)">• Schistosomatium (chuột)</text>

            <line x1="97" y1="140" x2="97" y2="176" stroke="var(--primary)" stroke-width="2.5"/>
            <rect x="20" y="176" width="154" height="80" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2"/>
            <text x="97" y="200" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">Ốc Radix ovata</text>
            <text x="97" y="220" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Miracidium → Bào tử nang</text>
            <text x="97" y="236" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">→ Ấu trùng đuôi chẻ</text>

            <line x1="174" y1="216" x2="228" y2="160" stroke="var(--danger)" stroke-width="3"/>
            <circle cx="202" cy="188" r="5" fill="#e11d48"><animate attributeName="cx" values="176;226" dur="1.3s" repeatCount="indefinite"/><animate attributeName="cy" values="214;162" dur="1.3s" repeatCount="indefinite"/></circle>

            <rect x="232" y="48" width="268" height="208" rx="12" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2.5"/>
            <text x="366" y="72" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Bề mặt Da Nông dân / Người tắm</text>
            <rect x="252" y="88" width="228" height="22" rx="4" fill="#38bdf8" opacity="0.55">
              <animate attributeName="opacity" values="0.75;0.1;0.75" dur="2.8s" repeatCount="indefinite"/>
            </rect>
            <text x="366" y="103" text-anchor="middle" font-size="9.8" font-weight="800" fill="#0c4a6e">Lớp nước bay hơi (Chui vào khi NƯỚC KHÔ!)</text>
            <rect x="252" y="110" width="228" height="58" rx="6" fill="#fed7aa" stroke="#ea580c"/>
            <circle cx="310" cy="136" r="8" fill="#e11d48"/><circle cx="366" cy="134" r="9" fill="#e11d48"/><circle cx="422" cy="138" r="8" fill="#e11d48"/>
            <text x="366" y="158" text-anchor="middle" font-size="9.5" font-weight="800" fill="#9a3412">Kẹt &amp; Chết trong da → Dị ứng</text>
            <text x="366" y="190" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">• Vài giờ đầu: Ngứa dữ dội, phù, đỏ</text>
            <text x="366" y="210" text-anchor="middle" font-size="10" font-weight="800" fill="var(--danger)">• Sẩn tối đa: Ngày thứ 2 và 3</text>
            <text x="366" y="230" text-anchor="middle" font-size="10" fill="var(--text-main)">• Tự lặn đi: Sau hơn 1 tuần</text>

            <rect x="518" y="48" width="222" height="208" rx="12" fill="var(--success-light)" stroke="var(--success)" stroke-width="2"/>
            <text x="629" y="74" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--success)">3 Biện pháp Dự phòng</text>
            <text x="532" y="104" font-size="10" font-weight="700" fill="var(--text-main)">1. Diệt ốc (CuSO₄, CuCO₃,</text>
            <text x="542" y="120" font-size="10" fill="var(--text-main)">pentachlorphenate) + phát quang</text>
            <text x="532" y="148" font-size="10" font-weight="700" fill="var(--primary)">2. Lau khô NGAY vừa tắm xong</text>
            <text x="542" y="164" font-size="9.5" fill="var(--text-muted)">(Chặn lúc nước khô trên da)</text>
            <text x="532" y="192" font-size="10" font-weight="700" fill="var(--success)">3. Thoa Dầu rái cá trước lội</text>
            <text x="542" y="208" font-size="9.5" fill="var(--text-main)">(Gant invisible – Đặng Vũ Hỷ 1960)</text>
            <text x="629" y="238" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--danger)">Trị: Chỉ bôi kem kháng histamin</text>
          </svg>
        `;
      }
    }
  },

  render(lessonId, container) {
    this.stopTimer();
    this.currentLessonId = lessonId;
    this.currentStep = 0;
    const spec = this.specs[lessonId];
    if (!container || !spec) return;
    this.mount(container, spec);
  },

  mount(container, spec) {
    const step = spec.steps[this.currentStep];
    const buttonsHtml = spec.steps
      .map(
        (st, idx) => `
      <button type="button" class="pill-btn ${idx === this.currentStep ? "active" : ""}" onclick="ProcessAnimations.goTo(${idx})">
        ${st.pill || idx + 1}
      </button>`
      )
      .join("");

    container.innerHTML = `
      <div class="proc-box">
        <div class="proc-header">
          <div>
            <span class="sim-badge" style="background:var(--accent);">🎬 Tái tạo Hình Sách thành Hoạt cảnh Trực quan</span>
            <h3 style="font-size:17.5px;font-weight:800;margin-top:6px;color:var(--text-main);">${spec.title}</h3>
          </div>
          <div class="proc-controls">
            <button type="button" class="btn btn-outline" style="min-height:36px;padding:6px 10px;font-size:12.5px;" onclick="ProcessAnimations.prev()">⏮️ Trước</button>
            <button type="button" class="btn btn-primary" style="min-height:36px;padding:6px 12px;font-size:12.5px;" id="procPlayBtn" onclick="ProcessAnimations.togglePlay()">
              ${this.isPlaying ? "⏸️ Tạm dừng" : "▶️ Chạy tự động"}
            </button>
            <button type="button" class="btn btn-outline" style="min-height:36px;padding:6px 10px;font-size:12.5px;" onclick="ProcessAnimations.next()">Tiếp ⏭️</button>
          </div>
        </div>

        <div class="pill-btn-group">${buttonsHtml}</div>

        <div class="svg-stage" style="margin:12px 0;">
          <div class="fig-ref-row">
            <span class="fig-ref-badge">📖 Đối chiếu tài liệu: ${step.ref || "Sách Ký sinh trùng Y học YDS 2015"}</span>
            <span style="font-size:12px;color:var(--text-muted);font-weight:600;">Hình ${this.currentStep + 1} / ${spec.steps.length}</span>
          </div>
          ${spec.renderSvg(this.currentStep)}
        </div>

        <div class="callout pearl" style="margin:0;">
          <div class="callout-title" style="justify-content:space-between;">
            <span>📌 ${step.name}</span>
            <span class="tag-pill" style="background:var(--accent);color:#fff;">💡 ${step.highlight}</span>
          </div>
          <p style="margin-top:4px;">${step.desc}</p>
        </div>
      </div>
    `;
  },

  goTo(idx) {
    const spec = this.specs[this.currentLessonId];
    const el = document.getElementById("procAnimContainer");
    if (!spec || !el) return;
    this.currentStep = (idx + spec.steps.length) % spec.steps.length;
    this.mount(el, spec);
  },

  next() {
    this.goTo(this.currentStep + 1);
  },

  prev() {
    this.goTo(this.currentStep - 1);
  },

  togglePlay() {
    if (this.isPlaying) {
      this.stopTimer();
      const btn = document.getElementById("procPlayBtn");
      if (btn) btn.innerHTML = "▶️ Chạy tự động";
    } else {
      this.isPlaying = true;
      const btn = document.getElementById("procPlayBtn");
      if (btn) btn.innerHTML = "⏸️ Tạm dừng";
      this.timer = setInterval(() => {
        if (!document.getElementById("procAnimContainer")) {
          this.stopTimer();
          return;
        }
        this.next();
      }, 4200);
    }
  }
};
