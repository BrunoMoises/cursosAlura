<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SeriesFormRequest;
use App\Models\Series;
use App\Repositories\SeriesRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SeriesController extends Controller
{
    public function __construct(private SeriesRepository $seriesRepository)
    {
    }

    public function index(Request $request)
    {
        $query = Series::query();
        if ($request->has('nome')) {
            $query->where('nome', $request->nome);
        }
        return $query->paginate(5);
    }

    public function store(SeriesFormRequest $request): JsonResponse
    {
        return response()->json($this->seriesRepository->add($request), 201);
    }

    public function show(int $series): JsonResponse
    {
        $seriesModel = Series::with('seasons.episodes')->find($series);
        if($seriesModel == null) {
            return response()->json(['message' => 'Series not found'], 404);
        }
        return response()->json($seriesModel,200);
    }

    public function update(Series $series, SeriesFormRequest $request): Series
    {
        $series->fill($request->all());
        $series->save();
        return $series;
    }

    public function destroy(int $series): Response
    {
        Series::destroy($series);
        return response()->noContent();
    }
}
