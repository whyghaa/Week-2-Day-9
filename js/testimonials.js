// // Step :
// // - making class
// // - making object
// // - called it so it appears in browser using loop and innerHTML
// // - refactor the code so it implements inheritance AuthorTestimonial
// // - refactor the code so it implement encapsulation, use getter and settet(the key point is : encapsulation make app more secure by implementing restriction)
// // - refactor the code so it implement polymorphism by making class CompanyTestimonial and override get author(the key point is : polymorphism implement and overriding)
// // - refactor the code so it implement abstraction by making get testimonialHTML and get author throw error when children didn't use it

// class Testimonial {
//     #quote = "";
//     #image = "";
  
//     constructor(quote, image) {
//       this.#quote = quote;
//       this.#image = image;
//     }
  
//     get quote() {
//       return this.#quote;
//     }
  
//     get image() {
//       return this.#image;
//     }
  
//     // This is an abstract method that subclasses will implement
//     get author() {
//       throw new Error("getAuthor() method must be implemented.");
//     }
  
//     // This is a polymorphic method than can take any subclass of Testimonial
//     get testimonialHTML() {
//       return `
//           <div class="testimonial">
//               <img src="${this.image}" class="profile-testimonial" />
//               <p class="quote">
//                   ${this.quote}
//               </p>
//               <p class="author">- ${this.author}</p>
//           </div>
//       `;
//     }
//   }
  
//   class AuthorTestimonial extends Testimonial {
//     #author = "";
  
//     constructor(author, quote, image) {
//       super(quote, image);
//       this.#author = author;
//     }
  
//     get author() {
//       return this.#author;
//     }
//   }
  
//   class CompanyTestimonial extends Testimonial {
//     #company = "";
  
//     constructor(author, quote, image) {
//       super(quote, image);
//       this.#company = author;
//     }
  
//     get author() {
//       return this.#company + " Company";
//     }
//   }
  
//   const testimonial1 = new AuthorTestimonial(
//     "Rangga",
//     "NT dikit, Nggak Ngaruh",
//     "image/project-1.jpg",
//   );
  
//   const testimonial2 = new AuthorTestimonial(
//     "Reza",
//     "Santai dulu nggak sih",
//     "image/project-2.png",
//   );
  
//   const testimonial3 = new AuthorTestimonial(
//     "Rizki",
//     "selow nanti nyari",
//     "image/project-3.jpg",
//   );
  
//   let testimonialData = [testimonial1, testimonial2, testimonial3];
//   let testimonialHTML = "";
  
//   for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].testimonialHTML;
//   }
  
//   document.getElementById("testimonials").innerHTML = testimonialHTML;

const testimonialData = [
  {
    author: "Rangga",
    quote: "NT dikit, Nggak ngaruh!",
    image: "image/cyber.jpg",
    rating: 5,
  },
  {
    author: "Reza",
    quote: "No Face, No Case!",
    image: " image/cyber1.jpg",
    rating: 4,
  },
  {
    author: "Wendy",
    quote: "Yuk bisa yuk!",
    image: "image/cyber2.jpg",
    rating: 4,
  },
  {
    author: "Rizky",
    quote: "Minjem duit cepe besok di ganti",
    image: "image/cyber3.jpg",
    rating: 3,
  },
  {
    author: "Aqil",
    quote: "masa iyah sih!",
    image: "image/cyber4.jpg",
    rating: 2,
  },
  {
    author: "Fahmi",
    quote: "Kebiasaan jangan kaya gitu!",
    image: "image/cyber5.jpg",
    rating: 1,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
    <div class="testimonial">
      <img src="${item.image}" class="profile-testimonial" />
      <p class="quote">${item.quote}</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
    </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
      <div class="testimonial">
        <img src="${item.image}" class="profile-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
      </div>
      `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}