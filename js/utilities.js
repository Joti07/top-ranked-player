function getPlaayerName(elementId) {
    const playerName = document.getElementById(elementId).innerText;
    return playerName;
}

function alertMsgShow() {
    const element = document.getElementById('alertMsg');
    element.classList.remove('hidden');
}

function alertMsgClose() {
    const element = document.getElementById('alertMsg');
    element.classList.add('hidden');
}

function setPlayerName(playerName, btnId) {
    const playerNumber = document.querySelectorAll('#playerList li');
    if (playerNumber.length <= 4) {
        const msgElementt = document.getElementById('noPlayerListMsg');
        msgElementt.classList.add('hidden');
        const ul = document.getElementById('playerList');
        const li = document.createElement('li');
        li.innerText = playerName;
        ul.appendChild(li);
        const btnDisable = document.getElementById(btnId);
        btnDisable.classList.remove('buton-color', 'hover:bg-blue-900');
        btnDisable.classList.add('cursor-not-allowed', 'bg-gray-500');
        btnDisable.disabled = 'true';
    }
    else {
        alertMsgShow();
    }
}

function worngInputMsgShow() {
    const element = document.getElementById('worngInputMsg');
    element.classList.remove('hidden');
}

function worngInputMsgClose() {
    const element = document.getElementById('worngInputMsg');
    element.classList.add('hidden');
}

function getValueFromInputField(inputId) {
    const valueString = document.getElementById(inputId).value;
    const inputValue = parseFloat(valueString);
    return inputValue;
}

function getValueFromTextField(inputId) {
    const valueString = document.getElementById(inputId).innerText;
    const inputValue = parseFloat(valueString);
    return inputValue;
}

function setValueInTextField(inputId, newText) {
    let getField = document.getElementById(inputId);
    if (isNaN(newText)) {
        getField.innerText = '0000';
        worngInputMsgShow();
    }
    else if (newText === 0) {
        getField.innerText = '0000';
    }
    else {
        getField.innerText = newText;
        worngInputMsgClose();
    }
}






// selectedPlayer
function getPlaayerName(elementId) {
    const playerName = document.getElementById(elementId).innerText;
    return playerName;
}

function alertMsgShow() {
    const element = document.getElementById('alertMsg');
    element.classList.remove('hidden');
}

function alertMsgClose() {
    const element = document.getElementById('alertMsg');
    element.classList.add('hidden');
}

function setPlayerName(playerName, btnId) {
    const playerNumber = document.querySelectorAll('#playerList li');
    if (playerNumber.length <= 4) {
        const msgElementt = document.getElementById('noPlayerMsg');
        msgElementt.classList.add('hidden');
        const ul = document.getElementById('playerList');
        const li = document.createElement('li');
        li.innerText = playerName;
        ul.appendChild(li);
        const btnDisable = document.getElementById(btnId);
        btnDisable.classList.remove('buton-color', 'hover:bg-blue-900');
        btnDisable.classList.add('cursor-not-allowed', 'bg-gray-500');
        btnDisable.disabled = 'true';
    }
    else {
        alertMsgShow();
    }
}

function worngInputMsgShow() {
    const element = document.getElementById('worngInputMsg');
    element.classList.remove('hidden');
}

function worngInputMsgClose() {
    const element = document.getElementById('worngInputMsg');
    element.classList.add('hidden');
}

function getValueFromInputField(inputId) {
    const valueString = document.getElementById(inputId).value;
    const inputValue = parseFloat(valueString);
    return inputValue;
}

function getValueFromTextField(inputId) {
    const valueString = document.getElementById(inputId).innerText;
    const inputValue = parseFloat(valueString);
    return inputValue;
}

function setValueInTextField(inputId, newText) {
    let getField = document.getElementById(inputId);
    if (isNaN(newText)) {
        getField.innerText = '0000';
        worngInputMsgShow();
    }
    else if (newText === 0) {
        getField.innerText = '0000';
    }
    else {
        getField.innerText = newText;
        worngInputMsgClose();
    }
}

//////budget
document.getElementById('calculateBtn').addEventListener('click', function () {
    const perPlayerCost = getValueFromInputField('perPlayer');
    const playerNumber = document.querySelectorAll('#playerList li');
    const totalPlayerCost = playerNumber.length * perPlayerCost;
    setValueInTextField('totalPlayerCost', totalPlayerCost);
})

document.getElementById('totalCostBtn').addEventListener('click', function () {
    const totalPlayerCost = getValueFromTextField('totalPlayerCost');
    const managerCost = getValueFromInputField('managerCost');
    const coachCost = getValueFromInputField('coachCost');
    const totalCost = totalPlayerCost + managerCost + coachCost;
    setValueInTextField('totalCost', totalCost);
})

document.getElementById('worrningClose').addEventListener('click', function () {
    worngInputMsgClose();
})