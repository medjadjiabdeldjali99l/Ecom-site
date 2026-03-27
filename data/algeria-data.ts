import { Wilaya, DeliveryPricing } from "@/types/types";

// Complete list of 58 Algerian Wilayas with their communes
export const WILAYAS: Wilaya[] = [
  {
    code: "01",
    name: "Adrar",
    communes: ["Adrar", "Tamest", "Reggane", "Inzegmir", "Tit", "Ksar Kaddour", "Tsabit", "Timimoun", "Ouled Ahmed Timmi", "Talmine", "Aoulef", "Timokten", "Tamantit", "Fenoughil", "Tinerkouk", "Deldoul", "Charouine", "Sbaa", "Ouled Said", "Tamekten", "Sali", "Akabli", "Metarfa", "Ouled Aissa", "Bouda", "Aougrout", "Zaouiet Kounta", "In Ghar"]
  },
  {
    code: "02",
    name: "Chlef",
    communes: ["Chlef", "Tenes", "Benairia", "El Karimia", "Tadjena", "Taougrit", "Beni Haoua", "Sobha", "Harchoun", "Ouled Fares", "Sidi Akkacha", "Boukadir", "Beni Rached", "Talassa", "Herenfa", "Oued Goussine", "Dahra", "Ouled Abbes", "Sendjas", "Zeboudja", "Oued Sly", "Abou El Hassan", "El Marsa", "Chettia", "Sidi Abderrahmane", "Moussadek", "El Hadjadj", "Labiod Medjadja", "Oued Fodda", "Ouled Ben Abdelkader", "Bouzghaia", "Ain Merane", "Oum Drou", "Breira", "Beni Bouateb", "Beni Zentis", "Ain Oussara"]
  },
  {
    code: "03",
    name: "Laghouat",
    communes: ["Laghouat", "Ksar El Hirane", "Bennasser Benchohra", "Sidi Makhlouf", "Hassi Delaa", "Hassi R'Mel", "Ain Madhi", "Tadjemout", "Kheneg", "Gueltat Sidi Saad", "Ain Sidi Ali", "Beidha", "Brida", "El Ghicha", "Hadj Mechri", "Sebgag", "Taouiala", "Tadjrouna", "Aflou", "El Assafia", "Oued Morra", "Oued M'Zi", "El Houaita", "Sidi Bouzid"]
  },
  {
    code: "04",
    name: "Oum El Bouaghi",
    communes: ["Oum El Bouaghi", "Ain Beida", "Ain M'Lila", "Behir Chergui", "El Amiria", "Sigus", "El Belala", "Ain Babouche", "Berriche", "Ouled Hamla", "Dhalaa", "Ain Kercha", "Hanchir Toumghani", "El Djazia", "Ain Diss", "Fkirina", "Souk Naamane", "Zorg", "El Fedjoudj Boughrara Saoudi", "Ouled Zouai", "Bir Chouhada", "Ksar Sbahi", "Oued Nini", "Meskiana", "Ain Fakroun", "Rahia", "Ain Zitoun", "Ouled Gacem", "El Harmilia"]
  },
  {
    code: "05",
    name: "Batna",
    communes: ["Batna", "Ghassira", "Maafa", "Merouana", "Seriana", "Menaa", "El Madher", "Tazoult", "N'Gaous", "Guigba", "Inoughissen", "Ouyoun El Assafir", "Djerma", "Bitam", "Abdelkader Azil", "Arris", "Kimmel", "Tilatou", "Ain Djasser", "Ouled Sellam", "Tigherghar", "Ain Yagout", "Fesdis", "Sefiane", "Rahbat", "Tighanimine", "Lemsane", "Ksar Bellezma", "Seggana", "Ichmoul", "Foum Toub", "Beni Foudhala El Hakania", "Oued El Ma", "Talkhamt", "Bouzina", "Chemora", "Oued Chaaba", "Taxlent", "Gosbat", "Ouled Aouf", "Boumagueur", "Barika", "Djezzar", "T'Kout", "Ain Touta", "Hidoussa", "Teniet El Abed", "Oued Taga", "Ouled Fadel", "Timgad", "Ras El Aioun", "Chir", "Ouled Si Slimane", "Zanat El Beida", "M'Doukal", "Ouled Ammar", "El Hassi", "Lazrou", "Boumia", "Boulhilat", "Larbaâ"]
  },
  {
    code: "06",
    name: "Béjaïa",
    communes: ["Béjaïa", "Amizour", "Ferraoun", "Taourirt Ighil", "Chelata", "Tamokra", "Timezrit", "Souk El Thenine", "M'Cisna", "Tinebdar", "Tichy", "Semaoun", "Kendira", "Tifra", "Ighram", "Amalou", "Ighil Ali", "Fenaia Ilmaten", "Toudja", "Darguina", "Sidi Ayad", "Aokas", "Beni Djellil", "Adekar", "Akbou", "Seddouk", "Tazmalt", "Ait Rizine", "Chemini", "Souk Oufella", "Taskriout", "Tibane", "Tala Hamza", "Barbacha", "Beni Ksila", "Ouzellaguen", "Bouhamza", "Beni Melikeche", "Sidi Aich", "El Kseur", "Melbou", "Akfadou", "Leflaye", "Kherrata", "Draa Kaid", "Tamridjet", "Ait Smail", "Boukhelifa", "Tizi N'Berber", "Beni Maouche", "Oued Ghir", "Boudjellil"]
  },
  {
    code: "07",
    name: "Biskra",
    communes: ["Biskra", "Ouled Djellal", "Sidi Okba", "Sidi Khaled", "El Kantara", "Ain Naga", "Zeribet El Oued", "El Feidh", "El Amri", "El Hadjeb", "Ras El Miaad", "Besbes", "Chaiba", "Ourlal", "Mekhadma", "El Ghrous", "El Mizaraa", "Bouchagroun", "Ain Zaatout", "El Haouch", "Djemorah", "Tolga", "Lioua", "Lichana", "Ouled Djellal", "M'Lili", "Foughala", "Bordj Ben Azzouz", "Meziraa", "Beni Souik", "M'Ziraa", "Chetma", "Oumache"]
  },
  {
    code: "08",
    name: "Béchar",
    communes: ["Béchar", "Erg Ferradj", "Ouled Khoudir", "Meridja", "Timoudi", "Lahmar", "Beni Ounif", "Taghit", "El Ouata", "Boukais", "Mougheul", "Abadla", "Kerzaz", "Ksabi", "Tamtert", "Beni Ikhlef", "Tabelbala", "Igli", "Mechraa Houari Boumediene", "Kenadsa", "Ouled Khodeir"]
  },
  {
    code: "09",
    name: "Blida",
    communes: ["Blida", "Chrea", "Bouinan", "Oued El Alleug", "Ouled Yaich", "Chebli", "Boufarik", "Soumaa", "Mouzaia", "El Affroun", "Hammam Melouane", "Ben Khellil", "Souhane", "Meftah", "Ouled Slama", "Bougara", "Guerrouaou", "Ain Romana", "Djebabra", "Beni Tamou", "Bouarfa", "Beni Mered", "Benkhelil", "Oued Djer", "Larbaâ"]
  },
  {
    code: "10",
    name: "Bouira",
    communes: ["Bouira", "El Asnam", "Guerrouma", "Souk El Khemis", "Kadiria", "Hanif", "Dirah", "Ait Laaziz", "Taghzout", "Raouraoua", "Mezdour", "Haizer", "Lakhdaria", "Maala", "El Hachimia", "Aomar", "Chorfa", "Bordj Okhriss", "El Adjiba", "El Hakimia", "Ahl El Ksar", "Bouderbala", "Zbarbar", "Ain El Hadjar", "Djebahia", "Aghbalou", "Taguedit", "Ait Mahmoud", "Bechloul", "Boukram", "Ain Bessem", "Bir Ghbalou", "Hadjera Zerga", "Ath Mansour", "El Mokrani", "Saharidj", "Dechmia", "Ridane", "Ain Turk", "Ouled Rached", "M'Chedallah", "Sour El Ghozlane", "Maamora", "Oued El Berdi", "Ain Laloui"]
  },
  {
    code: "11",
    name: "Tamanrasset",
    communes: ["Tamanrasset", "Abalessa", "In Ghar", "In Guezzam", "In Salah", "Tazrouk", "Tin Zaouatine", "Idles", "In Amguel", "Foggaret Ezzaouia"]
  },
  {
    code: "12",
    name: "Tébessa",
    communes: ["Tébessa", "Bir El Ater", "Cheria", "Stah Guentis", "El Aouinet", "Lahouidjbet", "Safsaf El Ouesra", "Hammamet", "Negrine", "Bir Mokkadem", "El Kouif", "Morsott", "El Ogla", "Bir Dheheb", "El Ogla El Malha", "Gorriguer", "Bekkaria", "Boukhadra", "Ouenza", "El Ma Labiod", "Tlidjene", "Ain Zerga", "El Meridj", "Boulhaf Dyr", "Bedjene", "El Mezeraa", "Ferkane", "Oum Ali"]
  },
  {
    code: "13",
    name: "Tlemcen",
    communes: ["Tlemcen", "Beni Mester", "Ain Tallout", "Remchi", "El Fehoul", "Sabra", "Ghazaouet", "Souani", "Djebala", "El Gor", "Oued Lakhdar", "Ain Fezza", "Ouled Mimoun", "Amieur", "Ain Youcef", "Zenata", "Beni Snous", "Bab El Assa", "Dar Yaghmouracene", "Fellaoucene", "Azails", "Sebbaa Chioukh", "Terni Beni Hediel", "Bensekrane", "Ain Nehala", "Hennaya", "Maghnia", "Hammam Boughrara", "Souahlia", "Msirda Fouaga", "Ain Fetah", "El Aricha", "Souk Thlata", "Sidi Abdelli", "Sebdou", "Beni Ouarsous", "Sidi Medjahed", "Beni Boussaid", "Marsa Ben M'Hidi", "Nedroma", "Sidi Djillali", "Beni Bahdel", "El Bouihi", "Honaine", "Tianet", "Ouled Riyah", "Bouhlou", "Souk El Khemis", "Ain Ghoraba", "Chetouane", "Mansourah", "Beni Semiel", "Ain Kebira"]
  },
  {
    code: "14",
    name: "Tiaret",
    communes: ["Tiaret", "Medroussa", "Ain Bouchekif", "Sidi Ali Mellal", "Ain Zarit", "Ain Deheb", "Sidi Bakhti", "Medrissa", "Zmalet El Emir Abdelkader", "Madna", "Sebt", "Mellakou", "Dahmouni", "Rahouia", "Mahdia", "Sougueur", "Sidi Abdelghani", "Ain El Hadid", "Ouled Djerad", "Naima", "Meghila", "Guertoufa", "Sidi Hosni", "Djillali Ben Amar", "Sebaine", "Tousnina", "Frenda", "Ain Kermes", "Ksar Chellala", "Rechaiga", "Nadorah", "Tagdemt", "Oued Lilli", "Mechraa Safa", "Hamadia", "Chehaima", "Takhemaret", "Sidi Abderrahmane", "Serghine", "Bougara", "Faidja", "Tidda"]
  },
  {
    code: "15",
    name: "Tizi Ouzou",
    communes: ["Tizi Ouzou", "Ain El Hammam", "Akbil", "Freha", "Souamaa", "Mechtrass", "Irdjen", "Timizart", "Makouda", "Draa El Mizan", "Tizi Gheniff", "Bounouh", "Ait Chafaa", "Frikat", "Beni Aissi", "Beni Zmenzer", "Iferhounene", "Azazga", "Illoula Oumalou", "Yakouren", "Larbaâ Nath Irathen", "Tizi Rached", "Zekri", "Ouaguenoun", "Ain Zaouia", "M'Kira", "Ait Yahia", "Ait Mahmoud", "Maatkas", "Ait Boumehdi", "Abi Youcef", "Beni Douala", "Illilten", "Bouzeguene", "Ait Aggouacha", "Ouadhia", "Azeffoun", "Tigzirt", "Ait Aissa Mimoun", "Boghni", "Ifigha", "Ait Oumalou", "Tirmitine", "Akerrou", "Yatafen", "Beni Ziki", "Draa Ben Khedda", "Ouacif", "Idjeur", "Mekla", "Tizi N'Tleta", "Beni Yenni", "Aghribs", "Iflissen", "Boudjima", "Ait Yahia Moussa", "Souk El Thenine", "Ait Khelili", "Sidi Naamane", "Iboudraren", "Agouni Gueghrane", "Mizrana", "Imsouhal", "Tadmait", "Ait Bouaddou", "Assi Youcef", "Ait Toudert"]
  },
  {
    code: "16",
    name: "Alger",
    communes: ["Sidi M'Hamed", "El Madania", "Belouizdad", "Bab El Oued", "Bologhine", "Casbah", "Oued Koriche", "Bir Mourad Rais", "El Biar", "Bouzareah", "Birkhadem", "El Harrach", "Baraki", "Oued Smar", "Bourouba", "Hussein Dey", "Kouba", "Bachdjerrah", "Dar El Beida", "Bab Ezzouar", "Ben Aknoun", "Dely Ibrahim", "El Hammamet", "Rais Hamidou", "Djasr Kasentina", "El Mouradia", "Hydra", "Mohammadia", "Bordj El Kiffan", "El Magharia", "Beni Messous", "Les Eucalyptus", "Birtouta", "Tessala El Merdja", "Ouled Chebel", "Sidi Moussa", "Ain Taya", "Bordj El Bahri", "El Marsa", "H'raoua", "Rouiba", "Reghaïa", "Ain Benian", "Staoueli", "Zeralda", "Mahelma", "Rahmania", "Souidania", "Cheraga", "Ouled Fayet", "El Achour", "Draria", "Douera", "Baba Hassen", "Khraicia", "Saoula"]
  },
  {
    code: "17",
    name: "Djelfa",
    communes: ["Djelfa", "Moudjbara", "El Guedid", "Hassi Bahbah", "Ain Maabed", "Sed Rahal", "Feidh El Botma", "Birine", "Bouira Lahdab", "Zaccar", "El Khemis", "Sidi Baizid", "M'Liliha", "El Idrissia", "Douis", "Hassi El Euch", "Messaad", "Guettara", "Ain El Ibel", "Dار Chioukh", "Charef", "Beni Yagoub", "Zaafrane", "Deldoul", "Ain Chouhada", "Oum Laadham", "Ain Oussera", "Benhar", "Hassi Fedoul", "Guernini", "Sidi Ladjel", "Had Sahary", "Guedid", "Ain Fekka", "Tadmit", "El Bira", "Amourah"]
  },
  {
    code: "18",
    name: "Jijel",
    communes: ["Jijel", "Erraguene", "El Aouana", "Ziama Mansouriah", "Taher", "Emir Abdelkader", "Chekfa", "Chahna", "El Milia", "Sidi Maarouf", "Settara", "El Ancer", "Sidi Abdelaziz", "Kaous", "Ghebala", "Bouraoui Belhadef", "Djimla", "Selma Benziada", "Boussif Ouled Askeur", "El Kennar Nouchfi", "Ouled Yahia Khedrouche", "Boudria Beni Yadjis", "Kemir Oued Adjoul", "Texenna", "Djemaa Beni Habibi", "Bordj Taher", "Ouled Rabah", "Ouadjana"]
  },
  {
    code: "19",
    name: "Sétif",
    communes: ["Sétif", "Ain El Kebira", "Beni Aziz", "Ouled Sidi Ahmed", "Boutaleb", "Ain Roua", "Draa Kebila", "Bir El Arch", "Beni Chebana", "Ouled Tebben", "Hamma", "Maoklane", "Guenzet", "Mezloug", "Bir Haddada", "Serdj El Ghoul", "Harbil", "El Ouricia", "Tizi N'Bechar", "Salah Bey", "Ain Azal", "Guellal", "Ain Lahdjar", "Bousselam", "Ouled Sabor", "Guelta Zerka", "Oued El Barad", "Talaifacene", "Beidha Bordj", "El Eulma", "Djemila", "Beni Ouartilene", "Rosfa", "Ouled Addouane", "Belaa", "Ain Arnat", "Amoucha", "Ain Oulmene", "Babor", "Guidjel", "Bazer Sakhra", "Hammam Essokhna", "Bir Kasdali", "Ouled Brahem", "Sétif Sud", "Tachouda", "Bougaa", "Bouandas", "El Ouldja", "Taya", "El Ouricia", "Tella", "Beni Mouhli", "Hammam Guergour", "Ait Naoual Mezada", "Ksar El Abtal", "Beni Fouda", "Tachouda", "Ait Tizi"]
  },
  {
    code: "20",
    name: "Saïda",
    communes: ["Saïda", "Doui Thabet", "Ain El Hadjar", "Ouled Khaled", "Moulay Larbi", "Youb", "Hounet", "Sidi Amar", "Sidi Boubekeur", "El Hassasna", "Maamora", "Sidi Ahmed", "Ain Sekhouna", "Ouled Brahim", "Tircine", "Ain Soltane"]
  },
  {
    code: "21",
    name: "Skikda",
    communes: ["Skikda", "Ain Zouit", "El Hadaiek", "Azzaba", "Djendel Saadi Mohamed", "Ain Cherchar", "Bekkouche Lakhdar", "Beni Zid", "Kerkera", "Ouled Attia", "Oued Zehour", "Collo", "Beni Bachir", "Salah Bouchaour", "Tamalous", "Ain Bouziane", "Ramdane Djamel", "Beni Oulbane", "Ouled Hbaba", "Sidi Mezghiche", "Emdjez Edchich", "Bou Chtata", "Oum Toub", "Zitouna", "El Harrouch", "Zerdazas", "Ouled Hebaba", "Sfisef", "Hamadi Krouma", "Filfila", "Cheraia", "Kanoua", "El Ghedir", "Bouchtata", "Ouldja Boulbalout", "Kheneg Mayoum", "Es Sebt", "Ain Kechra"]
  },
  {
    code: "22",
    name: "Sidi Bel Abbès",
    communes: ["Sidi Bel Abbès", "Tessala", "Sidi Brahim", "Mostefa Ben Brahim", "Telagh", "Mezaourou", "Boukhanefis", "Sidi Ali Boussidi", "Badredine El Mokrani", "Marhoum", "Tafissour", "Amarnas", "Tilmouni", "Sidi Lahcene", "Ain El Berd", "Sfizef", "Ain Thrid", "Merine", "Ras El Ma", "Sidi Khaled", "Ain Tindamine", "Moulay Slissen", "El Hacaiba", "Hassi Zahana", "Tabia", "Merine", "Sidi Ali Benyoub", "Sidi Yacoub", "Redjem Demouche", "Teghalimet", "Sidi Hamadouche", "Birhamdane", "Ain Kada", "Mcid", "Sidi Chaib", "Ras El Ma", "Ain Trid", "Benachiba Chelia", "Hassi Dahou", "Oued Sefioun", "Tenira", "Moulay Slissen", "El Bordj", "Dhaya", "Hassi Zehana", "Taoudmout", "Chetouane Belaila", "Sidi Brahim", "Boudjebaa El Bordj", "Badredine El Mokrani", "Sidi Ali Boussidi", "Amarnas", "Oued Taourira", "Sehala Thaoura", "Ain Thrid"]
  },
  {
    code: "23",
    name: "Annaba",
    communes: ["Annaba", "Berrahal", "El Hadjar", "Eulma", "El Bouni", "Oued El Aneb", "Cheurfa", "Seraidi", "Ain Berda", "Chetaibi", "Sidi Amar", "Treat"]
  },
  {
    code: "24",
    name: "Guelma",
    communes: ["Guelma", "Nechmaya", "Bouati Mahmoud", "Oued Zenati", "Tamlouka", "Oued Fragha", "Ain Sandel", "Ras El Agba", "Dahouara", "Belkheir", "Ben Djerrah", "Bou Hamdane", "Ain Makhlouf", "Ain Ben Beida", "Khezara", "Djebala Khemissi", "Beni Mezline", "Bouhamdane", "Medjez Amar", "Bouchegouf", "Heliopolis", "Ain Larbi", "Oued Cheham", "Djeballah Khemissi", "Houari Boumediene", "Medjez Sfa", "Bordj Sabath", "Hammam Debagh", "Roknia", "Sellaoua Announa", "Hammam N'Bail", "Belkheir", "Bouati Mahmoud", "Bou Hamdane"]
  },
  {
    code: "25",
    name: "Constantine",
    communes: ["Constantine", "Hamma Bouziane", "Didouche Mourad", "El Khroub", "Ain Smara", "Zighoud Youcef", "Ouled Rahmoune", "Ain Abid", "Ibn Ziad", "Ben Badis", "Messaoud Boudjeriou", "Beni Hamiden"]
  },
  {
    code: "26",
    name: "Médéa",
    communes: ["Médéa", "Ouzera", "Ouled Maaref", "Ain Boucif", "Ouamri", "Derrag", "El Hamdania", "Tamesguida", "El Guelb El Kebir", "Bouaiche", "Berrouaghia", "Seghouane", "Chellalet El Adhaoura", "Souagui", "Beni Slimane", "El Omaria", "Ouled Deide", "Ain Ouksir", "Chahbounia", "Boughezoul", "Ksar Boukhari", "El Azizia", "Djouab", "Cheniguel", "Ain Boucif", "Sidi Naamane", "Zoubiria", "Kef Lakhdar", "Chellalet El Adhaoura", "Beni Slimane", "Tafraout", "Hannacha", "Sidi Zahar", "Sidi Errabia", "Tizi Mahdi", "Benchicao", "Tablat", "Deux Bassins", "Draa Essamar", "Sidi Ziane", "Ouled Antar", "Bouaichoune", "Khams Djouamaa", "Maghraoua", "Sedraia", "Bouaiche", "Rebaia", "Baata", "Boghar", "Sidi Damed", "El Hamdania", "Mezerana", "Mihoub", "Bouchrahil", "Ain Ouksir", "Aziz", "Oued Harbil", "Ouled Hellal", "Tafraout", "Ain Boucif", "Ouled Brahim"]
  },
  {
    code: "27",
    name: "Mostaganem",
    communes: ["Mostaganem", "Sayada", "Fornaka", "Stidia", "Ain Nouissy", "Hassi Mameche", "Ain Tedles", "Sidi Ali", "Kheiredine", "Sidi Lakhdar", "Achaacha", "Khadra", "Nekmaria", "Sidi Belattar", "Oued El Kheir", "El Hassiane", "Ain Sidi Cherif", "Mesra", "Mansourah", "Souaflia", "Sour", "Oued El Kheir", "Sirat", "Ain Boudinar", "Tazgait", "Sidi Belattar", "Bouguirat", "Mazagran", "Hadjadj", "Mesra", "Hassiane", "Ain Nouissy", "Touahria"]
  },
  {
    code: "28",
    name: "M'Sila",
    communes: ["M'Sila", "Maadid", "Hammam Dalaa", "Ouled Derradj", "Tarmount", "Mtarfa", "Khoubana", "M'Cif", "Chellal", "Ouled Madhi", "Magra", "Berhoum", "Ain El Hadjel", "Ain El Melh", "Bou Saada", "Ouled Sidi Brahim", "Sidi Ameur", "Tamsa", "Ben Srour", "Ouled Addi Guebala", "Belaiba", "Sidi Hadjeres", "Ouanougha", "Beni Ilmane", "Ouled Slimane", "El Houamed", "Magra", "Bir Foda", "Ain Fares", "Khettouti Sed El Djir", "Zarzour", "Mohamed Boudiaf", "Ouled Mansour", "Dehahna", "Bouti Sayah", "Ain Khadra", "Maarif", "Djebel Messaad", "Slim", "Ain El Melh", "Souamaa", "Sidi M'Hamed", "Medjedel", "Ouled Atia", "Oultem", "Benzouh"]
  },
  {
    code: "29",
    name: "Mascara",
    communes: ["Mascara", "Bou Hanifia", "Tizi", "Ain Fares", "Ghriss", "Froha", "Matemore", "Makdha", "Sidi Kada", "Tighenif", "Oued El Abtal", "Ain Fekan", "Guerdjoum", "Bouhanifia", "Khalouia", "El Menaouer", "Sidi Abdelmoumene", "Ain Ferah", "Alaimia", "Sedjerara", "Mohammadia", "Sidi Boussaid", "El Bordj", "Ain Fares", "Benian", "Hachem", "Zelmata", "Oued Taria", "Aouf", "Mamounia", "Gharrous", "Guettena", "Sig", "Oggaz", "Tighennif", "Zahana", "Mohammadia", "Sidi Abdeldjebar", "El Gaada", "Chorfa", "Ras Ain Amirouche", "Nesmot", "Sidi Abdelmoumene", "Ain Fares", "El Hachem", "Sehailia", "Ferraguig", "El Keurt"]
  },
  {
    code: "30",
    name: "Ouargla",
    communes: ["Ouargla", "Ain Beida", "N'Goussa", "Hassi Messaoud", "Rouissat", "Ain El Beida", "Sidi Khouiled", "Hassi Ben Abdellah", "Tebesbest", "El Alia", "Zaouia El Abidia", "Touggourt", "Nezla", "Tebesbest", "Taibet", "Mnaguer", "Blidet Amor", "Sidi Slimane", "El Hadjira", "Temacine", "Benaceur", "Megarine", "Sidi Amrane", "El Borma"]
  },
  {
    code: "31",
    name: "Oran",
    communes: ["Oran", "Gdyel", "Bir El Djir", "Hassi Bounif", "Es Senia", "Arzew", "Bethioua", "Marsat El Hadjadj", "Ain Turk", "El Ancar", "Oued Tlelat", "Tafraoui", "Sidi Chami", "Boufatis", "Mers El Kebir", "Bousfer", "El Karma", "El Braya", "Hassi Ben Okba", "Ben Freha", "Hassi Mefsoukh", "Sidi Ben Yabka", "Messerghin", "Boutlelis", "Ain Kerma", "Ain Biya", "El Ancor"]
  },
  {
    code: "32",
    name: "El Bayadh",
    communes: ["El Bayadh", "Rogassa", "Stitten", "Brezina", "Ghassoul", "Boualem", "El Abiodh Sidi Cheikh", "Ain El Orak", "Arbaouat", "Bougtoub", "El Kheiter", "Kef El Ahmar", "Boussemghoun", "Chellala", "Krakda", "El Mehara", "Tousmouline", "El Bnoud", "Cheguig", "Sidi Ameur", "El Aouedj", "Labiodh Sidi Cheikh"]
  },
  {
    code: "33",
    name: "Illizi",
    communes: ["Illizi", "Djanet", "Debdeb", "Bordj Omar Driss", "Bordj El Haouasse", "In Amenas"]
  },
  {
    code: "34",
    name: "Bordj Bou Arreridj",
    communes: ["Bordj Bou Arreridj", "Ras El Oued", "Bordj Zemoura", "Mansoura", "El Mehir", "El Achir", "Ain Taghrout", "Bordj Ghdir", "Sidi Embarek", "El Hamadia", "Belimour", "Medjana", "Teniet En Nasr", "Djaafra", "El Main", "Ouled Brahem", "Ouled Dahmane", "Hasnaoua", "Khelil", "Ksour", "El Ach", "Colla", "Tixter", "Bir Kasdali", "Ben Daoud", "Ghilassa", "Rabta", "Haraza", "Taglait", "Ouled Sidi Brahim", "Tefreg", "Ain Tesra", "Bir Kasdali", "Bordj Ghdir", "El Mehir"]
  },
  {
    code: "35",
    name: "Boumerdès",
    communes: ["Boumerdès", "Boudouaou", "Afir", "Bordj Menaiel", "Baghlia", "Sidi Daoud", "Naciria", "Djinet", "Isser", "Zemmouri", "Si Mustapha", "Tidjelabine", "Chabet El Ameur", "Thenia", "Timezrit", "Corso", "Ouled Moussa", "Larbatache", "Bouzegza Keddara", "Taourga", "Ouled Aissa", "Ben Choud", "Dellys", "Ammal", "Beni Amrane", "Souk El Had", "Boudouaou El Bahri", "Ouled Hedadj", "Leghata", "Keddara", "Hammedi", "Khemis El Khechna", "El Kharrouba", "Benchoud", "Ouled Moussa"]
  },
  {
    code: "36",
    name: "El Tarf",
    communes: ["El Tarf", "Bouhadjar", "Ben M'Hidi", "Bougous", "El Kala", "Ain El Assel", "El Aioun", "Bouteldja", "Souarekh", "Berrihane", "Lac des Oiseaux", "Chefia", "Drean", "Chihani", "Chebaita Mokhtar", "Besbes", "Asfour", "Echatt", "Zerizer", "Zitouna", "Ain Kerma", "Oued Zitoun", "Hammam Beni Salah", "Raml Souk"]
  },
  {
    code: "37",
    name: "Tindouf",
    communes: ["Tindouf", "Oum El Assel", "Ghar Djebilet"]
  },
  {
    code: "38",
    name: "Tissemsilt",
    communes: ["Tissemsilt", "Bordj Bou Naama", "Theniet El Had", "Lazharia", "Beni Chaib", "Lardjem", "Melaab", "Sidi Lantri", "Bordj El Emir Abdelkader", "Layoune", "Khemisti", "Ouled Bessem", "Ammari", "Youssoufia", "Sidi Boutouchent", "Larbaa", "Maasem", "Sidi Abed", "Tamalaht", "Sidi Slimane", "Boucaid", "Larbaa"]
  },
  {
    code: "39",
    name: "El Oued",
    communes: ["El Oued", "Robbah", "Oued El Alenda", "Bayadha", "Nakhla", "Guemar", "Kouinine", "Reguiba", "Hamraia", "Taghzout", "Debila", "Hassani Abdelkrim", "Hassi Khalifa", "Taleb Larbi", "Douar El Ma", "Sidi Aoun", "Trifaoui", "Magrane", "Beni Guecha", "Ourmas", "Still", "M'Rara", "Sidi Khellil", "Tenedla", "El Ogla", "Mih Ouansa", "Sidi Amrane", "Oum Touyour", "Taleb Larbi", "Hassani Abdelkrim"]
  },
  {
    code: "40",
    name: "Khenchela",
    communes: ["Khenchela", "Mtoussa", "Kais", "Baghai", "El Hamma", "Ain Touila", "Taouzient", "Bouhmama", "El Oueldja", "Remila", "Cherchar", "Djellal", "Babar", "Tamza", "Ensigha", "Ouled Rechache", "El Mahmal", "Msara", "Yabous", "Khirane", "Chelia"]
  },
  {
    code: "41",
    name: "Souk Ahras",
    communes: ["Souk Ahras", "Sedrata", "Hanancha", "Mechroha", "Ouled Driss", "Tiffech", "Zaarouria", "Taoura", "Drea", "Haddada", "Khedara", "Merahna", "Ouled Moumen", "Bir Bouhouche", "Safel El Ouiden", "Mdaourouche", "Oum El Adhaim", "Ain Zana", "Ain Soltane", "Ouillen", "Sidi Fredj", "Ragouba", "Khemissa", "Oued Keberit", "Terraguelt", "Zouabi"]
  },
  {
    code: "42",
    name: "Tipaza",
    communes: ["Tipaza", "Menaceur", "Larhat", "Douaouda", "Bourkika", "Khemisti", "Aghabal", "Hadjout", "Sidi Amar", "Gouraya", "Nador", "Chaiba", "Ain Tagourait", "Cherchell", "Damous", "Merad", "Fouka", "Bou Ismail", "Ahmar El Ain", "Bou Haroun", "Sidi Ghiles", "Messelmoun", "Sidi Rached", "Kolea", "Attatba", "Sidi Semiane", "Beni Milleuk", "Hadjerat Ennous"]
  },
  {
    code: "43",
    name: "Mila",
    communes: ["Mila", "Ferdjioua", "Chelghoum Laid", "Oued Athmania", "Ain Mellouk", "Telerghma", "Oued Seguen", "Tadjenanet", "Benyahia Abderrahmane", "Oued Endja", "Ahmed Rachedi", "Ouled Khalouf", "Ain Beida Harriche", "Minar Zarza", "Amira Arras", "Ain Tine", "El Mechira", "Sidi Merouane", "Tessala Lemtai", "Grarem Gouga", "Bouhatem", "Rouached", "Tiberguent", "Derradji Bousselah", "Ain Mellouk", "Hamala", "Tassadane Haddada", "Elayadi Barbes", "Sidi Khelifa", "Zeghaia", "Chelghoum Laid", "Yahia Beniguecha"]
  },
  {
    code: "44",
    name: "Aïn Defla",
    communes: ["Ain Defla", "Miliana", "Boumedfaa", "Khemis Miliana", "Hammam Righa", "Arib", "Djelida", "El Amra", "Bourached", "El Attaf", "El Abadia", "Djendel", "Oued Chorfa", "Ain Lechiakh", "Oued Djemaa", "Rouina", "Zeddine", "El Hassania", "Bir Ould Khelifa", "Ain Soltane", "Tarik Ibn Ziad", "Bordj Emir Khaled", "Ain Torki", "Sidi Lakhdar", "Ben Allal", "Ain Benian", "Hoceinia", "Barbouche", "Djemaa Ouled Cheikh", "Mekhatria", "Bathia", "Tacheta Zegagha", "Ain Bouyahia", "El Maine", "Tiberkanine", "Belaas", "Ain Benian"]
  },
  {
    code: "45",
    name: "Naâma",
    communes: ["Naâma", "Mecheria", "Ain Sefra", "Tiout", "Sfissifa", "Moghrar", "Assela", "Djeniane Bourzeg", "Ain Ben Khelil", "Makman Ben Amer", "Kasdir", "El Biod"]
  },
  {
    code: "46",
    name: "Aïn Témouchent",
    communes: ["Ain Temouchent", "Chaabet El Leham", "Ain Kihal", "Hammam Bouhadjar", "Bou Zedjar", "Oued Berkeche", "Aghlal", "Terga", "Ain El Arbaa", "Tamzoura", "Chentouf", "Sidi Ben Adda", "Aoubellil", "El Malah", "Sidi Boumediene", "Oued Sabah", "Ouled Boudjemaa", "Ain Tolba", "El Amria", "Hassasna", "Hassi El Ghella", "Sidi Safi", "Oulhaca El Gheraba", "Beni Saf", "Sidi Ouriache", "Emir Abdelkader", "El Messaid", "Ouled Kihal"]
  },
  {
    code: "47",
    name: "Ghardaïa",
    communes: ["Ghardaia", "El Meniaa", "Dhayet Bendhahoua", "Berriane", "Metlili", "El Atteuf", "Zelfana", "Sebseb", "Bounoura", "Hassi Fehal", "Hassi Gara", "Mansoura", "Guerrara"]
  },
  {
    code: "48",
    name: "Relizane",
    communes: ["Relizane", "Oued Rhiou", "Belhacel", "Mazouna", "Kalaa", "Ain Tarek", "Oued Essalem", "Ouled Aiche", "Sidi Lazreg", "El Hamadna", "Sidi M'Hamed Ben Ali", "Mediouna", "Sidi Khettab", "Ammi Moussa", "Zemmoura", "Beni Dergoun", "Djidiouia", "El Guettar", "Hamri", "El Matmar", "Sidi Saada", "Ouled Sidi Mihoub", "Ain Rahma", "Yellel", "Oued El Djemaa", "Ramka", "Mendes", "Lahlef", "Beni Zentis", "Souk El Had", "Dar Ben Abdellah", "El H'Madna", "Hassi Mamèche", "Mazouna", "Kalaa", "Oued Rhiou", "Yellel", "Lahlef", "Sidi M'Hamed Benaouda"]
  },
  {
    code: "49",
    name: "Timimoun",
    communes: ["Timimoun", "Ouled Said", "Tinerkouk", "Deldoul", "Charouine", "Metarfa", "Talmine", "Aougrout", "Ksar Kaddour"]
  },
  {
    code: "50",
    name: "Bordj Badji Mokhtar",
    communes: ["Bordj Badji Mokhtar", "Timiaouine"]
  },
  {
    code: "51",
    name: "Ouled Djellal",
    communes: ["Ouled Djellal", "Sidi Khaled", "Ras El Miaad", "Besbes", "Doucen", "Chaiba"]
  },
  {
    code: "52",
    name: "Béni Abbès",
    communes: ["Béni Abbès", "Tabelbala", "Igli", "El Ouata", "Kerzaz", "Timoudi", "Ksabi", "Tamtert", "Ouled Khoudir", "Beni Ikhlef", "Mechraa Houari Boumediene"]
  },
  {
    code: "53",
    name: "In Salah",
    communes: ["In Salah", "Foggaret Ezzaouia", "In Ghar"]
  },
  {
    code: "54",
    name: "In Guezzam",
    communes: ["In Guezzam", "Tin Zaouatine"]
  },
  {
    code: "55",
    name: "Touggourt",
    communes: ["Touggourt", "Tebesbest", "Nezla", "Zaouia El Abidia", "Taibet", "Mnaguer", "Temacine", "Blidet Amor", "Megarine", "Sidi Slimane"]
  },
  {
    code: "56",
    name: "Djanet",
    communes: ["Djanet", "Bordj El Haouasse"]
  },
  {
    code: "57",
    name: "El M'Ghair",
    communes: ["El M'Ghair", "Djamaa", "Sidi Amrane", "Sidi Khelil", "Tenedla", "Oum Touyour", "Still", "M'Rara"]
  },
  {
    code: "58",
    name: "El Meniaa",
    communes: ["El Meniaa", "Hassi Gara", "Hassi Fehal", "Mansoura"]
  }
];

