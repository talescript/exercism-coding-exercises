<?php

class PizzaPi
{
    public function calculateDoughRequirement($pizzas, $serving)
    {
        return $pizzas * (($serving * 20) + 200);
    }

    public function calculateSauceRequirement($pizzas, $can_volume)
    {
       return ($pizzas * 125) / $can_volume;
    }

    public function calculateCheeseCubeCoverage($cheese_dimension, $cheese_thickness, $pizza_diameter)
    {
        // var_dump(fpow(10, 2));
        return floor(($cheese_dimension ** 3) / ($cheese_thickness * pi() * $pizza_diameter));
    }

    public function calculateLeftOverSlices($pizzas, $friends)
    {
        return ($pizzas * 8) % $friends;
    }
}
