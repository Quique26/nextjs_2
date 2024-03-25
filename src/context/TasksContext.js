"use client"
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext)
    if(!context) throw new Error("useTasks must used within a provider")
    return context
}

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: " My first task",
            description: "Some task"            
        },
        {
            id: 2,
            title: " My second task",
            description: "Some second task"            
        },
        {
            id: 3,
            title: " My third task",
            description: "Some third task"            
        },
    ]);    
    
    const createTask = (title, description) =>
        setTasks([
            ...tasks, {
                id: uuid(),
                title,
                description
            },
        ]);

    const deleteTask = (id) =>
        setTasks([...tasks.filter((task) => task.id !== id)])

    return <TaskContext.Provider value={{tasks, createTask, deleteTask}}>{children}</TaskContext.Provider>
}