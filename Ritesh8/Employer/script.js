const baseURL = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';
let currentPage = 1;


function fetchData() {
  const page = currentPage;
  const limit = 10;
  const department = document.getElementById('department-filter').value;
  const gender = document.getElementById('gender-filter').value;
  const sort = document.getElementById('sort').value;
  
  let url = `${baseURL}?page=${page}&limit=${limit}`;
  
  if (department) url += `&filterBy=department&filterValue=${department}`;
  if (gender) url += `&filterBy=gender&filterValue=${gender}`;
  if (sort) url += `&sort=salary&order=${sort}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
  const tableBody = document.getElementById('employee-data');
  tableBody.innerHTML = '';

  data.forEach((employee, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.gender}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
    `;
  });
}

function updatePagination() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const pageInfo = document.getElementById('page-info');

  prevBtn.disabled = currentPage === 1;
  
  pageInfo.textContent = `Page ${currentPage}`;
}

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchData();
    updatePagination();
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentPage++;
  fetchData();
  updatePagination();
});

document.getElementById('department-filter').addEventListener('change', () => {
  currentPage = 1;
  fetchData();
  updatePagination();
});

document.getElementById('gender-filter').addEventListener('change', () => {
  currentPage = 1;
  fetchData();
  updatePagination();
});

document.getElementById('sort').addEventListener('change', () => {
  currentPage = 1;
  fetchData();
  updatePagination();
});

fetchData();
