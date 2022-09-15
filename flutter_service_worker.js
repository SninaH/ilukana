'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6f93a9a89f6e3e1482260f73f51a6105",
"index.html": "dc05ed5fa0facfa4026c9b66c0f483af",
"/": "dc05ed5fa0facfa4026c9b66c0f483af",
"main.dart.js": "4259740567ff5742b718d254401b6a3a",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "070b11416766fedf356da731de5d55c6",
"assets/AssetManifest.json": "8aeb8f20a91e8cfe48362e564385e531",
"assets/NOTICES": "b69b9b54d53e38cf5f095519bdd54f7e",
"assets/FontManifest.json": "22a446a5f092f9d93551ce4b6c72eb6d",
"assets/shaders/ink_sparkle.frag": "c8b1e622d42e7bf0759232685974d47a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/letters/kakijun%25E3%2582%2589.gif": "4c7fa3b2644fcca24d8741d7027d0f06",
"assets/assets/letters/ilustracija%25E3%2581%25B2.png": "b769b3bb30adc365fadaced5f99ef12c",
"assets/assets/letters/ilustracija%25E3%2581%259D.png": "812d273bd7a8d050b6398cd8d7c2b369",
"assets/assets/letters/ilustracija%25E3%2581%2586.png": "c5085738b1f4cc5fea5003cebfa45d01",
"assets/assets/letters/ilustracija%25E3%2581%2593.png": "aa13a1938294f620adcef6e3fb45969b",
"assets/assets/letters/ilustracija%25E3%2581%258A.png": "16d43a6fb248f13139672c27d82b2c44",
"assets/assets/letters/ilustracija%25E3%2581%25BE.png": "f0d05d6f2d705c56595e8c8dfb552e00",
"assets/assets/letters/kakijun%25E3%2582%25AF.gif": "da5a68c81e0fb9582e53994a62854242",
"assets/assets/letters/kakijun%25E3%2582%2588.gif": "db4c53a232d668370f5efd5197e58177",
"assets/assets/letters/kakijun%25E3%2582%25A2.gif": "c440453635e8892da4c3d10468d47352",
"assets/assets/letters/kakijun%25E3%2582%25AD.gif": "ae59b44980d42c187d6dc3852f9d8d99",
"assets/assets/letters/ilustracija%25E3%2581%2591.png": "6efba9785206b0c6e4159296560ceaf6",
"assets/assets/letters/ilustracija%25E3%2581%2584.png": "2140b0da4f13ed442e534973e43c2940",
"assets/assets/letters/ilustracija%25E3%2581%258B.png": "0f4dcece68c006e87e28b0f062c13eda",
"assets/assets/letters/ilustracija%25E3%2581%25BF.png": "56ae71a5ab25b7d77f9216794aafac52",
"assets/assets/letters/kakijun%25E3%2582%25AA.gif": "e5b78d07be5926f0c584df28b696c900",
"assets/assets/letters/ilustracija%25E3%2581%25A8.png": "60694553cbb961dc35978afac2fc5e40",
"assets/assets/letters/ilustracija%25E3%2581%25BB.png": "d0524e7c836beefc30c1e4b444e80c91",
"assets/assets/letters/ilustracija%25E3%2581%258F.png": "ee59f75960fc7ec449a8e0dbfe2e9401",
"assets/assets/letters/ilustracija%25E3%2581%259B.png": "17c475b9caa6e2a6978ac3dbeaee0401",
"assets/assets/letters/ilustracija%25E3%2581%2595.png": "2418449f49b8c6f8e8b486693139325e",
"assets/assets/letters/ilustracija%25E3%2581%25B5.png": "a2f5ef3b76a954351016cd6d2cd685b5",
"assets/assets/letters/mu.png": "506891556805721837aed4f13b095e71",
"assets/assets/letters/kakijun%25E3%2582%25A6.gif": "ea50cafe6b31d1596a2de075c13a959d",
"assets/assets/letters/kakijun%25E3%2582%25AB.gif": "8030ec7f2843461304ea970cb47fa79d",
"assets/assets/letters/kakijun%25E3%2582%25A4.gif": "22740a10313c562e72107e5835399303",
"assets/assets/letters/ilustracija%25E3%2581%2597.png": "6bb18ba3ff43ef0098277efb03df6062",
"assets/assets/letters/ilustracija%25E3%2581%258D.png": "8e09bf8855ddd6e1571a07cc429c046f",
"assets/assets/letters/ilustracija%25E3%2581%2582.png": "ecdaedf0eb8f4c91075309cbd9971f79",
"assets/assets/letters/kakijun%25E3%2582%25B9.gif": "f2bc7eaef2f591a83934327139319f9c",
"assets/assets/letters/kakijun%25E3%2581%2593.gif": "0acf8253347d6ac0fa678ee666d34f94",
"assets/assets/letters/kakijun%25E3%2581%258A.gif": "f0497eebfdb9f14a16db6bbd62bd8213",
"assets/assets/letters/kakijun%25E3%2581%25BE.gif": "d79b146e0db767fbfa2bf5c815a96d1a",
"assets/assets/letters/kakijun%25E3%2583%258D.gif": "e231ace219e14f49fa8a0f001ddbbee4",
"assets/assets/letters/ilustracija%25E3%2582%2588.png": "7526cdc86b50273d14e07f63a27b2c85",
"assets/assets/letters/ilustracija%25E3%2582%2589.png": "c49051dca6ac8394cdd63a138189530c",
"assets/assets/letters/kakijun%25E3%2583%258E.gif": "3c012be100504ff727bf4b2048a0c2ff",
"assets/assets/letters/kakijun%25E3%2581%25B2.gif": "75415021ad2f8923edeea4d04901b1c4",
"assets/assets/letters/kakijun%25E3%2581%259D.gif": "61f6394ac2abca359663e04ac4b8c4f9",
"assets/assets/letters/kakijun%25E3%2581%2586.gif": "f640c86a4f2950d45b70154b1979dc1a",
"assets/assets/letters/kakijun%25E3%2581%2584.gif": "d8dd2f5bbb0f3d6a8cceedc37b622417",
"assets/assets/letters/kakijun%25E3%2581%259F.gif": "832bbb8e2b7b174686a5aa5f3151f4b5",
"assets/assets/letters/kakijun%25E3%2581%258B.gif": "049b0f0b91e222ebf59735c5593b5feb",
"assets/assets/letters/kakijun%25E3%2581%25BF.gif": "32056067255c5d595c745c138d701e6f",
"assets/assets/letters/kakijun%25E3%2583%2595.gif": "cc7bbed0016011dc38a5275f5ad18713",
"assets/assets/letters/kakijun%25E3%2583%2581.gif": "f8c2c2f2f86780fe649106ba5a42c6e9",
"assets/assets/letters/kakijun%25E3%2583%25A9.gif": "3b01cbd4d57f50186f890b1a9bb16e66",
"assets/assets/letters/ilustracija%25E3%2582%25A2.png": "91c8c8a6057818c0659552cb775f2dc3",
"assets/assets/letters/kakijun%25E3%2583%25A8.gif": "285445c4dea3b943e89bab9d9d515ddc",
"assets/assets/letters/kakijun%25E3%2583%258F.gif": "9bdfc53691e4429f9e2143989b82fd0c",
"assets/assets/letters/kakijun%25E3%2583%259B.gif": "72f19fdb0aa579ee449d8649b1f122ea",
"assets/assets/letters/kakijun%25E3%2581%2591.gif": "253a2af64355ca3d8398d326206c6109",
"assets/assets/letters/kakijun%25E3%2581%2595.gif": "1b426e0fac98def832810efcf75c62b2",
"assets/assets/letters/kakijun%25E3%2581%25B5.gif": "9dedb54a3fec2ebefb35e6ee2d3bfe60",
"assets/assets/letters/ahiragana.png": "ecdaedf0eb8f4c91075309cbd9971f79",
"assets/assets/letters/kakijun%25E3%2583%259F.gif": "a4526e0d52920fa9e4c9dfdcb82f0044",
"assets/assets/letters/kakijun%25E3%2583%258B.gif": "505bcf9b72485e22fbadbf98406864a4",
"assets/assets/letters/kakijun%25E3%2583%2584.gif": "15f76d048db50a7b1a00357811be1c6a",
"assets/assets/letters/kakijun%25E3%2583%258C.gif": "caeb974e75df66dddd5da5a5f7740290",
"assets/assets/letters/kakijun%25E3%2581%25A8.gif": "956ae693f362efdf5261ef5c669b1e8e",
"assets/assets/letters/kakijun%25E3%2581%25BB.gif": "5ed65f7ecbbbb9b53dbb267b539dd334",
"assets/assets/letters/kakijun%25E3%2581%258F.gif": "1c97195ee9b4e3fec133fb7cded4ce3f",
"assets/assets/letters/kakijun%25E3%2581%259B.gif": "dab4cb7dca0c7dabcec6431e20deca99",
"assets/assets/letters/kakijun%25E3%2581%258D.gif": "8b3b87f9097c4935b3f769a3a7b4f7c9",
"assets/assets/letters/kakijun%25E3%2581%2582.gif": "daee25c25b583a5c9638e444fdf1f253",
"assets/assets/letters/kakijun%25E3%2583%258A.gif": "2acc762c0e74df0ea1a42681d5be9985",
"assets/assets/letters/kakijun%25E3%2583%259E.gif": "bfbd74ad378c1bfff50d584d154f7be6",
"assets/assets/letters/kakijun%25E3%2583%25B3.gif": "d0c249d1c623b41f78bc3d6a052149fc",
"assets/assets/letters/kakijun%25E3%2583%25B2.gif": "ce93eab071630d53da57b6e4e86a2e6b",
"assets/assets/letters/kakijun%25E3%2583%2592.gif": "e21d43335d22e1bd752e313d0e949409",
"assets/assets/letters/kakijun%25E3%2583%2586.gif": "7a44e4cecc31a0fb32f0f53429bf4614",
"assets/assets/letters/kakijun%25E3%2581%2597.gif": "19a8d99c2af70a41ecd375a16ebcc7d9",
"assets/assets/letters/letters.txt": "8b5d42de5622d9fbff235d060002b2a1",
"assets/assets/letters/kakijun%25E3%2581%25A6.gif": "28c95e6fd40f12ee1198ac640acbe2fd",
"assets/assets/letters/ilustracija%25E3%2582%2581.png": "2ffd78b1acb2eb7c8c7150ec02b13f20",
"assets/assets/letters/ilustracija%25E3%2582%2580.png": "8d9eebf6a4fdac6215ffdb8cbb0476aa",
"assets/assets/letters/kakijun%25E3%2583%25A2.gif": "e1340961b0f605b4d4045b173ed2803b",
"assets/assets/letters/kakijun%25E3%2583%25AD.gif": "b7bee028a5d01be7c6e1cba275905670",
"assets/assets/letters/kakijun%25E3%2581%25AA.gif": "886b6741810d27ebbfbc773dfd722102",
"assets/assets/letters/kakijun%25E3%2581%2599.gif": "fad2d467e0b5986350fdc35b68d19e2a",
"assets/assets/letters/kakijun%25E3%2581%25AC.gif": "363635515db16e909ab0066a15125ab5",
"assets/assets/letters/kakijun%25E3%2583%2588.gif": "09823a31466df3d885b413b2f2875abd",
"assets/assets/letters/kakijun%25E3%2583%25AF.gif": "91a1ed9c6559c0bba6eb2e78f34c89a0",
"assets/assets/letters/kakijun%25E3%2583%25A0.gif": "30c3f3d4e2ea93ef7530bcfd077e9230",
"assets/assets/letters/ilustracija%25E3%2582%2582.png": "34bee248faa75ec816296c161dfa4581",
"assets/assets/letters/ilustracija%25E3%2582%258D.png": "cf4a13f8d8ead2e5ccb666d5bb6f7b48",
"assets/assets/letters/kakijun%25E3%2583%25A1.gif": "cf95be8bddd8eefb5c91d4bd7ea5a54e",
"assets/assets/letters/kakijun%25E3%2581%25A4.gif": "9ca87e47c73d4ebfbb6b9587952fb3bb",
"assets/assets/letters/kakijun%25E3%2581%25AB.gif": "be25b24a948a199537f03c0a0b18ff4c",
"assets/assets/letters/kakijun%25E3%2581%25B8.gif": "bdad11792d0814ca56438a9845f76959",
"assets/assets/letters/kakijun%25E3%2581%2588.gif": "57e84bd87bc2a6660e2936480f065c74",
"assets/assets/letters/kakijun%25E3%2581%25AF.gif": "1b9b4b364d063d05c8ef3e2d79c5f912",
"assets/assets/letters/kakijun%25E3%2583%25AC.gif": "9076e9275c6f7966ae6531fde8424792",
"assets/assets/letters/ilustracija%25E3%2582%258A.png": "de10da0737fa57f895319d2700ba9ad3",
"assets/assets/letters/ilustracija%25E3%2582%2586.png": "4dd72abaf95eda40d38ad820370ef385",
"assets/assets/letters/kakijun%25E3%2583%25AB.gif": "9087565f6a6b6058faafa1ffbd031b36",
"assets/assets/letters/kakijun%25E3%2583%25A4.gif": "198e879d5ba1a10e14f15aa230c2ba39",
"assets/assets/letters/kakijun%25E3%2583%2598.gif": "fd9f39289943d5ecc99148e1439edaa6",
"assets/assets/letters/kakijun%25E3%2581%25A1.gif": "a76aa014e46d0d2a83acadf12570f88e",
"assets/assets/letters/kakijun%25E3%2581%25AE.gif": "6c9abd34662d812a1ad7c127d703ae64",
"assets/assets/letters/kakijun%25E3%2583%25A6.gif": "a3906f4c42914a5d3908be656f909d34",
"assets/assets/letters/ilustracija%25E3%2582%258B.png": "1e0d0574086c190886a88e54dcece08a",
"assets/assets/letters/ilustracija%25E3%2582%2584.png": "3ac975e4ae04b44faf2207b52acb0d21",
"assets/assets/letters/ilustracija%25E3%2582%258C.png": "c655f49cc09e81bf2f001ca3930e5131",
"assets/assets/letters/kakijun%25E3%2583%25AA.gif": "e521cbe4cb8d119a13f15d12552aca38",
"assets/assets/letters/kakijun%25E3%2581%25AD.gif": "e61ed747dfd43849b707b4b96861976b",
"assets/assets/letters/kakijun%25E3%2582%258F.gif": "e57e2b67e3b9349442a1a525912617ed",
"assets/assets/letters/kakijun%25E3%2582%2580.gif": "0963f23fd8f45fa1b5c60b91c9f25a0c",
"assets/assets/letters/kakijun%25E3%2582%25A8.gif": "4abd08fea1b89af49358c67774b43593",
"assets/assets/letters/kakijun%25E3%2582%25BB.gif": "65ede48454a19aebb4861502fddbce71",
"assets/assets/letters/ilustracija%25E3%2581%25AA.png": "c8fb2d7ee940e8d6a3e894afdd0d088a",
"assets/assets/letters/ilustracija%25E3%2581%25A6.png": "df1c07f9cc8b7bdbb9c1e98ef4e5c513",
"assets/assets/letters/kakijun%25E3%2582%25B5.gif": "786cfc63698cf8849ce42782835398f9",
"assets/assets/letters/kakijun%25E3%2582%2581.gif": "31fb6840574d92712dd1ae3a573b6177",
"assets/assets/letters/kakijun%25E3%2582%25B7.gif": "bcc6b9cf4cee4bd284fd80ccdd47cb00",
"assets/assets/letters/a.png": "c257f378236209fe100ac56985f2bf22",
"assets/assets/letters/ilustracija%25E3%2581%25A4.png": "ee30c1b23f35543b49a7fd95fb37e6b3",
"assets/assets/letters/ilustracija%25E3%2581%25AB.png": "f9570cfd27cb4318eca6c3c5ef823fa8",
"assets/assets/letters/ilustracija%25E3%2581%25B8.png": "1cb11ddac417d5d537ea7bfeab23850b",
"assets/assets/letters/ilustracija%25E3%2581%2599.png": "76ac3acf369ea14b31316b72219e79ed",
"assets/assets/letters/ilustracija%25E3%2581%25AC.png": "6d2b47a4601552b329a96ed7dd18e4bf",
"assets/assets/letters/kakijun%25E3%2582%2582.gif": "e1c5204a384a7f19da28e5d5be09d1c5",
"assets/assets/letters/kakijun%25E3%2582%258D.gif": "5547bcb3929f07fafad71dc01378544d",
"assets/assets/letters/kakijun%25E3%2582%2586.gif": "7cfcd771cba3877408ab297c185f25cb",
"assets/assets/letters/kakijun%25E3%2582%2592.gif": "07d2318bb802f6eb2c584b9fda0ec868",
"assets/assets/letters/kakijun%25E3%2582%25BD.gif": "53acdf7f40732f8b32437baa42d00528",
"assets/assets/letters/ilustracija%25E3%2581%25A1.png": "e6307e7569c5257e1846ea9ad121f3df",
"assets/assets/letters/ilustracija%25E3%2581%2588.png": "e22e05a2e590b6cf1622692b13bd8efa",
"assets/assets/letters/ilustracija%25E3%2581%25AF.png": "1f4dab637c42365a5d9c6250310aa90a",
"assets/assets/letters/kakijun%25E3%2582%25B3.gif": "0e75d624c1d59d57ede9adc460efa803",
"assets/assets/letters/kakijun%25E3%2582%258A.gif": "fdb6057bca4776fad07d728e8b084d9d",
"assets/assets/letters/kakijun%25E3%2582%2593.gif": "51a5b632d69c30279be79c055a846fea",
"assets/assets/letters/kakijun%25E3%2582%258C.gif": "48e1865ccc1e36847fa611d73d9bad9c",
"assets/assets/letters/kakijun%25E3%2582%25B1.gif": "6b774e377db15d8028b8d0e4e5f2e83a",
"assets/assets/letters/ilustracija%25E3%2581%25AD.png": "743d1a9e35fed4889708b17696194ebb",
"assets/assets/letters/ilustracija%25E3%2581%25AE.png": "35a3ec514ea658f1d20af93b953a73e9",
"assets/assets/letters/kakijun%25E3%2582%25BF.gif": "ffb0756fc89ea34107db1f3edd22c34c",
"assets/assets/letters/kakijun%25E3%2582%258B.gif": "0ab345ec8445112e54e8bda953eff100",
"assets/assets/letters/kakijun%25E3%2582%2584.gif": "be0b125e617d544230a9b0e295c958d0",
"assets/assets/other/hisa.png": "434cd03dd3608ceab216a36197075b96",
"assets/assets/other/aiueo.png": "b33bc26ee333c0b2a151b0bf918fc374",
"assets/assets/other/mouth.png": "6643a73ad495dd20026a4cf879cb5c13",
"assets/assets/other/vrata.png": "60e746f06ac4344e50e9d8fbef43a5be",
"assets/assets/other/backButton.png": "80d87e2e597e5a0d3c7f225be1ac026d",
"assets/assets/other/brush.png": "f87d708bb61d0f0d33e43b5c74e37185",
"assets/assets/other/pravilapisanja.gif": "daee25c25b583a5c9638e444fdf1f253",
"assets/assets/other/homeButton.png": "f8d06a32185ea2be867b2f47609ffba2",
"assets/assets/other/gameover.png": "bccd0c7f797380bb0984d763f5279dd9",
"assets/assets/other/akasatana.png": "996ec1de666e4eccac1b9f09ba924924",
"assets/assets/other/cover.png": "b6c12456b33decd49fd8613e8789d466",
"assets/assets/other/pravilapisanjakatakana.gif": "c440453635e8892da4c3d10468d47352",
"assets/assets/other/makimono.png": "ecbe1a586d55a86527a316bc3be1e654",
"assets/assets/json/readingletters.json": "fc28854a7afb1f903ac1b90b33afaa5f",
"assets/assets/writingletterpaint/a/a1.png": "c81b311a7e65b0725037b4147bafe2c9",
"assets/assets/writingletterpaint/a/a3.png": "0279156ead4d02371afabdcc2d510f9b",
"assets/assets/writingletterpaint/a/a2.png": "e84c006412d22a58da225a19ca27ecbf",
"assets/assets/fonts/Rubik-Bold.ttf": "11598c28bd4c62d359b58d8a810f385f",
"assets/assets/fonts/aristotlebold.ttf": "1ac9be14e748a0370a05fdd5821dae12",
"assets/assets/fonts/hiragino.otf": "9235878c979f8fa583e3686441e351ae",
"assets/assets/fonts/Rubik-Regular.ttf": "4b3f06816033d040ef0ed60865adb2d1",
"assets/assets/fonts/hiraginoMincho.otf": "899ca9905c562016b83da89c0865de62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
