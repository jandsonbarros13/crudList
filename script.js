let btn = document.getElementById("btn");

async function adicionar() {
  try {
    let valor = document.getElementById("valor").value;
    let itemLista = document.createElement("li");
    let lista = document.getElementById("lista");
    lista.appendChild(itemLista);

    let edicao = document.createElement("input");
    edicao.type = "text";
    edicao.value = valor;
    edicao.style.display = "none";
    lista.appendChild(edicao);

    let excluir = document.createElement("button");
    let editar = document.createElement('button');
    editar.innerText = "Editar";
    lista.appendChild(editar);

    editar.addEventListener("click", () => {
      itemLista.style.display = "none";
      edicao.style.display = "inline";
    });

    let confirmar = document.createElement("button");
    confirmar.innerText = "Confirmar";
    lista.appendChild(confirmar);

    confirmar.addEventListener("click", () => {
      let novoValor = edicao.value;
      if (novoValor === '') {
        itemLista.classList.add("Confirmar")
        confirmar.innerText = "Concluida"
      } else {
        itemLista.innerText = novoValor
      }
      itemLista.style.display = "inline";
      edicao.style.display = "none";
    });

    excluir.innerText = "Excluir";
    excluir.addEventListener("click", () => {
      itemLista.remove();
      excluir.remove();
      editar.remove();
      confirmar.remove();
      edicao.remove();
      excluir.remove();
    });
    lista.appendChild(excluir);
    if (valor === '') {
      throw new Error("Erro: digite um valor");
    }
    itemLista.innerHTML = `${await valor}<br>`;
    document.getElementById("valor").value = "";
  } catch (e) {
    alert(e.message);
  }
}

btn.addEventListener("click", adicionar);
