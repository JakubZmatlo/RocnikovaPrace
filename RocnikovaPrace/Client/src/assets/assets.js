import menu_icon from "./menu-icon.svg";
import profile_icon from "./profile-pic.svg";
import arrow from "./right-arrow.svg";
import search_icon from "./search-icon.svg";
import cart_icon from "./shopping-cart.svg";
import ms from "./ms.jpg";
import ms2 from "./ms2.jpg";
import ms3 from "./ms3.jpg";
import ms4 from "./ms4.jpg";
import ms5 from "./ms5.jpg";
import ms6 from "./ms6.jpg";
import nhl from "./nhl.jpg";
import nhl2 from "./nhl2.jpg";
import nhl3 from "./nhl3.jpg";
import nhl4 from "./nhl4.jpg";
import nhl5 from "./nhl5.jpg";
import nhl6 from "./nhl6.jpg";
import nhl7 from "./nhl7.jpg";
import extraliga from "./extraliga.jpg";
import extraliga2 from "./extraliga2.jpg";
import extraliga3 from "./extraliga3.jpg";
import extraliga4 from "./extraliga4.jpg";
import binder from "./binder.jpg";
import accesory from "./accesory.jpg";
import accesory2 from "./accesory2.jpg";
import accesory3 from "./accesory3.jpg";
import logo from "./slapshot.png";

export const assets = {
    menu_icon,
    profile_icon,
    arrow,
    search_icon,
    cart_icon,
    ms,
    ms2,
    ms3,
    ms4,
    ms5,
    ms6,
    nhl,
    nhl2,
    nhl3,
    nhl4,
    nhl5,
    nhl6,
    nhl7,
    extraliga,
    extraliga2,
    extraliga3,
    extraliga4,
    binder,
    accesory,
    accesory2,
    accesory3,
    logo,
}


export const categories = [
    {
        text: "World Championship",
        path: "worldchampionship",
        image: ms,
    },
    {
        text: "NHL",
        path: "nhl",
        image: nhl,
    },
    {
        text: "Extraliga",
        path: "extraliga",
        image: extraliga,
    },
    {
        text: "Accesories",
        path: "accesories",
        image: binder,
    },
];

