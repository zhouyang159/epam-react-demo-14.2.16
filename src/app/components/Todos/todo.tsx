"use client"

import {useEffect, useState} from "react";
import "./style.css";
import InputComponent from "@/app/components/InputComponent";
import axios from "axios";

type Todo = {
  id: string
  content: string
  finish: boolean
}

export default function Todos() {

  const [todos, setTodos] = useState(() => {

    return [
      // {
      //   id: "111",
      //   content: "下班去买菜",
      //   finish: true,
      // },
      // {
      //   id: "222",
      //   content: "to do some exercise after work",
      //   finish: false,
      // }
    ] as [Todo]
  });

  const deleteTodo = (deleteId: string) => {
    axios
      .delete('/api/todo?id=' + deleteId)
      .then(() => {
      fetchTodos()
    })
  }

  const addTodo = (content: string) => {
    let newTodo = {
      content,
      finish: false,
    }
    axios.post('/api/todo', newTodo)
      .then(() => {
        fetchTodos()
      })
  }

  const toggleFinish = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, finish: !todo.finish};
        }
        return todo;
      });
    });

    let putTodo = todos.find(todo => {
      if (todo.id == id) {
        return true;
      }
    })

    if (!putTodo) {
      return
    }

    putTodo = JSON.parse(JSON.stringify(putTodo)) as Todo
    putTodo.finish = !putTodo.finish

    axios
      .put('/api/todo',  putTodo)
      .then(() => {
        fetchTodos()
      })

  }

  const fetchTodos = () => {
    axios.get('/api/todo/all')
      .then((response) => {

        setTodos(response.data)
      })
  };

  useEffect(() => {
    fetchTodos()
  }, []);


  return (
    <div className="w-1/3">
      <h1 className="text-[26px] font-bold mb-6">Epam-todo-demo</h1>

      <InputComponent
        addTodo={addTodo}
      ></InputComponent>


      <div className="todos-container">
        {
          todos.map((todo: Todo, index: number) => {
            return <div
              className="todo-item"
              key={todo.id}
            >
              <div>
                <span className="font-bold mr-2">{index + 1}</span>
                <span
                  className={todo.finish ? "line-through cursor-pointer" : "cursor-pointer"}
                  onClick={() => {
                    toggleFinish(todo.id)
                  }}
                >
                {todo.content}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="font-bold"
              >
                X
              </button>
            </div>
          })
        }
      </div>
    </div>
  );
}
