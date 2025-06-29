const originalQuestions = {
    easy: [
        {
            question: "คอมพิวเตอร์คืออะไร?",
            choices: ["เครื่องมือสำหรับพิมพ์งาน", "เครื่องมือที่ใช้ประมวลผลข้อมูล", "เครื่องมือสำหรับฟังเพลง", "เครื่องมือสำหรับถ่ายรูป"],
            answer: 1,
            info: "คอมพิวเตอร์เป็นอุปกรณ์อิเล็กทรอนิกส์ที่สามารถรับข้อมูล ประมวลผลข้อมูล จัดเก็บข้อมูล และแสดงผลข้อมูลตามชุดคำสั่งที่กำหนดไว้"
        },
        {
            question: "ซอฟต์แวร์ (Software) หมายถึงอะไร?",
            choices: ["ส่วนประกอบทางกายภาพของคอมพิวเตอร์", "โปรแกรมหรือชุดคำสั่งที่ใช้ควบคุมคอมพิวเตอร์", "หน่วยความจำของคอมพิวเตอร์", "หน้าจอของคอมพิวเตอร์"],
            answer: 1,
            info: "ซอฟต์แวร์คือส่วนที่จับต้องไม่ได้ของระบบคอมพิวเตอร์ ประกอบด้วยโปรแกรม ชุดคำสั่ง และข้อมูลที่ใช้ควบคุมการทำงานของฮาร์ดแวร์"
        },
        {
            question: "อินเทอร์เน็ตคืออะไร?",
            choices: ["เครือข่ายคอมพิวเตอร์ที่เชื่อมต่อทั่วโลก", "โปรแกรมเล่นเกม", "ฮาร์ดแวร์ของคอมพิวเตอร์", "ระบบปฏิบัติการ"],
            answer: 0,
            info: "อินเทอร์เน็ตคือเครือข่ายคอมพิวเตอร์ขนาดใหญ่ที่เชื่อมโยงเครือข่ายย่อย ๆ ทั่วโลกเข้าด้วยกัน ทำให้สามารถสื่อสารและแลกเปลี่ยนข้อมูลระหว่างกันได้"
        },
        {
            question: "ชื่อกฎหมายที่เกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลในประเทศไทยคืออะไร?",
            choices: ["พ.ร.บ.คอมพิวเตอร์", "พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล", "พ.ร.บ.ลิขสิทธิ์", "พ.ร.บ.ความมั่นคงไซเบอร์"],
            answer: 1,
            info: "พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) มีวัตถุประสงค์เพื่อคุ้มครองข้อมูลส่วนบุคคลและกำหนดสิทธิของเจ้าของข้อมูล"
        },
        {
            question: "การละเมิดลิขสิทธิ์ซอฟต์แวร์หมายถึงอะไร?",
            choices: ["การใช้ซอฟต์แวร์อย่างถูกกฎหมาย", "การใช้ซอฟต์แวร์โดยไม่ได้รับอนุญาต", "การซื้อซอฟต์แวร์จากร้านค้า", "การอัปเดตซอฟต์แวร์"],
            answer: 1,
            info: "การละเมิดลิขสิทธิ์ซอฟต์แวร์คือการทำซ้ำ ดัดแปลง เผยแพร่ หรือใช้งานซอฟต์แวร์โดยไม่ได้รับอนุญาตจากเจ้าของลิขสิทธิ์ ซึ่งเป็นการกระทำที่ผิดกฎหมาย"
        },
        {
            question: "ไวรัสคอมพิวเตอร์คืออะไร?",
            choices: ["โปรแกรมที่ช่วยเพิ่มความเร็วคอมพิวเตอร์", "โปรแกรมที่ทำลายหรือก่อกวนระบบคอมพิวเตอร์", "โปรแกรมเล่นเกม", "โปรแกรมป้องกันไวรัส"],
            answer: 1,
            info: "ไวรัสคอมพิวเตอร์เป็นโปรแกรมประสงค์ร้ายที่สามารถแพร่กระจายไปยังคอมพิวเตอร์เครื่องอื่น ๆ และก่อให้เกิดความเสียหายต่อระบบหรือข้อมูลได้"
        },
        {
            question: "ระบบปฏิบัติการ (Operating System) คืออะไร?",
            choices: ["โปรแกรมที่ใช้เล่นเกม", "โปรแกรมที่ควบคุมการทำงานของคอมพิวเตอร์", "โปรแกรมสำหรับพิมพ์งาน", "โปรแกรมสำหรับท่องอินเทอร์เน็ต"],
            answer: 1,
            info: "ระบบปฏิบัติการเป็นซอฟต์แวร์ที่ทำหน้าที่เป็นตัวกลางระหว่างผู้ใช้กับฮาร์ดแวร์ของคอมพิวเตอร์ โดยจัดการทรัพยากรต่าง ๆ ของระบบ"
        },
        {
            question: "การฟิชชิ่ง (Phishing) คืออะไร?",
            choices: ["การส่งอีเมลหลอกลวงเพื่อขโมยข้อมูลส่วนตัว", "การดาวน์โหลดซอฟต์แวร์", "การสำรองข้อมูล", "การอัปเดตระบบ"],
            answer: 0,
            info: "การฟิชชิ่งคือการหลอกลวงทางอินเทอร์เน็ต โดยผู้ไม่หวังดีจะพยายามหลอกให้เหยื่อเปิดเผยข้อมูลส่วนตัว เช่น รหัสผ่าน ข้อมูลบัตรเครดิต ผ่านทางอีเมลหรือเว็บไซต์ปลอม"
        },
        {
            question: "ฮาร์ดแวร์ (Hardware) คืออะไร?",
            choices: ["โปรแกรมคอมพิวเตอร์", "ส่วนประกอบทางกายภาพของคอมพิวเตอร์", "ระบบปฏิบัติการ", "เครือข่ายอินเทอร์เน็ต"],
            answer: 1,
            info: "ฮาร์ดแวร์คือส่วนประกอบทางกายภาพของคอมพิวเตอร์ เช่น จอภาพ คีย์บอร์ด เมาส์ หน่วยประมวลผลกลาง (CPU) และหน่วยความจำ"
        },
        {
            question: "ใครเป็นผู้ควบคุมกฎหมายคอมพิวเตอร์ในประเทศไทย?",
            choices: ["กระทรวงศึกษาธิการ", "กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม", "กระทรวงสาธารณสุข", "กระทรวงแรงงาน"],
            answer: 1,
            info: "กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม (MDES) เป็นหน่วยงานหลักที่รับผิดชอบในการดูแลและบังคับใช้กฎหมายที่เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยีดิจิทัลในประเทศไทย"
        }
    ],
    medium: [
        {
            question: "พ.ร.บ.คอมพิวเตอร์ พ.ศ. 2560 มีวัตถุประสงค์อะไร?",
            choices: ["ควบคุมการใช้งานคอมพิวเตอร์ในทางที่ผิดกฎหมาย", "ส่งเสริมการเล่นเกมออนไลน์", "ป้องกันการดาวน์โหลดซอฟต์แวร์ฟรี", "กำหนดราคาซื้อขายคอมพิวเตอร์"],
            answer: 0,
            info: "พ.ร.บ.คอมพิวเตอร์ พ.ศ. 2560 มีวัตถุประสงค์หลักเพื่อป้องกันและปราบปรามการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ และคุ้มครองสิทธิของผู้ใช้งาน"
        },
        {
            question: "ข้อใดเป็นความผิดตาม พ.ร.บ.คอมพิวเตอร์ พ.ศ. 2560?",
            choices: ["ส่งอีเมลขยะ (Spam)", "เปิดเว็บไซต์เพื่อเผยแพร่ข้อมูลเท็จ", "เข้าถึงข้อมูลโดยไม่ได้รับอนุญาต", "ถูกทุกข้อ"],
            answer: 3,
            info: "การส่งอีเมลขยะ การเผยแพร่ข้อมูลเท็จ และการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต ล้วนเป็นความผิดตาม พ.ร.บ.คอมพิวเตอร์ พ.ศ. 2560 ซึ่งมีบทลงโทษแตกต่างกันไป"
        },
        {
            question: "ข้อมูลส่วนบุคคลที่ต้องได้รับการคุ้มครองตามกฎหมายหมายถึงอะไร?",
            choices: ["ชื่อ-นามสกุล", "เลขบัตรประชาชน", "ข้อมูลทางการแพทย์", "ถูกทุกข้อ"],
            answer: 3,
            info: "กฎหมายคุ้มครองข้อมูลส่วนบุคคลให้ความคุ้มครองข้อมูลหลากหลายประเภทที่สามารถระบุตัวบุคคลได้โดยตรงหรือโดยอ้อม รวมถึงชื่อ-นามสกุล เลขประจำตัว และข้อมูลสุขภาพ"
        },
        {
            question: "การแฮกข้อมูล (Hacking) หมายถึงอะไร?",
            choices: ["การเข้าถึงระบบคอมพิวเตอร์โดยไม่ได้รับอนุญาต", "การเขียนโปรแกรม", "การซื้อขายคอมพิวเตอร์มือสอง", "การดาวน์โหลดข้อมูล"],
            answer: 0,
            info: "การแฮกข้อมูลคือการเข้าถึงระบบคอมพิวเตอร์หรือเครือข่ายโดยไม่ได้รับอนุญาต ซึ่งเป็นการกระทำที่ผิดกฎหมายและอาจก่อให้เกิดความเสียหายต่อเจ้าของข้อมูล"
        },
        {
            question: "ข้อใดไม่ใช่ประเภทของมัลแวร์ (Malware)?",
            choices: ["ไวรัส", "โทรจัน", "สปายแวร์", "ไวร์เลส"],
            answer: 3,
            info: "มัลแวร์ (Malicious Software) มีหลายประเภท เช่น ไวรัส โทรจัน เวิร์ม สปายแวร์ แอดแวร์ แรนซัมแวร์ ส่วน 'ไวร์เลส' เป็นเทคโนโลยีการสื่อสารแบบไร้สาย"
        },
        {
            question: "การสำรองข้อมูลมีความสำคัญอย่างไร?",
            choices: ["ป้องกันข้อมูลสูญหาย", "ช่วยให้คอมพิวเตอร์เร็วขึ้น", "เพิ่มพื้นที่เก็บข้อมูล", "ลดค่าใช้จ่ายในการซ่อม"],
            answer: 0,
            info: "การสำรองข้อมูล (Backup) มีความสำคัญอย่างยิ่งในการป้องกันข้อมูลสูญหายจากเหตุการณ์ไม่คาดฝัน เช่น ฮาร์ดแวร์เสียหาย ไวรัสโจมตี หรืออุบัติเหตุ"
        },
        {
            question: "ข้อใดเป็นวิธีป้องกันไวรัสคอมพิวเตอร์?",
            choices: ["ติดตั้งโปรแกรมป้องกันไวรัส", "เปิดไฟล์แนบจากอีเมลไม่รู้จัก", "ใช้รหัสผ่านง่ายๆ", "แชร์ข้อมูลส่วนตัวในโซเชียล"],
            answer: 0,
            info: "การติดตั้งและอัปเดตโปรแกรมป้องกันไวรัสเป็นวิธีสำคัญในการป้องกันไวรัสคอมพิวเตอร์ นอกจากนี้ควรหลีกเลี่ยงการเปิดไฟล์แนบหรือคลิกลิงก์จากแหล่งที่ไม่น่าเชื่อถือ"
        },
        {
            question: "กฎหมายใดควบคุมเรื่องลิขสิทธิ์ซอฟต์แวร์ในประเทศไทย?",
            choices: ["พ.ร.บ.คอมพิวเตอร์", "พ.ร.บ.ลิขสิทธิ์", "พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล", "พ.ร.บ.ความมั่นคงไซเบอร์"],
            answer: 1,
            info: "พระราชบัญญัติลิขสิทธิ์ พ.ศ. 2537 เป็นกฎหมายหลักที่คุ้มครองงานอันมีลิขสิทธิ์ รวมถึงซอฟต์แวร์ในประเทศไทย"
        },
        {
            question: "ข้อใดเป็นเทคโนโลยีคลาวด์ (Cloud Technology)?",
            choices: ["เก็บข้อมูลบนอินเทอร์เน็ต", "ฮาร์ดแวร์คอมพิวเตอร์", "โปรแกรมบนเครื่อง", "จอภาพคอมพิวเตอร์"],
            answer: 0,
            info: "เทคโนโลยีคลาวด์คือการจัดเก็บข้อมูลและประมวลผลบนเซิร์ฟเวอร์ที่เข้าถึงได้ผ่านอินเทอร์เน็ต แทนที่จะจัดเก็บไว้ในเครื่องคอมพิวเตอร์ส่วนบุคคล"
        },
        {
            question: "ข้อใดคือมาตรการรักษาความปลอดภัยทางไซเบอร์?",
            choices: ["ใช้รหัสผ่านที่แข็งแรง", "เปิดเผยข้อมูลส่วนตัว", "ดาวน์โหลดไฟล์จากแหล่งไม่รู้จัก", "ใช้เครือข่ายสาธารณะโดยไม่ป้องกัน"],
            answer: 0,
            info: "มาตรการรักษาความปลอดภัยทางไซเบอร์คือการป้องกันระบบเครือข่ายและข้อมูลจากการโจมตี การทำลาย หรือการเข้าถึงโดยไม่ได้รับอนุญาต เช่น การใช้รหัสผ่านที่ซับซ้อน"
        }
    ],
    hard: [
        {
            question: "พ.ร.บ.คอมพิวเตอร์ฯ กำหนดบทลงโทษสำหรับการเข้าถึงระบบคอมพิวเตอร์โดยไม่ได้รับอนุญาตไว้อย่างไร?",
            choices: ["ปรับอย่างเดียว", "จำคุกอย่างเดียว", "ปรับและจำคุก", "ไม่มีบทลงโทษ"],
            answer: 2,
            info: "ตามมาตรา 5 แห่ง พ.ร.บ.คอมพิวเตอร์ฯ ผู้ใดเข้าถึงระบบคอมพิวเตอร์โดยมิชอบ ต้องระวางโทษจำคุกไม่เกินหกเดือน หรือปรับไม่เกินหนึ่งหมื่นบาท หรือทั้งจำทั้งปรับ"
        },
        {
            question: "ข้อใดเป็นตัวอย่างของการละเมิดลิขสิทธิ์ซอฟต์แวร์?",
            choices: ["ใช้ซอฟต์แวร์ที่ซื้อถูกต้อง", "ใช้ซอฟต์แวร์เถื่อน", "อัปเดตซอฟต์แวร์", "ลบซอฟต์แวร์"],
            answer: 1,
            info: "การใช้ซอฟต์แวร์เถื่อน (Software Piracy) คือการใช้ซอฟต์แวร์โดยไม่มีสิทธิ์หรือไม่ได้รับอนุญาตจากเจ้าของลิขสิทธิ์ ซึ่งเป็นการละเมิดกฎหมายลิขสิทธิ์"
        },
        {
            question: "ใน พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล ข้อมูลประเภทใดต้องได้รับความยินยอมจากเจ้าของข้อมูลก่อนนำไปใช้?",
            choices: ["ข้อมูลส่วนตัวทั่วไป", "ข้อมูลสุขภาพ", "ข้อมูลสาธารณะ", "ข้อมูลที่เปิดเผยแล้ว"],
            answer: 1,
            info: "ข้อมูลอ่อนไหว (Sensitive Personal Data) เช่น ข้อมูลสุขภาพ เชื้อชาติ ความคิดเห็นทางการเมือง ต้องได้รับความยินยอมโดยชัดแจ้งจากเจ้าของข้อมูลก่อนนำไปใช้"
        },
        {
            question: "การโจมตีแบบ DDoS คืออะไร?",
            choices: ["การโจมตีด้วยไวรัส", "การโจมตีด้วยการส่งข้อมูลจำนวนมากจนระบบล่ม", "การแฮกข้อมูลส่วนตัว", "การสำรองข้อมูล"],
            answer: 1,
            info: "การโจมตีแบบ Distributed Denial of Service (DDoS) คือการโจมตีระบบหรือเครือข่ายด้วยการส่งข้อมูลจำนวนมหาศาล เพื่อให้ระบบทำงานหนักเกินไปจนไม่สามารถให้บริการได้"
        },
        {
            question: "ข้อใดเป็นการกระทำผิดตาม พ.ร.บ.คอมพิวเตอร์ฯ ที่เกี่ยวกับการเผยแพร่ข้อมูลเท็จ?",
            choices: ["เผยแพร่ข่าวสารจริง", "เผยแพร่ข่าวสารเท็จเพื่อทำลายชื่อเสียง", "เผยแพร่ข้อมูลทางการศึกษา", "เผยแพร่ข้อมูลส่วนตัวของตนเอง"],
            answer: 1,
            info: "การเผยแพร่ข้อมูลคอมพิวเตอร์อันเป็นเท็จ โดยประการที่น่าจะเกิดความเสียหายต่อการรักษาความมั่นคงปลอดภัยของประเทศ หรือก่อให้เกิดความตื่นตระหนกแก่ประชาชน เป็นความผิดตาม พ.ร.บ.คอมพิวเตอร์ฯ"
        },
        {
            question: "ข้อใดเป็นเทคนิคการป้องกันการโจมตีทางไซเบอร์?",
            choices: ["อัปเดตซอฟต์แวร์อย่างสม่ำเสมอ", "ใช้รหัสผ่านง่ายๆ", "เปิดไฟล์แนบจากอีเมลไม่รู้จัก", "แชร์รหัสผ่านกับผู้อื่น"],
            answer: 0,
            info: "การอัปเดตซอฟต์แวร์ให้เป็นเวอร์ชันล่าสุดอย่างสม่ำเสมอจะช่วยแก้ไขช่องโหว่ด้านความปลอดภัยที่ผู้โจมตีอาจใช้เป็นช่องทางในการเข้าถึงระบบ"
        },
        {
            question: "มาตรฐาน ISO/IEC 27001 เกี่ยวข้องกับอะไร?",
            choices: ["การจัดการความปลอดภัยข้อมูล", "การพัฒนาซอฟต์แวร์", "การออกแบบฮาร์ดแวร์", "การตลาดออนไลน์"],
            answer: 0,
            info: "ISO/IEC 27001 เป็นมาตรฐานสากลสำหรับการจัดการระบบความปลอดภัยของข้อมูล (Information Security Management System - ISMS) เพื่อช่วยองค์กรจัดการและปกป้องข้อมูลอย่างมีประสิทธิภาพ"
        },
        {
            question: "ข้อใดไม่ใช่ประเภทของมัลแวร์?",
            choices: ["ไวรัส", "โทรจัน", "สปายแวร์", "ไฟล์เอกสาร"],
            answer: 3,
            info: "ไวรัส โทรจัน และสปายแวร์ เป็นประเภทของมัลแวร์ ซึ่งเป็นซอฟต์แวร์ประสงค์ร้ายที่ออกแบบมาเพื่อก่อให้เกิดความเสียหาย ส่วนไฟล์เอกสาร (.doc, .pdf) เป็นประเภทของข้อมูล ไม่ใช่มัลแวร์โดยตรง"
        },
        {
            question: "ข้อใดเป็นตัวอย่างของการฟิชชิ่ง?",
            choices: ["ส่งอีเมลหลอกลวง", "การติดตั้งโปรแกรม", "การสำรองข้อมูล", "การอัปเดตซอฟต์แวร์"],
            answer: 0,
            info: "การฟิชชิ่งมักจะใช้เทคนิคการส่งอีเมลปลอมแปลง เว็บไซต์ปลอม หรือข้อความหลอกลวง เพื่อหลอกให้เหยื่อเปิดเผยข้อมูลส่วนตัว"
        },
        {
            question: "การเข้ารหัสข้อมูล (Encryption) มีวัตถุประสงค์อะไร?",
            choices: ["ป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต", "เพิ่มความเร็วคอมพิวเตอร์", "ลดขนาดไฟล์", "ลบข้อมูล"],
            answer: 0,
            info: "การเข้ารหัสข้อมูลคือกระบวนการแปลงข้อมูลให้อยู่ในรูปแบบที่ไม่สามารถอ่านได้โดยตรง เพื่อป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต และรักษาความลับของข้อมูล"
        }
    ]
};

