let songsList = document.querySelector("#songsList");
let box = document.getElementsByClassName("box");
let trackArea = document.querySelector("#trackArea");
let playlist = document.querySelector("#playlist");
let themeValue = true;
const songs = [
  {
    title: "Reyah El Hayah || رياح الحياه",
    duration: "3:48",
    artist: "Hamza Namira",
    poster: "1.jpg",
    name: "1.mp3",
  },
  {
    title: "Fadi Shewaya || فاضي شويه",
    duration: "4:07",
    artist: "Hamza Namira",
    poster: "2.png",
    name: "2.mp3",
  },
  {
    title: "Akeed Rag3een || أكيد راجعين",
    duration: "2:44",
    artist: "Hamza Namira",
    poster: "3.jpg",
    name: "3.mp3",
  },
  {
    title: "Tesmahy || تسمحي",
    duration: "3:46",
    artist: "Hamza Namira",
    poster: "4.jpg",
    name: "4.mp3",
  },
  {
    title: "Raye2 || رايق",
    duration: "3:54",
    artist: "Hamza Namira",
    poster: "5.png",
    name: "5.mp3",
  },
  {
    title: "Dar Ya Dar || دار يا دار",
    duration: "4:16",
    artist: "Hamza Namira",
    poster: "6.jpg",
    name: "6.mp3",
  },
  {
    title: "Wala Sohba Ahla || ولا صحبه احلي",
    duration: "3:36",
    artist: "Hamza Namira",
    poster: "7.jpg",
    name: "7.mp3",
  },
  {
    title: "Dari Ya Albi || داري يا قلبي",
    duration: "4:52",
    artist: "Hamza Namira",
    poster: "8.jpg",
    name: "8.mp3",
  },
  {
    title: "Ya Zareef El Tol || يا ظريف الطول",
    duration: "5:11",
    artist: "Hamza Namira",
    poster: "9.jpg",
    name: "9.mp3",
  },
  {
    title: "Esma3ni || اسمعني",
    duration: "4:09",
    artist: "Hamza Namira",
    poster: "10.jpg",
    name: "10.mp3",
  },
  {
    title: "Hater Min Tany || هطير من تاني",
    duration: "4:07",
    artist: "Hamza Namira",
    poster: "11.jpg",
    name: "11.mp3",
  },
  {
    title: "Ay Kalam || أي كلام",
    duration: "4:03",
    artist: "Hamza Namira",
    poster: "12.jpg",
    name: "12.mp3",
  },
  {
    title: "Sabah El Kheer || صباح الخير",
    duration: "4:05",
    artist: "Hamza Namira",
    poster: "13.jpg",
    name: "13.mp3",
  },
  {
    title: "El Kesa Wly Kan || القصه واللي كان",
    duration: "3:21",
    artist: "Hamza Namira",
    poster: "14.jpg",
    name: "14.mp3",
  },
  {
    title: "La3lho Kheer || لعله خير",
    duration: "3:42",
    artist: "Hamza Namira",
    poster: "15.jpg",
    name: "15.mp3",
  },
  {
    title: "Ya Tair || يا طير",
    duration: "4:23",
    artist: "Hamza Namira",
    poster: "16.jpg",
    name: "16.mp3",
  },
  {
    title: "El Waq3a El Akhira || الواقعه الاخيره",
    duration: "4:21",
    artist: "Hamza Namira",
    poster: "17.jpg",
    name: "17.mp3",
  },
  {
    title: "Ya Hanah || يا هناه",
    duration: "4:05",
    artist: "Hamza Namira",
    poster: "18.jpg",
    name: "18.mp3",
  },
  {
    title: "Ma3 El Salama || مع السلامه",
    duration: "3:53",
    artist: "Hamza Namira",
    poster: "19.jpg",
    name: "19.mp3",
  },
  {
    title: "Ana El Taib || أنا الطيب",
    duration: "3:10",
    artist: "Hamza Namira",
    poster: "20.jpg",
    name: "20.mp3",
  },
  {
    title: "Ghorob || غروب",
    duration: "3:53",
    artist: "Hamza Namira",
    poster: "21.jpg",
    name: "21.mp3",
  },
  {
    title: "Feh Nas || فيه ناس",
    duration: "3:24",
    artist: "Hamza Namira",
    poster: "22.jpg",
    name: "22.mp3",
  },
  {
    title: "Hansa || هنسي",
    duration: "4:23",
    artist: "Hamza Namira",
    poster: "23.jpg",
    name: "23.mp3",
  },
  {
    title: "El Sohab || الصحاب",
    duration: "3:23",
    artist: "Hamza Namira & Zab Tharwat",
    poster: "24.jpg",
    name: "24.mp3",
  },
  {
    title: "Msh Saleem || مش سليم",
    duration: "3:33",
    artist: "Hamza Namira",
    poster: "25.jpg",
    name: "25.mp3",
  },
  {
    title: "Sheikh El Arab || شيخ العرب",
    duration: "3:48",
    artist: "Hamza Namira",
    poster: "26.jpg",
    name: "26.mp3",
  },
  {
    title: "El Eskandria || الأسكندريه",
    duration: "3:36",
    artist: "Hamza Namira",
    poster: "27.jpg",
    name: "27.mp3",
  },
  {
    title: "3alm Kadaba || عالم كدابه",
    duration: "3:50",
    artist: "Hamza Namira",
    poster: "28.jpg",
    name: "28.mp3",
  },
  {
    title: "6 Sabahn || 6 صباحاً",
    duration: "3:34",
    artist: "Hamza Namira",
    poster: "29.jpg",
    name: "29.mp3",
  },
  {
    title: "Ghenwa Lek Mn Albi || غنوه ليك من قلبي",
    duration: "4:00",
    artist: "Hamza Namira",
    poster: "30.jpg",
    name: "30.mp3",
  },
  {
    title: "Yaba || يابا",
    duration: "3:24",
    artist: "Hamza Namira",
    poster: "31.jpg",
    name: "31.mp3",
  },
  {
    title: "Ahkelk Khofy || أحكيلك خوفي",
    duration: "3:40",
    artist: "Hamza Namira",
    poster: "32.jpg",
    name: "32.mp3",
  },
  {
    title: "Msh Mohem || مش مهم",
    duration: "3:23",
    artist: "Hamza Namira",
    poster: "33.jpg",
    name: "33.mp3",
  },
  {
    title: "Ma3lsh || معلش",
    duration: "3:28",
    artist: "Hamza Namira",
    poster: "34.jpg",
    name: "34.mp3",
  },
  {
    title: "Mawlwd Sanat 80 || مولود سنة 80",
    duration: "3:47",
    artist: "Hamza Namira",
    poster: "35.jpg",
    name: "35.mp3",
  },
  {
    title: "Esta3izo || إستعيذوا",
    duration: "4:09",
    artist: "Hamza Namira",
    poster: "36.jpg",
    name: "36.mp3",
  },
  {
    title: "Abl El Fagr || قبل الفجر",
    duration: "4:30",
    artist: "Hamza Namira",
    poster: "37.jpg",
    name: "37.mp3",
  },
  {
    title: "Saheb El Sa3ada || صاحب السعاده",
    duration: "4:14",
    artist: "Hamza Namira",
    poster: "38.jpg",
    name: "38.mp3",
  },
  {
    title: "Ya Dairty || يا ديرتي",
    duration: "3:23",
    artist: "Hamza Namira",
    poster: "39.jpg",
    name: "39.mp3",
  },
  {
    title: "Shewyt Habaib || شوية حبايب",
    duration: "3:40",
    artist: "Hamza Namira",
    poster: "40.jpg",
    name: "40.mp3",
  },
  {
    title: "Zahra || زهرة",
    duration: "2:58",
    artist: "Hamza Namira",
    poster: "41.jpg",
    name: "41.mp3",
  },
  {
    title: "El Wad El Abeet || الواد العبيط",
    duration: "3:35",
    artist: "Hamza Namira",
    poster: "42.jpg",
    name: "42.mp3",
  },
  {
    title: "Madadd || مدد",
    duration: "3:44",
    artist: "Hamza Namira",
    poster: "43.jpg",
    name: "43.mp3",
  },
  {
    title: "A5er Leila || اخر ليله",
    duration: "2:46",
    artist: "Hamza Namira",
    poster: "44.jpg",
    name: "44.mp3",
  },
  {
    title: "Da2t Tabla || دقة طبله",
    duration: "1:56",
    artist: "Hamza Namira",
    poster: "45.jpg",
    name: "45.mp3",
  },
  {
    title: "Estghfar || استغفار",
    duration: "1:55",
    artist: "Hamza Namira",
    poster: "46.jpg",
    name: "46.mp3",
  },
  {
    title: "Ew3dony || إوعدوني",
    duration: "4:39",
    artist: "Hamza Namira",
    poster: "47.jpg",
    name: "47.mp3",
  },
  {
    title: "3ala Bab Allah || علي باب اللَه",
    duration: "3:46",
    artist: "Hamza Namira",
    poster: "48.jpg",
    name: "48.mp3",
  },
  



];

