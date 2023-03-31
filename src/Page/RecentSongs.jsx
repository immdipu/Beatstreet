import React, { useEffect } from "react";
import { SongsList, LoadingSpinner } from "../components";
import { Logo, LogoText } from "../components";
import { useUserContext } from "../Context/UserContext";
import { usePlayerContext } from "../Context/PlayerContext";

const RecentSongs = () => {
  const { login_success, User_id } = useUserContext();
  const {
    getRecentSongs,
    recent_song_loading: loading,
    recent_songs,
  } = usePlayerContext();
  useEffect(() => {
    if (login_success) {
      getRecentSongs(User_id);
    }
  });
  const recentSongs = [
    {
      id: "erx8dagO",
      name: "Tere Naam",
      type: "",
      album: {
        id: "10162109",
        name: "Tere Naam",
        url: "https://www.jiosaavn.com/album/tere-naam/jH9u0VNtHeM_",
      },
      year: "2003",
      releaseDate: "2003-08-15",
      duration: "392",
      label: "",
      primaryArtists: "Alka Yagnik, Udit Narayan",
      primaryArtistsId: "455120, 455127",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "116304569",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/tere-naam/FRoTCRBRUHw",
      copyright: "©  2003 ",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/516/Tere-Naam-Hindi-2003-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/516/Tere-Naam-Hindi-2003-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/516/Tere-Naam-Hindi-2003-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/516/c54703d6d61e3827e54372b1cc36c80f_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/516/c54703d6d61e3827e54372b1cc36c80f_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/516/c54703d6d61e3827e54372b1cc36c80f_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/516/c54703d6d61e3827e54372b1cc36c80f_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/516/c54703d6d61e3827e54372b1cc36c80f_320.mp4",
        },
      ],
    },
    {
      id: "VQp1eXug",
      name: "Zara Sa",
      type: "",
      album: {
        id: "1031998",
        name: "Jannat (Original Motion Picture Soundtrack)",
        url: "https://www.jiosaavn.com/album/jannat-original-motion-picture-soundtrack/bGnqYFTPFRU_",
      },
      year: "2008",
      releaseDate: "2008-03-07",
      duration: "302",
      label: "Sony Music Entertainment India Pvt. Ltd.",
      primaryArtists: "Pritam, KK",
      primaryArtistsId: "456323, 455782",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "72501761",
      language: "hindi",
      hasLyrics: "false",
      url: "https://www.jiosaavn.com/song/zara-sa/JjkbABFoQlQ",
      copyright: "(P) 2008 Sony Music Entertainment India Pvt. Ltd.",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/801/Jannat-Hindi-2008-20190629135803-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/801/Jannat-Hindi-2008-20190629135803-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/801/Jannat-Hindi-2008-20190629135803-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/801/62e0268b27130432c3baee75bd7009fe_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/801/62e0268b27130432c3baee75bd7009fe_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/801/62e0268b27130432c3baee75bd7009fe_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/801/62e0268b27130432c3baee75bd7009fe_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/801/62e0268b27130432c3baee75bd7009fe_320.mp4",
        },
      ],
    },
    {
      id: "_J1M4f9Y",
      name: "Yaar Badal Na Jaana",
      type: "",
      album: {
        id: "1050810",
        name: "Talaash",
        url: "https://www.jiosaavn.com/album/talaash/Ne7I1NIrFpE_",
      },
      year: "2002",
      releaseDate: "2002-10-10",
      duration: "324",
      label: "Venus",
      primaryArtists: "Alka Yagnik, Udit Narayan",
      primaryArtistsId: "455120, 455127",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "12515592",
      language: "hindi",
      hasLyrics: "false",
      url: "https://www.jiosaavn.com/song/yaar-badal-na-jaana/LyJafEBWDmo",
      copyright: "© 2002 Venus Music Pvt. Ltd.",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/541/Talaash-Hindi-2002-20210407130950-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/541/Talaash-Hindi-2002-20210407130950-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/541/Talaash-Hindi-2002-20210407130950-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/541/cb18ccafcd1cba442fa217097d495350_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/541/cb18ccafcd1cba442fa217097d495350_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/541/cb18ccafcd1cba442fa217097d495350_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/541/cb18ccafcd1cba442fa217097d495350_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/541/cb18ccafcd1cba442fa217097d495350_320.mp4",
        },
      ],
    },
    {
      id: "7plAm753",
      name: "Jis Din Teri Meri Baat Nahin Hoti",
      type: "",
      album: {
        id: "1039773",
        name: "Muskaan",
        url: "https://www.jiosaavn.com/album/muskaan/kcHOXArK3ws_",
      },
      year: "2003",
      releaseDate: "2003-12-20",
      duration: "373",
      label: "",
      primaryArtists: "Udit Narayan, Anuradha Paudwal",
      primaryArtistsId: "455127, 455126",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "32981133",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/jis-din-teri-meri-baat-nahin-hoti/RxgHcBkHAgA",
      copyright: "℗ 2003 Super Cassettes Industries Private Limited",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/555/Muskaan-Hindi-2003-20221205080722-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/555/Muskaan-Hindi-2003-20221205080722-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/555/Muskaan-Hindi-2003-20221205080722-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/555/91e5d8db58c7da0fd1764e19457ec585_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/555/91e5d8db58c7da0fd1764e19457ec585_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/555/91e5d8db58c7da0fd1764e19457ec585_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/555/91e5d8db58c7da0fd1764e19457ec585_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/555/91e5d8db58c7da0fd1764e19457ec585_320.mp4",
        },
      ],
    },
    {
      id: "I5f38eVY",
      name: "Main Nikla Gaddi Leke",
      type: "",
      album: {
        id: "3247557",
        name: "Gadar - Ek Prem Katha",
        url: "https://www.jiosaavn.com/album/gadar---ek-prem-katha/9miNijfzLu4_",
      },
      year: "2001",
      releaseDate: "2001-05-15",
      duration: "326",
      label: "Zee Music Co.",
      primaryArtists: "Udit Narayan",
      primaryArtistsId: "455127",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "8347891",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/main-nikla-gaddi-leke/OV0NAkxVYWo",
      copyright: "©  2001 Zee Music Co.",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/228/Gadar-Ek-Prem-Katha-Hindi-2001-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/228/Gadar-Ek-Prem-Katha-Hindi-2001-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/228/Gadar-Ek-Prem-Katha-Hindi-2001-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/228/d28a57ac4d8bbc4bdc0dba65795c7add_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/228/d28a57ac4d8bbc4bdc0dba65795c7add_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/228/d28a57ac4d8bbc4bdc0dba65795c7add_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/228/d28a57ac4d8bbc4bdc0dba65795c7add_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/228/d28a57ac4d8bbc4bdc0dba65795c7add_320.mp4",
        },
      ],
    },
    {
      id: "VNj4g6Jc",
      name: "Hum Tumko Nigahon Mein",
      type: "",
      album: {
        id: "1027708",
        name: "Garv - Pride &amp; Honour",
        url: "https://www.jiosaavn.com/album/garv---pride--honour/8fyhB9eDL0U_",
      },
      year: "2004",
      releaseDate: "",
      duration: "362",
      label: "",
      primaryArtists: "Sajid, Wazid, Anu Malik, Udit Narayan, Shreya Ghoshal",
      primaryArtistsId: "458312, 467674, 456338, 455127, 455130",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "4089447",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/hum-tumko-nigahon-mein/JiYBBRMGfVA",
      copyright: "©  2004 ",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/708/Garv-Pride-Honour-2004-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/708/Garv-Pride-Honour-2004-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/708/Garv-Pride-Honour-2004-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/708/bb994572a8b7029eae492ef7b81780c1_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/708/bb994572a8b7029eae492ef7b81780c1_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/708/bb994572a8b7029eae492ef7b81780c1_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/708/bb994572a8b7029eae492ef7b81780c1_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/708/bb994572a8b7029eae492ef7b81780c1_320.mp4",
        },
      ],
    },
    {
      id: "aq84a-Ge",
      name: "Main Yahaan Hoon",
      type: "",
      album: {
        id: "1053550",
        name: "Veer-Zaara",
        url: "https://www.jiosaavn.com/album/veer-zaara/G1WcU,XEkfI_",
      },
      year: "2004",
      releaseDate: "2004-09-18",
      duration: "295",
      label: "YRF Music",
      primaryArtists: "Udit Narayan, Madan Mohan, Javed Akhtar",
      primaryArtistsId: "455127, 455994, 455447",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "29852501",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/main-yahaan-hoon/ERlTBRUdcFY",
      copyright: "© 2004 YRF Music",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/313/Veer-Zaara-Hindi-2004-20190329150841-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/313/Veer-Zaara-Hindi-2004-20190329150841-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/313/Veer-Zaara-Hindi-2004-20190329150841-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/313/ffb5687a390400a116c54c61d30310e0_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/313/ffb5687a390400a116c54c61d30310e0_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/313/ffb5687a390400a116c54c61d30310e0_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/313/ffb5687a390400a116c54c61d30310e0_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/313/ffb5687a390400a116c54c61d30310e0_320.mp4",
        },
      ],
    },
    {
      id: "CG6wXDMm",
      name: "Dil De Diya Hai",
      type: "",
      album: {
        id: "1038104",
        name: "Masti",
        url: "https://www.jiosaavn.com/album/masti/TyUvqCev8M4_",
      },
      year: "2004",
      releaseDate: "2004-03-05",
      duration: "366",
      label: "",
      primaryArtists: "Anand Raj Anand",
      primaryArtistsId: "455152",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "11230138",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/dil-de-diya-hai/My9dRix0el4",
      copyright: "℗ 2004 Super Cassettes Industries Private Limited",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/395/Masti-Hindi-2004-20221202131722-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/395/Masti-Hindi-2004-20221202131722-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/395/Masti-Hindi-2004-20221202131722-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/395/437f919ff7e5d0902080b834549777d5_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/395/437f919ff7e5d0902080b834549777d5_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/395/437f919ff7e5d0902080b834549777d5_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/395/437f919ff7e5d0902080b834549777d5_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/395/437f919ff7e5d0902080b834549777d5_320.mp4",
        },
      ],
    },
    {
      id: "_u70kQ8Y",
      name: "Humko Tumse Pyaar Hai",
      type: "",
      album: {
        id: "1030503",
        name: "Humko Tumse Pyar Hai",
        url: "https://www.jiosaavn.com/album/humko-tumse-pyar-hai/yZrZeLpELH8_",
      },
      year: "2005",
      releaseDate: "2005-10-07",
      duration: "350",
      label: "",
      primaryArtists: "Kumar Sanu, Alka Yagnik, Anand Raj Anand",
      primaryArtistsId: "455142, 455120, 455152",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "22902433",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/humko-tumse-pyaar-hai/Lx1cAR9hD2o",
      copyright: "℗ 2005 Super Cassettes Industries Private Limited",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/819/Humko-Tumse-Pyar-Hai-Hindi-2005-20221128124535-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/819/Humko-Tumse-Pyar-Hai-Hindi-2005-20221128124535-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/819/Humko-Tumse-Pyar-Hai-Hindi-2005-20221128124535-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/819/91b9295c9ba9a13b1cae5e7cfd20221b_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/819/91b9295c9ba9a13b1cae5e7cfd20221b_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/819/91b9295c9ba9a13b1cae5e7cfd20221b_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/819/91b9295c9ba9a13b1cae5e7cfd20221b_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/819/91b9295c9ba9a13b1cae5e7cfd20221b_320.mp4",
        },
      ],
    },
    {
      id: "6Nl0JWIz",
      name: "Kabhi Kabhi Aditi",
      type: "",
      album: {
        id: "1031314",
        name: "Jaane Tu... Ya Jaane Na",
        url: "https://www.jiosaavn.com/album/jaane-tu...-ya-jaane-na/PlF0P56KKTs_",
      },
      year: "2008",
      releaseDate: "2008-05-21",
      duration: "218",
      label: "",
      primaryArtists: "Rashid Ali",
      primaryArtistsId: "458940",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "15493881",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/kabhi-kabhi-aditi/RiYHAT5nfkk",
      copyright: "℗ 2008 Super Cassettes Industries Private Limited",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/033/Jaane-Tu-Ya-Jaane-Na-Hindi-2008-20221128173303-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/033/Jaane-Tu-Ya-Jaane-Na-Hindi-2008-20221128173303-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/033/Jaane-Tu-Ya-Jaane-Na-Hindi-2008-20221128173303-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/033/88555bc729829a4d34a463e23a245a16_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/033/88555bc729829a4d34a463e23a245a16_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/033/88555bc729829a4d34a463e23a245a16_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/033/88555bc729829a4d34a463e23a245a16_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/033/88555bc729829a4d34a463e23a245a16_320.mp4",
        },
      ],
    },
    {
      id: "wW-dbTmr",
      name: "Saiyyan",
      type: "",
      album: {
        id: "12451186",
        name: "Kailasa Jhoomo Re",
        url: "https://www.jiosaavn.com/album/kailasa-jhoomo-re/PiYwjzXS2Jk_",
      },
      year: "2011",
      releaseDate: "2011-06-03",
      duration: "345",
      label: "Sony Music Entertainment India Pvt. Ltd.",
      primaryArtists: "Kailash Kher, Paresh Kamath, Naresh Kamath",
      primaryArtistsId: "455425, 490201, 472349",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "9682806",
      language: "hindi",
      hasLyrics: "false",
      url: "https://www.jiosaavn.com/song/saiyyan/Bz9GVRZkWkE",
      copyright: "(P) 2007 Sony Music Entertainment India Pvt. Ltd.",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/052/Kailasa-Jhoomo-Re-Hindi-2011-20200620121017-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/052/Kailasa-Jhoomo-Re-Hindi-2011-20200620121017-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/052/Kailasa-Jhoomo-Re-Hindi-2011-20200620121017-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/052/b6a56aacef5bddd921d5c8f4c9f582f9_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/052/b6a56aacef5bddd921d5c8f4c9f582f9_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/052/b6a56aacef5bddd921d5c8f4c9f582f9_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/052/b6a56aacef5bddd921d5c8f4c9f582f9_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/052/b6a56aacef5bddd921d5c8f4c9f582f9_320.mp4",
        },
      ],
    },
    {
      id: "keGNxOoV",
      name: "Main Agar Kahoon",
      type: "",
      album: {
        id: "1041549",
        name: "Om Shanti Om",
        url: "https://www.jiosaavn.com/album/om-shanti-om/EPJXYk,wkdA_",
      },
      year: "2007",
      releaseDate: "2007-09-18",
      duration: "308",
      label: "",
      primaryArtists: "Sonu Nigam, Shreya Ghoshal",
      primaryArtistsId: "455125, 455130",
      featuredArtists: "",
      featuredArtistsId: "",
      explicitContent: 0,
      playCount: "27165284",
      language: "hindi",
      hasLyrics: "true",
      url: "https://www.jiosaavn.com/song/main-agar-kahoon/Gw0sfwx-WGU",
      copyright: "℗ 2007 Super Cassettes Industries Private Limited",
      image: [
        {
          quality: "50x50",
          link: "https://c.saavncdn.com/179/Om-Shanti-Om-Hindi-2007-20221203122509-50x50.jpg",
        },
        {
          quality: "150x150",
          link: "https://c.saavncdn.com/179/Om-Shanti-Om-Hindi-2007-20221203122509-150x150.jpg",
        },
        {
          quality: "500x500",
          link: "https://c.saavncdn.com/179/Om-Shanti-Om-Hindi-2007-20221203122509-500x500.jpg",
        },
      ],
      downloadUrl: [
        {
          quality: "12kbps",
          link: "https://aac.saavncdn.com/179/33492c821ad170b834a1972571a7b75a_12.mp4",
        },
        {
          quality: "48kbps",
          link: "https://aac.saavncdn.com/179/33492c821ad170b834a1972571a7b75a_48.mp4",
        },
        {
          quality: "96kbps",
          link: "https://aac.saavncdn.com/179/33492c821ad170b834a1972571a7b75a_96.mp4",
        },
        {
          quality: "160kbps",
          link: "https://aac.saavncdn.com/179/33492c821ad170b834a1972571a7b75a_160.mp4",
        },
        {
          quality: "320kbps",
          link: "https://aac.saavncdn.com/179/33492c821ad170b834a1972571a7b75a_320.mp4",
        },
      ],
    },
  ];

  if (loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  return (
    <div>
      <section className=" flex justify-center items-center py-20  rounded-b-2xl mb-16 relative h-48">
        <div className=" absolute inset-0 flex justify-end viewall rounded-b-2xl">
          <Logo />
        </div>
        <div className="ml-3 max-lg:ml-11 ">
          <LogoText />
        </div>
      </section>

      <section className=" px-14 max-md:px-2 overflow-auto">
        <h3 className="text-neutral-50  text-2xl max-md:text-xl px-4 mb-5">
          Recent songs
        </h3>
        {login_success ? (
          <SongsList songs={recentSongs} current={"ViewAllSong"} />
        ) : (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              Sorry, we couldn't fetch your recent songs at this time.
              <br />
              <br />
              Access to recent songs is only available to logged-in users.
              Please log in to view your recent songs or try again later.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default RecentSongs;
