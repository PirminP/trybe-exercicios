function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();
  
//1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

//2
function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-holiday';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;
    buttonContainer.appendChild(newButton);
};
createHolidayButton('Feriados');

//3
function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'blue';
  
    getHolidayButton.addEventListener('click', function() {
      for (let i = 0; i < getHolidays.length; i += 1) {
        if (getHolidays[i].style.backgroundColor === setNewColor) {
          getHolidays[i].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[i].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();

  //4
  function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;
    buttonContainer.appendChild(newButton);
  };
  
  createFridayButton('Sexta-feira');

  //5
  function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== newFridayText) {
          fridays[i].innerHTML = newFridayText;
      } else {
          fridays[i].innerHTML = fridaysArray[i];
        }
      }
    })
  };
  
  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);

  //6
  function dayMouseOver() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();

  //7
  function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  };
  
  newTaskSpan('Projeto:');

  //8
  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');
