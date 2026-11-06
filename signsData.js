const signsData = [
    // ==========================================
    // NHÓM 1: BIỂN CẢNH BÁO NGUY HIỂM (FARESKILT)
    // Đặc điểm: Hình tam giác, viền đỏ, nền trắng. 
    // Yêu cầu pháp lý: Phải chủ động điều chỉnh tốc độ (avpasse farten) phù hợp với tình huống.
    // ==========================================
    {
        id: "102",
        code: "Skilt 102",
        norwegianName: "Farlige svinger (første til venstre)",
        englishName: "Dangerous bends (first to left)",
        vietnameseName: "Nhiều khúc cua nguy hiểm liên tiếp (cua đầu tiên sang trái)",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/102_2.svg",
        keyRulesVi: [
            "Cảnh báo đoạn đường phía trước có từ 2 khúc cua nguy hiểm liên tiếp trở lên, trong đó khúc cua đầu tiên bẻ ngoặt sang TRÁI.",
            "Kỹ thuật: Phải chủ động nhả ga và giảm tốc độ TỪ TRƯỚC khi đánh lái vào cua. Khi đang ở trong góc cua, giữ chân ga đều đặn, tuyệt đối không phanh gấp vì sẽ làm bánh xe mất độ bám (skid).",
            "Tầm nhìn qua cua sẽ bị che khuất hoàn toàn. Bắt buộc phải giữ xe bám sát mép đường bên phải phần làn của mình, tuyệt đối không lấn vạch sang làn ngược chiều."
        ],
        testQuestions: [
            "Đề thi: Biển báo này cung cấp cho bạn thông tin chính xác nào về đoạn đường phía trước? -> Đáp án: Có nhiều khúc cua nguy hiểm liên tiếp, bắt đầu bằng khúc cua sang trái.",
            "Đề thi: Hành động nào là nguy hiểm nhất khi bạn đang lái xe đi qua khu vực có biển báo này? -> Đáp án: Phanh gấp hoặc tăng tốc đột ngột khi đang nằm trong góc cua."
        ]
    },
    {
        id: "104.1",
        code: "Skilt 104.1",
        norwegianName: "Bratt bakke stigning",
        englishName: "Steep hill upwards",
        vietnameseName: "Đoạn dốc lên nguy hiểm",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/104_1.svg",
        keyRulesVi: [
            "Báo hiệu phía trước là một đoạn dốc lên rất gắt. Con số % chỉ độ dốc (ví dụ 10% nghĩa là di chuyển 100m chiều dài thì độ cao tăng 10m).",
            "Kỹ thuật: Cần chủ động chuyển về số thấp (với xe số sàn) từ trước khi vào dốc để duy trì lực kéo mô-men xoắn của động cơ, tránh tình trạng xe bị đuối đà chết máy giữa dốc.",
            "Cực kỳ cẩn trọng khi xe đi gần tới đỉnh dốc vì tầm nhìn bị che khuất (blind crest). Tuyệt đối cấm vượt xe khác gần đỉnh dốc."
        ],
        testQuestions: [
            "Đề thi: Con số 10% ghi trên biển báo này biểu thị điều gì? -> Đáp án: Đi tới 100 mét thì độ cao mặt đường sẽ tăng lên 10 mét.",
            "Đề thi: Tại sao việc vượt xe khác lại bị nghiêm cấm khi bạn đang tiến gần đến đỉnh của con dốc này? -> Đáp án: Vì tầm nhìn phía trước bị che khuất, bạn không thể thấy xe đi ngược chiều."
        ]
    },
    {
        id: "104.2",
        code: "Skilt 104.2",
        norwegianName: "Bratt bakke fall",
        englishName: "Steep hill downwards",
        vietnameseName: "Đoạn dốc xuống nguy hiểm",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/104_2.svg",
        keyRulesVi: [
            "Báo hiệu đoạn đường dốc xuống dài và gắt. Quãng đường phanh của xe khi đi xuống dốc sẽ dài hơn rất nhiều so với đường bằng phẳng do lực quán tính.",
            "Kỹ thuật sinh tử: Bắt buộc phải chuyển về số thấp (thường là cùng cấp số khi bạn leo con dốc đó) để sử dụng lực hãm của phanh động cơ (motorbrems).",
            "Tuyệt đối không được đạp rà phanh chân liên tục. Việc rà phanh sẽ làm đĩa phanh quá nhiệt, gây sôi dầu phanh và dẫn đến hiện tượng mất phanh hoàn toàn (brake failure)."
        ],
        testQuestions: [
            "Đề thi: Cách an toàn nhất để kiểm soát tốc độ khi lái xe đi xuống con dốc này là gì? -> Đáp án: Chuyển về số thấp để tận dụng lực phanh của động cơ thay vì dùng phanh chân.",
            "Đề thi: Rủi ro lớn nhất nếu bạn rà phanh chân liên tục trên đoạn dốc này là gì? -> Đáp án: Má phanh và dầu phanh bị quá nhiệt, dẫn đến mất khả năng phanh hoàn toàn."
        ]
    },
    {
        id: "106.1",
        code: "Skilt 106.1",
        norwegianName: "Smalning av veien (begge sider)",
        englishName: "Road narrows on both sides",
        vietnameseName: "Đường bị thu hẹp ở cả hai bên",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/106_1.svg",
        keyRulesVi: [
            "Cảnh báo đoạn đường phía trước bị bóp nhỏ lại từ cả hai phía lề đường (ví dụ: đi vào cây cầu hẹp hoặc hẻm núi).",
            "Bạn phải chủ động giảm tốc độ. Nếu mặt đường bị thu hẹp đến mức không đủ chỗ cho 2 xe tránh nhau, bạn phải đánh giá tình hình để nhường đường cho xe ngược chiều (Mutual adaptation)."
        ],
        testQuestions: [
            "Đề thi: Bạn nên phản ứng thế nào khi nhìn thấy biển báo này trên một con đường quê? -> Đáp án: Giảm tốc độ, quan sát xa phía trước và sẵn sàng nhường đường nếu cầu/đường hẹp không đủ hai làn xe."
        ]
    },
    {
        id: "106.2",
        code: "Skilt 106.2",
        norwegianName: "Smalning av veien (venstre side)",
        englishName: "Road narrows on the left",
        vietnameseName: "Đường bị thu hẹp ở phía bên trái",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/106_2.svg",
        keyRulesVi: [
            "Lề đường phía bên trái bị thu hẹp lại, làm giảm không gian di chuyển cho luồng xe đi ngược chiều hoặc làn vượt.",
            "Tài xế phải giữ khoảng cách an toàn rộng hơn ở phía bên trái, đề phòng xe ngược chiều lấn sang làn của mình để né chướng ngại vật."
        ],
        testQuestions: [
            "Đề thi: Nguy cơ lớn nhất khi đi qua đoạn đường có biển báo này là gì? -> Đáp án: Xe đi ngược chiều có thể lấn vạch sang làn đường của bạn do phần đường của họ bị thu hẹp."
        ]
    },
    {
        id: "106.3",
        code: "Skilt 106.3",
        norwegianName: "Smalning av veien (høyre side)",
        englishName: "Road narrows on the right",
        vietnameseName: "Đường bị thu hẹp ở phía bên phải",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/106_3.svg",
        keyRulesVi: [
            "Lề đường phía bên phải của bạn bị thu hẹp lại (thường do công trình, rào chắn hoặc đất sụt).",
            "Bạn có thể sẽ phải đánh lái hơi lấn sang trái để lách qua. Do đó, phải quan sát kỹ gương chiếu hậu trái và xe đi ngược chiều trước khi lách."
        ],
        testQuestions: [
            "Đề thi: Biển báo này yêu cầu bạn phải đặc biệt chú ý đến điều gì? -> Đáp án: Mép đường bên phải bị thu hẹp, bạn cần quan sát kỹ xe ngược chiều trước khi lách sang trái để tránh."
        ]
    },
    {
        id: "108",
        code: "Skilt 108",
        norwegianName: "Ujevn veg",
        englishName: "Uneven road",
        vietnameseName: "Đường gồ ghề, lồi lõm",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/108_0.svg",
        keyRulesVi: [
            "Cảnh báo mặt đường phía trước rất xấu, bị nứt vỡ, lồi lõm hoặc có nhiều ổ gà nghiêm trọng.",
            "Bắt buộc phải giảm tốc độ để bảo vệ hệ thống treo (phuộc nhún), thước lái và lốp xe.",
            "Cực kỳ nguy hiểm: Không được giật vô lăng đánh lái đột ngột để né ổ gà khi đang chạy nhanh, vì sẽ làm xe mất trọng tâm và văng đuôi."
        ],
        testQuestions: [
            "Đề thi: Rủi ro lớn nhất nếu bạn bỏ qua cảnh báo của biển này và chạy tốc độ cao là gì? -> Đáp án: Mất độ bám đường, mất kiểm soát tay lái và làm hỏng hệ thống treo của xe.",
            "Đề thi: Hành động nào dưới đây là sai khi gặp ổ gà lớn trên đoạn đường này? -> Đáp án: Giật ngoắt vô lăng ở tốc độ cao để lách qua ổ gà."
        ]
    },
    {
        id: "109",
        code: "Skilt 109",
        norwegianName: "Fartshump",
        englishName: "Speed bump",
        vietnameseName: "Gờ giảm tốc trên mặt đường",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/109_0.svg",
        keyRulesVi: [
            "Phía trước có thiết kế gờ giảm tốc nhân tạo (fartshump). Biển này thường đặt gần trường học, khu dân cư hoặc vạch người đi bộ.",
            "Tài xế phải chủ động giảm tốc độ xuống mức thấp (thường 20-30 km/h) TỪ TRƯỚC khi bánh xe chạm vào gờ. Nếu vừa đạp phanh vừa phi qua gờ sẽ làm hỏng phuộc xe."
        ],
        testQuestions: [
            "Đề thi: Biển báo này thường được đặt nhằm mục đích gì? -> Đáp án: Ép buộc người lái xe phải giảm tốc độ vật lý để bảo vệ người đi bộ và trẻ em trong khu dân cư.",
            "Đề thi: Kỹ thuật đi qua gờ giảm tốc đúng nhất là gì? -> Đáp án: Đạp phanh giảm tốc độ từ xa, và nhả phanh ra ngay trước khi bánh trước chạm vào gờ."
        ]
    },
    {
        id: "110",
        code: "Skilt 110",
        norwegianName: "Vegarbeid",
        englishName: "Roadworks",
        vietnameseName: "Công trường đang thi công làm đường",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/110_0.svg",
        keyRulesVi: [
            "Cảnh báo đang có công nhân, máy móc hạng nặng hoặc vật liệu xây dựng nằm trên/gần lòng đường phía trước.",
            "Đây là khu vực rủi ro cực cao. Bắt buộc phải giảm tốc độ tối đa, tuân thủ tuyệt đối các biển báo giới hạn tốc độ tạm thời (nền vàng) và hiệu lệnh của người phân luồng.",
            "Mặt đường có thể bị thay đổi, thiếu vạch kẻ hoặc lầy lội, cần tập trung quan sát 100%."
        ],
        testQuestions: [
            "Đề thi: Tại sao bạn phải đặc biệt tuân thủ giới hạn tốc độ khi nhìn thấy biển báo này? -> Đáp án: Vì sự an toàn tính mạng của các công nhân đang làm việc sát lòng đường và cấu trúc đường có thể bị thay đổi bất ngờ.",
            "Đề thi: Nếu đèn giao thông tạm thời tại khu vực này báo đỏ nhưng không thấy máy móc nào, bạn có được đi không? -> Đáp án: Tuyệt đối không, phải đợi đến khi đèn xanh."
        ]
    },
    {
        id: "112",
        code: "Skilt 112",
        norwegianName: "Steinsprut",
        englishName: "Loose chippings",
        vietnameseName: "Đá dăm văng trên mặt đường",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/112_0.svg",
        keyRulesVi: [
            "Mặt đường phía trước mới được rải nhựa hoặc rải sỏi, có rất nhiều đá dăm lỏng lẻo (loose chippings).",
            "Đá dăm khi bị lốp xe chạy nhanh cán qua sẽ bắn lên như viên đạn. Cần giảm tốc độ và TĂNG KHOẢNG CÁCH AN TOÀN với xe chạy phía trước gấp 2-3 lần bình thường để tránh bị đá văng vỡ kính chắn gió.",
            "Hạn chế vượt xe ở khu vực này vì xe bạn sẽ bị hứng trọn đá từ xe bị vượt."
        ],
        testQuestions: [
            "Đề thi: Hành động đúng đắn nhất để bảo vệ kính chắn gió của xe bạn và xe ngược chiều khi gặp biển này là gì? -> Đáp án: Giảm tốc độ đáng kể và nới rộng khoảng cách với xe đi phía trước.",
            "Đề thi: Bạn có nên vượt xe khác trong khu vực có biển báo này không? -> Đáp án: Không nên, vì lốp xe của bạn và xe kia sẽ cuốn đá văng vào nhau gây hư hại."
        ]
    },
    {
        id: "114.1",
        code: "Skilt 114.1",
        norwegianName: "Rasfare (fra venstre)",
        englishName: "Rockfall from the left",
        vietnameseName: "Nguy hiểm đá lở / đá rơi từ bên trái",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/114_1.svg",
        keyRulesVi: [
            "Cảnh báo vách núi phía bên TRÁI thường xuyên xảy ra hiện tượng sạt lở đá, tuyết hoặc đất trượt xuống lòng đường.",
            "Hiện tượng này đặc biệt dễ xảy ra vào mùa xuân khi tuyết tan hoặc sau những trận mưa lớn.",
            "Tuyệt đối không được dừng hoặc đỗ xe sát vách núi phía bên trái ở khu vực này. Chú ý quan sát mặt đường để tránh đâm phải các tảng đá lớn đã rớt xuống."
        ],
        testQuestions: [
            "Đề thi: Hiện tượng đá lở thường xảy ra phổ biến nhất vào thời điểm nào trong năm tại Na Uy? -> Đáp án: Vào mùa xuân khi băng tuyết bắt đầu tan và nước thấm vào vách đá.",
            "Đề thi: Bạn KHÔNG NÊN làm gì khi đi qua đoạn đường có cắm biển báo này? -> Đáp án: Dừng đỗ xe ngay dưới chân vách núi để nghỉ ngơi hoặc ngắm cảnh."
        ]
    },
    {
        id: "114.2",
        code: "Skilt 114.2",
        norwegianName: "Rasfare (fra høyre)",
        englishName: "Rockfall from the right",
        vietnameseName: "Nguy hiểm đá lở / đá rơi từ bên phải",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/114_2.svg",
        keyRulesVi: [
            "Cảnh báo vách núi hoặc taluy dương phía bên PHẢI có nguy cơ sạt lở đá rơi xuống đường.",
            "Nếu thấy có hòn đá nhỏ rơi, rất có thể sẽ có tảng đá lớn rơi ngay sau đó. Hãy đi qua khu vực này một cách dứt khoát nhưng vẫn đảm bảo làm chủ tốc độ để phanh kịp nếu có chướng ngại vật."
        ],
        testQuestions: [
            "Đề thi: Biển báo này yêu cầu bạn phải tập trung sự chú ý vào đâu? -> Đáp án: Mặt đường phía trước để né tránh các hòn đá có thể đã lăn xuống, đồng thời không dừng đỗ sát lề phải."
        ]
    },
    {
        id: "116",
        code: "Skilt 116",
        norwegianName: "Glatt veg",
        englishName: "Slippery road",
        vietnameseName: "Mặt đường trơn trượt",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/116_0.svg",
        keyRulesVi: [
            "Cảnh báo bề mặt đường phía trước có độ bám ma sát rất kém. Có thể do băng đen (black ice), tuyết đọng, sương giá, hoặc bùn đất ngập nước.",
            "Kỹ thuật lái: Mọi thao tác chân ga, chân phanh và vô lăng phải cực kỳ mượt mà. Tuyệt đối không phanh gấp, không thốc ga và không đánh lái gắt (sẽ gây trượt văng xe - aquaplaning/skidding).",
            "Khoảng cách phanh an toàn có thể tăng lên gấp 4 lần so với đường khô. Phải nhân rộng khoảng cách với xe phía trước."
        ],
        testQuestions: [
            "Đề thi: Khi lái xe trên đoạn đường có biển cảnh báo trơn trượt, nguyên tắc quan trọng nhất đối với chân ga và vô lăng là gì? -> Đáp án: Thao tác nhẹ nhàng, mượt mà, tránh mọi cử động giật cục hoặc phanh gấp.",
            "Đề thi: Nếu xe bạn bị trượt bánh trước (understeer) ở khúc cua trơn trượt, bạn nên làm gì? -> Đáp án: Nhả chân ga ngay lập tức để trọng lượng dồn lên bánh trước, tuyệt đối không vặn thêm vô lăng."
        ]
    },
    {
        id: "117",
        code: "Skilt 117",
        norwegianName: "Kaiside eller dyp utenfor vegkant",
        englishName: "Quay edge or unprotected river bank",
        vietnameseName: "Lề đường nguy hiểm giáp mép nước / bến cảng",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/117_0.svg",
        keyRulesVi: [
            "Cảnh báo mép đường chạy sát bờ vực sâu, bờ sông, mép cầu cảng hoặc bờ biển mà không có rào chắn hộ lan kiên cố bảo vệ.",
            "Nguy cơ tử vong rất cao nếu xe bị trượt bánh hoặc đánh lái chệch làn. Cần tập trung cao độ, đi sát vào giữa tim đường thay vì bám mép lề nước."
        ],
        testQuestions: [
            "Đề thi: Mối nguy hiểm đặc thù mà biển báo này muốn nhắc nhở là gì? -> Đáp án: Xe của bạn có thể lao thẳng xuống vùng nước sâu nếu bạn mất lái do mép đường không có rào chắn bảo vệ."
        ]
    },
    {
        id: "118",
        code: "Skilt 118",
        norwegianName: "Klaffebru",
        englishName: "Opening bridge / Drawbridge",
        vietnameseName: "Cầu cất / Cầu mở phía trước",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/118_0.svg",
        keyRulesVi: [
            "Cảnh báo phía trước là một cây cầu có thể tách đôi và nâng lên để nhường đường cho tàu thuyền lớn đi qua bên dưới.",
            "Tài xế phải đặc biệt chú ý quan sát cụm đèn tín hiệu (đỏ/vàng) cắm trước cầu. Nếu đèn đỏ nhấp nháy hoặc rào chắn bắt đầu hạ, BẮT BUỘC phải phanh dừng xe an toàn, không được cố phóng rướn qua."
        ],
        testQuestions: [
            "Đề thi: Bạn phải làm gì khi thấy biển báo này và nhận thấy đèn tín hiệu màu đỏ phía trước đang nhấp nháy? -> Đáp án: Phải dừng xe ngay lập tức vì mặt cầu sắp được nâng lên để tàu thuyền đi qua."
        ]
    },
    {
        id: "120",
        code: "Skilt 120",
        norwegianName: "Kjøre om bord i ferge",
        englishName: "Ferry terminal ahead",
        vietnameseName: "Bến phà / Lối xuống phà phía trước",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/120_0.svg",
        keyRulesVi: [
            "Đường đang dẫn ra bến phà chờ qua vịnh/biển (rất đặc trưng ở Na Uy).",
            "Phải giảm tốc độ, chú ý các biển báo phân làn xếp hàng chờ phà (lane assignment). Khi lên phà phải tuân thủ tuyệt đối hiệu lệnh tay của nhân viên bốc xếp bến phà.",
            "Luôn tắt máy xe, kéo phanh tay chắc chắn trong suốt thời gian phà di chuyển để tránh ngộ độc khí thải và xe trôi."
        ],
        testQuestions: [
            "Đề thi: Khi đã xếp xe vào vị trí trên phà, hai thao tác bắt buộc bạn phải làm là gì? -> Đáp án: Tắt động cơ xe và kéo phanh tay/phanh đỗ chắc chắn."
        ]
    },
    {
        id: "122",
        code: "Skilt 122",
        norwegianName: "Tunneltavle",
        englishName: "Tunnel ahead",
        vietnameseName: "Đường hầm phía trước",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/122_0.svg",
        keyRulesVi: [
            "Báo hiệu sắp tiến vào đường hầm tối.",
            "Luật bắt buộc: Xe phải bật đèn chiếu gần (low beams). Dù xe có đèn định vị ban ngày (DRL), bạn vẫn phải đảm bảo đèn hậu phía sau đã được bật sáng khi vào hầm để xe khác thấy bạn.",
            "Phải tháo kính râm trước khi vào hầm. Cẩn thận với hiện tượng 'mù tạm thời' trong vài giây đầu khi mắt chưa kịp điều tiết với bóng tối."
        ],
        testQuestions: [
            "Đề thi: Sự nguy hiểm lớn nhất khi đi vào hầm bằng xe có trang bị đèn ban ngày (DRL) tự động là gì? -> Đáp án: Đèn hậu phía sau thường không sáng cùng với DRL, khiến xe đi sau không nhìn thấy bạn trong hầm tối.",
            "Đề thi: Bạn cần tháo phụ kiện gì trước khi tiến vào đường hầm? -> Đáp án: Kính râm (kính mát)."
        ]
    },
    {
        id: "124",
        code: "Skilt 124",
        norwegianName: "Vegkryss",
        englishName: "Intersection ahead",
        vietnameseName: "Giao lộ nguy hiểm / Ngã tư đồng cấp",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/124_0.svg",
        keyRulesVi: [
            "Cảnh báo phía trước là một ngã tư hoặc ngã ba không có đèn tín hiệu.",
            "Tại nút giao này, hệ thống giao thông áp dụng **Quy tắc bàn tay phải (Right-hand rule / Høyreregelen)**.",
            "Bạn có nghĩa vụ bắt buộc phải giảm tốc độ, quan sát và NHƯỜNG ĐƯỜNG cho mọi phương tiện (ô tô, xe đạp) đi đến từ phía bên TAY PHẢI của bạn."
        ],
        testQuestions: [
            "Đề thi: Biển báo này nhắc nhở bạn áp dụng quy tắc giao thông cốt lõi nào tại ngã tư phía trước? -> Đáp án: Quy tắc bàn tay phải, nhường đường cho mọi xe đi đến từ bên phải.",
            "Đề thi: Bạn có được phép vượt xe khác ngay tại ngã tư có cắm biển báo này không? -> Đáp án: Cấm tuyệt đối việc vượt xe tại các ngã tư áp dụng quy tắc bàn tay phải."
        ]
    },
    {
        id: "126",
        code: "Skilt 126",
        norwegianName: "Rundkjøring",
        englishName: "Roundabout ahead",
        vietnameseName: "Đến gần vòng xuyến / Bùng binh",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/126_0.svg",
        keyRulesVi: [
            "Báo hiệu sắp tiến vào một bùng binh giao thông.",
            "Quy tắc vòng xuyến: Bạn bắt buộc phải giảm tốc và nhường đường (yield) cho TẤT CẢ các phương tiện đã nằm sẵn trong vòng xuyến (những xe này thường đi tới từ phía bên TRÁI của bạn).",
            "Phải bật xi-nhan trước khi thoát ra khỏi vòng xuyến."
        ],
        testQuestions: [
            "Đề thi: Bạn phải nhường đường cho ai khi chuẩn bị tiến vào một vòng xuyến? -> Đáp án: Phải nhường đường cho tất cả các xe cộ đã lưu thông sẵn bên trong vòng xuyến.",
            "Đề thi: Khi nào bạn bắt buộc phải sử dụng đèn xi-nhan tại vòng xuyến? -> Đáp án: Khi chuyển làn bên trong vòng xuyến và ngay trước khi thoát ra khỏi vòng xuyến."
        ]
    },
    {
        id: "132",
        code: "Skilt 132",
        norwegianName: "Trafikklyssignal",
        englishName: "Traffic signals ahead",
        vietnameseName: "Đèn tín hiệu giao thông phía trước",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/132_0.svg",
        keyRulesVi: [
            "Khu vực phía trước có lắp đặt cụm đèn xanh đèn đỏ (thường đặt ở những đoạn đường thẳng dài hoặc ngoài khu dân cư nơi tài xế không ngờ tới).",
            "Sẵn sàng tâm lý rà phanh nếu đèn chuyển vàng. Nếu hệ thống đèn này đang chớp nháy màu vàng liên tục, nghĩa là đèn hỏng, bạn phải quay về áp dụng biển báo nhường đường hoặc quy tắc bàn tay phải."
        ],
        testQuestions: [
            "Đề thi: Đèn giao thông tại nút giao này đang nhấp nháy màu vàng liên tục. Bạn phải xử lý thế nào? -> Đáp án: Đèn đang bị lỗi/ngoài giờ hoạt động. Bạn phải tuân theo các biển báo nhường đường được cắm tại cột đèn hoặc áp dụng quy tắc bàn tay phải."
        ]
    },
    {
        id: "134",
        code: "Skilt 134",
        norwegianName: "Planovergang med bom",
        englishName: "Level crossing with barriers",
        vietnameseName: "Giao cắt đường sắt có rào chắn",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/134_0.svg",
        keyRulesVi: [
            "Phía trước là điểm cắt ngang với đường ray tàu hỏa, điểm này CÓ trang bị rào chắn (barrier) bảo vệ.",
            "Nếu đèn đỏ tại rào nháy sáng, phải dừng lại ngay. Tuyệt đối không cố phóng qua kể cả khi rào chắn chưa kịp hạ xuống hết, hoặc rào đang nâng lên nhưng đèn đỏ vẫn còn chớp nháy."
        ],
        testQuestions: [
            "Đề thi: Tại điểm giao cắt này, rào chắn đang được nâng lên sau khi tàu đi qua, nhưng đèn đỏ vẫn đang nhấp nháy. Bạn có được đi tiếp không? -> Đáp án: Tuyệt đối không. Đèn đỏ nhấp nháy có hiệu lực cao nhất, bạn phải chờ đến khi đèn tắt hẳn."
        ]
    },
    {
        id: "135",
        code: "Skilt 135",
        norwegianName: "Planovergang uten bom",
        englishName: "Level crossing without barriers",
        vietnameseName: "Giao cắt đường sắt KHÔNG có rào chắn",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/135_0.svg",
        keyRulesVi: [
            "Cực kỳ nguy hiểm: Giao cắt với đường ray tàu hỏa nhưng KHÔNG CÓ thanh rào chắn bảo vệ.",
            "Lái xe phải chịu 100% trách nhiệm quan sát. Bắt buộc phải giảm tốc độ, hạ kính xe nghe ngóng tiếng tàu, quan sát kỹ hai bên trái phải. Nếu có biển STOP thì phải dừng xe hoàn toàn trước khi đi qua."
        ],
        testQuestions: [
            "Đề thi: Điều gì khiến đoạn giao cắt có biển báo này trở nên đặc biệt nguy hiểm? -> Đáp án: Không có rào chắn vật lý nào ngăn bạn lao vào đường ray, bạn phải tự mình dừng lại và quan sát tàu hỏa."
        ]
    },
    {
        id: "136.1",
        code: "Skilt 136.1",
        norwegianName: "Avstandsskilt (1 strek)",
        englishName: "Distance sign (1 bar)",
        vietnameseName: "Biển đếm khoảng cách đến đường sắt (1 vạch)",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/136_1.svg",
        keyRulesVi: [
            "Nằm trong bộ 3 biển đếm ngược đặt trước đường ray. Biển 1 vạch đỏ là biển đặt GẦN đường ray nhất (thường cách khoảng 50-80m tùy tốc độ quy định).",
            "Đến vị trí này, bạn phải ở mức sẵn sàng đạp phanh dừng hẳn xe."
        ],
        testQuestions: [
            "Đề thi: Trong ba biển báo khoảng cách đến đường sắt (1 vạch, 2 vạch, 3 vạch), biển báo nào nằm gần đường ray nhất? -> Đáp án: Biển có 1 vạch đỏ."
        ]
    },
    {
        id: "136.3",
        code: "Skilt 136.3",
        norwegianName: "Avstandsskilt (3 streker)",
        englishName: "Distance sign (3 bars)",
        vietnameseName: "Biển báo khoảng cách đến đường sắt (3 vạch)",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/136_3.svg",
        keyRulesVi: [
            "Đây là biển báo đầu tiên bạn gặp khi tiến gần đến giao cắt đường sắt. 3 vạch đỏ báo hiệu bạn đang ở khoảng cách XA NHẤT (thường cách đường ray từ 150m đến 240m tùy tốc độ quy định của đoạn đường).",
            "Ngay khi thấy biển 3 vạch này, bạn phải bắt đầu nhả chân ga và chuẩn bị tâm lý giảm tốc độ."
        ],
        testQuestions: [
            "Đề thi: Trong tổ hợp 3 biển báo khoảng cách, biển có 3 vạch chéo màu đỏ mang ý nghĩa gì? -> Đáp án: Đây là biển cảnh báo đầu tiên, nằm xa đường ray nhất để báo hiệu bạn sắp tiến vào khu vực giao cắt."
        ]
    },
    {
        id: "136.2",
        code: "Skilt 136.2",
        norwegianName: "Avstandsskilt (2 streker)",
        englishName: "Distance sign (2 bars)",
        vietnameseName: "Biển báo khoảng cách đến đường sắt (2 vạch)",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/136_2.svg",
        keyRulesVi: [
            "Đây là biển báo thứ hai, nằm ở vị trí CHÍNH GIỮA khoảng cách từ biển 3 vạch đến điểm giao cắt (thường cách đường ray khoảng 100m - 160m).",
            "Tại vị trí này, tốc độ của bạn đã phải được giảm xuống đáng kể để có thể dừng lại an toàn nếu rào chắn bắt đầu hạ xuống."
        ],
        testQuestions: [
            "Đề thi: Biển báo có 2 vạch chéo đỏ được đặt ở vị trí nào so với đường ray tàu hỏa? -> Đáp án: Được đặt ở vị trí trung gian, nằm giữa biển 3 vạch và biển 1 vạch."
        ]
    },
    {
        id: "138.1",
        code: "Skilt 138.1",
        norwegianName: "Kryssmerke for planovergang med ett spor",
        englishName: "St. Andrew's cross (single track)",
        vietnameseName: "Dấu chữ thập đường sắt (Đường ray đơn)",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/138_1.svg",
        keyRulesVi: [
            "Biển báo hình dấu chữ thập X, cắm ĐÚNG TẠI VỊ TRÍ đường ray tàu hỏa giao cắt với mặt đường.",
            "Biển có 1 nét chéo (như chữ X bình thường) báo hiệu đây là tuyến đường sắt ĐƠN (chỉ có 1 đường ray).",
            "Mặc dù chỉ có 1 đường ray, bạn vẫn phải dừng xe quan sát cẩn thận cả hai hướng trước khi đi qua (nếu không có rào chắn)."
        ],
        testQuestions: [
            "Đề thi: Biển báo hình chữ thập nằm ngay sát đường ray mang ý nghĩa gì? -> Đáp án: Xác định chính xác vị trí giao cắt của đường sắt. Biển chữ X đơn cho biết bạn chỉ phải vượt qua MỘT đường ray duy nhất."
        ]
    },
    {
        id: "138.2",
        code: "Skilt 138.2",
        norwegianName: "Kryssmerke for planovergang med flere spor",
        englishName: "St. Andrew's cross (multiple tracks)",
        vietnameseName: "Dấu chữ thập đường sắt (Nhiều đường ray)",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/138_2.svg",
        keyRulesVi: [
            "Biển báo hình dấu chữ thập X nhưng CÓ THÊM một nửa dấu X nằm ngửa ở bên dưới.",
            "Cực kỳ nguy hiểm: Cảnh báo đây là giao cắt với NHIỀU ĐƯỜNG RAY (từ 2 đường ray trở lên).",
            "Bẫy chết người: Khi có một đoàn tàu vừa đi qua, bạn tuyệt đối KHÔNG ĐƯỢC đi ngay, vì có thể có một đoàn tàu thứ hai đang lao tới từ hướng ngược lại trên đường ray kế bên bị đoàn tàu thứ nhất che khuất."
        ],
        testQuestions: [
            "Đề thi: Sự khác biệt cực kỳ quan trọng giữa biển báo chữ thập đơn và chữ thập kép (có thêm vạch dưới) là gì? -> Đáp án: Chữ thập kép cảnh báo có nhiều đường ray. Bạn phải đề phòng có đoàn tàu thứ hai chạy tới trên đường ray khác ngay sau khi đoàn tàu đầu tiên đi qua."
        ]
    },
    {
        id: "140",
        code: "Skilt 140",
        norwegianName: "Gående / Gangfelt",
        englishName: "Pedestrian crossing",
        vietnameseName: "Lối sang đường cho người đi bộ phía trước",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/140_0.svg",
        keyRulesVi: [
            "Cảnh báo sắp tới vạch ngựa vằn (gangfelt) dành cho người đi bộ qua đường.",
            "Tại Na Uy, bạn có NGHĨA VỤ NHƯỜNG ĐƯỜNG TUYỆT ĐỐI cho người đi bộ. Phải rà phanh từ xa và dừng lại ngay cả khi họ mới chỉ đang đứng trên vỉa hè có ý định bước xuống vạch.",
            "Nghiêm cấm vượt xe khác ngay trước hoặc ngay trên vạch người đi bộ."
        ],
        testQuestions: [
            "Đề thi: Nghĩa vụ pháp lý của bạn khi thấy một người đi bộ đang đứng sát vỉa hè chờ tại vạch kẻ đường này là gì? -> Đáp án: Bắt buộc phải dừng xe lại và nhường đường cho họ đi qua an toàn.",
            "Đề thi: Hành vi nào là vi phạm luật nghiêm trọng và bị tước bằng lái ngay lập tức tại khu vực này? -> Đáp án: Vượt một chiếc xe khác ngay trước hoặc trên vạch kẻ đường cho người đi bộ."
        ]
    },
    {
        id: "142",
        code: "Skilt 142",
        norwegianName: "Barn (skole/barnehage)",
        englishName: "Children (school/kindergarten area)",
        vietnameseName: "Khu vực thường xuyên có trẻ em / Trường học",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/142_0.svg",
        keyRulesVi: [
            "Khu vực gần trường học, nhà trẻ hoặc sân chơi. Thường đi kèm giới hạn tốc độ 30 km/h.",
            "Trẻ em có chiều cao thấp (khó nhìn thấy qua nắp capo) và không có khả năng phán đoán tốc độ ô tô. Bạn phải lái xe với giả định rằng một đứa trẻ có thể lao ra lòng đường nhặt bóng bất cứ lúc nào."
        ],
        testQuestions: [
            "Đề thi: Tại sao bạn phải hết sức cảnh giác khi đi qua khu vực cắm biển này dù không nhìn thấy ai trên vỉa hè? -> Đáp án: Vì trẻ em có kích thước nhỏ dễ bị che khuất sau các xe đỗ và có xu hướng lao ra đường đuổi theo quả bóng mà không thèm nhìn xe cộ."
        ]
    },
    {
        id: "144",
        code: "Skilt 144",
        norwegianName: "Syklende",
        englishName: "Cyclists crossing",
        vietnameseName: "Người đi xe đạp cắt ngang đường",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/144_0.svg",
        keyRulesVi: [
            "Khu vực người đi xe đạp từ đường dành riêng cho xe đạp sẽ tạt ngang, nhập làn hoặc cắt qua lòng đường ô tô.",
            "Lưu ý: Mặc dù người đi xe đạp thường phải nhường ô tô khi cắt ngang đường chính (trừ khi họ dắt bộ qua vạch), tài xế ô tô vẫn phải chủ động quan sát để tránh tai nạn chết người."
        ],
        testQuestions: [
            "Đề thi: Biển cảnh báo này mang ý nghĩa gì? -> Đáp án: Cảnh báo có người đi xe đạp thường xuyên cắt ngang qua lòng đường hoặc nhập vào làn đường ô tô."
        ]
    },
    {
        id: "146.1",
        code: "Skilt 146.1",
        norwegianName: "Elg",
        englishName: "Moose / Elk crossing",
        vietnameseName: "Nguy hiểm có nai sừng tấm Bắc Âu (Elg)",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/146_1.svg",
        keyRulesVi: [
            "Nai sừng tấm (Moose/Elg) là loài thú cực lớn, trọng tâm cao. Khi đâm phải, thân của nó sẽ lật úp đập nát kính chắn gió và trần xe, nguy cơ tử vong cho tài xế rất cao.",
            "Mức độ nguy hiểm cao nhất là vào lúc chạng vạng tối (dusk) và rạng sáng (dawn).",
            "Nếu đâm phải thú hoang, không được bỏ đi. Bắt buộc phải đánh dấu hiện trường và gọi Cảnh sát (02800) hoặc đội cứu hộ động vật (Viltnemnda)."
        ],
        testQuestions: [
            "Đề thi: Vào thời điểm nào trong ngày nguy cơ đâm phải loài động vật này là cao nhất? -> Đáp án: Lúc rạng sáng và chạng vạng tối, khi ánh sáng yếu và động vật bắt đầu đi kiếm ăn.",
            "Đề thi: Trách nhiệm pháp lý của bạn là gì nếu chẳng may tông phải một con nai sừng tấm và nó bỏ chạy vào rừng? -> Đáp án: Đánh dấu vị trí va chạm và gọi ngay cho cảnh sát hoặc đội cứu hộ động vật, cấm tự ý đuổi theo."
        ]
    },
    {
        id: "146.2",
        code: "Skilt 146.2",
        norwegianName: "Hjort",
        englishName: "Deer crossing",
        vietnameseName: "Nguy hiểm Hươu / Nai nhảy qua đường",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/146_2.svg",
        keyRulesVi: [
            "Cảnh báo khu vực có hươu nai hoang dã. Khác với Elg (nai sừng tấm khổng lồ lững thững), Hjort (hươu) nhẹ hơn nhưng vô cùng nhanh nhẹn và thường PHÓNG TỐC ĐỘ CAO nhảy vọt qua đường.",
            "Chúng thường đi theo đàn, nếu bạn thấy 1 con chạy qua, rất có thể sẽ có 2-3 con khác lao theo ngay phía sau."
        ],
        testQuestions: [
            "Đề thi: Đặc tính nguy hiểm nhất của loài vật trong biển báo này (Hjort) so với nai sừng tấm (Elg) là gì? -> Đáp án: Chúng thường lao ra đường rất bất ngờ với tốc độ cao và thường di chuyển theo bầy đàn."
        ]
    },
    {
        id: "146.3",
        code: "Skilt 146.3",
        norwegianName: "Rein",
        englishName: "Reindeer crossing",
        vietnameseName: "Nguy hiểm Tuần lộc trên đường",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/146_3.svg",
        keyRulesVi: [
            "Rất phổ biến ở miền Bắc và Trung Na Uy. Tuần lộc (Reinsdyr) thường tập trung thành bầy đàn LỚN và chúng KHÔNG HỀ SỢ Ô TÔ.",
            "Chúng có thể đứng lỳ giữa lòng đường liếm muối (muối rải chống băng tuyết). Phải giảm tốc độ từ xa và kiên nhẫn chờ đợi, không bóp còi inh ỏi làm chúng hoảng loạn."
        ]
    },
    {
        id: "146.4",
        code: "Skilt 146.4",
        norwegianName: "Ku",
        englishName: "Cattle crossing",
        vietnameseName: "Khu vực bò / gia súc băng qua đường",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/146_4.svg",
        keyRulesVi: [
            "Khu vực chăn thả gia súc nông nghiệp. Bò thường di chuyển chậm, lề mề và đôi khi làm bẩn mặt đường bằng phân bò khiến mặt đường trở nên trơn trượt (đặc biệt khi trời mưa)."
        ]
    },
    {
        id: "146.5",
        code: "Skilt 146.5",
        norwegianName: "Sau",
        englishName: "Sheep crossing",
        vietnameseName: "Khu vực cừu chăn thả thả rông",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/146_5.svg",
        keyRulesVi: [
            "Cừu thường được thả rông tự do trên các vùng núi hoặc đường cao nguyên ở Na Uy vào mùa hè.",
            "Chúng hay nằm ngủ sát mép đường nhựa ấm hoặc đột ngột chạy loạn xạ khi hoảng sợ. Phải giảm tốc độ xuống rất thấp khi đi qua đàn cừu."
        ]
    },
    {
        id: "148",
        code: "Skilt 148",
        norwegianName: "Toveistrafikk",
        englishName: "Two-way traffic ahead",
        vietnameseName: "Đường chuyển sang lưu thông hai chiều",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/148_0.svg",
        keyRulesVi: [
            "Biển báo này xuất hiện ở cuối đoạn đường một chiều hoặc khi hết dải phân cách cứng ở giữa đường đôi.",
            "Từ điểm này, con đường phía trước sẽ có xe lưu thông ngược chiều đâm thẳng về phía bạn. Bắt buộc phải ép xe trở lại bám sát vào làn đường bên TAY PHẢI."
        ],
        testQuestions: [
            "Đề thi: Biển báo này muốn cảnh báo sự thay đổi quan trọng nào về tình trạng giao thông? -> Đáp án: Đoạn đường một chiều đã kết thúc, bạn sắp phải đối mặt với các phương tiện đi ngược chiều trên cùng một mặt đường."
        ]
    },
    {
        id: "150",
        code: "Skilt 150",
        norwegianName: "Lavtflygende fly",
        englishName: "Low-flying aircraft",
        vietnameseName: "Máy bay bay thấp",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/150_0.svg",
        keyRulesVi: [
            "Cảnh báo bạn đang đi ngang qua khu vực rất gần đường băng sân bay.",
            "Lái xe có thể bị giật mình bởi tiếng rít động cơ cực lớn hoặc bóng mây khổng lồ vụt qua của máy bay hạ cánh. Cần giữ chắc vô lăng và chuẩn bị tâm lý."
        ],
        testQuestions: [
            "Đề thi: Mục đích chính của biển báo này là gì? -> Đáp án: Cảnh báo người lái xe không bị giật mình hoảng hốt bởi tiếng ồn lớn và hình bóng đột ngột của máy bay bay sát qua đầu."
        ]
    },
    {
        id: "152",
        code: "Skilt 152",
        norwegianName: "Sidevind",
        englishName: "Crosswind",
        vietnameseName: "Khu vực gió tạt ngang nguy hiểm",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/152_0.svg",
        keyRulesVi: [
            "Cảnh báo khi xe vừa ra khỏi hầm, vừa đi qua một thung lũng hoặc đi trên cây cầu treo lớn, có nguy cơ gặp luồng gió bão thổi tạt mạnh ngang thân xe.",
            "Rất nguy hiểm cho xe thùng cao, xe tải nhẹ, xe kéo rơ-moóc hoặc xe mô tô. Gió tạt có thể hất văng xe chệch khỏi làn đường.",
            "Kỹ thuật: Phải cầm chắc vô lăng bằng hai tay, chủ động đánh lái nhẹ ngược lại hướng gió tạt để bù trừ lực, và ĐẶC BIỆT chú ý khi vượt xe tải lớn (vì khi vượt, xe tải sẽ làm lá chắn gió, nhưng khi vượt qua rồi luồng gió sẽ quật trở lại vào xe bạn)."
        ],
        testQuestions: [
            "Đề thi: Bạn đang kéo một chiếc rơ-moóc nhẹ và gặp biển báo Sidevind. Mối nguy hiểm lớn nhất là gì và bạn nên xử lý ra sao? -> Đáp án: Gió giật ngang có thể làm lật rơ-moóc hoặc đẩy xe chệch làn. Phải giữ chặt vô lăng bằng hai tay, giảm tốc độ và sẵn sàng đánh lái bù trừ gió.",
            "Đề thi: Hiện tượng khí động học nào xảy ra khi bạn vượt một chiếc xe tải dài trong khu vực có biển cảnh báo gió tạt ngang? -> Đáp án: Xe tải sẽ che gió cho bạn khi bạn chạy ngang hông nó (bạn sẽ bị hút vào xe tải), nhưng ngay khi vừa vượt lên trước mũi xe tải, luồng gió mạnh sẽ đột ngột quật vào xe bạn đẩy bạn văng ra xa."
        ]
    },
    {
        id: "153",
        code: "Skilt 153",
        norwegianName: "Trafikkulykke",
        englishName: "Traffic accident ahead",
        vietnameseName: "Cảnh báo tai nạn giao thông phía trước",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/trafikkulykke.svg",
        keyRulesVi: [
            "Biển cảnh báo khẩn cấp màu vàng hoặc đỏ: Khu vực phía trước vừa xảy ra tai nạn giao thông, cảnh sát có thể đang xử lý hiện trường.",
            "Quy tắc sơ cứu tai nạn: Nếu bạn là người đầu tiên đến hiện trường, bạn BẮT BUỘC phải dừng lại giúp đỡ. Trình tự: Dừng xe an toàn -> Mặc áo phản quang -> Cắm biển tam giác bảo vệ hiện trường -> Gọi cấp cứu (113/112) -> Sơ cứu nạn nhân."
        ],
        testQuestions: [
            "Đề thi: Nếu bạn là người đầu tiên lái xe đi tới hiện trường của một vụ tai nạn vừa xảy ra, luật pháp Na Uy bắt buộc bạn phải làm gì? -> Đáp án: Phải lập tức dừng xe, bảo vệ hiện trường, thông báo cho cơ quan cứu hộ và giúp đỡ người bị nạn."
        ]
    },
    {
        id: "154",
        code: "Skilt 154",
        norwegianName: "Skiløpere",
        englishName: "Skiers crossing",
        vietnameseName: "Người trượt tuyết cắt ngang đường",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/154_0.svg",
        keyRulesVi: [
            "Cảnh báo đường mòn dành cho dân trượt tuyết (cross-country skiing) băng ngang qua đường bộ.",
            "Người trượt tuyết di chuyển rất nhanh từ trong rừng lao ra và chân họ bị gắn vào ván trượt, rất khó dừng lại đột ngột trên mặt nhựa đường. Tài xế ô tô phải chủ động nhường."
        ]
    },
    {
        id: "155",
        code: "Skilt 155",
        norwegianName: "Ridende",
        englishName: "Equestrians / Horses",
        vietnameseName: "Khu vực người cưỡi ngựa / dắt ngựa",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/155_0.svg",
        keyRulesVi: [
            "Khu vực có trang trại nuôi ngựa. Ngựa là loài vật cực kỳ nhạy cảm và dễ hoảng sợ bởi tiếng ồn hoặc cử động mạnh.",
            "Kỹ thuật: Khi vượt ngựa, phải giữ KHOẢNG CÁCH NGANG RẤT RỘNG (lấn hẳn sang làn ngược chiều nếu cần), chạy chậm ở số cao để động cơ bớt ồn. TUYỆT ĐỐI KHÔNG BÓP CÒI HOẶC RÚ GA. Nếu ngựa hoảng loạn nhảy dựng lên, có thể đạp vỡ kính xe gây tử vong."
        ],
        testQuestions: [
            "Đề thi: Nguyên tắc sống còn khi lái xe vượt qua một người đang cưỡi ngựa trên đường là gì? -> Đáp án: Chạy chậm rãi, giữ khoảng cách ngang thật rộng và tuyệt đối không bao giờ được bóp còi hay rú ga mạnh làm ngựa hoảng sợ."
        ]
    },
    {
        id: "156",
        code: "Skilt 156",
        norwegianName: "Annen fare",
        englishName: "Other danger",
        vietnameseName: "Cảnh báo mối nguy hiểm khác",
        category: "fare",
        categoryNameVi: "Biển nguy hiểm",
        imageSrc: "Images/156_0.svg",
        keyRulesVi: [
            "Biển báo tổng quát cảnh báo một loại nguy hiểm không có biểu tượng vẽ riêng trong luật.",
            "ĐỂ HIỂU ĐƯỢC NGUY HIỂM ĐÓ LÀ GÌ: Bạn bắt buộc phải đọc tấm biển phụ (Underskilt - biển hình chữ nhật màu trắng) được cắm ngay bên dưới biển này (ví dụ ghi chữ 'Spor i veien' - có rãnh trên đường)."
        ],
        testQuestions: [
            "Đề thi: Làm thế nào để bạn biết chính xác mối nguy hiểm mà biển báo có dấu chấm than này đang cảnh báo là gì? -> Đáp án: Bằng cách đọc nội dung văn bản ghi trên tấm biển phụ (Underskilt) được treo ngay bên dưới nó."
        ]
    },

    // ==========================================
    // NHÓM 2: BIỂN ƯU TIÊN VÀ NHƯỜNG ĐƯỜNG (VIKEPLIKTSKILT - NHÓM 200)
    // Đặc điểm: Các biển này điều chỉnh quyền ưu tiên tại các nút giao hoặc đoạn đường hẹp.
    // Lỗi vi phạm nhóm này thường dẫn đến trượt thực hành ngay lập tức.
    // ==========================================
    {
        id: "202",
        code: "Skilt 202",
        norwegianName: "Vikeplikt",
        englishName: "Give way / Yield",
        vietnameseName: "Biển nhường đường (Vikeplikt)",
        category: "priority",
        categoryNameVi: "Biển ưu tiên",
        imageSrc: "Images/202_0.svg",
        keyRulesVi: [
            "Biển hình tam giác ngược (đỉnh chĩa xuống). Hình dáng độc quyền này giúp tài xế nhận diện được ý nghĩa của biển ngay cả khi mặt biển bị tuyết phủ kín hoàn toàn.",
            "Nghĩa vụ pháp lý: Bạn BẮT BUỘC phải giảm tốc độ, quan sát và NHƯỜNG ĐƯỜNG cho tất cả các phương tiện đang lưu thông trên tuyến đường giao cắt phía trước (bất kể họ đi tới từ bên trái hay bên phải).",
            "Mẹo thực hành: Bạn không bắt buộc phải dừng xe chết 100% (bánh xe dừng quay) nếu tầm nhìn rõ ràng và đường giao cắt hoàn toàn trống trải. Tuy nhiên, bạn phải chứng minh được mình đã 'chủ động nhường' bằng cách rà phanh từ xa."
        ],
        testQuestions: [
            "Đề thi: Tại ngã tư có cắm biển báo hình tam giác ngược này, bạn có nghĩa vụ nhường đường cho những ai? -> Đáp án: Phải nhường đường cho TẤT CẢ phương tiện đang lưu thông trên tuyến đường cắt ngang phía trước (cả luồng xe từ bên trái và bên phải)."
        ]
    },
    {
        id: "204",
        code: "Skilt 204",
        norwegianName: "Stopp",
        englishName: "Stop sign",
        vietnameseName: "Biển dừng lại bắt buộc (STOP)",
        category: "priority",
        categoryNameVi: "Biển ưu tiên",
        imageSrc: "Images/204_0.svg",
        keyRulesVi: [
            "Biển hình bát giác (8 cạnh) màu đỏ. Đây cũng là hình dáng độc quyền để nhận diện trong bão tuyết.",
            "Luật thép (Tuyệt đối): Bạn BẮT BUỘC PHẢI DỪNG XE HOÀN TOÀN (4 bánh xe không nhúc nhích) sát ngay trước vạch dừng. Việc xe vẫn trôi rà rà (rolling stop) sẽ bị đánh trượt bài thi ngay lập tức.",
            "Nghĩa vụ nhường: Sau khi đã dừng xe hẳn, bạn phải quan sát kỹ hai bên và nhường đường cho mọi phương tiện trên tuyến cắt ngang rồi mới được quyền đi tiếp."
        ],
        testQuestions: [
            "Đề thi: Bạn lái xe đến ngã tư có biển STOP vào lúc 3 giờ sáng, tầm nhìn cực kỳ rõ ràng và đường vắng tanh không có một chiếc xe nào. Bạn phải xử lý thế nào? -> Đáp án: Vẫn bắt buộc phải đạp phanh dừng xe lại hoàn toàn 100% trước vạch dừng, sau đó mới được nhấn ga đi tiếp."
        ]
    },
    {
        id: "206",
        code: "Skilt 206",
        norwegianName: "Forkjørsveg",
        englishName: "Priority road",
        vietnameseName: "Đường ưu tiên",
        category: "priority",
        categoryNameVi: "Biển ưu tiên",
        imageSrc: "Images/206_0.svg",
        keyRulesVi: [
            "Biển hình thoi màu vàng, viền trắng.",
            "Đặc quyền: Báo hiệu bạn đang chạy trên trục đường chính được hưởng quyền ưu tiên. Tại các ngã ba, ngã tư dọc tuyến đường này, TẤT CẢ xe từ đường nhánh đâm ra đều phải nhường đường cho bạn.",
            "Hiệu lực kéo dài: Quyền ưu tiên này có hiệu lực liên tục đi qua nhiều ngã tư, và nó chỉ kết thúc khi bạn nhìn thấy biển báo 'Hết đường ưu tiên'."
        ],
        testQuestions: [
            "Đề thi: Điều gì xảy ra đối với các quy tắc nhường đường thông thường khi bạn nhìn thấy biển hình thoi màu vàng này? -> Đáp án: Quy tắc bàn tay phải bị hủy bỏ. Tất cả các phương tiện đi từ ngõ nhánh hoặc đường phụ đâm ra sẽ phải nhường đường cho bạn."
        ]
    },
    {
        id: "208",
        code: "Skilt 208",
        norwegianName: "Slutt på forkjørsveg",
        englishName: "End of priority road",
        vietnameseName: "Hết đường ưu tiên",
        category: "priority",
        categoryNameVi: "Biển ưu tiên",
        imageSrc: "Images/208_0.svg",
        keyRulesVi: [
            "Biển hình thoi vàng bị gạch chéo bằng nhiều vạch đen.",
            "Chấm dứt đặc quyền: Báo hiệu đoạn đường ưu tiên của bạn đã kết thúc.",
            "Khôi phục luật chung: Bắt đầu từ ngã tư hoặc nút giao TIẾP THEO, bạn không còn quyền đi trước nữa. Bạn phải quay lại áp dụng Quy tắc bàn tay phải (nhường cho mọi xe tới từ bên phải) hoặc tuân thủ các biển báo nhường/dừng được cắm tại ngã tư đó."
        ],
        testQuestions: [
            "Đề thi: Hệ quả pháp lý quan trọng nhất đối với bạn khi đi vượt qua khỏi biển báo này là gì? -> Đáp án: Quyền đi trước của bạn bị tước bỏ. Bạn phải chuẩn bị tinh thần để nhường đường cho các xe đi đến từ phía bên phải theo quy tắc chung tại ngã tư tiếp theo."
        ]
    },
    {
        id: "210",
        code: "Skilt 210",
        norwegianName: "Forkjørskryss",
        englishName: "Priority intersection",
        vietnameseName: "Giao lộ ưu tiên cục bộ",
        category: "priority",
        categoryNameVi: "Biển ưu tiên",
        imageSrc: "Images/210_0.svg",
        keyRulesVi: [
            "Hình tam giác viền đỏ (giống biển cảnh báo), bên trong vẽ một vạch đen to (chỉ đường của bạn) bị cắt ngang bởi vạch nhỏ (đường nhánh).",
            "Đặc quyền NGẮN HẠN: Bạn có quyền ưu tiên ĐI TRƯỚC các xe từ đường nhánh đâm ra. Tuy nhiên, quyền ưu tiên này CHỈ CÓ HIỆU LỰC TẠI MỘT NGÃ TƯ DUY NHẤT ở phía trước (khác với biển thoi vàng có hiệu lực kéo dài).",
            "Mặc dù được ưu tiên, tài xế vẫn phải cảnh giác phòng trường hợp xe từ đường nhánh không tuân thủ luật hoặc phanh không kịp do đường trơn."
        ],
        testQuestions: [
            "Đề thi: Sự khác biệt lớn nhất giữa biển tam giác viền đỏ này (Forkjørskryss) và biển hình thoi vàng (Forkjørsveg) là gì? -> Đáp án: Biển tam giác này chỉ cấp cho bạn quyền ưu tiên đi trước tại MỘT ngã tư cụ thể ngay phía trước, trong khi biển thoi vàng mang lại quyền ưu tiên liên tục qua nhiều ngã tư."
        ]
    },
    {
        id: "212",
        code: "Skilt 212",
        norwegianName: "Vikeplikt overfor møtende trafikk",
        englishName: "Give way to oncoming traffic",
        vietnameseName: "Bắt buộc nhường đường cho luồng xe đi ngược chiều",
        category: "priority",
        categoryNameVi: "Biển ưu tiên",
        imageSrc: "Images/212_0.svg",
        keyRulesVi: [
            "Biển hình TRÒN viền ĐỎ (giống biển cấm). Bên trong có mũi tên đen chỉ hướng đi của bạn (bị ép xuống) và mũi tên đỏ chỉ hướng xe ngược chiều.",
            "Ý nghĩa: Cắm tại các đoạn đường hoặc cây cầu bị thu hẹp chỉ còn 1 làn xe. Bạn BẮT BUỘC PHẢI DỪNG LẠI để nhường đường cho xe đi ngược chiều qua trước."
        ],
        testQuestions: [
            "Đề thi: Tại một đoạn đường đang thi công bị thu hẹp, bạn gặp biển tròn viền đỏ có 2 mũi tên ngược chiều này. Luật yêu cầu bạn phải làm gì? -> Đáp án: Bạn không có quyền đi trước. Bạn phải chủ động dừng lại chờ và nhường đường cho tất cả các xe đi từ hướng ngược lại lọt qua đoạn hẹp trước."
        ]
    },
    {
        id: "214",
        code: "Skilt 214",
        norwegianName: "Møtende trafikk har vikeplikt",
        englishName: "Oncoming traffic must give way",
        vietnameseName: "Xe ngược chiều phải nhường đường cho bạn",
        category: "priority",
        categoryNameVi: "Biển ưu tiên",
        imageSrc: "Images/214_0.svg",
        keyRulesVi: [
            "Biển hình CHỮ NHẬT VUÔNG VỨC nền XANH LAM (giống biển chỉ dẫn). Mũi tên trắng chỉ hướng của bạn (được thông qua) và mũi tên đỏ chỉ xe ngược chiều (phải dừng).",
            "Đặc quyền: Cắm ở đầu bên kia của đoạn đường hẹp. Bạn được QUYỀN ĐI TRƯỚC. Xe đi ngược chiều từ phía bên kia phải có trách nhiệm dừng lại và nhường đường cho bạn."
        ],
        testQuestions: [
            "Đề thi: Khi tiếp cận một cây cầu nhỏ chỉ vừa một làn xe và nhìn thấy biển chữ nhật nền xanh lam có 2 mũi tên trắng/đỏ, bạn có quyền lợi gì? -> Đáp án: Bạn có quyền ưu tiên chạy qua cầu trước. Các phương tiện đi ngược chiều từ đầu cầu bên kia phải nhường đường cho bạn."
        ]
    },
    // ==========================================
    // NHÓM 2: BIỂN CẤM TIẾP THEO (FORBUDSSKILT)
    // Đặc điểm: Hình tròn, viền đỏ. Cấm tuyệt đối hành vi.
    // ==========================================
    {
        id: "302_0", code: "Skilt 302",
        norwegianName: "Innkjøring forbudt", englishName: "No entry", vietnameseName: "Cấm đi vào / Cấm đi ngược chiều",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/302_0.svg",
        keyRulesVi: [
            "Hình tròn đỏ có thanh ngang trắng. Nghiêm cấm mọi phương tiện tiến vào con đường này theo chiều đối diện với biển.",
            "Lưu ý: Phía bên kia của con đường này vẫn có luồng xe đi tới (đường một chiều)."
        ],
        testQuestions: [
            "Đề thi: Sự khác biệt giữa biển báo này và biển 'Cấm mọi xe cơ giới' là gì? -> Đáp án: Biển này cấm bạn đi vào từ hướng này (chiều kia vẫn có xe đi tới), còn biển 'Cấm xe cơ giới' cấm lưu thông ở cả hai hướng."
        ]
    },

    // --- NHÓM 306: CẤM ĐỐI TƯỢNG CỤ THỂ ---
    {
        id: "306_0", code: "Skilt 306.0",
        norwegianName: "Forbudt for motorvogn", englishName: "Prohibited for all motor vehicles", vietnameseName: "Cấm tất cả các loại xe cơ giới",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_0.svg",
        keyRulesVi: [
            "Biển viền đỏ, nền trắng trơn. Cấm TẤT CẢ xe cơ giới (ô tô, xe máy, xe tải, máy kéo) ở cả hai chiều.",
            "Ngoại lệ: Người đi xe đạp, người đi bộ và xe lăn vẫn được đi."
        ]
    },
    {
        id: "306_1", code: "Skilt 306.1",
        norwegianName: "Forbudt for motorvogn med flere enn to hjul og motorsykkel", englishName: "Prohibited for cars and motorcycles", vietnameseName: "Cấm ô tô và xe mô tô",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_1.svg",
        keyRulesVi: [
            "Cấm ô tô con, xe tải và xe mô tô phân khối lớn.",
            "Bẫy: Xe gắn máy cỡ nhỏ (Moped) và máy kéo nông nghiệp (Tractor) VẪN ĐƯỢC PHÉP đi vào."
        ],
        testQuestions: [
            "Đề thi: Phương tiện nào ĐƯỢC PHÉP đi qua đoạn đường có biển báo này? -> Đáp án: Xe gắn máy (Moped) và Máy kéo (Tractor)."
        ]
    },
    {
        id: "306_3", code: "Skilt 306.3",
        norwegianName: "Forbudt for traktor", englishName: "Prohibited for tractors", vietnameseName: "Cấm máy kéo nông nghiệp (Tractor)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_3.svg",
        keyRulesVi: ["Cấm các loại xe máy kéo nông nghiệp hoặc máy kéo thi công (chạy chậm) đi vào, nhằm tránh gây ùn tắc giao thông."]
    },
    {
        id: "306_4", code: "Skilt 306.4",
        norwegianName: "Forbudt for motorsykkel og moped", englishName: "Prohibited for motorcycles and mopeds", vietnameseName: "Cấm mô tô và xe gắn máy",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_4.svg",
        keyRulesVi: ["Cấm tất cả các loại xe cơ giới 2 bánh (kể cả phân khối lớn và moped). Ô tô vẫn được đi bình thường."]
    },
    {
        id: "306_5", code: "Skilt 306.5",
        norwegianName: "Forbudt for lastebil", englishName: "Prohibited for trucks", vietnameseName: "Cấm xe tải",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_5.svg",
        keyRulesVi: ["Cấm các loại xe vận tải hàng hóa (xe tải, xe đầu kéo). Xe ô tô con (kể cả SUV cỡ lớn) không bị cấm."]
    },
    {
        id: "306_6", code: "Skilt 306.6",
        norwegianName: "Forbudt for syklende", englishName: "Prohibited for cyclists", vietnameseName: "Cấm người đi xe đạp",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_6.svg",
        keyRulesVi: ["Cấm xe đạp lưu thông. Thường cắm ở đường hầm không có làn xe đạp hoặc cao tốc nhằm đảm bảo an toàn."]
    },
    {
        id: "306_7", code: "Skilt 306.7",
        norwegianName: "Forbudt for gående", englishName: "Prohibited for pedestrians", vietnameseName: "Cấm người đi bộ",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_7.svg",
        keyRulesVi: ["Cấm người đi bộ bước vào khu vực này (thường là đường gom ô tô nguy hiểm)."]
    },
    {
        id: "306_8", code: "Skilt 306.8",
        norwegianName: "Forbudt for gående og syklende", englishName: "Prohibited for pedestrians and cyclists", vietnameseName: "Cấm cả đi bộ và xe đạp",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_8.svg",
        keyRulesVi: ["Cấm tuyệt đối luồng giao thông phi cơ giới (người đi bộ và xe đạp)."]
    },
    {
        id: "306_9", code: "Skilt 306.9",
        norwegianName: "Forbudt for ridende", englishName: "Prohibited for equestrians", vietnameseName: "Cấm cưỡi ngựa / dắt ngựa",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/306_9.svg",
        keyRulesVi: ["Nghiêm cấm hoạt động cưỡi ngựa hoặc dắt ngựa đi dạo qua đoạn đường này."]
    },

    // --- NHÓM 308-322: KÍCH THƯỚC, TRỌNG LƯỢNG & HÀNG HÓA ---
    {
        id: "308_0", code: "Skilt 308",
        norwegianName: "Forbudt for farlig gods", englishName: "Prohibited for dangerous goods", vietnameseName: "Cấm xe chở hàng hóa nguy hiểm",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/308_0.svg",
        keyRulesVi: ["Cấm xe tải/xe bồn chở chất dễ cháy nổ, hóa chất độc hại đi qua (thường cắm trước hầm dài hoặc khu bảo vệ nguồn nước ngầm)."]
    },
    {
        id: "310_0", code: "Skilt 310",
        norwegianName: "Totalvekt (Aktuell vekt)", englishName: "Actual total weight limit", vietnameseName: "Cấm xe có tổng trọng lượng THỰC TẾ vượt mức (VD: 3.5t)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/310_0.svg",
        keyRulesVi: [
            "Bẫy thi: Biển này tính theo TRỌNG LƯỢNG THỰC TẾ (Aktuell vekt) của xe LÚC ĐANG LĂN BÁNH (bao gồm xác xe + người + hàng hóa hiện tại).",
            "Nó KHÔNG dựa vào thông số trọng lượng tối đa ghi trên giấy đăng kiểm."
        ],
        testQuestions: [
            "Đề thi: Giấy tờ xe ghi tải trọng tối đa là 4 tấn. Nhưng hiện tại xe trống, trọng lượng thực tế chỉ là 2.5 tấn. Phía trước có biển cấm 3.5t này. Bạn có được đi qua không? -> Đáp án: CÓ. Vì biển này áp dụng cho trọng lượng THỰC TẾ lúc đó (2.5t < 3.5t)."
        ]
    },
    {
        id: "312_0", code: "Skilt 312",
        norwegianName: "Bredde", englishName: "Width limit", vietnameseName: "Giới hạn chiều rộng xe (VD: 2.3m)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/312_0.svg",
        keyRulesVi: ["Cấm các xe có chiều rộng THỰC TẾ (bao gồm cả GƯƠNG CHIẾU HẬU 2 BÊN) vượt quá con số trên biển."]
    },
    {
        id: "314_0", code: "Skilt 314",
        norwegianName: "Høyde", englishName: "Height limit", vietnameseName: "Giới hạn chiều cao xe (VD: 3.5m)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/314_0.svg",
        keyRulesVi: ["Cấm xe có tổng chiều cao (tính cả hộp mái roof box, xe đạp trên nóc) vượt mức quy định để tránh kẹt gầm cầu/hầm."]
    },
    {
        id: "316_0", code: "Skilt 316",
        norwegianName: "Lengde", englishName: "Length limit", vietnameseName: "Giới hạn chiều dài xe (VD: 10m)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/316_0.svg",
        keyRulesVi: ["Cấm tổ hợp xe (xe kéo moóc) có tổng chiều dài thực tế lớn hơn số trên biển, vì khúc cua phía trước quá hẹp."]
    },
    {
        id: "318_1", code: "Skilt 318.1",
        norwegianName: "Aksellast", englishName: "Axle load limit", vietnameseName: "Giới hạn tải trọng trên 1 trục (VD: 12 tấn)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/318_1.svg",
        keyRulesVi: ["Cấm xe có tải trọng đè lên BẤT KỲ MỘT TRỤC ĐƠN nào vượt quá 12 tấn."]
    },
    {
        id: "318_2", code: "Skilt 318.2",
        norwegianName: "Boggilast", englishName: "Bogie load limit", vietnameseName: "Giới hạn tải trọng trục kép / Bogie (VD: 30 tấn)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/318_2.svg",
        keyRulesVi: ["Giới hạn tải trọng tác dụng lên cụm trục đôi/trục kép ở phần đuôi xe tải nặng."]
    },
    {
        id: "320_0", code: "Skilt 320",
        norwegianName: "Totalvekt for kjøretøy", englishName: "Permitted gross weight", vietnameseName: "Giới hạn tổng trọng lượng cho phép",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/320_0.svg",
        keyRulesVi: ["Khác với biển 310, biển này cấm dựa trên con số 'Tổng trọng lượng tối đa cho phép' (Tillatt totalvekt) GHI TRONG GIẤY ĐĂNG KIỂM, bất kể xe đang chở nặng hay chạy không tải."]
    },
    {
        id: "322_0", code: "Skilt 322",
        norwegianName: "Vogntogvekt", englishName: "Permitted combination weight", vietnameseName: "Giới hạn tổng trọng lượng tổ hợp xe",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/322_0.svg",
        keyRulesVi: ["Cấm tổ hợp xe (xe tải kéo theo rơ-moóc) có tổng trọng lượng cho phép trên giấy tờ vượt quá mức ghi trên biển."]
    },

    // --- NHÓM 324-326: DỪNG KIỂM TRA / THU PHÍ ---
    {
        id: "324_1", code: "Skilt 324.1",
        norwegianName: "Stopp for kontroll", englishName: "Stop for control", vietnameseName: "Dừng lại để kiểm tra",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/324_1.svg",
        keyRulesVi: ["Bắt buộc phải dừng xe hoàn toàn trước biển để lực lượng chức năng kiểm tra (cân tải trọng, giấy tờ)."]
    },
    {
        id: "324_2", code: "Skilt 324.2",
        norwegianName: "Stopp for avgift", englishName: "Stop for toll", vietnameseName: "Dừng lại nộp phí đường",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/324_2.svg",
        keyRulesVi: ["Bắt buộc dừng tại trạm thu phí thủ công. Không áp dụng cho làn AutoPASS."]
    },
    {
        id: "326_0", code: "Skilt 326",
        norwegianName: "Toll (Customs)", englishName: "Customs stop", vietnameseName: "Dừng kiểm tra Hải quan",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/326_0.svg",
        keyRulesVi: ["Cắm tại biên giới. Bắt buộc dừng lại khai báo hải quan nếu xe chở hàng hóa cần kê khai."]
    },

    // --- NHÓM 330-337: CẤM RẼ VÀ CẤM VƯỢT ---
    {
        id: "330_1", code: "Skilt 330.1",
        norwegianName: "Svingforbud til høyre", englishName: "No right turn", vietnameseName: "Cấm rẽ phải",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/330_1.svg",
        keyRulesVi: ["Cấm mọi thao tác bẻ lái rẽ phải tại ngã tư. Lệnh này KHÔNG cấm quay đầu (U-turn) và KHÔNG cấm rẽ trái."]
    },
    {
        id: "330_2", code: "Skilt 330.2",
        norwegianName: "Svingforbud til venstre", englishName: "No left turn", vietnameseName: "Cấm rẽ trái",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/330_2.svg",
        keyRulesVi: ["Cấm rẽ trái tại ngã tư phía trước. KHÔNG cấm quay đầu."]
    },
    {
        id: "332_0", code: "Skilt 332",
        norwegianName: "Vendeforbud", englishName: "No U-turn", vietnameseName: "Cấm quay đầu xe (U-turn)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/332_0.svg",
        keyRulesVi: ["Nghiêm cấm quay đầu xe hình chữ U để đi ngược lại."],
        testQuestions: [
            "Đề thi: Bạn có được phép rẽ trái vào ngõ khi nhìn thấy biển báo này không? -> Đáp án: Có, biển này CHỈ cấm quay đầu xe, không cấm rẽ trái."
        ]
    },
    {
        id: "334_0", code: "Skilt 334",
        norwegianName: "Forbikjøringsforbud", englishName: "Overtaking prohibited", vietnameseName: "Cấm vượt (xe nhiều bánh)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/334_0.svg",
        keyRulesVi: [
            "Cấm các loại ô tô vượt các phương tiện cơ giới khác có từ 3 bánh trở lên.",
            "Bạn VẪN ĐƯỢC PHÉP lách sang vượt một chiếc xe máy 2 bánh hoặc xe đạp nếu đủ an toàn."
        ]
    },
    {
        id: "335_0", code: "Skilt 335",
        norwegianName: "Forbikjøringsforbud for lastebil", englishName: "Overtaking prohibited for trucks", vietnameseName: "Cấm xe tải vượt",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/335_0.svg",
        keyRulesVi: ["Riêng phương tiện xe tải bị cấm lấn làn để vượt xe khác. Ô tô con vẫn được phép vượt."]
    },
    {
        id: "336_0", code: "Skilt 336",
        norwegianName: "Slutt på forbikjøringsforbud", englishName: "End of overtaking prohibition", vietnameseName: "Hết cấm vượt",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/336_0.svg",
        keyRulesVi: ["Lệnh cấm vượt ô tô trước đó đã kết thúc. Bạn được phép vượt nếu vạch kẻ đường (vạch đứt) cho phép."]
    },
    {
        id: "337_0", code: "Skilt 337",
        norwegianName: "Slutt på forbikjøringsforbud for lastebil", englishName: "End of overtaking prohibition for trucks", vietnameseName: "Hết cấm vượt đối với xe tải",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/337_0.svg",
        keyRulesVi: ["Kết thúc lệnh cấm vượt áp dụng riêng cho xe tải."]
    },

    // --- NHÓM 362: GIỚI HẠN TỐC ĐỘ (LIỆT KÊ ĐỦ THEO ẢNH) ---
    ...[30, 40, 50, 60, 70, 80, 90, 100, 110].map(speed => ({
        id: `362_${speed}`, code: `Skilt 362`,
        norwegianName: `Fartsgrense ${speed}`, englishName: `Speed limit ${speed} km/h`, vietnameseName: `Giới hạn tốc độ tối đa ${speed} km/h`,
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: `Images/362_${speed}.svg`,
        keyRulesVi: [
            `Tốc độ TỐI ĐA tuyệt đối được phép chạy là ${speed} km/h trong điều kiện thời tiết lý tưởng.`,
            "Ngã tư KHÔNG HỦY BỎ hiệu lực của biển này. Biển chỉ hết hiệu lực khi gặp biển báo tốc độ mới hoặc biển gạch chéo xám."
        ]
    })),

    // --- NHÓM 364: HẾT GIỚI HẠN TỐC ĐỘ ĐẶC BIỆT ---
    ...[30, 40, 50, 60, 70].map(speed => ({
        id: `364_${speed}`, code: `Skilt 364`,
        norwegianName: `Slutt på fartsgrense ${speed}`, englishName: `End of speed limit ${speed}`, vietnameseName: `Hết giới hạn tốc độ ${speed} km/h`,
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: `Images/364_${speed}.svg`,
        keyRulesVi: [
            `Kết thúc mức giới hạn ${speed} km/h. Tốc độ quay trở về MỨC MẶC ĐỊNH CHUNG của Na Uy.`,
            "Mức mặc định: Trong khu dân cư là 50 km/h; Ngoài khu dân cư (đồng quê/rừng) là 80 km/h."
        ],
        testQuestions: [
            "Đề thi: Bạn vừa đi qua biển xám gạch chéo này ở khu vực đồng quê. Tốc độ tối đa bạn được phép chạy lúc này là bao nhiêu? -> Đáp án: 80 km/h (Mức mặc định ngoài khu dân cư)."
        ]
    })),

    // --- NHÓM 366-368: KHU VỰC TỐC ĐỘ (SONE) ---
    {
        id: "366_0", code: "Skilt 366",
        norwegianName: "Fartsgrensesone 30", englishName: "Speed limit zone 30", vietnameseName: "Khu vực giới hạn tốc độ (Sone 30)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/366_0.svg",
        keyRulesVi: [
            "Thiết lập giới hạn tốc độ 30 km/h cho TOÀN BỘ một khu vực mạng lưới đường (các ngõ ngách bên trong).",
            "Khi rẽ qua các ngã tư bên trong khu vực này, bạn sẽ KHÔNG thấy cắm lại biển, nhưng lệnh cấm VẪN TỒN TẠI."
        ]
    },
    {
        id: "368_0", code: "Skilt 368",
        norwegianName: "Slutt på fartsgrensesone", englishName: "End of speed limit zone", vietnameseName: "Hết khu vực giới hạn tốc độ Sone",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/368_0.svg",
        keyRulesVi: ["Kết thúc hiệu lực của toàn bộ mạng lưới đường giới hạn Sone."]
    },

    // --- NHÓM 370-378: DỪNG, ĐỖ VÀ SONE ĐỖ XE ---
    {
        id: "370_0", code: "Skilt 370",
        norwegianName: "Stans forbudt", englishName: "No stopping", vietnameseName: "Cấm dừng và cấm đỗ xe (Dấu X)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/370_0.svg",
        keyRulesVi: [
            "Biển có HAI vạch chéo tạo thành dấu X đỏ. Cấm ngặt nghèo nhất.",
            "BẠN KHÔNG ĐƯỢC PHÉP DỪNG XE TỰ NGUYỆN. Dù chỉ tấp vào lề 5 giây để thả hành khách nhảy xuống cũng bị phạt nặng."
        ]
    },
    {
        id: "372_0", code: "Skilt 372",
        norwegianName: "Parkering forbudt", englishName: "No parking", vietnameseName: "Cấm đỗ xe (Một vạch chéo)",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/372_0.svg",
        keyRulesVi: [
            "Biển có MỘT vạch chéo đỏ. Cấm đỗ xe (tắt máy, bỏ xe đi nơi khác).",
            "ĐƯỢC PHÉP DỪNG XE trong thời gian ngắn để hành khách lên/xuống hoặc bốc dỡ đồ cồng kềnh, tài xế phải ở cạnh xe."
        ]
    },
    {
        id: "376_1",
        code: "Skilt 376.1",
        norwegianName: "Parkeringssone",
        englishName: "Parking zone",
        vietnameseName: "Khu vực SONE được phép đỗ xe",
        category: "prohibition",
        categoryNameVi: "Biển cấm",
        imageSrc: "Images/376_1.svg",
        keyRulesVi: [
            "Được phép đỗ xe trong toàn bộ khu vực này, miễn là tuân thủ các quy tắc đỗ xe cơ bản (như đỗ cách ngã tư 5m).",
            "Trong khung giờ 08:00 - 18:00 các ngày thường (Thứ 2 - Thứ 6), CHỈ ĐƯỢC ĐỖ TỐI ĐA 1 TIẾNG.",
            "Ngoài khung giờ trên và vào các ngày cuối tuần, bạn được phép đỗ xe tự do không giới hạn thời gian."
        ]
    },
    {
        id: "376_2", code: "Skilt 376.2",
        norwegianName: "Parkeringsforbudsone", englishName: "No parking zone", vietnameseName: "Khu vực SONE cấm đỗ xe",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/376_2.svg",
        keyRulesVi: [
            "Nghiêm cấm đỗ xe trong TOÀN BỘ khu vực.",
            "Bạn CHỈ được đỗ bên trong các ô sơn kẻ vạch trắng đã được quy hoạch sẵn (Merket oppstillingsplass)."
        ]
    },
    {
        id: "376_2a",
        code: "Skilt 376.2a",
        norwegianName: "Sone med parkeringsforbud og tidsbegrensning",
        englishName: "No parking zone with time limit",
        vietnameseName: "Khu vực SONE cấm đỗ xe + Có khung giờ",
        category: "prohibition",
        categoryNameVi: "Biển cấm",
        imageSrc: "Images/376_2a.svg",
        keyRulesVi: [
            "Lệnh cấm đỗ xe có hiệu lực bao trùm trên TOÀN BỘ các con đường trong khu vực này (chỉ kết thúc khi gặp biển Hết Zone).",
            "Lệnh cấm CHỈ ÁP DỤNG TRONG KHUNG GIỜ ghi trên biển (VD: 08:00 - 18:00 ngày thường). Nằm ngoài khung giờ này, bạn được phép đỗ xe tự do.",
            "ĐẶC BIỆT: Vì đây chỉ là biển cấm ĐỖ XE, nên ngay cả trong khung giờ bị cấm, bạn VẪN ĐƯỢC PHÉP tấp xe vào lề để Dừng xe (Stop) đón/trả khách hoặc bốc dỡ hàng hóa liên tục."
        ]
    },
    {
        id: "378_1", code: "Skilt 378.1",
        norwegianName: "Slutt på parkeringssone", englishName: "End of parking zone", vietnameseName: "Hết khu vực Sone được phép đỗ",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/378_1.svg",
        keyRulesVi: ["Kết thúc mạng lưới đường cho phép đỗ xe."]
    },
    {
        id: "378_2", code: "Skilt 378.2",
        norwegianName: "Slutt på parkeringsforbudsone", englishName: "End of no parking zone", vietnameseName: "Hết khu vực Sone cấm đỗ xe",
        category: "prohibition", categoryNameVi: "Biển cấm", imageSrc: "Images/378_2.svg",
        keyRulesVi: ["Kết thúc lệnh cấm đỗ xe toàn khu vực."]
    },
   
    // ==========================================
    // NHÓM 3: BIỂN HIỆU LỆNH (PÅBUDSSKILT - CHI TIẾT)
    // Đặc điểm: Hình tròn, nền xanh lam, mũi tên trắng.
    // ==========================================
    // ==========================================
    // NHÓM 4: BIỂN HIỆU LỆNH BẮT BUỘC (PÅBUDSSKILT - NHÓM 400)
    // Đặc điểm: Hình tròn, nền xanh lam, mũi tên trắng.
    // Ý nghĩa: Có tính áp đặt cao nhất, BẮT BUỘC phải thực hiện, không có ngoại lệ.
    // ==========================================
    {
        id: "402.1",
        code: "Skilt 402.1",
        norwegianName: "Påbudt kjøreretning - Høyre",
        englishName: "Compulsory direction - Right",
        vietnameseName: "Hướng đi bắt buộc - Phải rẽ phải",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/402_1.svg",
        keyRulesVi: [
            "Lệnh bắt buộc: Tại ngã tư hoặc nút giao ngay phía trước, tất cả các phương tiện CHỈ ĐƯỢC PHÉP rẽ sang phải.",
            "Lệnh này đồng thời mang tính chất cấm: Bạn KHÔNG được phép đi thẳng hay rẽ trái dưới bất kỳ hình thức nào."
        ],
        testQuestions: [
            "Đề thi: Bạn đang có ý định đi thẳng, nhưng tại ngã tư lại có cắm biển báo hình tròn xanh mũi tên chỉ sang phải này. Bạn phải làm gì? -> Đáp án: Bạn bắt buộc phải bật xi-nhan và rẽ phải. Nếu đi thẳng, bạn sẽ vi phạm luật nghiêm trọng (chạy sai luồng)."
        ]
    },
    {
        id: "402.2",
        code: "Skilt 402.2",
        norwegianName: "Påbudt kjøreretning - Venstre",
        englishName: "Compulsory direction - Left",
        vietnameseName: "Hướng đi bắt buộc - Phải rẽ trái",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/402_2.svg",
        keyRulesVi: [
            "Yêu cầu tất cả các phương tiện phải rẽ trái tại nút giao tiếp theo.",
            "Phải chú ý vị trí (positioning) của xe: Ép sát xe về phía bên trái của làn đường đang chạy trước khi thực hiện thao tác rẽ."
        ]
    },
    {
        id: "402.3",
        code: "Skilt 402.3",
        norwegianName: "Påbudt kjøreretning - Rett frem",
        englishName: "Compulsory direction - Straight ahead",
        vietnameseName: "Hướng đi bắt buộc - Phải đi thẳng",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/402_3.svg",
        keyRulesVi: [
            "Bắt buộc tiếp tục di chuyển thẳng qua ngã tư/nút giao.",
            "Biển này thường cắm ở các nút giao có đường nhánh hai bên nhưng việc rẽ vào đó sẽ gây cản trở giao thông hoặc đó là đường cấm."
        ],
        testQuestions: [
            "Đề thi: Nếu bạn thấy biển báo này ở ngã tư, nhưng GPS của xe lại chỉ dẫn bạn rẽ phải, bạn phải theo hiệu lệnh nào? -> Đáp án: Bắt buộc phải đi thẳng theo biển báo. Biển báo giao thông luôn có giá trị pháp lý cao hơn các thiết bị chỉ đường cá nhân."
        ]
    },
    {
        id: "402.4",
        code: "Skilt 402.4",
        norwegianName: "Påbudt kjøreretning - Sving til høyre",
        englishName: "Compulsory turn - Right",
        vietnameseName: "Bắt buộc lượn rẽ phải (ngay tại biển)",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/402_4.svg",
        keyRulesVi: [
            "Sự khác biệt với 402.1: Biển này có mũi tên cong, yêu cầu bạn phải lượn rẽ phải NGAY LẬP TỨC tại vị trí cắm biển (thường để tránh một dải phân cách, vòng bùng binh hoặc công trường).",
            "Nó không ám chỉ việc rẽ ở một ngã tư phía xa."
        ]
    },
    {
        id: "402.5",
        code: "Skilt 402.5",
        norwegianName: "Påbudt kjøreretning - Sving til venstre",
        englishName: "Compulsory turn - Left",
        vietnameseName: "Bắt buộc lượn rẽ trái (ngay tại biển)",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/402_5.svg",
        keyRulesVi: [
            "Bắt buộc lượn vòng sang bên trái ngay tại vị trí cắm biển để di chuyển theo đúng luồng thiết kế an toàn."
        ]
    },
    {
        id: "402.6",
        code: "Skilt 402.6",
        norwegianName: "Påbudt kjøreretning - Rett frem eller høyre",
        englishName: "Compulsory direction - Straight or right",
        vietnameseName: "Chỉ được đi thẳng hoặc rẽ phải",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/402_6.svg",
        keyRulesVi: [
            "Cung cấp cho bạn 2 lựa chọn hợp pháp tại nút giao: Đi thẳng qua hoặc rẽ phải.",
            "Bẫy luật: Lệnh này ngầm định CẤM bạn rẽ trái hoặc quay đầu."
        ]
    },
    {
        id: "402.7",
        code: "Skilt 402.7",
        norwegianName: "Påbudt kjøreretning - Rett frem eller venstre",
        englishName: "Compulsory direction - Straight or left",
        vietnameseName: "Chỉ được đi thẳng hoặc rẽ trái",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/402_7.svg",
        keyRulesVi: [
            "Bạn có 2 lựa chọn hợp pháp: Đi thẳng tiếp hoặc rẽ trái.",
            "Nghiêm cấm thao tác rẽ phải tại ngã tư này."
        ]
    },
    {
        id: "402.8",
        code: "Skilt 402.8",
        norwegianName: "Påbudt kjøreretning - Høyre eller venstre",
        englishName: "Compulsory direction - Right or left",
        vietnameseName: "Bắt buộc phải rẽ (Phải hoặc Trái)",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/402_8.svg",
        keyRulesVi: [
            "Thường gặp nhất ở các ngã ba hình chữ T. Bạn bắt buộc phải chọn rẽ trái hoặc rẽ phải.",
            "Nghiêm cấm đi thẳng (vì đi thẳng có thể lao vào rào chắn, tường hoặc đường ngược chiều)."
        ],
        testQuestions: [
            "Đề thi: Nếu bạn đối diện với biển báo này tại ngã ba chữ T, hành động nào dưới đây là sai? -> Đáp án: Cố tình đi thẳng."
        ]
    },
    {
        id: "404.1",
        code: "Skilt 404.1",
        norwegianName: "Påbudt kjørefelt - Passeres til høyre",
        englishName: "Keep right of obstacle",
        vietnameseName: "Bắt buộc đi vòng sang bên PHẢI chướng ngại vật",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/404_1.svg",
        keyRulesVi: [
            "Biển mũi tên chúi chéo xuống bên phải. Thường cắm trực tiếp trên các dải phân cách cứng hoặc tiểu đảo giao thông giữa đường.",
            "Yêu cầu luồng xe phải lách sang phía mép bên phải của cây cột biển báo này để tránh đâm vào chướng ngại vật."
        ],
        testQuestions: [
            "Đề thi: Biển báo cắm giữa đường có mũi tên chéo xuống phải này yêu cầu bạn làm gì? -> Đáp án: Giữ tay lái lách sang phía bên phải của biển báo để tránh đảo giao thông."
        ]
    },
    {
        id: "404.2",
        code: "Skilt 404.2",
        norwegianName: "Påbudt kjørefelt - Passeres til venstre",
        englishName: "Keep left of obstacle",
        vietnameseName: "Bắt buộc đi vòng sang bên TRÁI chướng ngại vật",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/404_2.svg",
        keyRulesVi: [
            "Biển mũi tên chúi chéo xuống bên trái.",
            "Ép buộc luồng xe phải lách qua phía bên trái của chướng ngại vật (thường gặp khi công trường thi công lấn ra giữa lòng đường)."
        ]
    },
    {
        id: "406",
        code: "Skilt 406",
        norwegianName: "Påbudt rundkjøring",
        englishName: "Compulsory roundabout",
        vietnameseName: "Vòng xuyến bắt buộc",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/406_0.svg",
        keyRulesVi: [
            "Biển xanh với 3 mũi tên nối đuôi tạo thành vòng tròn.",
            "Lệnh bắt buộc: Mọi luồng xe tiến vào ngã tư đều phải ôm bùng binh và di chuyển theo chiều ngược chiều kim đồng hồ."
        ],
        testQuestions: [
            "Đề thi: Hướng lưu thông hợp pháp duy nhất khi nhìn thấy biển báo vòng xuyến màu xanh này là gì? -> Đáp án: Di chuyển theo hướng ngược chiều kim đồng hồ xung quanh đảo trung tâm."
        ]
    },
    {
        id: "408",
        code: "Skilt 408",
        norwegianName: "Påbudt kjøreretning (flere felt)",
        englishName: "Compulsory direction for lane",
        vietnameseName: "Hướng đi bắt buộc cho làn đường",
        category: "mandatory",
        categoryNameVi: "Biển hiệu lệnh",
        imageSrc: "Images/408.svg",
        keyRulesVi: [
            "Biển hình chữ nhật màu xanh nằm ngang với các mũi tên nối tiếp.",
            "Thường được sử dụng để điều hướng luồng giao thông bắt buộc di chuyển sang các làn đường hoặc tuyến đường song song nhất định (hay gặp ở các khu vực đường phức tạp hoặc trạm thu phí)."
        ]
    },       
    // ==========================================
    // NHÓM 4: BIỂN CHỈ DẪN (OPPLYSNINGSSKILT - NHÓM 500)
    // Đặc điểm: Hình vuông/chữ nhật, nền xanh lam.
    // Ý nghĩa: Cung cấp thông tin về quy định sử dụng làn đường, loại đường và tiện ích.
    // ==========================================

    // --- PHÂN NHÓM: CAO TỐC & ĐƯỜNG DÀNH RIÊNG ---
    {
        id: "502",
        code: "Skilt 502",
        norwegianName: "Motorveg",
        englishName: "Motorway",
        vietnameseName: "Đường cao tốc (Motorveg)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/502_0.svg",
        keyRulesVi: [
            "Đánh dấu điểm bắt đầu của đường cao tốc tiêu chuẩn. Các luật nghiêm ngặt bắt đầu áp dụng: Cấm người đi bộ, xe đạp, xe gắn máy (moped) và máy kéo.",
            "Điều kiện xe: Xe tham gia phải có khả năng thiết kế chạy được trên 40 km/h trên đường bằng.",
            "Cấm tuyệt đối: Quay đầu xe, lùi xe, hoặc dừng đỗ xe trên lòng đường. Làn khẩn cấp bên phải chỉ được dùng khi xe hỏng hoặc có sự cố y tế."
        ],
        testQuestions: [
            "Đề thi: Bạn lỡ chạy quá lối ra (exit) của mình trên đoạn đường có biển Motorveg. Hành động đúng luật là gì? -> Đáp án: Tiếp tục lái xe đi thẳng tới lối ra tiếp theo. Cấm tuyệt đối việc lùi hoặc quay đầu trên cao tốc."
        ]
    },
    {
        id: "503",
        code: "Skilt 503",
        norwegianName: "Motortrafikkveg",
        englishName: "Expressway",
        vietnameseName: "Đường ô tô tốc độ cao (Motortrafikkveg)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/503_0.svg",
        keyRulesVi: [
            "Biển vẽ hình xe ô tô nhìn từ phía trước. Báo hiệu đường dành riêng cho xe cơ giới (đường gom nhanh).",
            "Mọi quy tắc cấm (cấm xe đạp, đi bộ, lùi xe...) áp dụng hoàn toàn GIỐNG HỆT như đường cao tốc Motorveg.",
            "Sự khác biệt: Nó thường chỉ có 2 làn (1 làn mỗi chiều) và không có dải phân cách cứng ở giữa như Motorveg."
        ]
    },
    {
        id: "504",
        code: "Skilt 504",
        norwegianName: "Slutt på motorveg",
        englishName: "End of motorway",
        vietnameseName: "Hết đường cao tốc",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/504_0.svg",
        keyRulesVi: ["Biển Motorveg bị gạch chéo đỏ. Báo hiệu kết thúc đường cao tốc, quay về quy tắc giao thông đường bộ bình thường."]
    },
    {
        id: "505",
        code: "Skilt 505",
        norwegianName: "Slutt på motortrafikkveg",
        englishName: "End of expressway",
        vietnameseName: "Hết đường ô tô tốc độ cao",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/505_0.svg",
        keyRulesVi: ["Biển Motortrafikkveg bị gạch chéo đỏ. Kết thúc đường dành riêng cho ô tô."]
    },

    // --- PHÂN NHÓM: LÀN ĐƯỜNG ƯU TIÊN ---
    {
        id: "508.1",
        code: "Skilt 508.1",
        norwegianName: "Kollektivfelt",
        englishName: "Bus lane",
        vietnameseName: "Làn đường ưu tiên (Xe buýt)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/508_1.svg",
        keyRulesVi: [
            "Làn đường dành riêng cho xe buýt, xe mô tô 2 bánh, moped và xe đạp.",
            "XE ĐIỆN (Elbil): Tại Na Uy, xe điện mặc định ĐƯỢC PHÉP đi vào làn này để tránh tắc đường (trừ khi có biển phụ giới hạn giờ hoặc bắt buộc phải chở 2 người trở lên '2+').",
            "Xe ô tô chạy xăng/dầu bình thường tuyệt đối không được dùng làn này để đi thẳng hoặc vượt, chỉ được đè vạch cắt ngang qua khi sắp rẽ phải."
        ],
        testQuestions: [
            "Đề thi: Bạn đang lái xe điện (Elbil) một mình. Khi nào bạn KHÔNG ĐƯỢC đi vào làn Kollektivfelt? -> Đáp án: Khi bên dưới biển có gắn thêm tấm biển phụ ghi 'Gjelder ikke elbil' (Không áp dụng cho xe điện) hoặc biển phụ '2+' (Yêu cầu phải có từ 2 người trở lên trên xe)."
        ]
    },
    {
        id: "508.2",
        code: "Skilt 508.2",
        norwegianName: "Kollektivfelt (Buss og Taxi)",
        englishName: "Bus and taxi lane",
        vietnameseName: "Làn ưu tiên (Xe buýt và Taxi)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/508_2.svg",
        keyRulesVi: ["Giống biển 508.1 nhưng cấp quyền ưu tiên thêm cho xe Taxi đang làm nhiệm vụ."]
    },
    {
        id: "509",
        code: "Skilt 509",
        norwegianName: "Samkjøringsfelt",
        englishName: "Carpool lane (HOV)",
        vietnameseName: "Làn đường đi chung xe (Carpool / 2+)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/509_0.svg",
        keyRulesVi: [
            "Làn đường dành riêng cho xe buýt, taxi và ô tô con có chở TỪ 2 NGƯỜI TRỞ LÊN (tính cả tài xế).",
            "Mục đích để khuyến khích đi chung xe, giảm ùn tắc. Nếu bạn đi 1 mình (xe xăng), cấm tuyệt đối không được vào."
        ]
    },
    {
        id: "510.1",
        code: "Skilt 510.1",
        norwegianName: "Slutt på kollektivfelt",
        englishName: "End of bus lane",
        vietnameseName: "Hết làn ưu tiên",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/510_1.svg",
        keyRulesVi: ["Biển gạch chéo đỏ. Làn đường ưu tiên đã kết thúc, mọi loại xe đều được phép sử dụng làn đường này."]
    },

    // --- PHÂN NHÓM: ĐƯỜNG ĐI BỘ & XE ĐẠP ---
    {
        id: "516",
        code: "Skilt 516",
        norwegianName: "Gangfelt",
        englishName: "Pedestrian crossing (Sign)",
        vietnameseName: "Vạch qua đường cho người đi bộ",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/516_H.svg",
        keyRulesVi: [
            "Biển chỉ dẫn vị trí ĐANG CÓ vạch kẻ đường cho người đi bộ (vạch ngựa vằn).",
            "Quyền ưu tiên tuyệt đối: Xe ô tô phải nhường đường ngay lập tức khi thấy có người đứng ở vỉa hè chuẩn bị qua đường.",
            "Luật đỗ xe: Cấm dừng/đỗ xe ngay trên vạch và trong phạm vi 5 mét TRƯỚC vạch để tránh che khuất tầm nhìn."
        ],
        testQuestions: [
            "Đề thi: Quy định về việc đỗ xe xung quanh khu vực có vạch người đi bộ là gì? -> Đáp án: Cấm đỗ xe ngay trên vạch và trong khoảng 5 mét TRƯỚC vạch (nhưng được phép đỗ ngay SAU vạch nếu không có biển cấm khác)."
        ]
    },
    {
        id: "518",
        code: "Skilt 518",
        norwegianName: "Gangveg",
        englishName: "Pedestrian path",
        vietnameseName: "Đường dành riêng cho người đi bộ",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/518_0.svg",
        keyRulesVi: ["Cấm mọi loại phương tiện cơ giới và xe đạp lưu thông. Chỉ dành cho người đi bộ."]
    },
    {
        id: "520",
        code: "Skilt 520",
        norwegianName: "Sykkelveg",
        englishName: "Bicycle path",
        vietnameseName: "Đường dành riêng cho xe đạp",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/520_0.svg",
        keyRulesVi: ["Làn đường cách ly độc lập. Dành riêng cho xe đạp (và xe đạp điện nhỏ). Cấm ô tô và xe máy."]
    },
    {
        id: "522",
        code: "Skilt 522",
        norwegianName: "Gang- og sykkelveg",
        englishName: "Pedestrian and bicycle path",
        vietnameseName: "Đường dùng chung (Đi bộ & Xe đạp)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/522_0.svg",
        keyRulesVi: ["Đường hỗn hợp. Người đi xe đạp phải chú ý chạy tốc độ vừa phải và nhường đường cho người đi bộ."]
    },

    // --- PHÂN NHÓM: GIAO THÔNG ĐẶC BIỆT ---
    {
        id: "524",
        code: "Skilt 524",
        norwegianName: "Møteplass (Bokstav M)",
        englishName: "Passing place",
        vietnameseName: "Điểm tránh xe trên đường hẹp (Chữ M)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/524_0.svg",
        keyRulesVi: [
            "Rất quan trọng ở Na Uy: Biển hình vuông xanh có chữ M (Møteplass). Thường cắm ở các đường đèo núi hẹp chỉ có 1 làn xe.",
            "Ý nghĩa: Chỉ ra một khoảng lùi (chỗ phình ra) của mặt đường để 2 xe ngược chiều có thể tránh nhau.",
            "Luật nhường: Xe nào đến gần chỗ phình chữ M hơn, hoặc xe đang đi xuống dốc, thường phải chủ động tấp vào chữ M để nhường cho xe kia đi qua."
        ],
        testQuestions: [
            "Đề thi: Bạn đang lái xe xuống dốc trên một con đường hẹp và thấy xe ngược chiều đang lên dốc. Chỗ tránh chữ M nằm ngay bên phải của bạn. Bạn phải làm gì? -> Đáp án: Bạn phải tấp vào điểm M, dừng hẳn xe lại và nhường đường cho xe đang leo dốc đi qua trước."
        ]
    },
    {
        id: "526.1",
        code: "Skilt 526.1",
        norwegianName: "Enveiskjøring",
        englishName: "One-way street",
        vietnameseName: "Đường một chiều (Mũi tên thẳng)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/526_1.svg",
        keyRulesVi: [
            "Biển chữ nhật xanh, mũi tên thẳng trắng. Chỉ dẫn đường một chiều.",
            "Quy tắc chuyển hướng: Khi chuẩn bị rẽ trái ở ngã tư tiếp theo trên con đường này, bạn phải ép sát xe vào mép lề đường BÊN TRÁI để tránh cản đường luồng xe đi thẳng bên phải."
        ],
        testQuestions: [
            "Đề thi: Vị trí đặt xe (positioning) đúng nhất khi bạn đang trên đường một chiều và muốn rẽ trái ở ngã tư phía trước là gì? -> Đáp án: Bật xi-nhan và ép xe sát vào mép lề đường bên trái trước khi tới ngã tư."
        ]
    },
    {
        id: "527.1",
        code: "Skilt 527.1",
        norwegianName: "Blindveg",
        englishName: "Dead end",
        vietnameseName: "Đường cụt / Ngõ cụt",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/527_1.svg",
        keyRulesVi: [
            "Biển chữ nhật xanh có biểu tượng thanh chắn đỏ ở đầu mũi tên trắng.",
            "Báo hiệu con đường phía trước không có lối thoát, nếu đi vào bạn sẽ bắt buộc phải tìm chỗ quay đầu xe để đi ra."
        ]
    },
    {
        id: "527.3",
        code: "Skilt 527.3",
        norwegianName: "Blindveg for biler",
        englishName: "Dead end for cars",
        vietnameseName: "Đường cụt với ô tô (Thông với xe đạp)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/527_3.svg",
        keyRulesVi: [
            "Báo hiệu đường cụt đối với xe cơ giới, nhưng phần đầu mũi tên có vẽ khe hở cho xe đạp và người đi bộ lọt qua."
        ]
    },

    // --- PHÂN NHÓM: LÀN ĐƯỜNG & KHU SINH HOẠT ---
    {
        id: "530.01",
        code: "Skilt 530.01",
        norwegianName: "Sammenfletting",
        englishName: "Merging traffic",
        vietnameseName: "Trộn làn giao thông (Nhập làn kiểu Dây kéo)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/530_01.svg",
        keyRulesVi: [
            "Biển trắng viền đen, vẽ 2 mũi tên hòa vào nhau. Thường đặt ở điểm kết thúc làn vượt hoặc khi đường bị bóp hẹp.",
            "Luật bắt buộc (Glidelåsprinsippet - Zip merge): TẤT CẢ các xe ở cả 2 làn phải hợp tác với nhau. Mỗi xe ở làn này phải nhường cho ĐÚNG MỘT XE ở làn kia đi vào, so le nhau như răng khóa kéo."
        ],
        testQuestions: [
            "Đề thi: Quy tắc 'răng khóa kéo' (Glidelåsprinsippet) tại khu vực có biển trộn làn này yêu cầu điều gì? -> Đáp án: Không có xe nào được ưu tiên tuyệt đối. Các tài xế ở hai làn phải hợp tác, mỗi xe nhường một xe luân phiên nhau tiến lên."
        ]
    },
    {
        id: "540",
        code: "Skilt 540",
        norwegianName: "Gatetun",
        englishName: "Home zone / Living street",
        vietnameseName: "Khu sinh hoạt chung (Gatetun)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/540_0.svg",
        keyRulesVi: [
            "Khu vực dân cư ưu tiên tuyệt đối cho người đi bộ và trẻ em vui chơi trên đường.",
            "Tốc độ: Ô tô chỉ được phép chạy bằng tốc độ người đi bộ (Gangfart - dưới 10 km/h).",
            "Đỗ xe: Tuyệt đối cấm đỗ xe ở bất kỳ đâu NGOẠI TRỪ các ô kẻ vạch dành riêng cho đỗ xe (Merket plass)."
        ]
    },
    {
        id: "548",
        code: "Skilt 548",
        norwegianName: "Gågate",
        englishName: "Pedestrian street",
        vietnameseName: "Phố đi bộ (Sone Gågate)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/548_0.svg",
        keyRulesVi: [
            "Nghiêm cấm mọi phương tiện cơ giới lưu thông, dành riêng cho người đi bộ mua sắm.",
            "Ngoại lệ: Xe giao hàng cấp thiết có thể được vào trong các khung giờ hẹp buổi sáng, nhưng phải bò chậm (Gangfart) và nhường 100% cho người đi bộ."
        ]
    },

    // --- PHÂN NHÓM: CAMERA & TIỆN ÍCH ---
    {
        id: "552",
        code: "Skilt 552",
        norwegianName: "Parkering (P)",
        englishName: "Parking",
        vietnameseName: "Bãi đỗ xe (Chữ P)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/552_0.svg",
        keyRulesVi: ["Chỉ dẫn khu vực bãi đỗ xe hợp pháp. Thường đi kèm biển phụ chỉ định cách đỗ hoặc trả phí."]
    },
    {
        id: "556",
        code: "Skilt 556",
        norwegianName: "Automatisk trafikkontroll (ATK)",
        englishName: "Speed camera",
        vietnameseName: "Camera bắn tốc độ tự động (Fotoboks)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/556_0.svg",
        keyRulesVi: [
            "Biển vẽ hình chiếc máy ảnh. Báo hiệu đoạn đường phía trước có lắp hộp camera chụp tốc độ.",
            "Tại Na Uy, biển này luôn được cắm công khai trước trạm camera. Tài xế cần kiểm tra ngay đồng hồ tốc độ (Speedometer) khi thấy biển này."
        ]
    },
    {
        id: "560",
        code: "Skilt 560",
        norwegianName: "Bomstasjon",
        englishName: "Toll plaza",
        vietnameseName: "Trạm thu phí qua đường (AutoPASS)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/560_2.svg",
        keyRulesVi: ["Hầu hết trạm bomstasjon ở Na Uy là tự động (AutoPASS). Bạn chỉ cần lái xe qua bình thường (không dừng lại), hệ thống sẽ quét thẻ từ hoặc chụp biển số để gửi hóa đơn về nhà."]
    },
    {
        id: "570.1H",
        code: "Skilt 570.1H",
        norwegianName: "Rømningsvei høyre",
        englishName: "Emergency exit right",
        vietnameseName: "Lối thoát hiểm bên phải (Trong hầm)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/570_1H.svg",
        keyRulesVi: [
            "Biển nền xanh lá cây, vẽ người chạy về hướng cửa. Rất quan trọng khi xảy ra cháy trong đường hầm.",
            "Biển có thêm số mét (ví dụ 150m) sẽ cho bạn biết khoảng cách ngắn nhất để chạy tới cửa thoát hiểm an toàn gần nhất."
        ]
    },
    
    // ==========================================
    // NHÓM 5: BIỂN DỊCH VỤ & TIỆN ÍCH (TJENESTESKILT - NHÓM 600)
    // Đặc điểm: Hình vuông/chữ nhật, nền màu xanh lam (Dịch vụ) hoặc màu Nâu (Du lịch).
    // Ý nghĩa: Chỉ dẫn các tiện ích hỗ trợ dọc đường.
    // ==========================================

    // --- KHẨN CẤP & CỨU HỘ ---
    {
        id: "601",
        code: "Skilt 601",
        norwegianName: "Radioutsending om trafikk",
        englishName: "Traffic radio information",
        vietnameseName: "Kênh phát thanh thông tin giao thông",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/601.svg",
        keyRulesVi: [
            "Cung cấp tần số radio khu vực. Khi gặp thời tiết xấu hoặc đường đèo núi bị phong tỏa, tài xế nên dò sóng đài radio này để nghe cập nhật tình trạng đường sá theo thời gian thực."
        ]
    },
    {
        id: "602",
        code: "Skilt 602",
        norwegianName: "Legevakt / Førstehjelp",
        englishName: "First aid / Medical center",
        vietnameseName: "Trạm y tế / Sơ cấp cứu",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/602.svg",
        keyRulesVi: ["Chỉ dẫn vị trí cơ sở y tế hoặc trạm sơ cứu gần nhất có khả năng xử lý tai nạn."]
    },
    {
        id: "605",
        code: "Skilt 605",
        norwegianName: "Nødtelefon",
        englishName: "Emergency telephone",
        vietnameseName: "Điện thoại khẩn cấp (SOS)",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/605.svg",
        keyRulesVi: [
            "Biển báo cực kỳ quan trọng trong đường hầm. Chỉ vị trí đặt bốt điện thoại khẩn cấp.",
            "Luật sinh tử: Khi gặp sự cố hoặc hỏa hoạn trong hầm, HÃY DÙNG ĐIỆN THOẠI NÀY thay vì gọi di động. Khi bạn nhấc máy, trung tâm (VTS) sẽ định vị được ngay vị trí của bạn và hệ thống sẽ tự động bật đèn đỏ đóng cửa hầm."
        ],
        testQuestions: [
            "Đề thi: Vì sao bạn nên ưu tiên sử dụng điện thoại SOS trong hầm thay vì gọi 110 bằng điện thoại di động cá nhân? -> Đáp án: Vì ngay khi nhấc máy SOS, trung tâm điều hành sẽ định vị được chính xác vị trí của bạn và tự động kích hoạt đóng cửa hầm ngăn xe khác đi vào."
        ]
    },
    {
        id: "606",
        code: "Skilt 606",
        norwegianName: "Brannslokningsapparat",
        englishName: "Fire extinguisher",
        vietnameseName: "Bình chữa cháy khẩn cấp",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/606.svg",
        keyRulesVi: [
            "Chỉ dẫn vị trí giá treo bình cứu hỏa trong đường hầm.",
            "Lưu ý: Ngay khi bạn nhấc bình chữa cháy ra khỏi giá treo, hệ thống báo cháy tự động của đường hầm sẽ được kích hoạt."
        ],
        testQuestions: [
            "Đề thi: Điều gì sẽ tự động xảy ra khi bạn tháo bình chữa cháy ra khỏi giá treo bên trong đường hầm? -> Đáp án: Tín hiệu báo động hỏa hoạn sẽ được gửi về trung tâm điều hành và đường hầm sẽ bị đóng lại."
        ]
    },
    {
        id: "608",
        code: "Skilt 608",
        norwegianName: "Bilverksted",
        englishName: "Car repair / Workshop",
        vietnameseName: "Xưởng sửa chữa ô tô / Gara",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/608.svg",
        keyRulesVi: ["Chỉ dẫn vị trí xưởng sửa chữa cơ khí dành cho xe cơ giới."]
    },

    // --- NHIÊN LIỆU & TRẠM DỪNG NGHỈ ---
    {
        id: "609",
        code: "Skilt 609",
        norwegianName: "Ladestasjon for elbil",
        englishName: "EV charging station",
        vietnameseName: "Trạm sạc xe điện (EV)",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/609.svg",
        keyRulesVi: ["Trạm cung cấp trạm sạc nhanh/chậm dành riêng cho ô tô điện."]
    },
    {
        id: "610_0",
        code: "Skilt 610",
        norwegianName: "Drivstoff (Bensin/Diesel)",
        englishName: "Fuel / Petrol station",
        vietnameseName: "Trạm xăng dầu",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/610_0.svg",
        keyRulesVi: ["Trạm cung cấp nhiên liệu truyền thống (xăng, dầu diesel)."]
    },
    {
        id: "611",
        code: "Skilt 611",
        norwegianName: "Tømmestasjon for bobil",
        englishName: "Emptying station for motorhomes",
        vietnameseName: "Trạm xả chất thải cho xe cắm trại",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/611.svg",
        keyRulesVi: ["Khu vực thiết kế riêng để xe ô tô nhà di động (Bobil/Campervan) xả nước thải sinh hoạt và đổ toilet hóa học đúng nơi quy định."]
    },
    {
        id: "613_1",
        code: "Skilt 613.1",
        norwegianName: "Rasteplass",
        englishName: "Rest area",
        vietnameseName: "Khu vực dừng chân nghỉ ngơi",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/613_1.svg",
        keyRulesVi: [
            "Biển vẽ hình cái cây và cái bàn. Chỉ dẫn bãi đỗ xe an toàn dọc đường quốc lộ để tài xế chợp mắt chống buồn ngủ.",
            "Lưu ý: Biển này chỉ có cây và bàn, nghĩa là trạm này KHÔNG CÓ nhà vệ sinh."
        ]
    },
    {
        id: "613_2",
        code: "Skilt 613.2",
        norwegianName: "Rasteplass med toalett",
        englishName: "Rest area with toilet",
        vietnameseName: "Trạm dừng chân có nhà vệ sinh",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/613_2.svg",
        keyRulesVi: ["Khu vực nghỉ ngơi có trang bị thêm nhà vệ sinh công cộng (ký hiệu WC)."]
    },

    // --- DU LỊCH & LƯU TRÚ (MÀU XANH & NÂU) ---
    {
        id: "618",
        code: "Skilt 618",
        norwegianName: "Campingplass",
        englishName: "Camping site",
        vietnameseName: "Khu cắm trại lều / Caravan",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/618.svg",
        keyRulesVi: ["Địa điểm dành cho việc dựng lều trại hoặc đỗ xe kéo rơ-moóc cắm trại qua đêm."]
    },
    {
        id: "621",
        code: "Skilt 621",
        norwegianName: "Bobilplass",
        englishName: "Motorhome parking",
        vietnameseName: "Bãi đỗ xe nhà di động (Bobil)",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/621.svg",
        keyRulesVi: ["Khu vực đỗ xe/lưu trú qua đêm được thiết kế cấp điện, nước riêng biệt cho xe Bobil (Motorhome)."]
    },
    {
        id: "635",
        code: "Skilt 635",
        norwegianName: "Turistinformasjon",
        englishName: "Tourist information",
        vietnameseName: "Trung tâm thông tin du lịch",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/635.svg",
        keyRulesVi: ["Biển chữ i. Cung cấp bản đồ, hướng dẫn và dịch vụ hỗ trợ cho khách du lịch."]
    },
    {
        id: "640_10",
        code: "Skilt 640.10",
        norwegianName: "Severdighet",
        englishName: "Tourist attraction",
        vietnameseName: "Danh lam thắng cảnh",
        category: "service",
        categoryNameVi: "Biển dịch vụ",
        imageSrc: "Images/640_10.svg",
        keyRulesVi: [
            "Biển hình vuông NỀN MÀU NÂU, có biểu tượng nút thắt vô tận (Loop square ⌘).",
            "Đặc trưng của Na Uy/Bắc Âu: Các biển báo có nền màu nâu luôn dùng để chỉ dẫn các địa điểm có giá trị về du lịch, văn hóa, lịch sử hoặc thiên nhiên đáng chú ý."
        ],
        testQuestions: [
            "Đề thi: Biển báo giao thông có nền màu nâu mang ý nghĩa chung là gì? -> Đáp án: Chỉ dẫn đường đến các địa điểm tham quan du lịch, danh lam thắng cảnh hoặc di tích văn hóa lịch sử."
        ]
    },
    // ==========================================
    // NHÓM 6: BIỂN CHỈ DẪN TUYẾN ĐƯỜNG (VEGVISNINGSSKILT - NHÓM 700)
    // Cực kỳ quan trọng: Học viên phải thuộc lòng ý nghĩa MÀU SẮC NỀN của biển báo.
    // ==========================================

    // --- HỆ THỐNG MÀU SẮC BIỂN CHỈ DẪN ---
    {
        id: "701",
        code: "Skilt 701 (Nền Vàng)",
        norwegianName: "Vegviser - Gul",
        englishName: "Direction sign - Yellow",
        vietnameseName: "Biển chỉ hướng - MÀU VÀNG",
        category: "information", // Dùng chung nhóm thông tin để lọc cho dễ
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/701.svg",
        keyRulesVi: [
            "MÀU VÀNG chữ Đen: Chỉ dẫn các tuyến đường chung, địa danh địa lý (thành phố, thị trấn) trên các tuyến đường quốc lộ hoặc đường tỉnh.",
            "Đây là màu sắc phổ biến nhất trên hệ thống đường bộ Na Uy."
        ],
        testQuestions: [
            "Đề thi: Trên biển chỉ dẫn, nền màu VÀNG chữ ĐEN được sử dụng cho mục đích gì? -> Đáp án: Chỉ dẫn hướng đi đến các địa danh địa lý chung, thành phố hoặc thị trấn."
        ]
    },
    {
        id: "705",
        code: "Skilt 705 (Nền Xanh Lam)",
        norwegianName: "Vegviser for motorveg - Blå",
        englishName: "Motorway direction sign - Blue",
        vietnameseName: "Biển chỉ hướng - MÀU XANH LAM",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/705.svg",
        keyRulesVi: [
            "MÀU XANH LAM chữ Trắng: Báo hiệu hướng đi này sẽ dẫn bạn tiến vào ĐƯỜNG CAO TỐC (Motorveg).",
            "Nếu bạn đang lái xe máy kéo hoặc xe moped, bạn KHÔNG ĐƯỢC rẽ theo hướng có biển màu xanh lam này."
        ]
    },
    {
        id: "729",
        code: "Skilt 729 (Nền Trắng)",
        norwegianName: "Vegviser - Hvit",
        englishName: "Local direction sign - White",
        vietnameseName: "Biển chỉ hướng - MÀU TRẮNG",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/729_0.svg",
        keyRulesVi: [
            "MÀU TRẮNG chữ Đen: Chỉ dẫn các địa điểm MANG TÍNH ĐỊA PHƯƠNG (ví dụ: trung tâm thành phố, nhà ga, khu dân cư, tên đường phố).",
            "Nó thường dùng để điều hướng bên trong nội ô của một thành phố."
        ]
    },
    {
        id: "741",
        code: "Skilt 741 (Nền Cam)",
        norwegianName: "Omkjøring - Oransje",
        englishName: "Detour sign - Orange",
        vietnameseName: "Biển chỉ hướng ĐƯỜNG VÒNG - MÀU CAM",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/741.svg",
        keyRulesVi: [
            "MÀU CAM chữ Đen: Báo hiệu tuyến đường chính đang bị phong tỏa (do tai nạn hoặc thi công) và bạn đang bị ép đi theo ĐƯỜNG VÒNG (Omkjøring).",
            "Bạn phải tuyệt đối tuân theo các biển mũi tên màu cam này cho đến khi gặp biển 'Hết đường vòng'."
        ],
        testQuestions: [
            "Đề thi: Nếu tuyến đường chính bị tai nạn và cảnh sát phong tỏa, các biển chỉ dẫn tạm thời dẫn bạn đi đường vòng sẽ có màu gì? -> Đáp án: Nền màu Cam chữ Đen."
        ]
    },

    // --- PHÂN LOẠI CẤP ĐỘ ĐƯỜNG (KÝ HIỆU SỐ) ---
    {
        id: "723.11",
        code: "Skilt 723.11",
        norwegianName: "Europaveg",
        englishName: "European route (E-road)",
        vietnameseName: "Đường xuyên Âu (Ví dụ: E6, E18)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/723_11.svg",
        keyRulesVi: [
            "Biển hình chữ nhật NỀN XANH LÁ CÂY, chữ Trắng.",
            "Dùng cho mạng lưới đường quốc tế Châu Âu (Europaveg). Đây thường là các trục đường huyết mạch lớn nhất tại Na Uy."
        ]
    },
    {
        id: "723.15",
        code: "Skilt 723.15",
        norwegianName: "Fylkesveg",
        englishName: "County road",
        vietnameseName: "Đường tỉnh / Hạt (Đường địa phương)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/723_15.svg",
        keyRulesVi: [
            "Biển hình chữ nhật NỀN TRẮNG, viền đen, chữ số Đen.",
            "Dùng cho các tuyến đường cấp Tỉnh/Hạt (Fylkesveg). Đường này thường nhỏ hơn, nhiều khúc cua và giới hạn tốc độ thấp hơn."
        ]
    },
    {
        id: "723.12",
        code: "Skilt 723.12",
        norwegianName: "Henvisning til Europaveg",
        englishName: "Route leading to E-road",
        vietnameseName: "Đường dẫn RA tuyến đường chính (Viền đứt nét)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/723_12.svg",
        keyRulesVi: [
            "Cực kỳ hay thi: Nếu biển số đường (ví dụ E6) có ĐƯỜNG VIỀN KẺ ĐỨT NÉT (Stiplet ramme).",
            "Ý nghĩa: Bạn HIỆN TẠI KHÔNG nằm trên đường E6. Con đường bạn đang chạy chỉ là đường nhánh dẫn bạn đi ra (hướng tới) đường E6 mà thôi."
        ],
        testQuestions: [
            "Đề thi: Biển báo có chữ E6 nhưng viền xung quanh lại được kẻ đứt khúc (chấm chấm) mang ý nghĩa gì? -> Đáp án: Báo hiệu tuyến đường hiện tại sẽ dẫn bạn kết nối vào đường E6 ở phía trước."
        ]
    },

    // --- CÁC BIỂN BÁO QUAN TRỌNG KHÁC ---
    {
        id: "723.71",
        code: "Skilt 723.71",
        norwegianName: "Bomveg (Kr)",
        englishName: "Toll road symbol",
        vietnameseName: "Biểu tượng đường có Thu Phí (Chữ Kr)",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/723_71.svg",
        keyRulesVi: [
            "Ký hiệu 'Kr' (Kroner) nằm bên cạnh mũi tên rẽ.",
            "Báo hiệu hướng đi này sẽ dẫn bạn vào tuyến đường có trạm thu phí tự động (Bomstasjon). Nếu không muốn mất tiền, bạn phải chọn hướng đi khác."
        ]
    },
    {
        id: "767",
        code: "Skilt 767",
        norwegianName: "Symbol for parkering",
        englishName: "Parking symbol",
        vietnameseName: "Khu vực Bãi đỗ xe",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/767_0.svg",
        keyRulesVi: [
            "Chữ P màu trắng trên nền xanh. Thường được ghép vào các biển báo hướng dẫn để chỉ đường tới bãi đỗ xe công cộng."
        ]
    },
    {
        id: "792.30",
        code: "Skilt 792.30",
        norwegianName: "Videoregistrering for bom",
        englishName: "Video toll registration",
        vietnameseName: "Khu vực quét thẻ / Camera thu phí",
        category: "information",
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/792_30.svg",
        keyRulesVi: [
            "Biểu tượng cái camera chụp phát sóng. Được đặt trước các trạm thu phí hoặc khu vực bến phà tự động.",
            "Bạn không cần dừng lại, hệ thống sẽ tự động quét biển số xe và gửi hóa đơn."
        ]
    },
    // ==========================================
    // NHÓM 6: BIỂN PHỤ (UNDERSKILT - NHÓM 800)
    // Cực kỳ quan trọng: Biển phụ luông cắm DƯỚI biển chính, dùng để bổ sung, giới hạn hoặc giải thích ý nghĩa cho biển chính. 
    // Biển chính chỉ có hiệu lực theo đúng những gì biển phụ quy định.
    // ==========================================
    {
        id: "802",
        code: "Skilt 802",
        norwegianName: "Avstand",
        englishName: "Distance ahead",
        vietnameseName: "Biển phụ khoảng cách (Điểm bắt đầu)",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/802_0.svg",
        keyRulesVi: [
            "Biển chỉ có MỘT con số (ví dụ: 100 m, 500 m) và KHÔNG CÓ mũi tên hai bên.",
            "Ý nghĩa: Chỉ ra khoảng cách từ vị trí cắm biển báo cho đến KHI BẮT ĐẦU gặp mối nguy hiểm hoặc quy định của biển chính.",
            "Ví dụ: Biển 'Gờ giảm tốc' + biển phụ '100m' -> Đi thêm 100m nữa bạn mới gặp gờ giảm tốc."
        ],
        testQuestions: [
            "Đề thi: Nếu dưới biển báo nguy hiểm (Tam giác đỏ) có gắn biển phụ ghi chữ '150 m' (không có mũi tên), bạn hiểu thế nào? -> Đáp án: Mối nguy hiểm đó nằm ở vị trí cách nơi cắm biển đúng 150 mét về phía trước."
        ]
    },
    {
        id: "804",
        code: "Skilt 804",
        norwegianName: "Utstrekning",
        englishName: "Stretch / Distance over which applies",
        vietnameseName: "Biển phụ phạm vi / Chiều dài tác dụng",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/804_0.svg",
        keyRulesVi: [
            "Nhận diện: Có con số kèm theo HAI MŨI TÊN CHỈ LÊN ở hai bên (ví dụ: ↑ 1 km ↑).",
            "Ý nghĩa: Biển chính có hiệu lực KÉO DÀI LIÊN TỤC trong suốt quãng đường đó.",
            "Ví dụ: Biển 'Cấm vượt' + biển phụ '↑ 2 km ↑' -> Lệnh cấm vượt bắt đầu ngay từ đây và kéo dài suốt 2 km tiếp theo."
        ],
        testQuestions: [
            "Đề thi: Sự khác nhau giữa biển phụ '300m' và biển phụ '↑ 300m ↑' là gì? -> Đáp án: '300m' nghĩa là đi 300m nữa mới gặp nguy hiểm. Còn '↑ 300m ↑' nghĩa là nguy hiểm kéo dài liên tục trong suốt 300m bắt đầu từ đây."
        ]
    },
    {
        id: "806",
        code: "Skilt 806",
        norwegianName: "Tidsperiode",
        englishName: "Time period",
        vietnameseName: "Biển phụ thời gian áp dụng",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/806_0.svg",
        keyRulesVi: [
            "Biển quan trọng nhất cần nhớ quy tắc màu sắc con số:",
            "1. Chữ màu ĐEN không có ngoặc: Áp dụng cho các ngày trong tuần (Thứ 2 - Thứ 6).",
            "2. Chữ màu ĐEN nằm trong ngoặc đơn (...): Áp dụng cho ngày Thứ 7.",
            "3. Chữ màu ĐỎ: Áp dụng cho ngày Chủ Nhật và các ngày lễ quốc gia (Helligdager).",
            "Lưu ý bẫy: Nếu bạn đi qua biển này vào thời điểm NẰM NGOÀI các khung giờ ghi trên biển, thì quy định của biển chính KHÔNG CÓ HIỆU LỰC (bạn không cần tuân theo biển chính)."
        ],
        testQuestions: [
            "Đề thi: Bạn nhìn thấy biển 'Cấm đỗ xe' đi kèm biển phụ ghi: 08-16 / (08-14). Hôm nay là Thứ 7, lúc 15:00. Bạn có được đỗ xe không? -> Đáp án: CÓ. Vì giờ cấm ngày Thứ 7 chỉ từ 08:00 đến 14:00. Khung giờ 15:00 nằm ngoài giờ cấm, nên biển cấm không có tác dụng.",
            "Đề thi: Những con số màu đỏ trên biển phụ chỉ thời gian đại diện cho ngày nào? -> Đáp án: Ngày Chủ Nhật và các ngày Lễ chính thức (Helligdager)."
        ]
    },
    {
        id: "807.1",
        code: "Skilt 807.1",
        norwegianName: "Gjelder personbil",
        englishName: "Applies to passenger cars",
        vietnameseName: "Biển phụ giới hạn đối tượng: Áp dụng cho ô tô con",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/807_1.svg",
        keyRulesVi: [
            "Biển phụ vẽ hình chiếc xe ô tô con (hoặc xe buýt, xe tải, xe đạp...).",
            "Nghĩa vụ: Ý nghĩa của biển báo cắm bên trên CHỈ ÁP DỤNG ĐỐI VỚI loại phương tiện được vẽ trên biển phụ này.",
            "Ví dụ: Biển Cấm Đỗ Xe + Biển phụ hình Ô tô con -> Ô tô con bị cấm đỗ, nhưng xe máy hoặc xe tải thì vẫn ĐƯỢC PHÉP đỗ."
        ],
        testQuestions: [
            "Đề thi: Dưới biển 'Cấm rẽ trái' có gắn biển phụ vẽ hình một chiếc xe buýt. Điều này có nghĩa là gì? -> Đáp án: Lệnh cấm rẽ trái CHỈ áp dụng đối với xe buýt. Nếu bạn lái xe ô tô con, bạn hoàn toàn được phép rẽ trái."
        ]
    },
    {
        id: "808_42b",
        code: "Skilt 808.42b",
        norwegianName: "Gjelder ikke...",
        englishName: "Does not apply to...",
        vietnameseName: "Biển phụ ngoại lệ (Gjelder ikke)",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/808_42b.svg",
        keyRulesVi: [
            "Có dòng chữ 'Gjelder ikke' (Không áp dụng đối với).",
            "Đây là biển loại trừ. Ý nghĩa của biển chính sẽ áp dụng cho tất cả mọi phương tiện, NGOẠI TRỪ phương tiện được ghi tên/vẽ hình trên tấm biển phụ này.",
            "Ví dụ: Biển Cấm rẽ phải + Biển phụ 'Gjelder ikke buss' -> Tất cả mọi người bị cấm rẽ phải, RIÊNG xe buýt thì được rẽ."
        ],
        testQuestions: [
            "Đề thi: Bạn lái xe điện (Elbil) và gặp biển báo cấm đi thẳng, có gắn kèm biển phụ ghi 'Gjelder ikke buss og taxi'. Bạn có được đi thẳng không? -> Đáp án: Không được. Ngoại lệ chỉ dành cho xe buýt và taxi, xe điện vẫn phải tuân theo biển cấm chính."
        ]
    },
    {
        id: "810",
        code: "Skilt 810",
        norwegianName: "Retningsangivelse",
        englishName: "Direction arrow",
        vietnameseName: "Biển phụ hướng áp dụng (Mũi tên)",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/810_R.svg",
        keyRulesVi: [
            "Thường đi kèm với biển Cấm dừng / Cấm đỗ.",
            "Mũi tên chỉ về phía nào (trái, phải, hay cả hai bên), thì quy định cấm sẽ có hiệu lực về phía đó so với cột biển báo.",
            "Mũi tên chúi xuống (↓): Lệnh cấm kết thúc tại cây cột này (áp dụng cho đoạn đường TRƯỚC cây cột). Mũi tên hướng lên (↑): Lệnh cấm bắt đầu từ cây cột này trở đi."
        ],
        testQuestions: [
            "Đề thi: Dưới biển cấm đỗ xe có một biển phụ hình mũi tên chỉ thẳng xuống đất (↓). Ý nghĩa của nó là gì? -> Đáp án: Lệnh cấm đỗ xe áp dụng cho đoạn đường NẰM TRƯỚC cây cột này, và kết thúc ngay tại cây cột."
        ]
    },

    // ==========================================
    // NHÓM 7: CỌC TIÊU & BIỂN CẢNH BÁO KHÁC (MARKERING / ANNET)
    // ==========================================
    // ==========================================
    // NHÓM 7: BIỂN PHỤ (UNDERSKILT - NHÓM 800)
    // Cực kỳ quan trọng: Biển phụ luôn được cắm DƯỚI một biển chính. Nó không đứng một mình.
    // Ý nghĩa: Nó DÙNG ĐỂ THAY ĐỔI, GIỚI HẠN HOẶC GIẢI THÍCH ý nghĩa cho biển chính phía trên nó.
    // ==========================================

    // --- KHOẢNG CÁCH & THỜI GIAN ---
    {
        id: "802",
        code: "Skilt 802",
        norwegianName: "Avstand",
        englishName: "Distance ahead",
        vietnameseName: "Khoảng cách đến điểm bắt đầu",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/802_0.svg",
        keyRulesVi: [
            "Biển chỉ có MỘT con số (ví dụ: 100 m) và KHÔNG CÓ mũi tên chĩa lên.",
            "Ý nghĩa: Bạn phải đi thêm đúng khoảng cách đó nữa thì mới BẮT ĐẦU gặp hiệu lực của biển chính.",
            "Ví dụ: Biển 'Gờ giảm tốc' + biển phụ '100m' -> Đi thêm 100m nữa mới bắt đầu có gờ giảm tốc."
        ]
    },
    {
        id: "804",
        code: "Skilt 804",
        norwegianName: "Utstrekning",
        englishName: "Stretch / Extent",
        vietnameseName: "Phạm vi / Chiều dài tác dụng",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/804_0.svg",
        keyRulesVi: [
            "Nhận diện: Có con số kèm theo HAI MŨI TÊN CHỈ LÊN ở hai bên (ví dụ: ↑ 1 km ↑).",
            "Ý nghĩa: Hiệu lực của biển chính KÉO DÀI LIÊN TỤC trong suốt quãng đường đó.",
            "Ví dụ: Biển 'Trơn trượt' + biển phụ '↑ 2 km ↑' -> Đoạn đường trơn trượt kéo dài suốt 2 km tính từ cây cột này."
        ],
        testQuestions: [
            "Đề thi: Sự khác nhau giữa biển phụ '300m' và biển phụ '↑ 300m ↑' là gì? -> Đáp án: '300m' nghĩa là đi 300m nữa mới gặp nguy hiểm. Còn '↑ 300m ↑' nghĩa là nguy hiểm kéo dài liên tục trong suốt 300m tính từ đây."
        ]
    },
    {
        id: "806",
        code: "Skilt 806",
        norwegianName: "Tidsperiode",
        englishName: "Time period",
        vietnameseName: "Khung giờ áp dụng",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/806_0.svg",
        keyRulesVi: [
            "Quy tắc ĐỌC MÀU CHỮ SỐ (Bắt buộc phải thuộc):",
            "1. Chữ ĐEN KHÔNG NGOẶC: Áp dụng cho Thứ 2 đến Thứ 6 (Hverdag).",
            "2. Chữ ĐEN TRONG NGOẶC ĐƠN (...): Chỉ áp dụng cho ngày Thứ 7.",
            "3. Chữ MÀU ĐỎ: Chỉ áp dụng cho ngày Chủ Nhật và các ngày Lễ Đỏ (Helligdager).",
            "Bẫy: Nếu thời điểm hiện tại của bạn NẰM NGOÀI khung giờ ghi trên biển, thì quy định của biển chính bị VÔ HIỆU HÓA."
        ],
        testQuestions: [
            "Đề thi: Dưới biển 'Cấm đỗ xe' có biển phụ ghi: 08-16 / (08-14). Hôm nay là Thứ 7, lúc 15:00. Bạn có được đỗ xe không? -> Đáp án: ĐƯỢC PHÉP ĐỖ. Vì lệnh cấm ngày Thứ 7 chỉ áp dụng từ 08:00 đến 14:00. Lúc 15:00 lệnh cấm không còn hiệu lực."
        ]
    },

    // --- ĐỐI TƯỢNG ÁP DỤNG & NGOẠI TRỪ ---
    {
        id: "807.1",
        code: "Skilt 807",
        norwegianName: "Gjelder bestemt kjøretøygruppe",
        englishName: "Applies to specific vehicle",
        vietnameseName: "CHỈ áp dụng cho phương tiện được vẽ",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/807_1.svg",
        keyRulesVi: [
            "Biển vẽ hình một loại xe cụ thể (Ô tô con, xe buýt, xe đạp...).",
            "Quy tắc: Biển chính CẮM Ở TRÊN chỉ có hiệu lực đối với LOẠI XE ĐƯỢC VẼ ở biển phụ bên dưới.",
            "Ví dụ: Biển Cấm Đỗ Xe + Biển phụ hình Xe Tải -> Chỉ cấm xe tải đỗ, ô tô con vẫn được đỗ bình thường."
        ]
    },
    {
        id: "808",
        code: "Skilt 808",
        norwegianName: "Gjelder ikke...",
        englishName: "Does not apply to...",
        vietnameseName: "NGOẠI TRỪ phương tiện được ghi chú",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/808_42b.svg",
        keyRulesVi: [
            "Có dòng chữ 'Gjelder ikke' (Không áp dụng cho...).",
            "Đây là biển loại trừ. Ý nghĩa của biển chính sẽ áp dụng cho tất cả mọi người, NGOẠI TRỪ đối tượng ghi trên biển này.",
            "Ví dụ: Biển Cấm rẽ phải + Biển phụ 'Gjelder ikke buss' -> Tất cả mọi người bị cấm rẽ phải, RIÊNG xe buýt thì lại được rẽ."
        ]
    },

    // --- CẢNH BÁO ĐẶC THÙ & HƯỚNG MŨI TÊN ĐỖ XE ---
    {
        id: "816",
        code: "Skilt 816",
        norwegianName: "Svingutslag",
        englishName: "Tail swing",
        vietnameseName: "Cảnh báo văng đuôi xe tải",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/816_0.svg",
        keyRulesVi: [
            "Biển vẽ hình chiếc xe tải đang lượn cua.",
            "Cảnh báo: Khi các xe tải dài hoặc xe buýt ôm cua ở đoạn đường này, phần đuôi của chúng sẽ bị văng/quét ra bên ngoài làn đường rất rộng.",
            "Tài xế đi phía sau hoặc dừng ở ngã tư phải giữ khoảng cách thật xa để không bị đuôi xe tải quệt trúng."
        ]
    },
    {
        id: "824",
        code: "Skilt 824",
        norwegianName: "Avstand til stoppskilt",
        englishName: "Distance to STOP sign",
        vietnameseName: "Khoảng cách đến biển STOP",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/824_0.svg",
        keyRulesVi: [
            "Biển chữ nhật ghi chữ STOP kèm theo khoảng cách (VD: Stopp 150m). Luôn được CẮM BÊN DƯỚI BIỂN NHƯỜNG ĐƯỜNG (Tam giác ngược).",
            "Cảnh báo từ xa: Đi thêm 150m nữa, bạn sẽ gặp một ngã tư có biển dừng lại bắt buộc (STOP bát giác đỏ)."
        ]
    },
    {
        id: "828.1",
        code: "Skilt 828",
        norwegianName: "Utstrekning for stans/parkering",
        englishName: "Extent for stopping/parking",
        vietnameseName: "Mũi tên giới hạn cấm đỗ xe",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/828_1.svg",
        keyRulesVi: [
            "Luôn cắm dưới biển Cấm dừng / Cấm đỗ. Ý nghĩa của các mũi tên:",
            "- Mũi tên chĩa LÊN (↑): Lệnh cấm BẮT ĐẦU từ cây cột này trở về phía trước.",
            "- Mũi tên chĩa XUỐNG (↓): Lệnh cấm KẾT THÚC tại cây cột này (áp dụng cho đoạn đường nằm TRƯỚC cây cột).",
            "- Mũi tên chĩa HAI ĐẦU (↕): Bạn đang đứng Ở GIỮA khu vực cấm đỗ (cấm cả trước và sau cột)."
        ],
        testQuestions: [
            "Đề thi: Dưới biển Cấm đỗ xe có mũi tên chỉ thẳng xuống đất (↓). Bạn có được phép đỗ xe ngay phía SAU cây cột đó không? -> Đáp án: ĐƯỢC. Mũi tên chúi xuống nghĩa là lệnh cấm đã kết thúc ngay tại cây cột. Phần đường sau cột không bị cấm."
        ]
    },
    {
        id: "831",
        code: "Skilt 831",
        norwegianName: "Parkeringsskive",
        englishName: "Parking disc required",
        vietnameseName: "Yêu cầu dùng Đĩa đỗ xe (Maks timer)",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/831_0.svg",
        keyRulesVi: [
            "Có biểu tượng đồng hồ và chữ Maks (tối đa). Ví dụ: Maks 2 timer (Tối đa 2 tiếng).",
            "Bắt buộc: Bạn phải đặt 'đĩa đỗ xe' (Parkeringsskive) trên táp-lô sát kính chắn gió, vặn kim đồng hồ chỉ đúng THỜI ĐIỂM BẠN ĐẾN BÃI ĐỖ. Nếu không có đĩa, hãy viết giờ đến lên một tờ giấy trắng và để trên táp-lô."
        ]
    },

    // --- SƠ ĐỒ ĐƯỜNG ƯU TIÊN (HAY THI NHẤT) ---
    {
        id: "822",
        code: "Skilt 822",
        norwegianName: "Forløp av forkjørsveg",
        englishName: "Priority road layout",
        vietnameseName: "Sơ đồ hướng đi của đường ưu tiên",
        category: "supplementary",
        categoryNameVi: "Biển phụ",
        imageSrc: "Images/822_1.svg",
        keyRulesVi: [
            "Biển vẽ sơ đồ ngã tư/ngã ba. NÉT VẼ TO ĐẬM đại diện cho hướng đi của ĐƯỜNG ƯU TIÊN. Nét vẽ mỏng là đường nhánh phải nhường.",
            "Cách đọc hiểu: Bạn phải định vị xem MÌNH ĐANG ĐI TỪ HƯỚNG NÀO TỚI (thường là từ vạch dưới cùng chĩa lên). Nếu bạn đang ở trên nét đậm, bạn được ưu tiên. Nếu bạn ở nét mỏng, bạn phải nhường toàn bộ xe đi trên nét đậm."
        ],
        testQuestions: [
            "Đề thi: Trong biển phụ sơ đồ ngã tư này, nét mực to và đậm bẻ cong sang trái mang ý nghĩa gì? -> Đáp án: Nó báo hiệu tuyến đường ưu tiên tại nút giao này không đi thẳng, mà nó rẽ cong sang trái. Bất cứ xe nào đi trên nét đậm này đều có quyền đi trước."
        ]
    },
    // ==========================================
    // NHÓM 8: CỌC TIÊU & THIẾT BỊ AN TOÀN (MARKERINGSSKILT - NHÓM 900)
    // Đặc điểm: Thường có sọc Vàng - Đen (hoặc Đỏ - Trắng). Phản quang rất mạnh.
    // Ý nghĩa: Định hướng thị giác cho tài xế vào ban đêm hoặc khi thời tiết xấu.
    // ==========================================

    // --- BIỂN BÁO KHÚC CUA (CHEVRON) ---
    {
        id: "902",
        code: "Skilt 902",
        norwegianName: "Bakgrunnsmarkering",
        englishName: "Curve alignment marker (Chevron)",
        vietnameseName: "Biển phản quang dẫn hướng khúc cua",
        category: "marker",
        categoryNameVi: "Thiết bị an toàn",
        imageSrc: "Images/902_0V.svg", // Dùng mã ảnh có sẵn trong thư mục
        keyRulesVi: [
            "Biển hình chữ nhật ngang, sơn phản quang sọc Vàng - Đen hình mũi tên (Chevron).",
            "Luôn được cắm cọc liên tiếp ở BÊN NGOÀI các khúc cua ngặt nguy hiểm.",
            "Quy tắc thị giác: Đầu nhọn của sọc Vàng-Đen chĩa về hướng nào, bạn bắt buộc phải bẻ vô lăng uốn theo hướng đó để không lao xuống vực."
        ],
        testQuestions: [
            "Đề thi: Chức năng chính của các biển báo có sọc vàng đen cắm liên tiếp ở rìa ngoài khúc cua là gì? -> Đáp án: Cảnh báo đoạn cua ngặt và định hướng đường đi (dẫn hướng thị giác) cho tài xế trong điều kiện ánh sáng kém hoặc bão tuyết."
        ]
    },

    // --- BIỂN BÁO LÁCH CHƯỚNG NGẠI VẬT ---
    {
        id: "906.1",
        code: "Skilt 906 (H)",
        norwegianName: "Hindermarkering (Passeres til høyre)",
        englishName: "Obstacle marker (Pass on right)",
        vietnameseName: "Biển báo chướng ngại vật (Phải lách sang Phải)",
        category: "marker",
        categoryNameVi: "Thiết bị an toàn",
        imageSrc: "Images/906_0H.svg",
        keyRulesVi: [
            "Biển cọc đứng, có sọc chéo Vàng - Đen. Thường cắm ở đầu các đảo giao thông, dải phân cách hoặc hố hầm.",
            "Quy tắc sống còn (Cách đọc sọc chéo): Bạn hãy nhìn các sọc chéo như một dòng nước đang chảy CẮM XUỐNG ĐẤT. Sọc chéo trôi tuột xuống phía bên HÔNG NÀO, bạn phải ĐÁNH LÁI XE SANG BÊN ĐÓ.",
            "Ví dụ: Ở biển 906_0H, sọc đen chéo từ trên-trái cắm xuống dưới-phải -> Bạn phải lách xe sang Mép Bên Phải của cây cột."
        ],
        testQuestions: [
            "Đề thi: Khi bạn nhìn thấy một cọc tiêu có các sọc vàng đen chéo từ trên xuống dưới về phía tay phải. Bạn phải xử lý thế nào? -> Đáp án: Phải lách xe và đi vòng qua phía bên phải của cọc tiêu đó."
        ]
    },
    {
        id: "906.2",
        code: "Skilt 906 (V)",
        norwegianName: "Hindermarkering (Passeres til venstre)",
        englishName: "Obstacle marker (Pass on left)",
        vietnameseName: "Biển báo chướng ngại vật (Phải lách sang Trái)",
        category: "marker",
        categoryNameVi: "Thiết bị an toàn",
        imageSrc: "Images/906_0V.svg",
        keyRulesVi: [
            "Sọc chéo Vàng - Đen cắm tuột xuống phía bên TRÁI.",
            "Yêu cầu luồng xe phải lách qua mép bên Trái của chướng ngại vật để đi tiếp."
        ]
    },
    {
        id: "906.3",
        code: "Skilt 906 (V/H)",
        norwegianName: "Hindermarkering (Passeres på begge sider)",
        englishName: "Obstacle marker (Pass on either side)",
        vietnameseName: "Biển báo chướng ngại vật (Lách được cả 2 bên)",
        category: "marker",
        categoryNameVi: "Thiết bị an toàn",
        imageSrc: "Images/906_0VH.svg",
        keyRulesVi: [
            "Sọc chéo Vàng - Đen tạo thành hình CHỮ V ÚP (như mũi tên chĩa lên trời).",
            "Ý nghĩa: Chướng ngại vật nằm ngay chính giữa. Bạn có thể tự do lách sang lề bên TRÁI hoặc lề bên PHẢI của cây cột đều được."
        ]
    },

    // --- CỌC TIÊU PHẢN QUANG HAI BÊN ĐƯỜNG ---
    {
        id: "914",
        code: "Skilt 914",
        norwegianName: "Kantstolpe",
        englishName: "Edge delineator post",
        vietnameseName: "Cọc tiêu phản quang mép đường",
        category: "marker",
        categoryNameVi: "Thiết bị an toàn",
        imageSrc: "Images/914_H.svg",
        keyRulesVi: [
            "Các cọc nhựa cắm dọc hai bên mép đường nhựa, cực kỳ quan trọng khi lái xe trong đêm tuyết dày không thấy vạch kẻ đường.",
            "Quy tắc nhận diện MÀU PHẢN QUANG (Hay ra thi):",
            "- Cọc cắm BÊN PHẢI đường (cùng chiều): Tấm phản quang có màu ĐỎ (chữ nhật dài).",
            "- Cọc cắm BÊN TRÁI đường (phía ngược chiều): Tấm phản quang có màu TRẮNG (2 nốt chấm tròn)."
        ],
        testQuestions: [
            "Đề thi: Bạn đang lái xe trong đêm tối mù mịt tuyết rơi. Bạn nhìn thấy một hàng cọc tiêu có miếng phản quang phát sáng MÀU ĐỎ. Hàng cọc tiêu đó nằm ở bên nào của bạn? -> Đáp án: Nằm ở mép đường bên tay PHẢI của bạn."
        ]
    },

    // --- BIỂN BÁO CẢNH BÁO ĐẶC BIỆT ---
    {
        id: "Kjetting",
        code: "Spesialskilt",
        norwegianName: "Kjetting",
        englishName: "Snow chains",
        vietnameseName: "Khu vực trang bị dây xích chống trượt",
        category: "information", // Xếp vào nhóm thông tin chỉ dẫn
        categoryNameVi: "Biển chỉ dẫn",
        imageSrc: "Images/kjetting.svg",
        keyRulesVi: [
            "Biển vẽ hình lốp xe được bọc dây xích sần sùi.",
            "Chỉ dẫn khu vực bãi đỗ xe hoặc khoảng trống lề đường rộng rãi để tài xế (đặc biệt là xe tải nặng) tấp vào và LẮP DÂY XÍCH VÀO LỐP trước khi leo lên các đoạn đèo núi phủ băng trơn trượt phía trước."
        ]
    },
    {
        id: "Feil_kjoreretning",
        code: "Feil kjøreretning",
        norwegianName: "Feil kjøreretning (Stopp - Snu)",
        englishName: "Wrong direction - Stop and turn around",
        vietnameseName: "Biển cảnh báo đi ngược chiều khẩn cấp",
        category: "prohibition",
        categoryNameVi: "Biển cấm đặc biệt",
        imageSrc: "Images/feil-kjoereretning.svg",
        keyRulesVi: [
            "Biển báo ngoại cỡ màu đỏ, có hình bàn tay vươn ra và chữ STOPP - SNU (Dừng lại - Quay đầu).",
            "Biển này thường cắm ở các đường dẫn xuống cao tốc (on-ramp) để chặn các tài xế đi nhầm vào đường ngược chiều (Ghost driving).",
            "Hành động sinh tử: Nếu thấy biển này đối diện mình, bạn ĐANG CHẠY NGƯỢC CHIỀU VÀO ĐƯỜNG CAO TỐC. Phải lập tức tấp sát vào lề an toàn, dừng hẳn xe, bật đèn khẩn cấp và quay đầu xe lại ngay khi an toàn."
        ],
        testQuestions: [
            "Đề thi: Bạn vừa rẽ vào một đường dẫn và đột nhiên nhìn thấy biển báo đỏ lớn có chữ 'STOPP - SNU'. Điều gì đang xảy ra và bạn phải làm gì? -> Đáp án: Bạn đã rẽ nhầm vào phần đường ngược chiều (rất dễ xảy ra va chạm trực diện). Phải lập tức dừng sát lề, bật đèn khẩn cấp và quay đầu trở lại."
        ]
    }
];