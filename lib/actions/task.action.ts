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
    const tasks = await Task.find({isPending: true});
    return JSON.parse(JSON.stringify(tasks.reverse()));
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


export const markComplete = async (id: string) => {
  try {
    await connectToDatabase();
    const completedTask = await Task.findByIdAndUpdate(
      id,
      { isCompleted: true, isPending: false },
      { new: true } // To return the updated document
    );
    revalidatePath("/");
  } catch (error) {
    handleError(error);
  }
};

export const markIncomplete = async (id: string) => {
  try {
    await connectToDatabase();
    const completedTask = await Task.findByIdAndUpdate(
      id,
      { isCompleted: false, isPending: true },
      { new: true } // To return the updated document
    );
    revalidatePath("/");
  } catch (error) {
    handleError(error);
  }
};




export const getCompletedTasks = async () => {
  try {
    await connectToDatabase();
    const tasks = await Task.find({isCompleted: true});
    return JSON.parse(JSON.stringify(tasks.reverse()));
  } catch (error) {
    handleError(error);
  }
};
