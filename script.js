// Get the containers and reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetBtn = document.getElementById('resetBtn');
const image1 = document.getElementById('image1');

// Add event listeners for drag and drop
container1.addEventListener('dragstart', dragStart);
container2.addEventListener('dragstart', dragStart);
container1.addEventListener('dragover', dragOver);
container1.addEventListener('dragenter', dragEnter);
container1.addEventListener('dragleave', dragLeave);
container1.addEventListener('drop', drop);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);
resetBtn.addEventListener('click', reset);

// Function to handle drag start event
function dragStart(e) {
  // Add 'dragged' class to the item being dragged
  e.target.classList.add('dragged');
}

// Function to handle drag over event
function dragOver(e) {
  // Prevent default to allow drop
  e.preventDefault();
}

// Function to handle drag enter event
function dragEnter(e) {
  // Add 'drag-over' class to the container being entered
  e.target.classList.add('drag-over');
}

// Function to handle drag leave event
function dragLeave(e) {
  // Remove 'drag-over' class from the container being left
  e.target.classList.remove('drag-over');
}

// Function to handle drop event
function drop(e) {
  // Remove 'drag-over' class from the container
  e.target.classList.remove('drag-over');

  // Move the dragged item to the dropped container
  const draggedItem = document.querySelector('.dragged');
  const parentContainer = draggedItem.parentElement;

  // Check if the parent container is the same as the drop container
  if (parentContainer === e.target) {
    // If the parent container is the same, do nothing
    return;
  }

  // Remove the dragged item from the parent container
  parentContainer.removeChild(draggedItem);

  // Append the dragged item to the drop container
  e.target.appendChild(draggedItem);

  // Remove the 'dragged' class from the dragged item
  draggedItem.classList.remove('dragged');

  // Remove success message from container2
  const successMsgContainer2 = container2.querySelector('.success-msg');
  if (successMsgContainer2) {
    successMsgContainer2.remove();
  }

  // Remove success message from container1
  const successMsgContainer1 = container1.querySelector('.success-msg');
  if (successMsgContainer1) {
    successMsgContainer1.remove();
  }

  // Add success message to the drop container
  const successMsgElement = document.createElement('p');
  successMsgElement.classList.add('success-msg');
  successMsgElement.textContent = 'Image dropped successfully!';
  e.target.appendChild(successMsgElement);
}

// Function to handle reset button click event
function reset() {
  // Move the image back to container1
  const image2 = container2.querySelector('img');
  if (image2) {
    container1.appendChild(image2);
  }

  // Remove success message from container2
  const successMsg = container2.querySelector('.success-msg');
  if (successMsg) {
    successMsg.remove();
  }
}
