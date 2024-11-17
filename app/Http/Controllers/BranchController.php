<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Str;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $branches = Branch::all();

        return Inertia::render('Branch', compact('branches'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'country' => 'required|string|max:150',
            'street' => 'required|string|max:150',
            'city' => 'required|string|max:150',
            'state' => 'required|string|max:100',
            'phone' => 'required|string|max:20',
            'zip_code' => 'string',
        ]);

        $branch_code = Str::random(3) . '-' . Str::random(3);

        Branch::create($validated + ['branch_code' => $branch_code]);

        return redirect(route('branches.index'))->with('success', 'Branch created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Branch $branch)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Branch $branch)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Branch $branch)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Branch $branch)
    {
        $branch->delete();

        return redirect()->back()->with('success', 'Branch deleted successfully');
    }
}
