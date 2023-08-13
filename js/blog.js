let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-project-name").value;
  let startDate = document.getElementById("input-blog-start-date").value;
  let endDate = document.getElementById("input-blog-end-date").value;
  let content = document.getElementById("input-blog-desc").value;
  let image = document.getElementById("input-blog-image").files;
  let input = document.querySelectorAll(".checkbox:checked");

  image = URL.createObjectURL(image[0]);
  console.log(image);

  const nodeJsIcon = '<i class="fa-brands fa-node"></i>';
  const reactIcon = '<i class="fa-brands fa-square-js"></i>';
  const javaIcon = '<i class="fa-brands fa-react"></i>';
  const vueIcon = '<i class="fa-brands fa-vuejs"></i>';

  let nodeJs = document.getElementById("nodeJs").checked ? nodeJsIcon : "";
  let nextJs = document.getElementById("nextJs").checked ? reactIcon : "";
  let reactJs = document.getElementById("reactJs").checked ? javaIcon : "";
  let vueJs = document.getElementById("vueJs").checked ? vueIcon : "";

  let multiInput = document.querySelectorAll(".checkbox:checked");
  if (multiInput.length === 0) {
    return alert("Please Select At least One Technologies");
  }

  let start = new Date(startDate);
  let end = new Date(endDate);

  if (start > end) {
    return alert("You Fill End Date Before Start Date");
  }

  let difference = end.getTime() - start.getTime();
  let days = difference / (1000 * 3600 * 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(weeks / 4);
  let years = Math.floor(months / 12);
  let duration = {};

  if (days > 0) {
    duration = days + " Hari";
  }
  if (weeks > 0) {
    duration = weeks + " Minggu";
  }
  if (months > 0) {
    duration = months + " Bulan";
  }
  if (years > 0) {
    duration = years + " Tahun";
  }

  let blog = {
    title,
    duration,
    content,
    image,
    nodeJs,
    nextJs,
    reactJs,
    vueJs,
  };

  dataBlog.push(blog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";
  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
                <div class="container-card">
                    <div class="card-content">
                        <img src="${dataBlog[index].image}" alt="gambar">
                        <h1>
                            <a href="blog-detail.html" target="_blank">
                            ${dataBlog[index].title}
                            </a>
                        </h1>
                        <p>durasi : ${dataBlog[index].duration}</p>
                        <div id="container-desc">
                        <p>${dataBlog[index].content}</p>
                        </div>
                        <div>
                        ${dataBlog[index].nodeJs}
                        ${dataBlog[index].nextJs}
                        ${dataBlog[index].reactJs}
                        ${dataBlog[index].vueJs}
                        </div>
                        <div class="ctn-btn">
                            <div class="btn-left">
                                <button>edit</button>
                            </div>
                            <div class="btn-right">
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
  }
}
