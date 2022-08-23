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
        // alertMsgShow();
        alert("You have already select five players")
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
    if (inputValue < 0 || isNaN(inputValue)) {
        //getField.innerText = '0';
        document.getElementById('perPlayer').value = '';
        document.getElementById('managerCost').value = '';
        document.getElementById('coachCost').value = '';
        document.getElementById('totalPlayerCost').innerText = '0000';
        document.getElementById('totalCost').innerText = '0000';
        worngInputMsgShow();
    }
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
        getField.innerText = '0';
        alert("please select any player")
        //  worngInputMsgShow();
    }
    else if (newText <= 0) {
        getField.innerText = '0';
        console.log('po')
    }
    else {
        getField.innerText = newText;
        worngInputMsgClose();
    }
}



