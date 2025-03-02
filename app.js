document.addEventListener("DOMContentLoaded", () => {
  const eeveelutions = [
      { number: "#133", name: "Eevee", type: "Normal", creationDate: "1996", description: "Um Pokémon incrivelmente adaptável, capaz de evoluir para diferentes formas dependendo do ambiente." },
      { number: "#134", name: "Vaporeon", type: "Água", creationDate: "1996", description: "Tem a habilidade de se misturar com a água. Seu corpo fica invisível quando submerso." },
      { number: "#135", name: "Jolteon", type: "Elétrico", creationDate: "1996", description: "Seu corpo gera eletricidade estática, tornando-o rápido e perigoso para oponentes." },
      { number: "#136", name: "Flareon", type: "Fogo", creationDate: "1996", description: "Tem uma chama interna poderosa, permitindo-lhe aquecer seu corpo para temperaturas intensas." },
      { number: "#196", name: "Espeon", type: "Psíquico", creationDate: "2000", description: "Usa seus poderes psíquicos para prever o futuro e reagir antes do inimigo atacar." },
      { number: "#197", name: "Umbreon", type: "Sombrio", creationDate: "2000", description: "Brilha no escuro e é excelente em ataques furtivos durante a noite." },
      { number: "#470", name: "Leafeon", type: "Planta", creationDate: "2008", description: "Tem um aroma de folhas frescas e pode purificar o ar ao seu redor." },
      { number: "#471", name: "Glaceon", type: "Gelo", creationDate: "2008", description: "Pode resfriar o ar ao redor para criar neve e gelo instantaneamente." },
      { number: "#700", name: "Sylveon", type: "Fada", creationDate: "2013", description: "Usa seus laços para emitir ondas calmantes, deixando inimigos mais dóceis." }
  ];

  const linkPokedex = document.getElementById('link-pokedex');
  const pokedexSection = document.getElementById('pokedex-section');
  const eeveelutionsList = document.getElementById('eeveelutions-list');
  const pokemonDetails = document.getElementById('pokemon-details');
  const pokemonNumber = document.getElementById('pokemon-number');
  const pokemonName = document.getElementById('pokemon-name');
  const pokemonType = document.getElementById('pokemon-type');
  const pokemonCreation = document.getElementById('pokemon-creation');
  const pokemonDescription = document.getElementById('pokemon-description');

  // Exibir a Pokédex quando clicar no link
  linkPokedex.addEventListener('click', (event) => {
      event.preventDefault();
      pokedexSection.style.display = 'block';
  });

  // Criar a lista de Eeveelutions
  eeveelutionsList.innerHTML = ''; // Limpar antes de adicionar
  eeveelutions.forEach(eeveelution => {
      const eeveelutionDiv = document.createElement('div');
      eeveelutionDiv.textContent = `${eeveelution.number} - ${eeveelution.name}`;
      eeveelutionDiv.classList.add('pokemon-name');

      eeveelutionDiv.addEventListener('click', () => {
          pokemonNumber.textContent = eeveelution.number;
          pokemonName.textContent = eeveelution.name;
          pokemonType.textContent = eeveelution.type;
          pokemonCreation.textContent = eeveelution.creationDate;
          pokemonDescription.textContent = eeveelution.description;
          pokemonDetails.style.display = 'block';
      });

      eeveelutionsList.appendChild(eeveelutionDiv);
  });
});
// Função para mudar a foto de perfil
function changeProfilePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImage = document.getElementById("profile-image");
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Função para mudar o nome de usuário
function setUsernameFromInput() {
    const inputElement = document.getElementById("real-name-input");
    let realName = inputElement.value.trim();

    // Limita o nome a 15 caracteres, caso o usuário digite mais do que isso
    if (realName.length > 15) {
        realName = realName.substring(0, 15);  // Corta o nome para 15 caracteres
        inputElement.value = realName;  // Atualiza o valor do input
    }

    // Se o campo de nome real estiver vazio, mantém o nome da seleção
    if (realName === "") {
        const selectElement = document.getElementById("name-select");
        const selectedName = selectElement.value;
        document.getElementById("current-username").innerText = selectedName;
    } else {
        document.getElementById("current-username").innerText = realName;
    }
}

// Função para enviar uma mensagem no chat
function sendMessage() {
    const message = document.getElementById("chat-input").value;
    if (message) {
        const chatBox = document.getElementById("chat-box");
        const newMessage = document.createElement("p");
        newMessage.innerText = document.getElementById("current-username").innerText + ": " + message;
        chatBox.appendChild(newMessage);
        document.getElementById("chat-input").value = "";  // Limpa o campo de input
    }
}

// Função para detectar o pressionamento da tecla Enter
document.getElementById("chat-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede a quebra de linha
        sendMessage(); // Chama a função de enviar mensagem
    }
});

// Função para exibir e alterar o nome de usuário selecionado
function setUsername(username) {
    document.getElementById("current-username").innerText = username;
}

// Listener para o upload de imagem
document.getElementById("profile-photo").addEventListener("change", changeProfilePhoto);
// Armazenando no localStorage
localStorage.setItem('username', realName);
localStorage.setItem('profilePhoto', file);
