<?php
class Position 
{    
    public $x;
    public $y;

    function __construct($y, $x) 
    {
        $this->x = $x;
        $this->y = $y;
    }
}