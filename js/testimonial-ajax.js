const testimonial = new Promise((resolve, reject) => {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", "https://api.npoint.io/4d9f15df10364f7904bd", true);

  ajax.onload = function () {
    if (ajax.status === 200) {
      resolve(JSON.parse(ajax.response));
    } else {
      reject("Error loading data");
    }
  };

  ajax.onerror = function () {
    reject("Network Error");
  };

  ajax.send();
});

async function showTestimonial() {
  try {
    const response = await testimonial;
    console.log(response);

    let testimonialForHtml = "";

    response.forEach(function (item) {
      testimonialForHtml += `<div class="testimonial">
                  <img src="${item.image}" class="profile-testimonial" />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
                </div>`;
    });

    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}
showTestimonial();



async function filterTestimonials(rating) {
  try {
    const response = await testimonial;
    let testimonialForHtml = "";

    const datafiltered = response.filter(function (data) {
      return data.rating === rating
    });

    if (datafiltered.length === 0) {
      testimonialForHtml = `<h3>Data not found !</h3>`;
    } else {
      datafiltered.forEach((data) => {
        testimonialForHtml += `<div class="testimonial">
                  <img src="${data.image}" class="profile-testimonial" />
                  <p class="quote">${data.quote}</p>
                  <p class="author">- ${data.author}</p>
                  <p class="author">${data.rating}<i class="fa-solid fa-star"></i></p>
                </div>`;
      });
    }
    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}
