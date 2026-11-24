// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 1: CHUYÊN ĐỀ I – KÝ SINH HỌC ĐẠI CƯƠNG (BÀI 1 ĐẾN BÀI 4)
// Chuẩn Giáo trình Ký sinh trùng Y học (Bộ môn Ký sinh học ĐHYD TP.HCM, NXB Y học 2015) – Chương 1 (tr. 3–25)
// ==========================================================================

window.LESSONS_PART1 = [
  // ========================================================================
  // BÀI 1: KHÁI NIỆM NỀN TẢNG, TƯƠNG QUAN SINH VẬT, PHÂN LOẠI KST & KÝ CHỦ
  // ========================================================================
  {
    id: 1,
    group: "I. KÝ SINH HỌC ĐẠI CƯƠNG",
    title: "Bài 1: Khái niệm, Tương quan Sinh vật, Phân loại KST & Ký chủ",
    shortTitle: "Tương quan, KST & Ký chủ",
    textbookRef: "Ký sinh trùng Y học YDS 2015 – Chương 1, Mục 1–7, 13–14 (tr. 3–6, 15–17)",
    summary: "Định nghĩa KST Y học (3 nội dung); 4 kiểu tương quan sinh vật; Nguồn gốc tiền thích ứng – thích ứng; Tính đặc hiệu; 9 loại KST; 7 loại ký chủ; Danh pháp 2–3 chữ Latin & phân loại giới Động vật – Nấm.",
    simId: "sim_taxonomy_hosts",
    simTitle: "Phòng Lab Phân loại KST – Ký chủ & Kiểm định Tiền thích ứng – Danh pháp",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📖 1. Định nghĩa &amp; 4 Kiểu Tương quan Sinh vật (tr. 3–4)</div>
          <ul class="theory-list">
            <li><strong>Ký sinh học:</strong> Nghiên cứu sinh vật sống bám trên bề mặt hay bên trong cơ thể sinh vật khác một cách <em>tạm thời hoặc vĩnh viễn</em> để có <strong>chỗ trú ẩn</strong> và <strong>nguồn thức ăn</strong> để sinh sống.</li>
            <li><strong>Ký sinh trùng Y học:</strong> Giải quyết tốt <strong>3 nội dung</strong>: <em>cơ bản</em>, <em>dịch tễ</em> và <em>lâm sàng</em>; nghiên cứu KST ở người, đặc điểm y học, mối quan hệ KST – con người (trong xã hội, tự nhiên) và biện pháp phòng chống.</li>
            <li><strong>4 kiểu tương quan giữa những sinh vật:</strong>
              <ol style="margin-top:6px;padding-left:18px;">
                <li><strong>Cộng sinh (Symbiosis):</strong> Sống chung <em>bắt buộc</em> và <em>cả hai cùng có lợi</em> (VD: mối và đơn bào trong ruột mối; vi nấm và tảo trong địa y; đáp án tr. 555: người/động vật với cây xanh).</li>
                <li><strong>Tương sinh (Mutualism):</strong> Sống chung <em>không bắt buộc</em>, khi sống chung <em>cả hai đều có lợi</em> (VD: cua biển và hải tức / anemone).</li>
                <li><strong>Hội sinh (Commensalism):</strong> <em>Một bên có lợi</em>, bên kia <em>không lợi nhưng không có hại</em> (VD: <em>Pentatrichomonas intestinalis, Entamoeba coli, Escherichia coli</em> trong ruột già người).</li>
                <li><strong>Ký sinh (Parasitism):</strong> Sinh vật sống bám <em>hưởng lợi</em>, sinh vật kia <em>bị thiệt hại</em> (VD: giun đũa và người).</li>
              </ol>
            </li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">🌿 Phân biệt 3 kiểu Hoại sinh của KST (tr. 4)</div>
            <ul>
              <li><strong>Ngoại hoại sinh (Exosaprophytism):</strong> <em>Aspergillus, Sporothrix schenckii, Strongyloides stercoralis</em>...</li>
              <li><strong>Nội hoại sinh (Endosaprophytism):</strong> <em>Entamoeba histolytica minuta, Candida</em> sp....</li>
              <li><strong>Thượng hoại sinh (Episaprophytism):</strong> <em>Pityrosporum ovale, Sarcoptes scabiei</em>...</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🧬 2. Nguồn gốc Sự ký sinh, Tính Đặc hiệu &amp; Lịch sử (tr. 4–5)</div>
          <ul class="theory-list">
            <li><strong>Tiền thích ứng (Preadaptation) vs Thích ứng (Adaptation):</strong>
              <ul style="margin-top:4px;padding-left:18px;">
                <li>Sinh vật tự do xâm nhập vào cơ thể động vật để tránh ngoại môi khắc nghiệt. Ban đầu bị hủy diệt; qua hàng trăm nghìn năm lặp lại, một số không chết, khi ra ngoại cảnh vẫn sống tự do, sinh sản và tái xâm nhập.</li>
                <li>Những <strong>thay đổi sinh lý nội tại</strong> giúp chúng sống sót được gọi là <strong>tiền thích ứng (preadaptation)</strong> (chưa biểu hiện cơ cấu bám bên ngoài).</li>
                <li>Dần dần phát triển <strong>cấu trúc hình thái mới</strong> (răng, dao cắt ở giun móc; đĩa hút, móc ở sán lá...) giúp định vị luôn trong ký chủ → <strong>thích ứng (adaptation)</strong> và di truyền khi ký sinh thường xuyên.</li>
              </ul>
            </li>
            <li><strong>Tính đặc hiệu ký sinh (2 mặt):</strong>
              <ul style="margin-top:4px;padding-left:18px;">
                <li><strong>Về ký chủ:</strong> <em>Hẹp</em> (1 loài duy nhất, VD: <em>Ascaris lumbricoides</em> chỉ sống ở ruột người → <strong>dễ phòng chống</strong>) vs <em>Rộng</em> (nhiều loài, VD: <em>Toxoplasma gondii</em> ở người, trâu bò, heo, chim → <strong>rất khó diệt trừ</strong>).</li>
                <li><strong>Về nơi ký sinh (cơ quan):</strong> <em>Hẹp</em> (1 cơ quan nhất định: <em>Ascaris</em> ở ruột non, <em>Enterobius vermicularis</em> ở ruột già → dễ chẩn đoán/điều trị) vs <em>Rộng</em> (nhiều cơ quan: <em>Toxoplasma gondii</em> ở não, mắt, cơ tim, phổi → chẩn đoán/điều trị khó).</li>
              </ul>
            </li>
            <li><strong>6 thời kỳ lịch sử KST học (tr. 5):</strong> Cổ xưa (&lt; TK 8: Ai Cập, Trung Hoa, Ấn Độ) → 700–1600 SCN → 1601–1850 (nhận dạng đại/vi thể, phân loại) → (1851–1920, nghiên cứu chu trình) → 1921–1960 (hoàn chỉnh CTPT, điều trị &amp; dự phòng) → Từ 1961 (sinh hóa, siêu cấu trúc, miễn dịch, bệnh học).</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🏷️ 3. Phân loại 9 Loại Ký sinh trùng &amp; 7 Loại Ký chủ (tr. 5–6)</div>
        <div class="grid-2">
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr><th>Loại KST</th><th>Định nghĩa &amp; Ví dụ sách YDS 2015</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>KST bắt buộc</strong></td><td>Muốn tồn tại bắt buộc phải bám vào cơ thể sinh vật khác (VD: giun đũa, giun kim, rệp).</td></tr>
                <tr><td><strong>KST tùy nghi</strong></td><td>Có thể sống tự do ở ngoại môi hoặc ký sinh (VD: giun lươn, vi nấm <em>Aspergillus</em> sp.).</td></tr>
                <tr><td><strong>Nội KST</strong></td><td>Sống bên trong cơ thể sinh vật khác (VD: giun đũa, sán lá gan, amip).</td></tr>
                <tr><td><strong>Ngoại KST</strong></td><td>Sống ở bề mặt cơ thể (chí, rận) hoặc trong da ký chủ (con ghẻ).</td></tr>
                <tr><td><strong>KST lạc chỗ</strong></td><td>Đi lạc sang cơ quan khác với cơ quan thường ký sinh (VD: giun đũa chui ống tụy, ống mật).</td></tr>
                <tr><td><strong>KST lạc chủ</strong></td><td>Thường ở một ký chủ nhất định nhưng do tiếp xúc có thể nhiễm sang ký chủ khác (VD: giun đũa chó qua người).</td></tr>
                <tr><td><strong>KST ngẫu nhiên</strong></td><td>Gặp ở một ký chủ khác với ký chủ mà nó thường ký sinh.</td></tr>
                <tr><td><strong>KST giả hiệu</strong></td><td>Chất cặn bã trong bệnh phẩm giống KST (VD: <strong>hạt phấn hoa</strong> trong phân người).</td></tr>
                <tr><td><strong>Bội KST</strong></td><td>KST của một KST (VD: bọ ve <em>Ixodes ricinus</em> ký sinh người bị <em>Ixodiphagus caucurtei</em> ký sinh).</td></tr>
              </tbody>
            </table>
          </div>

          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr><th>Loại Ký chủ / Trung gian</th><th>Vai trò sinh học &amp; Ví dụ kinh điển</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Ký chủ vĩnh viễn (KCVV)</strong></td><td>Chứa KST ở giai đoạn <strong>trưởng thành</strong> hay <strong>đã định giống</strong> (VD: người với giun đũa, giun kim; <strong>muỗi <em>Anopheles</em> với KST sốt rét</strong>).</td></tr>
                <tr><td><strong>Ký chủ trung gian (KCTG)</strong></td><td>Chứa KST ở giai đoạn <strong>ấu trùng</strong>. Có KCTG I và II: sán <em>Diphyllobothrium latum</em> có lăng quăng đỏ (KCTG I) và cá (KCTG II).</td></tr>
                <tr><td><strong>Ký chủ chờ thời</strong></td><td>Nuốt KCTG II nhưng KST vẫn dừng ở giai đoạn ấu trùng II (VD: <strong>cá lớn nuốt cá bé</strong> chứa ấu trùng II <em>D. latum</em>; người KHÔNG phải KC chờ thời của <em>D. latum</em>!).</td></tr>
                <tr><td><strong>Ký chủ chính vs phụ</strong></td><td>Chứa KST trưởng thành với tần suất cao nhất vs thấp (VD: trâu bò là KC chính của <em>Fasciola gigantica</em> 70–80%, người là KC phụ).</td></tr>
                <tr><td><strong>Tàng chủ (Reservoir)</strong></td><td>Động vật mang KST của người (VD: mèo hoang là tàng chủ của <em>Clonorchis sinensis</em>).</td></tr>
                <tr><td><strong>TGTB Sinh học vs Cơ học</strong></td><td><strong>Sinh học:</strong> KST phát triển/tăng dân số trong cơ thể (KST sốt rét trong <em>Anopheles</em>; giun chỉ trong <em>Mansonia, Culex</em>).<br/><strong>Cơ học:</strong> Chuyên chở thụ động, không tăng số lượng/phát triển (bào nang <em>E. histolytica</em> dính trên ruồi).</td></tr>
                <tr><td><strong>Người mang mầm bệnh (Porter)</strong></td><td>Có KST trong cơ thể nhưng <strong>không biểu hiện bệnh lý</strong> (VD: người mang bào nang amip, trùng lông).</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔬 4. Danh pháp Quốc tế &amp; Phân loại Giới Động vật – Giới Nấm (tr. 15–17)</div>
        <div class="grid-2">
          <div>
            <p style="font-size:14px;margin-bottom:8px;"><strong>Danh pháp (tr. 15):</strong> 2 chữ Latin (chữ đầu chỉ <em>Giống</em> viết hoa; chữ thứ hai chỉ <em>Loài</em> viết thường; in nghiêng hoặc gạch dưới), kèm tác giả &amp; năm: <em>Paragonimus westermani</em> Kerbert, 1878. Loài phụ dùng <strong>3 chữ Latin</strong> (<em>Culex pipiens pipiens</em>, <em>Ascaris lumbricoides var. suis</em>).</p>
            <ul class="theory-list">
              <li><strong>Đơn bào (Protozoaires):</strong> Chân giả (<em>Entamoeba, Iodamoeba, Endolimax, Dientamoeba</em>; Limax: <em>Naegleria, Acanthamoeba</em>); Trùng roi (máu: <em>Trypanosoma, Leishmania</em>; ruột: <em>Giardia, Pentatrichomonas</em>; niệu-SD: <em>T. vaginalis</em>); Trùng lông (<em>Balantidium coli</em>); Trùng bào tử (Coccidiés: <em>Plasmodium, Isospora</em>; Sarcosporidiés: <em>Toxoplasma, Sarcocystis</em>).</li>
              <li><strong>Đa bào Giun sán (Helminthes):</strong>
                <br/>• <em>Giun tròn (Némathelminthes):</em> thân ống, vỏ chitin, phân giống. Đẻ trứng (<em>Ascaris, Giun móc, Trichuris, Strongyloides, Enterobius</em>) vs Đẻ phôi (<em>Trichinella spiralis, W. bancrofti, Brugia malayi, Onchocerca volvulus</em>).
                <br/>• <em>Sán dẹp (Plathelminthes):</em> thân dẹp, không chitin. Sán dải (<em>T. solium, T. saginata, D. latum</em>); Sán lá lưỡng tính (ruột: <em>F. buski</em>; gan: <em>C. sinensis, F. hepatica</em>; phổi: <em>P. westermani</em>) vs <strong>Sán lá đơn tính mạch máu</strong> (<em>Schistosoma</em> sp.).</li>
            </ul>
          </div>
          <div>
            <ul class="theory-list">
              <li><strong>Chân khớp (Arthropodes):</strong>
                <br/>• <em>Côn trùng (Insectes):</em> đầu, ngực, bụng, <strong>3 đôi chân</strong>. Biến thái toàn vẹn: Aphaniptère (bọ chét, lép 2 bên, không cánh), Diptères (1 đôi cánh: Brachcères anten 3 đốt [<em>Chrysops, Glossina</em>]; Nématocères anten 6 đốt [<em>Phlebotomus, Simulium</em>, muỗi <em>Anopheles, Aedes, Culex, Mansonia</em>]). Biến thái không toàn vẹn: Anoploures (chí, rận: lép bụng-lưng), Hémiptères (rệp giường <em>Cimex</em>, rệp có cánh <em>réduves</em>).
                <br/>• <em>Nhện (Arachnides):</em> đầu-ngực &amp; bụng, <strong>4 đôi chân</strong>, không anten (<em>Sarcoptes, Ixodes, Argas, Thrombicula, Demodex</em>; bọ cạp; nhện).
                <br/>• <em>Crustacés</em> (tôm, cua, <em>Cyclops</em>) • <em>Pararthropodes</em> (<em>Linguatule, Porocéphale</em>) • <em>Thân mềm</em> (<em>Planorbis, Limnée, Mélania</em>) • <em>Annelides</em> (đỉa).</li>
              <li><strong>Giới Nấm (tr. 17):</strong> Nấm Tảo (không vách ngăn: <em>Mucor, Rhizopus</em>); Nấm Đảm (<em>Amanita phalloides...</em>); Nấm Túi (<em>Aspergillus, Penicillium...</em>); Nấm Bất toàn (hạt men: <em>Candida, Cryptococcus, Pityrosporum</em>; sợi tơ: <em>Trichophyton, Microsporum, Epidermophyton</em>; <strong>nhị độ/lưỡng hình:</strong> <em>Histoplasma, Blastomyces, Sporothrix schenckii</em>).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Người chứa ký sinh trùng trong cơ thể nhưng không có biểu hiện bệnh lý được gọi là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 1 (tr. 24)",
        options: [
          "Người lành mang mầm bệnh",
          "Ký chủ vĩnh viễn",
          "Ký chủ chính",
          "Ký chủ chờ thời"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 1E – Người lành mang mầm bệnh (porter). Ký chủ có KST trong cơ thể nhưng không có biểu hiện bệnh lý (VD: người mang bào nang amip, trùng lông)."
      },
      {
        q: "Giun đũa (Ascaris lumbricoides) có tính đặc hiệu hẹp về ký chủ và hẹp về nơi ký sinh. Nhận định này đúng hay sai theo giáo trình?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 8 (tr. 24)",
        options: [
          "Đúng",
          "Sai, giun đũa có tính đặc hiệu rộng về ký chủ",
          "Sai, giun đũa có tính đặc hiệu rộng về nơi ký sinh",
          "Sai cả hai mặt đặc hiệu ký chủ và cơ quan"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 8A – Đúng. Theo tr. 4–5, Ascaris lumbricoides chỉ sống được ở người (đặc hiệu hẹp về ký chủ) và chỉ ký sinh ở ruột non (đặc hiệu hẹp về nơi ký sinh)."
      },
      {
        q: "Theo đáp án chuẩn của giáo trình Ký sinh trùng Y học YDS 2015, trường hợp tương quan giữa người và động vật với các cây xanh thuộc kiểu nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 9 (tr. 24)",
        options: [
          "Cộng sinh (symbiosis)",
          "Tương sinh (mutualism)",
          "Hội sinh (commensalism)",
          "Ngoại hoại sinh (exosaprophytism)"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 9A – Cộng sinh (symbiosis). Sinh vật sống chung bắt buộc và cả hai cùng có lợi (trao đổi khí O2/CO2 và chuỗi dinh dưỡng sinh quyển)."
      },
      {
        q: "Đặc điểm nào sau đây KHÔNG thấy trong giai đoạn tiền thích ứng (preadaptation)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 12 (tr. 24–25)",
        options: [
          "Sinh vật bám phát triển những cơ cấu để trụ lại như đĩa hút, răng, dao...",
          "Sinh vật bám không bị hủy diệt khi tiếp xúc với ký chủ",
          "Sinh vật bám có những thay đổi nội tại nhưng chưa biểu hiện ra bên ngoài",
          "Sinh vật bám chưa có khả năng trụ lại ở cơ thể ký chủ"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 12D. Phát triển các cấu trúc hình thái mới như đĩa hút, móc, răng, dao cắt là giai đoạn THÍCH ỨNG (adaptation), KHÔNG phải tiền thích ứng (preadaptation – tr. 4)."
      },
      {
        q: "Những ký sinh trùng có tính đặc hiệu rộng về ký chủ thì dễ phòng chống. Nhận định này đúng hay sai?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 19 (tr. 25)",
        options: [
          "Sai",
          "Đúng",
          "Chỉ đúng với sán lá và sán dải",
          "Chỉ đúng khi ký chủ trung gian là côn trùng"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 19B – Sai. Theo tr. 5, những KST có tính đặc hiệu HẸP về ký chủ mới dễ phòng chống, còn đặc hiệu RỘNG về ký chủ thì rất khó diệt trừ."
      },
      {
        q: "Cặp ví dụ nào sau đây minh họa đúng cho tương quan HỘI SINH (Commensalism)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 4)",
        options: [
          "Pentatrichomonas intestinalis, Entamoeba coli sống trong ruột già người",
          "Cua biển và hải tức (anemone) sống bám cùng nhau",
          "Con mối và đơn bào sống bắt buộc trong ruột mối",
          "Giun đũa Ascaris lumbricoides sống trong ruột non người"
        ],
        answer: 0,
        explain: "Theo tr. 4: Hội sinh là một bên có lợi, bên kia không lợi không hại (Pentatrichomonas intestinalis, Entamoeba coli, E. coli trong ruột già người). Cua biển–hải tức là tương sinh; mối–đơn bào là cộng sinh; giun đũa–người là ký sinh."
      },
      {
        q: "Hạt phấn hoa lẫn trong mẫu phân bệnh nhân có hình dạng rất giống trứng ký sinh trùng được xếp vào loại nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 6)",
        options: [
          "Ký sinh trùng giả hiệu",
          "Bội ký sinh trùng",
          "Ký sinh trùng ngẫu nhiên",
          "Ký sinh trùng lạc chỗ"
        ],
        answer: 0,
        explain: "Theo tr. 6 (mục 6.8): KST giả hiệu là các chất cặn bã trong bệnh phẩm có hình dạng rất giống KST (ví dụ kinh điển: hạt phấn hoa gặp trong phân người)."
      },
      {
        q: "Trong trường hợp giun đũa Ascaris lumbricoides chui từ ruột non vào ống tụy hoặc ống dẫn mật, hiện tượng này được gọi là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 5)",
        options: [
          "Ký sinh trùng lạc chỗ",
          "Ký sinh trùng lạc chủ",
          "Ký sinh trùng tùy nghi",
          "Bội ký sinh trùng"
        ],
        answer: 0,
        explain: "Theo tr. 5 (mục 6.5–6.6): Đi lạc sang cơ quan khác trên cùng ký chủ quen thuộc là KST lạc chỗ (giun đũa chui ống tụy/mật); còn nhiễm sang loài động vật khác là KST lạc chủ (giun đũa chó qua người)."
      },
      {
        q: "Trong chu trình phát triển của ký sinh trùng sốt rét (Plasmodium spp.), muỗi Anopheles đóng vai trò gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 6)",
        options: [
          "Ký chủ vĩnh viễn và là trung gian truyền bệnh sinh học",
          "Ký chủ trung gian I và trung gian truyền bệnh cơ học",
          "Ký chủ chờ thời và tàng chủ tự nhiên",
          "Ký chủ phụ mang giai đoạn vô tính"
        ],
        answer: 0,
        explain: "Theo tr. 6: Muỗi Anopheles là ký chủ vĩnh viễn của KST sốt rét (vì diễn ra giai đoạn định giống/hữu tính), đồng thời là trung gian truyền bệnh sinh học (KST phát triển, tăng dân số trong muỗi)."
      },
      {
        q: "Phát biểu nào sau đây ĐÚNG về sự khác biệt giữa trung gian truyền bệnh sinh học và trung gian truyền bệnh cơ học?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 6)",
        options: [
          "TGTB sinh học giúp KST phát triển hoặc tăng dân số, còn TGTB cơ học chỉ chuyên chở thụ động",
          "TGTB sinh học luôn là ốc thân mềm, còn TGTB cơ học luôn là côn trùng có cánh",
          "TGTB cơ học chứa giai đoạn sinh sản hữu tính của ký sinh trùng",
          "TGTB sinh học chỉ vận chuyển bào nang Entamoeba histolytica trên chân ruồi"
        ],
        answer: 0,
        explain: "Theo tr. 6 (mục 7.6): TGTB sinh học khi KST phát triển, tăng dân số (KST sốt rét/Anopheles) hoặc qua giai đoạn tiến hóa lây nhiễm (giun chỉ/Mansonia, Culex); TGTB cơ học chỉ chuyên chở thụ động (bào nang E. histolytica dính cơ thể ruồi)."
      },
      {
        q: "Nhóm nào sau đây chỉ gồm các giun tròn ĐẺ PHÔI (không đẻ trứng)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 15)",
        options: [
          "Trichinella spiralis, Wuchereria bancrofti, Brugia malayi, Onchocerca volvulus",
          "Ascaris lumbricoides, Trichuris trichiura, Enterobius vermicularis",
          "Ancylostoma duodenale, Strongyloides stercoralis, Ascaris lumbricoides",
          "Clonorchis sinensis, Paragonimus westermani, Schistosoma mansoni"
        ],
        answer: 0,
        explain: "Theo tr. 15 (mục 14.1.2.1): Lớp giun tròn đẻ phôi gồm Trichinella spiralis, Wuchereria bancrofti, Brugia malayi, Onchocerca volvulus... Còn giun đũa, giun móc, giun tóc, giun lươn, giun kim thuộc nhóm đẻ trứng."
      },
      {
        q: "Trong phân loại Giới Nấm y học (tr. 17), nhóm nấm nhị độ (lưỡng hình) bao gồm các đại diện nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 17)",
        options: [
          "Histoplasma, Blastomyces, Sporothrix schenckii",
          "Mucor, Rhizopus",
          "Candida, Cryptococcus, Pityrosporum",
          "Trichophyton, Microsporum, Epidermophyton"
        ],
        answer: 0,
        explain: "Theo tr. 17 (mục 14.2.4): Trong lớp Nấm Bất Toàn (Fungi Imperfecti), vi nấm nhị độ (lưỡng hình) gồm Histoplasma, Blastomyces, Sporothrix schenckii; vi nấm hạt men gồm Candida, Cryptococcus, Pityrosporum; Nấm Tảo là Mucor, Rhizopus."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: CHU TRÌNH PHÁT TRIỂN & DÂY TRUYỀN NHIỄM KÝ SINH TRÙNG
  // ========================================================================
  {
    id: 2,
    group: "I. KÝ SINH HỌC ĐẠI CƯƠNG",
    title: "Bài 2: Chu trình Phát triển & Dây truyền Nhiễm Ký sinh trùng",
    shortTitle: "Chu trình & Dây truyền nhiễm",
    textbookRef: "Ký sinh trùng Y học YDS 2015 – Chương 1, Mục 8–10 (tr. 6–10)",
    summary: "4 vị trí của con người trong CTPT (bao gồm ngõ cụt thực sự vs ngõ cụt cảnh ngộ); 3 loại CTPT của KST đường ruột; 5 yếu tố của dây truyền nhiễm KST (đường ra, phương thức lây, 8 nguồn nhiễm, đường vào, cơ thể cảm thụ) & phân bố.",
    simId: "sim_transmission_chain",
    simTitle: "Phòng Lab Truy vết Dây truyền & Chu trình Phát triển Ký sinh trùng",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🔄 1. Chu trình Phát triển (CTPT) &amp; Vị trí của Người (tr. 6–7)</div>
          <p style="font-size:14px;margin-bottom:8px;">CTPT được hình dung như một <strong>đường tròn khép kín</strong> diễn ra liên tục theo thời gian và không gian. KST có CTPT càng đơn giản càng dễ phát tán; CTPT càng phức tạp càng khó phòng chống.</p>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th>Vị trí của Con người</th><th>Bản chất &amp; Ví dụ chuẩn (tr. 7)</th></tr></thead>
              <tbody>
                <tr><td><strong>1. Người là ký chủ duy nhất</strong></td><td>Truyền tự nhiên từ người sang người: <em>Ascaris lumbricoides, Enterobius vermicularis, Entamoeba histolytica</em>...</td></tr>
                <tr><td><strong>2. Ở người xen kẽ động vật</strong></td><td>KST ở người truyền sang động vật rồi mới quay lại người: <em>Taenia saginata, Taenia solium, Diphyllobothrium latum</em>...</td></tr>
                <tr><td><strong>3. Chính ở ĐV, người là giai đoạn phụ</strong></td><td>Truyền phổ biến giữa ĐV, người tiếp xúc ĐV sẽ nhiễm: <em>Microsporum canis, Trichophyton mentagrophytes, Fasciola hepatica, Balantidium coli</em>...</td></tr>
                <tr><td><strong>4. Người là ngõ cụt ký sinh</strong></td><td>
                  • <strong>Ngõ cụt thực sự:</strong> KST ngừng phát triển, ấu trùng bị hủy diệt sau một thời gian (<em>Larva migrans</em> ngoài da/nội tạng do giun đũa, giun móc chó mèo).<br/>
                  • <strong>Ngõ cụt cảnh ngộ (<em>impasse parasitaire de circonstances</em>):</strong> Ấu trùng không phát triển nhưng tồn tại lâu dài, nếu bị thú ăn thịt mới hoàn tất chu trình (VD: ấu trùng <em>Echinococcus granulosus, Trichinella spiralis</em> ở người).
                </td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🧭 2. Ba Loại CTPT của KST Đường ruột (KSTĐR) (tr. 7–8)</div>
          <ul class="theory-list">
            <li><strong>Loại 1 – Chu trình trực tiếp và ngắn:</strong> KST rời ký chủ <em>đã có tính lây nhiễm ngay</em>, xâm nhập ký chủ mới ngay (VD: Trùng roi, amip, <strong>giun kim <em>Enterobius vermicularis</em></strong>, <em>Hymenolepis nana</em>, giun xoắn, <em>Pentatrichomonas intestinalis</em>...).</li>
            <li><strong>Loại 2 – Chu trình trực tiếp và dài:</strong> KST rời ký chủ cần <em>thời gian phát triển ở ngoại cảnh</em> mới đạt giai đoạn lây nhiễm (VD: <strong><em>Ascaris lumbricoides</em></strong>, giun móc, <em>Strongyloides stercoralis, Trichuris trichiura, Toxoplasma gondii</em>...).</li>
            <li><strong>Loại 3 – Chu trình gián tiếp (phải qua KCTG trước khi vào KCVV khác):</strong>
              <ul style="margin-top:4px;padding-left:18px;">
                <li><em>Qua 1 KCTG:</em> <em>Taenia saginata, Taenia solium, Echinococcus granulosus</em>...</li>
                <li><em>Qua 2 KCTG:</em> Các sán lá lưỡng tính, <em>Diphyllobothrium latum</em>...</li>
                <li><em>Trường hợp đặc biệt (KCVV đồng thời là KCTG):</em> <strong><em>Taenia solium</em> (và <em>Cysticercus cellulosae</em>), <em>Hymenolepis nana</em></strong>...</li>
              </ul>
            </li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy hay gặp ở Câu tự lượng giá (tr. 24–25)</div>
            <p>Đề thi hay hỏi <em>"Chu trình phát triển của Taenia solium thuộc loại?"</em> → Đáp án chuẩn là <strong>E. Ký chủ vĩnh viễn đồng thời là ký chủ trung gian</strong> (không chọn C nếu có E!), vì người vừa có thể mang sán trưởng thành vừa mắc bệnh ấu trùng <em>Cysticercus cellulosae</em>.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⛓️ 3. Dây truyền Nhiễm KST (5 Mắt xích) &amp; Yếu tố Phân bố (tr. 8–10)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead><tr><th>Mắt xích Dây truyền</th><th>Chi tiết &amp; Ví dụ Kinh điển Sách YDS 2015</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>9.1. Đường ra</strong></td>
                <td>• <strong>Chất ngoại tiết:</strong> Phân (trứng/ấu trùng giun sán, đơn bào đường ruột); <strong>Nước tiểu (trứng <em>Schistosoma haematobium</em>)</strong>.<br/>• <strong>Chất phân tiết:</strong> Đàm (trứng <strong>sán lá phổi</strong>).<br/>• <strong>Qua da:</strong> Ấu trùng <em>Dracunculus medinensis</em>, ấu trùng ruồi.<br/>• <strong>Nhờ TGTB:</strong> Máu (<em>Plasmodium, giun chỉ</em>); Dịch tiết vết loét da (<em>Onchocerca volvulus</em>).<br/>• <strong>Khi ký chủ chết:</strong> Cừu chết mang nang <em>Echinococcus granulosus</em> bị chó sói ăn.</td>
              </tr>
              <tr>
                <td><strong>9.2. Phương thức lây truyền</strong></td>
                <td>Nuốt qua miệng (ăn uống sống); Đi chân đất (giun móc, giun lươn, <em>Tunga penetrans</em>, bướu nấm); Tiếp xúc nước (sán lá đơn tính); Côn trùng đốt (sốt rét, giun chỉ); Hít đường hô hấp (giun kim, vi nấm nội tạng); Giao hợp (<em>T. vaginalis, Leishmania donovani</em>).</td>
              </tr>
              <tr>
                <td><strong>9.5. Nguồn nhiễm (8 nhóm)</strong></td>
                <td>(1) Đất ô nhiễm phân (đũa, tóc, móc, lươn); (2) Nước (amip, trùng roi, sán máng); (3) <strong>Thực phẩm:</strong> Cá (<em>D. latum, C. sinensis</em>), Tôm cua (<em>P. westermani</em>), Thịt heo (<em>T. spiralis, T. solium</em>), Thịt bò (<em>T. saginata</em>), <strong>Củ ấu <em>Trapa</em> sp. (<em>Fasciolopsis buski</em>)</strong>, Rau sống; (4) Côn trùng hút máu (<em>Anopheles</em> → sốt rét; ruồi cát <em>Phlebotomus</em> → <em>L. donovani</em>); (5) Chó (<em>Echinococcus, Toxocara canis</em>, nấm da); (6) Thú ăn cỏ (bò con <em>Trichostrongylus</em>, cừu <em>Echinococcus</em>); (7) Người khác; (8) <strong>Tự nhiễm:</strong> <em>Enterobius vermicularis, Strongyloides stercoralis</em>.</td>
              </tr>
              <tr>
                <td><strong>9.3. Đường vào (5 đường)</strong></td>
                <td>(1) Miệng; (2) Da (giun móc, <em>Schistosoma</em>, côn trùng hút máu); (3) Hô hấp (<em>E. vermicularis</em>); (4) <strong>Lá nhau:</strong> <em>Toxoplasma gondii, Plasmodium</em> sp.; (5) Sinh dục: <em>T. vaginalis, Leishmania donovani</em>.</td>
              </tr>
              <tr>
                <td><strong>9.4 &amp; 10. Cơ thể cảm thụ &amp; Phân bố</strong></td>
                <td>• <strong>Cảm thụ (8 yếu tố):</strong> Phái (<em>T. vaginalis</em> hiếm ở nam, phổ biến nữ), Tuổi (chốc đầu tự khỏi dậy thì; KST "lạ" ở trẻ em), Nghề nghiệp (giun móc ở làm rẫy, hầm mỏ, cao su), <strong>Nhân chủng</strong> (da vàng nhạy sốt rét, da trắng vừa phải, da đen ít nhạy cảm), Bệnh bồi thêm (lỵ amip bộc phát khi kích thích ruột), Cơ địa, Dinh dưỡng (suy dinh dưỡng → <em>Candida</em>), Miễn dịch (HIV/AIDS → <em>Toxoplasma, Aspergillus, Isospora</em>).<br/>• <strong>Phân bố (tr. 10):</strong> Sinh địa lý, Khí hậu (theo mùa), Thổ nhưỡng (mịn, pH, ẩm), Nhân chủng (tôn giáo: cấm thịt bò không nhiễm <em>T. saginata</em>; thảm họa chiến tranh: sốt phát ban do chí rận) &amp; Yếu tố cá nhân (nghề nghiệp).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Chu trình phát triển của Taenia solium thuộc loại nào theo phân loại chu trình KST đường ruột?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 4 (tr. 24)",
        options: [
          "Ký chủ vĩnh viễn đồng thời là ký chủ trung gian",
          "Trực tiếp và ngắn",
          "Trực tiếp và dài",
          "Qua hai ký chủ trung gian"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 4E – Ký chủ vĩnh viễn đồng thời là ký chủ trung gian (cùng với Hymenolepis nana – tr. 8), vì người có thể vừa mang sán trưởng thành ở ruột vừa mang ấu trùng Cysticercus cellulosae ở mô."
      },
      {
        q: "Nhận định: 'Người là ký chủ chờ thời của Diphyllobothrium latum' là đúng hay sai?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 5 (tr. 24)",
        options: [
          "Sai",
          "Đúng",
          "Chỉ đúng khi người ăn cá hồi sống",
          "Chỉ đúng khi người uống nước có Cyclops"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 5B – Sai. Theo tr. 6 & 7, người là ký chủ vĩnh viễn của D. latum (xen kẽ động vật); cá lớn nuốt cá bé chứa ấu trùng II mới là ký chủ chờ thời."
      },
      {
        q: "Hai ký sinh trùng nào sau đây được sách giáo khoa liệt kê là có ký chủ duy nhất là người?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 11 (tr. 24)",
        options: [
          "Ascaris lumbricoides và Entamoeba histolytica",
          "Fasciola hepatica và Clonorchis sinensis",
          "Toxoplasma gondii và Echinococcus granulosus",
          "Microsporum canis và Balantidium coli"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 11 – (1) Ascaris lumbricoides, (2) Entamoeba histolytica (ngoài ra tr. 7 còn liệt kê Enterobius vermicularis)."
      },
      {
        q: "Chu trình phát triển của giun đũa Ascaris lumbricoides thuộc loại nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 20 (tr. 25)",
        options: [
          "Trực tiếp và dài",
          "Trực tiếp và ngắn",
          "Qua một ký chủ trung gian",
          "Ký chủ vĩnh viễn đồng thời là ký chủ trung gian"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 20B – Trực tiếp và dài. Trứng giun đũa theo phân ra ngoại cảnh cần thời gian phát triển thành trứng có phôi lây nhiễm mới vào lại người (tr. 7)."
      },
      {
        q: "Đâu là điểm khác biệt giữa 'Ngõ cụt thực sự' và 'Ngõ cụt cảnh ngộ' (impasse parasitaire de circonstances) ở người?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 7)",
        options: [
          "Ngõ cụt thực sự ấu trùng bị hủy diệt sau thời gian ngắn; ngõ cụt cảnh ngộ ấu trùng tồn tại lâu dài và chu trình hoàn tất nếu bị thú ăn thịt",
          "Ngõ cụt thực sự chỉ gặp ở sán dải, còn ngõ cụt cảnh ngộ chỉ gặp ở giun móc chó mèo",
          "Ngõ cụt thực sự là người chứa KST trưởng thành đẻ trứng qua phân ra môi trường",
          "Ngõ cụt cảnh ngộ là người truyền trực tiếp KST sang người khác qua đường hô hấp"
        ],
        answer: 0,
        explain: "Theo tr. 7 (mục 8.1.4): Ở ngõ cụt thực sự (VD: Larva migrans do giun đũa, giun móc chó mèo) ấu trùng ngừng phát triển và bị hủy diệt; ở ngõ cụt cảnh ngộ (VD: Echinococcus granulosus, Trichinella spiralis) ấu trùng tồn tại lâu dài, nếu bị thú ăn thịt thì chu trình hoàn tất."
      },
      {
        q: "Nhóm ký sinh trùng đường ruột nào có chu trình phát triển TRỰC TIẾP VÀ NGẮN (rời ký chủ đã có tính lây nhiễm ngay)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 7)",
        options: [
          "Trùng roi, amip, giun kim (Enterobius vermicularis), Hymenolepis nana, giun xoắn",
          "Ascaris lumbricoides, giun móc, Trichuris trichiura, Strongyloides stercoralis",
          "Fasciolopsis buski, Clonorchis sinensis, Paragonimus westermani",
          "Taenia saginata, Taenia solium, Diphyllobothrium latum"
        ],
        answer: 0,
        explain: "Theo tr. 7 (mục 8.2.1): Chu trình trực tiếp và ngắn gồm Trùng roi, amip, giun kim, Hymenolepis nana, giun xoắn, Pentatrichomonas intestinalis... (giun đũa, giun móc, giun tóc, giun lươn là trực tiếp và dài)."
      },
      {
        q: "Khi rời cơ thể ký chủ qua đường chất ngoại tiết hoặc phân tiết, cặp tác nhân – đường ra nào sau đây ĐÚNG?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 8)",
        options: [
          "Trứng Schistosoma haematobium ra theo nước tiểu; trứng Paragonimus westermani ra theo đàm",
          "Trứng Ascaris lumbricoides ra theo nước tiểu; phôi giun chỉ ra theo phân",
          "Trứng Schistosoma haematobium ra theo dịch vết loét da; Onchocerca volvulus ra theo nước tiểu",
          "Ấu trùng Dracunculus medinensis ra theo đàm; trứng sán lá phổi ra theo nước tiểu"
        ],
        answer: 0,
        explain: "Theo tr. 8 (mục 9.1): Nước tiểu thải trứng S. haematobium; chất phân tiết (đàm) thải trứng sán lá phổi; qua da có ấu trùng D. medinensis và ấu trùng ruồi; dịch vết loét da có Onchocerca volvulus."
      },
      {
        q: "Trong danh sách nguồn nhiễm từ thực phẩm (mục 9.5.3 tr. 9), việc ăn sống CỦ ẤU (Trapa sp.) liên quan trực tiếp đến loại ký sinh trùng nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 9)",
        options: [
          "Fasciolopsis buski (sán lá lớn ở ruột)",
          "Paragonimus westermani (sán lá phổi)",
          "Clonorchis sinensis (sán lá nhỏ ở gan)",
          "Diphyllobothrium latum (sán dải cá)"
        ],
        answer: 0,
        explain: "Theo tr. 9: Cá truyền D. latum và C. sinensis; Tôm cua truyền P. westermani; Thịt heo truyền T. spiralis và T. solium; Thịt bò truyền T. saginata; Củ ấu (Trapa sp.) truyền Fasciolopsis buski."
      },
      {
        q: "Ký sinh trùng nào vừa có thể lây truyền qua đường HÔ HẤP vừa có khả năng gây TỰ NHIỄM (tự bệnh nhân làm mình bội nhiễm)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 8–9)",
        options: [
          "Enterobius vermicularis (giun kim)",
          "Trichuris trichiura (giun tóc)",
          "Fasciola hepatica (sán lá lớn ở gan)",
          "Taenia saginata (sán dải bò)"
        ],
        answer: 0,
        explain: "Theo tr. 8–9: Đường hô hấp gặp Enterobius vermicularis và vi nấm nội tạng; nguồn tự nhiễm gồm Enterobius vermicularis và Strongyloides stercoralis."
      },
      {
        q: "Cặp tác nhân nào sau đây có thể xâm nhập vào thai nhi qua đường LÁ NHAU?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 9)",
        options: [
          "Toxoplasma gondii và Plasmodium sp.",
          "Trichomonas vaginalis và Giardia lamblia",
          "Ascaris lumbricoides và Trichuris trichiura",
          "Enterobius vermicularis và Hymenolepis nana"
        ],
        answer: 0,
        explain: "Theo tr. 9 (mục 9.3.4): KST có thể qua lá nhau vào thai nhi gồm Toxoplasma gondii và Plasmodium sp. (Đường sinh dục gồm T. vaginalis, Leishmania donovani)."
      },
      {
        q: "Theo yếu tố NHÂN CHỦNG trong cơ thể cảm thụ (tr. 9), mức độ nhạy cảm với bệnh sốt rét giữa các chủng tộc được mô tả như thế nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 9)",
        options: [
          "Người da vàng nhạy cảm, người da trắng vừa phải, người da đen rất ít nhạy cảm",
          "Người da đen nhạy cảm nhất, người da vàng miễn nhiễm hoàn toàn",
          "Cả ba nhóm nhân chủng có mức độ nhạy cảm y hệt nhau",
          "Chỉ người da trắng nhạy cảm, người da vàng và da đen không mắc bệnh"
        ],
        answer: 0,
        explain: "Theo tr. 9 (mục 9.4.4): Người da vàng nhạy cảm với sốt rét, người trắng vừa phải, còn người da đen lại rất ít nhạy cảm."
      },
      {
        q: "Ngoài việc ruồi cát Phlebotomus truyền Leishmania donovani, bệnh phẩm nào sau đây của Leishmania donovani cũng được liệt kê trong đường vào SINH DỤC / giao hợp?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 8–9)",
        options: [
          "Đúng, sách liệt kê giao hợp / đường sinh dục gặp cả Trichomonas vaginalis và Leishmania donovani",
          "Sai, chỉ có Trichomonas vaginalis lây qua giao hợp",
          "Leishmania donovani chỉ lây qua ăn thịt heo sống",
          "Leishmania donovani chỉ truyền qua đường lá nhau"
        ],
        answer: 0,
        explain: "Theo mục 9.2.6 (tr. 8) và 9.3.5 (tr. 9): Giao hợp và đường vào sinh dục đều ghi rõ hai tác nhân là Trichomonas vaginalis và Leishmania donovani."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: TƯƠNG TÁC KST – KÝ CHỦ, BIỂU ĐỒ LAVIER & MIỄN DỊCH KÝ SINH TRÙNG
  // ========================================================================
  {
    id: 3,
    group: "I. KÝ SINH HỌC ĐẠI CƯƠNG",
    title: "Bài 3: Tương tác KST – Ký chủ, Biểu đồ Lavier & Miễn dịch KST",
    shortTitle: "Tương tác, Lavier & Miễn dịch",
    textbookRef: "Ký sinh trùng Y học YDS 2015 – Chương 1, Mục 11–12 (tr. 10–14) & Biểu đồ Lavier (tr. 492–496)",
    summary: "Thích nghi thoái hóa & tiến hóa của KST; Tác hại tại chỗ (5 biến đổi tế bào mô) & toàn thân (B12, độc tố, Biểu đồ Lavier); Tiền miễn nhiễm vs Miễn dịch dung nạp; Thảm kháng nguyên Biguet & 4 cơ chế né miễn dịch.",
    simId: "sim_lavier_immunity",
    simTitle: "Phòng Lab Mô phỏng Biểu đồ Lavier, Bảng Cộng đồng Kháng nguyên Biguet & Né Miễn dịch",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">⚔️ 1. Ảnh hưởng của Đời sống Ký sinh &amp; Tác hại Tại chỗ (tr. 10–11)</div>
          <ul class="theory-list">
            <li><strong>Ảnh hưởng trên KST (4 xu hướng):</strong> (1) Mất cơ quan không cần thiết: sán dải mất ống tiêu hóa, sán lá mất cơ quan thị giác, đơn bào mất không bào co thắt; (2) Phát triển cơ quan lấy/dự trữ thức ăn (móc, đĩa hút; vòi hút máu, men hóa lỏng mô; cơ quan dự trữ phì to); (3) Cơ quan sinh dục rất phát triển (đẻ rất nhiều trứng/tăng sinh cao); (4) Luôn tìm cách né/vô hiệu hóa miễn dịch ký chủ.</li>
            <li><strong>Tác hại tại chỗ (6 cơ chế, tr. 11):</strong>
              <ol style="margin-top:4px;padding-left:18px;">
                <li>Hút máu (muỗi; giun móc vừa hút máu vừa làm chảy máu ruột).</li>
                <li>Ăn/hóa lỏng mô: <em>Fasciola hepatica</em> non ăn gan; ve tiết chất hóa lỏng mô.</li>
                <li>Chèn ép gây teo mô: ấu trùng <em>Echinococcus granulosus</em> ở gan, phổi.</li>
                <li>Phá vỡ tế bào nội bào: KST sốt rét phá hồng cầu; vi nấm <em>Histoplasma capsulatum</em> phá mô bào (histiocytes) hệ lưới nội mô.</li>
                <li>Tắc nghẽn cơ học: búi giun đũa tắc ruột non/ống mật/ống tụy; <em>F. hepatica</em> tắc ống mật; giun chỉ tắc bạch huyết → phù voi.</li>
                <li>Phản ứng mô: (a) <strong>Viêm</strong> (giãn mạch, thoát huyết tương/hồng cầu/bạch cầu; KST lớn tạo mạch mới + mô sợi bao bọc); (b) <strong>5 kiểu biến đổi tế bào:</strong></li>
              </ol>
            </li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">🔬 5 Biến đổi Tế bào Mô Kinh điển (tr. 11)</div>
            <ul>
              <li><strong>Quá dưỡng (Hypertrophy – phì to):</strong> Hồng cầu nhiễm <em>Plasmodium vivax</em>.</li>
              <li><strong>Tăng sản (Hyperplasia – tăng số lượng):</strong> <em>Clonorchis sinensis</em> ở ống dẫn mật.</li>
              <li><strong>Chuyển sản (Metaplasia – đổi loại TB):</strong> <em>Paragonimus westermani</em> ở phế quản → tăng sinh mô tuyến niêm mạc phế quản.</li>
              <li><strong>Tăng sản + Tân sinh:</strong> <em>Clonorchis sinensis</em> ở niêm mạc ống dẫn mật.</li>
              <li><strong>Tân sinh ác tính (Neoplasia – ung thư):</strong> <em>Opisthorchis viverrini</em> gây ung thư gan ở người.</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🩸 2. Tác hại Toàn thân &amp; Biểu đồ Lavier (tr. 12–13, 492–499)</div>
          <ul class="theory-list">
            <li><strong>Tước đoạt thức ăn:</strong> <em>Ascaris</em> hấp thụ protein, carbohydrate → suy dinh dưỡng; <strong><em>Diphyllobothrium latum</em> hấp thụ sinh tố B12 → thiếu máu cận-Biermer (anémie para-biermérienne)</strong>.</li>
            <li><strong>Phóng thích chất độc:</strong> <em>Plasmodium</em> sp., <em>Trypanosoma</em> sp., <em>Babesia</em> sp. tiết <strong>hemolysin</strong> vỡ hồng cầu (thiếu máu đẳng sắc); <em>Entamoeba histolytica</em> tiết <strong>histiolysin</strong> tiêu mô; Giun móc tiết <strong>chất kháng đông</strong> → chảy máu niêm mạc ruột non (thiếu máu thiếu sắt).</li>
            <li><strong>Giảm sức đề kháng:</strong> Nhiễm sán lá gan <em>Clonorchis sinensis</em> thường chết vì <strong>bội nhiễm lao</strong>.</li>
            <li><strong>Chuyên chở bệnh khác:</strong> <em>Anopheles</em> (sốt rét), <em>Aedes aegypti</em> (sốt xuất huyết), ruồi tse-tse (<em>Trypanosoma</em>), ruồi đen (<em>Onchocerca volvulus</em>).</li>
            <li><strong>Dị ứng &amp; Phản vệ:</strong> Vỡ nang <em>Echinococcus</em> → <strong>shock phản vệ</strong>; mề đay, hen suyễn, sẩn ngứa vịt.</li>
            <li><strong>Biến đổi huyết học &amp; Biểu đồ Lavier:</strong> KST đa bào (nhất là ký sinh mô; KST đường ruột chỉ tăng lúc xâm nhập mô) làm tăng BCTT (&gt; 3% hoặc &gt; 300/mm³) theo <strong>Biểu đồ Lavier (3 giai đoạn):</strong> (1) <em>Tiềm phục</em>, (2) <em>Tăng nhanh đến cực đại</em> (VD: *Ascaris* 20–40% tuần 1–2 [Loeffler]; *Strongyloides* răng cưa do tự nhiễm Faust; *Toxocara canis* &amp; *Gnathostoma* tới <strong>50–80%</strong>), (3) <em>Giảm tiệm cận 3%</em> (trừ ngõ cụt ký sinh giữ cao kéo dài). Đơn bào (trừ *Toxoplasma*) nói chung KHÔNG tăng BCTT!</li>
            <li><strong>Cơ chế BCTT (Biểu đồ 2.1-1, tr. 492–493):</strong> IgE–dưỡng bào tiết Histamin, SRS-A, ECF, PAF → BCTT dùng <strong>histaminase</strong> (diệt histamin), <strong>aryl sulfatase</strong> (diệt SRS-A), <strong>phospholipase</strong> (phân giải phospholipids) &amp; dọn phức hợp KN–KT.</li>
            <li><strong>Đáp ứng miễn dịch gây hại:</strong> Viêm hạt xơ gan/lách (sán máng), phức hợp miễn dịch thận (<em>Plasmodium malariae</em>).</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🛡️ 3. Miễn dịch Ký sinh trùng, Cộng đồng Kháng nguyên &amp; 4 Cơ chế Né tránh (tr. 13–15)</div>
        <div class="grid-2">
          <div>
            <ul class="theory-list">
              <li><strong>Miễn dịch tự nhiên:</strong> Kháng thể tự nhiên, hàng rào cơ học, pH, nhiệt độ → đào thải tuyệt đối hoặc không hoàn toàn.</li>
              <li><strong>Miễn dịch thu được (MD tế bào + dịch thể):</strong> Chống KST mô/qua mô/phá vỡ niêm mạc. Thể hiện ở giun sán (chậm trưởng thành, còi cọc, giảm sinh dục, tống KST, ngăn tái nhiễm) và đơn bào (chậm phát triển, ngăn tái nhiễm, kháng thể ly giải).</li>
              <li><strong>Tiền miễn nhiễm (Premunition):</strong> Khi <strong>còn KST trong cơ thể</strong> thì bội nhiễm KST đó không làm nặng thêm hay nhẹ đi; <strong>biến mất nhanh chóng khi KST bị loại trừ</strong> (VD: sốt rét, bệnh Chagas).</li>
              <li><strong>Miễn dịch dung nạp (Tolerance):</strong> Trung hòa <strong>tác dụng độc tố</strong> của KST nhưng <strong>không ngăn phát triển số lượng / không hủy diệt KST</strong>, trong máu có kháng thể trung hòa (VD: sốt rét bảo vệ chung cho các giống <em>Plasmodium</em>).</li>
            </ul>
            <div class="callout trap">
              <div class="callout-title">⚠️ Hiện tượng Cộng đồng Kháng nguyên (Biguet &amp; ctv 1962, 1965 – tr. 14)</div>
              <p>Do KST có <strong>thảm kháng nguyên</strong> rất phong phú, giữa các KST gần/xa nhau và thậm chí giữa <strong>KST và vi khuẩn</strong> vẫn có các thành phần KN giống nhau → gây nhiều <strong>phản ứng huyết thanh học chéo</strong>:</p>
              <ul>
                <li><em>Fasciola hepatica</em> có <strong>7</strong> KN chung với <em>Dicrocoelium dendriticum</em>; <strong>6</strong> với <em>Clonorchis sinensis</em>; <strong>5</strong> với <em>Schistosoma mansoni</em>; <strong>4</strong> với <em>Paragonimus westermani</em>; <strong>3</strong> với <em>Taenia saginata</em>; <strong>1</strong> với <em>Ascaris lumbricoides</em>.</li>
                <li>KST ↔ Vi khuẩn: <em>Trichinella spiralis</em> ↔ <em>Salmonella typhi</em>; <em>Leishmania donovani</em> ↔ <em>Mycobacteria</em>.</li>
              </ul>
            </div>
          </div>

          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th>4 Cơ chế KST Né tránh Miễn dịch (tr. 14–15)</th><th>Cơ chế &amp; Đại diện Kinh điển</th></tr></thead>
              <tbody>
                <tr><td><strong>1. Ẩn vào tế bào ký chủ</strong></td><td><em>Toxoplasma gondii, Leishmania</em> sp., <em>Trypanosoma cruzi</em> sống &amp; nhân lên ngay trong tế bào chất đại thực bào, thoát truy lùng của kháng thể.</td></tr>
                <tr><td><strong>2. Tác dụng ức chế miễn dịch</strong></td><td><em>Leishmania</em> sp., <em>Candida albicans</em> tổng hợp chất ức chế miễn dịch → giảm MD → nhiễm mạn tính.</td></tr>
                <tr><td><strong>3. Thay đổi kháng nguyên bề mặt</strong></td><td><em>Trypanosoma gambiense, Trypanosoma rhodesiense</em> và một số KST sốt rét liên tục biến đổi KN bề mặt → rất khó chế tạo vaccin KST.</td></tr>
                <tr><td><strong>4. Ngụy trang &amp; bắt chước KN ký chủ</strong></td><td><em>Schistosoma</em> sp. (và <em>Trypanosoma</em> sp.) thâu nhập KN của ký chủ lên bề mặt (VD: <strong>kháng nguyên nhóm máu ABO</strong>).</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Bạch cầu toan tính trong máu có thể tăng lên đến 80% trong trường hợp nhiễm ký sinh trùng nào sau đây?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 2 (tr. 24)",
        options: [
          "Toxocara canis",
          "Ascaris lumbricoides",
          "Ancylostoma duodenale",
          "Giardia lamblia"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 2E – Toxocara canis. Đơn bào như Giardia lamblia nói chung không tăng BCTT; giun đũa trưởng thành chỉ tăng giai đoạn chu du (~20–40%); còn ngõ cụt ký sinh Toxocara canis BCTT tăng rất cao tới 50–80%."
      },
      {
        q: "Hiện tượng cộng đồng kháng nguyên có thể xảy ra giữa những đối tượng nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 6 (tr. 24)",
        options: [
          "Cả KST họ hàng gần, KST họ hàng xa và giữa KST với vi khuẩn",
          "Chỉ giữa các loài ký sinh trùng có cùng họ hàng gần nhau",
          "Chỉ giữa các loài đơn bào ký sinh trong máu",
          "Chỉ xảy ra ở giai đoạn trứng, không xảy ra ở KST trưởng thành"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 6E (A, B, C đều đúng). Theo tr. 14, cộng đồng kháng nguyên xảy ra ở KST họ hàng gần, KST họ hàng xa (như F. hepatica chung 1 KN với giun đũa) và giữa KST với vi khuẩn (T. spiralis – S. typhi; L. donovani – Mycobacteria)."
      },
      {
        q: "Ký sinh trùng đường ruột nào hấp thu sinh tố B12 trong thức ăn của ký chủ và gây thiếu máu cận-Biermer (anémie para-biermérienne)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 7 (tr. 24)",
        options: [
          "Diphyllobothrium latum",
          "Taenia saginata",
          "Ancylostoma duodenale",
          "Ascaris lumbricoides"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 7 – Diphyllobothrium latum (sán dải cá, tr. 12). Giun móc gây thiếu máu thiếu sắt; D. latum gây thiếu máu cận-Biermer do cướp vitamin B12."
      },
      {
        q: "Đời sống ký sinh trong ruột làm cho một số giun sán phát triển các bộ phận để bám như móc, đĩa hút... Nhận định này đúng hay sai?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 10 (tr. 24)",
        options: [
          "Đúng",
          "Sai, ký sinh trong ruột làm giun sán thoái hóa hết móc và đĩa hút",
          "Sai, chỉ có đơn bào mới phát triển đĩa hút và móc",
          "Chỉ đúng với ngoại ký sinh trùng như con ghẻ"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 10A – Đúng (tr. 4, 10)."
      },
      {
        q: "Miễn dịch dung nạp (tolerance) là miễn dịch trung hòa độc tố của KST nhưng không hủy diệt KST. Nhận định này đúng hay sai?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 18 (tr. 25)",
        options: [
          "Đúng",
          "Sai, miễn dịch dung nạp tiêu diệt toàn bộ KST và ngăn tái nhiễm suốt đời",
          "Sai, miễn dịch dung nạp chỉ là tên gọi khác của tiền miễn nhiễm",
          "Sai, miễn dịch dung nạp là hiện tượng dị ứng do IgE"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 18A – Đúng. Theo tr. 13, miễn dịch dung nạp trung hòa tác dụng độc tố của KST nhưng không ngăn sự phát triển số lượng KST."
      },
      {
        q: "Cặp đôi tác nhân ký sinh trùng – biến đổi tế bào mô nào sau đây ĐÚNG theo tr. 11?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 11)",
        options: [
          "Quá dưỡng: Plasmodium vivax (hồng cầu phì to); Chuyển sản: Paragonimus westermani (phế quản); Tân sinh ác tính: Opisthorchis viverrini (ung thư gan)",
          "Quá dưỡng: Opisthorchis viverrini; Tăng sản: Plasmodium vivax; Chuyển sản: Entamoeba histolytica",
          "Tăng sản: Giardia lamblia; Tân sinh ác tính: Enterobius vermicularis",
          "Chuyển sản: Plasmodium vivax; Quá dưỡng: Clonorchis sinensis"
        ],
        answer: 0,
        explain: "Theo tr. 11: Quá dưỡng (hypertrophy) = hồng cầu nhiễm P. vivax; Tăng sản (hyperplasia) = C. sinensis ở ống mật; Chuyển sản (metaplasia) = P. westermani ở phế quản; Tân sinh (neoplasia ác tính) = Opisthorchis viverrini gây ung thư gan."
      },
      {
        q: "Trong nghiên cứu của Biguet và ctv (1962, 1965), sán lá gan Fasciola hepatica có bao nhiêu thành phần kháng nguyên chung với Clonorchis sinensis và Ascaris lumbricoides?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 14)",
        options: [
          "6 thành phần chung với C. sinensis và 1 thành phần chung với A. lumbricoides",
          "7 thành phần chung với C. sinensis và 3 thành phần chung với A. lumbricoides",
          "5 thành phần chung với C. sinensis và 0 thành phần chung với A. lumbricoides",
          "4 thành phần chung với C. sinensis và 2 thành phần chung với A. lumbricoides"
        ],
        answer: 0,
        explain: "Theo tr. 14: F. hepatica có 7 KN chung với Dicrocoelium dendriticum, 6 với Clonorchis sinensis, 5 với Schistosoma mansoni, 4 với Paragonimus westermani, 3 với Taenia saginata, và 1 với Ascaris lumbricoides."
      },
      {
        q: "Đặc trưng của 'Tiền miễn nhiễm' (Premunition) ở bệnh nhân sốt rét hoặc bệnh Chagas là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 13)",
        options: [
          "Khi còn KST trong cơ thể thì bội nhiễm thêm KST đó không làm thay đổi tương quan bệnh; biến mất nhanh khi KST bị loại trừ",
          "Miễn dịch tồn tại vĩnh viễn suốt đời ngay cả sau khi đã điều trị tiệt căn sạch KST",
          "Miễn dịch hoàn toàn bẩm sinh nhờ kháng thể tự nhiên có từ khi mới sinh",
          "Chỉ trung hòa độc tố KST mà số lượng KST vẫn tăng tự do trong máu"
        ],
        answer: 0,
        explain: "Theo tr. 13: Tiền miễn nhiễm (premunition) phụ thuộc sự hiện diện kéo dài của KST trong cơ thể và biến mất nhanh chóng khi KST bị loại trừ bằng thuốc hoặc đề kháng ký chủ."
      },
      {
        q: "Ký sinh trùng nào dưới đây né tránh đáp ứng miễn dịch bằng cách THÂU NHẬP kháng nguyên nhóm máu ABO của ký chủ lên bề mặt?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 14–15)",
        options: [
          "Schistosoma sp. (sán máng)",
          "Toxoplasma gondii",
          "Trypanosoma gambiense",
          "Candida albicans"
        ],
        answer: 0,
        explain: "Theo mục 12.4.4 (tr. 14–15): Schistosoma sp. ngụy trang và bắt chước kháng nguyên ký chủ (thâu nhập KN nhóm máu ABO). Toxoplasma ẩn trong đại thực bào; T. gambiense thay đổi KN bề mặt; Candida/Leishmania ức chế miễn dịch."
      },
      {
        q: "Trong cơ chế bảo vệ điều hòa phản ứng dị ứng (Biểu đồ 2.1-1, tr. 492–493), bạch cầu toan tính trung hòa chất phản ứng chậm của phản vệ (SRS-A) bằng men nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chuyên đề Bài 1 & Chương 1 (tr. 12, 492–493)",
        options: [
          "Aryl sulfatase",
          "Histaminase",
          "Phospholipase",
          "Collagenase"
        ],
        answer: 0,
        explain: "Theo tr. 492–493: BCTT dùng histaminase vô hiệu hóa histamin, aryl sulfatase vô hiệu hóa SRS-A, và phospholipase phân giải phospholipids từ tiểu cầu (PAF)."
      },
      {
        q: "Khi nhiễm giun lươn (Strongyloides stercoralis), tại sao Biểu đồ Lavier lại có dạng hình RĂNG CƯA với các đỉnh tăng vọt trong giai đoạn giảm?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 & Chuyên đề Bài 1 (tr. 12, 494–495)",
        options: [
          "Do các đợt ấu trùng tự nhiễm nội/ngoại sinh theo chu trình Faust tái xâm nhập mô",
          "Do giun lươn là đơn bào nên không kích thích được BCTT",
          "Do giun lươn tiết độc tố tiêu hủy hoàn toàn tủy xương",
          "Do người bệnh đồng thời uống nhiều thuốc kháng histamin"
        ],
        answer: 0,
        explain: "Theo tr. 494–495 (Biểu đồ 2.1-4): Ở giun lươn, sau đỉnh sơ nhiễm, trong giai đoạn giảm BCTT lại tăng vọt (30–40%) thành hình răng cưa ứng với các đợt tự nhiễm (chu trình Faust)."
      },
      {
        q: "Bệnh nhân nhiễm giun móc lần đầu ở giai đoạn chu du, ngoài thiếu máu thiếu sắt sau đó, tác nhân nào gây tổn thương thận do lắng đọng phức hợp miễn dịch trong bệnh ký sinh trùng?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 12–13)",
        options: [
          "Plasmodium malariae",
          "Entamoeba coli",
          "Enterobius vermicularis",
          "Ascaris lumbricoides"
        ],
        answer: 0,
        explain: "Theo mục 11.2.2.7 (tr. 13): Đáp ứng miễn dịch đôi khi gây hại như shock phản vệ (Echinococcus), viêm hạt xơ gan/lách (sán máng), và phức hợp miễn dịch trong trường hợp nhiễm Plasmodium malariae đưa đến bệnh thận."
      }
    ]
  },

  // ========================================================================
  // BÀI 4: ĐẶC ĐIỂM BỆNH HỌC, DỊCH TỄ, CHẨN ĐOÁN TRỰC TIẾP – GIÁN TIẾP & PHÒNG CHỐNG
  // ========================================================================
  {
    id: 4,
    group: "I. KÝ SINH HỌC ĐẠI CƯƠNG",
    title: "Bài 4: Bệnh học, Dịch tễ, Chẩn đoán Trực tiếp – Gián tiếp & Phòng chống",
    shortTitle: "Chẩn đoán KST & Hình H1.dc",
    textbookRef: "Ký sinh trùng Y học YDS 2015 – Chương 1, Mục 15 (tr. 17–23)",
    summary: "4 đặc điểm & 4 hội chứng bệnh KST; 3 đặc điểm dịch tễ; Chẩn đoán trực tiếp (H1.dc-1, H1.dc-2 NOW Malaria); 5 chỉ định & hệ thống phản ứng Miễn dịch chẩn đoán (H1.dc-3..7, Sabin-Feldman, Bảng tr. 22); Điều trị & 4 trụ cột Dự phòng.",
    simId: "sim_immunodiagnosis",
    simTitle: "Phòng Lab Chọn Kỹ thuật Chẩn đoán & Đọc Kết quả Huyết thanh KST (Bảng tr. 22 + NOW Malaria)",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🩺 1. Đặc điểm Bệnh học, Hội chứng &amp; Dịch tễ học (tr. 17–18)</div>
          <ul class="theory-list">
            <li><strong>4 đặc điểm của bệnh KST:</strong> (1) Có tính phổ biến theo vùng; (2) Theo lý thuyết có thời hạn (giun đũa sống 1 năm, giun kim 2 tháng); (3) Thực tế kéo dài hàng tháng/năm do KST tuổi thọ cao (<em>Clonorchis sinensis</em>) nhưng <strong>lý do chính là liên tục tái nhiễm</strong> trong vùng nội dịch; (4) Phần lớn biểu hiện <strong>rất thầm lặng</strong>.</li>
            <li><strong>4 hội chứng lớn:</strong> (1) Hiện tượng viêm; (2) Hiện tượng nhiễm độc (mạn tính); (3) Hiện tượng hao tổn (giun móc hút ít máu hơn số máu mất do xuất huyết tiêu hóa → thiếu máu trầm trọng); (4) Hiện tượng dị ứng (hen, mề đay, BCTT).</li>
            <li><strong>Diễn biến:</strong> Cấp tính chết ngay (sốt rét ác tính) hoặc thưa dần vào thời kỳ lặng yên rồi trỗi dậy tái phát/tái phát muộn (<em>Plasmodium malariae</em>). Khi khỏi bệnh, <strong>miễn dịch thu được biến mất nhanh chóng</strong>.</li>
            <li><strong>3 đặc điểm Dịch tễ học chủ yếu (Đáp án Câu 13 tr. 555):</strong>
              <ol style="margin-top:4px;padding-left:18px;">
                <li>Bệnh có thể phát thành dịch.</li>
                <li>Khác dịch vi khuẩn/virus (bộc phát nhanh, mau tàn), <strong>dịch do KST diễn ra từ từ và kéo dài</strong>.</li>
                <li>Ở vùng nội dịch, <strong>KST tồn tại hầu như vô tận song song với con người</strong>.</li>
              </ol>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🔬 2. Chẩn đoán Trực tiếp vs Chỉ định Gián tiếp (tr. 18–20)</div>
          <ul class="theory-list">
            <li><strong>Chẩn đoán lâm sàng:</strong> Tính chất mạn tính nên chỉ <em>định hướng</em> (nhất là kèm yếu tố dịch tễ); xác định bệnh cần dựa cận lâm sàng.</li>
            <li><strong>Xét nghiệm trực tiếp:</strong> Nghĩa là <strong>tìm KST trong bệnh phẩm</strong> (soi tươi/nhuộm [<strong>H1.dc-1: Phôi giun chỉ trong cầu thận</strong>], tập trung KST, cấy KST, lấy bệnh phẩm nhiều lần vì phân bố không đều, tìm kháng nguyên hòa tan / KIT nhanh [<strong>H1.dc-2: NOW® Malaria ICT</strong>], tầm soát DNA probe).</li>
            <li><strong>Xét nghiệm gián tiếp (Miễn dịch chẩn đoán):</strong> Áp dụng khi <strong>(1) KST đang ký sinh trong giai đoạn ấu trùng</strong> hoặc di chuyển trong mô chưa trưởng thành; <strong>(2) KST ở những nơi khó tiếp cận</strong> (não, mắt, sâu trong gan/phổi...) hoặc KST loài thú lạc sang người (Đáp án Câu 3 tr. 555).</li>
          </ul>
          <div class="callout warning">
            <div class="callout-title">🛡️ Nguyên tắc Điều trị &amp; 4 Trụ cột Dự phòng (tr. 23, Đáp án Câu 15 tr. 555)</div>
            <p><strong>Điều trị:</strong> Đặc hiệu (thuốc/phẫu thuật) + nâng cao thể trạng toàn diện; vùng rộng lớn cần <strong>điều trị hàng loạt</strong>.<br/>
            <strong>Dự phòng muốn có kết quả phải:</strong> (1) Tiến hành trên <strong>qui mô lớn</strong>; (2) Có <strong>kế hoạch</strong>; (3) Có <strong>trọng tâm trọng điểm</strong>; (4) <strong>Kiên trì và dựa vào quần chúng</strong> (lồng vào chăm sóc sức khỏe ban đầu).</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧪 3. Hệ thống Phản ứng Miễn dịch Chẩn đoán &amp; Bảng So sánh (tr. 20–22)</div>
        <div class="grid-2" style="margin-bottom:12px;">
          <ul class="theory-list">
            <li><strong>Thử nghiệm bì:</strong> Tiêm kháng nguyên (candidine, trichophytine, histoplasmine, leishmanine) vào trong da tìm <strong>quá mẫn muộn</strong> (giá trị điều tra dịch tễ &amp; theo dõi diễn biến).</li>
            <li><strong>Kháng nguyên sống:</strong>
              <br/>• <strong>Sabin–Feldman:</strong> <em>Toxoplasma</em> + kháng thể + xanh methylen (nhuộm sống) → <strong>Dương tính: phá hủy KST và KHÔNG bắt màu xanh</strong>; Âm tính: bắt màu xanh.
              <br/>• <strong>Vogel–Minning (H1.dc-3):</strong> Ấu trùng đuôi chẻ + huyết thanh → <strong>màng ấu trùng dầy lên</strong>.
              <br/>• <strong>Kết tủa quanh trứng (H1.dc-4):</strong> Trứng sán máng + huyết thanh → <strong>kết tủa hình ngón tay</strong>.
              <br/>• <strong>Vi thử nghiệm Roth (Microtest de Roth):</strong> Ấu trùng <em>Trichinella</em> + huyết thanh → <strong>kết tủa ở miệng ấu trùng</strong>.</li>
          </ul>
          <ul class="theory-list">
            <li><strong>Kháng nguyên thân:</strong> <strong>Miễn dịch huỳnh quang (H1.dc-5)</strong>: UV cho <strong>Dương tính = huỳnh quang xanh lá cây</strong>, <strong>Âm tính = màu đỏ</strong>; Ngưng kết hồng cầu / trực tiếp (thảm đỏ / thảm trắng đáy giếng).</li>
            <li><strong>Kháng nguyên hòa tan:</strong> <strong>Ouchterlony (H1.dc-6)</strong> (khuếch tán thạch 3 ngày); <strong>MD điện di (H1.dc-7)</strong> (tạo cung kết tủa, 4 ngày); <strong>Électrosynérèse</strong> (khuếch tán dưới điện trường rút ngắn còn 2 giờ); Cố định bổ thể; RAST/RIST (đo IgE dùng I¹²⁵).</li>
            <li><strong>Miễn dịch men:</strong> ERAT (nhuộm KST trên tiêu bản), <strong>ELISA</strong> (gắn KN hòa tan vào giếng, tự động hóa được), <strong>ELIEDA</strong> (khuếch tán điện trường + phản ứng men hiện cung kết tủa).</li>
          </ul>
        </div>

        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Tiêu chí (Bảng tr. 22)</th>
                <th>Ouchterlony</th>
                <th>MD điện di</th>
                <th>MD khuếch tán điện trường</th>
                <th>Ngưng kết hồng cầu</th>
                <th>MD huỳnh quang</th>
                <th>ELISA (*)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Loại</strong></td><td>Định tính (ĐT)</td><td>Định tính (ĐT)</td><td>Định tính (ĐT)</td><td>Định lượng (ĐL)</td><td>Định lượng (ĐL)</td><td>Định lượng (ĐL)</td></tr>
              <tr><td><strong>Độ nhạy</strong></td><td>+</td><td>++</td><td>++</td><td>+++</td><td>+++</td><td>+++</td></tr>
              <tr><td><strong>Thời gian thực hiện</strong></td><td>3 ngày</td><td>4 ngày</td><td>2 giờ</td><td>2 giờ</td><td>2 giờ</td><td>4 giờ</td></tr>
              <tr><td><strong>Phí tổn</strong></td><td>+</td><td>+</td><td>+</td><td>++</td><td>++</td><td>++++</td></tr>
              <tr><td><strong>Bệnh KST ứng dụng chính</strong></td><td>Sán lá, giòi ruồi, <em>Aspergillus, Candida</em></td><td>Amip, sán máng/lá, giun chỉ/xoắn, <em>Larva migrans</em>, <em>Echinococcus</em>, giòi, nấm</td><td>Amip, sốt rét, <em>Leishmania</em>, sán máng, <em>Echinococcus, Aspergillus, Candida</em></td><td>Amip, sốt rét, <em>Toxoplasma, Trypanosoma</em>, sán máng, giun chỉ, <em>Echinococcus, Aspergillus</em></td><td>Đa số đơn bào, sán máng/lá, giun chỉ/xoắn, <em>Larva migrans</em>, <em>Echinococcus</em>, nấm men/<em>Histoplasma</em></td><td>Amip, sốt rét, <em>Leishmania, Toxoplasma, Trypanosoma</em>, sán máng/lá, giun chỉ/xoắn, <em>Echinococcus, Aspergillus</em></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Miễn dịch chẩn đoán (xét nghiệm gián tiếp) được áp dụng trong hai hoàn cảnh chính nào sau đây?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 3 (tr. 24)",
        options: [
          "KST đang ký sinh trong giai đoạn ấu trùng hoặc ở những nơi khó tiếp cận (não, mắt, sâu trong gan/phổi)",
          "KST trưởng thành đẻ nhiều trứng trong phân và bệnh phẩm dễ soi tươi",
          "Bệnh nhân vừa mới nhiễm đơn bào ruột chưa xâm nhập niêm mạc",
          "Khi cần định danh hình thể hạt phấn hoa lẫn trong phân bệnh nhân"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 3 – (1) KST đang ký sinh trong giai đoạn ấu trùng; (2) KST ở những nơi khó tiếp cận (cũng như KST ở mô, KST loài thú đi lạc qua người – tr. 20)."
      },
      {
        q: "Ba đặc điểm chủ yếu trong dịch tễ học của bệnh ký sinh trùng là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 13 (tr. 25)",
        options: [
          "Bệnh có thể phát thành dịch; dịch diễn ra từ từ và kéo dài; KST tồn tại hầu như vô tận song song với con người",
          "Dịch luôn bộc phát dữ dội trong vài ngày; tự tắt hẳn hoàn toàn; tạo miễn dịch bền vững suốt đời",
          "Không bao giờ phát thành dịch; chỉ gặp ở vùng ôn đới; chỉ lây qua đường máu",
          "Chỉ truyền từ người sang người; hết sau 1 mùa; miễn dịch thu được duy trì trọn đời"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 13 – (1) bệnh có thể phát thành dịch; (2) dịch diễn ra từ từ và kéo dài; (3) KST tồn tại hầu như vô tận song song với con người (tr. 18)."
      },
      {
        q: "Nhận định: 'Xét nghiệm gián tiếp bệnh ký sinh trùng nghĩa là tìm ký sinh trùng trong các bệnh phẩm' là đúng hay sai?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 14 (tr. 25)",
        options: [
          "Sai",
          "Đúng",
          "Đúng nếu dùng phương pháp tập trung phân",
          "Đúng với ký sinh trùng sốt rét nhuộm Giemsa"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 14B – Sai. Tìm KST trong bệnh phẩm là xét nghiệm TRỰC TIẾP (Câu 17 tr. 555); xét nghiệm gián tiếp là miễn dịch chẩn đoán."
      },
      {
        q: "Muốn có kết quả, việc dự phòng bệnh ký sinh trùng phải bảo đảm đủ 4 yêu cầu nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 15 (tr. 25)",
        options: [
          "Tiến hành trên qui mô lớn, có kế hoạch, có trọng tâm trọng điểm, kiên trì và dựa vào quần chúng",
          "Chỉ điều trị đơn lẻ từng ca nặng, không cần kế hoạch, dừng ngay sau 1 tuần, chỉ ngành y tế thực hiện",
          "Chỉ phát thuốc đại trà 1 lần duy nhất mà không cần vệ sinh môi trường hay giáo dục sức khỏe",
          "Chỉ dựa vào phòng xét nghiệm bệnh viện tuyến trung ương, không lồng ghép chăm sóc sức khỏe ban đầu"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 15 – (1) tiến hành trên qui mô lớn; (2) có kế hoạch; (3) có trọng tâm trọng điểm; (4) kiên trì và dựa vào quần chúng (tr. 23)."
      },
      {
        q: "Xét nghiệm gián tiếp bệnh ký sinh trùng gồm các phương pháp sau đây, TRỪ phương pháp nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 16 (tr. 25)",
        options: [
          "Tập trung KST bằng phương pháp thích hợp",
          "Thử nghiệm bì",
          "Phản ứng kết tủa",
          "Miễn dịch hấp phụ gắn men (ELISA) và miễn dịch điện di"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 16D – Tập trung KST bằng phương pháp thích hợp (đây là bước trong xét nghiệm trực tiếp tìm KST trong bệnh phẩm, tr. 18)."
      },
      {
        q: "Theo định nghĩa chuẩn của giáo trình, 'xét nghiệm trực tiếp bệnh ký sinh trùng' nghĩa là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Câu tự lượng giá 17 (tr. 25)",
        options: [
          "Tìm KST trong bệnh phẩm",
          "Tiêm kháng nguyên vào trong da tìm quá mẫn muộn",
          "Đo lượng IgE đặc hiệu bằng đồng vị phóng xạ I125",
          "Tìm kháng thể lưu hành trong huyết thanh bệnh nhân"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 555): 17 – Tìm KST trong bệnh phẩm (soi tươi, nhuộm, tập trung, cấy, phát hiện kháng nguyên hòa tan/KIT nhanh, DNA probe)."
      },
      {
        q: "Trên thực tế tại vùng nội dịch, bệnh ký sinh trùng thường kéo dài hàng tháng, hàng năm dù đời sống mỗi cá thể KST có thời hạn (giun đũa 1 năm, giun kim 2 tháng). Lý do CHÍNH là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 17)",
        options: [
          "Người bệnh liên tục bị tái nhiễm ký sinh trùng trong vùng nội dịch",
          "Mọi loài giun đũa và giun kim đều sống bất tử trên 20 năm",
          "Miễn dịch thu được sau khỏi bệnh tồn tại suốt đời nên giữ KST lại",
          "Do KST chuyển sang dạng bào tử bền nhiệt trong dạ dày"
        ],
        answer: 0,
        explain: "Theo mục 15.1.3 (tr. 17): Dù có một số KST tuổi thọ cao (như C. sinensis), lý do CHÍNH làm bệnh kéo dài hàng tháng/năm là trong vùng nội dịch người bệnh bị liên tục tái nhiễm KST."
      },
      {
        q: "Trong Thử nghiệm màu Sabin–Feldman chẩn đoán Toxoplasma gondii (tr. 20, 22), kết quả DƯƠNG TÍNH được đọc khi quan sát thấy hiện tượng nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 20, 22)",
        options: [
          "Kháng thể phá hủy KST làm Toxoplasma KHÔNG bắt màu xanh methylen",
          "Toxoplasma bắt màu xanh methylen đậm do màng còn nguyên vẹn",
          "Hồng cầu tạo thảm màu đỏ đều ở đáy giếng chữ U",
          "Xuất hiện vòng huỳnh quang màu đỏ gạch dưới ánh sáng cực tím"
        ],
        answer: 0,
        explain: "Theo tr. 20 & sơ đồ tr. 22: Sabin–Feldman dùng xanh methylen (nhuộm sống): Dương tính = kháng thể phá hủy KST nên KST KHÔNG bắt màu xanh methylen; Âm tính = KST còn sống bắt màu xanh."
      },
      {
        q: "Cặp phản ứng kết tủa quanh KST sống và hình ảnh đặc trưng (H1.dc-3, H1.dc-4, tr. 20) nào sau đây ĐÚNG?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 20)",
        options: [
          "Vogel–Minning: màng ấu trùng đuôi chẻ dày lên; Kết tủa quanh trứng: kết tủa hình ngón tay quanh trứng sán máng; Microtest de Roth: kết tủa ở miệng ấu trùng Trichinella",
          "Vogel–Minning: kết tủa hình ngón tay quanh trứng sán máng; Microtest de Roth: huỳnh quang xanh lá cây",
          "Microtest de Roth: màng ấu trùng đuôi chẻ dày lên; Vogel–Minning: kết tủa ở miệng ấu trùng Trichinella",
          "Kết tủa quanh trứng: dùng cho giun đũa; Vogel–Minning: dùng cho Toxoplasma không bắt màu xanh"
        ],
        answer: 0,
        explain: "Theo tr. 20: Phản ứng Vogel–Minning (H1.dc-3) làm màng ấu trùng đuôi chẻ dày lên; phản ứng kết tủa quanh trứng sán máng (H1.dc-4) tạo kết tủa hình ngón tay; vi thử nghiệm Roth tạo kết tủa ở miệng ấu trùng Trichinella."
      },
      {
        q: "Trong phản ứng Miễn dịch huỳnh quang gián tiếp (H1.dc-5, tr. 20–21) quan sát dưới ánh sáng cực tím, kết quả Dương tính và Âm tính có màu gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 20–21)",
        options: [
          "Dương tính = huỳnh quang xanh lá cây; Âm tính = màu đỏ",
          "Dương tính = màu đỏ gạch; Âm tính = huỳnh quang xanh lá cây",
          "Dương tính = thảm đỏ đều đáy giếng; Âm tính = chấm trắng",
          "Dương tính = không bắt màu xanh methylen; Âm tính = màu tím"
        ],
        answer: 0,
        explain: "Theo tr. 20 và H1.dc-5 (tr. 21): Dương tính = huỳnh quang xanh lá cây; Âm tính = màu đỏ."
      },
      {
        q: "Trong Bảng so sánh 6 phản ứng huyết thanh học (tr. 22), nhóm các phản ứng ĐỊNH TÍNH (ĐT) gồm những kỹ thuật nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Bảng tr. 22",
        options: [
          "Ouchterlony (3 ngày), Miễn dịch điện di (4 ngày) và Miễn dịch khuếch tán dưới điện trường (2 giờ)",
          "Ngưng kết hồng cầu, Miễn dịch huỳnh quang và ELISA",
          "Chỉ có Ouchterlony và ELISA",
          "Chỉ có Miễn dịch huỳnh quang và Miễn dịch điện di"
        ],
        answer: 0,
        explain: "Theo Bảng tr. 22: 3 phản ứng định tính (ĐT) là Ouchterlony (nhạy +, 3 ngày), MD điện di (nhạy ++, 4 ngày) và MD khuếch tán dưới điện trường (nhạy ++, 2 giờ). Ba phản ứng định lượng (ĐL, nhạy +++) là Ngưng kết hồng cầu (2 giờ), MD huỳnh quang (2 giờ) và ELISA (4 giờ, phí ++++)."
      },
      {
        q: "Sự khác biệt cốt lõi giữa phương pháp ELIEDA và ELISA thông thường là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 22)",
        options: [
          "ELIEDA kết hợp khuếch tán dưới điện trường để tạo cung kết tủa KN–KT rồi biểu hiện cung kết tủa đó bằng phản ứng men",
          "ELIEDA dùng hồng cầu cừu mẫn cảm cố định bổ thể còn ELISA dùng đồng vị I125",
          "ELIEDA chỉ áp dụng cho KST sống như ấu trùng Trichinella",
          "ELIEDA là xét nghiệm soi phân trực tiếp không dùng kháng thể"
        ],
        answer: 0,
        explain: "Theo tr. 22: ELIEDA (Enzyme Linked Immuno-Electro-Diffusion Assay) kết hợp nguyên tắc MD khuếch tán dưới điện trường với phản ứng men biểu hiện trực tiếp những cung kết tủa KN–KT."
      }
    ]
  }
];