export const dummyProducts = [
    {
        _id: "gd46g23h",
        name: "insert card DAVID ŠPAČEK 23-24 LC Golden Prague Belongs to Us World Champions Red /10",
        category: "worldchampionship",
        price: 12,
        image: [ms],
        description: [
            "Player: David Špaček",
            "Team: Representation",
            "Year: 23/24",
            "Card Type: insert",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd47g34h",
        name: "AUTO card ONDŘEJ KAŠE 23-24 LC Golden Prague Belongs to Us World Champions Signature /9",
        category: "worldchampionship",
        price: 45,
        offerPrice: 40,
        image: [ms2],
        description: [
            "Player: Ondřej Kaše",
            "Team: Representation",
            "Year: 23/24",
            "Card Type: AUTO",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd48g45h",
        name: "insert card DANIEL VOŽENÍLEK 23-24 LC Golden Prague Belongs to Us IIHF World Championship Turquoise 1/1",
        category: "worldchampionship",
        price: 37,
        image: [ms3],
        description: [
            "Player: Daniel Voženílek",
            "Team: Representation",
            "Year: 23/24",
            "Card Type: insert",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd49g67h",
        name: "AUTO RC card MATYÁŠ ŠAPOVALIV 23-24 SZ Hokejové Česko Top Prospects Auto /15",
        category: "worldchampionship",
        price: 32,
        image: [ms4],
        description: [
            "Player: Matyáš Šapovaliv",
            "Team: Representation",
            "Year: 23/24",
            "Card Type: AUTO",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd50g16h",
        name: "insert card MIKULÁŠ HOVORKA 23-24 LC Golden Prague Belongs to Us Beijer Hockey Games Turquoise 1/1",
        category: "worldchampionship",
        price: 22,
        image: [ms5],
        description: [
            "Player: Mikuláš Hovorka",
            "Team: Representation",
            "Year: 23/24",
            "Card Type: insert",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd51g74h",
        name: "insert card PASTRŇÁK/McBAIN 23-24 LC Golden Prague Belongs to Us Memorable Moments Red /10",
        category: "worldchampionship",
        price: 18,
        image: [ms6],
        description: [
            "Player: Pastrňák/McBain",
            "Team: Representation",
            "Year: 23/24",
            "Card Type: insert",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },




    {
        _id: "gd56g04h",
        name: "2024-25 Upper Deck Series 2 Hockey Hobby Balíček",
        category: "nhl",
        price: 14,
        image: [nhl],
        description: [
            "12 cards in pack",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd57g88h",
        name: "2024-25 Upper Deck SPx Hockey Hobby Balíček",
        category: "nhl",
        price: 18,
        image: [nhl2],
        description: [
            "3 cards in pack",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd58g46h",
        name: "2023-24 Upper Deck O-Pee-Chee Platinum Hockey Blaster Box",
        category: "nhl",
        price: 35,
        image: [nhl3],
        description: [
            "6 packs in box/4 cards in pack",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd59g61h",
        name: "2024-25 Upper Deck SP Game Used Hockey Hobby Box",
        category: "nhl",
        price: 177,
        image: [nhl4],
        description: [
            "1 packs in box/9 cards in pack",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd60g11h",
        name: "AUTO RC patch card CUTTER GAUTHIER 24-25 SPGU Draft Day Marks /35",
        category: "nhl",
        price: 182,
        image: [nhl5],
        description: [
            "Player: Cutter Gauthier",
            "Team: Philadelphia Flyers",
            "Year: 24/25",
            "Card Type: AUTO patch",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd61g99h",
        name: "AUTO card SETH JARVIS 24-25 SPGU Blue Auto number 99",
        category: "nhl",
        price: 28,
        image: [nhl6],
        description: [
            "Player: Seth Jarvis",
            "Team: Carolina Hurricanes",
            "Year: 24/25",
            "Card Type: AUTO",

        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd62g13h",
        name: "AUTO card JOE PAVELSKI 18-19 Trilogy Ice Scripts number IS-JP",
        category: "nhl",
        price: 28,
        image: [nhl7],
        description: [
            "Player: Joe Pavelski",
            "Team: San Jose Sharks",
            "Year: 18/19",
            "Card Type: AUTO",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },



    {
        _id: "gd63g35h",
        name: "2024-25 SportZoo Tipsport ELH Series 2 Hockey Premium Balíček",
        category: "extraliga",
        price: 8,
        image: [extraliga],
        description: [
            "8 cards in pack",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd64g72h",
        name: "AUTO card JAKUB FLEK 24-25 SZ ELH Ser. 2 The Chosen Ones Die-Cut Auto /89",
        category: "extraliga",
        price: 22,
        image: [extraliga2],
        description: [
            "Player: Jakub Flek",
            "Team: Kometa Brno",
            "Year: 24/25",
            "Card Type: AUTO",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd65g28h",
        name: "insert card DANIEL KUROVSKÝ 24-25 SZ ELH Ser. 2 Powerplay Squad Golden Fireworks /45",
        category: "extraliga",
        price: 6,
        image: [extraliga3],
        description: [
            "Player: Daniel Kurovský",
            "Team: Oceláři Třinec",
            "Year: 24/25",
            "Card Type: insert",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd66g14h",
        name: "paralel card ADAM MĚCHURA 24-25 SZ ELH Ser. 2 Green Glitter /30",
        category: "extraliga",
        price: 2,
        image: [extraliga4],
        description: [
            "Player: Adam Měchura",
            "Team: Škoda Plzeň",
            "Year: 24/25",
            "Card Type: paralel",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },




    {
        _id: "gd52g16h",
        name: "UP Album PRO Binder Zippered for 360 card, black with zipper",
        category: "accesories",
        price: 35,
        image: [binder],
        description: [
            "Ultra Pro album icluding foils, for 360 pcs cards (twosided) ",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd53g44h",
        name: "UP Plastic box for 15 cards",
        category: "accesories",
        price: 2,
        image: [accesory],
        description: [
            "ULTRA PRO closable box",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd54g97h",
        name: "UP Plastic toploader 100pt, package 50 pcs",
        category: "accesories",
        price: 16,
        image: [accesory2],
        description: [
            "ULTRA PRO plastic solid packaging for cards 50 pcs", 
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd55g33h",
        name: "UP Plastic box for 150 cards",
        category: "accesories",
        price: 4,
        image: [accesory3],
        description: [
            "ULTRA PRO closable box",
        ], 
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    

    
]