const MESSAGES = {
    timerPrefix: "เวลา: ",
    timerSuffix: " วินาที",
    correctFeedback: "✅ ถูกต้อง!",
    wrongFeedback: "❌ ผิด!",
    timeUpFeedback: "หมดเวลา!",
    gameOverPrompt: "คุณแพ้! เริ่มใหม่ที่ด่านง่าย ข้อที่ 1",
    nextLevelPrompt: "คุณตอบถูกครบทุกข้อในด่านนี้!\nไปยังด่านถัดไปหรือไม่?",
    easyLevel: "ง่าย",
    mediumLevel: "ปานกลาง",
    hardLevel: "ยาก",
    questionNumber: (level, current, total) => `ระดับ: ${level} ข้อที่ ${current} / ${total}`
};

let shuffledQuestions = {};
let currentLevel = "easy";
let currentQuestionIndex = 0;
const timePerQuestion = 15;
let timerInterval = null;
let isGameActive = false;
let score = 0;

const startScreenEl = document.getElementById("start-screen");
const gameContainerEl = document.getElementById("game-container");
const developerInfoScreenEl = document.getElementById("developer-info-screen");
const winScreenEl = document.getElementById("win-screen");
const scoreScreenEl = document.getElementById("score-screen");


const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const choicesEl = document.getElementById("choices");
const feedbackTextEl = document.getElementById("feedback-text");
const infoTextEl = document.getElementById("info-text");
const timeLeftEl = document.getElementById("time-left");
const nextLevelPromptEl = document.getElementById("next-level-prompt");
const gameOverEl = document.getElementById("game-over");
const highScoresListEl = document.getElementById("high-scores-list");

