import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import PlusIcon from "../img/plus.png";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.State}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list"> Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={PlusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.PropTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.string.isRequired
};
