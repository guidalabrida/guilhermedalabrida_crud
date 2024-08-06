document.getElementById("crudForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addPerson();
  });
  
  let people = [];
  
  function addPerson() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    
    if (name && age) {
      const person = { name, age };
      people.push(person);
      updateTable();
      document.getElementById("crudForm").reset();
    }
  }
  
  function updateTable() {
    const tbody = document.querySelector("#dataTable tbody");
    tbody.innerHTML = "";
    
    people.forEach((person, index) => {
      const tr = document.createElement("tr");
      
      tr.innerHTML = `
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td class="actions">
          <button class="edit" onclick="editPerson(${index})">Editar</button>
          <button onclick="deletePerson(${index})">Deletar</button>
        </td>
      `;
      
      tbody.appendChild(tr);
    });
  }
  
  function editPerson(index) {
    const person = people[index];
    document.getElementById("nameInput").value = person.name;
    document.getElementById("ageInput").value = person.age;
    deletePerson(index);
  }
  
  function deletePerson(index) {
    people.splice(index, 1);
    updateTable();
  }
  