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

document.querySelector(".trndg-card").innerHTML = categories
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
