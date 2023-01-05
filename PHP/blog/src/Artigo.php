<?php

class Artigo
{
    private $mysql;

    public function __construct(mysqli $mysql)
    {
        $this->mysql = $mysql;
    }

    public function exibirTodos(): array
    {

        $resultado = $this->mysql->query('SELECT id, titulo, conteudo from artigos');
        $artigos = $resultado->fetch_all(MYSQLI_ASSOC);

        return $artigos;
    }

    public function encontrarPorId(string $id): array
    {

        $selecionaArtigo = $this->mysql->prepare("SELECT id, titulo, conteudo from artigos WHERE id = ?");
        $selecionaArtigo->bind_param('s', $id);
        $selecionaArtigo->execute();
        $selecionaArtigo->get_result()->fetch_assoc();
        $artigos = $selecionaArtigo->fetch_all(MYSQLI_ASSOC);

        return $artigos;
    }
}
