// src/lib/mock-data/testimonials.ts
export interface Testimonial {
  _id: string;
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    _id: "1",
    name: "John Doe",
    company: "Company A",
    image: "/src/assets/images/riyaz.jpg",
    testimonial: "This is a great testimonial!",
  },
  {
    _id: "2",
    name: "Jane Smith",
    company: "Company B",
    image: "/src/assets/images/kilian-peters.jpg",
    testimonial: "I'm very happy with the results.",
  },
    {
    _id: "3",
    name: "Sav",
    company: "Company C",
    image: "/src/assets/images/sav.png",
    testimonial: "I'm very happy with the results.",
  },
];