const showSongs = () => {
  songsList.innerHTML = `<div class="songTitle">All Songs</div>`;
  songs.forEach((element, index) => {
    songsList.innerHTML += `<div class="eachSong" id="songNo${index}">
        <div class="playBtn circle" onclick="playSong(${index})"><i class="fa-solid fa-play"></i><i class="fa-solid fa-chart-simple"></i></div>
        <div class="details">
          <h1>${element.title}</h1>
          <div class="songFooter">
            <p>${element.artist}</p>
            <span>${element.duration}</span>
          </div>
        </div>
      </div>`;
  });
};
showSongs();

const theme = (value) => {
  if (value === 0) {
    document.documentElement.style.setProperty("--dark", "#fcfcfc");
    document.documentElement.style.setProperty("--white", "#20242e");
    document.documentElement.style.setProperty("--grey", "#e9e9e9");
    document.documentElement.style.setProperty("--light", "#e9e9e9");
    document.documentElement.style.setProperty("--song", "#304253");
    box[0].className = "box circle active";
    box[1].className = "box circle";
  } else {
    document.documentElement.style.setProperty("--dark", "#20242e");
    document.documentElement.style.setProperty("--white", "#fcfcfc");
    document.documentElement.style.setProperty("--grey", "#c5c5c5");
    document.documentElement.style.setProperty("--light", "#4d5765");
    document.documentElement.style.setProperty("--song", "#f6f6f6");
    box[1].className = "box circle active";
    box[0].className = "box circle";
  }
};
theme(0);
const showPlaylist = () => {
  playlist.classList.toggle("showBack");
  trackArea.classList.toggle("hide");
  songsList.classList.toggle("hide");
};
