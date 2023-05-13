let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

function enviarEmail(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os dados do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const subject = document.getElementById("text").value;
  const message = document.getElementById("txt-field").value;

  // Configura os parâmetros do email
  const parametros = {
    to_name: "Cassiano Watte",
    from_name: nome,
    from_email: email,
    from_number: number,
    from_subject: subject,
    message: message,
  };

  // Envia o email usando o EmailJS
  emailjs
    .send("service_adqucdb", "template_qs4nsvc", parametros)
    .then(function () {
      alert("Email enviado com sucesso!"); // Exibe uma mensagem de sucesso
      // Faça qualquer ação adicional necessária, como redirecionar para uma página de confirmação
    })
    .catch(function (erro) {
      console.error("Erro ao enviar o email:", erro); // Exibe o erro, se ocorrer
      alert(
        "Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde."
      );
    });
}

document.getElementById("contact-form").addEventListener("submit", enviarEmail);
