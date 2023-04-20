import { SiOpenaigym } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },

  {
    name: "Register",
    path: "/Register",
  },
];

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Zumba",
    info: "We offer zumba classes every Friday from 6 to 9pm!",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Calisthenics",
    info: "The Calisthenics cult organizes workshops once every month featuring celebrity personalities! ",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Diet-a-thon",
    info: "A streak of 14 diet days to make sure you get your protein and carbs right!",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Fantastic Marathon",
    info: "Fantastic fitness holds a free 5km marathon every Saturday!",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Value One",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Value Two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Value Three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Value Four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "The frequency of exercise depends on various factors such as your fitness level, goals, and schedule. In general, the American Heart Association recommends at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity aerobic exercise per week. This can be divided into several sessions throughout the week, for example, 30 minutes of exercise, five times a week.",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "Research suggests that the body's core temperature is at its highest in the late afternoon, which may make this an optimal time for high-intensity workouts. However, the most important factor in determining the best time of day to work out is consistency.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "The American College of Sports Medicine recommends that adults aim for at least 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week. This can be broken down into 30-minute workouts on most days of the week.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Yes, it's important to warm up before your workouts. A proper warm-up can help prepare your body for the physical demands of exercise by increasing your heart rate, blood flow, and muscle temperature. This can help reduce the risk of injury, improve performance, and enhance overall workout effectiveness.",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "Strength training involves using resistance exercises to build and tone muscles, improve bone density, and increase overall strength. This can include using free weights, resistance bands, machines, or your own body weight.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Yes, lifting weights is an effective way to engage in strength training. Strength training involves using resistance exercises to build and tone muscles, improve bone density, and increase overall strength. Lifting weights, using resistance bands, or using your own body weight can all be effective forms of strength training.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Chinmay Dharwad",
    quote:
      "I joined this gym a few months ago and I can honestly say it's changed my life. The trainers are amazing and have helped me push my limits in ways I never thought possible. I'm stronger, healthier, and more confident than ever before. Thank you, Fantastic Fitness, for helping me become the best version of myself!",
    job: "Student",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Sandhya Banavati Suresh",
    quote:
      "I was hesitant to join a gym at first, but I'm so glad I found Fantastic Fitness. The community here is amazing and the coaches are so supportive. I've seen incredible progress in my strength and endurance since I started working out here, and I've even made some great friends along the way. If you're looking for a gym that feels like home, this is it.",
    job: "Software Engineer",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Arpita Dharwad",
    quote:
      "I've been a member of Fantastic Fitness for over a year now and I can honestly say it's been the best investment I've ever made. The personalized training plans have helped me achieve my fitness goals faster than I ever thought possible, and the community here is like a second family.",
    job: "University Lecturer",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Kishor Channal",
    quote:
      "As someone who struggled with weight and body image issues for years, I never thought I'd find a gym where I felt truly comfortable. But Fantastic Fitness has changed that for me. The coaches are supportive and understanding, and the community is so welcoming.",
    job: "Talking Parrot",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Karthik Malasani",
    quote: "PLUS ULTRA!",
    job: "Poker Player",
    avatar: require("./images/avatar5.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "Unlimited Access to Home Club", available: true },
      { feature: "Free Fitness Training", available: true },
      { feature: "Perks: Partner Rewards & Discounts", available: true },
      { feature: "Use of Massage Chairs", available: true },
      { feature: "Use of HydroMassage", available: true },
      { feature: "Bring a Guest Anytime", available: false },
      { feature: "50% Off Select Drinks", available: false },
      { feature: "Use of Total Body Enhancement", available: false },
      { feature: "Equipment reservation", available: false },
      { feature: "Personal Dietician", available: false },
      { feature: "Personal Trainer", available: false },
      { feature: "50% Off Select Drinks", available: false },
      {
        feature: "Premium Perks: Partner Rewards & Discounts",
        available: false,
      },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "Unlimited Access to Home Club", available: true },
      { feature: "Free Fitness Training", available: true },
      { feature: "Perks: Partner Rewards & Discounts", available: true },
      { feature: "Use of Massage Chairs", available: true },
      { feature: "Use of HydroMassage", available: true },
      { feature: "Bring a Guest Anytime", available: true },
      { feature: "50% Off Select Drinks", available: true },
      { feature: "Use of Total Body Enhancement", available: true },
      { feature: "Equipment reservation", available: true },
      { feature: "Personal Dietician", available: false },
      { feature: "Personal Trainer", available: false },
      { feature: "50% Off Select Drinks", available: false },
      {
        feature: "Premium Perks: Partner Rewards & Discounts",
        available: false,
      },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "Unlimited Access to Home Club", available: true },
      { feature: "Free Fitness Training", available: true },
      { feature: "Perks: Partner Rewards & Discounts", available: true },
      { feature: "Use of Massage Chairs", available: true },
      { feature: "Use of HydroMassage", available: true },
      { feature: "Bring a Guest Anytime", available: true },
      { feature: "50% Off Select Drinks", available: true },
      { feature: "Use of Total Body Enhancement", available: true },
      { feature: "Equipment reservation", available: true },
      { feature: "Personal Dietician", available: true },
      { feature: "Personal Trainer", available: true },
      { feature: "50% Off Select Drinks", available: true },
      {
        feature: "Premium Perks: Partner Rewards & Discounts",
        available: true,
      },
    ],
  },
];

const Trainer1 = require("./images/trainer1.jpg");
const Trainer2 = require("./images/trainer2.jpg");
const Trainer3 = require("./images/trainer3.jpg");
const Trainer4 = require("./images/trainer4.jpg");
const Trainer5 = require("./images/trainer5.jpg");
const Trainer6 = require("./images/trainer6.jpg");

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Daniel vinyo",
    job: "Speed Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];
