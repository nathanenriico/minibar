let consumption = [];

function addItem(name, price) {
    consumption.push({ name, price });
    updateSummary();
}

function updateSummary() {
    let summaryList = document.getElementById("summary-list");
    let totalElement = document.getElementById("total");
    summaryList.innerHTML = "";
    let total = 0;
    
    consumption.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button onclick="removeItem(${index})">Remover</button>`;
        summaryList.appendChild(li);
        total += item.price;
    });
    
    totalElement.textContent = total.toFixed(2);
}

function removeItem(index) {
    consumption.splice(index, 1);
    updateSummary();
}

function confirmConsumption() {
    const apartmentNumber = document.getElementById("apartment-number").value.trim();
    if (!apartmentNumber) {
        alert("Por favor, insira o número do apartamento.");
        return;
    }
    
    if (consumption.length === 0) {
        alert("Adicione itens antes de confirmar o consumo.");
        return;
    }
    
    let popup = document.getElementById("popup");
    let popupList = document.getElementById("popup-list");
    let popupTotal = document.getElementById("popup-total");
    let popupApartment = document.getElementById("popup-apartment");

    popupList.innerHTML = "";
    let total = 0;
    
    consumption.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button onclick="removeItem(${index}); confirmConsumption();">Remover</button>`;
        popupList.appendChild(li);
        total += item.price;
    });
    
    popupTotal.textContent = total.toFixed(2);
    popupApartment.textContent = apartmentNumber;
    popup.style.display = "block";
}

function openEditMode() {
    document.getElementById("popup").style.display = "none";
}

function finalizeConsumption() {
    const apartmentNumber = document.getElementById("apartment-number").value.trim();
    const message = `Consumo confirmado! Apartamento: ${apartmentNumber}\nItens: ${consumption.map(item => `${item.name} - R$ ${item.price.toFixed(2)}`).join("\n")}`;
    
    const whatsappURL = `https://wa.me/5511941716617?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    consumption = [];
    updateSummary();
    closePopup();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
