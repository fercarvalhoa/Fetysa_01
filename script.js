// Variáveis para armazenar escolhas
let corEscolhida = "";
let glitterEscolhido = null;
let aromaEscolhido = "";
let embalagemEscolhida = "";

// Abrir personalização
function abrirPersonalizacao() {
  document.getElementById('personalizarGloss').classList.remove('oculto');
  document.getElementById('modelosProntos').classList.add('oculto');
  mostrarEtapa('etapa-cor');
}

// Mostrar modelos prontos
function mostrarModelosProntos() {
  document.getElementById('modelosProntos').classList.remove('oculto');
  document.getElementById('personalizarGloss').classList.add('oculto');
}

// Mostrar etapas
function mostrarEtapa(id) {
  const etapas = document.querySelectorAll('.etapa');
  etapas.forEach(etapa => etapa.classList.add('oculto'));
  document.getElementById(id).classList.remove('oculto');
}

// Etapas da personalização
function selecionarCor(cor) {
  corEscolhida = cor;
  mostrarEtapa('etapa-glitter');
}

function selecionarGlitter(opcao) {
  glitterEscolhido = opcao;
  mostrarEtapa('etapa-aroma');
}

function selecionarAroma(aroma) {
  aromaEscolhido = aroma;
  mostrarEtapa('etapa-embalagem');
}

function selecionarEmbalagem(tipo) {
  embalagemEscolhida = tipo;
  mostrarEtapa('etapa-final');
}

// Finalizar pedido
function finalizarPedido() {
  if (!corEscolhida || glitterEscolhido === null || !aromaEscolhido || !embalagemEscolhida) {
    alert("Por favor, preencha todas as etapas antes de finalizar a compra.");
    return;
  }

  let resumo = `Resumo do seu gloss personalizado:\n\n` +
               `Cor: ${corEscolhida}\n` +
               `Glitter: ${glitterEscolhido ? "Sim" : "Não"}\n` +
               `Aroma: ${aromaEscolhido}\n` +
               `Embalagem: ${embalagemEscolhida}`;

  alert(resumo + "\n\nObrigado por comprar com a FETYSA Makeup!");

  // Resetar variáveis e esconder seção
  corEscolhida = "";
  glitterEscolhido = null;
  aromaEscolhido = "";
  embalagemEscolhida = "";

  document.getElementById('personalizarGloss').classList.add('oculto');
}
