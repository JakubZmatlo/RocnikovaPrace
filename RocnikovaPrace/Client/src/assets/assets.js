import menu_icon from "./menu-icon.svg";
import profile_icon from "./profile-pic.svg";
import arrow from "./right-arrow.svg";
import search_icon from "./search-icon.svg";
import cart_icon from "./shopping-cart.svg";
import banner from "./banner.jpg";
import ms from "./ms.jpg";
import ms2 from "./ms2.jpg";
import ms3 from "./ms3.jpg";
import ms4 from "./ms4.jpg";
import ms5 from "./ms5.jpg";
import ms6 from "./ms6.jpg";
import nhl from "./nhl.jpg";
import extraliga from "./extraliga.jpg";
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
    banner,
    ms,
    ms2,
    ms3,
    ms4,
    ms5,
    ms6,
    nhl,
    extraliga,
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

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { text: "Home", url: "#" },
            { text: "Best Sellers", url: "#" },
            { text: "Offers & Deals", url: "#" },
            { text: "Contact Us", url: "#" },
            { text: "FAQs", url: "#" },
        ],
    },
    {
        title: "Need help?",
        links: [
            { text: "Delivery Information", url: "#" },
            { text: "Return & Refund Policy", url: "#" },
            { text: "Payment Methods", url: "#" },
            { text: "Track your Order", url: "#" },
            { text: "Contact Us", url: "#" },
        ],
    },
    {
        title: "Follow Us",
        links: [
            { text: "Instagram", url: "#" },
            { text: "Twitter", url: "#" },
            { text: "Facebook", url: "#" },
            { text: "Youtube", url: "#" },
        ],
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
    /*{
        _id: "gd56g04h",
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
        _id: "gd57g88h",
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
        _id: "gd58g46h",
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
    },*/
]