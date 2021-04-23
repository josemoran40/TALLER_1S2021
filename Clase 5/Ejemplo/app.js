document.getElementById("formStudents").addEventListener("submit", saveStudent);

function saveStudent(e) {
  let name = document.getElementById("name").value;
  let dpi = document.getElementById("dpi").value;
  let email = document.getElementById("email").value;

  let student = {
    name,
    dpi,
    email,
  };

  if (localStorage.getItem("students") === null) {
    let students = [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
  } else {
    let students = JSON.parse(localStorage.getItem("students"));
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
  }

  getStudents();
  document.getElementById("formStudents").reset();
  e.preventDefault();
}

function deleteStudent(dpi) {
  let students = JSON.parse(localStorage.getItem("students"));
  for (let i = 0; i < students.length; i++) {
    if (students[i].dpi == dpi) {
      students.splice(i, 1);
    }
  }
  localStorage.setItem("students", JSON.stringify(students));
  getStudents();
}

function getStudents() {
  let students = JSON.parse(localStorage.getItem("students"));
  let studentsView = document.getElementById("students");
  studentsView.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    let name = students[i].name;
    let dpi = students[i].dpi;
    let email = students[i].email;

    studentsView.innerHTML += `
      <div class="card mb-2">
        <div class="row">
          <div class="col-md-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
              alt=""
              class="img-fluid p-2"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body text-center">
              <h4 class="card-title">Name: ${name}</h4>
              <p class="card-text">DPI: ${dpi}</p>
              <p class="card-text">Email: ${email}</p>
              <button
                class="btn btn-danger"
                onclick="deleteStudent('${dpi}')"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      `;
  }
}

getStudents();
