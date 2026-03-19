<?php

namespace App\Http\Controllers;

use App\Models\Personnel;
use Illuminate\Http\Request;

class PersonnelController extends Controller
{
    public function index() {
        return Personnel::all();
    }

    public function store(Request $request) {
        $request->validate([
            'name'=>'required',
            'email'=>'required|email',
            'phone'=>'required'
        ]);
        return Personnel::create($request->all());
    }

    public function show(Personnel $personnel) {
        return $personnel;
    }

    public function update(Request $request, Personnel $personnel) {
        $request->validate([
            'name'=>'required',
            'email'=>'required|email|unique:personnels,email,'.$personnel->id,
            'phone'=>'required'
        ]);
        $personnel->update($request->all());
        return $personnel;
    }

    public function destroy(Personnel $personnel) {
        $personnel->delete();
        return response()->noContent();
    }
}