// Base product price (in DZD)
export const BASE_PRODUCT_PRICE = Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE) || 4900;

// Individual product prices
export const VACUUM_PRICE = Number(process.env.NEXT_PUBLIC_VACUUM_PRICE) || 3500;
export const LABUBU_PRICE = Number(process.env.NEXT_PUBLIC_LABUBU_PRICE) || 4000;
export const EPICES_PRICE = Number(process.env.NEXT_PUBLIC_EPICES_PRICE) || 1500;
export const POTAGER_PRICE = Number(process.env.NEXT_PUBLIC_POTAGER_PRICE) || 2000;
export const MAKEUP_PRICE = Number(process.env.NEXT_PUBLIC_MAKEUP_PRICE) || 3000;
export const USB_CHARGING_PRICE = Number(process.env.NEXT_PUBLIC_USB_CHARGING_PRICE) || 2800;
export const ICE_ROLLER_PRICE = Number(process.env.NEXT_PUBLIC_ICE_ROLLER_PRICE) || 2500;
export const LIGHT_ROOM_PRICE = Number(process.env.NEXT_PUBLIC_LIGHT_ROOM_PRICE) || 3000;
export const DJADJO_PRICE = Number(process.env.NEXT_PUBLIC_DJADJO_PRICE) || 4500;
export const HERMES_PRICE = Number(process.env.NEXT_PUBLIC_HERMES_PRICE) || 1800;
export const PACK_COFFEE_PRICE = Number(process.env.NEXT_PUBLIC_PACK_COFFEE_PRICE) || 2900;



