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

function sendEmail(event) {
  event.preventDefault(); //impede envio padrao de formulário
  const name = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const number = document.querySelector('input[name="number"]').value;
  const subject = document.querySelector('input[name="text"]').value;

  const parameters = {
    toName: "Seu Nome",
    fromName: name,
    fromEmail: email,
    fromNumber: number,
    fromSubject: subject,
  };
  // Envia o email usando o EmailJS
  emailjs
    .send("service_adqucdb", "template_m6wsxba", parameters)
    .then(function () {
      alert("Email enviado com sucesso!"); // Exibe uma mensagem de sucesso
      // Redireciona para uma página de confirmação, se desejar
      window.location.href = "confirmacao.html";
    })
    .catch(function (erro) {
      console.error("Erro ao enviar o email:", erro); // Exibe o erro, se ocorrer
      alert(
        "Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde."
      );
    });
}
