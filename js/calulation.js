// selectedPlayer
document.getElementById('playerBtn1').addEventListener('click', function () {
    const playerName = getPlaayerName('playerName1');
    setPlayerName(playerName, 'playerBtn1');
})

document.getElementById('playerBtn2').addEventListener('click', function () {
    const playerName = getPlaayerName('playerName2');
    setPlayerName(playerName, 'playerBtn2');
})

document.getElementById('playerBtn3').addEventListener('click', function () {
    const playerName = getPlaayerName('playerName3');
    setPlayerName(playerName, 'playerBtn3');
})

document.getElementById('playerBtn4').addEventListener('click', function () {
    const playerName = getPlaayerName('playerName4');
    setPlayerName(playerName, 'playerBtn4');
})

document.getElementById('playerBtn5').addEventListener('click', function () {
    const playerName = getPlaayerName('playerName5');
    setPlayerName(playerName, 'playerBtn5');
})

document.getElementById('playerBtn6').addEventListener('click', function () {
    const playerName = getPlaayerName('playerName6');
    setPlayerName(playerName, 'playerBtn6');
})


document.getElementsByClassName('alretClose')[0].addEventListener('click', function () {
    alertMsgClose();
})

document.getElementById('alretClose').addEventListener('click', function () {
    alertMsgClose();

})

//////budget
document.getElementById('calculateBtn').addEventListener('click', function () {
    const playerNumber = document.querySelectorAll('#playerList li');
    if (playerNumber.length == 0) {
        alert("please select any player")


    }
    else {
        const perPlayerCost = getValueFromInputField('perPlayer');



        const totalPlayerCost = playerNumber.length * perPlayerCost;
        setValueInTextField('totalPlayerCost', totalPlayerCost);

    }

})

document.getElementById('totalCostBtn').addEventListener('click', function () {
    const playerNumber = document.querySelectorAll('#playerList li');
    if (playerNumber.length == 0) {
        alert("please select any player")


    }
    else {
        const totalPlayerCost = getValueFromTextField('totalPlayerCost');
        const managerCost = getValueFromInputField('managerCost');
        const coachCost = getValueFromInputField('coachCost');
        const totalCost = totalPlayerCost + managerCost + coachCost;
        setValueInTextField('totalCost', totalCost);

    }

})

document.getElementById('worrningClose').addEventListener('click', function () {
    worngInputMsgClose();
})