const btnStartGame = document.getElementById("btn-start-game");
const btnDeveloperInfo = document.getElementById("btn-developer-info");
const btnShowScores = document.getElementById("btn-show-scores");
const btnBackToStart = document.getElementById("btn-back-to-start");
const btnNextYes = document.getElementById("btn-next-level-yes");
const btnNextNo = document.getElementById("btn-next-level-no");
const btnRestart = document.getElementById("btn-restart");
const btnPlayAgain = document.getElementById("btn-play-again");
const btnBackToStartFromWin = document.getElementById("btn-back-to-start-from-win");
const btnBackToStartFromScores = document.getElementById("btn-back-to-start-from-scores");


const audioCorrect = new Audio('Sounds/correct.mp3');
const audioWrong = new Audio('Sounds/wrong.mp3');
const audioWin = new Audio('Sounds/Win.mp3');
const audioLose = new Audio('Sounds/Lose.mp3');
const audioClick = new Audio('Sounds/click.wav')

audioCorrect.volume = 0.7;
audioWrong.volume = 0.7;
audioWin.volume = 0.7;
audioLose.volume = 0.7;
audioClick.volume = 0.5;

function showScreen(screenToShow) {
    startScreenEl.classList.add("hidden");
    gameContainerEl.classList.add("hidden");
    developerInfoScreenEl.classList.add("hidden");
    winScreenEl.classList.add("hidden");
    scoreScreenEl.classList.add("hidden");
    nextLevelPromptEl.classList.add("hidden");
    gameOverEl.classList.add("hidden");

    feedbackTextEl.textContent = "";
    infoTextEl.textContent = "";
    feedbackTextEl.classList.remove("correct-feedback", "wrong-feedback");
    infoTextEl.classList.remove("info-text");

    screenToShow.classList.remove("hidden");

    if (screenToShow !== gameContainerEl) {
        stopTimer();
        isGameActive = false;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeGameQuestions() {
    shuffledQuestions = {
        easy: shuffleArray([...originalQuestions.easy]),
        medium: shuffleArray([...originalQuestions.medium]),
        hard: shuffleArray([...originalQuestions.hard])
    };
}

btnStartGame.addEventListener("click", () => {
    audioClick.play();
    startGame();
});

btnDeveloperInfo.addEventListener("click", () => {
    audioClick.play();
    showScreen(developerInfoScreenEl);
});

btnShowScores.addEventListener("click", () => {
    audioClick.play();
    showHighScores();
    showScreen(scoreScreenEl);
});

btnBackToStart.addEventListener("click", () => {
    audioClick.play();
    showScreen(startScreenEl);
});

btnBackToStartFromWin.addEventListener("click", () => {
    audioClick.play();
    showScreen(startScreenEl);
});

btnBackToStartFromScores.addEventListener("click", () => {
    audioClick.play();
    showScreen(startScreenEl);
});

// *** การเปลี่ยนแปลงหลักอยู่ที่นี่: ลบ audioClick.play() ออกจาก Event Listener ของ choicesEl ***
choicesEl.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice-btn") && isGameActive) {
        // audioClick.play(); // <-- ลบบรรทัดนี้ออก
        const buttons = Array.from(choicesEl.children);
        const selectedIndex = buttons.indexOf(event.target);
        selectAnswer(selectedIndex);
    }
});

