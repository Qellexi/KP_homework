$(document).ready(function () {
  const $form = $('.js--form');
  const $input = $('.js--form__input');
  const $todosWrapper = $('.js--todos-wrapper');
  const $taskModal = $('#taskModal');
  const $modalTaskContent = $('#modalTaskContent');

  // Додавання нового завдання
  $form.on('submit', function (event) {
    event.preventDefault();
    const taskText = $input.val().trim();
    if (taskText) {
      const $newTask = $(`<li class="list-group-item todo-item">${taskText}</li>`);
      $todosWrapper.append($newTask);
      $input.val(''); // Очищення поля вводу
    }
  });

  // Відображення тексту завдання в модальному вікні
  $todosWrapper.on('click', '.todo-item', function () {
    const taskText = $(this).text();
    $modalTaskContent.text(taskText);
    $taskModal.modal('show');
  });
});
