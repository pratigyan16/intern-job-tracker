const form = document.getElementById('appForm');
const tableBody = document.querySelector('#appTable tbody');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    studentName: form.studentName.value,
    company: form.company.value,
    role: form.role.value,
    status: form.status.value
  };

  const res = await fetch('http://localhost:5000/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  form.reset();
  loadApplications();
});

async function loadApplications() {
  const res = await fetch('http://localhost:5000/api/applications');
  const apps = await res.json();

  tableBody.innerHTML = '';
  apps.forEach(app => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${app.studentName}</td>
      <td>${app.company}</td>
      <td>${app.role}</td>
      <td>${app.status}</td>
      <td>
        <button onclick="deleteApp('${app._id}')">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

async function deleteApp(id) {
  await fetch(`http://localhost:5000/api/applications/${id}`, {
    method: 'DELETE'
  });
  loadApplications();
}

// Load data on page load
loadApplications();
