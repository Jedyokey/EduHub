import gallery_1 from "./assets/gallery-1.png";
import gallery_2 from "./assets/gallery-2.png";
import gallery_3 from "./assets/gallery-3.png";
import facility_4 from "./assets/facility-4.jpeg"
import campus_1 from "./assets/campus-1.jpeg"
import campus_2 from "./assets/campus-2.jpeg"
import background_3 from "./assets/background-3.jpeg"
import student_life_1 from "./assets/student-life-1.webp"
import student_life_3 from "./assets/student-life-3.webp"


export const coursesData = [
    {
      id: 1,
      title: "Photoshop CC 2017",
      description:
        "Learn the basics and advanced techniques of Photoshop to elevate your design skills.",
      image: gallery_1,
      professor: { 
        name: "Jane Doe", 
        title: "Professor", 
        image: background_3
      },
      rating: 4.5,
      likes: 19,
      students: 59,
    },
    {
      id: 2,
      title: "Illustrator CC 2017",
      description:
        "Master Illustrator tools to create stunning vector graphics and artwork.",
      image: gallery_2,
      professor: { 
        name: "Derek Spafford", 
        title: "Professor", 
        image: student_life_3
      },
      rating: 4.8,
      likes: 25,
      students: 75,
    },
    {
      id: 3,
      title: "Indesign CC 2017",
      description:
        "Dive into the world of InDesign for professional layouts and publishing projects.",
      image: gallery_3,
      professor: { 
        name: "Sarah Lee", 
        title: "Professor", 
        image: student_life_1
      },
      rating: 4.6,
      likes: 30,
      students: 45,
    },
  ];

export const cardData = [
    {
      image: campus_2, 
      title: 'Learn English in ease',
      date: '25 Jun 2025',
      views: 59,
      likes: 19,
      description: 'There are many variations of passages of Lorem Ipsum...',
    },
    {
      image: facility_4,
      title: 'Learn English in ease',
      date: '25 Jun 2025',
      views: 89,
      likes: 39,
      description: 'There are many variations of passages of Lorem Ipsum...',
    },
    {
      image: campus_1,
      title: 'Learn English in ease',
      date: '25 Jun 2025',
      views: 79,
      likes: 49,
      description: 'There are many variations of passages of Lorem Ipsum...',
    },
  ];