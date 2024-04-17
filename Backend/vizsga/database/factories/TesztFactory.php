<?php

namespace Database\Factories;

use App\Models\Kategoria;
use Illuminate\Database\Eloquent\Factories\Factory;

use function Ramsey\Uuid\v1;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teszt>
 */
class TesztFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'kerdes' =>fake('HU_hu')->sentence(6),
            'v1' =>fake('HU_hu')->word(),
            'v2' =>fake('HU_hu')->word(),
            'v3' =>fake('HU_hu')->word(),
            'v4' =>fake('HU_hu')->word(),
            'helyes' =>fake()->randomElement(['v1','v2','v3','v4']),
            'kategoriaId' =>fake()->randomElement(Kategoria::all())
        ];
    }
}