btnNextYes.addEventListener("click", () => {
    audioClick.play(); // ปุ่ม Yes ยังคงมีเสียงคลิก
    if (currentLevel === "easy") {
        currentLevel = "medium";
    } else if (currentLevel === "medium") {
        currentLevel = "hard";
    } else if (currentLevel === "hard") {
        audioWin.play(); // เล่นเสียงชนะเมื่อเกมจบจริง
        saveScore(score);
        showScreen(winScreenEl);
        return;
    }

    currentQuestionIndex = 0;
    nextLevelPromptEl.classList.add("hidden");

    feedbackTextEl.textContent = "";
    infoTextEl.textContent = "";
    feedbackTextEl.classList.remove("correct-feedback", "wrong-feedback");
    infoTextEl.classList.remove("info-text");

    isGameActive = true;
    loadQuestion();
    startTimer();
});

btnNextNo.addEventListener("click", () => {
    audioClick.play(); // ปุ่ม No ยังคงมีเสียงคลิก
    saveScore(score);
    showScreen(startScreenEl);
});

btnRestart.addEventListener("click", () => {
    audioClick.play(); // ปุ่ม Restart ยังคงมีเสียงคลิก
    showScreen(startScreenEl);
});

btnPlayAgain.addEventListener("click", () => {
    audioClick.play(); // ปุ่ม Play Again ยังคงมีเสียงคลิก
    startGame();
});

