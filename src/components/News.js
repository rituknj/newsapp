import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [

      {
        "source": {
          "id": null,
          "name": "The Guardian"
        },
        "author": "Samuel Gibbs Consumer technology editor",
        "title": "Best running gear: top gadgets to keep you motivated",
        "description": "From music on the go to GPS watches and apps such as Strava, tech to help you clock up the milesRunning is a great way to keep fit this summer and needs little more than some trainers and a pavement or a park. But even the most enthusiastic of us need some wa…",
        "url": "https://amp.theguardian.com/technology/2022/jun/13/best-running-gear-top-gadgets-gps-watches-apps-strava",
        "urlToImage": "https://i.guim.co.uk/img/media/91b41af17a479538673640b3d215264ca72ad15a/344_806_5323_3194/master/5323.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=117ed34c753d7c9ecf13c69066d09e13",
        "publishedAt": "2022-06-13T06:00:11Z",
        "content": "Running is a great way to keep fit this summer and needs little more than some trainers and a pavement or a park. But even the most enthusiastic of us need some way to keep motivated for regular exer… [+9403 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hipertextual"
        },
        "author": "Rubén Chicharro",
        "title": "Sony LinkBuds S, análisis: comodidad y cancelación de ruido para intentar destronar a los AirPods Pro",
        "description": "No hay fabricante que no tenga en su catálogo unos auriculares true wireless para hacer frente a los AirPods Pro. Algunos de ellos ofrecen modelos muy económicos que, si bien suelen cumplir en sonido y conectividad, quedan muy por detrás de los de Apple en cu…",
        "url": "https://hipertextual.com/2022/06/sony-linkbuds-s-review",
        "urlToImage": "https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/06/sony-linbuds-s-04.jpg?fit=1920%2C1044&quality=50&strip=all&ssl=1",
        "publishedAt": "2022-06-13T06:01:00Z",
        "content": "No hay fabricante que no tenga en su catálogo unos auriculares true wireless para hacer frente a los AirPods Pro. Algunos de ellos ofrecen modelos muy económicos que, si bien suelen cumplir en sonido… [+12394 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "9to5Mac"
        },
        "author": "Filipe Espósito",
        "title": "iPhone 14 to get biggest front-facing camera upgrade in years as Apple sets its suppliers",
        "description": "Earlier this year, multiple reports suggested that Apple is working on major upgrades to the iPhone 14’s front-facing camera. Now analyst Ming-Chi Kuo has corroborated those rumors with new details about the suppliers Apple has chosen for the selfie camera co…",
        "url": "https://9to5mac.com/2022/06/12/iphone-14-front-facing-camera-upgrade/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/iPhone-14-camera.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-06-13T04:05:36Z",
        "content": "Earlier this year, multiple reports suggested that Apple is working on major upgrades to the iPhone 14’s front-facing camera. Now analyst Ming-Chi Kuo has corroborated those rumors with new details a… [+2543 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "9to5Mac"
        },
        "author": "Filipe Espósito",
        "title": "Apple’s AR glasses reportedly coming late 2024 along with second-gen VR headset",
        "description": "There’s a lot going on when it comes to Apple’s rumored mixed reality headset, which is expected to combine both AR and VR technologies into a single device. However, at the same time, the company has also been working on new AR glasses. According to Haitong …",
        "url": "https://9to5mac.com/2022/06/12/apples-ar-glasses-coming-late-2024/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/Apple-AR-Glasses.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-06-13T03:17:15Z",
        "content": "There’s a lot going on when it comes to Apple’s rumored mixed reality headset, which is expected to combine both AR and VR technologies into a single device. However, at the same time, the company ha… [+2399 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Elespanol.com"
        },
        "author": null,
        "title": "1Password se apunta al futuro sin contraseñas de Apple y Google",
        "description": "El popular gestor de contraseñas 1Password se ha sumado a la alianza FIDO que promete poder identificarnos en webs, apps y servicios sin usar contraseñas.",
        "url": "https://www.elespanol.com/elandroidelibre/aplicaciones/20220613/apunta-futuro-sin-contrasenas-apple-google/679932019_0.html",
        "urlToImage": "https://s1.eestatic.com/2022/06/13/elandroidelibre/aplicaciones/679942017_225039170_600x315.jpg",
        "publishedAt": "2022-06-13T06:43:34Z",
        "content": "Noticias relacionadas\r\nUsar contraseñas sencillas es uno de los motivos por los que muchos usuarios de webs y aplicaciones tienen problemas de seguridad. Es cierto que no es cómodo usar contraseñas d… [+1368 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MakeUseOf"
        },
        "author": "Sergio Velasquez",
        "title": "4 Features From iPadOS 16 That Are Only for M1 iPads",
        "description": "Unfortunately, some of the most fantastic iPadOS 16 features are exclusive to the M1 iPad Pro.",
        "url": "https://www.makeuseof.com/ipados-16-features-exclusive-m1-ipads/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/06/iPadOS-16-Connected-to-Studio-Display-Featured.jpg",
        "publishedAt": "2022-06-13T00:36:22Z",
        "content": "Bad news for iPad users. Even if your iPad supports the iPadOS 16 software update, some of the new features are only available for the most expensive iPad, the M1 iPad Pro. If you have any other iPad… [+3434 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Rolling Stone"
        },
        "author": "ky.henderson",
        "title": "John Oliver Makes a Case for Breaking Up the Tech Giants",
        "description": "Apple, Google, Facebook, and Amazon pretty much control the internet. That's bad for a lot of reasons, one being that they're stifling the kind of innovation they all claim to value.",
        "url": "https://www.rollingstone.com/tv/tv-news/john-oliver-tech-monopolies-1367047/",
        "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2022/02/john-oliver.jpg",
        "publishedAt": "2022-06-13T05:12:20Z",
        "content": "There are few things John Oliver delights in more than ripping on AT&amp;T, which ultimately owns HBO and Last Week Tonight, and which Oliver likes to refer to as “business daddy.” So when Oliver gav… [+3929 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Frandroid"
        },
        "author": "Pierre Crochart",
        "title": "Admiratif du succès des puces Apple, Qualcomm se retrousse les manches",
        "description": "Presque deux ans après le lancement des puces M1 d'Apple, et une semaine après l'annonce de la M2, Qualcomm prend la parole pour parler stratégie et performances.Si Qualcomm reste très majoritaire sur le marché des smartphones avec ses SoC Snapdragon, il sent…",
        "url": "https://www.frandroid.com/marques/qualcomm/1364617_admiratif-du-succes-des-puces-apple-qualcomm-se-retrousse-les-manches",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/06/apple-wwdc22-m2-chip-m1-chip-2up-220606-crop.jpeg",
        "publishedAt": "2022-06-13T05:45:33Z",
        "content": "Presque deux ans après le lancement des puces M1 d'Apple, et une semaine après l'annonce de la M2, Qualcomm prend la parole pour parler stratégie et performances.\r\nApple vient dannoncer sa nouvelle p… [+3471 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Wwwhatsnew.com"
        },
        "author": "Nelson Herrera",
        "title": "5 consejos para aprovechar tu AirTag lo máximo posible",
        "description": "Seguramente en los últimos tiempos has escuchado mucho sobre los famosos AirTags, los rastreadores Bluetooth de Apple que no han hecho más que ganarse al público desde su lanzamiento en 2021. Y aunque el método de uso de estos dispositivos es extremadamente f…",
        "url": "https://wwwhatsnew.com/2022/06/13/5-consejos-para-aprovechar-tu-airtag-lo-maximo-posible/",
        "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2022/06/5-consejos-para-aprovechar-al-maximo-tu-AirTag.jpg",
        "publishedAt": "2022-06-13T01:00:32Z",
        "content": "Seguramente en los últimos tiempos has escuchado mucho sobre los famosos AirTags, los rastreadores Bluetooth de Apple que no han hecho más que ganarse al público desde su lanzamiento en 2021.\r\nY aunq… [+3967 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Srad.jp"
        },
        "author": "nagazou",
        "title": "Vivaldi、メールクライアントのVivaldi メールやカレンダー、フィードリーダーを公開",
        "description": "Vivaldi Technologiesは9日、同社のWebブラウザVivaldiに、メールクライアント「Vivaldi メール 1.0」が組み込まれたと発表した。またメールと同時に「Vivaldi カレンダー」と「Vivaldi フィードリーダー」も内蔵されたとしている。Vivaldiメールでは、IMAPとPOP3のほか、Googleの「Gmail」、Appleの「iCloud」、Microsoftの「Outlook」がサポートされた。このほか「Vivaldiカレンダー」との統合による招待メール管理などもおこな…",
        "url": "https://it.srad.jp/story/22/06/12/1535209/",
        "urlToImage": "https://srad.jp/static/topics/upgrades_64.png",
        "publishedAt": "2022-06-13T04:31:00Z",
        "content": "descriptive\r\ntypodupeerror\r\n-- \r\nTrademarks property of their respective owners. Comments owned by the poster. ©SRAD. SRAD is an Appirits service."
      },
      {
        "source": {
          "id": null,
          "name": "Cnbeta.com"
        },
        "author": "study875",
        "title": "按照现有价格上涨趋势 2032年iPhone顶配售价6069美元",
        "description": "伴随着苹果、三星为代表的手机厂商纷纷布局高端市场，目前用户购买价格超过 1000 美元的旗舰机型已经比较普遍。根据在线移动市场 Mozillion 最近的一项分析，如果未来 10 年继续按照现有的价格上涨趋势，顶级 iPhone 售价可能会超过 6000 美元。 阅读全文",
        "url": "https://www.cnbeta.com/articles/tech/1280035.htm",
        "urlToImage": "https://static.cnbetacdn.com/article/2022/0613/5dff7d3eab53973.jpg",
        "publishedAt": "2022-06-13T00:15:12Z",
        "content": "2032 \r\nMozillion iPhone 2012 199 10 iPhone 5 2022 iPhone 13 Pro Max 1,099 iPhone 452% 2032 Apple 6,069 \r\n 10 3,300 184% \r\n 2032 3,300 233% 300 1000"
      },
      {
        "source": {
          "id": null,
          "name": "Ifanr.com"
        },
        "author": "何, 嘉昕",
        "title": "早报 | 罗永浩宣布退网埋头创业 / 知网开放个人查重 / ​信元猫粮或已致 317 只猫死亡",
        "description": "Google 与 1.5 万名女员工和解性别歧视诉讼\nForever 21 正式返回中国市场#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
        "url": "https://www.ifanr.com/1494486",
        "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2022/06/111-1.jpg",
        "publishedAt": "2022-06-13T00:57:23Z",
        "content": "<ul><li></li><li></li><li> 317 </li><li>Swedish House Mafia x </li><li> LED </li><li></li><li></li><li>Google 1.5 </li><li></li><li>Forever 21 </li><li> 6.0</li><li>2022 </li></ul>\r\nAR AR AR 2007 iPh… [+612 chars]"
      },
      {
        "source": {
          "id": "el-mundo",
          "name": "El Mundo"
        },
        "author": "SANTIAGO OSPITAL",
        "title": "¿Amenaza la inflación a nuestras vacaciones de verano?",
        "description": "¿Qué costes serán los más afectados por la inflación? ¿Obligarán a suspender viajes? ¿Transporte, alojamiento, duración del viaje... dónde ahorramos? ¿Cómo afecta esto...",
        "url": "https://www.elmundo.es/podcasts/el-mundo-al-dia/2022/06/13/62a6bf5be4d4d8c7188b45cd.html",
        "urlToImage": "https://phantom-elmundo.unidadeditorial.es/ae8ab6c8130ee7e62f51022c464ec8a4/resize/1200/f/jpg/assets/multimedia/imagenes/2022/06/13/16550953558425.jpg",
        "publishedAt": "2022-06-13T05:41:52Z",
        "content": "¿Qué costes serán los más afectados por la inflación? ¿Obligarán a suspender viajes? ¿Transporte, alojamiento, duración del viaje... dónde ahorramos? ¿Cómo afecta esto al sector turístico, que se rec… [+634 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Impress.co.jp"
        },
        "author": null,
        "title": "iPhoneの新機能「パスキー」のセキュリティはどうなってる？",
        "description": "米アップル（Apple）は日本時間6月7日未明に、開発者向けイベント「WWDC 2022」の基調講演でパスワードを使わない認証機能「パスキー」を発表した。Webサービスやアプリなどへのログイン時に、パスワードではなくAppleデバイスの生体認証を利用する機能で、パスワードに代わるものとして設計されているという。",
        "url": "https://k-tai.watch.impress.co.jp/docs/news/1416627.html",
        "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1416/627/cont1.jpg",
        "publishedAt": "2022-06-13T05:55:16Z",
        "content": "WebAuthenticationWebAuthnOSWeb \r\n AppleTouch IDFace ID \r\n FIDO Alliance"
      },
      {
        "source": {
          "id": null,
          "name": "Impress.co.jp"
        },
        "author": null,
        "title": "Apple Watch SEもセール対象、6月の「Amazonタイムセール祭り」は18日9時～20日いっぱい",
        "description": "Amazon.co.jpで、6月18日9時～20日23時59分、「タイムセール祭り」が開催される。",
        "url": "https://k-tai.watch.impress.co.jp/docs/news/1416511.html",
        "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1416/511/220613amazon.jpg",
        "publishedAt": "2022-06-13T01:07:55Z",
        "content": "Amazon.co.jp6189202359 \r\n Fire TV StickKindleAmazon \r\n Apple Watch SEGPSMi 6Anker 757 Portable Power StationAnker Soundcore Liberty Air 2 ProSurface Book 3 \r\n 110"
      },
      {
        "source": {
          "id": null,
          "name": "Clubic"
        },
        "author": "/auteur/407247-merouan-goumiri.html",
        "title": "iOS 16 permettra de transférer une eSIM d'un iPhone à l'autre via le Bluetooth",
        "description": "Si vous trouviez le transfert d’eSIM contraignant sur iPhone, alors cette nouvelle fonctionnalité d’iOS 16 devrait fortement vous intéresser.",
        "url": "https://www.clubic.com/pro/entreprises/apple/actualite-426669-ios-16-permettra-de-transferer-une-esim-d-un-iphone-a-l-autre-via-le-bluetooth.html",
        "urlToImage": "https://pic.clubic.com/v1/images/2008761/raw",
        "publishedAt": "2022-06-13T06:20:00Z",
        "content": "Si vous trouviez le transfert deSIM contraignant sur iPhone, alors cette nouvelle fonctionnalité diOS 16 devrait fortement vous intéresser.\r\nTandis que nous avons déjà pu mettre les mains sur iOS 16,… [+1404 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Impress.co.jp"
        },
        "author": null,
        "title": "Apple M1に実装されているセキュリティ機能「ポインタ認証」は完璧ではない。MITが警鐘",
        "description": "米マサチューセッツ工科大学(MIT)のコンピュータ科学人工知能研究所(CSAIL)は10日(現地時間)、Apple M1が採用しているArmの命令集「ARMv8.3」のセキュリティ向け拡張命令の1つ「ポインタ認証」にバグ「PACMAN」があり、サイドチャネル攻撃により無効化できることを明らかにした。このバグはハードウェアのメカニズムを用いているため、ソフトウェアで修正することも不可能だという。",
        "url": "https://pc.watch.impress.co.jp/docs/news/1416644.html",
        "urlToImage": "https://pc.watch.impress.co.jp/img/pcw/list/1416/644/1.jpg",
        "publishedAt": "2022-06-13T05:18:13Z",
        "content": "(MIT)(CSAIL)10()Apple M1ArmARMv8.31PACMAN \r\n ARMv8.3116bitPointer Authentication Code(PAC) \r\n PAC \r\n PACMANPAC(AUT)PACPACPACMANPAC \r\n PACMANPACCPU"
      },
      {
        "source": {
          "id": null,
          "name": "Appbank.net"
        },
        "author": "岩佐",
        "title": "iPhone 14に訪れる「3年ぶり」の劇的進化",
        "description": "「iPhone 14」シリーズのアップグレードについての新たなレポートを、著名アナリストのミンチー・クオ氏がmedium.comに投稿しています。 *Category：テクノロジー Technology｜*Source： […]",
        "url": "https://www.appbank.net/2022/06/13/technology/2249777.php",
        "urlToImage": "https://www.appbank.net/wp-content/uploads/2022/06/2022-0613-iPhone-14-cam-thumb-1.jpeg",
        "publishedAt": "2022-06-13T06:17:32Z",
        "content": "iPhone 14medium.com\r\n*Category\r\n Technology*Source9to5Mac ,@mingchikuo\r\n9to5MacAppleiPhone 14\r\nGeniusLarganAlpsLuxshare\r\nAppleLG InnotekAppleLG Innotek\r\nApple\r\n(AF)56\r\niPhone 14F1.9AppleiPhone 11F2.2… [+89 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "Express News Service",
        "title": "Four cops arrested in Ahmedabad for hosting booze party at traffic police outpost",
        "description": "The police said a team raided the outpost in Ahmedabad’s Navrangpura on Sunday night after a video of the liquor party, shot by one of the four accused, was uploaded on social media.",
        "url": "https://indianexpress.com/article/cities/ahmedabad/cops-arrested-ahmedabad-booze-party-traffic-police-outpost-7966907/",
        "urlToImage": "https://images.indianexpress.com/2022/06/police-jawan-drinking-daru-at-chowki-ahmedabad.jpg",
        "publishedAt": "2022-06-13T06:37:06Z",
        "content": "Four policemen, including an assistant sub-inspector (ASI), were arrested Sunday night for hosting a booze party inside a traffic police outpost (chowki) near Sardar Patel stadium in Ahmedabads Navra… [+1455 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Nextpit.de"
        },
        "author": "Benjamin Lucks",
        "title": "iPhone und iPad werden zur Switch: iOS 16 bringt Joy-Con-Support",
        "description": "Ein Twitter-Nutzer hat herausgefunden, dass die Beta von iOS 16 einen native Unterstützung für Joy-Cons mitbringt. Wird das iPhone zur Switch?(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
        "url": "https://www.nextpit.de/iphone-und-ipad-werden-zur-switch-ios-16-bringt-joy-con-support",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Apple_iPhone_13_Mini/NextPit_Apple_iPhone_13_Mini_Display_Test.jpg",
        "publishedAt": "2022-06-13T05:00:00Z",
        "content": "Nachdem Apple lange Zeit dafür belächelt wurde, keinen Fokus auf das Thema Gaming zu legen, scheint es seit einiger Zeit eine Trendwende zu geben. Zur WWDC 2022, die am 5. Juni stattfand, kündigte da… [+1846 chars]"
      }
    
  ]
  constructor(){
    super();
    console.log("Hello I am a constructor from news component")
    this.state={
      articles: this.articles,
      loading: false

    }
  }
  render() {
    return (
      <div>
          <div className="container my-4">
            <h1>News Headlines</h1>
            
            <div className="row">
            {this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
               <NewsItem  title={element.title.slice(0, 44)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
               </div>

            })}
             
         
         
          </div>
          </div>
      </div>
    )
  }
}

export default News