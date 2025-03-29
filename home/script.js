let total = 0;

function addItem(name, price) {
    const summaryList = document.getElementById('summary-list');
    const totalElement = document.getElementById('total');

    // Adiciona o item ao resumo
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - R$ ${price.toFixed(2)}`;
    summaryList.appendChild(listItem);

    // Atualiza o total
    total += price;
    totalElement.textContent = total.toFixed(2);
}

function confirmConsumption() {
    if (total > 0) {
        alert(`Consumo confirmado! Total: R$ ${total.toFixed(2)}`);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    } else {
        alert('Nenhum item foi consumido.');
    }
}