// Delivery pricing per wilaya
export const DELIVERY_PRICING: DeliveryPricing[] = [
  // Major cities - Lower delivery costs
  { wilayaCode: "16", homeDelivery: 600, bureauPickup: 400 }, // Alger
  { wilayaCode: "31", homeDelivery: 700, bureauPickup: 500 }, // Oran
  { wilayaCode: "25", homeDelivery: 650, bureauPickup: 450 }, // Constantine
  { wilayaCode: "09", homeDelivery: 600, bureauPickup: 400 }, // Blida
  { wilayaCode: "35", homeDelivery: 650, bureauPickup: 450 }, // Boumerdès
  
  // Northern wilayas - Medium costs
  { wilayaCode: "02", homeDelivery: 800, bureauPickup: 600 }, // Chlef
  { wilayaCode: "06", homeDelivery: 850, bureauPickup: 650 }, // Béjaïa
  { wilayaCode: "10", homeDelivery: 800, bureauPickup: 600 }, // Bouira
  { wilayaCode: "13", homeDelivery: 900, bureauPickup: 700 }, // Tlemcen
  { wilayaCode: "15", homeDelivery: 850, bureauPickup: 650 }, // Tizi Ouzou
  { wilayaCode: "18", homeDelivery: 850, bureauPickup: 650 }, // Jijel
  { wilayaCode: "19", homeDelivery: 800, bureauPickup: 600 }, // Sétif
  { wilayaCode: "21", homeDelivery: 850, bureauPickup: 650 }, // Skikda
  { wilayaCode: "23", homeDelivery: 850, bureauPickup: 650 }, // Annaba
  { wilayaCode: "26", homeDelivery: 750, bureauPickup: 550 }, // Médéa
  { wilayaCode: "27", homeDelivery: 800, bureauPickup: 600 }, // Mostaganem
  { wilayaCode: "36", homeDelivery: 900, bureauPickup: 700 }, // El Tarf
  { wilayaCode: "42", homeDelivery: 700, bureauPickup: 500 }, // Tipaza
  { wilayaCode: "44", homeDelivery: 750, bureauPickup: 550 }, // Aïn Defla
  
  // Central wilayas - Medium to high costs
  { wilayaCode: "05", homeDelivery: 900, bureauPickup: 700 }, // Batna
  { wilayaCode: "17", homeDelivery: 850, bureauPickup: 650 }, // Djelfa
  { wilayaCode: "28", homeDelivery: 900, bureauPickup: 700 }, // M'Sila
  { wilayaCode: "34", homeDelivery: 850, bureauPickup: 650 }, // Bordj Bou Arreridj
  { wilayaCode: "43", homeDelivery: 850, bureauPickup: 650 }, // Mila
  
  // Southern wilayas - Higher costs
  { wilayaCode: "01", homeDelivery: 1500, bureauPickup: 1200 }, // Adrar
  { wilayaCode: "03", homeDelivery: 1200, bureauPickup: 900 }, // Laghouat
  { wilayaCode: "07", homeDelivery: 1100, bureauPickup: 850 }, // Biskra
  { wilayaCode: "08", homeDelivery: 1400, bureauPickup: 1100 }, // Béchar
  { wilayaCode: "11", homeDelivery: 2000, bureauPickup: 1700 }, // Tamanrasset
  { wilayaCode: "30", homeDelivery: 1300, bureauPickup: 1000 }, // Ouargla
  { wilayaCode: "32", homeDelivery: 1400, bureauPickup: 1100 }, // El Bayadh
  { wilayaCode: "33", homeDelivery: 2200, bureauPickup: 1900 }, // Illizi
  { wilayaCode: "37", homeDelivery: 2500, bureauPickup: 2200 }, // Tindouf
  { wilayaCode: "39", homeDelivery: 1200, bureauPickup: 900 }, // El Oued
  { wilayaCode: "47", homeDelivery: 1300, bureauPickup: 1000 }, // Ghardaïa
];

// Default pricing for wilayas not explicitly listed
export const DEFAULT_DELIVERY_PRICING: DeliveryPricing = {
  wilayaCode: "default",
  homeDelivery: 1000,
  bureauPickup: 750
};

// Helper function to get delivery price for a wilaya
export function getDeliveryPrice(wilayaCode: string, deliveryMethod: 'home' | 'bureau'): number {
  const pricing = DELIVERY_PRICING.find(p => p.wilayaCode === wilayaCode) || DEFAULT_DELIVERY_PRICING;
  return deliveryMethod === 'home' ? pricing.homeDelivery : pricing.bureauPickup;
}

// Helper function to calculate total price
export function calculateTotalPrice(wilayaCode: string, deliveryMethod: 'home' | 'bureau'): number {
  return BASE_PRODUCT_PRICE + getDeliveryPrice(wilayaCode, deliveryMethod);
}