function startGame() {
    score = 0;
    currentLevel = "easy";
    currentQuestionIndex = 0;
    isGameActive = true;
    initializeGameQuestions();
    showScreen(gameContainerEl);

    feedbackTextEl.textContent = "";
    infoTextEl.textContent = "";
    feedbackTextEl.classList.remove("correct-feedback", "wrong-feedback");
    infoTextEl.classList.remove("info-text");

    stopTimer();
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const currentQuestionsSet = shuffledQuestions[currentLevel];

    if (currentQuestionIndex >= currentQuestionsSet.length) {
        isGameActive = false;
        setTimeout(() => {
            if (currentLevel === "hard") {
                audioWin.play();
                saveScore(score);
                showScreen(winScreenEl);
            } else {
                nextLevelPromptEl.classList.remove("hidden");
            }
        }, 1000);
        return;
    }

    const currentQuestion = currentQuestionsSet[currentQuestionIndex];
    const displayLevel = capitalize(currentLevel);
    questionNumberEl.textContent = MESSAGES.questionNumber(displayLevel, currentQuestionIndex + 1, currentQuestionsSet.length);
    questionTextEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";

    const prefixes = ["ก. ", "ข. ", "ค. ", "ง. "];
    currentQuestion.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = prefixes[index] + choice;
        btn.disabled = false;
        choicesEl.appendChild(btn);
    });

    feedbackTextEl.textContent = "";
    infoTextEl.textContent = "";
    feedbackTextEl.classList.remove("correct-feedback", "wrong-feedback");
    infoTextEl.classList.remove("info-text");
    timeLeftEl.textContent = timePerQuestion;
}

