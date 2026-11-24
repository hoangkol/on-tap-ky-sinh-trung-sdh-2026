// ==========================================================================
// MỞ RỘNG CÂU HỎI & PHÂN LOẠI KSA + MỨC NHẬN THỨC (BÀI 1 ĐẾN BÀI 8)
// Mức 1 (Thuộc/Nhớ lại: 6/24 = 25%) | Mức 2 (Hiểu: 9/24 = 37,5%) | Mức 3 (Vận dụng: 9/24 = 37,5%)
// K (Kiến thức) | S (Kỹ năng) | A (Thái độ / An toàn thủ thuật / Phòng chống)
// Tổng ngân hàng: 8 bài × 24 câu = 192 câu trắc nghiệm chuẩn YDS 2015
// ==========================================================================

window.EXTRA_QUESTIONS = {
  // ========================================================================
  // BÀI 1: KHÁI NIỆM, TƯƠNG QUAN SINH VẬT, PHÂN LOẠI KST & KÝ CHỦ
  // Base: L1=6, L2=6, L3=0 | Extra: L1=0, L2=3, L3=9 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  1: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)" },
      { level: 1, ksa: "S", ksaLabel: "S1: Nhận diện mẫu" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt KST" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Vai trò)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Khác biệt bản chất giữa 'Cộng sinh' (Symbiosis) và 'Tương sinh' (Mutualism) theo Chương 1 (tr. 3–4) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 3–4)",
        options: [
          "Cả hai đều có lợi cho cả hai bên, nhưng Cộng sinh có tính chất bắt buộc còn Tương sinh không bắt buộc",
          "Cộng sinh chỉ một bên có lợi, còn Tương sinh cả hai cùng bị hại",
          "Tương sinh bắt buộc phải sống chung suốt đời, còn Cộng sinh chỉ sống chung tạm thời",
          "Cộng sinh chỉ gặp ở vi nấm, còn Tương sinh chỉ gặp ở đơn bào ruột"
        ],
        answer: 0,
        explain: "Trang 3–4: Cộng sinh (symbiosis) là sống chung BẮT BUỘC và cả hai cùng có lợi; Tương sinh (mutualism) là sống chung KHÔNG bắt buộc, khi sống chung cả hai đều có lợi."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)",
        q: "Nhóm nào sau đây mô tả đúng hoàn toàn 3 kiểu hoại sinh: Ngoại hoại sinh – Nội hoại sinh – Thượng hoại sinh?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 4)",
        options: [
          "Ngoại: Aspergillus/Strongyloides; Nội: Entamoeba histolytica minuta/Candida; Thượng: Pityrosporum ovale/Sarcoptes scabiei",
          "Ngoại: Candida; Nội: Aspergillus; Thượng: Giun đũa",
          "Ngoại: Sarcoptes scabiei; Nội: Pityrosporum ovale; Thượng: Strongyloides stercoralis",
          "Ngoại: Entamoeba histolytica minuta; Nội: Sporothrix schenckii; Thượng: Plasmodium"
        ],
        answer: 0,
        explain: "Trang 4 (mục 2.4): Ngoại hoại sinh (exosaprophytism): Aspergillus, Sporothrix schenckii, Strongyloides stercoralis; Nội hoại sinh (endosaprophytism): E. histolytica minuta, Candida sp.; Thượng hoại sinh (episaprophytism): Pityrosporum ovale, Sarcoptes scabiei."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)",
        q: "Theo mục 4.1 và 4.2 (tr. 4–5), một ký sinh trùng như Toxoplasma gondii có đặc điểm đặc hiệu ký sinh nào sau đây?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 4–5)",
        options: [
          "Đặc hiệu RỘNG cả về ký chủ (người, trâu bò, heo, chim) lẫn nơi ký sinh (não, mắt, cơ tim, phổi)",
          "Đặc hiệu HẸP về ký chủ (chỉ ở người) nhưng rộng về nơi ký sinh",
          "Đặc hiệu HẸP về cả ký chủ lẫn cơ quan giống hệt giun đũa",
          "Chỉ sống đặc hiệu ở ruột già người như giun kim"
        ],
        answer: 0,
        explain: "Trang 4–5 lấy chính Toxoplasma gondii làm ví dụ điển hình cho cả đặc hiệu rộng về ký chủ (người, trâu bò, heo, chim...) và đặc hiệu rộng về nơi ký sinh (não, mắt, cơ tim, phổi...)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích tình huống",
        q: "Một bệnh nhân đi tiêu ra phân có vài cấu trúc hình cầu gai nhỏ nghi trứng sán dưới kính hiển vi; nhưng khi hỏi lại tiền sử ăn uống và đo kích thước thì đây thực chất là hạt phấn hoa từ mật ong/trà hoa bệnh nhân vừa dùng. Kỹ thuật viên kết luận đây là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 6)",
        options: [
          "Ký sinh trùng giả hiệu (cặn bã giống KST)",
          "Bội ký sinh trùng đường ruột",
          "Ký sinh trùng tùy nghi ngoại hoại sinh",
          "Ký chủ chờ thời của sán lá ruột"
        ],
        answer: 0,
        explain: "Trang 6 (mục 6.8): Hạt phấn hoa gặp trong phân người là ví dụ kinh điển của KST giả hiệu (các chất cặn bã trong bệnh phẩm có hình dạng rất giống KST)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận ký chủ",
        q: "Trong chu trình Diphyllobothrium latum, ấu trùng giai đoạn II nằm trong cá nhỏ; khi một con cá lớn ăn thịt con cá nhỏ đó, ấu trùng II vẫn giữ nguyên ở giai đoạn ấu trùng II trong cơ cá lớn trước khi người ăn phải cá lớn. Con cá lớn đóng vai trò gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 6)",
        options: [
          "Ký chủ chờ thời",
          "Ký chủ vĩnh viễn",
          "Ký chủ trung gian I",
          "Trung gian truyền bệnh cơ học"
        ],
        answer: 0,
        explain: "Trang 6 (mục 7.3): Ký chủ chờ thời là ký chủ nuốt KCTG II nhưng trong cơ thể KST vẫn dừng ở giai đoạn ấu trùng II (VD: cá lớn nuốt cá bé chứa ấu trùng II của D. latum)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích sinh thái",
        q: "Trong một nghiên cứu kiểm soát sinh học, người ta phát hiện loài ong ký sinh nhỏ Ixodiphagus caucurtei ký sinh bên trong bọ ve Ixodes ricinus (vốn là loài chân khớp ký sinh hút máu người). Hiện tượng này minh họa khái niệm nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 6)",
        options: [
          "Bội ký sinh trùng (KST của một KST)",
          "Ký sinh trùng lạc chỗ",
          "Ký sinh trùng giả hiệu",
          "Hội sinh bắt buộc"
        ],
        answer: 0,
        explain: "Trang 6 (mục 6.9): Bội KST là KST của một KST. Sách nêu đích danh ví dụ: Ixodes ricinus là côn trùng ký sinh người nhưng chính nó lại bị Ixodiphagus caucurtei ký sinh."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Áp dụng danh pháp",
        q: "Khi đọc tài liệu quốc tế, bạn gặp tên khoa học 'Ascaris lumbricoides var. suis' hoặc 'Culex pipiens pipiens'. Theo quy tắc danh pháp ký sinh trùng (tr. 15), việc dùng 3 chữ Latin này có ý nghĩa gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 15)",
        options: [
          "Biểu diễn một loài phụ (subspecies / variety)",
          "Biểu diễn đồng thời hai loài khác nhau sống cộng sinh",
          "Sai quy tắc danh pháp vì chỉ được dùng tối đa 2 chữ",
          "Chữ thứ ba chỉ tên tác giả mô tả đầu tiên"
        ],
        answer: 0,
        explain: "Trang 15 (mục 13): Thông thường dùng 2 chữ Latin (Giống viết hoa + loài viết thường); khi muốn biểu diễn LOÀI PHỤ phải dùng 3 chữ Latin (VD: Culex pipiens pipiens, Ascaris lumbricoides var. suis)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt vector",
        q: "Một hộ gia đình ăn cơm không đậy lồng bàn, để ruồi nhà (Musca domestica) đậu từ phân có bào nang Entamoeba histolytica bay sang đậu lên thức ăn gây bệnh lỵ amip. Ruồi nhà trong tình huống này đóng vai trò gì, khác gì với muỗi Culex truyền giun chỉ?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 6)",
        options: [
          "Ruồi là trung gian truyền bệnh cơ học (chuyên chở thụ động); muỗi Culex là trung gian truyền bệnh sinh học (giun chỉ phát triển qua giai đoạn lây nhiễm)",
          "Cả ruồi và muỗi Culex đều là trung gian truyền bệnh sinh học",
          "Ruồi là ký chủ vĩnh viễn của amip; muỗi Culex là ký chủ chờ thời",
          "Ruồi là trung gian truyền bệnh sinh học vì amip tăng dân số gấp 1000 lần trên chân ruồi"
        ],
        answer: 0,
        explain: "Trang 6 (mục 7.6): Ruồi mang bào nang E. histolytica trên cơ thể là TGTB cơ học (chỉ chuyên chở thụ động, không phát triển hay tăng dân số); muỗi Mansonia/Culex giúp giun chỉ phát triển sang giai đoạn lây nhiễm nên là TGTB sinh học."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Định danh chân khớp",
        q: "Nhân viên điều tra dịch tễ bắt được một mẫu chân khớp có cơ thể chia làm 2 phần (đầu-ngực và bụng), có 4 đôi chân và KHÔNG có anten. Mẫu vật này thuộc lớp nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 16)",
        options: [
          "Lớp Nhện (Arachnides – như Sarcoptes, Ixodes, Argas, Thrombicula, Demodex)",
          "Lớp Côn trùng (Insectes – muỗi, ruồi, bọ chét, chí, rệp)",
          "Lớp Crustacés (giáp xác như Cyclops)",
          "Lớp Thân mềm (Mollusques)"
        ],
        answer: 0,
        explain: "Trang 16: Lớp Côn trùng có đầu, ngực, bụng và 3 đôi chân; còn Lớp Nhện (Arachnides) thân gồm 2 phần (đầu-ngực và bụng), 4 đôi chân và không có anten."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ phòng chống",
        q: "Khi lập kế hoạch phòng chống hai bệnh: (1) Sán lá gan nhỏ Clonorchis sinensis (có tàng chủ là mèo hoang, KCTG I ốc, KCTG II cá) và (2) Giun đũa Ascaris lumbricoides (ký chủ duy nhất là người). Đánh giá nào đúng về mức độ khó khăn diệt trừ?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 5–6)",
        options: [
          "C. sinensis khó diệt trừ hơn nhiều vì có tàng chủ (mèo hoang) và nhiều ký chủ trung gian, còn giun đũa đặc hiệu hẹp về ký chủ nên dễ phòng chống hơn",
          "Giun đũa khó diệt trừ hơn vì có tính đặc hiệu rộng về ký chủ",
          "Cả hai đều có thể diệt sạch hoàn toàn chỉ bằng cách điều trị 1 liều cho mèo",
          "Không cần quan tâm đến tàng chủ vì tàng chủ không thải trứng ra môi trường"
        ],
        answer: 0,
        explain: "Trang 5–6: Những KST đặc hiệu hẹp về ký chủ (như giun đũa chỉ có ở người) dễ phòng chống hơn; những KST có tàng chủ động vật (mèo hoang mang C. sinensis) và chu trình phức tạp rất khó diệt trừ."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ chẩn đoán",
        q: "Bệnh nhân có triệu chứng mờ mắt một bên, nhức đầu và tổn thương cơ tim nghi do một ký sinh trùng có tính đặc hiệu RỘNG về cơ quan như Toxoplasma gondii. Thái độ lâm sàng nào đúng?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 5)",
        options: [
          "Cảnh giác bệnh cảnh đa dạng ở nhiều cơ quan khác nhau khiến việc chẩn đoán và điều trị khó khăn hơn các KST khu trú một cơ quan",
          "Loại trừ ngay bệnh ký sinh trùng vì KST chỉ sống ở ống tiêu hóa",
          "Chỉ cần soi phân tìm trứng một lần để khẳng định hoặc loại trừ hoàn toàn",
          "Khẳng định chắc chắn bệnh chỉ khu trú tại kết mạc, không ảnh hưởng não hay tim"
        ],
        answer: 0,
        explain: "Trang 5: Những KST có tính đặc hiệu rộng về cơ quan (như Toxoplasma gondii ở não, mắt, cơ tim, phổi) có tác hại và triệu chứng rất đa dạng, nên việc chẩn đoán và điều trị khó khăn hơn nhiều."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Thái độ y tế cộng đồng",
        q: "Trong điều tra dịch tễ tại xã X, nhiều người dân khỏe mạnh bình thường nhưng xét nghiệm phân có bào nang Entamoeba histolytica hoặc Balantidium coli. Thái độ cộng đồng nào đúng?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 6)",
        options: [
          "Xác định họ là người lành mang mầm bệnh (porter) vẫn có khả năng phát tán mầm bệnh qua phân, cần quản lý nguồn phân và điều trị/giáo dục vệ sinh",
          "Không cần xử lý gì vì không có triệu chứng nghĩa là bào nang đã chết và vô hại",
          "Xem họ là ký chủ chờ thời của giun đũa",
          "Kết luận nhầm lẫn với hạt phấn hoa nên không ghi nhận"
        ],
        answer: 0,
        explain: "Trang 6 (mục 7.7): Người mang mầm bệnh (porter) là người có KST trong cơ thể nhưng không biểu hiện bệnh lý (như người mang bào nang amip, trùng lông), đóng vai trò nguồn phát tán quan trọng trong cộng đồng."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: CHU TRÌNH PHÁT TRIỂN & DÂY TRUYỀN NHIỄM KÝ SINH TRÙNG
  // Base: L1=6, L2=6, L3=0 | Extra: L1=0, L2=3, L3=9 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  2: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Chọn bệnh phẩm" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chu trình)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Dịch tễ)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đường lây)" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)",
        q: "Tại sao việc nắm vững chu trình phát triển (CTPT) của ký sinh trùng lại được xem là chìa khóa cho công tác phòng chống (tr. 7–8)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 7–8)",
        options: [
          "Giúp định hướng rõ nét các mắt xích để cắt đứt dây truyền; KST có CTPT càng đơn giản càng dễ phát tán, còn CTPT phức tạp nhiều KCTG càng có nhiều điểm chặn nhưng khó diệt trừ",
          "Vì CTPT quy định hoàn toàn cấu trúc nhân tế bào của vi nấm",
          "Vì chỉ KST có CTPT trực tiếp ngắn mới cần phòng chống, các KST khác không lây",
          "Vì CTPT chỉ diễn ra bên trong phòng thí nghiệm chứ không diễn ra ở cộng đồng"
        ],
        answer: 0,
        explain: "Trang 7–8: Nắm vững CTPT giúp cán bộ y tế có định hướng rõ nét phòng chống và tiếp thu bệnh học. KST có CTPT càng đơn giản càng dễ phát tán; CTPT phức tạp qua nhiều KCTG/KC phụ thì khó phòng chống hơn."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Khác biệt cơ bản giữa chu trình 'Trực tiếp và ngắn' với 'Trực tiếp và dài' ở KST đường ruột (tr. 7) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 7)",
        options: [
          "Trực tiếp ngắn rời ký chủ đã có tính lây nhiễm ngay; trực tiếp dài cần một thời gian phát triển ở ngoại cảnh mới đạt giai đoạn lây nhiễm",
          "Trực tiếp ngắn phải qua 1 ốc trung gian; trực tiếp dài phải qua 2 KCTG",
          "Trực tiếp ngắn chỉ gặp ở giun đũa và giun tóc; trực tiếp dài chỉ gặp ở trùng roi",
          "Trực tiếp dài không cần thời gian ở ngoại cảnh mà tự nhiễm ngay qua đường hô hấp"
        ],
        answer: 0,
        explain: "Trang 7 (mục 8.2.1 & 8.2.2): Trực tiếp ngắn khi rời cơ thể ký chủ ĐÃ có tính lây nhiễm ngay (trùng roi, amip, giun kim, H. nana, giun xoắn); trực tiếp dài cần thời gian phát triển ở ngoại cảnh (giun đũa, giun móc, giun lươn, giun tóc, Toxoplasma)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Dịch tễ)",
        q: "Theo mục 10.1 (tr. 10), các yếu tố tôn giáo, tập quán ăn uống và thảm họa chiến tranh thuộc nhóm yếu tố nào ảnh hưởng đến phân bố KST?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 10)",
        options: [
          "Yếu tố tổng quát – Nhân chủng và thảm họa lớn",
          "Yếu tố thổ nhưỡng (độ mịn, pH đất)",
          "Yếu tố sinh địa lý và khí hậu theo mùa",
          "Yếu tố nội tại tiền thích ứng của ký sinh trùng"
        ],
        answer: 0,
        explain: "Trang 10 (mục 10.1.4 & 10.1.5): Lối sống, cách ăn uống (ăn cá/thịt sống), số lượng/chất lượng thức ăn và tôn giáo (cấm ăn thịt bò tránh T. saginata) thuộc yếu tố Nhân chủng; chiến tranh gây dịch sốt phát ban do chí rận là thảm họa lớn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích vị trí CTPT",
        q: "Một bệnh nhân nam bị áp xe gan do ăn rau xà lách xoong (cải xoong) nhiễm nang sán lá lớn gan Fasciola hepatica, nhưng nguồn lưu hành chính của loài này là trâu, bò, cừu truyền qua lại với ốc. Vị trí của người trong CTPT này là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 7)",
        options: [
          "Giai đoạn chính ở động vật, ký sinh người chỉ là một giai đoạn phụ",
          "Người là ký chủ duy nhất",
          "Ký chủ vĩnh viễn đồng thời là ký chủ trung gian",
          "Người là ký chủ chờ thời của F. hepatica"
        ],
        answer: 0,
        explain: "Trang 7 (mục 8.1.3): Fasciola hepatica (cùng Microsporum canis, Trichophyton mentagrophytes, Balantidium coli) thuộc nhóm có giai đoạn chính ở động vật, ký sinh ở người là một giai đoạn phụ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt ngõ cụt",
        q: "So sánh tình trạng người nhiễm ấu trùng Echinococcus granulosus (bướu nước ở gan) với người nhiễm ấu trùng Ancylostoma caninum (đường hầm dưới da). Về mặt phân loại vị trí trong CTPT (tr. 7), điểm khác biệt chính là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 7)",
        options: [
          "Echinococcus là ngõ cụt cảnh ngộ (ấu trùng tồn tại lâu dài, có thể tiếp tục nếu bị thú ăn thịt), còn A. caninum là ngõ cụt thực sự (ngừng phát triển và bị hủy diệt sau thời gian ngắn)",
          "Cả hai đều là ký chủ vĩnh viễn truyền thẳng từ người sang người",
          "A. caninum là ngõ cụt cảnh ngộ còn Echinococcus là chu trình trực tiếp ngắn",
          "Cả hai đều phát triển thành giun/sán trưởng thành đẻ trứng theo phân người ra ngoài"
        ],
        answer: 0,
        explain: "Trang 7 (mục 8.1.4.1 & 8.1.4.2): Larva migrans do giun đũa/giun móc chó mèo là ngõ cụt thực sự; ấu trùng Echinococcus granulosus và Trichinella spiralis ở người là ngõ cụt cảnh ngộ (impasse parasitaire de circonstances)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Truy vết nguồn nhiễm",
        q: "Một bệnh nhân ho khạc đàm lẫn máu kéo dài, tìm vi khuẩn lao nhiều lần âm tính, khai có thói quen ăn gỏi cua đá/tôm suối nướng chưa chín ở vùng núi. Khi nghi sán lá phổi Paragonimus westermani, bệnh phẩm trực tiếp có trứng và KCTG là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 8–9)",
        options: [
          "Đường ra qua chất phân tiết (đàm – và nuốt đàm ra phân); nguồn nhiễm từ tôm, cua",
          "Đường ra qua nước tiểu; nguồn nhiễm từ củ ấu",
          "Đường ra qua dịch vết loét da; nguồn nhiễm từ muỗi Anopheles",
          "Đường ra qua máu; nguồn nhiễm từ thịt bò tái"
        ],
        answer: 0,
        explain: "Trang 8–9: Trứng sán lá phổi ra theo chất phân tiết (đàm), nguồn thực phẩm lây nhiễm chính là tôm, cua (Paragonimus westermani)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chẩn đoán nguồn bệnh",
        q: "Tại một vùng nông thôn có hố tiêu không hợp vệ sinh và bón phân người lên rau sống, bệnh nhân đi chân đất làm rẫy cao su bị thiếu máu nhược sắc, người thân khác ăn rau sống bị tắc ruột do búi giun. Cặp tác nhân và con đường xâm nhập tương ứng là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 9–10)",
        options: [
          "Công nhân cao su/làm rẫy: Giun móc xâm nhập qua da (chân đất); người ăn rau sống: Ascaris lumbricoides xâm nhập qua miệng",
          "Cả hai đều là giun đũa xâm nhập qua đường hô hấp",
          "Công nhân cao su: Diphyllobothrium latum qua da; người ăn rau: Echinococcus qua muỗi đốt",
          "Công nhân cao su: Giun kim qua giao hợp; người ăn rau: Trichomonas qua miệng"
        ],
        answer: 0,
        explain: "Trang 9–10: Giun móc (mục 9.2.2, 9.3.2, 9.4.3, 10.2) xâm nhập qua da khi đi chân đất, hay gặp ở người làm rẫy, cao su, hầm mỏ; Ascaris lumbricoides (mục 9.5.3, 9.3.1) từ rau sống bón phân người vào qua miệng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận miễn dịch/cơ địa",
        q: "Một bệnh nhân nhiễm HIV chuyển sang giai đoạn AIDS đột ngột bùng phát triệu chứng tiêu chảy nặng hoặc tổn thương não do Isospora, Toxoplasma gondii và Aspergillus. Yếu tố nào thuộc 'cơ thể cảm thụ' giải thích trực tiếp tình trạng này?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 9–10)",
        options: [
          "Suy giảm hệ thống miễn dịch (mục 9.4.8) làm giảm khả năng đề kháng với KST và vi nấm cơ hội",
          "Yếu tố nhân chủng học do sắc tố da",
          "Yếu tố tuổi tác tự khỏi sau dậy thì",
          "Do ăn thịt bò theo tập quán tôn giáo"
        ],
        answer: 0,
        explain: "Trang 10 (mục 9.4.8): Người có HIV bước qua giai đoạn AIDS rất dễ nhiễm KST và vi nấm cơ hội như Toxoplasma gondii, Aspergillus sp., Isospora..."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Truy vết bội nhiễm",
        q: "Trẻ em ngứa hậu môn vào ban đêm, gãi rồi ngậm tay hoặc hít bụi giường chiếu chứa trứng giun khiến bệnh kéo dài tái đi tái lại không dứt dù không tiếp xúc thêm người ngoài. Chu trình và nguồn nhiễm nào giải thích hiện tượng này?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 7–9)",
        options: [
          "Enterobius vermicularis (giun kim): chu trình trực tiếp ngắn + đường tự nhiễm & đường hô hấp/miệng",
          "Strongyloides stercoralis: chu trình gián tiếp qua 2 KCTG ở nước",
          "Taenia saginata: tự nhiễm qua đường máu",
          "Ascaris lumbricoides: trứng nở ngay tại nếp hậu môn sau 2 giờ"
        ],
        answer: 0,
        explain: "Trang 7–9: Giun kim Enterobius vermicularis có CTPT trực tiếp ngắn (trứng có tính lây nhiễm ngay), có thể vào qua miệng và đường hô hấp, và là 1 trong 2 tác nhân điển hình của tự nhiễm (cùng Strongyloides stercoralis)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ giáo dục dự phòng",
        q: "Một sản phụ thắc mắc vì sao bác sĩ khuyến cáo không tiếp xúc phân mèo / ăn thịt tái sống trong thai kỳ. Dựa vào kiến thức Đường vào qua Lá nhau (mục 9.3.4, tr. 9), tư vấn nào đúng?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 9)",
        options: [
          "Toxoplasma gondii (và Plasmodium sp.) có thể vượt qua lá nhau xâm nhập bào thai gây nhiễm trùng bẩm sinh nặng",
          "Mọi loại giun sán đường ruột như giun đũa, giun kim đều xuyên thẳng qua lá nhau ở người",
          "Chỉ cần tránh đi chân đất là ngăn được hoàn toàn Toxoplasma qua lá nhau",
          "Toxoplasma chỉ lây qua đường giao hợp, không bao giờ qua lá nhau"
        ],
        answer: 0,
        explain: "Trang 9 (mục 9.3.4): Hai tác nhân KST được sách nhấn mạnh có thể vào thai nhi qua lá nhau là Toxoplasma gondii và Plasmodium sp."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ kiểm soát môi trường",
        q: "Tại một vùng đồng bằng có tập quán đại tiện bừa bãi xuống sông hồ và trẻ em thường lội nước, hai bệnh KST nào có nguy cơ lây trực tiếp từ nguồn NƯỚC bị ô nhiễm (mục 9.5.2, tr. 9)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 9)",
        options: [
          "Bào nang amip/trùng roi (nuốt nước) và ấu trùng đuôi chẻ sán máng (tiếp xúc nước chui qua da)",
          "Chỉ có giun đũa chó và bọ chét",
          "Chỉ có sán dải bò và giun xoắn",
          "Chỉ có chấy rận và cái ghẻ"
        ],
        answer: 0,
        explain: "Trang 8–9 (mục 9.2.3 & 9.5.2): Nguồn nước truyền bào nang amip, trùng roi và sán máng (tiếp xúc với nước)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Thái độ cảnh giác lâm sàng",
        q: "Một bệnh nhân trước đây từng sống ở vùng có amip (mang mầm bệnh không triệu chứng), nay bỗng bộc phát lỵ amip cấp sau một đợt viêm ruột do vi khuẩn hoặc kích thích cơ học/hóa học niêm mạc ruột. Thái độ biện luận nào đúng?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 9)",
        options: [
          "Ghi nhận vai trò 'Bệnh tật bồi thêm' (mục 9.4.5): lỵ amip bộc phát khi niêm mạc ruột bị kích thích bởi yếu tố hóa học, cơ học hay vi trùng",
          "Loại trừ amip vì amip không bao giờ chuyển thể gây bệnh khi có vi khuẩn",
          "Cho rằng bệnh nhân vừa mới nhiễm lại bào nang trong vòng 1 giờ trước",
          "Chẩn đoán đây là phản ứng cộng đồng kháng nguyên giả"
        ],
        answer: 0,
        explain: "Trang 9 (mục 9.4.5 – Bệnh tật bồi thêm): Lỵ amip bộc phát trong trường hợp niêm mạc ruột bị kích thích bởi các yếu tố hóa học, cơ học hay vi trùng."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: TƯƠNG TÁC KST – KÝ CHỦ, BIỂU ĐỒ LAVIER & MIỄN DỊCH KÝ SINH TRÙNG
  // Base: L1=6, L2=6, L3=0 | Extra: L1=0, L2=3, L3=9 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  3: {
    baseTags: [
      { level: 1, ksa: "S", ksaLabel: "S1: Liên hệ xét nghiệm" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích mô bệnh" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Miễn dịch)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Né miễn dịch)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đọc biểu đồ Lavier" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bệnh sinh)" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Thích nghi)",
        q: "Trong quá trình thích nghi đời sống ký sinh bên trong cơ thể ký chủ (mục 11.1.1, tr. 10), các cơ quan nào bị tiêu giảm/mất hẳn ở Sán dải, Sán lá và Đơn bào?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 10)",
        options: [
          "Sán dải mất hẳn ống tiêu hóa; Sán lá mất cơ quan thị giác; Đơn bào mất không bào co thắt",
          "Sán dải mất cơ quan sinh dục; Sán lá mất đĩa hút; Đơn bào mất nhân",
          "Sán dải mất lớp vỏ cuticule; Sán lá mất ống tiêu hóa; Đơn bào mất roi",
          "Cả ba nhóm đều mất hoàn toàn khả năng sinh sản hữu tính"
        ],
        answer: 0,
        explain: "Trang 10 (mục 11.1.1): Sán dải mất hẳn ống tiêu hóa (hấp thu qua bề mặt); sán lá mất cơ quan thị giác; đơn bào mất không bào co thắt (do nội môi ổn định)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế bệnh sinh)",
        q: "So sánh cơ chế gây thiếu máu của 3 nhóm KST (tr. 12): Giun móc, Diphyllobothrium latum và Plasmodium/Trypanosoma/Babesia. Nhận định nào ĐÚNG?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 12)",
        options: [
          "Giun móc gây mất máu liên tục → thiếu máu thiếu sắt; D. latum cướp B12 → thiếu máu cận-Biermer; Plasmodium/Trypanosoma/Babesia tiết hemolysin vỡ hồng cầu → thiếu máu đẳng sắc",
          "Giun móc tiết hemolysin vỡ hồng cầu; D. latum gây xuất huyết tiêu hóa thiếu sắt",
          "Cả ba đều gây thiếu máu hồng cầu to do thiếu vitamin B12",
          "Plasmodium gây thiếu máu thiếu sắt do hút chất sắt từ thực phẩm trong ruột"
        ],
        answer: 0,
        explain: "Trang 12 (mục 11.2.2.6): Giun móc mất máu liên tục → thiếu máu thiếu sắt; D. latum cướp B12 → thiếu máu cận-Biermer; Plasmodium, Trypanosoma, Babesia tiết hemolysin vỡ hồng cầu → thiếu máu đẳng sắc."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Miễn dịch)",
        q: "Tại sao cộng đồng kháng nguyên giữa KST với KST khác và với vi khuẩn lại gây trở ngại lớn trong chẩn đoán huyết thanh học (tr. 14)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 14)",
        options: [
          "Vì có rất nhiều phản ứng huyết thanh học chéo dương tính giả và việc chiết tách thành phần kháng nguyên đặc hiệu cho từng KST hết sức khó khăn",
          "Vì kháng nguyên chung làm bất hoạt hoàn toàn mọi kháng thể IgG của bệnh nhân",
          "Vì làm cho mọi xét nghiệm soi phân trực tiếp đều âm tính",
          "Vì làm BCTT giảm về 0% ở mọi bệnh nhân nhiễm giun sán"
        ],
        answer: 0,
        explain: "Trang 14 (mục 12.3): Do cộng đồng kháng nguyên (thậm chí giữa T. spiralis – S. typhi, L. donovani – Mycobacteria), có rất nhiều phản ứng huyết thanh học chéo và khó chiết tách kháng nguyên đặc hiệu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Đọc biểu đồ Lavier",
        q: "Một bệnh nhân nuốt phải trứng giun đũa Ascaris lumbricoides ở tuần 0. Theo Biểu đồ Lavier (tr. 493–494, 499), diễn biến % BCTT qua 3 giai đoạn và thời điểm có thể điều trị xổ giun bằng thuốc khi theo dõi Biểu đồ Lavier là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 & Chuyên đề Bài 1 (tr. 12, 493–494, 499)",
        options: [
          "Giai đoạn (1) tiềm phục → (2) tăng cực đại 20–40% ở tuần 1–2 (hội chứng Loeffler) → (3) giảm dần từ đầu tuần thứ 3 (giun non về ruột), lúc này đã cho thuốc xổ giun được dù phân chưa có trứng",
          "BCTT tăng ngay 90% trong 1 giờ đầu và giữ nguyên suốt đời",
          "Phải chờ đến tuần thứ 8 thấy trứng trong phân mới được dùng thuốc vì trước đó giun non không nhạy thuốc",
          "BCTT không bao giờ tăng khi nhiễm giun đũa ở giai đoạn chu du qua phổi"
        ],
        answer: 0,
        explain: "Trang 494 & 499 (Biểu đồ 2.1-3 & 2.1-7): Trong tuần 1–2 giun chu du phổi gây hội chứng Loeffler (BCTT đỉnh 20–40%); từ đầu tuần thứ 3 bước vào giai đoạn giảm (giun non về ruột đã nhạy thuốc) nên có thể xổ giun dù xét nghiệm trứng phân (–) đến tận tuần 8 mới đẻ trứng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận xét nghiệm",
        q: "Một bệnh nhân nhập viện vì nhiễm trùng đường mật mạn tính, tiền sử ăn gỏi cá nước ngọt miền Bắc/Trung, được làm xét nghiệm huyết thanh chẩn đoán Fasciola hepatica bằng kỹ thuật thô (kháng nguyên toàn phần) cho kết quả dương tính nhẹ, nhưng siêu âm mật lại thấy sán lá nhỏ ở gan Clonorchis sinensis. Theo số liệu Biguet (tr. 14), vì sao dễ chẩn đoán nhầm như vậy?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 14)",
        options: [
          "Vì Fasciola hepatica chia sẻ tới 6 thành phần kháng nguyên chung với Clonorchis sinensis gây phản ứng chéo mạnh",
          "Vì F. hepatica và C. sinensis là hai giai đoạn của cùng một loài sán",
          "Vì C. sinensis không có bất kỳ kháng nguyên nào trên bề mặt",
          "Vì kỹ thuật miễn dịch chẩn đoán luôn tìm thấy 7 thành phần chung giữa F. hepatica và E. coli"
        ],
        answer: 0,
        explain: "Theo Biguet & ctv (1962, 1965) trang 14: Fasciola hepatica có 7 KN chung với D. dendriticum, 6 với C. sinensis, 5 với S. mansoni, 4 với P. westermani, 3 với T. saginata và 1 với A. lumbricoides → rất dễ dương chéo nếu dùng KN toàn phần chưa tinh sạch."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích cơ chế miễn dịch",
        q: "Ở bệnh nhân nhiễm Trypanosoma gambiense hoặc một số loài KST sốt rét, dù cơ thể tạo ra được kháng thể đặc hiệu tiêu diệt đợt ký sinh trùng ban đầu, nhưng vài tuần sau mật độ KST lại bùng lên đợt mới thoát khỏi kháng thể cũ. Cơ chế né tránh miễn dịch nào giải thích điều này?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 14)",
        options: [
          "Thay đổi kháng nguyên bề mặt liên tục (antigenic variation), đồng thời gây khó khăn lớn cho việc chế tạo vaccin KST",
          "Thâu nhập kháng nguyên nhóm máu ABO lên bề mặt hồng cầu",
          "Ẩn hoàn toàn trong bào tương hồng cầu không bao giờ tiếp xúc máu",
          "Ức chế tủy xương ngừng tạo hồng cầu vĩnh viễn"
        ],
        answer: 0,
        explain: "Trang 14 (mục 12.4.3): Trypanosoma gambiense, T. rhodesiense và một số KST sốt rét né tránh miễn dịch bằng cách thay đổi kháng nguyên bề mặt liên tục, làm việc phát triển vaccin KST rất khó khăn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Giải phẫu bệnh học",
        q: "Sinh thiết niêm mạc phế quản một bệnh nhân ho ra máu mạn tính do Paragonimus westermani thấy biểu mô hô hấp chuyển đổi sang dạng tăng sinh mô tuyến khác hẳn mô nguyên thủy; trong khi sinh thiết gan ca nhiễm Opisthorchis viverrini lại phát hiện ung thư biểu mô đường mật. Hai hiện tượng này lần lượt là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 11)",
        options: [
          "Chuyển sản (metaplasia) ở P. westermani và Tân sinh ác tính (neoplasia) ở Opisthorchis viverrini",
          "Quá dưỡng (hypertrophy) ở P. westermani và Teo mô ở Opisthorchis viverrini",
          "Phản ứng viêm cấp ở P. westermani và Tăng sản lành tính đơn thuần ở O. viverrini",
          "Hoại tử hóa lỏng ở P. westermani và Quá dưỡng hồng cầu ở O. viverrini"
        ],
        answer: 0,
        explain: "Trang 11 (mục 11.2.1.6): Chuyển sản (metaplasia) gặp ở P. westermani tại phế quản; Tân sinh ác tính (neoplasia – khối u ác tính/ung thư gan) gặp ở Opisthorchis viverrini."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận cơ chế nội bào",
        q: "Một bệnh nhân nhiễm Leishmania donovani hoặc Toxoplasma gondii có thể kéo dài dai dẳng nhiều năm dù hiệu giá kháng thể lưu hành trong huyết thanh rất cao. Vì sao kháng thể dịch thể khó tiêu diệt được KST này?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 14)",
        options: [
          "KST ẩn vào tế bào ký chủ (sống và nhân lên ngay trong tế bào chất của đại thực bào), thoát khỏi sự truy lùng của kháng thể và các đại thực bào khác",
          "KST chỉ nằm ở lớp sừng biểu bì bên ngoài da không có mạch máu",
          "KST tiết enzym collagenase làm tiêu hủy toàn bộ kháng thể IgG trong 5 phút",
          "KST biến thành hạt phấn hoa trơ về mặt miễn dịch"
        ],
        answer: 0,
        explain: "Trang 14 (mục 12.4.1): Toxoplasma gondii, Leishmania sp. và Trypanosoma cruzi tồn tại và nhân lên trong tế bào chất của đại thực bào, thoát khỏi truy lùng của kháng thể."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt miễn dịch",
        q: "Một cư dân sống lâu năm tại vùng sốt rét lưu hành nặng có xét nghiệm máu vẫn còn ký sinh trùng Plasmodium với mật độ thấp nhưng hầu như không sốt và ít triệu chứng nặng; sau đó người này chuyển ra thành phố điều trị tiệt căn hết KST vài năm rồi quay lại vùng dịch thì bị sốt rét nặng trở lại. Hiện tượng nào đã mất đi?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 13)",
        options: [
          "Tiền miễn nhiễm (premunition) – trạng thái bảo vệ chỉ duy trì khi còn KST trong cơ thể và biến mất nhanh khi KST bị loại trừ",
          "Miễn dịch tự nhiên bẩm sinh không phụ thuộc sự có mặt của KST",
          "Quá trình chuyển sản ác tính của tế bào gan",
          "Phản ứng quá mẫn muộn khi tiêm candidine vào da"
        ],
        answer: 0,
        explain: "Trang 13: Tiền miễn nhiễm (premunition) đặc trưng cho sốt rét và bệnh Chagas: chỉ bảo vệ khi còn KST trong cơ thể và biến mất nhanh chóng khi KST bị loại trừ bằng thuốc."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ cảnh giác lâm sàng",
        q: "Một bệnh nhân suy giảm miễn dịch (AIDS hoặc dùng corticoid/thuốc ức chế miễn dịch dài ngày) từng sống ở vùng có giun lươn hoặc Toxoplasma. Tại sao bác sĩ phải đặc biệt cảnh giác các thể bệnh tiềm ẩn của những KST này?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 13)",
        options: [
          "Vì trên cơ địa suy giảm miễn dịch, các thể bệnh tiềm ẩn (Toxoplasma, Pneumocystis, Strongyloides...) có thể bộc phát dữ dội và đe dọa tính mạng",
          "Vì thuốc ức chế miễn dịch tiêu diệt toàn bộ vi khuẩn lẫn KST nên không cần theo dõi",
          "Vì ở người AIDS, giun lươn chuyển sang chu trình vô tính ngoài da lành tính",
          "Vì người suy giảm miễn dịch luôn tạo được miễn dịch dung nạp bảo vệ tuyệt đối"
        ],
        answer: 0,
        explain: "Trang 13: Trên cơ địa suy giảm miễn dịch (dùng thuốc, AIDS), hay gặp nhiễm KST lạ (Microsporidia, Cyclosporidia) hoặc bộc phát từ các thể bệnh tiềm ẩn (Toxoplasma, Pneumocystis, Strongyloides)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ phòng biến chứng",
        q: "Bệnh nhân có tiền sử sống vùng lưu hành sán lá gan nhỏ Clonorchis sinensis được chẩn đoán nhiễm sán mạn tính. Ngoài điều trị sán và theo dõi tổn thương tăng sản/tân sinh ống mật, bác sĩ cần cảnh giác biến chứng bội nhiễm nguy hiểm nào được sách nêu đích danh (tr. 12)?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 12)",
        options: [
          "Giảm sức đề kháng dẫn đến dễ tử vong vì bội nhiễm lao",
          "Bội nhiễm sốt phát ban do chí rận",
          "Vỡ nang gây shock phản vệ tức thì giống Hydatid",
          "Thiếu máu cận-Biermer do mất hoàn toàn vitamin B12"
        ],
        answer: 0,
        explain: "Trang 12 (mục 11.2.2.3): 'KST làm giảm sức đề kháng của ký chủ với những tác nhân gây bệnh: Những người nhiễm sán lá gan Clonorchis sinensis thường chết vì bội nhiễm lao'."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Thái độ chẩn đoán BCTT",
        q: "Một bệnh nhân nội trú có xét nghiệm phân dương tính với đơn bào đường ruột Giardia lamblia nhưng công thức máu lại có bạch cầu toan tính tăng rất cao tới 65%. Thái độ lâm sàng chuyên nghiệp nào đúng?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 12, 491)",
        options: [
          "Cảnh giác tìm thêm một nguyên nhân KST đa bào (giun sán mô/di chuyển như Toxocara, Gnathostoma) hoặc nguyên nhân dị ứng khác, vì đơn bào nói chung không làm tăng BCTT",
          "Kết luận Giardia lamblia là nguyên nhân gây tăng BCTT 65% vì mọi KST đều làm tăng BCTT như nhau",
          "Khẳng định chắc chắn BCTT 65% là do Entamoeba coli hội sinh ở ruột già",
          "Bỏ qua chỉ số BCTT 65% vì ngưỡng bình thường là dưới 80%"
        ],
        answer: 0,
        explain: "Trang 12 (mục 11.2.2.6) & tr. 491: Các loại KST đơn bào nói chung (trừ Toxoplasma gondii) KHÔNG làm gia tăng bạch cầu toan tính. BCTT tăng 65% ở ca này gợi ý đồng nhiễm KST đa bào ở mô/ngõ cụt ký sinh."
      }
    ]
  },

  // ========================================================================
  // BÀI 4: BỆNH HỌC, DỊCH TỄ, CHẨN ĐOÁN TRỰC TIẾP – GIÁN TIẾP & PHÒNG CHỐNG
  // Base: L1=6, L2=6, L3=0 | Extra: L1=0, L2=3, L3=9 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  4: {
    baseTags: [
      { level: 2, ksa: "S", ksaLabel: "S2: Chỉ định xét nghiệm" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "A", ksaLabel: "A1: Thái độ dự phòng" },
      { level: 2, ksa: "S", ksaLabel: "S1: Phân biệt kỹ thuật" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Dịch tễ)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đọc Sabin-Feldman" },
      { level: 1, ksa: "S", ksaLabel: "S1: Đọc kết tủa" },
      { level: 1, ksa: "S", ksaLabel: "S1: Đọc huỳnh quang" },
      { level: 2, ksa: "S", ksaLabel: "S2: Chọn huyết thanh" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Kỹ thuật)" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Diễn biến bệnh)",
        q: "So sánh dịch do vi khuẩn/virus với dịch do ký sinh trùng (mục 15.4, tr. 18), đặc điểm nào ĐÚNG?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 18)",
        options: [
          "Dịch vi khuẩn/virus bộc phát, lan nhanh nhưng mau tàn; còn dịch do KST diễn ra từ từ, kéo dài và ở vùng nội dịch tồn tại hầu như vô tận song song với người",
          "Dịch KST luôn bộc phát nhanh trong vài giờ rồi chấm dứt vĩnh viễn",
          "Sau khi khỏi bệnh KST, miễn dịch thu được duy trì bền vững suốt đời giúp dập tắt dịch ngay",
          "Bệnh KST không bao giờ có thể phát thành dịch"
        ],
        answer: 0,
        explain: "Trang 18 (mục 15.3 & 15.4): Sau khi khỏi bệnh KST, miễn dịch thu được biến mất nhanh chóng; dịch do KST diễn ra từ từ và kéo dài, tồn tại vô tận song song với người ở vùng nội dịch."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Kỹ thuật)",
        q: "Trong chẩn đoán huyết thanh học (tr. 20–21), nguồn kháng nguyên của KST dùng trong phản ứng có thể lấy từ đâu?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 20)",
        options: [
          "Từ trâu bò (sán lá gan), cừu (ấu trùng Echinococcus), chó mèo (Toxocara), thú nuôi phòng thí nghiệm (sán máng, giun chỉ, giun xoắn, sốt rét) hoặc môi trường nuôi cấy (vi nấm, thể hoạt động amip)",
          "Chỉ lấy được duy nhất từ phân tươi của bệnh nhân đang điều trị",
          "Chỉ tổng hợp hóa học từ acid béo vách tế bào vi khuẩn Gram âm",
          "Chỉ lấy từ nước tiểu bệnh nhân sốt rét"
        ],
        answer: 0,
        explain: "Trang 20: Nguồn KN KST có thể lấy từ trâu bò (sán lá gan), cừu (Echinococcus), chó mèo (Toxocara), thú nuôi PTN (sán máng, giun chỉ, giun xoắn, KST sốt rét), hoặc từ môi trường nuôi cấy (vi nấm, thể hoạt động amip)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh kỹ thuật)",
        q: "Theo Bảng tr. 22, ưu điểm nổi bật của Miễn dịch khuếch tán dưới điện trường (Électrosynérèse) so với Ouchterlony và Miễn dịch điện di cổ điển là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 21–22)",
        options: [
          "Thời gian thực hiện được rút ngắn xuống chỉ còn 2 giờ (so với 3–4 ngày) trong khi độ nhạy đạt ++ và phí tổn thấp (+)",
          "Độ nhạy đạt +++++ và định lượng chính xác nồng độ kháng thể tự động hóa hoàn toàn",
          "Thay thế hoàn toàn nhuộm Giemsa tìm ký sinh trùng sốt rét trên lam máu",
          "Dùng được cho mọi bệnh giun sán không bao giờ có phản ứng chéo"
        ],
        answer: 0,
        explain: "Trang 21 & Bảng tr. 22: Électrosynérèse (MD khuếch tán dưới điện trường) rút ngắn thời gian còn 2 giờ (so với Ouchterlony 3 ngày, MD điện di 4 ngày), độ nhạy ++, chi phí +."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Đọc KIT NOW Malaria",
        q: "Quan sát KIT chẩn đoán nhanh sốt rét NOW® Malaria (H1.dc-2, tr. 19) có 3 vạch C, T1 (HRP-2 của P. falciparum), T2 (pan-malarial aldolase chung P.v/P.m/P.o). Nếu mẫu máu bệnh nhân chỉ hiện 2 vạch C và T2 (vạch T1 không hiện), kết luận nào đúng?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, H1.dc-2 (tr. 19)",
        options: [
          "Dương tính với Plasmodium non-falciparum (P. vivax, P. malariae hoặc P. ovale)",
          "Dương tính đơn nhiễm với Plasmodium falciparum",
          "Âm tính hoàn toàn với mọi loài Plasmodium",
          "Xét nghiệm hỏng vì không có vạch chứng C"
        ],
        answer: 0,
        explain: "Trên que thử NOW® Malaria (H1.dc-2, tr. 19): C (+) chứng hợp lệ; chỉ có T1 (+) = P. falciparum; T1 (+) và T2 (+) = P. falciparum (hoặc nhiễm phối hợp P.f + P.v/m/o); chỉ có T2 (+) = P. vivax / P. malariae / P. ovale; chỉ có C (+) = âm tính."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Đọc kết quả Vogel-Minning & COPT",
        q: "Kỹ thuật viên nhỏ huyết thanh bệnh nhân nghi nhiễm sán máng vào hai lam kính: Lam 1 chứa ấu trùng đuôi chẻ sống (phản ứng Vogel–Minning, H1.dc-3); Lam 2 chứa trứng sán máng (H1.dc-4). Khi dương tính, hình ảnh quan sát tương ứng ở 2 lam là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, H1.dc-3 & H1.dc-4 (tr. 20)",
        options: [
          "Lam 1: màng ấu trùng đuôi chẻ dày lên; Lam 2: xuất hiện các kết tủa hình ngón tay quanh vỏ trứng",
          "Lam 1: ấu trùng mất màu xanh methylen; Lam 2: kết tủa chỉ bám ở lỗ miệng",
          "Lam 1: tạo cung kết tủa trong điện trường; Lam 2: tạo thảm đỏ ở đáy giếng",
          "Lam 1: phát huỳnh quang màu đỏ gạch; Lam 2: trứng sán nở ngay thành sán trưởng thành"
        ],
        answer: 0,
        explain: "Trang 20: Phản ứng Vogel–Minning (H1.dc-3) làm màng ấu trùng đuôi chẻ dày lên; phản ứng kết tủa quanh trứng (H1.dc-4) tạo kết tủa hình ngón tay quanh trứng sán máng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Đọc ảnh Ouchterlony H1.dc-6",
        q: "Trong Hình H1.dc-6 (tr. 21) minh họa phương pháp Ouchterlony, giếng trung tâm chứa kháng nguyên giun đũa heo (Asc. suum), các giếng ngoại vi chứa huyết thanh bệnh nhân nhiễm Onchocerca (Ser. Oncho) và Dracunculus medinensis (Ser. Med). Sự xuất hiện các đường kết tủa giữa giếng trung tâm và giếng huyết thanh chứng minh nguyên lý gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, H1.dc-6 (tr. 21)",
        options: [
          "Kháng nguyên hòa tan và kháng thể khuếch tán gặp nhau trong thạch tạo đường kết tủa nhờ hiện tượng cộng đồng kháng nguyên giữa các giun tròn",
          "Phản ứng điện di tách protein theo điện tích dưới dòng điện 220V",
          "Phản ứng ngưng kết trực tiếp đơn bào ở đáy giếng hình chữ V",
          "Chứng minh Asc. suum hoàn toàn không chia sẻ bất kỳ kháng nguyên nào với Onchocerca"
        ],
        answer: 0,
        explain: "Hình H1.dc-6 (tr. 21): Ouchterlony dùng KN hòa tan và KT khuếch tán trong thạch gặp nhau tạo một hay nhiều đường kết tủa; việc huyết thanh kháng Oncho và Med kết tủa với KN Ascaris suum minh họa rõ hiện tượng cộng đồng kháng nguyên."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Đọc ảnh Sabin-Feldman",
        q: "Làm thử nghiệm màu Sabin–Feldman cho thai phụ nghi nhiễm Toxoplasma gondii: Ống mẫu cho thấy ký sinh trùng Toxoplasma sống khi thêm huyết thanh thai phụ + xanh methylen vẫn BẮT MÀU XANH ĐẬM nguyên vẹn. Kết quả này đọc là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 20, 22)",
        options: [
          "Âm tính (trong huyết thanh không có kháng thể đặc hiệu phá hủy Toxoplasma)",
          "Dương tính mạnh vì ký sinh trùng bị ly giải và bắt màu xanh",
          "Dương tính giả do hiện tượng cộng đồng kháng nguyên với Salmonella",
          "Không đọc được vì Sabin–Feldman dương tính phải có màu đỏ"
        ],
        answer: 0,
        explain: "Theo sơ đồ tr. 22 & tr. 20: Trong Sabin–Feldman (nhuộm sống bằng xanh methylen), KST còn nguyên vẹn bắt màu xanh là ÂM TÍNH; KST bị kháng thể phá hủy và KHÔNG bắt màu xanh methylen mới là DƯƠNG TÍNH."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chọn xét nghiệm tối ưu",
        q: "Một phòng xét nghiệm tuyến cơ sở cần chọn một xét nghiệm ĐỊNH LƯỢNG, độ nhạy cao (+++), trả kết quả nhanh trong vòng 2 GIỜ và chi phí vừa phải (++) cho ca nghi nhiễm Toxoplasma hoặc Trypanosoma (chưa có máy ELISA tự động). Theo Bảng tr. 22, hai lựa chọn phù hợp nhất là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, Bảng tr. 22",
        options: [
          "Ngưng kết hồng cầu hoặc Miễn dịch huỳnh quang (đều ĐL, nhạy +++, 2 giờ, phí ++)",
          "Ouchterlony và Miễn dịch điện di (4 ngày)",
          "Chỉ có ELISA vì ELISA làm xong trong 30 phút và phí tổn +",
          "Thử nghiệm bì bằng histoplasmine"
        ],
        answer: 0,
        explain: "Theo Bảng tr. 22: Ngưng kết hồng cầu và Miễn dịch huỳnh quang đều là Định lượng (ĐL), độ nhạy +++, thời gian thực hiện 2 giờ, phí tổn ++; phù hợp cả Toxoplasma lẫn Trypanosoma (ELISA mất 4 giờ và phí ++++)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Đọc kết quả ngưng kết & điện di",
        q: "So sánh hình ảnh đáy giếng giữa Ngưng kết trực tiếp (đơn bào) và Ngưng kết hồng cầu, cùng với Miễn dịch điện di (H1.dc-7). Mô tả nào sau đây ĐÚNG?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 21)",
        options: [
          "Ngưng kết hồng cầu dương tạo thảm màu đỏ đều ở đáy giếng; Ngưng kết trực tiếp dương tạo thảm màu trắng đáy giếng; Miễn dịch điện di tạo các cung kết tủa",
          "Ngưng kết hồng cầu tạo cung kết tủa; Miễn dịch điện di tạo thảm trắng đáy giếng",
          "Cả hai phản ứng ngưng kết đều quan sát dưới kính hiển vi ánh sáng cực tím",
          "Miễn dịch điện di dùng trực tiếp ấu trùng đuôi chẻ còn sống"
        ],
        answer: 0,
        explain: "Trang 21: Ngưng kết hồng cầu cho thảm màu đỏ đều ở đáy giếng; ngưng kết trực tiếp (đơn bào + huyết thanh) cho thảm màu trắng đáy giếng; Miễn dịch điện di (H1.dc-7) điện di KN trước rồi cho huyết thanh vào rãnh tạo cung kết tủa."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ lấy mẫu xét nghiệm",
        q: "Một bác sĩ cho xét nghiệm phân trực tiếp 1 lần duy nhất cho bệnh nhân đau bụng kéo dài nghi nhiễm amip hoặc giun sán, thấy âm tính liền loại trừ hoàn toàn bệnh KST. Thiếu sót kỹ năng/thái độ nào cần khắc phục theo tr. 18?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 18)",
        options: [
          "Sự phân phối KST trong bệnh phẩm không đồng đều nên cần lấy bệnh phẩm xét nghiệm NHIỀU LẦN, đúng thời điểm và kết hợp phương pháp tập trung KST thích hợp",
          "Không bao giờ dùng kính hiển vi tìm amip trong phân mà chỉ dùng test RAST",
          "Chỉ cần lấy 1 giọt nước tiểu để thay thế xét nghiệm phân",
          "Phải đợi 1 năm sau mới lấy mẫu phân lần thứ 2"
        ],
        answer: 0,
        explain: "Trang 18 (mục 15.5.2.1): Vì sự phân phối KST trong bệnh phẩm không đồng đều nên cần lấy bệnh phẩm xét nghiệm nhiều lần, quyết định đúng loại/thời điểm lấy mẫu và phương pháp tập trung thích hợp."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ điều trị & cộng đồng",
        q: "Tại một huyện vùng trũng có tỷ lệ nhiễm giun truyền qua đất trên 70%, chỉ kê đơn điều trị cho vài ca nặng đến bệnh viện mà không triển khai điều trị cộng đồng và vệ sinh môi trường. Theo mục 15.6–15.7 (tr. 23), định hướng đúng là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1 (tr. 23)",
        options: [
          "Khi có vùng dân cư rộng lớn mắc bệnh cần tiến hành điều trị hàng loạt, kết hợp dự phòng quy mô lớn, có kế hoạch, trọng tâm trọng điểm, kiên trì dựa vào quần chúng và lồng ghép CSSKBĐ",
          "Không được điều trị hàng loạt trong bất kỳ hoàn cảnh nào, chỉ phẫu thuật từng ca",
          "Chỉ cần làm phản ứng Ouchterlony cho toàn dân mỗi tuần",
          "Chỉ dùng thuốc tẩy giun 1 ngày rồi ngừng mọi biện pháp vệ sinh"
        ],
        answer: 0,
        explain: "Trang 23 (mục 15.6 & 15.7): Vùng dân cư rộng lớn mắc bệnh cần điều trị hàng loạt; dự phòng phải tiến hành quy mô lớn, có kế hoạch, có trọng tâm trọng điểm, kiên trì dựa vào quần chúng và lồng ghép vào chăm sóc sức khỏe ban đầu."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ với bệnh mạn tính/phôi trong mô",
        q: "Bệnh nhân có hội chứng thận hư bất thường sống tại vùng dịch giun chỉ lưu hành; trên mảnh sinh thiết thận (như H1.dc-1 tr. 19) phát hiện phôi giun chỉ nằm trong cuộn mao mạch cầu thận. Thái độ tiếp cận chẩn đoán – điều trị đúng là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Chương 1, H1.dc-1 (tr. 18–19, 23)",
        options: [
          "Xác nhận chẩn đoán trực tiếp thấy KST trong mô, bổ sung lấy máu ngoại vi đúng thời điểm thích hợp/tìm kháng nguyên hòa tan và điều trị đặc hiệu kết hợp nâng cao thể trạng toàn diện",
          "Cho rằng phôi giun chỉ trong cầu thận là KST giả hiệu giống hạt phấn hoa",
          "Chỉ dùng thử nghiệm bì candidine để theo dõi mà không điều trị đặc hiệu",
          "Loại trừ giun chỉ vì giun chỉ chỉ sống trong ống dẫn mật"
        ],
        answer: 0,
        explain: "Trang 18–19 & 23: H1.dc-1 minh họa phôi giun chỉ trong cầu thận (tìm KST trong bệnh phẩm mô); cần phối hợp xét nghiệm máu đúng thời điểm chu kỳ phôi/tìm KN hòa tan và điều trị đặc hiệu phối hợp nâng cao thể trạng."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: ĐẠI CƯƠNG, PHÂN LOẠI, CƠ SỞ SINH HỌC & TẦM QUAN TRỌNG BỆNH ĐỘNG VẬT
  // Base: L1=6, L2=5, L3=1 | Extra: L1=0, L2=4, L3=8 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  5: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Biện luận phân loại" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Định nghĩa)",
        q: "Tại sao định nghĩa chung năm 1959 và 1967 của Ủy ban Hỗn hợp FAO/WHO về 'bệnh động vật' lại được xem là quá rộng so với định nghĩa 'bệnh động vật ký sinh' (tr. 504)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 504)",
        options: [
          "Vì định nghĩa FAO/WHO bao gồm cả bệnh không nhiễm (độc tố, nọc độc) và bệnh động vật nhiễm ngẫu nhiên từ người ít quan trọng YTCĐ",
          "Vì định nghĩa FAO/WHO loại trừ hoàn toàn các bệnh đơn bào và giun sán",
          "Vì định nghĩa FAO/WHO chỉ áp dụng cho động vật không xương sống như ốc và giáp xác",
          "Vì định nghĩa FAO/WHO không công nhận ngoại ký sinh trùng đào hầm qua mô"
        ],
        answer: 0,
        explain: "Trang 504: Định nghĩa FAO/WHO quá rộng vì bao gồm cả bệnh không nhiễm (toxins, poisons) và bệnh thú nhiễm ngẫu nhiên từ người ít quan trọng YTCĐ. Bệnh động vật ký sinh thu gọn lại còn hiện tượng nhiễm KST (chủ yếu đơn bào, giun sán và ngoại KST đào hầm xuyên mô) qua lại tự nhiên giữa ĐV có xương sống và người."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Phân biệt 'Bệnh động vật bắt buộc' (Obligate zoonoses) và 'Bệnh động vật tùy nghi' (Facultative zoonoses) theo tr. 505?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 505)",
        options: [
          "Bắt buộc truyền từ ĐV có xương sống sang người; Tùy nghi bình thường truyền người–người hoặc thú–thú nhưng có thể sang người",
          "Bắt buộc chỉ do nấm ngoài cảnh; Tùy nghi chỉ do sán dải lợn",
          "Bắt buộc lây qua muỗi; Tùy nghi lây qua đường hô hấp",
          "Tùy nghi không bao giờ xuất hiện ở người"
        ],
        answer: 0,
        explain: "Trang 505: Bệnh động vật bắt buộc truyền từ ĐV có xương sống sang người; bệnh động vật tùy nghi truyền từ người sang người hoặc thú sang thú nhưng có thể sang người."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Nôi sinh thái)",
        q: "Trong Biểu đồ 2.2-4 (tr. 506–507), 5 nhóm yếu tố cấu thành 'Nôi sinh thái' (Niche écologique) của ký sinh trùng là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 506–507)",
        options: [
          "Nguồn thức ăn; yếu tố sinh học (miễn dịch, men); tác động cơ học (nhu động, dòng chảy); yếu tố vật lý (ánh sáng, nhiệt, ẩm, áp suất thẩm thấu); yếu tố hóa học (oxy hóa khử, acid, kiềm)",
          "Chỉ có nhiệt độ và lượng mưa theo mùa",
          "Chỉ có thuốc kháng sinh và hóa chất diệt ốc",
          "Nhân chủng, tôn giáo, nghề nghiệp, chiến tranh và đô thị hóa"
        ],
        answer: 0,
        explain: "Trang 506–507 & Biểu đồ 2.2-4: 5 yếu tố của nôi sinh thái là thức ăn (a), sinh học (b), cơ học (c), vật lý (d), hóa học (e)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế ngõ cụt)",
        q: "Vì sao các ấu trùng KST động vật (chó, mèo, trâu, bò, chuột...) khi vào cơ thể người thường rơi vào 'Ngõ cụt ký sinh' (impasse parasitaire)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 507)",
        options: [
          "Do chưa thích ứng với điều kiện nôi sinh thái cơ thể người (không lột xác lên trưởng thành được) và thường người không bị động vật khác ăn thịt để hoàn tất chu trình",
          "Do cơ thể người luôn có kháng thể bẩm sinh tiêu diệt ngay trong 1 giây",
          "Do KST động vật thích ứng quá hoàn hảo thành KCVV ở người",
          "Do KST tự nguyện ngừng phát triển để biến thành dạng hội sinh"
        ],
        answer: 0,
        explain: "Trang 507: Do chưa thích ứng điều kiện nôi sinh thái của người để lột xác lên trưởng thành, và thường người không bị thú ăn thịt khác ăn thịt nên không chuyển sang nôi sinh thái mới → ngõ cụt ký sinh."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân loại ca bệnh",
        q: "Một công nhân làm vườn hít phải bào tử vi nấm Cryptococcus neoformans hoặc Histoplasma capsulatum từ đất phân chim/dơi (những loài này cũng tự nhiễm cho thú từ đất mà không truyền từ thú sang người). Theo Biểu đồ 2.2-3 (tr. 505–506), đây là loại nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Biểu đồ 2.2-3 (tr. 505–506)",
        options: [
          "Bệnh động vật giả (nguồn bệnh là KST tùy nghi sống tự do ở ngoại cảnh)",
          "Bệnh động vật thật hoàn chỉnh (Holozoonoses)",
          "Bệnh động vật thật chưa hoàn chỉnh (Parazoonoses)",
          "Bệnh động vật một chiều từ chim qua giun đất"
        ],
        answer: 0,
        explain: "Trang 505–506 (Biểu đồ 2.2-3): Bệnh động vật giả khi nguồn bệnh sống tự do ở ngoại cảnh (đất, nước, thực vật), xâm nhập người và ĐV có xương sống như KST tùy nghi (Cryptococcus neoformans, Histoplasma capsulatum, Aspergillus...)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích Biểu đồ 2.2-5",
        q: "Một bệnh nhân đi bơi ở sông/ruộng có nuôi vịt về bị sẩn đỏ ngứa dữ dội ở chân (không tạo đường hầm ngoằn ngoèo bò mỗi ngày). Theo Biểu đồ 2.2-5 (tr. 508), đặc điểm 'tính năng động' nào giải thích sự khác biệt tổn thương này với giun móc chó mèo?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Biểu đồ 2.2-5 (tr. 508)",
        options: [
          "Ấu trùng sán máng vịt có tính năng động ít/không có nên ở tại chỗ sau khi chui da gây viêm da dị ứng; còn giun móc chó mèo có tính năng động cao nên bò ngoằn ngoèo gây Larva migrans ngoài da",
          "Ấu trùng sán máng vịt có tính năng động rất cao nên chui thẳng lên não trong 7 giờ",
          "Giun móc chó mèo không có tính năng động nên chết ngay trên bề mặt sừng",
          "Cả hai đều có tính năng động cao như nhau nhưng khác nhau về màu sắc trứng"
        ],
        answer: 0,
        explain: "Biểu đồ 2.2-5 (tr. 508): Giun tròn năng động cao → hội chứng Larva migrans (nội tạng/ngoài da); còn sán, đơn bào, một số ít giun tính năng động ít hoặc không có → khu trú tại chỗ/bị dòng máu cuốn mắc kẹt (viêm da sán máng, Sparganum, Echinococcus, Toxoplasma, Angiostrongylus)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận cơ chế bệnh động vật",
        q: "Khi đối chiếu 2 loài sán dải ở người: (1) Diphyllobothrium latum và (2) Echinococcus granulosus. Vì sao (1) được xếp là Bệnh động vật hoàn chỉnh (Holozoonoses) còn (2) là Bệnh động vật một chiều (Hemizoonoses / Ngõ cụt ký sinh)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 505–506, 515, 522)",
        options: [
          "Ở người, D. latum phát triển thành sán trưởng thành đẻ trứng duy trì chu trình với ĐV, còn E. granulosus chỉ dừng ở giai đoạn ấu trùng (nang hydatid) không trưởng thành được",
          "Vì người là KCVV của cả hai nhưng E. granulosus có 2 KCTG ở biển",
          "Vì D. latum là vi nấm tùy nghi ngoài đất còn E. granulosus là giun tròn",
          "Vì trứng D. latum chết ngay sau 2 giờ nên thuộc loại chưa hoàn chỉnh"
        ],
        answer: 0,
        explain: "Trang 505–506 & 515: Holozoonoses (Biểu đồ 2.2-1) cả người và ĐV có xương sống đều mang KST trưởng thành (D. latum, P. westermani); Hemizoonoses (Biểu đồ 2.2-2) ở người KST chỉ dừng ở giai đoạn ấu trùng/vô tính (Echinococcus, Toxoplasma, Larva migrans)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Áp dụng thang đặc hiệu",
        q: "Một loài ký sinh trùng chỉ có thể tồn tại được ở 1–2 loài ký chủ nhất định (khác với loài chỉ 1 ký chủ duy nhất hay loài sống ở mọi ký chủ). Theo Biểu đồ 2.2-4 (tr. 507), thuật ngữ phân loại mức độ thích ứng của nó là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Biểu đồ 2.2-4 (tr. 506–507)",
        options: [
          "Oligoxène (tương đối hẹp)",
          "Sténoxène (hẹp)",
          "Euryxène (rộng)",
          "Holoxène (rất rộng)"
        ],
        answer: 0,
        explain: "Trang 506–507 & Biểu đồ 2.2-4: Sténoxène (1 ký chủ), Oligoxène (1–2 ký chủ), Euryxène (nhiều ký chủ), Holoxène (bất kỳ ký chủ nào)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích ca ghép tạng/ức chế MD",
        q: "Một bệnh nhân sau ghép thận đang dùng thuốc ức chế miễn dịch liều cao đột ngột xuất hiện viêm não nặng do Toxoplasma gondii và nhiễm Babesia tái hoạt từ thể tiềm ẩn (subclinical infection). Theo mục 4 (tr. 509), yếu tố nào đang giải thích sự gia tăng nhóm bệnh này trong y học hiện đại?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 509)",
        options: [
          "Yếu tố (iv): Y học phát triển cung cấp phương thức & thuốc ức chế miễn dịch (trị ung thư, dị ứng, ghép cơ quan) làm bùng dậy các thể bệnh tiềm ẩn",
          "Yếu tố (iii): Khách du lịch đi nghỉ dưỡng vùng nông thôn",
          "Yếu tố (i): Khai thác gỗ rừng núi nhiệt đới",
          "Yếu tố (ii): Dân nông thôn lên thành phố làm việc"
        ],
        answer: 0,
        explain: "Trang 509 (mục 4): Yếu tố (iv) nêu đích danh thuốc/phương thức ức chế miễn dịch trong ung thư, dị ứng, ghép cơ quan làm bùng dậy các thể bệnh tiềm ẩn (subclinical infections) như Toxoplasma, Babesia, Plasmodium spp."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ cảnh giác đô thị hóa",
        q: "Tại một chung cư hiện đại ở thành phố lớn, nhiều gia đình có thói quen nuôi chó mèo cảnh trong phòng ngủ và cho trẻ nhỏ ôm ấp thú cưng. Theo nhận định về yếu tố đô thị hóa (tr. 509), thái độ dự phòng đúng của bác sĩ gia đình là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 509, 521)",
        options: [
          "Cảnh giác nguy cơ truyền bệnh động vật ngay tại đô thị (do di dân mang mầm bệnh và thói quen nuôi thú nhỏ); hướng dẫn tẩy giun định kỳ cho thú, vệ sinh tay và quản lý phân thú",
          "Khẳng định bệnh động vật ký sinh chỉ tồn tại ở vùng rừng núi hoặc lò sát sinh nông thôn",
          "Không cần tẩy giun cho thú cưng sống trong căn hộ máy lạnh",
          "Chờ khi trẻ có sẩn ngoài da mới tìm nguồn bệnh từ đất rừng"
        ],
        answer: 0,
        explain: "Trang 509 (yếu tố ii) & tr. 521: Đô thị hóa làm người dân nông thôn di cư kéo theo mầm bệnh và người thành phố thích nuôi thú nhỏ trong nhà → bệnh động vật trở nên quan trọng ngay ở thành thị."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ với ngoại KST mô",
        q: "Bệnh nhân bị ngoại ký sinh trùng (như một số ấu trùng ruồi / ký sinh trùng ngoài da) đào hầm xuyên qua mô dưới da. Khi một sinh viên cho rằng 'bệnh động vật ký sinh chỉ bao gồm giun sán và đơn bào, không tính ngoại KST đào hầm mô', bạn sẽ chỉnh sửa quan điểm theo Ủy ban Chuyên gia WHO (tr. 504) thế nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 504)",
        options: [
          "Chính xác phải tính cả các trường hợp ngoại ký sinh trùng đào hầm xuyên qua mô vào phạm vi bệnh động vật ký sinh theo WHO",
          "Đồng ý rằng mọi ngoại KST đều không thuộc bệnh động vật",
          "Chỉ tính ngoại KST đào hầm vào nhóm bệnh động vật giả ngoài đất",
          "Xếp ngoại KST đào hầm vào nhóm ký sinh trùng giả hiệu"
        ],
        answer: 0,
        explain: "Trang 504: Dù bệnh động vật ký sinh chủ yếu gồm đơn bào và giun sán, nhưng 'Theo Ủy Ban Chuyên Gia về Bệnh Động Vật của Tổ Chức Sức Khỏe Thế Giới, các trường hợp ngoại ký sinh trùng đào hầm xuyên qua mô cũng được xem là bệnh động vật'."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Thái độ nhận diện ca Taenia saginata",
        q: "Trong buổi thảo luận ca lâm sàng, có ý kiến xếp ca nhiễm Taenia saginata trưởng thành ở ruột người vào nhóm 'Bệnh động vật hoàn chỉnh' (vì lây qua lại giữa bò và người). Thái độ học thuật chuẩn xác theo sách (tr. 564) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu 13 (tr. 523, 564)",
        options: [
          "Giải thích rõ rằng với trâu bò đây là bệnh động vật một chiều, còn với người thì KHÔNG xếp vào hoàn chỉnh/chưa hoàn chỉnh/một chiều vì người đã là ký chủ chính vĩnh viễn của T. saginata",
          "Đồng ý xếp là bệnh động vật hoàn chỉnh giống Diphyllobothrium latum",
          "Xếp T. saginata vào bệnh động vật giả giống Aspergillus",
          "Xếp người là ngõ cụt thực sự của T. saginata"
        ],
        answer: 0,
        explain: "Trang 564 (Đáp án Câu 13): Người là KCVV của T. saginata, trâu bò là KCTG; với trâu bò là bệnh động vật một chiều nhưng với người chẳng có ý nghĩa gì vì người đã là ký chủ chính (chọn E: Tất cả đều sai)."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: HỘI CHỨNG LARVA MIGRANS NGOÀI DA & NỘI TẠNG
  // Base: L1=6, L2=6, L3=0 | Extra: L1=0, L2=3, L3=9 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  6: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt lâm sàng" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Biện luận BCTT" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Cảnh giác thể mắt" },
      { level: 2, ksa: "S", ksaLabel: "S2: Chọn xét nghiệm" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "S", ksaLabel: "S1: Phác đồ thuốc" },
      { level: 1, ksa: "S", ksaLabel: "S1: Nhận diện hình thể" },
      { level: 2, ksa: "A", ksaLabel: "A2: Phòng bệnh thực phẩm" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Diễn biến)",
        q: "Trên da người, tổn thương đường gồ ngoằn ngoèo do ấu trùng giun móc chó mèo xuất hiện sau bao lâu kể từ lúc chui qua da, tốc độ di chuyển và diễn biến tự nhiên thế nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 509–510)",
        options: [
          "Xuất hiện sau 2–3 ngày (nổi sẩn đỏ rất ngứa ban đầu), bò vài mm đến vài cm/ngày, có thể có bóng nước nhỏ, tự lành sau nhiều tuần đến vài tháng (nhưng có thể bội nhiễm do gãi)",
          "Xuất hiện ngay sau 5 phút, bò 50 cm/giờ, tồn tại suốt 17 năm không tự lành",
          "Chỉ xuất hiện sau 6 tháng và luôn hóa vôi tạo u cứng ở mắt",
          "Gây loét sâu hoại tử toàn bộ chi và mất máu qua đường tiêu hóa"
        ],
        answer: 0,
        explain: "Trang 509–510: Tạo sẩn đỏ rất ngứa, sau 2–3 ngày nổi đường gồ ngoằn ngoèo tốc độ vài mm đến vài cm/ngày, ngứa nhất về đêm; tự lành sau nhiều tuần đến vài tháng, hiếm khi thoát lên phổi gây hội chứng Loeffler."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chu trình)",
        q: "Trong chu trình phát triển tự nhiên của Gnathostoma spinigerum ở chó, mèo (tr. 512), thời gian để ấu trùng giai đoạn III phát triển thành giun trưởng thành ở vách bao tử chó mèo và thời gian giun non tồn tại lang thang ở người là bao lâu?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 512)",
        options: [
          "Ở chó mèo: trưởng thành trong vòng 6 tháng; ở người: không trưởng thành được nhưng di chuyển lang thang kéo dài đến 17 năm",
          "Ở chó mèo: trưởng thành trong 24 giờ; ở người: chết sau 1 tuần",
          "Ở chó mèo: sống ở động mạch phổi; ở người: chỉ tồn tại trong ruột 2 tháng",
          "Cả ở chó mèo và người đều trưởng thành sau 4 tuần"
        ],
        answer: 0,
        explain: "Trang 512: Ở chó mèo (ăn KCTG II), ấu trùng chui vách bao tử thành giun trưởng thành trong vòng 6 tháng; ở người, KST phát triển đến giun non nhưng không trưởng thành được và có thể kéo dài đến 17 năm."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Miễn dịch – Cận lâm sàng)",
        q: "Ngoài bạch cầu 10.000–100.000/mm³ và BCTT 50–80%, xét nghiệm máu nào tăng rất cao gấp 10–15 lần bình thường giúp định hướng bệnh Larva migrans nội tạng do Toxocara?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 511)",
        options: [
          "Globulines (nhất là IgE và IgG) tăng hơn bình thường 10–15 lần",
          "Men transaminase và bilirubin toàn phần tăng gấp 100 lần",
          "Hồng cầu lưới tăng 50% do vỡ hồng cầu hàng loạt",
          "Albumin dịch não tủy kèm tăng tế bào lympho đơn thuần"
        ],
        answer: 0,
        explain: "Trang 511 (mục 5.2.4.1): Globulines tăng hơn bình thường 10–15 lần, nhất là IgE và IgG."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận ca bệnh ngoài da",
        q: "Một du khách đi chân đất nằm tắm nắng trên bãi cát biển có nhiều chó thả rông, 3 ngày sau bàn chân và mông xuất hiện các đường gồ đỏ ngoằn ngoèo như bản đồ, ngứa dữ dội về đêm. Thuốc và phác đồ đặc hiệu đúng chuẩn theo sách (tr. 510) để kê cho ca này là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 510)",
        options: [
          "Thiabendazole 25 mg/kg/ngày × 3–5 ngày, hoặc Flubendazole 500 mg/ngày × 7 ngày, hoặc Albendazole 2 viên 200 mg/ngày × 3 ngày (kèm thoa HCH/Lindane 1% hoặc xịt etylchlorur/fréon)",
          "Diethylcarbamazine (Hetrazan) 0,5 mg/kg/ngày × 5 ngày + tiêm formalin 10% dưới da",
          "Phẫu thuật rạch rộng toàn bộ bàn chân để tìm đầu sán dải",
          "Albendazole 14 mg/kg/ngày kéo dài liên tục 28 ngày như nang Hydatid"
        ],
        answer: 0,
        explain: "Trang 510 (mục 5.1.5): Điều trị Larva migrans ngoài da: Thiabendazole 25 mg/kg/ngày × 3–5 ngày; Flubendazole 500 mg/ngày × 7 ngày; Albendazole 2 viên 200 mg/ngày × 3 ngày; tại chỗ HCH, Lindane 1%, xịt etylchlorur, fréon."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận ca bệnh trẻ em",
        q: "Bé trai 3 tuổi nhà nuôi chó con 4 tháng tuổi, hay chơi đất vườn, nhập viện vì sốt nhẹ kéo dài, gầy yếu, khò khè dạng suyễn, nổi mề đay, gan to cứng nhẵn không đau; công thức máu có BC 48.000/mm³, BCTT 68%, IgE và IgG tăng gấp 12 lần. Chẩn đoán và xét nghiệm xác định đặc hiệu nhất cho bé là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 510–511)",
        options: [
          "Larva migrans nội tạng do Toxocara canis; làm ELISA với kháng nguyên ngoại tiết – phân tiết (Toxocara ES antigen)",
          "Larva migrans ngoài da do Ancylostoma caninum; chỉ cần soi phân tìm trứng giun móc",
          "Viêm màng não do Angiostrongylus; cấy máu tìm phôi giun",
          "Bệnh sán lá phổi; xét nghiệm đàm tìm trứng"
        ],
        answer: 0,
        explain: "Trang 510–511: Trẻ 1–4 tuổi nhà nuôi chó con, triệu chứng hô hấp/gan to cứng nhẵn/mề đay, BC 10–100k, BCTT 50–80%, IgE/IgG tăng 10–15 lần → Larva migrans nội tạng do Toxocara canis. Chẩn đoán đặc hiệu dùng ELISA với Toxocara excretory-secretory antigen."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận ca thể mắt",
        q: "Một người trưởng thành đến khám mắt vì giảm thị lực một bên mắt từ từ, soi đáy mắt thấy tổn thương viêm hạt võng mạc/viêm nội nhãn mạn tính, nhưng công thức máu cho thấy số lượng BẠCH CẦU BÌNH THƯỜNG (7.500/mm³). Biện luận nào phù hợp với giáo trình?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 511)",
        options: [
          "Vẫn phải nghĩ đến Toxocara thể ở mắt (viêm hạt võng mạc/nội nhãn), vì sách cảnh báo bạch cầu máu có thể KHÔNG tăng trong thể bệnh ở mắt",
          "Loại trừ hoàn toàn Toxocara vì Toxocara bắt buộc phải có bạch cầu > 10.000/mm³ ở mọi thể",
          "Chắc chắn là Sparganum do đắp đùi ếch vì Toxocara không bao giờ gây giảm thị lực ở người lớn",
          "Chẩn đoán xác định bằng sinh thiết gan (dương tính 99% ở ca mắt)"
        ],
        answer: 0,
        explain: "Trang 511: Ở người lớn nhiễm Toxocara có thể giảm thị lực 1 bên do viêm hạt võng mạc/nội nhãn mạn; và mục 5.2.4.1 lưu ý đặc biệt: 'coi chừng bạch cầu có thể không tăng trong thể bệnh ở mắt'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chẩn đoán ca mắm thái",
        q: "Một phụ nữ ở đồng bằng sông Cửu Long có thói quen ăn mắm thái và cá lóc nướng trui, nhập viện vì xuất hiện các cục u di động dưới da kèm sẩn/đường hầm ngoằn ngoèo tái phát nhiều đợt trong 4 năm, từng có đợt đau hạ sườn phải và mờ mắt; BC 92.000/mm³, BCTT 74%. Tác nhân và hướng xử trí chuẩn theo sách (tr. 512) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 512)",
        options: [
          "Gnathostoma spinigerum; phản ứng nội bì tin cậy, điều trị rạch gắp giun nếu ở da/niêm mạc mắt (hoặc DEC Hetrazan 0,5–0,7 mg/kg/ngày × 5–7 ngày)",
          "Ancylostoma braziliense; thoa dầu rái cá là hết ngay",
          "Anisakis simplex; đông lạnh bệnh nhân -20°C",
          "Toxocara cati; dùng Thiabendazole 25 mg/kg × 3 ngày là tiệt căn 100%"
        ],
        answer: 0,
        explain: "Trang 512: Tiền sử ăn mắm thái/cá lóc nướng trui, u di động dưới da kéo dài nhiều năm (đến 17 năm), tổn thương mắt/gan, BC 100.000/mm³, BCTT 50–80% → Gnathostoma spinigerum. Phản ứng nội bì tin cậy; thuốc giun sán ít tác dụng (DEC 0,5–0,7 mg/kg × 5–7 ngày tương đối), khi ở da hay mắt có thể rạch gắp giun ra."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt xét nghiệm Toxocara",
        q: "Tại sao trong chẩn đoán Larva migrans nội tạng do Toxocara, kỹ thuật sinh thiết gan ít được ưu tiên hơn ELISA dùng kháng nguyên ES (tr. 511)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 511)",
        options: [
          "Vì sinh thiết gan xâm lấn và chỉ tìm thấy ấu trùng/u hạt điển hình có giá trị trong 20% trường hợp, còn ELISA với Toxocara ES antigen đặc hiệu hơn nhiều",
          "Vì Toxocara không bao giờ đi qua gan trên đường chu du",
          "Vì sinh thiết gan gây shock phản vệ chết người giống nang Hydatid",
          "Vì Toxocara sống trong lòng ống mật chủ nên phải nội soi mật tụy ngược dòng"
        ],
        answer: 0,
        explain: "Trang 511 (mục 5.2.4.2): Sinh thiết gan chỉ có giá trị trong 20% trường hợp (dễ bỏ sót ấu trùng nhỏ nằm rải rác); hiện nay ELISA dùng Toxocara excretory-secretory antigen cho kết quả đặc hiệu hơn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt 2 loài giun gây hội chứng phổi",
        q: "Một bệnh nhân có tổn thương đường hầm dưới da do Ancylostoma caninum bỗng xuất hiện ho, thâm nhiễm phổi và tăng BCTT trong máu lẫn đàm (Hội chứng Loeffler). Đánh giá nào đúng về hiện tượng này (tr. 510)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 510)",
        options: [
          "Là biến chứng hiếm gặp khi một số ít ấu trùng giun móc chó mèo thoát được lên phổi gây hội chứng Loeffler",
          "Là diễn biến bắt buộc ở 100% ca nhiễm A. caninum để lên ruột đẻ trứng",
          "Chứng tỏ A. caninum đã chuyển thành sán lá phổi Paragonimus",
          "Chứng tỏ người bệnh đồng nhiễm đơn bào Balantidium coli"
        ],
        answer: 0,
        explain: "Trang 510: Trong đa số trường hợp A. caninum không vào tĩnh mạch lên phổi được, nhưng 'Trong một số trường hợp hiếm, ấu trùng thoát được lên phổi gây hội chứng Loeffler: thâm nhiễm phổi, tăng BCTT trong máu và đàm'."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ dự phòng cho chó mẹ/con",
        q: "Gia đình có trẻ nhỏ 2 tuổi muốn nuôi chó cảnh và hỏi bác sĩ thú y/y khoa cách phòng bệnh Toxocara và giun móc chó mèo hiệu quả nhất dựa trên đặc điểm sinh học của giun (tr. 510–511). Lời khuyên nào chuẩn xác nhất?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 510–511)",
        options: [
          "Định kỳ xổ giun cho chó con và chó có thai; cấm thả chó ra công viên/bãi cát/vườn; rửa sạch tay trẻ và chống thói quen nuốt đất",
          "Chỉ cần xổ giun 1 lần khi chó tròn 5 tuổi vì chó con < 6 tháng không bao giờ nhiễm giun",
          "Không cần quan tâm chó mang thai vì ấu trùng không qua được lá nhau hay tuyến vú",
          "Cho trẻ dùng Albendazole mỗi ngày suốt năm thay cho việc xổ giun cho chó"
        ],
        answer: 0,
        explain: "Trang 510–511 (mục 5.1.6 & 5.2.6): Chó con (< 3–6 tháng) là nguồn thải tới 200.000 trứng/ngày và chó mẹ truyền qua nhau/sữa → phải định kỳ xổ giun cho chó con và chó có thai, cấm thả chó ra công viên/bãi cát/vườn và chống trẻ nuốt đất."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ với bệnh nhân ngứa đêm",
        q: "Bệnh nhân bị Larva migrans ngoài da ngứa dữ dội về đêm ở mu bàn chân và tự ý gãi làm trầy xước nhiều vùng da dọc đường hầm. Nguy cơ biến chứng thực tế nào cần dặn dò và phòng ngừa cho bệnh nhân (tr. 509)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 509)",
        options: [
          "Gãi làm trầy xước da dẫn đến nhiễm khuẩn phụ tại các đường hầm và bóng nước",
          "Gãi làm trứng giun nở ngay trên da lây lan cho cả nhà qua đường hô hấp",
          "Gãi làm ấu trùng hóa thành bướu Hydatid ở gan",
          "Gãi khiến giun mọc thêm gai cuticule và sống tới 17 năm"
        ],
        answer: 0,
        explain: "Trang 509: 'Bệnh nhân có thể gãi khi ngứa (nhất là về đêm) làm trầy xước da và nhiễm khuẩn phụ'."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ với bệnh nhân Gnathostoma ở mắt",
        q: "Bệnh nhân có tiền sử ăn cá lóc nướng trui chưa kỹ, nay xuất hiện viêm mống mắt, viêm màng bồ đào kèm xuất huyết nặng, nghi giun non Gnathostoma di chuyển vào nhãn cầu. Thái độ xử trí ưu tiên nào đúng theo sách (tr. 512)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 512)",
        options: [
          "Chẩn đoán sớm dựa dịch tễ/lâm sàng/BCTT cao/nội bì, phối hợp chuyên khoa mắt rạch và gắp giun ra kịp thời vì thuốc tẩy giun sán hầu như ít hiệu quả",
          "Chỉ cho uống mebendazole chờ 1 năm sau tự khỏi",
          "Đắp thịt ếch giã nát lên mắt để giảm viêm mống mắt",
          "Chờ 17 năm cho giun tự chết rồi mới xử trí"
        ],
        answer: 0,
        explain: "Trang 512: Ở mắt, Gnathostoma gây viêm mống mắt/bồ đào, xuất huyết nặng, hoại tử dọc đường đi. Thuốc giun sán hầu như không tác dụng → khi giun ở da hay niêm mạc mắt, rạch và gắp giun ra là biện pháp quyết định."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: ANGIOSTRONGYLUS CANTONENSIS, ANISAKINAE & BỆNH NANG SÁN ECHINOCOCCUS
  // Base: L1=6, L2=4, L3=2 | Extra: L1=0, L2=5, L3=7 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  7: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "S", ksaLabel: "S1: Đọc DNT" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích lâm sàng" },
      { level: 2, ksa: "S", ksaLabel: "S2: Xử trí & Dự phòng" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 3, ksa: "A", ksaLabel: "A2: An toàn thủ thuật" },
      { level: 3, ksa: "S", ksaLabel: "S2: Biện luận Casoni/CFT" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phác đồ phẫu/nội" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bệnh học)" },
      { level: 1, ksa: "S", ksaLabel: "S1: Ngưỡng huyết thanh" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chu trình)",
        q: "Trong chu trình tự nhiên ở chuột của Angiostrongylus cantonensis (tr. 513), giun trưởng thành sống ở đâu và ấu trùng di chuyển qua não chuột theo trình tự thời gian nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 513)",
        options: [
          "Trưởng thành ở động mạch phổi chuột; sau khi chuột nuốt L3, ấu trùng lên não thành giun non sau 7 giờ, ở lại não khoảng 2 tuần rồi xuống động mạch phổi trưởng thành",
          "Trưởng thành ở ruột non chuột; ấu trùng ở lại não chuột vĩnh viễn không bao giờ xuống phổi",
          "Trưởng thành ở bàng quang chuột; ấu trùng thải trực tiếp qua nước tiểu",
          "Trưởng thành ở mô cơ chuột; chuột lây trực tiếp sang người qua vết cắn"
        ],
        answer: 0,
        explain: "Trang 513: Giun trưởng thành sống ở ĐM phổi chuột; phôi nở L1 ở phế nang sau 6 ngày → phân → ốc (L3). Khi chuột nuốt ốc, ấu trùng lên não thành giun non sau 7 giờ, lưu lại ~2 tuần rồi xuống ĐM phổi trưởng thành."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Lâm sàng – Điều trị)",
        q: "Hướng điều trị bệnh nhân viêm màng não tăng BCTT do Angiostrongylus cantonensis theo sách giáo khoa (tr. 514) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 514)",
        options: [
          "Không có thuốc điều trị đặc hiệu; điều trị triệu chứng (giảm đau, chọc dò rút dịch não tủy để giảm áp lực, thuốc kháng viêm)",
          "Tiêm trực tiếp formalin 10% vào khoang dưới nhện",
          "Phẫu thuật mở sọ bắt toàn bộ giun non bằng tay cho mọi bệnh nhân",
          "Dùng Diethylcarbamazine 50 mg/kg/ngày liên tục 6 tháng để diệt giun trong ĐM phổi người"
        ],
        answer: 0,
        explain: "Trang 514 (mục 5.4.5): Không có thuốc điều trị đặc hiệu. Điều trị triệu chứng: thuốc giảm đau, chọc dò rút dịch não tủy giảm áp lực, thuốc kháng viêm... (đa số bình phục ngẫu nhiên sau vài ngày hoặc vài tuần lễ)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chu trình Anisakis)",
        q: "Ký chủ vĩnh viễn và ký chủ trung gian II (nguồn trực tiếp truyền L3 sang người) của họ Anisakinae (tr. 514) lần lượt là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 514)",
        options: [
          "KCVV: động vật hữu nhũ biển (cá voi, cá heo, sư tử biển, hải cẩu, hải mã); KCTG II: cá biển & mực (cá mòi, cá thu, cá hồi, cá cháy, bạch tuộc, mực)",
          "KCVV: chuột đồng; KCTG II: ốc sên Achatina fulica",
          "KCVV: chó mèo; KCTG II: lươn và cá lóc nước ngọt",
          "KCVV: vịt trời; KCTG II: ốc Radix ovata"
        ],
        answer: 0,
        explain: "Trang 514 (mục 5.5.1): Giun Anisakis, Contracecum, Phocanema ký sinh bao tử ĐV hữu nhũ biển; trứng nở ở nước biển 5–7°C sau 20–30 ngày → giáp xác biển (tôm) → cá mòi, cá thu, cá hồi, cá cháy, bạch tuộc, mực (L3)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hình thể Echinococcus)",
        q: "Khi quan sát sán trưởng thành Echinococcus granulosus dưới kính hiển vi (H 1.4-33, tr. 277 & 515), đặc điểm nhận dạng chính xác nhất là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 515) & H 1.4-33 (tr. 277)",
        options: [
          "Sán dải bé nhất y học dài 3–6 mm, đầu có 4 đĩa hút và móc, cổ rất ngắn, thân chỉ gồm 3 đốt (non, trưởng thành có 45–60 tinh hoàn, già chứa vài trăm trứng)",
          "Sán dải dài 4–10 mét, có hàng ngàn đốt, tử cung chia nhánh hình cây",
          "Giun tròn dài 25–54 mm có gai cuticule nửa trước thân",
          "Sán lá hình chiếc lá có 2 đĩa hút và không phân đốt"
        ],
        answer: 0,
        explain: "Trang 515 & H 1.4-33 (tr. 277): E. granulosus là sán dải nhỏ nhất trong y học, dài 3–6 mm (3 × 0,9 mm), đầu 4 đĩa hút + móc, cổ ngắn, thân chỉ có 3 đốt (đốt giữa có 45–60 tinh hoàn, đốt cuối vài trăm trứng 45 × 35 µm)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bệnh học Hydatid)",
        q: "Bướu sán Hydatid chứa tới khoảng bao nhiêu đầu sán trong cát sán (hydatid sand) khi tăng trưởng đủ độ (1–7 cm, lớn tới 20 cm), và thuật ngữ 'nang vô sinh' (sterile cyst) dùng để chỉ gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 515)",
        options: [
          "Có thể chứa đến 2.000.000 đầu sán; sterile cyst là trường hợp bướu mất hết đầu sán và không còn tính lây nhiễm",
          "Chứa đúng 1 đầu sán duy nhất như Cysticercus cellulosae; sterile cyst là bướu chứa hàng triệu giun trưởng thành",
          "Chứa 20 đầu sán; sterile cyst là bướu chỉ có ở xương gây vỡ tức thì",
          "Chứa 200.000 trứng giun; sterile cyst là bướu đã tạo ra màng phiến dày 10 cm"
        ],
        answer: 0,
        explain: "Trang 515: Một bướu sán tăng trưởng đủ độ có thể có đến 2.000.000 đầu sán (cát sán – hydatid sand); có trường hợp bướu mất hết đầu sán và không còn tính lây nhiễm gọi là sterile cyst."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích ca Anisakis",
        q: "Một bệnh nhân người Nhật sống tại TP.HCM nhập viện vì đau thượng vị dữ dội kiểu loét dạ dày kèm nôn ra máu và sụt cân; nội soi dạ dày thấy một khối u sùi giả ung thư ở hang vị, sinh thiết ghi nhận u hạt giàu bạch cầu toan tính bao quanh một ấu trùng giun tròn dài ~2 cm. Tiền sử nào và hướng xử trí nào phù hợp?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 514–515)",
        options: [
          "Tiền sử ăn cá biển sống (sashimi cá hồi, cá thu, mực...); xử trí cắt bỏ u hạt qua nội soi / giải phẫu là phương pháp duy nhất hiệu quả",
          "Tiền sử ăn mắm thái cá lóc nước ngọt; xử trí tiêm formalin 10% vào thành dạ dày",
          "Tiền sử ăn ốc sên; xử trí chỉ dùng chọc dò dịch não tủy giảm áp",
          "Tiền sử đi chân đất trên cát biển; xử trí thoa kem Lindane 1% ngoài da bụng"
        ],
        answer: 0,
        explain: "Trang 514–515: Thể bao tử của Anisakinae gây hội chứng giả loét, giả ung thư, xuất huyết tiêu hóa ở người ăn cá biển sống/nấu chưa kỹ; nội soi sinh thiết thấy ấu trùng trong u hạt giàu BCTT; giải phẫu cắt bỏ u hạt là phương pháp duy nhất hiệu quả."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Giải mã ca viêm màng não",
        q: "Một thanh niên ở Đồng bằng sông Cửu Long sau bữa nhậu ốc bươu nướng tái 10 ngày bắt đầu nhức đầu dữ dội vùng chẩm trán, sốt nhẹ 37,8°C, nhìn đôi (song thị), méo miệng liệt VII ngoại biên. Chọc dò DNT thấy dịch trong, vô khuẩn, albumin tăng, 460 tế bào/mm³ với 45% bạch cầu toan tính. Chẩn đoán hợp lý nhất là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 513–514)",
        options: [
          "Viêm màng não – não tăng bạch cầu toan tính do Angiostrongylus cantonensis",
          "Viêm màng não mủ do Haemophilus influenzae type b",
          "Bệnh nang sán Hydatid vỡ ở não gây shock phản vệ",
          "Hội chứng Larva migrans ngoài da do Ancylostoma caninum"
        ],
        answer: 0,
        explain: "Trang 513: Tiền sử ăn ốc sống/tái, nhức đầu dữ dội, sốt nhẹ, song thị, liệt TK VII, DNT trong vô khuẩn albumin tăng, 400–500 TB/mm³ với 40–50% BCTT → điển hình cho viêm màng não – não do Angiostrongylus cantonensis."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận biến chứng vỡ nang",
        q: "Một bệnh nhân chăn cừu mang khối nang Hydatid lớn ở thùy phải gan (chưa được phẫu thuật) không may bị té ngã chấn thương vùng hạ sườn phải. Ngay sau đó bệnh nhân nổi mề đay toàn thân, tụt huyết áp, tím tái và ngất xỉu; 3 năm sau tái khám phát hiện nhiều nang sán mới rải rác trong phúc mạc. Giải thích cơ chế 2 hiện tượng trên?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 516)",
        options: [
          "Chấn thương làm vỡ nang Hydatid: dịch bướu thoát vào máu gây shock phản vệ tức thì; đầu sán (cát sán) phát tán vào ổ bụng hình thành bướu thứ phát sau 2–5 năm",
          "Chấn thương làm sán trưởng thành trong ruột đẻ trứng vào máu",
          "Đây là diễn biến bình thường của quá trình thoái hóa hóa vôi tự nhiên",
          "Do bệnh nhân bị nhiễm thêm ấu trùng sán máng vịt qua da"
        ],
        answer: 0,
        explain: "Trang 516: Khi bướu vỡ do ho, gắng sức hoặc chấn thương, dịch chất thoát vào máu gây dị ứng, nổi mề đay, shock phản vệ có thể tử vong; đồng thời đầu sán phát tán rộng rãi tạo triệu chứng bướu thứ phát sau 2–5 năm."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích vị trí tim trái vs tim phải",
        q: "Theo mô tả lâm sàng Hydatid (tr. 516), khi một bướu sán nằm ở TIM TRÁI vỡ so với bướu ở TIM PHẢI vỡ, hướng phát tán các đầu sán sẽ khác nhau như thế nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 516)",
        options: [
          "Bướu ở tim trái vỡ → đầu sán theo đại tuần hoàn chuyển lên não, lách, thận, gan; bướu ở tim phải vỡ → đầu sán theo động mạch phổi chuyển qua phổi",
          "Bướu ở tim trái vỡ chỉ đi vào tĩnh mạch cửa; bướu ở tim phải vỡ chỉ đi vào xương chậu",
          "Cả hai đều chỉ đi qua tĩnh mạch chủ dưới vào bàng quang",
          "Bướu ở tim không bao giờ phát tán đầu sán khi vỡ"
        ],
        answer: 0,
        explain: "Trang 516: 'Khi bướu ở tim trái vỡ, các đầu sán chuyển đi lên não, lách, thận, gan và các cơ quan khác; bướu ở tim phải cho các đầu sán chuyển đi qua phổi'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chọn xét nghiệm theo dõi sau mổ",
        q: "Bệnh nhân đã phẫu thuật bóc nang Hydatid gan cách đây 2 năm. Nay bác sĩ muốn kiểm tra xem bệnh nhân còn SÓT BƯỚU SỐNG hay đã sạch hoàn toàn. Dựa vào đặc tính sinh học tr. 517, nên chọn xét nghiệm nào thay vì chỉ dùng thử nghiệm bì Casoni?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 517)",
        options: [
          "Dùng Thử nghiệm Cố định bổ thể (CFT) kết hợp siêu âm cắt lớp (vì CFT chuyển âm tính khi hết bướu/bướu chết hóa vôi, còn Casoni vẫn dương tính nhiều năm sau mổ)",
          "Dùng lại Thử nghiệm bì Casoni tiêm 0,1 ml vì Casoni chuyển âm tính ngay sau mổ 1 tuần",
          "Chọc hút kim nhỏ mô gan vùng vết mổ cũ tìm đầu sán",
          "Làm phản ứng Vogel–Minning với ấu trùng đuôi chẻ"
        ],
        answer: 0,
        explain: "Trang 517: Phản ứng Casoni tiếp tục (+) hàng năm sau khi mổ hoặc sau khi bướu chết hóa vôi. Ngược lại, CFT (+) 80–90% khi có bướu, (–) khi bướu chết/hóa vôi nên được dùng để kiểm tra khả năng còn sót bướu sau mổ."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: An toàn thực phẩm biển",
        q: "Một nhà hàng hải sản định sử dụng cá thu, cá hồi tươi làm món gỏi sống và đề xuất 'ướp muối mặn hoặc hun khói nhẹ 2 giờ để diệt ấu trùng Anisakis' thay vì cấp đông sâu. Đánh giá chuyên môn nào đúng?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 515)",
        options: [
          "Không an toàn vì muối cá hoặc hun khói KHÔNG làm chết ấu trùng Anisakis; phải nấu chín kỹ hoặc đông lạnh ở -20°C trong 24 giờ",
          "An toàn tuyệt đối vì muối ăn diệt tức thì mọi ấu trùng giun tròn biển",
          "Chỉ cần rửa cá qua nước đá lạnh 5–7°C là đủ diệt hết ấu trùng",
          "Chỉ cần uống thêm rượu vang là ấu trùng tự tan trong dạ dày"
        ],
        answer: 0,
        explain: "Trang 515 (mục 5.5.6): Dự phòng Anisakis: ăn cá nấu chín hoặc cá đông lạnh -20°C trong 24 giờ. Muối cá hoặc hun khói không làm chết ấu trùng."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ phòng chống Hydatid & Ốc",
        q: "Tại vùng có chăn nuôi cừu hoặc bắt đầu phát triển nuôi cừu ở Việt Nam (tr. 516, 518), biện pháp dự phòng cộng đồng trọng yếu nào cần hướng dẫn cho người chăn nuôi và lò sát sinh?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 518)",
        options: [
          "Không cho chó đến gần lò sát sinh, không cho chó ăn thịt/phủ tạng động vật còn sống; cho chó xổ sán 1–2 lần/năm và giữ vệ sinh cá nhân (rửa tay sau tiếp xúc chó)",
          "Cấm hoàn toàn việc nuôi cừu và thả tự do mọi chó hoang quanh lò mổ",
          "Tiêm dịch bướu sán cho toàn bộ đàn cừu mỗi tuần",
          "Chỉ cần ngâm thịt cừu trong giấm 30 phút rồi ném phổi cừu cho chó ăn"
        ],
        answer: 0,
        explain: "Trang 518 (mục 5.6.6): Không cho chó đến gần lò sát sinh, không cho ăn thịt/cơ quan ĐV còn sống; mỗi năm xổ sán cho chó 1–2 lần; giữ vệ sinh cá nhân."
      }
    ]
  },

  // ========================================================================
  // BÀI 8: BỆNH DO SPARGANUM, VIÊM DA SÁN MÁNG & TỔNG KẾT PHÒNG CHỐNG
  // Base: L1=6, L2=6, L3=0 | Extra: L1=0, L2=3, L3=9 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  8: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S2: Ghép cặp đường lây" },
      { level: 2, ksa: "S", ksaLabel: "S2: Ghép cặp vật chủ" },
      { level: 2, ksa: "S", ksaLabel: "S2: Biện luận vật chủ" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "S", ksaLabel: "S1: Nhận diện trứng" },
      { level: 2, ksa: "S", ksaLabel: "S2: Kỹ thuật ngoại khoa" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "S", ksaLabel: "S1: Diễn biến sẩn" },
      { level: 2, ksa: "A", ksaLabel: "A2: Dự phòng hành vi" },
      { level: 1, ksa: "A", ksaLabel: "A1: Biện pháp dự phòng" },
      { level: 2, ksa: "A", ksaLabel: "A2: Phòng chống liên ngành" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Dịch tễ học)",
        q: "Tại miền Bắc Việt Nam, tỷ lệ ếch nhái nhiễm Sparganum (ấu trùng Spirometra mansoni) thời Pháp thuộc so với hiện nay trong tài liệu (tr. 518) là bao nhiêu?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 518)",
        options: [
          "Thời Pháp thuộc khoảng 80% ếch nhái miền Bắc có Sparganum; hiện nay chỉ còn khoảng 15–17%",
          "Thời Pháp thuộc 5%; hiện nay tăng vọt lên 95%",
          "Luôn cố định ở mức 50% từ xưa đến nay",
          "Chưa từng ghi nhận Sparganum ở ếch nhái Việt Nam"
        ],
        answer: 0,
        explain: "Trang 518 (mục 5.7.1): Trong thời Pháp thuộc khoảng 80% ếch nhái bắt ở miền Bắc có chứa sparganum, hiện nay chỉ còn khoảng 15–17%."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Ba phương thức lây)",
        q: "Ba con đường lây nhiễm Sparganum (Spirometra mansoni) cho người (tr. 518 & H 1.4-46 tr. 287) gồm những đường nào?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 518)",
        options: [
          "(1) Đắp thịt ếch nhái giã nát lên mắt chữa viêm kết mạc; (2) Ăn thịt rắn, ếch nhái nấu chưa chín; (3) Uống nước có Cyclops sp. nhiễm sán",
          "(1) Muỗi Anopheles đốt; (2) Đi chân đất; (3) Ăn thịt bò tái",
          "(1) Vuốt lông chó dính trứng; (2) Ăn cua đá sống; (3) Lội ruộng nuôi vịt",
          "(1) Giao hợp; (2) Truyền máu; (3) Hít bào nang qua đường hô hấp"
        ],
        answer: 0,
        explain: "Trang 518 (mục 5.7.2): Người nhiễm do (1) đắp thịt ếch nhái giã nát lên mắt, (2) ăn thịt rắn/ếch nhái nấu chưa chín, (3) uống nước có Cyclops sp. nhiễm procercoid (hoặc procercoid xuyên da khi bơi – tr. 287)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt tác nhân viêm da)",
        q: "So sánh 3 giống sán máng gây Viêm da do sán máng (tr. 519): Trichobilharzia spp., Microbilharzia spp. và Schistosomatium spp. theo ký chủ và môi trường nước?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 519)",
        options: [
          "Trichobilharzia: vịt/chim nước ngọt; Microbilharzia: vịt/chim nước mặn; Schistosomatium: chuột/chuột xạ",
          "Trichobilharzia: cá biển; Microbilharzia: chuột; Schistosomatium: người là KCVV",
          "Cả ba giống đều chỉ sống ở ruột non chó mèo trên cạn",
          "Microbilharzia sống ở nước ngọt; Trichobilharzia chỉ sống ở biển mặn"
        ],
        answer: 0,
        explain: "Trang 519 (mục 5.8.1): Trichobilharzia spp. ở tĩnh mạch màng treo ruột vịt/chim nước ngọt; Microbilharzia spp. ở vịt/chim nước mặn; Schistosomatium spp. ở chuột, chuột xạ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích ca Sparganum mắt",
        q: "Bệnh nhân vùng quê bị đỏ mắt nên nghe mách đắp thịt đùi ếch giã nát lên mắt. Khoảng 10 ngày sau bệnh nhân đến khám vì cảm giác nhôn nhốt khó chịu, lồi mắt, nhãn cầu cố định không nhắm mắt được và loét giác mạc. Biểu hiện này tương ứng với vị trí nào của Sparganum ở mắt (tr. 519)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 519)",
        options: [
          "Sparganum ở hốc mắt hay sau nhãn cầu (gây lồi mắt, hạn chế cử động, không nhắm mắt được dẫn đến viêm kết mạc và loét giác mạc)",
          "Sparganum chỉ nằm ở dưới da trán ngoài hốc mắt",
          "Viêm da dị ứng do ấu trùng đuôi chẻ sán máng vịt",
          "Ấu trùng Anisakis chui qua tuyến lệ từ dạ dày lên"
        ],
        answer: 0,
        explain: "Trang 519 (mục 5.7.3.1): Sau đắp thịt ếch ~10 ngày: (1) Ở hốc mắt/sau nhãn cầu → lồi mắt, nhãn cầu cố định, không nhắm mắt được → viêm kết/giác mạc; (2) Ở mi mắt → viêm phù mi; (3) Quanh hốc mắt → u cứng dưới da trán, hàm, thái dương, mũi."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận ca Sparganum nội tạng",
        q: "Một người có thói quen ăn thịt rắn, lươn nướng mọi chưa chín hoặc uống nước ao hồ chưa đun sôi. Sau một thời gian xuất hiện khối u đau ngứa di chuyển dần từ bụng ra mô dưới da, áp xe ngực/bụng dài ~12 cm; khi khối u thoái triển đột nhiên sưng tấy hoại tử dữ dội kèm nổi mề đay, sốt lạnh run và BCTT tăng cao. Lý giải tình trạng cấp tính sau cùng?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 518–519)",
        options: [
          "Xác Sparganum khi chết phóng thích dị nguyên làm sưng tấy, hoại tử mô ký chủ và gây phản ứng dị ứng mạnh (nóng lạnh, mề đay, tăng BCTT)",
          "Do Sparganum trưởng thành trong ruột non đẻ ra hàng triệu trứng có nắp",
          "Do nang Hydatid vỡ tạo 2 triệu đầu sán thứ phát",
          "Do người bệnh vừa tiếp xúc lại với dầu rái cá"
        ],
        answer: 0,
        explain: "Trang 518–519: Nuốt sparganum (hoặc procercoid trong Cyclops) → chui vách ruột di chuyển ra da (dài 10–15 cm) hoặc màng phổi/bụng/bàng quang; 'Khi chết, xác sparganum làm sưng tấy và hoại tử mô ký chủ. Bệnh nhân có thể nóng lạnh, nổi mề đay, tăng BCTT trong máu'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chẩn đoán & điều trị viêm da sán máng",
        q: "Nông dân ở Đồng bằng sông Cửu Long lội ruộng nuôi vịt thả đồng 1 ngày trước, nay vùng cẳng chân ngập nước xuất hiện nhiều sẩn đỏ ngứa dữ dội, vài vết trầy xước rỉ dịch do gãi mạnh. Thái độ chẩn đoán và xử trí nào ĐÚNG theo sách (tr. 520)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 520)",
        options: [
          "Chẩn đoán dựa tiền sử tiếp xúc nước vùng nuôi vịt + lâm sàng cấp (không cần thiết phải xét nghiệm); không có thuốc đặc hiệu → thoa kem kháng histamin và uống kháng sinh nếu có bội nhiễm do gãi",
          "Bắt buộc sinh thiết da tìm trứng sán máng trong máu tĩnh mạch cửa",
          "Kê Praziquantel liều cao 28 ngày và phẫu thuật cắt bỏ toàn bộ lớp biểu bì cẳng chân",
          "Làm phản ứng nội bì Casoni đọc sau 20 phút trước khi thoa kem"
        ],
        answer: 0,
        explain: "Trang 520 (mục 5.8.4 & 5.8.5): Chẩn đoán dựa tiền sử tiếp xúc vùng nước có ấu trùng đuôi (nuôi vịt) và bệnh cảnh cấp tính, KHÔNG cần thiết xét nghiệm; không có thuốc đặc hiệu → thoa kem kháng histamin, uống kháng sinh khi có nhiễm khuẩn phụ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt 2 bệnh da khi lội nước/vườn",
        q: "So sánh tổn thương da của (A) Bệnh nhân làm rẫy cao su đi chân đất bị Larva migrans ngoài da với (B) Nông dân lội ruộng vịt bị Viêm da do sán máng. Điểm phân biệt lâm sàng nhanh nhất tại phòng khám là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 509–510, 520)",
        options: [
          "(A) Tạo đường gồ ngoằn ngoèo bò vài mm–cm/ngày kéo dài nhiều tuần–tháng; (B) Tạo sẩn tại chỗ (không bò thành đường hầm), tối đa ngày 2–3 và tự lặn sau >1 tuần",
          "(A) Tự lặn trong 3 ngày; (B) Tạo đường hầm ngoằn ngoèo bò tới 17 năm",
          "(A) Gặp sau tắm sông nuôi vịt; (B) Gặp sau đắp thịt ếch lên mắt",
          "Cả (A) và (B) đều do sán máng vịt chui qua da khi nước khô"
        ],
        answer: 0,
        explain: "Trang 509–510 vs 520: Larva migrans ngoài da (giun móc chó mèo năng động cao) bò ngoằn ngoèo dưới da vài mm–cm/ngày kéo dài nhiều tuần/tháng; Viêm da sán máng (năng động ít) mắc kẹt chết tại chỗ tạo sẩn tối đa ngày 2–3 và tự lặn sau >1 tuần."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Ghép cặp tổng hợp 5 bệnh",
        q: "Trong một đợt điều tra dịch tễ 5 bệnh nhân khác nhau: Ca 1 ăn thịt rắn nướng mọi; Ca 2 ăn ốc Pila ampullacea băm sống; Ca 3 ăn mắm thái; Ca 4 đi chân đất vườn có phân mèo; Ca 5 hay ôm hôn chó con. Năm bệnh động vật ký sinh tương ứng lần lượt là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2, Câu 16 (tr. 523, 564)",
        options: [
          "Ca 1: Sparganum nội tạng; Ca 2: Angiostrongylus cantonensis; Ca 3: Gnathostoma spinigerum; Ca 4: Larva migrans ngoài da (A. caninum/braziliense); Ca 5: Toxocara canis",
          "Ca 1: Toxocara; Ca 2: Sparganum; Ca 3: Anisakis; Ca 4: Angiostrongylus; Ca 5: Trichobilharzia",
          "Ca 1: Echinococcus; Ca 2: Gnathostoma; Ca 3: Sparganum; Ca 4: Toxoplasma; Ca 5: Anisakis",
          "Ca 1: Angiostrongylus; Ca 2: Sparganum; Ca 3: Toxocara; Ca 4: Gnathostoma; Ca 5: A. caninum"
        ],
        answer: 0,
        explain: "Khớp hoàn toàn với bảng đáp án Câu 16 (tr. 564) và lý thuyết tr. 509–519: Rắn nướng → Sparganum nội tạng; Ốc → A. cantonensis; Mắm thái → G. spinigerum; Chân đất vườn → A. caninum; Chơi với chó → T. canis."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Truy vết vật chủ trong sách",
        q: "Theo Câu tự lượng giá 17 (tr. 523 & 564), khi phân biệt nguồn lây từ MÈO so với CHUỘT, bệnh nào sau đây vừa liên quan đến hệ sinh thái chuột đồng nước ngọt vừa do sán máng loài gặm nhấm gây viêm da ở người?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 519, 523, 564)",
        options: [
          "Viêm da do Schistosomatium sp. (ký sinh ở chuột, chuột xạ)",
          "Viêm màng não do Anisakis simplex",
          "Bệnh bướu sán Echinococcus ở gan",
          "Hội chứng Larva migrans ngoài da do Uncinaria"
        ],
        answer: 0,
        explain: "Trang 519 & Đáp án Câu 17 B–f (tr. 564): Chuột và chuột xạ mang sán máng Schistosomatium spp. gây viêm da do sán máng (bên cạnh Trichobilharzia ở vịt nước ngọt và Microbilharzia ở vịt nước mặn)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ truyền thông bỏ hủ tục",
        q: "Ở một vùng quê vẫn còn người dân truyền tai nhau dùng thịt ếch nhái sống đắp lên mắt để trị đau mắt đỏ (viêm kết mạc) cho trẻ em. Nhân viên y tế cộng đồng cần truyền thông điều gì (tr. 518–519)?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 518–519)",
        options: [
          "Giải thích 15–17% (xưa tới 80%) ếch nhái mang ấu trùng sán nhái Sparganum (Spirometra mansoni) có thể chui thẳng vào mắt gây lồi mắt, loét giác mạc mù lòa sau ~10 ngày; dứt khoát bỏ lối chữa thiếu khoa học này",
          "Khuyên nên ngâm đùi ếch qua nước muối loãng 5 phút rồi mới đắp lên mắt",
          "Cho rằng đắp thịt ếch chỉ gây dị ứng nhẹ tự khỏi sau 1 tuần như viêm da sán máng",
          "Khuyên uống kháng histamin trước khi đắp thịt ếch sống lên mắt"
        ],
        answer: 0,
        explain: "Trang 518–519 (mục 5.7.6): Phải bỏ hẳn lối chữa bệnh thiếu khoa học như đắp thịt ếch nhái lên mắt vì gây sparganose oculaire (nhôn nhốt, lồi mắt, loét giác mạc, nhiễm khuẩn phụ); đồng thời uống nước đun sôi/lọc và nấu chín rắn/lươn/ếch/chuột."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ bảo hộ lao động nông dân",
        q: "Để dự phòng thực tế cho nông dân thường xuyên xuống ruộng cấy/gặt ở vùng ĐBSCL hoặc miền Bắc có nuôi vịt thả đồng (ổ dịch Trichobilharzia / ốc Radix ovata), gói biện pháp dự phòng toàn diện đúng theo sách (tr. 520) là gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 520)",
        options: [
          "Diệt ốc quanh khu vực (sulfat đồng, carbonat đồng, pentachlorphenate) + phát quang thực vật thủy sinh; thoa dầu rái cá (gant invisible) trước khi lội nước; lau khô da NGAY khi vừa lên bờ",
          "Cho nông dân uống Albendazole 14 mg/kg/ngày liên tục suốt vụ mùa",
          "Ngâm chân trong nước hồ thêm 30 phút sau khi lội để nước tự bay hơi từ từ trên da",
          "Chỉ cần xịt etylchlorur sau khi da đã nổi sẩn ngày thứ 3"
        ],
        answer: 0,
        explain: "Trang 520 (mục 5.8.6): Gồm cả 3 biện pháp: diệt ốc + phát quang thủy sinh; lau khô ngay khi vừa tắm/lội xong (vì cercaria chỉ chui khi nước khô đi); và thoa dầu rái cá tạo bao trong suốt (gant invisible – Đặng Vũ Hỷ 1960)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Thái độ cảnh giác tổng thể",
        q: "Thông điệp kết luận cốt lõi của PGS.TS. Trần Xuân Mai ở cuối Bài 2 – Bệnh động vật ký sinh (tr. 521) muốn nhấn mạnh với bác sĩ và học viên sau đại học điều gì?",
        source: "Ký sinh trùng Y học YDS 2015 – Phần II Bài 2 (tr. 521)",
        options: [
          "Những thú sống quanh người (chó, mèo, chuột, cá, mực, vịt...) quá thân quen khiến con người dễ mất cảnh giác; cần cảnh giác cao và xem giáo dục sức khỏe là phương thức phòng chống hiệu quả hàng đầu",
          "Các bệnh từ động vật quanh người hoàn toàn vô hại nên không cần giáo dục sức khỏe",
          "Chỉ cần tập trung diệt thú hoang ở rừng sâu chứ không cần kiểm soát thú nuôi trong nhà",
          "Mọi bệnh động vật ký sinh đều có thuốc đặc hiệu tiêu diệt 100% trong 1 liều"
        ],
        answer: 0,
        explain: "Trang 521 (mục 7 – Kết luận): Thú sống quanh người nhiều khi thân quen đến độ người ta mất cảnh giác với bệnh chúng lây truyền; bệnh từ nhẹ đến rất nặng nguy hiểm tính mạng, và giáo dục sức khỏe là một trong những phương thức phòng chống có hiệu quả các bệnh này."
      }
    ]
  }
};
