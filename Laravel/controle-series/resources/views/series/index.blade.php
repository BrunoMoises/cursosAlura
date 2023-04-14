<x-layout title="Series" :mensagem-sucesso="$mensagemSucesso">
    @auth
    <a href="{{ route('series.create') }}" class="btn btn-dark mb-2">Adicionar</a>
    @endauth

    <ul class="list-group">
        @foreach ($series as $serie)
            <li class="list-group-item d-flex justify-content-between align-items-center btn-sn">
                <div class="d-flex align-items-center">
                    <img
                        src="{{ asset('storage/' . $serie->cover) }}"
                        alt="Capa da série"
                        class="img-thumbnail me-3"
                        width="100"
                    >
                    @auth<a href="{{ route('seasons.index', $serie->id) }}">@endauth
                        {{ $serie->nome }}
                    @auth</a>@endauth
                @auth
                </div>
                <span class="d-flex">
                    <a href="{{ route('series.edit', $serie->id) }}" class="btn btn-primary">
                        E
                    </a>
                    <form action="{{ route('series.destroy', $serie->id) }}" method="post" class="ms-2">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-danger btn-sn">
                            X
                        </button>
                    </form>
                </span>
                @endauth
            </li>
        @endforeach
    </ul>
</x-layout>