function selectAnswer(selectedIndex) {
    if (!isGameActive) return;
    stopTimer();

    const currentQuestion = shuffledQuestions[currentLevel][currentQuestionIndex];
    const buttons = choicesEl.querySelectorAll(".choice-btn");

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === currentQuestion.answer) {
            btn.classList.add("correct");
        }
        if (idx === selectedIndex && idx !== currentQuestion.answer) {
            btn.classList.add("wrong");
        }
    });

    if (selectedIndex === currentQuestion.answer) {
        audioCorrect.play(); // เสียงถูกจะเล่นตรงนี้
        feedbackTextEl.textContent = MESSAGES.correctFeedback;
        infoTextEl.textContent = currentQuestion.info;
        feedbackTextEl.classList.add("correct-feedback");
        infoTextEl.classList.add("info-text");
        score++;

        currentQuestionIndex++;
        const currentQuestionsSet = shuffledQuestions[currentLevel];

        setTimeout(() => {
            if (currentQuestionIndex >= currentQuestionsSet.length) {
                isGameActive = false;
                if (currentLevel === "hard") {
                    audioWin.play();
                    saveScore(score);
                    showScreen(winScreenEl);
                } else {
                    nextLevelPromptEl.classList.remove("hidden");
                }
            } else {
                loadQuestion();
                startTimer();
            }
        }, 3000);
    } else {
        audioWrong.play(); // เสียงผิดจะเล่นตรงนี้
        feedbackTextEl.textContent = MESSAGES.wrongFeedback + " คำตอบที่ถูกต้องคือ: " + currentQuestion.choices[currentQuestion.answer];
        infoTextEl.textContent = currentQuestion.info;
        feedbackTextEl.classList.add("wrong-feedback");
        infoTextEl.classList.add("info-text");

        isGameActive = false;
        disableChoices();

        setTimeout(() => {
            audioLose.play();
            gameOverEl.classList.remove("hidden");
            saveScore(score);
        }, 3000);
    }
}

