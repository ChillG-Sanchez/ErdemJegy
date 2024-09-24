import './style.css';

interface StudentGrade {
  name: string;
  grade: number;
}

const grades: StudentGrade[] = [];

const gradeInput = document.getElementById('gradeInput') as HTMLInputElement;
const nameInput = document.getElementById('nameInput') as HTMLInputElement;
const addButton = document.getElementById('addButton') as HTMLButtonElement;
const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const gradeList = document.getElementById('gradeList') as HTMLUListElement;

addButton.addEventListener('click', () => {
  const grade = parseInt(gradeInput.value);
  const name = nameInput.value;

  if (grade >= 1 && grade <= 5 && name) {
    grades.push({ name, grade });
    displayGrades(grades);
  }
});

searchInput.addEventListener('input', () => {
  const searchGrade = parseInt(searchInput.value);
  if (!isNaN(searchGrade)) {
    const filteredGrades = grades.filter(g => g.grade === searchGrade);
    displayGrades(filteredGrades);
  } else {
    displayGrades(grades);
  }
});

function displayGrades(grades: StudentGrade[]) {
  gradeList.innerHTML = '';
  grades.forEach(g => {
    const li = document.createElement('li');
    li.textContent = `${g.name}: ${g.grade}`;
    if (g.grade === 1) {
      li.style.border = '2px dashed red';
    }
    gradeList.appendChild(li);
  });
}