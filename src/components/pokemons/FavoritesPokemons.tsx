import type {FavoritePokemon} from '@interfaces/favorite-pokemon';
import { createSignal, For } from 'solid-js';

const getLocalStoragePokemos = ():FavoritePokemon[] => {
    const pokemons = localStorage.getItem('favoritePokemons')
    console.log(pokemons);
    return pokemons ? JSON.parse(pokemons) : []
}

export const FavoritesPokemons = () => {

    const [favoritesPokemons, setFavoritesPokemons] = createSignal(getLocalStoragePokemos());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <h1>Favoritos</h1>
            
            <For each={favoritesPokemons()}>
                {(pokemon: FavoritePokemon) => (
                <div class="flex flex-col items-center">
                    {/* <img src={pokemon.image} alt={pokemon.name} class="w-20 h-20" /> */}
                    <p>{pokemon.name}</p>
                </div>
                )}
            </For>

        </div>
    )
}
