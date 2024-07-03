import CreateTaskForm from '@/components/shared/CreateTaskForm'
import TasksContainer from '@/components/shared/TasksContainer'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <CreateTaskForm />
        <TasksContainer />
    </div>
  )
}

export default HomePage