function startTimer() {
    let timeLeft = timePerQuestion;
    timeLeftEl.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            stopTimer();
            audioWrong.play(); // เสียงผิดจะเล่นตรงนี้
            feedbackTextEl.textContent = MESSAGES.timeUpFeedback + " คำตอบที่ถูกต้องคือ: " + shuffledQuestions[currentLevel][currentQuestionIndex].choices[shuffledQuestions[currentLevel][currentQuestionIndex].answer];
            infoTextEl.textContent = shuffledQuestions[currentLevel][currentQuestionIndex].info;
            feedbackTextEl.classList.add("wrong-feedback");
            infoTextEl.classList.add("info-text");

            isGameActive = false;
            disableChoices();
            setTimeout(() => {
                audioLose.play();
                gameOverEl.classList.remove("hidden");
                saveScore(score);
            }, 3000);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function disableChoices() {
    const buttons = choicesEl.querySelectorAll(".choice-btn");
    buttons.forEach(btn => btn.disabled = true);
}

function capitalize(s) {
    if (s === "easy") return MESSAGES.easyLevel;
    if (s === "medium") return MESSAGES.mediumLevel;
    if (s === "hard") return MESSAGES.hardLevel;
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function saveScore(currentScore) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const timestamp = new Date().toLocaleString('th-TH', {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
    });
    highScores.push({ score: currentScore, date: timestamp });
    highScores.sort((a, b) => b.score - a.score);
    if (highScores.length > 10) {
        highScores.splice(10);
    }
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScoresListEl.innerHTML = '';
    if (highScores.length === 0) {
        highScoresListEl.innerHTML = '<li>ยังไม่มีคะแนน</li>';
        return;
    }

    highScores.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `#${index + 1}: ${entry.score} คะแนน (${entry.date})`;
        highScoresListEl.appendChild(listItem);
    });
}

window.onload = () => {
    showScreen(startScreenEl);
};