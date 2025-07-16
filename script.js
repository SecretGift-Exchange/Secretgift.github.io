let names = [];

function addName() {
    const input = document.getElementById('name-input');
    const name = input.value.trim();
    if (name && !names.includes(name)) {
        names.push(name);
        updateNameList();
        input.value = '';
    }
}

function updateNameList() {
    const list = document.getElementById('name-list');
    list.innerHTML = '';
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        list.appendChild(li);
    });
}

function drawNames() {
    if (names.length < 2) {
        alert('Please add at least two unique names.');
        return;
    }

    const shuffled = [...names].sort(() => 0.5 - Math.random());
    const assignments = {};
    for (let i = 0; i < names.length; i++) {
        assignments[names[i]] = shuffled[i];
    }

    localStorage.setItem('assignments', JSON.stringify(assignments));
    window.location.href = 'draw.html';
}

window.onload = function() {
    const assignedName = document.getElementById('assigned-name');
    if (assignedName) {
        const assignments = JSON.parse(localStorage.getItem('assignments'));
        const name = prompt('Enter your name to see your assignment:');
        if (assignments && assignments[name]) {
            assignedName.textContent = assignments[name];
        } else {
            assignedName.textContent = 'Name not found or no assignment available.';
        }
    }
};
