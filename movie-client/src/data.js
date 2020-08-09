import cover from "./assets/img/covers/cover.jpg";
import cover2 from "./assets/img/covers/cover2.jpg";
import cover3 from "./assets/img/covers/cover3.jpg";
import cover4 from "./assets/img/covers/cover4.jpg";
import cover5 from "./assets/img/covers/cover5.jpg";
import cover6 from "./assets/img/covers/cover6.jpg";
import avt from './assets/img/user.png';

const detailList = [
    {
        id: 1,
        title: "I Dream in Another Language",
        poster: cover,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Action" }, { id: 2, name: "Triler" }],
        imdb: 8.7,
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        country: "USA",
        release: "2017",
        time: 100
    },
    {
        id: 2,
        title: "Benched",
        poster: cover2,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        country: "England",
        release: "24-01-1998",
        time: 160
    }, {
        id: 3,
        title: "Whitney",
        poster: cover3,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Comedy" }, { id: 2, name: "Drama" }, { id: 3, name: "Music" }],
        imdb: 8.7,
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        country: "England",
        release: "15-05-1998",
        time: 160
    }, {
        id: 4,
        title: "Blindspotting",
        poster: cover4,
        resolution: "FullHD",
        limitAge: "13+",
        genres: [{ id: 1, name: "Comedy" }, { id: 2, name: "Drama" }],
        imdb: 8.7,
        desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        country: "England",
        release: "24-01-1998",
        time: 160
    }, {
        id: 5,
        title: "I Dream in Another Language",
        poster: cover5,
        resolution: "SD",
        limitAge: "0",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        country: "England",
        release: "03-02-2014",
        time: 160
    }, {
        id: 6,
        title: "Benched",
        poster: cover6,
        resolution: "SD",
        limitAge: "0",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        country: "France",
        release: "03-02-2020",
        time: 60
    }
]

const gridList = [
    {
        id: 1,
        title: "I Dream in Another Language",
        poster: cover,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Action" }, { id: 2, name: "Triler" }],
        imdb: 8.7,
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        country: "USA",
        release: "2017",
        time: 100
    },
    {
        id: 2,
        title: "Benched",
        poster: cover2,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        country: "England",
        release: "24-01-1998",
        time: 160
    }, {
        id: 3,
        title: "Whitney",
        poster: cover3,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Comedy" }, { id: 2, name: "Drama" }, { id: 3, name: "Music" }],
        imdb: 8.7,
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        country: "England",
        release: "15-05-1998",
        time: 160
    }, {
        id: 4,
        title: "Blindspotting",
        poster: cover4,
        resolution: "FullHD",
        limitAge: "13+",
        genres: [{ id: 1, name: "Comedy" }, { id: 2, name: "Drama" }],
        imdb: 8.7,
        desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        country: "England",
        release: "24-01-1998",
        time: 160
    }, {
        id: 5,
        title: "I Dream in Another Language",
        poster: cover5,
        resolution: "SD",
        limitAge: "0",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        country: "England",
        release: "03-02-2014",
        time: 160
    }, {
        id: 6,
        title: "Benched",
        poster: cover6,
        resolution: "SD",
        limitAge: "0",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        country: "France",
        release: "03-02-2020",
        time: 60
    }, {
        id: 7,
        title: "I Dream in Another Language",
        poster: cover,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Action" }, { id: 2, name: "Triler" }],
        imdb: 8.7,
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        country: "USA",
        release: "2017",
        time: 100
    },
    {
        id: 8,
        title: "Benched",
        poster: cover2,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        country: "England",
        release: "24-01-1998",
        time: 160
    }, {
        id: 9,
        title: "Whitney",
        poster: cover3,
        resolution: "HD",
        limitAge: "16+",
        genres: [{ id: 1, name: "Comedy" }, { id: 2, name: "Drama" }, { id: 3, name: "Music" }],
        imdb: 8.7,
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        country: "England",
        release: "15-05-1998",
        time: 160
    }, {
        id: 10,
        title: "Blindspotting",
        poster: cover4,
        resolution: "FullHD",
        limitAge: "13+",
        genres: [{ id: 1, name: "Comedy" }, { id: 2, name: "Drama" }],
        imdb: 8.7,
        desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        country: "England",
        release: "24-01-1998",
        time: 160
    }, {
        id: 11,
        title: "I Dream in Another Language",
        poster: cover5,
        resolution: "SD",
        limitAge: "0",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        country: "England",
        release: "03-02-2014",
        time: 160
    }, {
        id: 12,
        title: "Benched",
        poster: cover6,
        resolution: "SD",
        limitAge: "0",
        genres: [{ id: 1, name: "Comedy" }],
        imdb: 8.7,
        desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        country: "France",
        release: "03-02-2020",
        time: 60
    }
]

const movieCards = [
    {
        id: 1,
        title: 'I Dream in Another Language',
        poster: cover,
        genres: ['Action', 'Triler'],
        imdb: 8.4
    },
    {
        id: 2,
        title: 'Benched',
        poster: cover2,
        genres: ['Comedy'],
        imdb: 7.1
    },
    {
        id: 3,
        title: 'Whitney',
        poster: cover3,
        genres: ['Romance', 'Drama', 'Music'],
        imdb: 6.3
    },
    {
        id: 4,
        title: 'Blindspotting',
        poster: cover4,
        genres: ['Drama', 'Comedy'],
        imdb: 7.9
    },
    {
        id: 5,
        title: 'I Dream in Another Language',
        poster: cover5,
        genres: ['Action', 'Triler'],
        imdb: 8.4
    },
    {
        id: 6,
        title: 'Benched',
        poster: cover6,
        genres: ['Comedy', 'Triler'],
        imdb: 8.4
    }

]

const comments = [
    {
        id: 1,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        like: 12,
        dislike: 12,
        answer: false
    },
    {
        id: 2,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        like: 12,
        dislike: 12,
        answer: true
    },
    {
        id: 3,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        like: 12,
        dislike: 12,
        answer: true
    },
    {
        id: 4,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        like: 12,
        dislike: 12,
        answer: false
    },
    {
        id: 5,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        like: 12,
        dislike: 12,
        answer: false
    },
    {
        id: 6,
        avt: avt,
        username: 'John Doe',
        time: '30.08.2018, 17:53',
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        like: 12,
        dislike: 12
    },

]

const movie = {
    id: 1,
    title: "I Dream in Another Language",
    poster: cover,
    resolution: "HD",
    limitAge: "16+",
    genres: ["Action", "Roman"],
    imdb: 8.7,
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    country: "USA",
    release: "2017",
    time: 100,
    sources: [{ id: 1, src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" },
    { id: 2, src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" },
    { id: 3, src: "https://www.googleapis.com/drive/v3/files/1N4Y4zfOHH_Et7Z1swNz_Rz2LzsUiLmNV?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA" },
    { id: 4, src: "https://www.googleapis.com/drive/v3/files/1BNHG5VIzLtOEx6rQV8o4O-yT6omnNT6L?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA" },
    { id: 5, src: "https://www.googleapis.com/drive/v3/files/14DQBuKPBapfRmu7GxihTd7PR6u_89H2-?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA" }]
}

const qualities = [{ id: 1, name: "HD" }, { id: 2, name: "SD" }, { id: 3, name: "Full HD" }, { id: 4, name: "All" }];

const genres = [
    { id: 1, name: "Romance" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Horror" },
    { id: 4, name: "Scifi" },
    { id: 5, name: "Action" },
]
export { genres, detailList, gridList, movieCards, movie, comments, qualities }