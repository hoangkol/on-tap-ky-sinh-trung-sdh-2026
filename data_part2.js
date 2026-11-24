// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 2: CHUYÊN ĐỀ II – BỆNH ĐỘNG VẬT KÝ SINH (BÀI 5 ĐẾN BÀI 8)
// Chuẩn Giáo trình Ký sinh trùng Y học (Bộ môn Ký sinh học ĐHYD TP.HCM, NXB Y học 2015) – Phần II, Bài 2 (tr. 504–523)
// ==========================================================================

window.LESSONS_PART2 = [
  // ========================================================================
  // BÀI 5: ĐẠI CƯƠNG, PHÂN LOẠI (BIỂU ĐỒ 2.2-1..3), CƠ SỞ SINH HỌC & TẦM QUAN TRỌNG
  // ========================================================================
  {
    id: 5,
    group: "II. BỆNH ĐỘNG VẬT KÝ SINH",
    title: "Bài 5: Đại cương, Phân loại, Cơ sở Sinh học & Tầm quan trọng Bệnh Động vật",
    shortTitle: "Phân loại & Cơ sở Sinh học",
    textbookRef: "Ký sinh trùng Y học YDS 2015 – Phần II, Bài 2, Mục 1–4 (tr. 504–509)",
    summary: "Định nghĩa Bệnh động vật ký sinh (FAO/WHO); Phân loại: Giả vs Thật (Hoàn chỉnh – Chưa hoàn chỉnh – Một chiều/Ngõ cụt); Cơ sở sinh học (Nôi sinh thái, 4 mức đặc hiệu, Tính năng động Biểu đồ 2.2-5); 4 yếu tố khiến bệnh động vật ngày càng quan trọng.",
    simId: "sim_zoonosis_classifier",
    simTitle: "Phòng Lab Phân loại Bệnh Động vật & Cơ sở Sinh học (5 Biểu đồ 2.2-1 → 2.2-5)",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📖 1. Định nghĩa &amp; Phân loại Bệnh Động vật Ký sinh (tr. 504–506)</div>
          <ul class="theory-list">
            <li><strong>Định nghĩa FAO/WHO (1959, 1967):</strong> Bệnh động vật là bệnh và hiện tượng nhiễm tác nhân gây bệnh lây truyền tự nhiên giữa động vật có xương sống và người (quá rộng vì gồm cả bệnh do độc tố/nọc độc và bệnh thú nhiễm từ người ít quan trọng).</li>
            <li><strong>Định nghĩa chuẩn Bệnh động vật ký sinh (Parasitic zoonoses):</strong> Là những bệnh và những hiện tượng nhiễm ký sinh trùng qua lại tự nhiên giữa <strong>động vật có xương sống và người</strong> (chủ yếu gồm đơn bào và giun sán; <strong>kể cả ngoại KST đào hầm xuyên qua mô</strong>).</li>
            <li><strong>Phân biệt căn bản:</strong>
              <ul style="margin-top:5px;padding-left:18px;">
                <li><strong>Bệnh động vật bắt buộc (Obligate zoonoses):</strong> Truyền từ ĐV có xương sống sang người vs <strong>Tùy nghi (Facultative zoonoses):</strong> Truyền từ người sang người hoặc thú sang thú nhưng có thể sang người.</li>
                <li><strong>Bệnh động vật giả (Biểu đồ 2.2-3):</strong> Nguồn bệnh sống tự do ở ngoại môi, xâm nhập người và thú như một <strong>KST tùy nghi</strong> (VD: <em>Cryptococcus neoformans, Histoplasma capsulatum, Aspergillus</em>...). <em>KST bắt buộc KHÔNG thể gây bệnh động vật giả!</em></li>
                <li><strong>Bệnh động vật thật (Euzoonoses):</strong> Nguồn bệnh là một KST bắt buộc qua lại giữa ĐV có xương sống và người, chia 3 nhóm:</li>
              </ul>
            </li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th>Nhóm Bệnh Động vật Thật</th><th>Đặc điểm &amp; Ví dụ Chuẩn (tr. 505–506, 563–564)</th></tr></thead>
              <tbody>
                <tr><td><strong>(i) Hoàn chỉnh (Holozoonoses)<br/><em>Biểu đồ 2.2-1</em></strong></td><td>Nguồn bệnh truyền qua lại thuận lợi giữa người &amp; ĐV có xương sống (cả hai đều có KST trưởng thành, mũi tên liền). VD: <strong><em>Diphyllobothrium latum, Paragonimus westermani</em></strong>.</td></tr>
                <tr><td><strong>(ii) Chưa hoàn chỉnh (Parazoonoses)<br/><em>Biểu đồ 2.2-1</em></strong></td><td>KST xâm nhập người có khả năng đẻ trứng nhưng <strong>tuổi thọ của trứng giảm rất nhiều</strong> (mũi tên từ người sang ĐV đứt nét).</td></tr>
                <tr><td><strong>(iii) Một chiều (Hemizoonoses)<br/><em>Biểu đồ 2.2-2</em></strong></td><td>KST truyền từ thú sang người <strong>chỉ phát triển đến giai đoạn ấu trùng (hoặc giai đoạn vô tính)</strong> → <strong>Ngõ cụt ký sinh (<em>impasse parasitaire</em>)</strong>. VD: <em>Toxoplasma gondii</em> ở người, <em>Ancylostoma caninum, Toxocara, Gnathostoma, Echinococcus, Sparganum, Angiostrongylus</em>.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy Câu tự lượng giá 13 (tr. 523 &amp; Đáp án tr. 564): <em>Taenia saginata</em>!</div>
            <p>Nhiễm sán dải bò <em>Taenia saginata</em> ở người KHÔNG phải giả, KHÔNG phải hoàn chỉnh, KHÔNG phải chưa hoàn chỉnh, KHÔNG phải một chiều → Chọn <strong>E. Tất cả đều sai</strong>! Vì <strong>người là KCVV</strong> (kết thúc ở người là ký chủ chính), chỉ đối với <em>trâu bò</em> (KCTG) mới là một chiều, còn với người thì chẳng có ý nghĩa bệnh động vật một chiều/hoàn chỉnh nào cả.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🧬 2. Cơ sở Sinh học (Biểu đồ 2.2-4 &amp; 2.2-5) &amp; 4 Yếu tố Tầm quan trọng (tr. 506–509)</div>
          <ul class="theory-list">
            <li><strong>4 yếu tố quyết định chuyển ký chủ (tr. 506):</strong> (i) Tính đặc hiệu ký sinh; (ii) Vị trí ký sinh (<strong>ngoại KST thuận lợi hơn nội KST</strong>); (iii) Yếu tố cộng đồng trong sinh cảnh (thành phố, nông thôn, rừng núi) &amp; sống chung người–thú; (iv) Khả năng tiếp nhận của cơ thể cảm thụ (dinh dưỡng, thiếu đạm/vitamin, suy giảm miễn dịch).</li>
            <li><strong>Nôi sinh thái (Niche écologique – Biểu đồ 2.2-4):</strong> Gồm 5 yếu tố: (a) Nguồn thức ăn (glucid, đạm, lipid, vitamin, khoáng); (b) Sinh học (miễn dịch, men ký chủ); (c) Cơ học (nhu động ruột, dòng chảy dịch); (d) Vật lý (ánh sáng, tối, nhiệt, ẩm, áp suất thẩm thấu); (e) Hóa học (oxy hóa khử, acid, kiềm).</li>
            <li><strong>4 mức đặc hiệu ký chủ (Biểu đồ 2.2-4):</strong> <em>Hẹp (sténoxène)</em> – 1 ký chủ; <em>Tương đối hẹp (oligoxène)</em> – 1–2 ký chủ; <em>Rộng (euryxène)</em> – nhiều ký chủ; <em>Rất rộng (holoxène)</em> – bất kỳ ký chủ nào.</li>
            <li><strong>Lột xác &amp; Tính năng động (Biểu đồ 2.2-5, tr. 507–508):</strong>
              <br/>• Giun muốn lên trưởng thành <strong>bắt buộc phải lột xác</strong> ở cơ quan thích hợp (VD: giun đũa phải lột xác ở phổi; <em>A. caninum</em> ở da người không lên phổi được nên ngõ cụt).
              <br/>• <strong>Tính năng động cao (giun tròn)</strong> → <strong>Hội chứng <em>Larva migrans</em></strong>: Nội tạng (<em>Toxocara</em> spp., <em>Gnathostoma</em> spp.) &amp; Ngoài da (<em>Ancylostoma</em> spp., <em>Uncinaria</em> sp.).
              <br/>• <strong>Tính năng động ít hoặc không có (sán, đơn bào, một số ít giun)</strong> → Viêm da sán máng, <em>Sparganum, Cenurus, Echinococcus, Toxoplasma</em>, Viêm màng não–não do <em>Angiostrongylus</em>.
            </li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">🌍 4 Yếu tố làm Bệnh Động vật Ngày càng Quan trọng (tr. 509, Đáp án Câu 9 tr. 563)</div>
            <p>Hiện biết <strong>~150 bệnh động vật</strong>, trong đó <strong>100 bệnh quan trọng YTCĐ</strong> (đa số là KST). Bốn yếu tố thúc đẩy:</p>
            <ol>
              <li><strong>Phát triển kinh tế:</strong> Xâm nhập rừng núi, nông thôn khai thác làm thay đổi môi trường.</li>
              <li><strong>Hiện tượng đô thị hóa:</strong> Di dân nông thôn vào thành thị kéo theo mầm bệnh; người thành phố chuộng nuôi thú nhỏ trong nhà.</li>
              <li><strong>Du lịch:</strong> Đời sống khá, nhàn rỗi đi du lịch thôn quê/ngoại ô dễ tiếp xúc mầm bệnh.</li>
              <li><strong>Y học phát triển (ức chế miễn dịch):</strong> Thuốc/phương thức ức chế miễn dịch (trị ung thư, dị ứng, ghép tạng) làm bùng dậy bệnh tiềm ẩn (<em>Toxoplasma, Babesia, Plasmodium</em> spp.).</li>
            </ol>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trường hợp nhiễm sán dải cá Diphyllobothrium latum ở người được phân loại thuộc nhóm bệnh động vật nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 2 (tr. 522)",
        options: [
          "Bệnh động vật hoàn chỉnh (Holozoonoses)",
          "Bệnh động vật giả",
          "Bệnh động vật chưa hoàn chỉnh (Parazoonoses)",
          "Bệnh động vật một chiều (Hemizoonoses)"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 2B – Bệnh động vật hoàn chỉnh. Cả người và động vật có xương sống ăn cá đều có thể mang sán trưởng thành và duy trì vòng truyền tự nhiên."
      },
      {
        q: "Nhận định: 'Một ký sinh trùng bắt buộc có thể gây bệnh động vật giả' là đúng hay sai?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 3 (tr. 522)",
        options: [
          "Sai",
          "Đúng",
          "Đúng nếu ký chủ trung gian là chó mèo",
          "Đúng đối với tất cả các loại sán dải"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 3B – Sai. Theo tr. 505 (Biểu đồ 2.2-3), bệnh động vật giả xảy ra khi nguồn bệnh sống tự do ở ngoại cảnh và xâm nhập người/thú như một KST TÙY NGHI (VD: Cryptococcus neoformans, Histoplasma capsulatum, Aspergillus)."
      },
      {
        q: "Nếu không lột xác được thì ấu trùng các loại giun không thể tiến lên giai đoạn trưởng thành. Nhận định này đúng hay sai?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 6 (tr. 522)",
        options: [
          "Đúng",
          "Sai, giun trưởng thành trực tiếp không cần lột xác",
          "Sai, chỉ sán dải mới cần lột xác",
          "Chỉ đúng với ngoại ký sinh trùng chân khớp"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 6A – Đúng (tr. 507–508). Khi thiếu điều kiện nôi sinh thái cần cho sự lột xác (như không thoát lên phổi được), ấu trùng dừng lại và lâm vào ngõ cụt ký sinh."
      },
      {
        q: "Trường hợp nhiễm đơn bào Toxoplasma gondii ở người được xếp vào nhóm bệnh động vật nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 8 (tr. 522)",
        options: [
          "Bệnh động vật một chiều (Hemizoonoses)",
          "Bệnh động vật giả",
          "Bệnh động vật hoàn chỉnh",
          "Bệnh động vật chưa hoàn chỉnh"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 8D – Bệnh động vật một chiều. Giải thích sách: 'Ở người và các động vật ngoài loài Félidés, ký sinh trùng này chỉ có chu trình phát triển vô tính'."
      },
      {
        q: "Bốn yếu tố khiến cho bệnh động vật ngày càng trở nên quan trọng hiện nay là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 9 (tr. 522)",
        options: [
          "Phát triển kinh tế, hiện tượng đô thị hóa, du lịch, và các phương thức/thuốc men gây ức chế miễn dịch",
          "Biến đổi khí hậu băng tan, đột biến gen vi khuẩn, thiếu vắc-xin dại và kháng kháng sinh",
          "Sự gia tăng nghề hầm mỏ, sử dụng phân tươi, nuôi tằm và săn bắt cá voi",
          "Chỉ do du lịch quốc tế và ăn thịt bò sống theo tôn giáo"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 9 – (1) phát triển kinh tế; (2) hiện tượng đô thị hóa; (3) du lịch; (4) các phương thức và thuốc men gây ức chế miễn dịch (tr. 509)."
      },
      {
        q: "Trường hợp nhiễm sán lá phổi Paragonimus westermani ở người thuộc loại nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 11 (tr. 522–523)",
        options: [
          "Bệnh động vật hoàn chỉnh",
          "Bệnh động vật giả",
          "Bệnh động vật chưa hoàn chỉnh",
          "Bệnh động vật một chiều"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 11B – Bệnh động vật hoàn chỉnh (P. westermani trưởng thành được cả ở người lẫn thú ăn thịt như chó, mèo, cọp, beo)."
      },
      {
        q: "Theo đáp án sách giáo khoa, trường hợp nhiễm sán dải bò Taenia saginata ở người thuộc loại bệnh động vật nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 13 (tr. 523)",
        options: [
          "Tất cả các phân loại (giả, hoàn chỉnh, chưa hoàn chỉnh, một chiều) đều sai",
          "Bệnh động vật hoàn chỉnh",
          "Bệnh động vật một chiều",
          "Bệnh động vật chưa hoàn chỉnh"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 564): 13E – Tất cả đều sai. Người là KCVV của T. saginata, trâu bò là KCTG; với trâu bò mới là một chiều, còn với người thì không xếp vào các dạng trên vì người đã là ký chủ chính."
      },
      {
        q: "Một ấu trùng giun có tính năng động cao khi xâm nhập vào cơ thể người (không lên được giai đoạn trưởng thành) sẽ gây ra bệnh cảnh lâm sàng đặc biệt nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 14 (tr. 523)",
        options: [
          "Hội chứng Larva migrans",
          "Bệnh động vật giả (Pseudo-zoonoses)",
          "Bệnh bướu nước (Hydatidose)",
          "Viêm da do sán máng (Schistosome dermatitis)"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 564): 14 – Larva migrans (Biểu đồ 2.2-5, tr. 508: tính năng động cao ở giun tròn → hội chứng Larva migrans nội tạng hoặc ngoài da)."
      },
      {
        q: "Theo Biểu đồ 2.2-1 (tr. 505), điểm khác biệt bản chất của 'Bệnh động vật chưa hoàn chỉnh' (Parazoonoses) so với 'Bệnh động vật hoàn chỉnh' (Holozoonoses) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 505)",
        options: [
          "KST xâm nhập người có khả năng đẻ trứng nhưng tuổi thọ của trứng giảm rất nhiều",
          "KST chỉ phát triển đến giai đoạn ấu trùng, tuyệt đối không bao giờ đẻ trứng",
          "Nguồn bệnh sống tự do ngoài đất và không phải KST bắt buộc",
          "Người là ký chủ chính duy nhất truyền trực tiếp cho nhau"
        ],
        answer: 0,
        explain: "Theo tr. 505: Parazoonoses là khi KST xâm nhập có khả năng đẻ trứng nhưng tuổi thọ của trứng giảm rất nhiều (thể hiện bằng mũi tên đứt nét trên Biểu đồ 2.2-1)."
      },
      {
        q: "Theo Biểu đồ 2.2-4 (tr. 507), thuật ngữ nào mô tả KST có tính đặc hiệu rất rộng, có thể tồn tại ở bất kỳ ký chủ nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 506–507)",
        options: [
          "Holoxène",
          "Sténoxène",
          "Oligoxène",
          "Euryxène"
        ],
        answer: 0,
        explain: "Theo tr. 506–507 & Biểu đồ 2.2-4: Sténoxène (hẹp – 1 ký chủ), Oligoxène (tương đối hẹp – 1–2 ký chủ), Euryxène (rộng – nhiều ký chủ), Holoxène (rất rộng – bất kỳ ký chủ nào)."
      },
      {
        q: "Trong Biểu đồ 2.2-5 (tr. 508), nhóm bệnh nào xếp vào nhánh 'Tính năng động ít hoặc không có' (sán, đơn bào, một số ít giun)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 508)",
        options: [
          "Viêm da sán máng, Sparganum, Cenurus, Echinococcus, Toxoplasma và Viêm màng não–não do Angiostrongylus",
          "Larva migrans do Toxocara canis và Gnathostoma spinigerum",
          "Larva migrans ngoài da do Ancylostoma caninum và Uncinaria stenocephala",
          "Cả hội chứng Larva migrans nội tạng lẫn ngoài da"
        ],
        answer: 0,
        explain: "Theo Biểu đồ 2.2-5 (tr. 508): Nhánh tính năng động ít/không có gồm viêm da do sán máng, bệnh do Sparganum, Cenurus, Echinococcus, Toxoplasma và viêm màng não–não do Angiostrongylus."
      },
      {
        q: "Trên thế giới có khoảng 150 bệnh động vật đã biết; số bệnh có tầm quan trọng về y tế cộng đồng là bao nhiêu và vị trí ký sinh nào thuận lợi hơn cho việc chuyển ký chủ?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 506, 509)",
        options: [
          "Khoảng 100 bệnh quan trọng YTCĐ; ngoại ký sinh trùng thuận lợi hơn nội ký sinh trùng",
          "Khoảng 30 bệnh quan trọng YTCĐ; nội ký sinh trùng thuận lợi hơn ngoại ký sinh trùng",
          "Cả 150 bệnh đều là virus; ngoại KST không bao giờ gây bệnh động vật",
          "Khoảng 10 bệnh; vị trí ký sinh không ảnh hưởng đến sự chuyển ký chủ"
        ],
        answer: 0,
        explain: "Theo tr. 506: Nói chung ngoại KST thuận lợi hơn nội KST khi chuyển từ ký chủ này sang ký chủ khác (và ngoại KST đào hầm xuyên qua mô cũng được xem là bệnh động vật – tr. 504). Tr. 509: 150 bệnh được biết, 100 bệnh quan trọng YTCĐ, đa số là KST."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: HỘI CHỨNG LARVA MIGRANS NGOÀI DA & NỘI TẠNG
  // ========================================================================
  {
    id: 6,
    group: "II. BỆNH ĐỘNG VẬT KÝ SINH",
    title: "Bài 6: Hội chứng Larva migrans Ngoài da & Nội tạng (Ancylostoma, Toxocara, Gnathostoma)",
    shortTitle: "Hội chứng Larva migrans",
    textbookRef: "Ký sinh trùng Y học YDS 2015 – Phần II, Bài 2, Mục 5.1–5.3 (tr. 509–513)",
    summary: "Đường gồ ngoài da do giun móc chó mèo (A. caninum, A. braziliense, U. stenocephala); Larva migrans nội tạng do Toxocara canis/cati (thể trẻ em & thể mắt); Larva migrans do Gnathostoma spinigerum (cá lóc nướng trui, mắm thái, sống đến 17 năm).",
    simId: "sim_larva_migrans",
    simTitle: "Phòng Lab Chẩn đoán Phân biệt & Kê Phác đồ Hội chứng Larva migrans",
    theoryHtml: `
      <div class="card">
        <div class="card-title">🪱 1. So sánh 3 Tác nhân Gây Hội chứng <em>Larva migrans</em> Kinh điển (tr. 509–513)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Đặc điểm</th>
                <th><em>Larva migrans</em> Ngoài da<br/>(Cutaneous Larva Migrans)</th>
                <th><em>Larva migrans</em> Nội tạng<br/>(Toxocariasis / Visceral Larva Migrans)</th>
                <th><em>Larva migrans</em> do<br/><em>Gnathostoma spinigerum</em></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tác nhân &amp; KCVV</strong></td>
                <td><strong><em>Ancylostoma caninum</em></strong>, <em>A. braziliense</em>, <em>Uncinaria stenocephala</em> (ruột chó, mèo).</td>
                <td><strong><em>Toxocara canis</em></strong> (80% chó nhiệt đới, 17–20% ôn đới; chó con &lt; 3–6 tháng; 200.000 trứng/ngày; truyền qua nhau thai/tuyến vú), <em>T. cati</em> (mèo); đôi khi <em>A. suum, A. equorum, Neoascaris vitulorum</em>.</td>
                <td>Giun trưởng thành ở <strong>bướu vách bao tử</strong> chó, mèo, chồn, chim ăn thịt (đực 11–25 mm, cái 25–54 mm, gai cuticule nửa trước, đầu phình <strong>4–8 hàng móc</strong>, trứng có nút trong suốt 1 cực).</td>
              </tr>
              <tr>
                <td><strong>Chu trình &amp; Cách nhiễm vào Người</strong></td>
                <td>Trứng → rhabditiform → <strong>filariform</strong> (lây nhiễm) trên đất/cát ẩm → <strong>chui qua da để hở</strong> (đi chân đất).<br/><em>Lý do ngõ cụt:</em> Men <strong>collagenase KHÔNG làm tiêu được vách tĩnh mạch người</strong> → không về phổi được, bò lang thang dưới da!</td>
                <td>Nuốt trứng có phôi (trẻ <strong>1–4 tuổi</strong> chơi đất/cát/chó, hoặc người lớn nghề gần chó) → <strong>ấu trùng giai đoạn II (L2)</strong> chui vách ruột theo máu lên gan, phổi, não, tim, mắt... sống nhiều tháng/năm.</td>
                <td><strong>Qua 2 KCTG:</strong> Nước (L1) → <strong>KCTG I: lăng quăng đỏ <em>Cyclops</em> sp.</strong> (L2 có đầu phình 4 hàng móc) → <strong>KCTG II: cá, ếch, lươn, rắn</strong> (L3 ở bắp cơ). Người ăn sống/chưa kỹ → miền Nam VN: <strong>cá lóc nướng trui, mắm thái</strong>!</td>
              </tr>
              <tr>
                <td><strong>Lâm sàng &amp; Cận lâm sàng</strong></td>
                <td>Sẩn đỏ → sau 2–3 ngày nổi <strong>đường gồ ngoằn ngoèo</strong> rất ngứa (tốc độ <strong>vài mm – vài cm/ngày</strong>), bóng nước, tự lành sau vài tuần–vài tháng. Hiếm khi lên phổi (hội chứng Loeffler). <strong>KHÔNG gây xuất huyết ruột</strong>.</td>
                <td><strong>Trẻ em:</strong> Sốt nhẹ, gầy, khò khè suyễn, thâm nhiễm phổi, mề đay/phù Quinck, <strong>gan to cứng nhẵn không đau</strong>.<br/><strong>Người lớn:</strong> Đôi khi chỉ giảm thị lực 1 bên (viêm hạt võng mạc/nội nhãn).<br/><strong>BC 10.000–100.000/mm³; BCTT 50–80%</strong> (<em>Chú ý: thể mắt BC có thể không tăng!</em>). Globulin tăng 10–15 lần (IgE, IgG).</td>
                <td>Lên gan (đau thượng vị/HSR, sốt) → <strong>bướu giả viêm xoang bụng</strong>, <strong>mắt</strong> (viêm mống mắt/bồ đào, xuất huyết, hoại tử), <strong>da (cục u di động dưới da, đường hầm)</strong>; phát triển thành giun non, kéo dài <strong>đến 17 năm</strong>! BC <strong>100.000/mm³; BCTT 50–80%</strong>.</td>
              </tr>
              <tr>
                <td><strong>Chẩn đoán &amp; Điều trị</strong></td>
                <td>Dựa dịch tễ &amp; lâm sàng.<br/>• Thiabendazole 25 mg/kg/ngày × 3–5 ngày.<br/>• Flubendazole 500 mg/ngày × 7 ngày.<br/>• Albendazole 2 viên 200 mg/ngày × 3 ngày.<br/>• Tại chỗ: HCH, Lindane 1%, xịt etylchlorur/fréon.</td>
                <td>Sinh thiết gan giá trị chỉ <strong>20%</strong>. Dùng <strong>ELISA với <em>Toxocara excretory-secretory antigen</em></strong>.<br/>• Thiabendazole 50 mg/kg/ngày × 7–10 ngày.<br/>• <strong>DEC (Notezin) 6 mg/kg/ngày × 3 tuần</strong> (giảm triệu chứng 50%).<br/>• Albendazole 2 viên 200 mg/ngày × 3 ngày (+ corticoid/kháng histamin).</td>
                <td>Bắt được ấu trùng/giun non từ sang thương hoặc <strong>phản ứng nội bì</strong> tin cậy.<br/>• Hầu như thuốc giun sán ít tác dụng.<br/>• <strong>DEC (Hetrazan) 0,5–0,7 mg/kg/ngày × 5–7 ngày</strong>.<br/>• Da/mắt: <strong>rạch và gắp giun ra</strong>.<br/>• <em>Dự phòng (Daengsvang &amp; Miyazaki):</em> ngâm cá <strong>dấm đậm đặc 5 giờ 30 phút</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="callout trap">
        <div class="callout-title">⚠️ Tổng hợp các Bẫy Đề thi Cực hay Gặp (Bài 6)</div>
        <ul>
          <li><strong>BCTT tăng đến 80% (Câu 15 tr. 523):</strong> Gặp ở cả <strong><em>Gnathostoma spinigerum</em></strong> và <strong><em>Toxocara canis</em></strong> (50–80%)! (Chú ý: thể ở mắt của <em>Toxocara</em> thì BC máu có thể <em>không</em> tăng!).</li>
          <li><strong><em>Ancylostoma caninum</em> vs <em>A. duodenale</em> (Câu 7 tr. 522):</strong> <em>A. caninum</em> ở người là ngõ cụt ở giai đoạn ấu trùng, KHÔNG trưởng thành ở ruột non để gây xuất huyết đường ruột/thiếu máu như <em>A. duodenale</em>.</li>
          <li><strong>Chú ý liều Thiabendazole &amp; Albendazole:</strong> Ngoài da (25 mg/kg × 3–5 ngày) vs Nội tạng <em>Toxocara</em> (50 mg/kg × 7–10 ngày); Albendazole trong sách đều ghi 2 viên 200 mg/ngày × 3 ngày cho cả 2 thể này!</li>
        </ul>
      </div>
    `,
    questions: [
      {
        q: "Chu trình phát triển của Gnathostoma spinigerum thuộc loại nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 1 (tr. 522)",
        options: [
          "Qua 2 ký chủ trung gian (Cyclops sp. là KCTG I; cá, ếch, lươn, rắn là KCTG II)",
          "Trực tiếp và ngắn",
          "Trực tiếp và dài",
          "Qua 1 ký chủ trung gian duy nhất là ốc sên cạn"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 1D – Qua 2 ký chủ trung gian (tr. 512: KCTG I là lăng quăng đỏ Cyclops sp., KCTG II là cá, ếch, lươn, rắn)."
      },
      {
        q: "Tại miền Nam Việt Nam, món ăn đặc sản nào là nguồn lây nhiễm kinh điển của Gnathostoma spinigerum (được hỏi trực tiếp ở Câu 5 và Câu 12 tr. 522–523)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 5 & 12 (tr. 522–523)",
        options: [
          "Cá lóc nướng trui chưa kỹ và mắm thái",
          "Nem chua thịt heo sống và thịt bò tái",
          "Rau xà lách xoong và củ ấu sống",
          "Ốc bươu nhồi và mắm tôm chua"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 5C (Cá lóc trui chưa kỹ) và 12C (Mắm thái). Theo tr. 512: Ở miền Nam VN cần chú ý 2 món đặc sản là cá lóc nướng trui và mắm thái."
      },
      {
        q: "Nhận định: 'Ancylostoma caninum có thể gây thiếu máu cho người như Ancylostoma duodenale' là đúng hay sai?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 7 (tr. 522)",
        options: [
          "Sai",
          "Đúng",
          "Đúng nếu đi chân đất nhiều lần",
          "Đúng vì đều trưởng thành trong ruột non người"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 7B – Sai. A. caninum không trưởng thành được ở ruột non người mà chỉ dừng ở giai đoạn ấu trùng gây Larva migrans (ngoài da), không gây xuất huyết đường ruột như A. duodenale."
      },
      {
        q: "Hội chứng Larva migrans ngoài da được gây ra do ấu trùng của loài ký sinh trùng nào dưới đây?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 10 (tr. 522)",
        options: [
          "Ancylostoma caninum (cùng A. braziliense, Uncinaria stenocephala)",
          "Ancylostoma duodenale",
          "Ascaris lumbricoides",
          "Toxocara canis và Toxocara cati"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 10B – Ancylostoma caninum (cùng A. braziliense, Uncinaria stenocephala – tr. 509)."
      },
      {
        q: "Trong các bệnh động vật sau, bệnh nào làm cho bạch cầu toan tính trong máu tăng lên đến 80%?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 15 (tr. 523)",
        options: [
          "Cả Larva migrans do Gnathostoma spinigerum và Larva migrans do Toxocara canis",
          "Chỉ có Viêm màng não–não do Angiostrongylus cantonensis",
          "Chỉ có Larva migrans do Toxocara canis",
          "Chỉ có Larva migrans ngoài da do Ancylostoma caninum"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 564): 15E (A và C đúng: Larva migrans do Gnathostoma spinigerum và Larva migrans do Toxocara canis đều làm BCTT tăng 50–80%)."
      },
      {
        q: "Cơ chế sinh học khiến ấu trùng Ancylostoma caninum bị kẹt dưới da người và bò ngoằn ngoèo (tốc độ vài mm đến vài cm/ngày) thay vì vào phổi và ruột như ở chó mèo là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 509)",
        options: [
          "Men collagenase của ấu trùng không làm tiêu được vách tĩnh mạch người nên không thể trở về phổi",
          "Nhiệt độ da người quá lạnh làm ấu trùng đóng kén vĩnh viễn ngay tại lỗ chân lông",
          "Bạch cầu trung tính người tiết aryl sulfatase làm tê liệt vòi hút của ấu trùng",
          "Ấu trùng bắt buộc phải qua giáp xác Cyclops mới vào được tĩnh mạch"
        ],
        answer: 0,
        explain: "Theo tr. 509: Khi chui qua da người, vì men collagenase không làm tiêu vách tĩnh mạch người nên ấu trùng không thể trở về phổi (như ở chó mèo), đành bò lang thang ở mô dưới da."
      },
      {
        q: "Trên lâm sàng, bệnh nhân bị nhiễm Toxocara thể nào cần lưu ý rằng số lượng BẠCH CẦU TRONG MÁU CÓ THỂ KHÔNG TĂNG?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 511)",
        options: [
          "Thể bệnh ở mắt (viêm hạt võng mạc / viêm nội nhãn mạn tính)",
          "Thể bệnh cấp tính ở gan lách trẻ 1–4 tuổi",
          "Thể phổi có thâm nhiễm Loeffler và khó thở dạng suyễn",
          "Thể lan tỏa kèm phù Quinck và hồng ban đa dạng"
        ],
        answer: 0,
        explain: "Theo mục 5.2.4.1 (tr. 511): Dù bạch cầu thường tăng 10.000–100.000/mm³ (BCTT 50–80%), sách cảnh báo: 'Nhưng coi chừng bạch cầu có thể không tăng trong thể bệnh ở mắt'."
      },
      {
        q: "Trong chẩn đoán xác định Larva migrans nội tạng do Toxocara, giá trị của sinh thiết gan và phương pháp huyết thanh học đặc hiệu hiện nay lần lượt là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 511)",
        options: [
          "Sinh thiết gan chỉ có giá trị trong 20% trường hợp; ELISA dùng kháng nguyên ngoại tiết – phân tiết (Toxocara ES antigen) cho kết quả đặc hiệu hơn",
          "Sinh thiết gan dương tính 95%; Cố định bổ thể là đặc hiệu nhất không bao giờ phản ứng chéo",
          "Soi phân tìm trứng Toxocara là tiêu chuẩn vàng ở người",
          "Phản ứng Casoni tiêm nội bì 0,1 ml là xét nghiệm chuẩn cho Toxocara"
        ],
        answer: 0,
        explain: "Theo mục 5.2.4.2 (tr. 511): Sinh thiết gan chỉ có giá trị trong 20% các trường hợp; các phản ứng huyết thanh cũ hay có phản ứng chéo, hiện nay dùng Toxocara excretory-secretory antigen với ELISA cho kết quả đặc hiệu hơn."
      },
      {
        q: "Đặc điểm sinh học nào giúp duy trì tỷ lệ nhiễm Toxocara canis lên đến 80% ở chó vùng nhiệt đới, đặc biệt ở chó con dưới 3–6 tháng tuổi?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 510)",
        options: [
          "Giun đẻ ~200.000 trứng/ngày và ở chó mẹ có thai ấu trùng chui qua lá nhau vào bào thai hoặc vào tuyến vú lây khi chó con bú mẹ",
          "Chó bị lây duy nhất khi ăn thịt cá lóc sống chứa nang L3",
          "Ấu trùng tự phân chia vô tính liên tục trong thành bướu bao tử chó",
          "Chó lớn miễn dịch kém hơn chó con nên mang hàng ngàn giun trưởng thành"
        ],
        answer: 0,
        explain: "Theo tr. 510: Giun cái đẻ ~200.000 trứng/ngày; chó con &lt; 3–6 tháng có giun trưởng thành ở ruột non (chó lớn do miễn dịch đẩy giun ra ngoài); chó mẹ mang thai truyền ấu trùng qua lá nhau và qua sữa tuyến vú cho chó con."
      },
      {
        q: "Liều dùng diethylcarbamazine (Notezin) trong điều trị Larva migrans nội tạng do Toxocara và diethylcarbamazine (Hetrazan) cho Gnathostoma spinigerum trong sách là bao nhiêu?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 511–512)",
        options: [
          "Toxocara: DEC 6 mg/kg/ngày × 3 tuần (giảm triệu chứng 50%); Gnathostoma: DEC 0,5–0,7 mg/kg/ngày × 5–7 ngày",
          "Toxocara: DEC 0,5 mg/kg/ngày × 3 ngày; Gnathostoma: DEC 50 mg/kg/ngày × 28 ngày",
          "Cả hai bệnh đều dùng DEC 14 mg/kg/ngày trong 28 ngày liên tục",
          "Không dùng DEC cho cả hai bệnh, chỉ dùng Metronidazole"
        ],
        answer: 0,
        explain: "Theo tr. 511 & 512: Toxocara dùng Thiabendazole 50 mg/kg × 7–10 ngày hoặc DEC (Notezin) 6 mg/kg/ngày × 3 tuần (hoặc Albendazole 2 viên 200 mg × 3 ngày); Gnathostoma dùng DEC (Hetrazan) 0,5–0,7 mg/kg/ngày × 5–7 ngày (hoặc rạch gắp giun)."
      },
      {
        q: "Đặc điểm hình thể nhận diện giun Gnathostoma spinigerum trưởng thành là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 511–512)",
        options: [
          "Thân cong, gai cuticule ở nửa trước, đầu phình có 4–8 hàng móc, trứng hình oval vỏ lấm tấm với một cực có nút trong suốt",
          "Sán dải bé dài 3–6 mm chỉ có 3 đốt và tử cung 15–20 túi nhỏ",
          "Thân dài 60 cm, đốt già có tử cung hình hoa hồng ở giữa",
          "Đầu có 4 đĩa hút không có móc, lỗ sinh dục nằm xen kẽ đều hai bên"
        ],
        answer: 0,
        explain: "Theo tr. 511–512: Giun đực dài 11–25 mm, cái 25–54 mm, thân cong, gai cuticule ở nửa trước, đầu phình có 4–8 hàng móc; trứng oval vỏ lấm tấm có nút trong suốt ở một cực."
      },
      {
        q: "Theo thực nghiệm của Daengsvang và Miyazaki (tr. 512), biện pháp chế biến nào có thể diệt được ấu trùng Gnathostoma trong thịt cá?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 512)",
        options: [
          "Ngâm cá vào dấm đậm đặc trong 5 giờ 30 phút (hoặc nấu chín kỹ)",
          "Ướp muối nhạt trong 15 phút trước khi làm mắm thái",
          "Nướng trui sơ qua lửa rơm trong 2 phút",
          "Rửa qua nước cốt chanh tươi trong 10 phút"
        ],
        answer: 0,
        explain: "Theo mục 5.3.6 (tr. 512): Ăn cá, ếch nhái, rắn, lươn nấu chín; theo Daengsvang và Miyazaki, ngâm cá vào dấm đậm đặc 5 giờ 30 phút có thể diệt được giun."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: VIÊM MÀNG NÃO ANGIOSTRONGYLUS, ANISAKINAE & NANG SÁN ECHINOCOCCUS
  // ========================================================================
  {
    id: 7,
    group: "II. BỆNH ĐỘNG VẬT KÝ SINH",
    title: "Bài 7: Angiostrongylus cantonensis, Anisakinae & Bệnh Nang sán Echinococcus",
    shortTitle: "Angiostrongylus, Anisakis & Hydatid",
    textbookRef: "Ký sinh trùng Y học YDS 2015 – Phần II, Bài 2, Mục 5.4–5.6 (tr. 513–518) & H 1.4-33..36 (tr. 277–279)",
    summary: "Viêm màng não tăng BCTT do Angiostrongylus cantonensis (ốc Achatina fulica, DNT 400–500 TB/mm³, 40–50% BCTT, liệt TK VII); Bệnh Anisakinae từ cá biển (-20°C/24h); Nang Hydatid Echinococcus granulosus (cấu trúc màng cứng/phiến/sinh mầm/cát sán, Cấm chọc hút, Casoni, CFT, formalin 10%).",
    simId: "sim_neuro_hydatid",
    simTitle: "Phòng Lab Giải mã Ca bệnh & An toàn Thủ thuật (Angiostrongylus – Anisakis – Hydatid)",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧠 1. Viêm màng não – não do <em>Angiostrongylus cantonensis</em> (tr. 513–514)</div>
          <ul class="theory-list">
            <li><strong>Chu trình ở chuột:</strong> Giun trưởng thành sống ở <strong>động mạch phổi chuột</strong> → trứng đẻ vào máu đến vách phế nang thành phôi (6 ngày) → nở L1 lên phế quản, nuốt xuống phân.</li>
            <li><strong>KCTG &amp; Chu trình lây:</strong> Ốc cạn/nửa nước như <strong><em>Achatina fulica</em></strong> (ốc sên), <em>Pila ampullacea</em> (Malaysia/Thái Lan) phát triển <strong>ấu trùng giai đoạn III (L3)</strong>. Tôm, cua, đỉa phiến nuốt ốc trở thành nguồn truyền bệnh. Ở chuột: sau nuốt L3, theo máu lên não thành giun non (sau <strong>7 giờ</strong>), ở 2 tuần rồi xuống ĐM phổi trưởng thành.</li>
            <li><strong>Ở người (ngõ cụt ký sinh):</strong> Ăn ốc, rau sống dính dịch/ốc chết, tôm, cua, đỉa phiến sống → L3 lên màng não &amp; não gây viêm (gặp ở Viễn Đông, ĐNÁ, Úc, Tahiti <em>taioro</em>, Bắc &amp; Nam VN).</li>
            <li><strong>Lâm sàng &amp; Chẩn đoán:</strong> Viêm màng não cấp / giả bướu não tăng áp lực nội sọ; nhức đầu dữ dội, sốt nhẹ/không sốt (~15% dấu kích thích màng não); đôi khi <strong>liệt dây TK VII</strong>, song thị, dị cảm (paresthésie). <strong>DNT trong hoặc đục, vô khuẩn, albumin tăng, 400–500 tế bào/mm³, trong đó 40–50% là BCTT</strong> (tr. 513; rất hiếm thấy giun non trong DNT); phản ứng nội bì hữu ích.</li>
            <li><strong>Điều trị:</strong> <strong>Không có thuốc điều trị đặc hiệu</strong>; điều trị triệu chứng (giảm đau, chọc dò rút DNT giảm áp lực, kháng viêm).</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🐟 2. Bệnh do ấu trùng họ <em>Anisakinae</em> (Anisakiase) (tr. 514–515)</div>
          <ul class="theory-list">
            <li><strong>Tác nhân &amp; KCVV:</strong> <em>Anisakis, Contracecum, Phocanema</em> ký sinh ở <strong>bao tử động vật hữu nhũ biển</strong> (cá voi, cá heo, sư tử biển, hải cẩu, hải mã).</li>
            <li><strong>Chu trình:</strong> Trứng nở L1/L2 sau 20–30 ngày trong nước biển (5–7°C) → giáp xác biển (tôm) nuốt → KCTG II là <strong>cá biển &amp; mực</strong> (cá mòi, cá thu, cá hồi, cá cháy, bạch tuộc, mực) chứa <strong>L3</strong>.</li>
            <li><strong>Ở người (ngõ cụt):</strong> Ăn cá biển sống/nấu chưa kỹ (Hà Lan, Pháp, Nhật...) → L3 chui vách ống tiêu hóa tạo <strong>u hạt giàu BCTT</strong>:
              <br/>• <em>Thể bao tử:</em> hội chứng giả loét, <strong>giả ung thư</strong>, xuất huyết tiêu hóa.
              <br/>• <em>Thể ruột:</em> tắc ruột / giả tắc ruột. (Cũng gặp ở thực quản, ruột già, tụy, gan).</li>
            <li><strong>Chẩn đoán – Điều trị – Dự phòng:</strong>
              <br/>• Nội soi + sinh thiết thấy ấu trùng; thiếu máu nhược sắc; MD điện di / thấm (immunoblot).
              <br/>• <strong>Điều trị duy nhất có hiệu quả: giải phẫu cắt bỏ u hạt có KST</strong> (chưa có thuốc đặc trị).
              <br/>• <strong>Dự phòng:</strong> Nấu chín hoặc <strong>đông lạnh -20°C trong 24 giờ</strong>. Lưu ý: <strong>muối cá hoặc hun khói KHÔNG làm chết ấu trùng</strong>!</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🫧 3. Bệnh do ấu trùng <em>Echinococcus granulosus</em> (Hydatidose) &amp; Bộ hình H 1.4-33..36 (tr. 515–518, 277–280)</div>
        <div class="grid-2">
          <div>
            <ul class="theory-list">
              <li><strong>Sán trưởng thành (H 1.4-33):</strong> Sán dải nhỏ nhất y học (<strong>3–6 mm</strong>), đầu 4 đĩa hút + 1 hàng móc đôi (hoặc 2 hàng móc), cổ ngắn, <strong>3 đốt</strong> (đốt non; đốt trưởng thành 45–60 tinh hoàn; đốt già vài trăm trứng 45 × 35 µm) sống ở <strong>ruột non chó</strong>, chó sói, chồn.</li>
              <li><strong>Chu trình (H 1.4-36):</strong> KCTG tự nhiên là <strong>cừu</strong>, trâu bò, ngựa, heo. Người nhiễm khi vuốt lông chó (trứng dính hậu môn/lông chó) hoặc ăn rau sống → phôi 6 móc qua tĩnh mạch cửa định vị thành nang <em>hydatid</em> (ngõ cụt cảnh ngộ).</li>
              <li><strong>Cấu tạo bướu 1–7 cm (lớn tới 20 cm, H 1.4-34 &amp; H 1.4-35):</strong> Từ ngoài vào trong: (1) <em>Màng cứng</em> (mô sợi ký chủ); (2) <strong>Màng phiến (laminated membrane)</strong> dày ~1 mm, không nhân, thấm chọn lọc; (3) <strong>Lớp sinh mầm (germinal layer)</strong> mỏng dễ vỡ, hợp bào có nhân → sinh <strong>bọc sinh mầm (brood capsule)</strong> &amp; đầu sán; (4) <em>Bướu con nội/ngoại sinh</em>; (5) <strong>Cát sán (hydatid sand)</strong> tới <strong>2.000.000 đầu sán</strong> trong dịch vô khuẩn; (6) <em>Sterile cyst</em> nếu mất hết đầu sán.</li>
              <li><strong>Phân bố vị trí bướu:</strong> <strong>Gan &amp; phúc mạc 66% (&gt;75% ở thùy phải)</strong>, <strong>Phổi 22%</strong>, Thận 3%, Xương 2% (xốp dễ gãy, ít dịch/không đầu sán), Cơ quan khác 6%.</li>
            </ul>
          </div>
          <div>
            <ul class="theory-list">
              <li><strong>Biến chứng nguy hiểm:</strong> Bướu vỡ (ho, chấn thương, lúc mổ) → đầu sán phát tán tạo bướu thứ phát sau <strong>2–5 năm</strong> + dịch bướu vào máu gây <strong>shock phản vệ chết người</strong> (BCTT tăng trong 50% trường hợp). Tiên lượng xấu khi: không mổ được, nhiễm khuẩn thứ cấp, đã vỡ phát tán, hoặc bướu ở xương.</li>
              <li><strong>Chẩn đoán (tr. 517):</strong>
                <br/>• <strong>TUYỆT ĐỐI KHÔNG ĐƯỢC CHỌC HÚT BƯỚU SÁN!</strong> (nguy cơ shock phản vệ &amp; gieo rắc đầu sán).
                <br/>• X quang (bướu phổi/hóa vôi); Scanning đồng vị phóng xạ (bướu không hóa vôi); Siêu âm cắt lớp.
                <br/>• <strong>Thử nghiệm bì Casoni (IDR):</strong> Tiêm nội bì <strong>0,1 ml</strong> dịch bướu, đọc sau <strong>20 phút</strong>, (+) khi sẩn ≥ <strong>1,6 cm²</strong>. Nhạy &gt;85%, dương sai 18%; <strong>(+) tiếp tục hàng năm sau mổ hoặc bướu hóa vôi</strong>.
                <br/>• <strong>CFT (Cố định bổ thể):</strong> (+) 80–90% khi bướu sống, <strong>(-) khi bướu chết/hóa vôi → dùng kiểm tra sót bướu sau mổ!</strong>
                <br/>• BFT (+) ≥ 1/5, IFA (+) ≥ 1/400 ((+) 82% gan, 33–50% phổi); ELISA / RAST.</li>
              <li><strong>Điều trị:</strong> Bóc cả bướu (énucléation): <strong>hút dịch + bơm formalin 10%</strong> (tr. 517; tr. 280 ghi formol 2%) diệt đầu sán/màng sinh mầm; bướu to nhiễm khuẩn làm <em>marsupialisation</em>. Nội khoa: <strong>Albendazole 14 mg/kg/ngày (600–700 mg/ngày) × 28 ngày</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trong chu trình phát triển của Angiostrongylus cantonensis, đâu là ký chủ trung gian điển hình chứa ấu trùng giai đoạn III (L3) gây nhiễm cho người?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 513)",
        options: [
          "Ốc sên sống trên cạn / nửa nước như Achatina fulica và Pila ampullacea (ngoài ra tôm, cua, đỉa phiến nuốt ốc cũng truyền được)",
          "Lăng quăng đỏ Cyclops sp. và cá lóc nước ngọt",
          "Bò và cừu ăn cỏ ven đồng",
          "Cá thu, cá mòi và mực sống ở vùng biển lạnh 5–7°C"
        ],
        answer: 0,
        explain: "Theo mục 5.4.1 (tr. 513): Giun trưởng thành sống ở ĐM phổi chuột; KCTG phổ biến là ốc Achatina fulica (và Pila ampullacea ở Malaysia/Thái Lan) phát triển L3; tôm, cua, đỉa phiến nuốt ốc cũng nhiễm L3."
      },
      {
        q: "Kết quả xét nghiệm dịch não tủy (DNT) điển hình của bệnh nhân viêm màng não tăng BCTT do Angiostrongylus cantonensis theo Phần II Bài 2 (tr. 513) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 513)",
        options: [
          "DNT trong hoặc đục, vô khuẩn, albumin tăng, 400–500 tế bào/mm³ với 40–50% là bạch cầu toan tính; rất hiếm thấy giun non trong DNT",
          "DNT đục như mủ, đường giảm mạnh, cấy ra vi khuẩn và luôn thấy hàng chục giun trưởng thành",
          "DNT hoàn toàn bình thường về tế bào và albumin, chỉ tìm thấy trứng giun",
          "DNT toàn hồng cầu tươi, bạch cầu toan tính 0%"
        ],
        answer: 0,
        explain: "Theo mục 5.4.4 (tr. 513): DNT trong, đôi khi đục, vô khuẩn, albumin tăng, 400–500 tế bào/mm³ trong đó 40–50% là BCTT (rất hiếm thấy giun non trong DNT). Chú ý tr. 499 ghi có thể lên 65–90%."
      },
      {
        q: "Biến chứng thần kinh sọ nào có thể gặp kèm nhức đầu dữ dội, song thị và dị cảm trong viêm màng não do Angiostrongylus cantonensis?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 513)",
        options: [
          "Liệt dây thần kinh VII (kèm ~15% dấu kích thích màng não)",
          "Liệt dây thần kinh X gây ngừng tim tức thì ở mọi bệnh nhân",
          "Mất khứu giác hoàn toàn kèm điếc hai tai không hồi phục",
          "Bệnh thường gây tử vong 90% vì chưa có thuốc điều trị đặc hiệu"
        ],
        answer: 0,
        explain: "Theo mục 5.4.3 (tr. 513): Khoảng 15% có dấu kích thích màng não, thường bình phục ngẫu nhiên sau vài ngày/tuần; đôi khi có liệt thần kinh VII, song thị, rối loạn cảm giác (paresthésie), liệt hay mất phản xạ gân cơ."
      },
      {
        q: "Phương pháp điều trị duy nhất có hiệu quả đối với u hạt do ấu trùng họ Anisakinae ở dạ dày – ruột và biện pháp dự phòng đúng cho cá biển là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 514–515)",
        options: [
          "Giải phẫu cắt bỏ u hạt (chưa có thuốc đặc trị); dự phòng bằng nấu chín hoặc đông lạnh -20°C trong 24 giờ (muối/hun khói không diệt được)",
          "Uống Albendazole 2 viên 200 mg trong 3 ngày; dự phòng bằng muối cá và hun khói",
          "Chọc hút dịch u hạt qua nội soi; dự phòng bằng ngâm nước cốt chanh",
          "Uống DEC 0,5 mg/kg × 5 ngày; dự phòng bằng phơi nắng 2 giờ"
        ],
        answer: 0,
        explain: "Theo mục 5.5.5–5.5.6 (tr. 514–515): Giải phẫu cắt bỏ u hạt là phương pháp duy nhất hiệu quả (chưa có thuốc đặc trị). Dự phòng bằng nấu chín hoặc đông lạnh -20°C trong 24 giờ; muối cá hoặc hun khói không diệt được ấu trùng."
      },
      {
        q: "Cơ quan nào có tỷ lệ định vị nang Echinococcus granulosus cao nhất ở người (theo ước lượng trong Phần II Bài 2, tr. 516)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 516)",
        options: [
          "Gan và phúc mạc (66%, trong đó >75% ở thùy phải gan), tiếp đến là phổi (22%)",
          "Phổi (66%), tiếp đến là não (22%) và gan (3%)",
          "Xương dài (66%), tiếp đến là thận (22%)",
          "Cơ tim và tuyến giáp (66%)"
        ],
        answer: 0,
        explain: "Theo mục 5.6.3 (tr. 516): 66% bướu ở gan và phúc mạc (&gt;75% ở thùy phải gan), 22% ở phổi, 3% ở thận, 2% ở xương, 6% ở cơ quan khác."
      },
      {
        q: "Trong cấu trúc giải phẫu vi thể của nang Hydatid (H 1.4-34 & H 1.4-35, tr. 278 & 515), lớp nào sinh ra các đầu sán (protoscolices) và các bọc sinh mầm?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 515) & H 1.4-34",
        options: [
          "Lớp sinh mầm (germinal layer) – lớp hợp bào có nhân nằm bên trong màng phiến",
          "Màng phiến (laminated membrane) dày 1 mm không nhân bên ngoài",
          "Màng cứng do phản ứng mô sợi của ký chủ tạo ra",
          "Bướu con ngoại sinh tách hoàn toàn khỏi ký chủ"
        ],
        answer: 0,
        explain: "Theo tr. 515: Màng phiến không nhân dày ~1 mm hoạt động như màng thẩm thấu chọn lọc; Lớp sinh mầm (germinal layer) rất mỏng, dễ vỡ, tạo bởi hợp bào có nhân, sinh ra đầu sán và các bọc sinh mầm (tới 2.000.000 đầu sán)."
      },
      {
        q: "Thái độ xử trí bắt buộc khi nghi ngờ bệnh nhân có khối nang sán Echinococcus granulosus ở gan hoặc phổi là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 517)",
        options: [
          "TUYỆT ĐỐI KHÔNG chọc hút bướu sán để chẩn đoán vì nguy cơ shock phản vệ tử vong và phát tán đầu sán thứ phát",
          "Chọc dò kim nhỏ dưới hướng dẫn siêu âm ngay tại phòng khám để soi tìm cát sán",
          "Sinh thiết bấm mô nang qua nội soi phế quản thường quy",
          "Chỉ theo dõi bằng cấy máu ngoại vi tìm đầu sán"
        ],
        answer: 0,
        explain: "Theo mục 5.6.4.3 (tr. 517): 'Tuyệt đối không được chọc hút bướu sán' vì dịch thoát vào máu gây shock phản vệ có thể chết và đầu sán phát tán tạo bướu thứ phát (2–5 năm sau)."
      },
      {
        q: "Khác biệt thực hành quan trọng nhất giữa Thử nghiệm bì Casoni và Thử nghiệm Cố định bổ thể (CFT) trong theo dõi bệnh nhân sau mổ bướu Hydatid là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 517)",
        options: [
          "Casoni tiếp tục (+) hàng năm sau mổ hoặc khi bướu hóa vôi; còn CFT chuyển (–) khi bướu chết/hóa vôi nên dùng kiểm tra khả năng còn sót bướu sau mổ",
          "Casoni chuyển (–) ngay sau mổ 24 giờ; còn CFT giữ (+) suốt đời",
          "Cả Casoni và CFT đều chỉ dương tính khi bướu đã chết và hóa vôi hoàn toàn",
          "Casoni đặc hiệu 100% không bao giờ dương sai; CFT dùng kháng nguyên da cá"
        ],
        answer: 0,
        explain: "Theo tr. 517: Phản ứng Casoni (tiêm nội bì 0,1 ml, đọc sau 20 phút, sẩn ≥ 1,6 cm²) dương sai 18% và tiếp tục (+) hàng năm sau mổ; ngược lại CFT (+) 80–90% khi còn bướu sống, (–) khi bướu chết/hóa vôi nên dùng kiểm tra sót bướu sau mổ."
      },
      {
        q: "Trong phẫu thuật bóc nang Hydatid (tr. 517), trước khi bóc cả bướu đi, phẫu thuật viên cần thực hiện bước an toàn nào và liều Albendazole nội khoa chuẩn là bao nhiêu?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 517–518)",
        options: [
          "Thận trọng hút nước trong bướu rồi bơm dung dịch formalin 10% diệt đầu sán/màng sinh mầm; Albendazole 14 mg/kg/ngày (600–700 mg/ngày) × 28 ngày",
          "Rạch trực tiếp mở rộng bao nang vào ổ bụng; Albendazole 200 mg liều duy nhất",
          "Bơm nước muối sinh lý ấm vào bướu để đầu sán tự chui ra; Metronidazole 10 ngày",
          "Bơm cồn 70° rồi đóng bụng không cắt bướu; Praziquantel 1 ngày"
        ],
        answer: 0,
        explain: "Theo mục 5.6.5 (tr. 517–518): Phẫu thuật bóc bướu (énucléation) cần hút bớt dịch và bơm formalin 10% diệt đầu sán & màng sinh mầm (bướu to nhiễm khuẩn làm marsupialisation); nội khoa Albendazole 14 mg/kg/ngày (600–700 mg/ngày) × 28 ngày."
      },
      {
        q: "Bướu sán Echinococcus ở XƯƠNG có đặc điểm gì khác với bướu ở gan hoặc phổi?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 516–517)",
        options: [
          "Phát triển theo khoảng trống tủy xương tạo nhiều bướu nhỏ, dịch chất rất ít hoặc không có, không có đầu sán, làm xương xốp dễ gãy và tiên lượng xấu",
          "Là vị trí chiếm 66% ca bệnh và luôn tạo 1 bướu đơn độc chứa 2 triệu đầu sán",
          "Bướu ở xương luôn tự vôi hóa khỏi hẳn sau 2 tuần và tiên lượng tốt nhất",
          "Vỡ bướu xương là nguyên nhân duy nhất gây viêm da sán máng"
        ],
        answer: 0,
        explain: "Theo tr. 516–517: Bướu ở xương (2%) ăn mòn dần mô xương, có nhiều bướu nhỏ, dịch chất rất ít/không có, không có đầu sán, làm xương xốp dễ gãy và là 1 trong 4 trường hợp tiên lượng xấu."
      },
      {
        q: "Kỹ thuật miễn dịch nào sau đây có ngưỡng dương tính chuẩn được ghi nhận trong Bài 2 (tr. 517) cho bệnh bướu sán Hydatid: BFT ≥ 1/5 và IFA ≥ 1/400?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 517)",
        options: [
          "Thử nghiệm kết bông bentonite (BFT (+) &gt; 1/5) và Miễn dịch huỳnh quang gián tiếp (IFA (+) &gt; 1/400)",
          "Thử nghiệm Sabin–Feldman và phản ứng Vogel–Minning",
          "Thử nghiệm màu methylene blue và Ouchterlony",
          "Thử nghiệm ngưng kết lạnh hồng cầu O âm"
        ],
        answer: 0,
        explain: "Theo tr. 517: BFT (bentonite flocculation test) (+) khi hiệu giá trên 1/5; IFA (+) khi hiệu giá trên 1/400; chúng cho (+) trong 82% bướu gan và 33–50% bướu phổi (lưu ý dương sai với xơ gan, lupus, thận hư, đa u tủy)."
      },
      {
        q: "Tại sao bệnh nhân nhiễm sán trưởng thành Echinococcus granulosus thường gặp nhất ở vùng chăn nuôi cừu và nguy cơ nhiễm ở người nuôi chó cao như thế nào (tr. 279, 516)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 515–516) & tr. 279",
        options: [
          "Chó ăn phủ tạng cừu có nang hydatid rồi thải trứng dính hậu môn/lông; người vuốt lông chó rồi ăn bốc dễ nuốt trứng (người nuôi chó nguy cơ cao gấp 21 lần)",
          "Cừu lây trực tiếp trứng sán qua hơi thở cho người chăn cừu",
          "Chó bị muỗi đốt truyền ấu trùng hydatid sang cừu và người",
          "Người nhiễm chủ yếu do uống nước suối ở vùng không nuôi chó cừu"
        ],
        answer: 0,
        explain: "Theo tr. 516 & tr. 279: Người chăn cừu hay gần gũi chó (vuốt lông chó dính trứng từ hậu môn chó liếm sang lông rồi ăn bốc) có nguy cơ nhiễm cao (tr. 279 ghi người nuôi chó có nguy cơ cao gấp 21 lần người không nuôi)."
      }
    ]
  },

  // ========================================================================
  // BÀI 8: BỆNH DO SPARGANUM, VIÊM DA SÁN MÁNG & PHÒNG CHỐNG BỆNH ĐỘNG VẬT
  // ========================================================================
  {
    id: 8,
    group: "II. BỆNH ĐỘNG VẬT KÝ SINH",
    title: "Bài 8: Bệnh do Sparganum, Viêm da Sán máng & Tổng kết Phòng chống",
    shortTitle: "Sparganum & Viêm da Sán máng",
    textbookRef: "Ký sinh trùng Y học YDS 2015 – Phần II, Bài 2, Mục 5.7–7 (tr. 518–523) & H 1.4-45..46, H 1.4-53 (tr. 286–287, 303)",
    summary: "Bệnh Sparganum do Spirometra mansoni (procercoid trong Cyclops, plerocercoid/sparganum trong ếch nhái/rắn; đắp thịt ếch lên mắt gây sparganose oculaire); Viêm da do sán máng (Trichobilharzia/Radix ovata; dầu rái cá gant invisible); Tổng kết ghép cặp Bệnh–Đường lây–Động vật.",
    simId: "sim_zoonosis_matching",
    simTitle: "Phòng Lab Ma trận Ghép cặp Bệnh Động vật – Vật chủ – Đường lây & Biện pháp Dự phòng",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🐸 1. Bệnh do <em>Sparganum</em> (Sparganosis) – <em>Spirometra mansoni</em> (tr. 518–519, 286–287)</div>
          <ul class="theory-list">
            <li><strong>Tác nhân:</strong> Ấu trùng giai đoạn II (<strong><em>sparganum / plerocercoid</em></strong>) của sán dải <strong><em>Spirometra mansoni (S. erinacei)</em></strong>. Sán trưởng thành sống ở ruột non chó, mèo, loài <em>Félidés</em> hoang dã; trứng có nắp giống <em>D. latum</em> nhưng <strong>không đối xứng, hình con thoi</strong> (65 × 40 µm).</li>
            <li><strong>Chu trình (H 1.4-45):</strong> Trứng nở phôi lông tơ (<em>coracidium</em>) → <strong>KCTG I: <em>Cyclops</em> sp.</strong> thành ấu trùng I (<strong><em>procercoid</em></strong>) → <strong>KCTG II: ếch, nhái</strong> thành ấu trùng II (<strong><em>sparganum</em></strong>) ở bắp cơ (thời Pháp thuộc ~<strong>80%</strong> ếch nhái miền Bắc có <em>sparganum</em>, nay còn 15–17%). Rắn, lươn, chuột, gà ăn <em>Cyclops</em>/ếch nhái cũng mang <em>sparganum</em> (ký chủ chờ thời).</li>
            <li><strong>3 đường nhiễm người (H 1.4-46):</strong>
              <ol style="margin-top:4px;padding-left:18px;">
                <li><strong>Đắp thịt ếch nhái giã nát lên mắt</strong> để chữa viêm kết mạc (phổ biến trước kia ở miền Bắc VN).</li>
                <li><strong>Ăn thịt rắn, ếch nhái nấu chưa chín</strong> (gây <em>Sparganum</em> nội tạng / dưới da).</li>
                <li><strong>Uống nước có <em>Cyclops</em> sp. nhiễm sán</strong>.</li>
              </ol>
            </li>
            <li><strong>Lâm sàng, Điều trị &amp; Dự phòng:</strong>
              <br/>• <em>Ở mắt (Sparganose oculaire):</em> Sau đắp <strong>~10 ngày</strong> thấy nhôn nhốt, cản trở cử động nhãn cầu, lồi mắt, viêm kết/giác mạc, phù mi, u cứng quanh hốc mắt.
              <br/>• <em>Dưới da/mô:</em> Dài <strong>10–15 cm</strong>, gây viêm, áp xe (phúc mạc, màng phổi, bàng quang); khi chết gây sưng tấy hoại tử, mề đay, tăng BCTT.
              <br/>• <strong>Điều trị:</strong> <strong>Rạch và gắp <em>sparganum</em> ra</strong> (cần khéo tay &amp; thao tác nhanh vì ấu trùng có thể bò đi chỗ khác!).
              <br/>• <strong>Dự phòng:</strong> Uống nước đun sôi/lọc; bỏ tục đắp thịt ếch lên mắt; ăn rắn/lươn/ếch/chuột nấu chín.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🦆 2. Viêm da do Sán máng (<em>Schistosome dermatitis</em>) (tr. 519–520, 303)</div>
          <ul class="theory-list">
            <li><strong>Tác nhân &amp; KCVV:</strong> Sán máng chim/loài cầm và gặm nhấm (người là ngõ cụt ký sinh):
              <br/>• <strong><em>Trichobilharzia</em> spp.:</strong> tĩnh mạch màng treo ruột <strong>vịt &amp; chim nước ngọt</strong> (ít nhất 25 loài; miền Bắc &amp; ĐBSCL Việt Nam hay gặp ở ruộng nuôi vịt thả đồng, KCTG là ốc <strong><em>Radix ovata</em></strong>).
              <br/>• <strong><em>Microbilharzia</em> spp.:</strong> vịt, chim <strong>vùng nước mặn</strong> (4 loài).
              <br/>• <strong><em>Schistosomatium</em> spp.:</strong> ở <strong>chuột, chuột xạ</strong>.</li>
            <li><strong>Chu trình (H 1.4-53):</strong> Trứng → ấu trùng lông tơ (<em>miracidium</em>) → ốc (<em>Radix ovata</em>) → bào tử nang mẹ → bào tử nang con → <strong>ấu trùng đuôi chẻ (<em>cercaria</em>)</strong> bơi tự do.</li>
            <li><strong>Lâm sàng &amp; Chẩn đoán:</strong> Khi người tắm sông/biển, cấy lúa, làm đồng... <strong>ấu trùng đuôi chui qua da khi nước khô đi</strong> và mắc kẹt chết ở da. Vài giờ đầu ngứa dữ dội, phù, mẩn đỏ → dày lên thành <strong>sẩn (papule) tối đa vào ngày thứ 2 và 3</strong> → sau <strong>hơn 1 tuần</strong> tự lặn đi (hiện tượng dị ứng; tránh gãi gây bội nhiễm). Chẩn đoán dựa <em>tiền sử tiếp xúc nước vùng nuôi vịt</em> + bệnh cảnh cấp (không cần xét nghiệm).</li>
            <li><strong>Điều trị &amp; Dự phòng (3 biện pháp kinh điển):</strong>
              <br/>• Không có thuốc trị đặc hiệu → thoa <strong>kem kháng histamin</strong> (kháng sinh nếu nhiễm khuẩn phụ).
              <br/>• (1) Diệt ốc quanh bãi tắm bằng <strong>sulfat đồng, carbonat đồng, pentachlorphenate</strong> + phát quang thực vật thủy sinh.
              <br/>• (2) <strong>Lau khô ngay khi vừa tắm xong</strong> (vì ấu trùng đuôi chỉ chui vào da <em>khi nước khô đi</em>).
              <br/>• (3) Thoa <strong>dầu rái cá</strong> lên da trước khi xuống sông để tạo bao trong suốt (<strong><em>gant invisible</em></strong> – Đặng Vũ Hỷ và ctv., 1960).</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔗 3. Bảng Ma trận Tổng kết Phòng chống &amp; Ghép cặp Đáp án Sách (Câu 16–17 tr. 523, 564)</div>
        <div class="grid-2">
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th>Bệnh Động vật (Câu 16)</th><th>Phương thức Nhiễm chuẩn</th></tr></thead>
              <tbody>
                <tr><td>Viêm màng não–não do <em>A. cantonensis</em></td><td><strong>Ăn ốc</strong> (sống/chưa chín)</td></tr>
                <tr><td><em>Larva migrans</em> do <em>Toxocara canis</em></td><td><strong>Hay chơi với chó</strong> (nuốt trứng)</td></tr>
                <tr><td><em>Larva migrans</em> do <em>Ancylostoma caninum</em></td><td><strong>Đi chân đất trong vườn</strong></td></tr>
                <tr><td><em>Larva migrans</em> do <em>Gnathostoma spinigerum</em></td><td><strong>Ăn mắm thái</strong> / cá lóc nướng trui</td></tr>
                <tr><td>Bệnh do <em>Sparganum</em> nội tạng</td><td><strong>Ăn thịt rắn nướng</strong> / ếch nhái chưa chín</td></tr>
              </tbody>
            </table>
          </div>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th>Động vật Truyền (Câu 17)</th><th>Bệnh Động vật Liên quan (Sách tr. 509–520 &amp; Đáp án tr. 564)</th></tr></thead>
              <tbody>
                <tr><td><strong>Chó</strong></td><td><em>Larva migrans</em> ngoài da (<em>A. caninum</em>), <em>Larva migrans</em> do <em>Toxocara</em> sp., (cùng <em>Gnathostoma</em>, bướu <em>Echinococcus</em> ở gan; đáp án in tr. 564 liệt kê A: b, c)</td></tr>
                <tr><td><strong>Chuột</strong></td><td>Viêm màng não–não do <em>A. cantonensis</em>, Viêm da do <em>Schistosomatium</em> sp. (đáp án tr. 564: B: a, f)</td></tr>
                <tr><td><strong>Mèo</strong></td><td><em>Larva migrans</em> do <em>Toxocara cati</em>, <em>Gnathostoma</em>, (ngoài da <em>A. braziliense</em>, <em>Spirometra</em>; lưu ý tr. 564 in là C: a, c, d)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="callout pearl">
          <div class="callout-title">🤝 Phòng chống Bệnh Động vật Ký sinh (Mục 6–7, tr. 520–521)</div>
          <p>Những thú nuôi quanh người (chó, mèo, chuột, cá, mực, vịt...) rất quen thuộc khiến người dễ mất cảnh giác. Phòng chống đòi hỏi phối hợp liên ngành giữa <strong>bác sĩ y khoa, nhà thú y, dịch tễ học, quản lý xã hội, quy hoạch đô thị và giáo dục sức khỏe cộng đồng</strong>.</p>
        </div>
      </div>
    `,
    questions: [
      {
        q: "U sán nhái (Sparganum) ở mắt xảy ra là do nguyên nhân kinh điển nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 4 (tr. 522)",
        options: [
          "Đắp đùi ếch lên mắt để chữa viêm kết mạc",
          "Đắp đùi ếch, nhái lên vết thương gãy xương",
          "Ăn đùi ếch chiên bơ",
          "Uống nước suối không đun sôi có Cyclops"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 563): 4C – Đắp đùi ếch lên mắt để chữa viêm kết mạc (sparganose oculaire, triệu chứng xuất hiện sau ~10 ngày – tr. 518–519)."
      },
      {
        q: "Theo bảng ghép cặp Câu tự lượng giá 16 (tr. 523 & Đáp án tr. 564), bộ ghép Bệnh động vật ↔ Phương thức nhiễm nào sau đây ĐÚNG HOÀN TOÀN?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 16 (tr. 523, 564)",
        options: [
          "A. cantonensis ↔ Ăn ốc; T. canis ↔ Hay chơi với chó; A. caninum ↔ Đi chân đất trong vườn; G. spinigerum ↔ Ăn mắm thái; Sparganum nội tạng ↔ Ăn thịt rắn nướng",
          "A. cantonensis ↔ Đi chân đất; A. caninum ↔ Ăn ốc; Sparganum nội tạng ↔ Hay chơi với chó",
          "G. spinigerum ↔ Ăn thịt rắn nướng; Sparganum nội tạng ↔ Ăn mắm thái; T. canis ↔ Đi chân đất",
          "T. canis ↔ Ăn ốc; A. cantonensis ↔ Ăn mắm thái; G. spinigerum ↔ Hay chơi với chó"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 564): Câu 16: A–c (A. cantonensis – Ăn ốc); B–d (T. canis – Hay chơi với chó); C–e (A. caninum – Đi chân đất); D–b (G. spinigerum – Ăn mắm thái); E–a (Sparganum nội tạng – Ăn thịt rắn nướng)."
      },
      {
        q: "Theo đáp án Câu tự lượng giá 17 (tr. 523 & 564), CHUỘT là động vật truyền hai bệnh động vật ký sinh nào sau đây cho người?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu tự lượng giá 17 (tr. 523, 564)",
        options: [
          "Viêm màng não–não do Angiostrongylus cantonensis và Viêm da do Schistosomatium sp.",
          "Larva migrans ngoài da do Ancylostoma caninum và Bướu sán Echinococcus ở gan",
          "Bệnh do Sparganum ở mắt và Larva migrans do Toxocara canis",
          "Bệnh do Anisakis ở dạ dày và Viêm da do Trichobilharzia"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 564): Câu 17 mục B (Chuột) ghép với a (Viêm MN–não do A. cantonensis) và f (Viêm da do Schistosomatium sp. – tr. 519)."
      },
      {
        q: "Theo nội dung Bài 2 (tr. 509–518) và Câu 17 (tr. 523), ngoài Larva migrans ngoài da (A. caninum) và nội tạng (Toxocara canis), CHÓ còn là nguồn truyền bệnh nào sau đây cho người?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 515–518, 523)",
        options: [
          "Bướu sán Echinococcus granulosus ở gan/phổi và Larva migrans do Gnathostoma spinigerum",
          "Viêm da do sán máng Trichobilharzia ở vịt",
          "Bệnh do ấu trùng Anisakis từ cá hồi biển",
          "Viêm màng não tăng bạch cầu toan tính do Angiostrongylus cantonensis"
        ],
        answer: 0,
        explain: "Theo tr. 511, 515–518: Chó là KCVV của Gnathostoma spinigerum và Echinococcus granulosus (bướu sán ở gan 66%). (Lưu ý: bảng đáp án in ở tr. 564 chỉ ghi A–b, c cho chó nhưng phần lý thuyết tr. 515 ghi rõ chó truyền Echinococcus)."
      },
      {
        q: "Trong chu trình phát triển của Spirometra mansoni (H 1.4-45, tr. 286 & 518), tên hai giai đoạn ấu trùng lần lượt trong lăng quăng đỏ Cyclops sp. và trong ếch nhái là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 518) & H 1.4-45 (tr. 286)",
        options: [
          "Procercoid trong Cyclops sp. và Plerocercoid (Sparganum) trong ếch, nhái",
          "Miracidium trong Cyclops sp. và Cercaria trong ếch, nhái",
          "Rhabditiform trong Cyclops sp. và Filariform trong ếch, nhái",
          "Coracidium trong ếch, nhái và Nang hydatid trong Cyclops sp."
        ],
        answer: 0,
        explain: "Theo tr. 518 & tr. 286: Trứng nở phôi lông tơ (coracidium) → Cyclops sp. nuốt thành ấu trùng I (procercoid) → ếch/nhái/nòng nọc nuốt thành ấu trùng II (plerocercoid / sparganum)."
      },
      {
        q: "Khác biệt hình thể giữa trứng sán dải Spirometra mansoni và trứng sán dải cá Diphyllobothrium latum (tr. 518, 286) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 518) & tr. 286",
        options: [
          "Trứng S. mansoni cũng có nắp nhưng không đối xứng, hình con thoi (hai đầu hơi nhọn, 65 × 40 µm)",
          "Trứng S. mansoni hình cầu tròn có phôi 6 móc và vỏ tia nâu giống Taenia",
          "Trứng S. mansoni có gai nhọn ở cực giống Schistosoma haematobium",
          "Trứng S. mansoni không có nắp và có nút nhầy ở hai cực"
        ],
        answer: 0,
        explain: "Theo tr. 518 & tr. 286: Trứng S. mansoni cũng có nắp như trứng D. latum nhưng không đối xứng, hình con thoi (hai đầu hơi nhọn, kích thước 65 × 40 µm)."
      },
      {
        q: "Khi xử trí ca bệnh có Sparganum ở mắt hoặc dưới da, nguyên tắc điều trị phẫu thuật quan trọng cần lưu ý (tr. 288, 519) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 519) & tr. 288",
        options: [
          "Rạch và gắp hết toàn bộ sparganum thật khéo và thao tác nhanh vì ấu trùng có thể bò đi chỗ khác; không cần thuốc tẩy sán đặc hiệu nếu lấy hết",
          "Chờ ấu trùng chết tự nhiên trong nhãn cầu rồi mới nhỏ thuốc kháng sinh",
          "Tiêm formalin 10% trực tiếp vào nhãn cầu giống như bướu Echinococcus",
          "Chỉ uống Thiabendazole 25 mg/kg/ngày trong 3 ngày là ấu trùng tiêu biến"
        ],
        answer: 0,
        explain: "Theo tr. 519 & tr. 288: Rạch và gắp sparganum ra là phương pháp hiệu quả nhất, cần khéo tay và thao tác nhanh vì ấu trùng có thể bò đi chỗ khác; khi lấy hết sparganum bệnh nhân bình phục hoàn toàn."
      },
      {
        q: "Tại Việt Nam, tác nhân và ký chủ trung gian gây viêm da do sán máng ở nông dân làm ruộng có nuôi vịt thả đồng (tr. 519–520, 303) là cặp nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 519–520)",
        options: [
          "Sán máng Trichobilharzia spp. ở vịt; ký chủ trung gian là ốc Radix ovata",
          "Sán máng Microbilharzia spp. ở cá biển; ký chủ trung gian là Cyclops",
          "Sán máng Schistosoma haematobium ở người; ký chủ trung gian là ốc Achatina fulica",
          "Sán máng Schistosomatium spp. ở chó; ký chủ trung gian là lươn đồng"
        ],
        answer: 0,
        explain: "Theo mục 5.8.1–5.8.2 (tr. 519–520): Ở ruộng nuôi vịt nước ngọt tại miền Bắc & ĐBSCL VN là Trichobilharzia spp., KCTG là ốc Radix ovata (nước mặn là Microbilharzia spp.; chuột là Schistosomatium spp.)."
      },
      {
        q: "Diễn biến lâm sàng điển hình của vết thương ngoài da trong bệnh Viêm da do sán máng (tr. 520) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 520)",
        options: [
          "Vài giờ đầu ngứa dữ dội, phù, mẩn đỏ → dày lên thành sẩn (papule) tối đa vào ngày thứ 2–3 → sau hơn 1 tuần tự lặn khi ấu trùng chết",
          "Nổi đường hầm ngoằn ngoèo di chuyển vài cm mỗi ngày kéo dài hàng tháng",
          "Xuất hiện cục u di động tái phát trong 17 năm kèm BCTT tăng 80%",
          "Không ngứa ở da nhưng gây liệt dây thần kinh VII sau 7 giờ"
        ],
        answer: 0,
        explain: "Theo mục 5.8.3 (tr. 520): Ấu trùng đuôi mắc kẹt ở da gây dị ứng: vài giờ đầu ngứa dữ dội, phù mẩn đỏ → sẩn (papule) đạt tối đa vào ngày thứ 2 và 3 → tự lặn sau hơn 1 tuần."
      },
      {
        q: "Vì sao biện pháp 'lau khô ngay khi vừa tắm sông / lội ruộng xong' lại giúp dự phòng hữu hiệu bệnh Viêm da do sán máng (tr. 520)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 520)",
        options: [
          "Vì ấu trùng đuôi chẻ (cercaria) chỉ chui vào da người vào thời điểm lớp nước trên da khô đi",
          "Vì lau khăn làm vỡ vỏ cứng của trứng Trichobilharzia trên da",
          "Vì lau khô giúp đóng kín các tuyến mồ hôi ngăn miracidium chui vào",
          "Vì ấu trùng chỉ bám vào da khi da được bôi dầu rái cá"
        ],
        answer: 0,
        explain: "Theo mục 5.8.6 (tr. 520): 'Lau khô ngay khi vừa tắm xong (ấu trùng đuôi chỉ chui vào da khi nước khô đi)'."
      },
      {
        q: "Biện pháp 'bao trong suốt' (gant invisible) do các tác giả miền Bắc Việt Nam (Đặng Vũ Hỷ và ctv., 1960) áp dụng để chống viêm da do sán máng là sử dụng chất nào thoa lên da nông dân trước khi xuống sông/ruộng?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 520)",
        options: [
          "Dầu rái cá",
          "Dung dịch formalin 10%",
          "Kem Lindane 1%",
          "Dấm đậm đặc ngâm 5 giờ 30 phút"
        ],
        answer: 0,
        explain: "Theo tr. 520: Đặng Vũ Hỷ và ctv. (1960) sử dụng dầu rái cá thoa lên da nông dân để tạo một bao trong suốt (gant invisible) ngăn sự xâm nhập của ấu trùng đuôi."
      },
      {
        q: "Thái độ xử trí y tế cộng đồng đúng đắn nhất trong phòng chống các bệnh động vật ký sinh (tr. 520–521) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 520–521)",
        options: [
          "Phối hợp liên ngành (y khoa, thú y, dịch tễ, quản lý xã hội, quy hoạch đô thị, giáo dục sức khỏe) nâng cao cảnh giác với thú quanh người",
          "Chỉ tiêu hủy toàn bộ động vật nuôi trong thành phố mà không cần giáo dục vệ sinh ăn uống",
          "Chỉ cấp phát thuốc tẩy giun hàng loạt cho người mà bỏ qua kiểm soát lò sát sinh và chó mèo",
          "Xem các bệnh từ thú cưng là vô hại vì người luôn là ngõ cụt không bao giờ có triệu chứng"
        ],
        answer: 0,
        explain: "Theo mục 6–7 (tr. 520–521): Giảm nguồn bệnh ở động vật cần sự chung tay của bác sĩ y khoa, nhà thú y, dịch tễ, quản lý xã hội, quy hoạch đô thị và giáo dục sức khỏe."
      }
    ]
  }
];
