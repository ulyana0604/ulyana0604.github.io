app.controller("myCtrl",function(){
    var vm = this;
	
	vm.brand = {
//        samsung:"",
//        iPhone:"",
//        sony:"",
//        asus:""
//		  lenovo:"",
//		  hp:""
//        
    }
    
    vm.computers = [
        {
            name: 'Lenovo IdeaPad 110-15',
            processor: ' Intel Celeron N3060 (1.6 - 2.48 ГГц)',
            accessMemory: '4 ГБ',
            color: 'Черный',
            photo : 'http://www3.lenovo.com/medias/lenovo-laptop-ideapad-110-14-hero.png?context=bWFzdGVyfGltYWdlc3w3MTE2NnxpbWFnZS9wbmd8aW1hZ2VzL2g4NS9oODYvOTM4Nzc4NjE3NDQ5NC5wbmd8M2RlODQ2MjA0MWRkNjQzYjBkMWFkMGIwY2Y2Yzc1MTRjMDdlOTJhZWQ0NDNlYjQxMTcwMjhmZTQxZmQ2NzlkZQ',
            price: 6700 ,
            brand: 'Lenovo'
            
        },
        {
            name: 'ASUS VivoBook Max X541',
            processor: ' Intel Celeron N3060 (1.6 - 2.48 ГГц)',
            accessMemory: '6 ГБ',
            color: 'Cерый',
             photo:'https://3dnews.ru/assets/external/illustrations/2016/08/25/938412/869-1.jpg',
            price: 8000 ,
            brand: 'Asus'
            
        },
        {
            name: 'Asus EeeBook E502SA (E502SA-XO124D) White',
            processor: 'Intel Celeron N3060 (1.6 - 2.48 ГГц)',
            accessMemory: '2 ГБ',
            color: 'Белый',
            photo : 'http://pics.mobilluck.com.ua/photo/noutbuk/asus/Asus_EeeBook_E502SA__E502SA-XO018T__White_1290511_2470800.jpg',
            price: 7299 ,
            brand: 'Asus'
            
        },
        {
            name: ' Dell Vostro 15 3568 (N031VN3568EMEA02_UBU)',
            processor: ' Intel Celeron 3855U (1.6 ГГц)',
            accessMemory: '8 ГБ',
            color: 'Черный',
            photo : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTW9BT6CRyx2Gm8hksNxIqOYSZgKMfLszEi0hFlHF3HQqT0Bk-9',
            price: 9700 ,
            brand: 'Dell'
            
        },
        {
            name: ' Acer Aspire Z1-622 (DQ.B5FME.002) ',
            processor: 'Intel Pentium J3710 (1.6 - 2.64 ГГц)',
            accessMemory: '4 ГБ',
            color: 'Черный',
            photo : 'http://i2.rozetka.ua/goods/1697003/copy_acer_dq_szvme_002_57b4448ed9792_images_1697003928.jpg',
            price: 13500 ,
            brand: 'Acer'
            
        },
        {
            name: 'Apple iMac 21.5" A1418 (MK442UA/A) ',
            processor: 'Intel Core i5 (2.8 - 3.3 ГГц)',
            accessMemory: '8 ГБ',
            color: 'Cеребристый',
            photo : 'http://i1.rozetka.ua/goods/1510723/copy_apple_me086ua_a_570218cf18726_images_1510723294.jpg',
            price: 45000 ,
            brand: 'Apple'
            
        },
        {
            name: 'Acer Aspire Z3-715 (DQ.B2XME.005) ',
            processor: 'Intel Core i5-6400T (2.2 ГГц)',
            accessMemory: '4 ГБ',
            color: 'Черный',
            photo : 'http://i2.rozetka.ua/goods/1757092/copy_acer_dq_b2xme_002_57fb4a25a17c9_images_1757092975.jpg',
            price: 2400 ,
            brand: 'Acer'
            
        },
        {
            name: 'Dell Inspiron 3552 (I35P45DIL-K1) Black',
            processor: 'Intel Core i5-6400T (2.2 ГГц)',
            accessMemory: '4 ГБ',
            color: 'Черный',
            photo:'http://i1.rozetka.ua/goods/1757392/copy_dell_inspiron_3552_i35c45dil_k1_57fb9d476069e_images_1757392351.jpg',
            price: 7900 ,
            brand: 'Dell'
            
        },
        {
            name: 'Asus VivoBook Max X541SA (X541SA-XO137D) Chocolate Black',
            processor: 'Intel Core i5 (2.8 - 3.3 ГГц)',
            accessMemory: '6 ГБ',
            color: 'Черный',
            photo:'http://i2.rozetka.ua/goods/1773928/asus_vivobook_max_x541sa_xo137d_images_1773928395.jpg',
            price: 8400 ,
            brand: 'Asus'
            
        },
        {
            name: 'Lenovo IdeaPad 310-15IAP (80TT004XRA) Silver',
            processor: 'Intel Celeron N3060 (1.6 - 2.48 ГГц)',
            accessMemory: '8 ГБ',
            color: 'Cеребристый',
            photo:'http://i1.rozetka.ua/goods/1842113/lenovo_ideapad_310_15iap_80tt004xra_images_1842113751.jpg',
            price: 9700 ,
            brand: 'Lenovo'
            
        },
        {
            name: 'Lenovo IdeaPad 310-15IAP (80TT004QRA) White',
            processor: 'Intel Celeron N3060 (1.6 - 2.48 ГГц)',
            accessMemory: '4 ГБ',
            color: 'Белый',
            photo:'http://i2.rozetka.ua/goods/1836599/lenovo_ideapad_310_15iap_80tt004qra_images_1836599046.jpg',
            price: 9400 ,
            brand: 'Lenovo'
            
        },
        {
            name: 'Asus X751SA (X751SA-TY095D) White',
            processor: 'Intel Pentium J3710 (1.6 - 2.64 ГГц)',
            accessMemory: '2 ГБ',
            color: 'Белый',
            photo:'http://i2.rozetka.ua/goods/1780105/asus_x751sa_ty095d_images_1780105742.jpg',
            price: 9700 ,
            brand: 'Asus'
            
        },
        {
            name: 'Lenovo IdeaPad 310-15IAP (80TT002BRA) White',
            processor: 'Intel Pentium J3710 (1.6 - 2.64 ГГц)',
            accessMemory: '6 ГБ',
            color: 'Белый',
            photo:'http://i1.rozetka.ua/goods/1837132/copy_lenovo_ideapad_310_15iap_80tt0026ra_587ded26a2c3e_images_1837132376.jpg',
            price: 8000 ,
            brand: 'Lenovo'
            
        },
        {
            name: 'Acer Aspire ES1-533-P4ZP (NX.GFTEU.005)',
            processor: 'Intel Celeron N3060 (1.6 - 2.48 ГГц)',
            accessMemory: '8 ГБ',
            color: 'Cеребристый',
            photo:'http://i2.rozetka.ua/goods/1795586/copy_acer_aspire_es1_533_c3ry_nx_gfteu_003_584188aad03bc_images_1795586886.jpg',
            price: 7777 ,
            brand: 'Acer'
            
        },
        {
            name: 'HP 255 G5 (W4M55EA) Black',
            processor: 'Intel Celeron 3855U (1.6 ГГц)',
            accessMemory: '4 ГБ',
            color: 'Cеребристый',
            photo:'http://i1.rozetka.ua/goods/1836667/hp_w4m55ea_images_1836667527.jpg',
            price: 10000 ,
            brand: 'HP'
            
        },
        {
            name: 'HP ProBook 430 G3 (X0P48ES)',
            processor: 'Intel Core i5 (2.8 - 3.3 ГГц)',
            accessMemory: '8 ГБ',
            color:'Cерый',
            photo:'http://i1.rozetka.ua/goods/1715453/copy_hp_probook_430_w4n74ea_57c7db7768d95_images_1715453247.jpg',
            price: 11000 ,
            brand: 'HP'
            
        },
        {
            name: 'Apple A1707 MacBook Pro TB Retina 15" (MLH32UA/A) Space Gray ',
            processor: 'Intel Core i5 (2.8 - 3.3 ГГц)',
            accessMemory: '16 ГБ',
            color: 'Cерый',
            photo : 'http://i2.rozetka.ua/goods/1776994/apple_a1707_macbook_pro_tb_15_mlh32ua_a_images_1776994116.jpg',
            price: 28000 ,
            brand: 'Apple'
            
        },
        {
            name: 'Apple MacBook 12" Silver (MLHA2UA/A) ',
            processor: 'Intel Core i5 (2.8 - 3.3 ГГц)',
            accessMemory: '16 ГБ',
            color: 'Cерый',
            photo : 'http://i1.rozetka.ua/goods/1549522/apple_mlha2ua_a_images_1549522213.jpg',
            price: 49000 ,
            brand: 'Apple'
            
        }
        
        
    ]
    
	 vm.filter6 = function(element){
        var check = true;
		 
		if(!vm.brand.asus&&!vm.brand.lenovo&&!vm.brand.acer&&!vm.brand.hp&&!vm.brand.dell&&!vm.brand.apple){
            return true;
        }
         
		 if(element.price<=vm.priceTo && element.price >= vm.priceFrom ){
            return true;
        }
		 
		 for(i in vm.brand){
           if(vm.brand[i]==element.brand){
               return true;
           }
       }
		  
		 
		 
//       
//        return false;
////		 
//		 if(element.color == vm.color){
//			 return true;
//		 }
//		 return  false;
//		 
//		 if(element.accessMemory = vm.accessMemory){
//			 return true;
//		 }
//		 return false;
	 }
   
	 
	 vm.phones = [
		 {
			 name:'Apple iPhone 7 32GB Silver ',
			 brand:'Apple',
			 price:20000 ,
			 color:'Cерый',
			 photo:'http://i1.rozetka.ua/goods/1757075/apple_iphone_7_32gb_silver_images_1757075048.jpg'
		 },{
			 name:'Meizu U10 32GB Black',
			 brand:'Meizu',
			 price:3800 ,
			 color:'Черный',
			 photo:'http://i2.rozetka.ua/goods/1777042/meizu_u10_32_black_images_1777042983.jpg'
		 },{
			 name:'Apple iPhone 6s 32GB Space Gray',
			 brand:'Apple',
			 price:15000 ,
			 color:'Черный',
			 photo:'http://i1.rozetka.ua/goods/1751063/copy_apple_iphone_6s_16gb_space_gray_57eccf69e57e5_images_1751063812.jpg'
		 },{
			 name:'Lenovo Vibe K5 Note (A7020A40) Grey',
			 brand:'Lenovo',
			 price:4500 ,
			 color:'Cерый',
			 photo:'http://i1.rozetka.ua/goods/1714467/lenovo_vibe_k5_note_grey_images_1714467990.jpg'
		 },{
			 name:'Samsung Galaxy J7 (2016) J710F/DS',
			 brand:'Samsung',
			 price:6400 ,
			 color:'Белый',
			 photo:'http://i1.rozetka.ua/goods/1586517/copy_samsung_sm_j710fzdusek_573310b1aa6e3_images_1586517528.jpg'
		 },{
			 name:' Lenovo Vibe P1m White ',
			 brand:'Lenovo',
			 price:5000 ,
			 color:'Белый',
			 photo:'http://i1.rozetka.ua/goods/1287900/lenovo_vibe_p1m_white_images_1287900186.jpg'
		 },{
			 name:'Apple iPhone SE 16GB Silver',
			 brand:'Apple',
			 price:12000 ,
			 color:'Cеребристый',
			 photo:'http://i2.rozetka.ua/goods/1491997/apple_iphone_se_16gb_silver_images_1491997286.jpg'
		 },{
			 name:'Lenovo A Plus (A1010a20) Black',
			 brand:'Lenovo',
			 price:3500 ,
			 color:'Черный',
			 photo:'http://i2.rozetka.ua/goods/1737105/lenovo_a1010a20_black_images_1737105171.jpg'
		 },{
			 name:'Apple iPhone 5s 16GB White',
			 brand:'Apple',
			 price:11000 ,
			 color:'Белый',
			 photo:'http://i1.rozetka.ua/goods/1538020/apple_iphone_5s_16gb_silver_images_1538020282.jpg'
		 },{
			 name:'Samsung Galaxy J1 2016 SM-J120H Black ',
			 brand:'Samsung',
			 price:2300 ,
			 color:'Черный',
			 photo:'http://i2.rozetka.ua/goods/1449595/samsung_galaxy_j1_2016_sm_j120h_black_images_1449595654.jpg'
		 },{
			 name:'Meizu M3E 32GB',
			 brand:'Meizu',
			 price:4000 ,
			 color:'Черный',
			 photo:'http://i1.rozetka.ua/goods/1797093/meizu_m3e_32_gr_eu_images_1797093307.jpg'
		 },{
			 name:'Apple iPhone SE 16GB Space Gray',
			 brand:'Apple',
			 price:13000 ,
			 color:'Черный',
			 photo:'http://i2.rozetka.ua/goods/1492201/apple_iphone_se_16gb_space_gray_images_1492201931.jpg'
		 },
	 ]
	
  vm.technique = [
	  {
		  name:'INDESIT DIF 16B1 A ',
		  type:'посудомоечная машина',
		  price:6500 ,
		  photo:'http://i1.rozetka.ua/goods/1690663/indesit-dif-16b1-a-eu_images_1690663881.jpg'
	  },
	  {
		  name:'SAMSUNG RSA1RHMG1/BWT',
		  type:'холодильник',
		  price:27000,
		  photo:'http://i1.rozetka.ua/goods/1698163/side-by-side--samsung-rsa1rhmg1bwt_images_1698163121.jpg'
		  
	  },
	  {
		  name:'BOSCH KAI 90 VI 20 ',
		  type:'холодильник',
		  price:37000,
		  photo:'http://i2.rozetka.ua/goods/1698361/5997633_images_1698361312.jpg'
		  
	  },{
		  name:'HOTPOINT ARISTON RSPD 723 D UA ',
		  type:'стиральная машина',
		  price:8700 ,
		  photo:'http://i1.rozetka.ua/goods/1782163/hotpoint_ariston_rspd_723_d_ua_images_1782163273.jpg'
	  },
	  {
		  name:'HAIER HRF-628DF6 ',
		  type:'холодильник',
		  price:22000,
		  photo:'http://i2.rozetka.ua/goods/1811990/haier_hrf-628df6_images_1811990929.jpg'
		  
	  },
	  {
		  name:'SAMSUNG RSA1RHMG1/BWT',
		  type:'холодильник',
		  price:27000,
		  photo:'http://i1.rozetka.ua/goods/1698163/side-by-side--samsung-rsa1rhmg1bwt_images_1698163121.jpg'
		  
	  },{
		  name:'SIEMENS SR64E007EU ',
		  type:'посудомоечная машина',
		  price:9999,
		  photo:'http://i2.rozetka.ua/goods/1757375/siemens_sr64e007eu_images_1757375866.jpg'
	  },{
		  name:'SAMSUNG WW60K42109SD/UA ',
		  type:'стиральная машина',
		  price:1300 ,
		  photo:'http://i1.rozetka.ua/goods/1862947/samsung_ww60k42109sd_ua_images_1862947694.jpg'
	  },{
		  name:'ARTEL Apetito 10-G Brown ',
		  type:'газовая плита',
		  price:4500 ,
		  photo:'http://i1.rozetka.ua/goods/1822651/copy_artel_apetito_10g_white_586b65d77abc2_images_1822651019.jpg'
	  },{
		  name:'ELECTROLUX EWS1256COU ',
		  type:'стиральная машина',
		  price:9000 ,
		  photo:'http://i2.rozetka.ua/goods/1698467/2319432_images_1698467950.jpg'
	  },{
		  name:'BOSCH SMI 50 D 45 ',
		  type:'посудомоечная машина',
		  price:15 ,
		  photo:'http://i1.rozetka.ua/goods/1505994/bosch-smi-50-d-45-eu_images_1505994185.jpg'
	  },{
		  name:'HANSA FCGW 51001 ',
		  type:'газовая плита',
		  price:3600 ,
		  photo:'http://i1.rozetka.ua/goods/355453/hansa-fcgw-51001_images_355453822.jpg'
	  }
  ]
  
  vm.forHome = [
	  {
		  name:'TFA 603017',
		  type:'настенные часы',
		  photo:'http://i1.rozetka.ua/goods/1380319/1554137_images_1380319053.jpg',
		  price:400
		  
	  },{
		  name:'Luminarc Volare Bone из 19 предметов (G5350)',
		  type:'сервиз',
		  photo:'http://i1.rozetka.ua/goods/1502417/luminarc_g5350_images_1502417248.jpg',
		  price:1050
		  
	  },{
		  name:'Vinzer Eco Ceramic Colorit 89459',
		  type:'набор посуды',
		  photo:'http://i1.rozetka.ua/goods/1483159/vinzer_89459_images_1483159632.jpg',
		  price:1300
		  
	  },{
		  name:'Luminarc Carine Eclipse из 19 предметов (H0431)',
		  type:'сервиз',
		  photo:'http://i1.rozetka.ua/goods/1493826/luminarc_h0431_images_1493826631.jpg',
		  price:1200
		  
	  },{
		  name:'UTA 01 R 02 ',
		  type:'настенные часы',
		  photo:'http://i2.rozetka.ua/goods/1486990/uta-01-r-02_images_1486990025.jpg',
		  price:240
		  
	  },{
		  name:'Lamart Stockage LTSSSET6 ',
		  type:'набор посуды ',
		  photo:'http://i1.rozetka.ua/goods/1574405/lamart_ltssset6_images_1574405743.jpg',
		  price:1500
		  
	  },{
		  name:'Luminarc Lotusia из 18 предметов (H3527)',
		  type:'сервиз',
		  photo:'http://i1.rozetka.ua/goods/1499033/luminarc_h3527_images_1499033483.jpg',
		  price:700
		  
	  },{
		  name:'LEFF LT16003',
		  type:'настенные часы',
		  photo:'http://i1.rozetka.ua/goods/1380307/707724_images_1380307437.jpg',
		  price:260
		  
	  },{
		  name:'Lora NA11KIT ',
		  type:'набор посуды ',
		  photo:'http://i1.rozetka.ua/goods/1571066/lora_h23_001_images_1571066526.jpg',
		  price:1200
		  
	  },{
		  name:'Luminarc Dream Grass из 19 предметов (J7638)',
		  type:'сервиз',
		  photo:'http://i2.rozetka.ua/goods/1493891/luminarc_j7638_images_1493891367.jpg',
		  price:1300
		  
	  },{
		  name:'BergHOFF Invicо ',
		  type:'набор посуды ',
		  photo:'http://i1.rozetka.ua/goods/1477055/berghoff_1112374_images_1477055527.jpg',
		  price:5000
		  
	  },
  ]
  
  vm.avto = [
	  {
		  name:'Pago m1 White',
		  type:'видеорегистраторы',
		  photo:'http://i1.rozetka.ua/goods/229088/pago_m1_images_229088147.jpg',
		  price:700
	  },{
		  name:'iCode 07 Base',
		  type:'автосигнализация',
		  photo:'http://i2.rozetka.ua/goods/8685/icode_07_base_images_8685402.jpg',
		  price:3000
	  },{
		  name:'HP f890g Dual Kit ',
		  type:'видеорегистраторы',
		  photo:'http://i2.rozetka.ua/goods/1747932/hp_f890g_dual_kit_images_1747932817.jpg',
		  price:4000
	  },{
		  name:'Tiger Escort ES-555',
		  type:'автосигнализация',
		  photo:'http://i1.rozetka.ua/goods/855088/tiger_escort_es-555_images_855088122.jpg',
		  price:1100
	  },{
		  name:'Sheriff APS-35 PRO ',
		  type:'автосигнализация',
		  photo:'http://i1.rozetka.ua/goods/9567/sheriff_aps_35_pro_images_9567933.jpg',
		  price:900
	  },{
		  name:'HP f870g ',
		  type:'видеорегистраторы',
		  photo:'http://i1.rozetka.ua/goods/1871663/hp_f870g_images_1871663330.jpg',
		  price:3000
	  },{
		  name:'Transcend DrivePro DP200 16GB',
		  type:'видеорегистраторы',
		  photo:'http://i2.rozetka.ua/goods/168602/transcend_drivepro_dp200_images_168602407.jpg',
		  price:4000
	  },{
		  name:'Sheriff ZX-1077 ',
		  type:'автосигнализация',
		  photo:'http://i2.rozetka.ua/goods/101808/sheriff_zx_1077_images_101808894.jpg',
		  price:2600
	  },
  ]
  
  vm.cottage = [
	  {
		  name:'Papatya Myra K Темно-зеленый (4334kmd)',
		  type:'шезлонг',
		  photo:'http://i1.rozetka.ua/goods/1841829/papatya_4334kmd_images_1841829376.jpg',
		  price:2000
	  }, {
		  name:'Кресло подвесное Украинские Конструкции Prestige Коричнево-Фиолетовое (NK-12993177) ',
		  type:'кресло',
		  photo:'http://i1.rozetka.ua/goods/1819617/13055147_images_1819617793.jpg',
		  price:4000
	  }, {
		  name:'Garden4You Montreal-2 Beige Striped (11772) ',
		  type:'шезлонг',
		  photo:'http://i1.rozetka.ua/goods/108637/g4u_montreal2_beige_striped_11772_images_108637449.jpg',
		  price:4000
	  }, {
		  name:'Кресло подвесное Украинские Конструкции Kit Коричнево-Кофейное (NK-4299312) ',
		  type:'кресло',
		  photo:'http://i1.rozetka.ua/goods/1819606/13055721_images_1819606327.jpg',
		  price:3500
	  }, {
		  name:'Papatya Myra Tex Тик с бежевым (4332kmd)',
		  type:'шезлонг',
		  photo:'http://i1.rozetka.ua/goods/1841878/papatya_4332kmd_images_1841878425.jpg',
		  price:4700
	  }, {
		  name:'Качели садовые GreenGard Таити (Т-004) ',
		  type:'качели',
		  photo:'http://i2.rozetka.ua/goods/1548375/greengard_t_004_images_1548375333.jpg',
		  price:7000
	  }, {
		  name:'Качели садовые Time Eco Дачная Желтая в клетку (4820195550076_yellow)',
		  type:'качели',
		  photo:'http://i1.rozetka.ua/goods/1660672/tome_eco_4820195550076_yellow_images_1660672871.jpg',
		  price:4000
	  }
  ]
  
  vm.sport = [
	  {
		  name:'Cronus Coupe 1.0 19 Yellow (00176-19)',
		  type:'велосипед',
		  photo:'http://i2.rozetka.ua/goods/1390419/cronus_00176_19_images_1390419003.jpg',
		  price:8000
	  },{
		  name:'Titan Matrix 12.5 Black/Red (KVN293)',
		  type:'велосипед',
		  photo:'http://i2.rozetka.ua/goods/1657516/titan_kvn293_images_1657516396.jpg',
		  price:4000
	  },{
		  name:'Epiphone DR-100 (A002318) Ebony CH HDWE ',
		  type:'гитара',
		  photo:'http://i2.rozetka.ua/goods/8881/epiphone_dr_100_ebony_a002318_images_8881517.jpg',
		  price:3600
	  },{
		  name:'Dragon Guide Select Monster (2.30 м) (CHC-25-06-230)',
		  type:'удилище',
		  photo:'http://i1.rozetka.ua/goods/586209/dragon_chc_25_06_230_images_586209057.jpg',
		  price:5000
	  },{
		  name:'Haibike Edition 7.40 27.5 50 Black-Blue-Green (4150927650) ',
		  type:'велосипед',
		  photo:'http://i2.rozetka.ua/goods/1598108/haibike_4150927650_images_1598108229.jpg',
		  price:15000
	  },{
		  name:'Takamine EG430S-WR Wine Red (213383) ',
		  type:'гитара',
		  photo:'http://i1.rozetka.ua/goods/14376/takamine_eg430s_wr_213383_images_14376584.png',
		  price:14000
	  },{
		  name:'Guild AD-3 (383-0080-821) Natural ',
		  type:'гитара',
		  photo:'http://i1.rozetka.ua/goods/190954/guild_ad3_nt_212529_images_190954297.jpg',
		  price:23000
	  },{
		  name:'Dragon Millenium HD Senso Jig (2.90 м) (CHD-23-28-290)',
		  type:'удилище',
		  photo:'http://i2.rozetka.ua/goods/589697/dragon_chd_23_36_181_images_589697937.jpg',
		  price:2000
	  },{
		  name:'Epiphone DR-212 CH HDWE (EA2TNACH1) Natural',
		  type:'гитара',
		  photo:'http://i2.rozetka.ua/goods/12334/epiphone_dr_212_natural_ch_hdwe_ea2tnach1_images_12334185.jpg',
		  price:7000
	  },
  ]
  
  vm.clothes = [
	  {
		  name:'OKS 1726_1553 M(40) (ok2000000135861)',
		  type:'платье',
		  photo:'http://i2.rozetka.ua/goods/1692389/oks_2000000135861_images_1692389542.jpg',
		  price:1000
	  },{
		  name:'Evercode 1463_968 S(38) (ev2000000087214)',
		  type:'платье',
		  photo:'http://i1.rozetka.ua/goods/1692208/evercode_2000000087214_images_1692208438.jpg',
		  price:700
	  },{
		  name:'Colin’s CL1017042PGR XS (8680594362795)',
		  type:'рубашка',
		  photo:'http://i2.rozetka.ua/goods/1211329/colins_8680594362795_images_1211329440.jpg',
		  price:400
	  },{
		  name:' Oodji 12909042/45372/7000W 36 (2020012305021)',
		  type:'платье',
		  photo:'http://i1.rozetka.ua/goods/1546914/oodji_2020012305021_images_1546914279.jpg',
		  price:900
	  },{
		  name:'Incity 1.1.2.16.01.43.00645/134308 48 (2029006904837) ',
		  type:'рубашка',
		  photo:'http://i1.rozetka.ua/goods/1752272/incity_2029006904837_images_1752272999.jpg',
		  price:350
	  },{
		  name:' Incity 1.1.2.16.01.44.00678/006160 42 (2029006899379) ',
		  type:'платье',
		  photo:'http://i2.rozetka.ua/goods/1744020/incity_2029006899379_images_1744020674.jpg',
		  price:800
	  },{
		  name:'Berenis 7184.3 XХХL Синее (5902667718403)',
		  type:'платье',
		  photo:'http://i1.rozetka.ua/goods/1552053/berenis_5902667718403_xxxl_images_1552053749.jpg',
		  price:650
	  },{
		  name:'Incity 1.1.2.16.01.44.00612/001179 42 (2029006894299) ',
		  type:'платье',
		  photo:'http://i1.rozetka.ua/goods/1746729/incity_2029006894299_images_1746729706.jpg',
		  price:450
	  },{
		  name:'OKS 1491_1538 S(38) (ok2000000133959)',
		  type:'рубашка',
		  photo:'http://i1.rozetka.ua/goods/1692229/oks_2000000133959_images_1692229144.jpg',
		  price:750
	  },{
		  name:'Adelin Fostayn 6216.6 XXXL Желтая (5902667621606)',
		  type:'рубашка',
		  photo:'http://i2.rozetka.ua/goods/1486299/af5902667621606_xxxl_images_1486299279.jpg',
		  price:470
	  }
  ]
  
  vm.beauty = [
	  {
		  name:'Gucci Flora by Gucci Generous Violet for Woman 100 мл (737052522722) ',
		  type:'парфюмерия',
		  photo:'http://i1.rozetka.ua/goods/1736903/gucci_737052522722_images_1736903641.jpg',
		  price:1040
	  },{
		  name:'Versace Bright Crystal Absolu EDP Spray 90 мл (8011003818112) ',
		  type:'парфюмерия',
		  photo:'http://i1.rozetka.ua/goods/1733628/versace_img447_images_1733628831.jpg',
		  price:1400
	  },{
		  name:'Christina Aguilera Red Sin 30 мл (737052554303) ',
		  type:'парфюмерия',
		  photo:'http://i1.rozetka.ua/goods/449576/christina_aguilera_737052554303_images_449576042.jpg',
		  price:409
	  },{
		  name:'Mexx Woman 20 мл (737052682358)',
		  type:'парфюмерия',
		  photo:'http://i1.rozetka.ua/goods/451591/mexx_737052682358_images_451591447.jpg',
		  price:300
	  },{
		  name:'Versace Crystal Noir EDT Spray 50 мл (img454)',
		  type:'парфюмерия',
		  photo:'http://i1.rozetka.ua/goods/1733765/versace_img454_images_1733765247.jpg',
		  price:950
	  },{
		  name:'Gucci Flora by Gucci Glorious Mandarin for Woman 50 мл (737052643403)',
		  type:'парфюмерия',
		  photo:'http://i1.rozetka.ua/goods/1736905/gucci_737052643403_images_1736905104.jpg',
		  price:500
	  },{
		  name:'Gucci Premier Edt Spray 75 мл (img0428_75) ',
		  type:'парфюмерия',
		  photo:'http://i2.rozetka.ua/goods/1731774/copy_gucci_img028_30_57d908eadcd00_images_1731774888.jpg',
		  price:1000
	  }
  ]
  
  vm.books = [
	  {
		  name:'До встречи с тобой ',
		  type:' книги',
		  photo:'http://i1.rozetka.ua/goods/1418133/6518914_images_1418133639.jpg',
		  price:90
	  },{
		  name:'Зеленая миля - (9785170756377)',
		  type:' книги',
		  photo:'http://i2.rozetka.ua/goods/1417854/6495724_images_1417854165.jpg',
		  price:151
	  },{
		  name:'Наш секрет',
		  type:' книги',
		  photo:'http://i2.rozetka.ua/goods/1722639/11195258_images_1722639265.jpg',
		  price:87
	  },{
		  name:'Фантастичні звірі і де їх шукати ',
		  type:' книги',
		  photo:'http://i1.rozetka.ua/goods/1417697/6480148_images_1417697295.jpg',
		  price:105
	  },{
		  name:'Моя дорога птаха. Мамина книжка',
		  type:' книги',
		  photo:'http://i1.rozetka.ua/goods/1417917/6501490_images_1417917927.png',
		  price:66
	  },{
		  name:'Вогонь з Холодного Яру. Стежками Холодноярськими',
		  type:' книги',
		  photo:'http://i2.rozetka.ua/goods/1417962/6505492_images_1417962309.jpg',
		  price:85
	  },{
		  name:'Никогда не ешьте в одиночку и другие правила нетворкинга - (9785000570906) ',
		  type:' книги',
		  photo:'http://i1.rozetka.ua/goods/1425794/6655509_images_1425794799.jpg',
		  price:333
	  },{
		  name:'Как я создал Wal-Mart ',
		  type:' книги',
		  photo:'http://i2.rozetka.ua/goods/1418524/6578817_images_1418524761.jpg',
		  price:300
	  },{
		  name:'Виноваты звезды ',
		  type:' книги',
		  photo:'http://i1.rozetka.ua/goods/1417726/6485638_images_1417726623.jpg',
		  price:200
	  },{
		  name:'Шантарам - (9785389010956) ',
		  type:' книги',
		  photo:'http://i2.rozetka.ua/goods/1418021/6511570_images_1418021295.jpg',
		  price:250
	  },
  ]
})