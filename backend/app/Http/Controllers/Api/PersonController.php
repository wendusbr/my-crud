<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use DB;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index(): JsonResponse{
        $persons = Person::orderBy('id', 'ASC')->get();

        return response()->json([
            'status' => true,
            'persons' => $persons
        ], 200);
    }

    public function show(Person $person): JsonResponse{
        return response()->json([
            'status' => true,
            'person' => $person
        ], 200);
    }

    public function store(Request $request): JsonResponse{
        DB::beginTransaction();

        try {
            $person = Person::create($request->all());

            DB::commit();

            return response()->json([
                'status'=> true,
                'person'=> $person,
                'message'=>'Pessoa cadastrada com sucesso!'
            ], 201);
        }
        catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'status'=> false,
                'message'=> 'Pessoa não cadastrada.',
                'error'=> $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request, Person $person): JsonResponse{
        DB::beginTransaction();

        try {
            $person->update($request->all());

            DB::commit();

            return response()->json([
                'status'=> true,
                'person'=> $person,
                'message'=> 'Pessoa editada com sucesso!'
            ], 200);
        }
        catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'status'=> false,
                'message'=> 'Pessoa não editada.',
                'error'=> $e->getMessage()
            ], 400);
        }
    }

    public function destroy(Person $person): JsonResponse{
        try{
            $person->delete();

            return response()->json([
                'status'=> true,
                'person'=> $person,
                'message'=> 'Pessoa deletada com sucesso!'
            ], 200);
        }
        catch(Exception $e) {
            return response()->json([
                'status'=> false,
                'message'=> 'Pessoa não deletada.',
                'error'=> $e->getMessage()
            ], 400);
        }
    }
}
