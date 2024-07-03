"use server";
import { CreateTaskProps } from "@/types";
import Task from "../database/models/task.model";
import { connectToDatabase } from "../database/mongoose";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";

export async function createTask(values: CreateTaskProps) {
  try {
    await connectToDatabase();
    const newTask = await Task.create({
      title: values.title,
      description: values.description,
      priority: values.priority,
    });
    revalidatePath("/dashboard");
    return JSON.parse(JSON.stringify(newTask));
  } catch (error) {
    handleError(error);
  }
}

export const getAllTasks = async () => {
  try {
    await connectToDatabase();
    const tasks = await Task.find();
    return JSON.parse(JSON.stringify(tasks.reverse()));
  } catch (error) {
    handleError(error);
  }
};

export const getSingleTask = async (id: string) => {
  try {
    await connectToDatabase();
    const task = await Task.findById(id);
    revalidatePath("/");
    return JSON.parse(JSON.stringify(task));
  } catch (error) {
    handleError(error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    await connectToDatabase();
    const toDeleteTask = await Task.findByIdAndDelete(id);
    revalidatePath("/");
  } catch (error) {
    handleError(error);
  }
};
