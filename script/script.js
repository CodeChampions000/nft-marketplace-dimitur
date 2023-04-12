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
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "3",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "4",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "5",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "6",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "7",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "8",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "9",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "10",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "11",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
  },
  {
    num: "12",
    img: "./images/homepage/Avatars/avatar1.png",
    avatarname: "Keepitreal",
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
    bckgrndpic: "./images/homepage/backgrounds/galaxy.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Art",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/galaxy.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Collectibles",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/galaxy.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Music",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/galaxy.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Photography",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/galaxy.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Video",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/galaxy.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Utility",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/galaxy.png",
    iconpic: "./images/homepage/Icons/PaintBrush.png",
    title: "Sport",
  },
  {
    bckgrndpic: "./images/homepage/backgrounds/galaxy.png",
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
