// script.js

let etapaAtual = 0;
const etapas = [
  "etapa-cor",
  "etapa-glitter",
  "etapa-aroma",
  "etapa-embalagem",
  "etapa-final"
];

const carrinho = [];
const desejos = [];

function abrirPersonalizacao() {
  document.getElementById("personalizacao").classList.remove("oculto");
  mostrarEtapa(0);
}

function mostrarEtapa(index) {
  etapas.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("oculto", i !== index);
  });
  etapaAtual = index;
}

let glossPersonalizado = {
  cor: "",
  glitter: null,
  aroma: "",
  embalagem: ""
};

function selecionarCor(cor) {
  glossPersonalizado.cor = cor;
  mostrarEtapa(1);
}

function selecionarGlitter(glitter) {
  glossPersonalizado.glitter = glitter;
  mostrarEtapa(2);
}

function selecionarAroma(aroma) {
  glossPersonalizado.aroma = aroma;
  mostrarEtapa(3);
}

function selecionarEmbalagem(embalagem) {
  glossPersonalizado.embalagem = embalagem;
  mostrarEtapa(4);
}

function finalizarPedido() {
  const nome = `Gloss Personalizado - ${glossPersonalizado.cor}, ${glossPersonalizado.glitter ? 'com glitter' : 'sem glitter'}, ${glossPersonalizado.aroma}, embalagem ${glossPersonalizado.embalagem}`;
  adicionarAoCarrinho(nome, 39.90);
  document.getElementById("personalizacao").classList.add("oculto");
}

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
  abrirCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("carrinho-itens");
  if (!lista) return;
  lista.innerHTML = "";
  let total = 0;
  carrinho.forEach((item, index) => {
    total += item.preco;
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => {
      carrinho.splice(index, 1);
      atualizarCarrinho();
    };
    li.appendChild(btnRemover);
    lista.appendChild(li);
  });
  const subtotal = document.getElementById("subtotal");
  const totalElem = document.getElementById("total");
  if (subtotal) subtotal.textContent = `R$ ${total.toFixed(2)}`;
  if (totalElem) totalElem.textContent = `R$ ${total.toFixed(2)}`;
}

function abrirCarrinho() {
  document.getElementById("carrinho-lateral")?.classList.add("aberta");
}

function fecharCarrinho() {
  document.getElementById("carrinho-lateral")?.classList.remove("aberta");
}

function adicionarAosDesejos(nome) {
  desejos.push(nome);
  atualizarDesejos();
  abrirDesejos();
}

function atualizarDesejos() {
  const lista = document.getElementById("desejos-itens");
  if (!lista) return;
  lista.innerHTML = "";
  desejos.forEach((nome, index) => {
    const li = document.createElement("li");
    li.textContent = nome;
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => {
      desejos.splice(index, 1);
      atualizarDesejos();
    };
    li.appendChild(btnRemover);
    lista.appendChild(li);
  });
}

function abrirDesejos() {
  document.getElementById("desejos-lateral")?.classList.add("aberta");
}

function fecharDesejos() {
  document.getElementById("desejos-lateral")?.classList.remove("aberta");
}

function filtrarGloss() {
  const campo = document.getElementById("campoBusca");
  if (!campo) return;
  const termo = campo.value.toLowerCase();
  document.querySelectorAll(".produto").forEach(produto => {
    const nome = produto.querySelector("h3")?.textContent.toLowerCase() || "";
    produto.style.display = nome.includes(termo) ? "block" : "none";
  });
}

function finalizarCompra() {
  alert("Compra finalizada com sucesso!");
  carrinho.length = 0;
  atualizarCarrinho();
  fecharCarrinho();
}
