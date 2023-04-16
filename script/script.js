let categories = [
  {
    mainpic: "./images/homepage/NFTS/dog.png",
    smallpic1: "./images/homepage/NFTS/mouse.png",
    smallpic2: "./images/homepage/NFTS/bear.png",
    title: "DSGN Animals",
    pfpimg: "./images/homepage/pfps/foxpfp.png",
    pfname: "MrFox",
  },
  {
    mainpic: "./images/homepage/NFTS/dog.png",
    smallpic1: "./images/homepage/NFTS/mouse.png",
    smallpic2: "./images/homepage/NFTS/bear.png",
    title: "DSGN Animals",
    pfpimg: "./images/homepage/pfps/foxpfp.png",
    pfname: "MrFox",
  },
  {
    mainpic: "./images/homepage/NFTS/dog.png",
    smallpic1: "./images/homepage/NFTS/mouse.png",
    smallpic2: "./images/homepage/NFTS/bear.png",
    title: "DSGN Animals",
    pfpimg: "./images/homepage/pfps/foxpfp.png",
    pfname: "MrFox",
  },
];

document.querySelector(".trndg-card-collection").innerHTML = categories
  .map(
    (cards) =>
      `
    <div class="trndg-card">
            <div class="big-trndg-card">
              <img src="${cards.mainpic}" alt="dognft" />
            </div>
            <div class="small-trndg-card">
              <img src="${cards.smallpic1}" alt="mousenft" />
              <img src="${cards.smallpic2}" alt="bearnft" />
              <img
                src="./images/Number of additional NFTs.png"
                alt="purplebox"
              />
            </div>
            <div class="trendingcards-title">
              <h2>${cards.title}</h2>
            </div>
            <div class="trendingcards-pfp">
              <img src="${cards.pfpimg}" alt="foxpfp" />
              <h2>${cards.pfname}</h2>
            </div>
          </div>
    `
  )
  .join(" ");

let avatarcards = [
  {
    num: "1",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "2",
    img: "./images/homepage/Avatars/avatar2.png",
    avatarname: "DigiLab",
  },
  {
    num: "3",
    img: "./images/homepage/Avatars/avatar3.png",
    avatarname: "GravityOne",
  },
  {
    num: "4",
    img: "./images/homepage/Avatars/avatar4.png",
    avatarname: "Juanie",
  },
  {
    num: "5",
    img: "./images/homepage/Avatars/avatar5.png",
    avatarname: "BlueWhale",
  },
  {
    num: "6",
    img: "./images/homepage/Avatars/avatar6.png",
    avatarname: "mr fox",
  },
  {
    num: "7",
    img: "./images/homepage/Avatars/avatar7.png",
    avatarname: "Shroomie",
  },
  {
    num: "8",
    img: "./images/homepage/Avatars/avatar8.png",
    avatarname: "robotica",
  },
  {
    num: "9",
    img: "./images/homepage/Avatars/avatar9.png",
    avatarname: "RustyRobot",
  },
  {
    num: "10",
    img: "./images/homepage/Avatars/avatar10.png",
    avatarname: "animakid",
  },
  {
    num: "11",
    img: "./images/homepage/Avatars/avatar11.png",
    avatarname: "Dotgu",
  },
  {
    num: "12",
    img: "./images/homepage/Avatars/avatar12.png",
    avatarname: "Ghiblier",
  },
];

document.querySelector(".creator-cards").innerHTML = avatarcards
  .map(
    (avatarcard) =>
      `
      <div class="card">
        <div class="cardnum">
          <h1>${avatarcard.num}</h1>
        </div>
        <div class="cardinfo">
          <img src="${avatarcard.img}" alt="avatarpfp" />
          <h2>${avatarcard.avatarname}</h2>
          <div class="price">
            <p>Total Sales:</p>
            <span>34.53 ETH</span>
          </div>
        </div>
      </div>
    `
  )
  .join(" ");

let categoriescards = [
  {
    bckgrndpic: "./images/homepage/backgrounds/background1.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Art",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/background2.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Collectibles",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/background3.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Music",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/background4.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Photography",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/background5.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Video",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/background6.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Utility",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/background7.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Sport",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/background8.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Virtual Worlds",
  },
];

document.querySelector(".browse-categories-cards").innerHTML = categoriescards
  .map(
    (categoriescard) =>
      `
      <div class="browse-card">
            <div class="icon-image">
              <img src="${categoriescard.iconpic}" alt="icon" />
            </div>
            <img
              src="${categoriescard.bckgrndpic}"
              alt="backgroundimage"
            />
            <h2>${categoriescard.title}</h2>
          </div>
    `
  )
  .join(" ");

let placeholdercards = [
  {
    img: "./images/homepage/Placeholders/Placeholder1.png",
    pfpimg: "./images/homepage/pfps/placeholderpfps/woman1.png",
    pfpname: "MoonDancer",
    title: "Distant Galaxy",
  },
  {
    img: "./images/homepage/Placeholders/Placeholder1.png",
    pfpimg: "./images/homepage/pfps/placeholderpfps/woman1.png",
    pfpname: "NebulaKid",
    title: "Life On Edena",
  },
  {
    img: "./images/homepage/Placeholders/Placeholder1.png",
    pfpimg: "./images/homepage/pfps/placeholderpfps/woman1.png",
    pfpname: "Spaceone",
    title: "AstroFiction",
  },
];

document.querySelector(".placeholder-cards").innerHTML = placeholdercards
  .map(
    (placeholdercard) =>
      `
      <div class="placeholder-card">
          <img
            src="${placeholdercard.img}"
            alt="placeholderimg1"
          />
          <div class="upper-info">
            <h2>${placeholdercard.title}</h2>
            <div class="MoonDancer-pfp-title">
              <img
                src="${placeholdercard.pfpimg}"
                alt="womanpfp1"
              />
              <p>${placeholdercard.pfpname}</p>
            </div>
          </div>
          <div class="lower-info">
            <div class="price-section">
              <div class="left-side">
                <h2>Price</h2>
                <p>1.63 ETH</p>
              </div>
              <div class="right-side">
                <h2>Highest Bid</h2>
                <p>0.33 wETH</p>
              </div>
            </div>
          </div>
        </div>
    `
  )
  .join(" ");
