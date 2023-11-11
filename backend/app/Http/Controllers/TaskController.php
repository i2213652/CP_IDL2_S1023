<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function getAll()
    {
        $tasks = Task::all();
        return $tasks;
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:100',
            'description' => 'nullable'
        ]);

        $task = Task::create($data);

        return response()->json(['task' => $task], 201);
    }

    public function getById($id)
    {
        $task = Task::find($id);

        return $task;
    }

    public function update($id, Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:100',
            'description' => 'string'
        ]);

        $task = Task::find($id);
        $task->update($data);

        return response()->json(['task' => $task]);
    }

    public function complete($id)
    {
        $task = Task::find($id);

        if ($task->completed) {
            $completed = false;
        } else {
            $completed = true;
        }

        $task->update(['completed' => $completed]);

        return response()->json(['task' => $task]);
    }

    public function destroy($id)
    {
        $task = Task::find($id);
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}
