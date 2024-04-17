<?php

namespace App\Http\Controllers;

use App\Models\Teszt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TesztController extends Controller
{
    public function index(){
        $tesztek = response()->json(Teszt::all());
        return ($tesztek);       
    }

    public function show($id){
        $tesztek = response()->json(Teszt::all()->where('kategoriaId','==',$id));
        return $tesztek;
    }
}
