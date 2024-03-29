<x-layout title="Temporadas de {!! $series->nome !!}">
    @if($series->cover)<div class="text-center mb-3">
        <img
            style="height: 400px"
            src="{{ asset('storage/' . $series->cover) }}"
            alt="Capa da série"
            class="img-fluid"
        >
    </div>@endif
    <ul class="list-group">
        @foreach ($seasons as $season)
            <li class="list-group-item d-flex justify-content-between align-items-center btn-sn">
                <a href="{{ route('episodes.index', $season->id) }}">
                    Temporada {{ $season->number }}
                </a>
                <span class="badge bg-secondary">
                    {{ $season->numberOfWatchedEpisodes() }} /
                    {{ $season->episodes->count() }}
                </span>
            </li>
        @endforeach
    </ul>
</x-layout>
